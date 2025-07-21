/*! For license information please see chunk.166.dfdf5567a0f17d9b9a11.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[166],{24:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>u})
var n=r(336),a=r.n(n),o=r(670)
class u extends(a()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,o.A)(e[t]))return e[t]
return e[e.length-1]}}},88:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEqual})
var n=r(553)},230:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>n})},379:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>n})},456:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(670)
function a(e,t){return(0,n.A)(e)!==(0,n.A)(t)}},588:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>u})
var n=r(670),a=r(336),o=r.n(a)
class u extends(o()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,n.A)(e[t]))return e[t]
return e[e.length-1]}}},650:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>n})},651:(e,t,r)=>{"use strict"
function n(e,t){return e===t}r.r(t),r.d(t,{default:()=>n})},670:(e,t,r)=>{"use strict"
r.d(t,{A:()=>a})
var n=r(389)
function a(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,n.isArray)(e)?0!==e.length:!!e}},685:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>n})},692:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(670)
function a(...e){return e.every(e=>!(0,n.A)(e))}},707:function(e,t,r){var n,a
e=r.nmd(e),function o(u){var i=u,s=u.document
function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var c=c||{}
function d(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}c.version="4.10.3",void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a),"object"===l(e)&&e.exports&&"function"==typeof o.toString&&(c.source="("+o.toString()+')(typeof window === "object" ? window : this);',e.exports=c),"function"==typeof u.getComputedStyle&&(u.axe=c),d.prototype=Object.create(Error.prototype),d.prototype.constructor=d
var p=["node"],f=["relatedNodes"],D=["node"],m=["variant"],h=["matches"],g=["chromium"],v=["noImplicit"],b=["noPresentational"],y=["precision","format","inGamut"],F=["space"],w=["algorithm"],E=["method"],C=["maxDeltaE","deltaEMethod","steps","maxSteps"],x=["node"],A=["environmentData"],k=["environmentData"],N=["environmentData"],B=["environmentData"],T=["environmentData"]
function R(e,t,r){return t=_(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,S()?Reflect.construct(t,r||[],_(e).constructor):t.apply(e,r))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(S=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function P(e,t,r){j(e,t),t.set(e,r)}function I(e,t){j(e,t),t.add(e)}function j(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function L(e,t){return e.get(z(e,t))}function q(e,t,r){return e.set(z(e,t),r),r}function z(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}function V(e,t){if(null==e)return{}
var r,n,a=function(e,t){if(null==e)return{}
var r={}
for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue
r[n]=e[n]}return r}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function $(e){return function(e){if(Array.isArray(e))return te(e)}(e)||H(e)||ee(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(null,arguments)}function G(e,t){return Y(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,u,i=[],s=!0,l=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
s=!1}else for(;!(s=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw a}}return i}}(e,t)||ee(e,t)||W()}function W(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Y(e){if(Array.isArray(e))return e}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,J(n.key),n)}}function Z(e,t,r){return t&&X(e.prototype,t),r&&X(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function J(e){var t=function(e){if("object"!=l(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=l(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==l(t)?t:t+""}function Q(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=ee(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return u=e.done,e},e:function(e){i=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw o}}}}function ee(e,t){if(e){if("string"==typeof e)return te(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}function te(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}!function(e,t,o,_,j,X,te,re,ne,ae,oe){var ue=Object.create,ie=Object.defineProperty,se=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty,ce=Object.getOwnPropertyNames,de=Object.getOwnPropertyDescriptor,pe=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},fe=function(e,t){for(var r in t)ie(e,r,{get:t[r],enumerable:!0})},De=function(e){return function(e,t,r){if(t&&"object"===l(t)||"function"==typeof t){var n,a=Q(ce(t))
try{var o=function(){var a=n.value
le.call(e,a)||"default"===a||ie(e,a,{get:function(){return t[a]},enumerable:!(r=de(t,a))||r.enumerable})}
for(a.s();!(n=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}}return e}((t=ie(null!=e?ue(se(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),ie(t,"__esModule",{value:!0})),e)
var t},me=function(e,t,r){return function(e,t,r){t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r}(e,"symbol"!==l(t)?t+"":t,r),r},he=pe(function(e,t){"use strict"
t.exports=function(){}}),ge=pe(function(e,t){"use strict"
var r=he()()
t.exports=function(e){return e!==r&&null!==e}}),ve=pe(function(e,t){"use strict"
var r=ge(),n=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return n.call(arguments,function(e){r(e)&&function(e,t){var r
for(r in e)t[r]=e[r]}(Object(e),t)}),t}}),be=pe(function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}}),ye=pe(function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}}),Fe=pe(function(e,t){"use strict"
t.exports=be()()?Math.sign:ye()}),we=pe(function(e,t){"use strict"
var r=Fe(),n=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?r(e)*a(n(e)):e}}),Ee=pe(function(e,t){"use strict"
var r=we(),n=Math.max
t.exports=function(e){return n(0,r(e))}}),Ce=pe(function(e,t){"use strict"
var r=Ee()
t.exports=function(e,t,n){var a
return isNaN(e)?(a=t)>=0?n&&a?a-1:a:1:!1!==e&&r(e)}}),xe=pe(function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}}),Ae=pe(function(e,t){"use strict"
var r=ge()
t.exports=function(e){if(!r(e))throw new TypeError("Cannot use null or undefined")
return e}}),ke=pe(function(e,t){"use strict"
var r=xe(),n=Ae(),a=Function.prototype.bind,o=Function.prototype.call,u=Object.keys,i=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(n(s)),r(l),c=u(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,function(e,r){return i.call(s,e)?o.call(l,d,s[e],e,s,r):t})}}}),Ne=pe(function(e,t){"use strict"
t.exports=ke()("forEach")}),Be=pe(function(){}),Te=pe(function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}}),Re=pe(function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}}),Se=pe(function(e,t){"use strict"
var r=ge(),n=Object.keys
t.exports=function(e){return n(r(e)?Object(e):e)}}),_e=pe(function(e,t){"use strict"
t.exports=Re()()?Object.keys:Se()}),Oe=pe(function(e,t){"use strict"
var r=_e(),n=Ae(),a=Math.max
t.exports=function(e,t){var o,u,i,s=a(arguments.length,2)
for(e=Object(n(e)),i=function(r){try{e[r]=t[r]}catch(e){o||(o=e)}},u=1;u<s;++u)r(t=arguments[u]).forEach(i)
if(void 0!==o)throw o
return e}}),Me=pe(function(e,t){"use strict"
t.exports=Te()()?Object.assign:Oe()}),Pe=pe(function(e,t){"use strict"
var r=ge(),n={function:!0,object:!0}
t.exports=function(e){return r(e)&&n[l(e)]||!1}}),Ie=pe(function(e,t){"use strict"
var r=Me(),n=Pe(),a=ge(),o=Error.captureStackTrace
t.exports=function(e){var u=new Error(e),i=arguments[1],s=arguments[2]
return a(s)||n(i)&&(s=i,i=null),a(s)&&r(u,s),a(i)&&(u.code=i),o&&o(u,t.exports),u}}),je=pe(function(e,t){"use strict"
var r=Ae(),n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols
t.exports=function(e,t){var i,s=Object(r(t))
if(e=Object(r(e)),o(s).forEach(function(r){try{n(e,r,a(t,r))}catch(e){i=e}}),"function"==typeof u&&u(s).forEach(function(r){try{n(e,r,a(t,r))}catch(e){i=e}}),void 0!==i)throw i
return e}}),Le=pe(function(e,t){"use strict"
var r,n,a,o,u,i=Ee(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(r={configurable:!0,writable:!1,enumerable:!1},n=Object.defineProperty,t.exports=function(e,t){return t=i(t),e.length===t?e:(r.value=t,n(e,"length",r))}):(o=je(),u=[],a=function(e){var t,r=0
if(u[e])return u[e]
for(t=[];e--;)t.push("a"+(++r).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var r
if(t=i(t),e.length===t)return e
r=a(t)(e)
try{o(r,e)}catch(e){}return r})}),qe=pe(function(e,t){"use strict"
t.exports=function(e){return null!=e}}),ze=pe(function(e,t){"use strict"
var r=qe(),n={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!r(e)&&hasOwnProperty.call(n,l(e))}}),Ve=pe(function(e,t){"use strict"
var r=ze()
t.exports=function(e){if(!r(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}}),$e=pe(function(e,t){"use strict"
var r=Ve()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!r(e)}}),He=pe(function(e,t){"use strict"
var r=$e(),n=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!r(e)&&!n.test(a.call(e))}}),Ue=pe(function(e,t){"use strict"
var r="razdwatrzy"
t.exports=function(){return"function"==typeof r.contains&&!0===r.contains("dwa")&&!1===r.contains("foo")}}),Ge=pe(function(e,t){"use strict"
var r=String.prototype.indexOf
t.exports=function(e){return r.call(this,e,arguments[1])>-1}}),We=pe(function(e,t){"use strict"
t.exports=Ue()()?String.prototype.contains:Ge()}),Ye=pe(function(e,t){"use strict"
var r=qe(),n=He(),a=Me(),o=ve(),u=We(),i=t.exports=function(e,t){var n,i,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],r(e)?(n=u.call(e,"c"),i=u.call(e,"e"),s=u.call(e,"w")):(n=s=!0,i=!1),c={value:t,configurable:n,enumerable:i,writable:s},l?a(o(l),c):c}
i.gs=function(e,t,i){var s,l,c,d
return"string"!=typeof e?(c=i,i=t,t=e,e=null):c=arguments[3],r(t)?n(t)?r(i)?n(i)||(c=i,i=void 0):i=void 0:(c=t,t=i=void 0):t=void 0,r(e)?(s=u.call(e,"c"),l=u.call(e,"e")):(s=!0,l=!1),d={get:t,set:i,configurable:s,enumerable:l},c?a(o(c),d):d}}),Ke=pe(function(e,t){"use strict"
var r,n,a,o,u,i,s,c=Ye(),d=xe(),p=Function.prototype.apply,f=Function.prototype.call,D=Object.create,m=Object.defineProperty,h=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
n=function(e,t){var n,o
return d(t),o=this,r.call(this,e,n=function(){a.call(o,e,n),p.call(t,this,arguments)}),n.__eeOnceListener__=t,this},a=function(e,t){var r,n,a,o
if(d(t),!g.call(this,"__ee__"))return this
if(!(r=this.__ee__)[e])return this
if(n=r[e],"object"===l(n))for(o=0;a=n[o];++o)a!==t&&a.__eeOnceListener__!==t||(2===n.length?r[e]=n[o?0:1]:n.splice(o,1))
else n!==t&&n.__eeOnceListener__!==t||delete r[e]
return this},o=function(e){var t,r,n,a,o
if(g.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===l(a)){for(r=arguments.length,o=new Array(r-1),t=1;t<r;++t)o[t-1]=arguments[t]
for(a=a.slice(),t=0;n=a[t];++t)p.call(n,this,o)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(r=arguments.length,o=new Array(r-1),t=1;t<r;++t)o[t-1]=arguments[t]
p.call(a,this,o)}},u={on:r=function(e,t){var r
return d(t),g.call(this,"__ee__")?r=this.__ee__:(r=v.value=D(null),m(this,"__ee__",v),v.value=null),r[e]?"object"===l(r[e])?r[e].push(t):r[e]=[r[e],t]:r[e]=t,this},once:n,off:a,emit:o},i={on:c(r),once:c(n),off:c(a),emit:c(o)},s=h({},i),t.exports=e=function(e){return null==e?D(s):h(Object(e),i)},e.methods=u}),Xe=pe(function(e,t){"use strict"
t.exports=function(){var e,t,r=Array.from
return"function"==typeof r&&(t=r(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}}),Ze=pe(function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":l(globalThis))&&!!globalThis&&globalThis.Array===Array}}),Je=pe(function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":l(self))&&self)return self
if("object"===(void 0===u?"undefined":l(u))&&u)return u
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()}),Qe=pe(function(e,t){"use strict"
t.exports=Ze()()?globalThis:Je()}),et=pe(function(e,t){"use strict"
var r=Qe(),n={object:!0,symbol:!0}
t.exports=function(){var e,t=r.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!n[l(t.iterator)]&&!!n[l(t.toPrimitive)]&&!!n[l(t.toStringTag)]}}),tt=pe(function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===l(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}}),rt=pe(function(e,t){"use strict"
var r=tt()
t.exports=function(e){if(!r(e))throw new TypeError(e+" is not a symbol")
return e}}),nt=pe(function(e,t){"use strict"
var r=Ye(),n=Object.create,a=Object.defineProperty,o=Object.prototype,u=n(null)
t.exports=function(e){for(var t,n,i=0;u[e+(i||"")];)++i
return u[e+=i||""]=!0,a(o,t="@@"+e,r.gs(null,function(e){n||(n=!0,a(this,t,r(e)),n=!1)})),t}}),at=pe(function(e,t){"use strict"
var r=Ye(),n=Qe().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:r("",n&&n.hasInstance||e("hasInstance")),isConcatSpreadable:r("",n&&n.isConcatSpreadable||e("isConcatSpreadable")),iterator:r("",n&&n.iterator||e("iterator")),match:r("",n&&n.match||e("match")),replace:r("",n&&n.replace||e("replace")),search:r("",n&&n.search||e("search")),species:r("",n&&n.species||e("species")),split:r("",n&&n.split||e("split")),toPrimitive:r("",n&&n.toPrimitive||e("toPrimitive")),toStringTag:r("",n&&n.toStringTag||e("toStringTag")),unscopables:r("",n&&n.unscopables||e("unscopables"))})}}),ot=pe(function(e,t){"use strict"
var r=Ye(),n=rt(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:r(function(t){return a[t]?a[t]:a[t]=e(String(t))}),keyFor:r(function(e){var t
for(t in n(e),a)if(a[t]===e)return t})})}}),ut=pe(function(e,t){"use strict"
var r,n,a,o=Ye(),u=rt(),i=Qe().Symbol,s=nt(),c=at(),d=ot(),p=Object.create,f=Object.defineProperties,D=Object.defineProperty
if("function"==typeof i)try{String(i()),a=!0}catch(e){}else i=null
n=function(e){if(this instanceof n)throw new TypeError("Symbol is not a constructor")
return r(e)},t.exports=r=function e(t){var r
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?i(t):(r=p(n.prototype),t=void 0===t?"":String(t),f(r,{__description__:o("",t),__name__:o("",s(t))}))},c(r),d(r),f(n.prototype,{constructor:o(r),toString:o("",function(){return this.__name__})}),f(r.prototype,{toString:o(function(){return"Symbol ("+u(this).__description__+")"}),valueOf:o(function(){return u(this)})}),D(r.prototype,r.toPrimitive,o("",function(){var e=u(this)
return"symbol"===l(e)?e:e.toString()})),D(r.prototype,r.toStringTag,o("c","Symbol")),D(n.prototype,r.toStringTag,o("c",r.prototype[r.toStringTag])),D(n.prototype,r.toPrimitive,o("c",r.prototype[r.toPrimitive]))}),it=pe(function(e,t){"use strict"
t.exports=et()()?Qe().Symbol:ut()}),st=pe(function(e,t){"use strict"
var r=Object.prototype.toString,n=r.call(function(){return arguments}())
t.exports=function(e){return r.call(e)===n}}),lt=pe(function(e,t){"use strict"
var r=Object.prototype.toString,n=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&n(r.call(e))}}),ct=pe(function(e,t){"use strict"
var r=Object.prototype.toString,n=r.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===l(e)&&(e instanceof String||r.call(e)===n)||!1}}),dt=pe(function(e,t){"use strict"
var r=it().iterator,n=st(),a=lt(),o=Ee(),u=xe(),i=Ae(),s=ge(),l=ct(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,D,m,h,g,v,b,y,F,w,E=arguments[1],C=arguments[2]
if(e=Object(i(e)),s(E)&&u(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(n(e))return 1!==(g=e.length)?Array.apply(null,e):((h=new Array(1))[0]=e[0],h)
if(c(e)){for(h=new Array(g=e.length),D=0;D<g;++D)h[D]=e[D]
return h}}h=[]}if(!c(e))if(void 0!==(F=e[r])){for(b=u(F).call(e),t&&(h=new t),y=b.next(),D=0;!y.done;)w=E?d.call(E,C,y.value,D):y.value,t?(p.value=w,f(h,D,p)):h[D]=w,y=b.next(),++D
g=D}else if(l(e)){for(g=e.length,t&&(h=new t),D=0,m=0;D<g;++D)w=e[D],D+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++D]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(h,m,p)):h[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(h=new t(g)),D=0;D<g;++D)w=E?d.call(E,C,e[D],D):e[D],t?(p.value=w,f(h,D,p)):h[D]=w
return t&&(p.value=null,h.length=g),h}}),pt=pe(function(e,t){"use strict"
t.exports=Xe()()?Array.from:dt()}),ft=pe(function(e,t){"use strict"
var r=pt(),n=Array.isArray
t.exports=function(e){return n(e)?e:r(e)}}),Dt=pe(function(e,t){"use strict"
var r,n=ft(),a=ge(),o=xe(),u=Array.prototype.slice
r=function(e){return this.map(function(t,r){return t?t(e[r]):e[r]}).concat(u.call(e,this.length))},t.exports=function(e){return(e=n(e)).forEach(function(e){a(e)&&o(e)}),r.bind(e)}}),mt=pe(function(e,t){"use strict"
var r=xe()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:r(e.get)},void 0!==e.set?(t.set=r(e.set),e.delete&&(t.delete=r(e.delete)),e.clear&&(t.clear=r(e.clear)),t):(t.set=t.get,t))}}),ht=pe(function(e,t){"use strict"
var r=Ie(),n=Le(),a=Ye(),o=Ke().methods,u=Dt(),i=mt(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var D,m,h,g,v,b,y,F,w,E,C,x,A,k,N,B=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=i(o.normalizer),h=E.get,g=E.set,v=E.delete,b=E.clear),null!=o.resolvers&&(N=u(o.resolvers)),k=h?n(function(t){var n,a,o=arguments
if(N&&(o=N(o)),null!==(n=h(o))&&hasOwnProperty.call(B,n))return C&&D.emit("get",n,o,this),B[n]
if(a=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),null===n){if(null!==(n=h(o)))throw r("Circular invocation","CIRCULAR_INVOCATION")
n=g(o)}else if(hasOwnProperty.call(B,n))throw r("Circular invocation","CIRCULAR_INVOCATION")
return B[n]=a,x&&D.emit("set",n,null,a),a},m):0===t?function(){var t
if(hasOwnProperty.call(B,"data"))return C&&D.emit("get","data",arguments,this),B.data
if(t=arguments.length?s.call(e,this,arguments):l.call(e,this),hasOwnProperty.call(B,"data"))throw r("Circular invocation","CIRCULAR_INVOCATION")
return B.data=t,x&&D.emit("set","data",null,t),t}:function(t){var n,a,o=arguments
if(N&&(o=N(arguments)),a=String(o[0]),hasOwnProperty.call(B,a))return C&&D.emit("get",a,o,this),B[a]
if(n=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),hasOwnProperty.call(B,a))throw r("Circular invocation","CIRCULAR_INVOCATION")
return B[a]=n,x&&D.emit("set",a,null,n),n},D={original:e,memoized:k,profileName:o.profileName,get:function(e){return N&&(e=N(e)),h?h(e):String(e[0])},has:function(e){return hasOwnProperty.call(B,e)},delete:function(e){var t
hasOwnProperty.call(B,e)&&(v&&v(e),t=B[e],delete B[e],A&&D.emit("delete",e,t))},clear:function(){var e=B
b&&b(),B=c(null),D.emit("clear",e)},on:function(e,t){return"get"===e?C=!0:"set"===e?x=!0:"delete"===e&&(A=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=D.original}},y=h?n(function(e){var t,r=arguments
N&&(r=N(r)),null!==(t=h(r))&&D.delete(t)},m):0===t?function(){return D.delete("data")}:function(e){return N&&(e=N(arguments)[0]),D.delete(e)},F=n(function(){var e,r=arguments
return 0===t?B.data:(N&&(r=N(r)),e=h?h(r):String(r[0]),B[e])}),w=n(function(){var e,r=arguments
return 0===t?D.has("data"):(N&&(r=N(r)),null!==(e=h?h(r):String(r[0]))&&D.has(e))}),d(k,{__memoized__:a(!0),delete:a(y),clear:a(D.clear),_get:a(F),_has:a(w)}),D}}),gt=pe(function(e,t){"use strict"
var r=xe(),n=Ne(),a=Be(),o=ht(),u=Ce()
t.exports=function e(t){var i,s,l
if(r(t),(i=Object(arguments[1])).async&&i.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!i.force?t:(s=u(i.length,t.length,i.async&&a.async),l=o(t,s,i),n(a,function(e,t){i[t]&&e(i[t],l,i)}),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}}),vt=pe(function(e,t){"use strict"
t.exports=function(e){var t,r,n=e.length
if(!n)return""
for(t=String(e[r=0]);--n;)t+=""+e[++r]
return t}}),bt=pe(function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var r=String(t[0]),n=0,a=e;--a;)r+=""+t[++n]
return r}:function(){return""}}}),yt=pe(function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}}),Ft=pe(function(e,t){"use strict"
t.exports=function(e){return e!=e}}),wt=pe(function(e,t){"use strict"
t.exports=yt()()?Number.isNaN:Ft()}),Et=pe(function(e,t){"use strict"
var r=wt(),n=Ee(),a=Ae(),o=Array.prototype.indexOf,u=Object.prototype.hasOwnProperty,i=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!r(e))return o.apply(this,arguments)
for(l=n(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):n(this.length)-s(i(c));t<l;++t)if(u.call(this,t)&&(d=this[t],r(d)))return t
return-1}}),Ct=pe(function(e,t){"use strict"
var r=Et(),n=Object.create
t.exports=function(){var e=0,t=[],a=n(null)
return{get:function(e){var n,a=0,o=t,u=e.length
if(0===u)return o[u]||null
if(o=o[u]){for(;a<u-1;){if(-1===(n=r.call(o[0],e[a])))return null
o=o[1][n],++a}return-1===(n=r.call(o[0],e[a]))?null:o[1][n]||null}return null},set:function(n){var o,u=0,i=t,s=n.length
if(0===s)i[s]=++e
else{for(i[s]||(i[s]=[[],[]]),i=i[s];u<s-1;)-1===(o=r.call(i[0],n[u]))&&(o=i[0].push(n[u])-1,i[1].push([[],[]])),i=i[1][o],++u;-1===(o=r.call(i[0],n[u]))&&(o=i[0].push(n[u])-1),i[1][o]=++e}return a[e]=n,e},delete:function(e){var n,o=0,u=t,i=a[e],s=i.length,l=[]
if(0===s)delete u[s]
else if(u=u[s]){for(;o<s-1;){if(-1===(n=r.call(u[0],i[o])))return
l.push(u,n),u=u[1][n],++o}if(-1===(n=r.call(u[0],i[o])))return
for(e=u[1][n],u[0].splice(n,1),u[1].splice(n,1);!u[0].length&&l.length;)n=l.pop(),(u=l.pop())[0].splice(n,1),u[1].splice(n,1)}delete a[e]},clear:function(){t=[],a=n(null)}}}}),xt=pe(function(e,t){"use strict"
var r=Et()
t.exports=function(){var e=0,t=[],n=[]
return{get:function(e){var a=r.call(t,e[0])
return-1===a?null:n[a]},set:function(r){return t.push(r[0]),n.push(++e),e},delete:function(e){var a=r.call(n,e);-1!==a&&(t.splice(a,1),n.splice(a,1))},clear:function(){t=[],n=[]}}}}),At=pe(function(e,t){"use strict"
var r=Et(),n=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=n(null)
return{get:function(t){for(var n,o=0,u=a;o<e-1;){if(-1===(n=r.call(u[0],t[o])))return null
u=u[1][n],++o}return-1===(n=r.call(u[0],t[o]))?null:u[1][n]||null},set:function(n){for(var u,i=0,s=a;i<e-1;)-1===(u=r.call(s[0],n[i]))&&(u=s[0].push(n[i])-1,s[1].push([[],[]])),s=s[1][u],++i
return-1===(u=r.call(s[0],n[i]))&&(u=s[0].push(n[i])-1),s[1][u]=++t,o[t]=n,t},delete:function(t){for(var n,u=0,i=a,s=[],l=o[t];u<e-1;){if(-1===(n=r.call(i[0],l[u])))return
s.push(i,n),i=i[1][n],++u}if(-1!==(n=r.call(i[0],l[u]))){for(t=i[1][n],i[0].splice(n,1),i[1].splice(n,1);!i[0].length&&s.length;)n=s.pop(),(i=s.pop())[0].splice(n,1),i[1].splice(n,1)
delete o[t]}},clear:function(){a=[[],[]],o=n(null)}}}}),kt=pe(function(e,t){"use strict"
var r=xe(),n=Ne(),a=Function.prototype.call
t.exports=function(e,t){var o={},u=arguments[2]
return r(t),n(e,function(e,r,n,i){o[r]=a.call(t,u,e,r,n,i)}),o}}),Nt=pe(function(e,t){"use strict"
var r=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e},n=function(e){var t,n,a=s.createTextNode(""),o=0
return new e(function(){var e
if(t)n&&(t=n.concat(t))
else{if(!n)return
t=n}if(n=t,t=null,"function"==typeof n)return e=n,n=null,void e()
for(a.data=o=++o%2;n;)e=n.shift(),n.length||(n=null),e()}).observe(a,{characterData:!0}),function(e){r(e),t?"function"==typeof t?t=[t,e]:t.push(e):(t=e,a.data=o=++o%2)}}
t.exports=function(){if("object"===("undefined"==typeof process?"undefined":l(process))&&process&&"function"==typeof process.nextTick)return process.nextTick
if("function"==typeof queueMicrotask)return function(e){queueMicrotask(r(e))}
if("object"===(void 0===s?"undefined":l(s))&&s){if("function"==typeof MutationObserver)return n(MutationObserver)
if("function"==typeof WebKitMutationObserver)return n(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(r(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":l(setTimeout))?function(e){setTimeout(r(e),0)}:null}()}),Bt=pe(function(){"use strict"
var e=pt(),t=kt(),r=je(),n=Le(),a=Nt(),o=Array.prototype.slice,u=Function.prototype.apply,i=Object.create
Be().async=function(s,l){var c,d,p,f=i(null),D=i(null),m=l.memoized,h=l.original
l.memoized=n(function(e){var t=arguments,r=t[t.length-1]
return"function"==typeof r&&(c=r,t=o.call(t,0,-1)),m.apply(d=this,p=t)},m)
try{r(l.memoized,m)}catch(e){}l.on("get",function(e){var t,r,n
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,r=d,n=p,c=d=p=null,a(function(){var a
hasOwnProperty.call(D,e)?(a=D[e],l.emit("getasync",e,n,r),u.call(t,a.context,a.args)):(c=t,d=r,p=n,m.apply(r,n))})}}),l.original=function(){var t,r,n,o
return c?(t=e(arguments),r=function t(r){var n,i,s=t.id
if(null!=s){if(delete t.id,n=f[s],delete f[s],n)return i=e(arguments),l.has(s)&&(r?l.delete(s):(D[s]={context:this,args:i},l.emit("setasync",s,"function"==typeof n?1:n.length))),"function"==typeof n?o=u.call(n,this,i):n.forEach(function(e){o=u.call(e,this,i)},this),o}else a(u.bind(t,this,arguments))},n=c,c=d=p=null,t.push(r),o=u.call(h,this,t),r.cb=n,c=r,o):u.call(h,this,arguments)},l.on("set",function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)}),l.on("delete",function(e){var t
hasOwnProperty.call(f,e)||D[e]&&(t=D[e],delete D[e],l.emit("deleteasync",e,o.call(t.args,1)))}),l.on("clear",function(){var e=D
D=i(null),l.emit("clearasync",t(e,function(e){return o.call(e.args,1)}))})}}),Tt=pe(function(e,t){"use strict"
var r=Array.prototype.forEach,n=Object.create
t.exports=function(e){var t=n(null)
return r.call(arguments,function(e){t[e]=!0}),t}}),Rt=pe(function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}}),St=pe(function(e,t){"use strict"
var r=Rt()
t.exports=function(e){try{return e&&r(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}}),_t=pe(function(e,t){"use strict"
var r=Ae(),n=St()
t.exports=function(e){return n(r(e))}}),Ot=pe(function(e,t){"use strict"
var r=Rt()
t.exports=function(e){try{return e&&r(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}}),Mt=pe(function(e,t){"use strict"
var r=Ot(),n=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=r(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(n,function(e){return JSON.stringify(e).slice(1,-1)})}}),Pt=pe(function(e,t){function r(e){return!!e&&("object"===l(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=r,t.exports.default=r}),It=pe(function(){"use strict"
var e=kt(),t=Tt(),r=_t(),n=Mt(),a=Pt(),o=Nt(),u=Object.create,i=t("then","then:finally","done","done:finally")
Be().promise=function(t,s){var l=u(null),c=u(null),d=u(null)
if(!0===t)t=null
else if(t=r(t),!i[t])throw new TypeError("'"+n(t)+"' is not valid promise mode")
s.on("set",function(e,r,n){var u=!1
if(!a(n))return c[e]=n,void s.emit("setasync",e,1)
l[e]=1,d[e]=n
var i=function(t){var r=l[e]
if(u)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
r&&(delete l[e],c[e]=t,s.emit("setasync",e,r))},p=function(){u=!0,l[e]&&(delete l[e],delete d[e],s.delete(e))},f=t
if(f||(f="then"),"then"===f){var D=function(){o(p)}
"function"==typeof(n=n.then(function(e){o(i.bind(this,e))},D)).finally&&n.finally(D)}else if("done"===f){if("function"!=typeof n.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
n.done(i,p)}else if("done:finally"===f){if("function"!=typeof n.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof n.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
n.done(i),n.finally(p)}}),s.on("get",function(e,t,r){var n
if(l[e])++l[e]
else{n=d[e]
var u=function(){s.emit("getasync",e,t,r)}
a(n)?"function"==typeof n.done?n.done(u):n.then(function(){o(u)}):u()}}),s.on("delete",function(e){if(delete d[e],l[e])delete l[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],s.emit("deleteasync",e,[t])}}),s.on("clear",function(){var t=c
c=u(null),l=u(null),d=u(null),s.emit("clearasync",e(t,function(e){return[e]}))})}}),jt=pe(function(){"use strict"
var e=xe(),t=Ne(),r=Be(),n=Function.prototype.apply
r.dispose=function(a,o,u){var i
if(e(a),u.async&&r.async||u.promise&&r.promise)return o.on("deleteasync",i=function(e,t){n.call(a,null,t)}),void o.on("clearasync",function(e){t(e,function(e,t){i(t,e)})})
o.on("delete",i=function(e,t){a(t)}),o.on("clear",function(e){t(e,function(e,t){i(t,e)})})}}),Lt=pe(function(e,t){"use strict"
t.exports=2147483647}),qt=pe(function(e,t){"use strict"
var r=Ee(),n=Lt()
t.exports=function(e){if((e=r(e))>n)throw new TypeError(e+" exceeds maximum possible timeout")
return e}}),zt=pe(function(){"use strict"
var e=pt(),t=Ne(),r=Nt(),n=Pt(),a=qt(),o=Be(),u=Function.prototype,i=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,D,m,h;(c=a(c))&&(f=l(null),D=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+D,function(e){f[e]=setTimeout(function(){d.delete(e)},c),"function"==typeof f[e].unref&&f[e].unref(),h&&(h[e]&&"nextTick"!==h[e]&&clearTimeout(h[e]),h[e]=setTimeout(function(){delete h[e]},m),"function"==typeof h[e].unref&&h[e].unref())}),d.on("delete"+D,function(e){clearTimeout(f[e]),delete f[e],h&&("nextTick"!==h[e]&&clearTimeout(h[e]),delete h[e])}),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:i(s(Number(p.preFetch),1),0))&&(h={},m=(1-m)*c,d.on("get"+D,function(t,a,o){h[t]||(h[t]="nextTick",r(function(){var r
"nextTick"===h[t]&&(delete h[t],d.delete(t),p.async&&(a=e(a)).push(u),r=d.memoized.apply(o,a),p.promise&&n(r)&&("function"==typeof r.done?r.done(u,u):r.then(u,u)))}))})),d.on("clear"+D,function(){t(f,function(e){clearTimeout(e)}),f={},h&&(t(h,function(e){"nextTick"!==e&&clearTimeout(e)}),h={})}))}}),Vt=pe(function(e,t){"use strict"
var r=Ee(),n=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,u=1,i=n(null),s=n(null),l=0
return e=r(e),{hit:function(r){var n=s[r],c=++l
if(i[c]=r,s[r]=c,!n){if(++o<=e)return
return r=i[u],t(r),r}if(delete i[n],u===n)for(;!a.call(i,++u););},delete:t=function(e){var t=s[e]
if(t&&(delete i[t],delete s[e],--o,u===t)){if(!o)return l=0,void(u=1)
for(;!a.call(i,++u););}},clear:function(){o=0,u=1,i=n(null),s=n(null),l=0}}}}),$t=pe(function(){"use strict"
var e=Ee(),t=Vt(),r=Be()
r.max=function(n,a,o){var u,i,s;(n=e(n))&&(i=t(n),u=o.async&&r.async||o.promise&&r.promise?"async":"",a.on("set"+u,s=function(e){void 0!==(e=i.hit(e))&&a.delete(e)}),a.on("get"+u,s),a.on("delete"+u,i.delete),a.on("clear"+u,i.clear))}}),Ht=pe(function(){"use strict"
var e=Ye(),t=Be(),r=Object.create,n=Object.defineProperties
t.refCounter=function(a,o,u){var i,s
i=r(null),s=u.async&&t.async||u.promise&&t.promise?"async":"",o.on("set"+s,function(e,t){i[e]=t||1}),o.on("get"+s,function(e){++i[e]}),o.on("delete"+s,function(e){delete i[e]}),o.on("clear"+s,function(){i={}}),n(o.memoized,{deleteRef:e(function(){var e=o.get(arguments)
return null===e?null:i[e]?! --i[e]&&(o.delete(e),!0):null}),getRefCount:e(function(){var e=o.get(arguments)
return null===e?0:i[e]?i[e]:0})})}}),Ut=pe(function(e,t){"use strict"
var r=ve(),n=Ce(),a=gt()
t.exports=function(e){var t,o=r(arguments[1])
return o.normalizer||0!==(t=o.length=n(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=vt():t>1&&(o.normalizer=bt()(t)):o.normalizer=!1===t?Ct()():1===t?xt()():At()(t)),o.async&&Bt(),o.promise&&It(),o.dispose&&jt(),o.maxAge&&zt(),o.max&&$t(),o.refCounter&&Ht(),a(e,o)}}),Gt=pe(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var r=t.length,n="",a=0;a<r;){var o=t.charAt(a)
if(e.identSpecialChars[o])n+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")n+=o
else{var u=o.charCodeAt(0)
if(55296==(63488&u)){var i=t.charCodeAt(a++)
if(55296!=(64512&u)||56320!=(64512&i))throw Error("UCS-2(decode): illegal sequence")
u=((1023&u)<<10)+(1023&i)+65536}n+="\\"+u.toString(16)+" "}a++}return n},e.escapeStr=function(t){for(var r,n=t.length,a="",o=0;o<n;){var u=t.charAt(o)
'"'===u?u='\\"':"\\"===u?u="\\\\":void 0!==(r=e.strReplacementsRev[u])&&(u=r),a+=u,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}}),Wt=pe(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Gt()
e.parseCssSelector=function(e,r,n,a,o,u){var i=e.length,s=""
function l(n,a){var o=""
for(r++,s=e.charAt(r);r<i;){if(s===n)return r++,o
if("\\"===s){r++
var u=void 0
if((s=e.charAt(r))===n)o+=n
else if(void 0!==(u=a[s]))o+=u
else{if(t.isHex(s)){var l=s
for(r++,s=e.charAt(r);t.isHex(s);)l+=s,r++,s=e.charAt(r)
" "===s&&(r++,s=e.charAt(r)),o+=String.fromCharCode(parseInt(l,16))
continue}o+=s}}else o+=s
r++,s=e.charAt(r)}return o}function c(){var n=""
for(s=e.charAt(r);r<i;){if(t.isIdent(s))n+=s
else{if("\\"!==s)return n
if(++r>=i)throw Error("Expected symbol but end of file reached.")
if(s=e.charAt(r),t.identSpecialChars[s])n+=s
else{if(t.isHex(s)){var a=s
for(r++,s=e.charAt(r);t.isHex(s);)a+=s,r++,s=e.charAt(r)
" "===s&&(r++,s=e.charAt(r)),n+=String.fromCharCode(parseInt(a,16))
continue}n+=s}}r++,s=e.charAt(r)}return n}function d(){s=e.charAt(r)
for(var t=!1;" "===s||"\t"===s||"\n"===s||"\r"===s||"\f"===s;)t=!0,r++,s=e.charAt(r)
return t}function p(){var t=f()
if(!t)return null
var n=t
for(s=e.charAt(r);","===s;){if(r++,d(),"selectors"!==n.type&&(n={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
n.selectors.push(t)}return n}function f(){d()
var t={type:"ruleSet"},n=D()
if(!n)return null
for(var a=t;n&&(n.type="rule",a.rule=n,a=n,d(),s=e.charAt(r),!(r>=i||","===s||")"===s));)if(o[s]){var u=s
if(r++,d(),!(n=D()))throw Error('Rule expected after "'+u+'".')
n.nestingOperator=u}else(n=D())&&(n.nestingOperator=null)
return t}function D(){for(var o=null;r<i;)if("*"===(s=e.charAt(r)))r++,(o=o||{}).tagName="*"
else if(t.isIdentStart(s)||"\\"===s)(o=o||{}).tagName=c()
else if("."===s)r++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===s)r++,(o=o||{}).id=c()
else if("["===s){r++,d()
var f={name:c()}
if(d(),"]"===s)r++
else{var D=""
if(a[s]&&(D=s,r++,s=e.charAt(r)),r>=i)throw Error('Expected "=" but end of file reached.')
if("="!==s)throw Error('Expected "=" but "'+s+'" found.')
f.operator=D+"=",r++,d()
var m=""
if(f.valueType="string",'"'===s)m=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)m=l("'",t.singleQuoteEscapeChars)
else if(u&&"$"===s)r++,m=c(),f.valueType="substitute"
else{for(;r<i&&"]"!==s;)m+=s,r++,s=e.charAt(r)
m=m.trim()}if(d(),r>=i)throw Error('Expected "]" but end of file reached.')
if("]"!==s)throw Error('Expected "]" but "'+s+'" found.')
r++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==s)break
r++
var h=c(),g={name:h}
if("("===s){r++
var v=""
if(d(),"selector"===n[h])g.valueType="selector",v=p()
else{if(g.valueType=n[h]||"string",'"'===s)v=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)v=l("'",t.singleQuoteEscapeChars)
else if(u&&"$"===s)r++,v=c(),g.valueType="substitute"
else{for(;r<i&&")"!==s;)v+=s,r++,s=e.charAt(r)
v=v.trim()}d()}if(r>=i)throw Error('Expected ")" but end of file reached.')
if(")"!==s)throw Error('Expected ")" but "'+s+'" found.')
r++,g.value=v}((o=o||{}).pseudos=o.pseudos||[]).push(g)}return o}return function(){var t=p()
if(r<i)throw Error('Rule expected but "'+e.charAt(r)+'" found.')
return t}()}}),Yt=pe(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Gt()
e.renderEntity=function e(r){var n=""
switch(r.type){case"ruleSet":for(var a=r.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
n=o.join(" ")
break
case"selectors":n=r.selectors.map(e).join(", ")
break
case"rule":r.tagName&&(n="*"===r.tagName?"*":t.escapeIdentifier(r.tagName)),r.id&&(n+="#"+t.escapeIdentifier(r.id)),r.classNames&&(n+=r.classNames.map(function(e){return"."+t.escapeIdentifier(e)}).join("")),r.attrs&&(n+=r.attrs.map(function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"}).join("")),r.pseudos&&(n+=r.pseudos.map(function(r){return r.valueType?"selector"===r.valueType?":"+t.escapeIdentifier(r.name)+"("+e(r.value)+")":"substitute"===r.valueType?":"+t.escapeIdentifier(r.name)+"($"+r.value+")":"numeric"===r.valueType?":"+t.escapeIdentifier(r.name)+"("+r.value+")":":"+t.escapeIdentifier(r.name)+"("+t.escapeIdentifier(r.value)+")":":"+t.escapeIdentifier(r.name)}).join(""))
break
default:throw Error('Unknown entity type: "'+r.type+'".')}return n}}),Kt=pe(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Wt(),r=Yt(),n=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(e){return t.parseCssSelector(e,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(e){return r.renderEntity(e).trim()},e}()
e.CssSelectorParser=n}),Xt=pe(function(e,t){var o
o=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,n=void 0,a=void 0,o=function(e,t){h[r]=e,h[r+1]=t,2===(r+=2)&&(a?a(g):w())},c=void 0!==u?u:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),D="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(g,1)}}var h=new Array(1e3)
function g(){for(var e=0;e<r;e+=2)(0,h[e])(h[e+1]),h[e]=void 0,h[e+1]=void 0
r=0}var v,b,y,F,w=void 0
function E(e,t){var r=this,n=new this.constructor(A)
void 0===n[x]&&L(n)
var a=r._state
if(a){var u=arguments[a-1]
o(function(){return I(a,n,u,r._result)})}else M(r,n,e,t)
return n}function C(e){if(e&&"object"===l(e)&&e.constructor===this)return e
var t=new this(A)
return R(t,e),t}f?w=function(){return process.nextTick(g)}:p?(b=0,y=new p(g),F=s.createTextNode(""),y.observe(F,{characterData:!0}),w=function(){F.data=b=++b%2}):D?((v=new MessageChannel).port1.onmessage=g,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(n=e.runOnLoop||e.runOnContext)?function(){n(g)}:m()}catch(e){return m()}}():m()
var x=Math.random().toString(36).substring(2)
function A(){}var k=void 0,N=1,B=2
function T(t,r,n){r.constructor===t.constructor&&n===E&&r.constructor.resolve===C?function(e,t){t._state===N?_(e,t._result):t._state===B?O(e,t._result):M(t,void 0,function(t){return R(e,t)},function(t){return O(e,t)})}(t,r):void 0===n?_(t,r):e(n)?function(e,t,r){o(function(e){var n=!1,a=function(r,a){try{r.call(a,function(r){n||(n=!0,t!==r?R(e,r):_(e,r))},function(t){n||(n=!0,O(e,t))})}catch(e){return e}}(r,t,e._label)
!n&&a&&(n=!0,O(e,a))},e)}(t,r,n):_(t,r)}function R(e,t){if(e===t)O(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=l(n=t),null===n||"object"!==a&&"function"!==a)_(e,t)
else{var r=void 0
try{r=t.then}catch(t){return void O(e,t)}T(e,t,r)}var n,a}function S(e){e._onerror&&e._onerror(e._result),P(e)}function _(e,t){e._state===k&&(e._result=t,e._state=N,0!==e._subscribers.length&&o(P,e))}function O(e,t){e._state===k&&(e._state=B,e._result=t,o(S,e))}function M(e,t,r,n){var a=e._subscribers,u=a.length
e._onerror=null,a[u]=t,a[u+N]=r,a[u+B]=n,0===u&&e._state&&o(P,e)}function P(e){var t=e._subscribers,r=e._state
if(0!==t.length){for(var n=void 0,a=void 0,o=e._result,u=0;u<t.length;u+=3)n=t[u],a=t[u+r],n?I(r,n,a,o):a(o)
e._subscribers.length=0}}function I(t,r,n,a){var o=e(n),u=void 0,i=void 0,s=!0
if(o){try{u=n(a)}catch(e){s=!1,i=e}if(r===u)return void O(r,new TypeError("A promises callback cannot return that same promise."))}else u=a
r._state!==k||(o&&s?R(r,u):!1===s?O(r,i):t===N?_(r,u):t===B&&O(r,u))}var j=0
function L(e){e[x]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var q=function(){function e(e,r){this._instanceConstructor=e,this.promise=new e(A),this.promise[x]||L(this.promise),t(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?_(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&_(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve
if(n===C){var a=void 0,o=void 0,u=!1
try{a=e.then}catch(e){u=!0,o=e}if(a===E&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(r===z){var i=new r(A)
u?O(i,o):T(i,e,a),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},e.prototype._settledAt=function(e,t,r){var n=this.promise
n._state===k&&(this._remaining--,e===B?O(n,r):this._result[t]=r),0===this._remaining&&_(n,this._result)},e.prototype._willSettleAt=function(e,t){var r=this
M(e,void 0,function(e){return r._settledAt(N,t,e)},function(e){return r._settledAt(B,t,e)})},e}(),z=function(){function t(e){this[x]=j++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){R(e,t)},function(t){O(e,t)})}catch(t){O(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var r=this,n=r.constructor
return e(t)?r.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):r.then(t,t)},t}()
return z.prototype.then=E,z.all=function(e){return new q(this,e).promise},z.race=function(e){var r=this
return t(e)?new r(function(t,n){for(var a=e.length,o=0;o<a;o++)r.resolve(e[o]).then(t,n)}):new r(function(e,t){return t(new TypeError("You must pass an array to race."))})},z.resolve=C,z.reject=function(e){var t=new this(A)
return O(t,e),t},z._setScheduler=function(e){a=e},z._setAsap=function(e){o=e},z._asap=o,z.polyfill=function(){var e=void 0
if(void 0!==i)e=i
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var r=null
try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=z},z.Promise=z,z},"object"===l(e)&&void 0!==t?t.exports=o():void 0===(a="function"==typeof(n=o)?n.call(e,r,e,t):n)||(t.exports=a)}),Zt=pe(function(e){var t,r,n=(t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return r.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return 0|e},ToUint32:function(e){return e>>>0}}),a=Math.LN2,o=Math.abs,u=Math.floor,i=Math.log,s=Math.min,c=Math.pow,d=Math.round
function p(e,t,r){return e<t?t:e>r?r:e}var f,D=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,r=[]
for(t in e)n.HasOwnProperty(e,t)&&r.push(t)
return r}
function m(e){if(D&&f){var t,r=D(e)
for(t=0;t<r.length;t+=1)f(e,r[t],{value:e[r[t]],writable:!1,enumerable:!1,configurable:!1})}}function h(e,t){var r=32-t
return e<<r>>r}function g(e,t){var r=32-t
return e<<r>>>r}function v(e){return[255&e]}function b(e){return h(e[0],8)}function y(e){return[255&e]}function F(e){return g(e[0],8)}function w(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function E(e){return[e>>8&255,255&e]}function C(e){return h(e[0]<<8|e[1],16)}function x(e){return[e>>8&255,255&e]}function A(e){return g(e[0]<<8|e[1],16)}function k(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function N(e){return h(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function B(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function T(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e,t,r){var n,l,d,p,f,D,m,h=(1<<t-1)-1
function g(e){var t=u(e),r=e-t
return r<.5?t:r>.5||t%2?t+1:t}for(e!=e?(l=(1<<t)-1,d=c(2,r-1),n=0):e===1/0||e===-1/0?(l=(1<<t)-1,d=0,n=e<0?1:0):0===e?(l=0,d=0,n=1/e==-1/0?1:0):(n=e<0,(e=o(e))>=c(2,1-h)?(l=s(u(i(e)/a),1023),(d=g(e/c(2,l)*c(2,r)))/c(2,r)>=2&&(l+=1,d=1),l>h?(l=(1<<t)-1,d=0):(l+=h,d-=c(2,r))):(l=0,d=g(e/c(2,1-h-r)))),f=[],p=r;p;p-=1)f.push(d%2?1:0),d=u(d/2)
for(p=t;p;p-=1)f.push(l%2?1:0),l=u(l/2)
for(f.push(n?1:0),f.reverse(),D=f.join(""),m=[];D.length;)m.push(parseInt(D.substring(0,8),2)),D=D.substring(8)
return m}function S(e,t,r){var n,a,o,u,i,s,l,d,p=[]
for(n=e.length;n;n-=1)for(o=e[n-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),u=p.join(""),i=(1<<t-1)-1,s=parseInt(u.substring(0,1),2)?-1:1,l=parseInt(u.substring(1,1+t),2),d=parseInt(u.substring(1+t),2),l===(1<<t)-1?0===d?s*(1/0):NaN:l>0?s*c(2,l-i)*(1+d/c(2,r)):0!==d?s*c(2,-(i-1))*(d/c(2,r)):s<0?-0:0}function _(e){return S(e,11,52)}function O(e){return R(e,11,52)}function M(e){return S(e,8,23)}function P(e){return R(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,r){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return n.HasProperty(r,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,r.get),n.HasProperty(r,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,r.set),n.HasProperty(r,"value")&&(e[t]=r.value),e},function(){function t(e){if((e=n.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
m(this)}function r(){}function a(e,a,o){var u
return u=function(e,r,a){var o,i,s,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===l(arguments[0])&&arguments[0].constructor===u)for(o=arguments[0],this.length=o.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,s=0;s<this.length;s+=1)this._setter(s,o._getter(s))
else if("object"!==l(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===n.Class(arguments[0])){if("object"!==l(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===n.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=n.ToUint32(r),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=n.ToUint32(a),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(i=arguments[0],this.length=n.ToUint32(i.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,s=0;s<this.length;s+=1)c=i[s],this._setter(s,Number(c))
else{if(this.length=n.ToInt32(arguments[0]),a<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=u,m(this),function(e){if(f){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)r(t)}function r(t){f(e,t,{get:function(){return e._getter(t)},set:function(r){e._setter(t,r)},enumerable:!0,configurable:!1})}}(this)},u.prototype=new r,u.prototype.BYTES_PER_ELEMENT=e,u.prototype._pack=a,u.prototype._unpack=o,u.BYTES_PER_ELEMENT=e,u.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if(!((e=n.ToUint32(e))>=this.length)){for(var t=[],r=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;r<this.BYTES_PER_ELEMENT;r+=1,a+=1)t.push(this.buffer._bytes[a])
return this._unpack(t)}},u.prototype.get=u.prototype._getter,u.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=n.ToUint32(e))<this.length){var r,a,o=this._pack(t)
for(r=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;r<this.BYTES_PER_ELEMENT;r+=1,a+=1)this.buffer._bytes[a]=o[r]}},u.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var r,a,o,u,i,s,c,d,p,f
if("object"===l(arguments[0])&&arguments[0].constructor===this.constructor){if(r=arguments[0],(o=n.ToUint32(arguments[1]))+r.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+o*this.BYTES_PER_ELEMENT,p=r.length*this.BYTES_PER_ELEMENT,r.buffer===this.buffer){for(f=[],i=0,s=r.byteOffset;i<p;i+=1,s+=1)f[i]=r.buffer._bytes[s]
for(i=0,c=d;i<p;i+=1,c+=1)this.buffer._bytes[c]=f[i]}else for(i=0,s=r.byteOffset,c=d;i<p;i+=1,s+=1,c+=1)this.buffer._bytes[c]=r.buffer._bytes[s]}else{if("object"!==l(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(a=arguments[0],u=n.ToUint32(a.length),(o=n.ToUint32(arguments[1]))+u>this.length)throw new RangeError("Offset plus length of array is out of range")
for(i=0;i<u;i+=1)s=a[i],this._setter(o+i,Number(s))}},u.prototype.subarray=function(e,t){e=n.ToInt32(e),t=n.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=p(e,0,this.length)
var r=(t=p(t,0,this.length))-e
return r<0&&(r=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,r)},u}e.ArrayBuffer=e.ArrayBuffer||t
var o=a(1,v,b),u=a(1,y,F),i=a(1,w,F),s=a(2,E,C),c=a(2,x,A),d=a(4,k,N),D=a(4,B,T),h=a(4,P,M),g=a(8,O,_)
e.Int8Array=e.Int8Array||o,e.Uint8Array=e.Uint8Array||u,e.Uint8ClampedArray=e.Uint8ClampedArray||i,e.Int16Array=e.Int16Array||s,e.Uint16Array=e.Uint16Array||c,e.Int32Array=e.Int32Array||d,e.Uint32Array=e.Uint32Array||D,e.Float32Array=e.Float32Array||h,e.Float64Array=e.Float64Array||g}(),function(){function t(e,t){return n.IsCallable(e.get)?e.get(t):e[t]}var r,a=(r=new e.Uint16Array([4660]),18===t(new e.Uint8Array(r.buffer),0))
function o(t,r,a){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===n.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=n.ToUint32(r),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:n.ToUint32(a),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
m(this)}function u(r){return function(o,u){if((o=n.ToUint32(o))+r.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
o+=this.byteOffset
var i,s=new e.Uint8Array(this.buffer,o,r.BYTES_PER_ELEMENT),l=[]
for(i=0;i<r.BYTES_PER_ELEMENT;i+=1)l.push(t(s,i))
return Boolean(u)===Boolean(a)&&l.reverse(),t(new r(new e.Uint8Array(l).buffer),0)}}function i(r){return function(o,u,i){if((o=n.ToUint32(o))+r.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var s,l=new r([u]),c=new e.Uint8Array(l.buffer),d=[]
for(s=0;s<r.BYTES_PER_ELEMENT;s+=1)d.push(t(c,s))
Boolean(i)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,r.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=u(e.Uint8Array),o.prototype.getInt8=u(e.Int8Array),o.prototype.getUint16=u(e.Uint16Array),o.prototype.getInt16=u(e.Int16Array),o.prototype.getUint32=u(e.Uint32Array),o.prototype.getInt32=u(e.Int32Array),o.prototype.getFloat32=u(e.Float32Array),o.prototype.getFloat64=u(e.Float64Array),o.prototype.setUint8=i(e.Uint8Array),o.prototype.setInt8=i(e.Int8Array),o.prototype.setUint16=i(e.Uint16Array),o.prototype.setInt16=i(e.Int16Array),o.prototype.setUint32=i(e.Uint32Array),o.prototype.setInt32=i(e.Int32Array),o.prototype.setFloat32=i(e.Float32Array),o.prototype.setFloat64=i(e.Float64Array),e.DataView=e.DataView||o}()}),Jt=pe(function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),n=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(n(this,"_id","_WeakMap_"+o()+"."+o()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,r){if(!a(e)||!t.call(e,"_id"))throw new TypeError(r+" method called on incompatible receiver "+l(e))}function o(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",function(e){if(r(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))}),n(e.prototype,"get",function(e){if(r(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}}),n(e.prototype,"has",function(e){if(r(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)}),n(e.prototype,"set",function(e,t){if(r(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(n(e,this._id,[e,t]),this)}),n(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==u?u:void 0!==i?i:e)}),Qt=pe(function(e,t){"use strict"
var r=function(e){return e&&e.Math===Math&&e}
t.exports=r("object"==("undefined"==typeof globalThis?"undefined":l(globalThis))&&globalThis)||r("object"==(void 0===u?"undefined":l(u))&&u)||r("object"==("undefined"==typeof self?"undefined":l(self))&&self)||r("object"==(void 0===i?"undefined":l(i))&&i)||function(){return this}()||e||Function("return this")()}),er=pe(function(e,t){"use strict"
t.exports=function(e){try{return!!e()}catch(e){return!0}}}),tr=pe(function(e,t){"use strict"
var r=er()
t.exports=!r(function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")})}),rr=pe(function(e,t){"use strict"
var r=tr(),n=Function.prototype,a=n.apply,o=n.call
t.exports="object"==("undefined"==typeof Reflect?"undefined":l(Reflect))&&Reflect.apply||(r?o.bind(a):function(){return o.apply(a,arguments)})}),nr=pe(function(e,t){"use strict"
var r=tr(),n=Function.prototype,a=n.call,o=r&&n.bind.bind(a,a)
t.exports=r?o:function(e){return function(){return a.apply(e,arguments)}}}),ar=pe(function(e,t){"use strict"
var r=nr(),n=r({}.toString),a=r("".slice)
t.exports=function(e){return a(n(e),8,-1)}}),or=pe(function(e,t){"use strict"
var r=ar(),n=nr()
t.exports=function(e){if("Function"===r(e))return n(e)}}),ur=pe(function(e,t){"use strict"
var r="object"==(void 0===s?"undefined":l(s))&&s.all,n=void 0===r&&void 0!==r
t.exports={all:r,IS_HTMLDDA:n}}),ir=pe(function(e,t){"use strict"
var r=ur(),n=r.all
t.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===n}:function(e){return"function"==typeof e}}),sr=pe(function(e,t){"use strict"
var r=er()
t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})}),lr=pe(function(e,t){"use strict"
var r=tr(),n=Function.prototype.call
t.exports=r?n.bind(n):function(){return n.apply(n,arguments)}}),cr=pe(function(e){"use strict"
var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,n=r&&!t.call({1:2},1)
e.f=n?function(e){var t=r(this,e)
return!!t&&t.enumerable}:t}),dr=pe(function(e,t){"use strict"
t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}),pr=pe(function(e,t){"use strict"
var r=nr(),n=er(),a=ar(),o=Object,u=r("".split)
t.exports=n(function(){return!o("z").propertyIsEnumerable(0)})?function(e){return"String"===a(e)?u(e,""):o(e)}:o}),fr=pe(function(e,t){"use strict"
t.exports=function(e){return null==e}}),Dr=pe(function(e,t){"use strict"
var r=fr(),n=TypeError
t.exports=function(e){if(r(e))throw new n("Can't call method on "+e)
return e}}),mr=pe(function(e,t){"use strict"
var r=pr(),n=Dr()
t.exports=function(e){return r(n(e))}}),hr=pe(function(e,t){"use strict"
var r=ir(),n=ur(),a=n.all
t.exports=n.IS_HTMLDDA?function(e){return"object"==l(e)?null!==e:r(e)||e===a}:function(e){return"object"==l(e)?null!==e:r(e)}}),gr=pe(function(e,t){"use strict"
t.exports={}}),vr=pe(function(e,t){"use strict"
var r=gr(),n=Qt(),a=ir(),o=function(e){return a(e)?e:void 0}
t.exports=function(e,t){return arguments.length<2?o(r[e])||o(n[e]):r[e]&&r[e][t]||n[e]&&n[e][t]}}),br=pe(function(e,t){"use strict"
var r=nr()
t.exports=r({}.isPrototypeOf)}),yr=pe(function(e,t){"use strict"
t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""}),Fr=pe(function(e,t){"use strict"
var r,n,a=Qt(),o=yr(),u=a.process,i=a.Deno,s=u&&u.versions||i&&i.version,l=s&&s.v8
l&&(n=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(n=+r[1]),t.exports=n}),wr=pe(function(e,t){"use strict"
var r=Fr(),n=er(),a=Qt().String
t.exports=!!Object.getOwnPropertySymbols&&!n(function(){var e=Symbol("symbol detection")
return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41})}),Er=pe(function(e,t){"use strict"
var r=wr()
t.exports=r&&!Symbol.sham&&"symbol"==l(Symbol.iterator)}),Cr=pe(function(e,t){"use strict"
var r=vr(),n=ir(),a=br(),o=Er(),u=Object
t.exports=o?function(e){return"symbol"==l(e)}:function(e){var t=r("Symbol")
return n(t)&&a(t.prototype,u(e))}}),xr=pe(function(e,t){"use strict"
var r=String
t.exports=function(e){try{return r(e)}catch(e){return"Object"}}}),Ar=pe(function(e,t){"use strict"
var r=ir(),n=xr(),a=TypeError
t.exports=function(e){if(r(e))return e
throw new a(n(e)+" is not a function")}}),kr=pe(function(e,t){"use strict"
var r=Ar(),n=fr()
t.exports=function(e,t){var a=e[t]
return n(a)?void 0:r(a)}}),Nr=pe(function(e,t){"use strict"
var r=lr(),n=ir(),a=hr(),o=TypeError
t.exports=function(e,t){var u,i
if("string"===t&&n(u=e.toString)&&!a(i=r(u,e)))return i
if(n(u=e.valueOf)&&!a(i=r(u,e)))return i
if("string"!==t&&n(u=e.toString)&&!a(i=r(u,e)))return i
throw new o("Can't convert object to primitive value")}}),Br=pe(function(e,t){"use strict"
t.exports=!0}),Tr=pe(function(e,t){"use strict"
var r=Qt(),n=Object.defineProperty
t.exports=function(e,t){try{n(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}}),Rr=pe(function(e,t){"use strict"
var r=Qt(),n=Tr(),a="__core-js_shared__",o=r[a]||n(a,{})
t.exports=o}),Sr=pe(function(e,t){"use strict"
var r=Br(),n=Rr();(t.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),_r=pe(function(e,t){"use strict"
var r=Dr(),n=Object
t.exports=function(e){return n(r(e))}}),Or=pe(function(e,t){"use strict"
var r=nr(),n=_r(),a=r({}.hasOwnProperty)
t.exports=Object.hasOwn||function(e,t){return a(n(e),t)}}),Mr=pe(function(e,t){"use strict"
var r=nr(),n=0,a=Math.random(),o=r(1..toString)
t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++n+a,36)}}),Pr=pe(function(e,t){"use strict"
var r=Qt(),n=Sr(),a=Or(),o=Mr(),u=wr(),i=Er(),s=r.Symbol,l=n("wks"),c=i?s.for||s:s&&s.withoutSetter||o
t.exports=function(e){return a(l,e)||(l[e]=u&&a(s,e)?s[e]:c("Symbol."+e)),l[e]}}),Ir=pe(function(e,t){"use strict"
var r=lr(),n=hr(),a=Cr(),o=kr(),u=Nr(),i=Pr(),s=TypeError,l=i("toPrimitive")
t.exports=function(e,t){if(!n(e)||a(e))return e
var i,c=o(e,l)
if(c){if(void 0===t&&(t="default"),i=r(c,e,t),!n(i)||a(i))return i
throw new s("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}}),jr=pe(function(e,t){"use strict"
var r=Ir(),n=Cr()
t.exports=function(e){var t=r(e,"string")
return n(t)?t:t+""}}),Lr=pe(function(e,t){"use strict"
var r=Qt(),n=hr(),a=r.document,o=n(a)&&n(a.createElement)
t.exports=function(e){return o?a.createElement(e):{}}}),qr=pe(function(e,t){"use strict"
var r=sr(),n=er(),a=Lr()
t.exports=!r&&!n(function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a})}),zr=pe(function(e){"use strict"
var t=sr(),r=lr(),n=cr(),a=dr(),o=mr(),u=jr(),i=Or(),s=qr(),l=Object.getOwnPropertyDescriptor
e.f=t?l:function(e,t){if(e=o(e),t=u(t),s)try{return l(e,t)}catch(e){}if(i(e,t))return a(!r(n.f,e,t),e[t])}}),Vr=pe(function(e,t){"use strict"
var r=er(),n=ir(),a=/#|\.prototype\./,o=function(e,t){var a=i[u(e)]
return a===l||a!==s&&(n(t)?r(t):!!t)},u=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},i=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P"
t.exports=o}),$r=pe(function(e,t){"use strict"
var r=or(),n=Ar(),a=tr(),o=r(r.bind)
t.exports=function(e,t){return n(e),void 0===t?e:a?o(e,t):function(){return e.apply(t,arguments)}}}),Hr=pe(function(e,t){"use strict"
var r=sr(),n=er()
t.exports=r&&n(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})}),Ur=pe(function(e,t){"use strict"
var r=hr(),n=String,a=TypeError
t.exports=function(e){if(r(e))return e
throw new a(n(e)+" is not an object")}}),Gr=pe(function(e){"use strict"
var t=sr(),r=qr(),n=Hr(),a=Ur(),o=jr(),u=TypeError,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",d="writable"
e.f=t?n?function(e,t,r){if(a(e),t=o(t),a(r),"function"==typeof e&&"prototype"===t&&"value"in r&&d in r&&!r[d]){var n=s(e,t)
n&&n[d]&&(e[t]=r.value,r={configurable:c in r?r[c]:n[c],enumerable:l in r?r[l]:n[l],writable:!1})}return i(e,t,r)}:i:function(e,t,n){if(a(e),t=o(t),a(n),r)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw new u("Accessors not supported")
return"value"in n&&(e[t]=n.value),e}}),Wr=pe(function(e,t){"use strict"
var r=sr(),n=Gr(),a=dr()
t.exports=r?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}}),Yr=pe(function(e,t){"use strict"
var r=Qt(),n=rr(),a=or(),o=ir(),u=zr().f,i=Vr(),s=gr(),c=$r(),d=Wr(),p=Or(),f=function(e){var t=function(r,a,o){if(this instanceof t){switch(arguments.length){case 0:return new e
case 1:return new e(r)
case 2:return new e(r,a)}return new e(r,a,o)}return n(e,this,arguments)}
return t.prototype=e.prototype,t}
t.exports=function(e,t){var n,D,m,h,g,v,b,y,F,w=e.target,E=e.global,C=e.stat,x=e.proto,A=E?r:C?r[w]:(r[w]||{}).prototype,k=E?s:s[w]||d(s,w,{})[w],N=k.prototype
for(h in t)D=!(n=i(E?h:w+(C?".":"#")+h,e.forced))&&A&&p(A,h),v=k[h],D&&(b=e.dontCallGetSet?(F=u(A,h))&&F.value:A[h]),g=D&&b?b:t[h],D&&l(v)==l(g)||(y=e.bind&&D?c(g,r):e.wrap&&D?f(g):x&&o(g)?a(g):g,(e.sham||g&&g.sham||v&&v.sham)&&d(y,"sham",!0),d(k,h,y),x&&(p(s,m=w+"Prototype")||d(s,m,{}),d(s[m],h,g),e.real&&N&&(n||!N[h])&&d(N,h,g)))}}),Kr=pe(function(){"use strict"
Yr()({target:"Object",stat:!0},{hasOwn:Or()})}),Xr=pe(function(e,t){"use strict"
Kr()
var r=gr()
t.exports=r.Object.hasOwn}),Zr=pe(function(e,t){"use strict"
var r=Xr()
t.exports=r}),Jr=pe(function(e,t){"use strict"
var r=Zr()
t.exports=r}),Qr=pe(function(e,t){"use strict"
var r=Sr(),n=Mr(),a=r("keys")
t.exports=function(e){return a[e]||(a[e]=n(e))}}),en=pe(function(e,t){"use strict"
var r=er()
t.exports=!r(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})}),tn=pe(function(e,t){"use strict"
var r=Or(),n=ir(),a=_r(),o=Qr(),u=en(),i=o("IE_PROTO"),s=Object,l=s.prototype
t.exports=u?s.getPrototypeOf:function(e){var t=a(e)
if(r(t,i))return t[i]
var o=t.constructor
return n(o)&&t instanceof o?o.prototype:t instanceof s?l:null}}),rn=pe(function(e,t){"use strict"
var r=Math.ceil,n=Math.floor
t.exports=Math.trunc||function(e){var t=+e
return(t>0?n:r)(t)}}),nn=pe(function(e,t){"use strict"
var r=rn()
t.exports=function(e){var t=+e
return t!=t||0===t?0:r(t)}}),an=pe(function(e,t){"use strict"
var r=nn(),n=Math.max,a=Math.min
t.exports=function(e,t){var o=r(e)
return o<0?n(o+t,0):a(o,t)}}),on=pe(function(e,t){"use strict"
var r=nn(),n=Math.min
t.exports=function(e){return e>0?n(r(e),9007199254740991):0}}),un=pe(function(e,t){"use strict"
var r=on()
t.exports=function(e){return r(e.length)}}),sn=pe(function(e,t){"use strict"
var r=mr(),n=an(),a=un(),o=function(e){return function(t,o,u){var i,s=r(t),l=a(s),c=n(u,l)
if(e&&o!=o){for(;l>c;)if((i=s[c++])!=i)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===o)return e||c||0
return!e&&-1}}
t.exports={includes:o(!0),indexOf:o(!1)}}),ln=pe(function(e,t){"use strict"
t.exports={}}),cn=pe(function(e,t){"use strict"
var r=nr(),n=Or(),a=mr(),o=sn().indexOf,u=ln(),i=r([].push)
t.exports=function(e,t){var r,s=a(e),l=0,c=[]
for(r in s)!n(u,r)&&n(s,r)&&i(c,r)
for(;t.length>l;)n(s,r=t[l++])&&(~o(c,r)||i(c,r))
return c}}),dn=pe(function(e,t){"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]}),pn=pe(function(e,t){"use strict"
var r=cn(),n=dn()
t.exports=Object.keys||function(e){return r(e,n)}}),fn=pe(function(e,t){"use strict"
var r=sr(),n=er(),a=nr(),o=tn(),u=pn(),i=mr(),s=a(cr().f),l=a([].push),c=r&&n(function(){var e=Object.create(null)
return e[2]=2,!s(e,2)}),d=function(e){return function(t){for(var n,a=i(t),d=u(a),p=c&&null===o(a),f=d.length,D=0,m=[];f>D;)n=d[D++],r&&!(p?n in a:s(a,n))||l(m,e?[n,a[n]]:a[n])
return m}}
t.exports={entries:d(!0),values:d(!1)}}),Dn=pe(function(){"use strict"
var e=Yr(),t=fn().values
e({target:"Object",stat:!0},{values:function(e){return t(e)}})}),mn=pe(function(e,t){"use strict"
Dn()
var r=gr()
t.exports=r.Object.values}),hn=pe(function(e,t){"use strict"
var r=mn()
t.exports=r}),gn=pe(function(e,t){"use strict"
var r=hn()
t.exports=r}),vn=pe(function(e,t){"use strict"
var r={}
r[Pr()("toStringTag")]="z",t.exports="[object z]"===String(r)}),bn=pe(function(e,t){"use strict"
var r=vn(),n=ir(),a=ar(),o=Pr()("toStringTag"),u=Object,i="Arguments"===a(function(){return arguments}())
t.exports=r?a:function(e){var t,r,s
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=u(e),o))?r:i?a(t):"Object"===(s=a(t))&&n(t.callee)?"Arguments":s}}),yn=pe(function(e,t){"use strict"
var r=bn(),n=String
t.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string")
return n(e)}}),Fn=pe(function(e,t){"use strict"
var r=nr(),n=nn(),a=yn(),o=Dr(),u=r("".charAt),i=r("".charCodeAt),s=r("".slice),l=function(e){return function(t,r){var l,c,d=a(o(t)),p=n(r),f=d.length
return p<0||p>=f?e?"":void 0:(l=i(d,p))<55296||l>56319||p+1===f||(c=i(d,p+1))<56320||c>57343?e?u(d,p):l:e?s(d,p,p+2):c-56320+(l-55296<<10)+65536}}
t.exports={codeAt:l(!1),charAt:l(!0)}}),wn=pe(function(e,t){"use strict"
var r=Qt(),n=ir(),a=r.WeakMap
t.exports=n(a)&&/native code/.test(String(a))}),En=pe(function(e,t){"use strict"
var r,n,a,o,u,i=wn(),s=Qt(),l=hr(),c=Wr(),d=Or(),p=Rr(),f=Qr(),D=ln(),m="Object already initialized",h=s.TypeError,g=s.WeakMap
i||p.state?((o=p.state||(p.state=new g)).get=o.get,o.has=o.has,o.set=o.set,r=function(e,t){if(o.has(e))throw new h(m)
return t.facade=e,o.set(e,t),t},n=function(e){return o.get(e)||{}},a=function(e){return o.has(e)}):(D[u=f("state")]=!0,r=function(e,t){if(d(e,u))throw new h(m)
return t.facade=e,c(e,u,t),t},n=function(e){return d(e,u)?e[u]:{}},a=function(e){return d(e,u)}),t.exports={set:r,get:n,has:a,enforce:function(e){return a(e)?n(e):r(e,{})},getterFor:function(e){return function(t){var r
if(!l(t)||(r=n(t)).type!==e)throw new h("Incompatible receiver, "+e+" required")
return r}}}}),Cn=pe(function(e,t){"use strict"
var r=sr(),n=Or(),a=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,u=n(a,"name"),i=u&&"something"===function(){}.name,s=u&&(!r||r&&o(a,"name").configurable)
t.exports={EXISTS:u,PROPER:i,CONFIGURABLE:s}}),xn=pe(function(e){"use strict"
var t=sr(),r=Hr(),n=Gr(),a=Ur(),o=mr(),u=pn()
e.f=t&&!r?Object.defineProperties:function(e,t){a(e)
for(var r,i=o(t),s=u(t),l=s.length,c=0;l>c;)n.f(e,r=s[c++],i[r])
return e}}),An=pe(function(e,t){"use strict"
var r=vr()
t.exports=r("document","documentElement")}),kn=pe(function(e,t){"use strict"
var r,n=Ur(),a=xn(),o=dn(),u=ln(),i=An(),l=Lr(),c=Qr(),d="prototype",p="script",f=c("IE_PROTO"),D=function(){},m=function(e){return"<"+p+">"+e+"</"+p+">"},h=function(e){e.write(m("")),e.close()
var t=e.parentWindow.Object
return e=null,t},g=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}var e,t,n
g=void 0!==s?s.domain&&r?h(r):(t=l("iframe"),n="java"+p+":",t.style.display="none",i.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F):h(r)
for(var a=o.length;a--;)delete g[d][o[a]]
return g()}
u[f]=!0,t.exports=Object.create||function(e,t){var r
return null!==e?(D[d]=n(e),r=new D,D[d]=null,r[f]=e):r=g(),void 0===t?r:a.f(r,t)}}),Nn=pe(function(e,t){"use strict"
var r=Wr()
t.exports=function(e,t,n,a){return a&&a.enumerable?e[t]=n:r(e,t,n),e}}),Bn=pe(function(e,t){"use strict"
var r,n,a,o=er(),u=ir(),i=hr(),s=kn(),l=tn(),c=Nn(),d=Pr(),p=Br(),f=d("iterator"),D=!1;[].keys&&("next"in(a=[].keys())?(n=l(l(a)))!==Object.prototype&&(r=n):D=!0),!i(r)||o(function(){var e={}
return r[f].call(e)!==e})?r={}:p&&(r=s(r)),u(r[f])||c(r,f,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:D}}),Tn=pe(function(e,t){"use strict"
var r=vn(),n=bn()
t.exports=r?{}.toString:function(){return"[object "+n(this)+"]"}}),Rn=pe(function(e,t){"use strict"
var r=vn(),n=Gr().f,a=Wr(),o=Or(),u=Tn(),i=Pr()("toStringTag")
t.exports=function(e,t,s,l){if(e){var c=s?e:e.prototype
o(c,i)||n(c,i,{configurable:!0,value:t}),l&&!r&&a(c,"toString",u)}}}),Sn=pe(function(e,t){"use strict"
t.exports={}}),_n=pe(function(e,t){"use strict"
var r=Bn().IteratorPrototype,n=kn(),a=dr(),o=Rn(),u=Sn(),i=function(){return this}
t.exports=function(e,t,s,l){var c=t+" Iterator"
return e.prototype=n(r,{next:a(+!l,s)}),o(e,c,!1,!0),u[c]=i,e}}),On=pe(function(e,t){"use strict"
var r=nr(),n=Ar()
t.exports=function(e,t,a){try{return r(n(Object.getOwnPropertyDescriptor(e,t)[a]))}catch(e){}}}),Mn=pe(function(e,t){"use strict"
var r=ir(),n=String,a=TypeError
t.exports=function(e){if("object"==l(e)||r(e))return e
throw new a("Can't set "+n(e)+" as a prototype")}}),Pn=pe(function(e,t){"use strict"
var r=On(),n=Ur(),a=Mn()
t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,o={}
try{(e=r(Object.prototype,"__proto__","set"))(o,[]),t=o instanceof Array}catch(e){}return function(r,o){return n(r),a(o),t?e(r,o):r.__proto__=o,r}}():void 0)}),In=pe(function(e,t){"use strict"
var r=Yr(),n=lr(),a=Br(),o=Cn(),u=ir(),i=_n(),s=tn(),l=Pn(),c=Rn(),d=Wr(),p=Nn(),f=Pr(),D=Sn(),m=Bn(),h=o.PROPER,g=o.CONFIGURABLE,v=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,y=f("iterator"),F="keys",w="values",E="entries",C=function(){return this}
t.exports=function(e,t,o,f,m,x,A){i(o,t,f)
var k,N,B,T=function(e){if(e===m&&M)return M
if(!b&&e&&e in _)return _[e]
switch(e){case F:case w:case E:return function(){return new o(this,e)}}return function(){return new o(this)}},R=t+" Iterator",S=!1,_=e.prototype,O=_[y]||_["@@iterator"]||m&&_[m],M=!b&&O||T(m),P="Array"===t&&_.entries||O
if(P&&(k=s(P.call(new e)))!==Object.prototype&&k.next&&(a||s(k)===v||(l?l(k,v):u(k[y])||p(k,y,C)),c(k,R,!0,!0),a&&(D[R]=C)),h&&m===w&&O&&O.name!==w&&(!a&&g?d(_,"name",w):(S=!0,M=function(){return n(O,this)})),m)if(N={values:T(w),keys:x?M:T(F),entries:T(E)},A)for(B in N)(b||S||!(B in _))&&p(_,B,N[B])
else r({target:t,proto:!0,forced:b||S},N)
return a&&!A||_[y]===M||p(_,y,M,{name:m}),D[t]=M,N}}),jn=pe(function(e,t){"use strict"
t.exports=function(e,t){return{value:e,done:t}}}),Ln=pe(function(){"use strict"
var e=Fn().charAt,t=yn(),r=En(),n=In(),a=jn(),o="String Iterator",u=r.set,i=r.getterFor(o)
n(String,"String",function(e){u(this,{type:o,string:t(e),index:0})},function(){var t,r=i(this),n=r.string,o=r.index
return o>=n.length?a(void 0,!0):(t=e(n,o),r.index+=t.length,a(t,!1))})}),qn=pe(function(e,t){"use strict"
var r=lr(),n=Ur(),a=kr()
t.exports=function(e,t,o){var u,i
n(e)
try{if(!(u=a(e,"return"))){if("throw"===t)throw o
return o}u=r(u,e)}catch(e){i=!0,u=e}if("throw"===t)throw o
if(i)throw u
return n(u),o}}),zn=pe(function(e,t){"use strict"
var r=Ur(),n=qn()
t.exports=function(e,t,a,o){try{return o?t(r(a)[0],a[1]):t(a)}catch(t){n(e,"throw",t)}}}),Vn=pe(function(e,t){"use strict"
var r=Pr(),n=Sn(),a=r("iterator"),o=Array.prototype
t.exports=function(e){return void 0!==e&&(n.Array===e||o[a]===e)}}),$n=pe(function(e,t){"use strict"
var r=nr(),n=ir(),a=Rr(),o=r(Function.toString)
n(a.inspectSource)||(a.inspectSource=function(e){return o(e)}),t.exports=a.inspectSource}),Hn=pe(function(e,t){"use strict"
var r=nr(),n=er(),a=ir(),o=bn(),u=vr(),i=$n(),s=function(){},l=[],c=u("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=r(d.exec),f=!d.test(s),D=function(e){if(!a(e))return!1
try{return c(s,l,e),!0}catch(e){return!1}},m=function(e){if(!a(e))return!1
switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!p(d,i(e))}catch(e){return!0}}
m.sham=!0,t.exports=!c||n(function(){var e
return D(D.call)||!D(Object)||!D(function(){e=!0})||e})?m:D}),Un=pe(function(e,t){"use strict"
var r=jr(),n=Gr(),a=dr()
t.exports=function(e,t,o){var u=r(t)
u in e?n.f(e,u,a(0,o)):e[u]=o}}),Gn=pe(function(e,t){"use strict"
var r=bn(),n=kr(),a=fr(),o=Sn(),u=Pr()("iterator")
t.exports=function(e){if(!a(e))return n(e,u)||n(e,"@@iterator")||o[r(e)]}}),Wn=pe(function(e,t){"use strict"
var r=lr(),n=Ar(),a=Ur(),o=xr(),u=Gn(),i=TypeError
t.exports=function(e,t){var s=arguments.length<2?u(e):t
if(n(s))return a(r(s,e))
throw new i(o(e)+" is not iterable")}}),Yn=pe(function(e,t){"use strict"
var r=$r(),n=lr(),a=_r(),o=zn(),u=Vn(),i=Hn(),s=un(),l=Un(),c=Wn(),d=Gn(),p=Array
t.exports=function(e){var t=a(e),f=i(this),D=arguments.length,m=D>1?arguments[1]:void 0,h=void 0!==m
h&&(m=r(m,D>2?arguments[2]:void 0))
var g,v,b,y,F,w,E=d(t),C=0
if(!E||this===p&&u(E))for(g=s(t),v=f?new this(g):p(g);g>C;C++)w=h?m(t[C],C):t[C],l(v,C,w)
else for(F=(y=c(t,E)).next,v=f?new this:[];!(b=n(F,y)).done;C++)w=h?o(y,m,[b.value,C],!0):b.value,l(v,C,w)
return v.length=C,v}}),Kn=pe(function(e,t){"use strict"
var r,n,a=Pr()("iterator"),o=!1
try{r=0,(n={next:function(){return{done:!!r++}},return:function(){o=!0}})[a]=function(){return this},Array.from(n,function(){throw 2})}catch(e){}t.exports=function(e,t){try{if(!t&&!o)return!1}catch(e){return!1}var r=!1
try{var n={}
n[a]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r}}),Xn=pe(function(){"use strict"
var e=Yr(),t=Yn()
e({target:"Array",stat:!0,forced:!Kn()(function(e){Array.from(e)})},{from:t})}),Zn=pe(function(e,t){"use strict"
Ln(),Xn()
var r=gr()
t.exports=r.Array.from}),Jn=pe(function(e,t){"use strict"
var r=Zn()
t.exports=r}),Qn=pe(function(e,t){"use strict"
var r=Jn()
t.exports=r}),ea=pe(function(e,t){!function(){"use strict"
var n={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":l(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){u.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==u)return u
if(void 0!==i)return i
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),n.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},r=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(r,function(e){return t[e]||e}):""}},void 0!==t&&t.exports?t.exports=n:void 0===(a=function(){return n}.call(e,r,e,t))||(t.exports=a)
var o={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},s=/$^/
function c(e,t,r){return("string"==typeof t?t:t.toString()).replace(e.define||s,function(t,n,a,o){return 0===n.indexOf("def.")&&(n=n.substring(4)),n in r||(":"===a?(e.defineParams&&o.replace(e.defineParams,function(e,t,a){r[n]={arg:t,text:a}}),n in r||(r[n]=o)):new Function("def","def['"+n+"']="+o)(r)),""}).replace(e.use||s,function(t,n){e.useParams&&(n=n.replace(e.useParams,function(e,t,n,a){if(r[n]&&r[n].arg&&a){var o=(n+":"+a).replace(/'|\\/g,"_")
return r.__exp=r.__exp||{},r.__exp[o]=r[n].text.replace(new RegExp("(^|[^\\w$])"+r[n].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}}))
var a=new Function("def","return "+n)(r)
return a?c(e,a,r):a})}function d(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}n.template=function(e,t,r){var a,u,i=(t=t||n.templateSettings).append?o.append:o.split,l=0,p=t.use||t.define?c(t,e,r||{}):e
p=("var out='"+(t.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(t.interpolate||s,function(e,t){return i.start+d(t)+i.end}).replace(t.encode||s,function(e,t){return a=!0,i.startencode+d(t)+i.end}).replace(t.conditional||s,function(e,t,r){return t?r?"';}else if("+d(r)+"){out+='":"';}else{out+='":r?"';if("+d(r)+"){out+='":"';}out+='"}).replace(t.iterate||s,function(e,t,r,n){return t?(l+=1,u=n||"i"+l,t=d(t),"';var arr"+l+"="+t+";if(arr"+l+"){var "+r+","+u+"=-1,l"+l+"=arr"+l+".length-1;while("+u+"<l"+l+"){"+r+"=arr"+l+"["+u+"+=1];out+='"):"';} } out+='"}).replace(t.evaluate||s,function(e,t){return"';"+d(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),a&&(t.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=n.encodeHTMLSource(t.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+n.encodeHTMLSource.toString()+"("+(t.doNotSkipEncoded||"")+"));"+p)
try{return new Function(t.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},n.compile=function(e,t){return n.template(e,null,t)}}()}),ta={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,selectorSimilarFilterLimit:700,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach(function(e){var t=e.name,r=e.value,n=e.priority,a=e.group
ta[t]=r,ta[t+"_PRIO"]=n,ta[t+"_GROUP"]=a,ta.results[n]=r,ta.resultGroups[n]=a,ta.resultGroupMap[r]=a}),Object.freeze(ta.results),Object.freeze(ta.resultGroups),Object.freeze(ta.resultGroupMap),Object.freeze(ta)
var ra=ta,na=function(){"object"===("undefined"==typeof console?"undefined":l(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},aa=/[\t\r\n\f]/g,oa=Z(function e(){K(this,e),this.parent=void 0},[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var r=" "+e+" "
return(" "+t+" ").replace(aa," ").indexOf(r)>=0}}]),ua={}
fe(ua,{DqElement:function(){return ao},aggregate:function(){return ia},aggregateChecks:function(){return fa},aggregateNodeResults:function(){return ma},aggregateResult:function(){return ga},areStylesSet:function(){return va},assert:function(){return ba},checkHelper:function(){return oo},clone:function(){return uo},closest:function(){return Eo},collectResultsFromFrames:function(){return vu},contains:function(){return bu},convertSelector:function(){return yo},cssParser:function(){return lo},deepMerge:function(){return yu},escapeSelector:function(){return Fa},extendMetaData:function(){return Fu},filterHtmlAttrs:function(){return hm},finalizeRuleResult:function(){return Da},findBy:function(){return mu},getAllChecks:function(){return Du},getAncestry:function(){return Ka},getBaseLang:function(){return eD},getCheckMessage:function(){return lD},getCheckOption:function(){return cD},getEnvironmentData:function(){return dD},getFlattenedTree:function(){return Zf},getFrameContexts:function(){return CD},getFriendlyUriEnd:function(){return xa},getNodeAttributes:function(){return Aa},getNodeFromTree:function(){return to},getPreloadConfig:function(){return cm},getRootNode:function(){return xu},getRule:function(){return xD},getScroll:function(){return kD},getScrollState:function(){return BD},getSelector:function(){return Ga},getSelectorData:function(){return qa},getShadowSelector:function(){return Ra},getStandards:function(){return TD},getStyleSheetFactory:function(){return SD},getXpath:function(){return Za},injectStyle:function(){return _D},isArrayLike:function(){return OD},isContextObject:function(){return ID},isContextProp:function(){return jD},isContextSpec:function(){return PD},isHidden:function(){return zD},isHtmlElement:function(){return VD},isLabelledFramesSelector:function(){return LD},isLabelledShadowDomSelector:function(){return qD},isNodeInContext:function(){return $D},isShadowRoot:function(){return Eu},isValidLang:function(){return Nm},isXHTML:function(){return Ta},matchAncestry:function(){return UD},matches:function(){return co},matchesExpression:function(){return wo},matchesSelector:function(){return ka},memoize:function(){return Ba},mergeResults:function(){return gu},nodeLookup:function(){return WD},nodeSerializer:function(){return fu},nodeSorter:function(){return GD},objectHasOwn:function(){return MD},parseCrossOriginStylesheet:function(){return XD},parseSameOriginStylesheet:function(){return YD},parseStylesheet:function(){return KD},parseTabindex:function(){return ZD},performanceTimer:function(){return JD},pollyfillElementsFromPoint:function(){return QD},preload:function(){return sm},preloadCssom:function(){return nm},preloadMedia:function(){return im},processMessage:function(){return sD},publishMetaData:function(){return dm},querySelectorAll:function(){return fm},querySelectorAllFilter:function(){return rm},queue:function(){return No},respondable:function(){return uu},ruleShouldRun:function(){return mm},select:function(){return vm},sendCommandToFrame:function(){return su},setScrollState:function(){return ym},shadowSelect:function(){return Fm},shadowSelectAll:function(){return Em},shouldPreload:function(){return lm},toArray:function(){return ya},tokenList:function(){return Hf},uniqueArray:function(){return em},uuid:function(){return Ho},validInputTypes:function(){return xm},validLangs:function(){return km}})
var ia=function(e,t,r){t=t.slice(),r&&t.push(r)
var n=t.map(function(t){return e.indexOf(t)}).sort()
return e[n.pop()]},sa=ra.CANTTELL_PRIO,la=ra.FAIL_PRIO,ca=[]
ca[ra.PASS_PRIO]=!0,ca[ra.CANTTELL_PRIO]=null,ca[ra.FAIL_PRIO]=!1
var da=["any","all","none"]
function pa(e,t){return da.reduce(function(r,n){return r[n]=(e[n]||[]).map(function(e){return t(e,n)}),r},{})}var fa=function(e){var t=Object.assign({},e)
pa(t,function(e,t){var r=void 0===e.result?-1:ca.indexOf(e.result)
e.priority=-1!==r?r:ra.CANTTELL_PRIO,"none"===t&&(e.priority===ra.PASS_PRIO?e.priority=ra.FAIL_PRIO:e.priority===ra.FAIL_PRIO&&(e.priority=ra.PASS_PRIO))})
var r={all:t.all.reduce(function(e,t){return Math.max(e,t.priority)},0),none:t.none.reduce(function(e,t){return Math.max(e,t.priority)},0),any:t.any.reduce(function(e,t){return Math.min(e,t.priority)},4)%4}
t.priority=Math.max(r.all,r.none,r.any)
var n=[]
return da.forEach(function(e){t[e]=t[e].filter(function(n){return n.priority===t.priority&&n.priority===r[e]}),t[e].forEach(function(e){return n.push(e.impact)})}),[sa,la].includes(t.priority)?t.impact=ia(ra.impact,n):t.impact=null,pa(t,function(e){delete e.result,delete e.priority}),t.result=ra.results[t.priority],delete t.priority,t}
function Da(e){var t=c._audit.rules.find(function(t){return t.id===e.id})
return t&&t.impact&&e.nodes.forEach(function(e){["any","all","none"].forEach(function(r){(e[r]||[]).forEach(function(e){e.impact=t.impact})})}),Object.assign(e,ma(e.nodes)),delete e.nodes,e}var ma=function(e){var t={}
if((e=e.map(function(e){if(e.any&&e.all&&e.none)return fa(e)
if(Array.isArray(e.node))return Da(e)
throw new TypeError("Invalid Result type")}))&&e.length){var r=e.map(function(e){return e.result})
t.result=ia(ra.results,r,t.result)}else t.result="inapplicable"
ra.resultGroups.forEach(function(e){return t[e]=[]}),e.forEach(function(e){var r=ra.resultGroupMap[e.result]
t[r].push(e)})
var n=ra.FAIL_GROUP
if(0===t[n].length&&(n=ra.CANTTELL_GROUP),t[n].length>0){var a=t[n].map(function(e){return e.impact})
t.impact=ia(ra.impact,a)||null}else t.impact=null
return t}
function ha(e,t,r){var n=Object.assign({},t)
n.nodes=(n[r]||[]).concat(),ra.resultGroups.forEach(function(e){delete n[e]}),e[r].push(n)}var ga=function(e){var t={}
return ra.resultGroups.forEach(function(e){return t[e]=[]}),e.forEach(function(e){e.error?ha(t,e,ra.CANTTELL_GROUP):e.result===ra.NA?ha(t,e,ra.NA_GROUP):ra.resultGroups.forEach(function(r){Array.isArray(e[r])&&e[r].length>0&&ha(t,e,r)})}),t},va=function e(t,r,n){var a=u.getComputedStyle(t,null)
if(!a)return!1
for(var o=0;o<r.length;++o){var i=r[o]
if(a.getPropertyValue(i.property)===i.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===n.toUpperCase())&&e(t.parentNode,r,n)},ba=function(e,t){if(!e)throw new Error(t)},ya=function(e){return Array.prototype.slice.call(e)},Fa=function(e){for(var t,r=String(e),n=r.length,a=-1,o="",u=r.charCodeAt(0);++a<n;)0!=(t=r.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==u?"\\"+t.toString(16)+" ":0==a&&1==n&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+r.charAt(a):r.charAt(a):o+="�"
return o}
function wa(e,t){return[e.substring(0,t),e.substring(t)]}function Ea(e){return e.replace(/\s+$/,"")}var Ca,xa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var r=t.currentDomain,n=t.maxLength,a=void 0===n?25:n,o=function(e){var t=e,r="",n="",a="",o="",u=""
if(e.includes("#")){var i=G(wa(e,e.indexOf("#")),2)
e=i[0],u=i[1]}if(e.includes("?")){var s=G(wa(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=G(e.split("://"),2)
r=l[0]
var c=G(wa(e=l[1],e.indexOf("/")),2)
n=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=G(wa(e=e.substr(2),e.indexOf("/")),2)
n=d[0],e=d[1]}if("www."===n.substr(0,4)&&(n=n.substr(4)),n&&n.includes(":")){var p=G(wa(n,n.indexOf(":")),2)
n=p[0],a=p[1]}return{original:t,protocol:r,domain:n,port:a,path:e,query:o,hash:u}}(e),u=o.path,i=o.domain,s=o.hash,l=u.substr(u.substr(0,u.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?Ea(l+s):l.length<2&&s.length>2&&s.length<=a?Ea(s):void 0
if(i&&i.length<a&&u.length<=1)return Ea(i+u)
if(u==="/"+l&&i&&r&&i!==r&&(i+u).length<=a)return Ea(i+u)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?Ea(l):void 0}},Aa=function(e){return e.attributes instanceof u.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},ka=function(e,t){return Ca&&e[Ca]||(Ca=function(e){var t,r,n=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=n.length
for(t=0;t<a;t++)if(e[r=n[t]])return r}(e)),!!e[Ca]&&e[Ca](t)},Na=De(Ut())
c._memoizedFns=[]
var Ba=function(e){var t=(0,Na.default)(e)
return c._memoizedFns.push(t),t},Ta=Ba(function(e){return!(null==e||!e.createElement)&&"A"===e.createElement("A").localName})
function Ra(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var n=t.getRootNode&&t.getRootNode()||s
if(11!==n.nodeType)return e(t,r,n)
for(var a=[];11===n.nodeType;){if(!n.host)return""
a.unshift({elm:t,doc:n}),n=(t=n.host).getRootNode()}return a.unshift({elm:t,doc:n}),a.map(function(t){return e(t.elm,r,t.doc)})}var Sa=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow","xmlns"],_a=31,Oa=/([\\"])/g,Ma=/(\r\n|\r|\n)/g
function Pa(e){return e.replace(Oa,"\\$1").replace(Ma,"\\a ")}function Ia(e,t){var r,n=t.name
if(-1!==n.indexOf("href")||-1!==n.indexOf("src")){var a=xa(e.getAttribute(n))
r=a?Fa(t.name)+'$="'+Pa(a)+'"':Fa(t.name)+'="'+Pa(e.getAttribute(n))+'"'}else r=Fa(n)+'="'+Pa(t.value)+'"'
return r}function ja(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function La(e){return!Sa.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<_a)}function qa(e){for(var t={classes:{},tags:{},attributes:{}},r=(e=Array.isArray(e)?e:[e]).slice(),n=[],a=function(){var e=r.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach(function(e){var r=Fa(e)
t.classes[r]?t.classes[r]++:t.classes[r]=1}),a.hasAttributes()&&Array.from(Aa(a)).filter(La).forEach(function(e){var r=Ia(a,e)
r&&(t.attributes[r]?t.attributes[r]++:t.attributes[r]=1)})}for(e.children.length&&(n.push(r),r=e.children.slice());!r.length&&n.length;)r=n.pop()};r.length;)a()
return t}function za(e,t){var r=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return r.find(function(r){return r!==e&&ka(r,t)})?":nth-child("+(1+r.indexOf(e))+")":""}function Va(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||s,r="#"+Fa(e.getAttribute("id")||"")
return r.match(/player_uid_/)||1!==t.querySelectorAll(r).length?void 0:r}}function $a(e){var t=Ta(s)
return Fa(t?e.localName:e.nodeName.toLowerCase())}function Ha(e,t){var r,n="",a=function(e,t){var r=[],n=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach(function(t){var o=Fa(t)
n[o]<a[e.nodeName]&&r.push({name:o,count:n[o],species:"class"})}),r.sort(ja)}(e,t),o=function(e,t){var r=[],n=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(Aa(e)).filter(La).forEach(function(t){var o=Ia(e,t)
o&&n[o]<a[e.nodeName]&&r.push({name:o,count:n[o],species:"attribute"})}),r.sort(ja)}(e,t)
return a.length&&1===a[0].count?r=[a[0]]:o.length&&1===o[0].count?(r=[o[0]],n=$a(e)):((r=a.concat(o)).sort(ja),(r=r.slice(0,3)).some(function(e){return"class"===e.species})?r.sort(function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1}):n=$a(e)),n+r.reduce(function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e},"")}function Ua(e,t,r){if(!c._selectorData)throw new Error("Expect axe._selectorData to be set up")
var n,a,o=t.toRoot,u=void 0!==o&&o
do{var i=Va(e)
i||(i=Ha(e,c._selectorData),i+=za(e,i)),n=n?i+" > "+n:i,a=!a||a.length>ra.selectorSimilarFilterLimit?Wa(r,n):a.filter(function(e){return ka(e,n)}),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?n:-1!==n.indexOf(" > ")?":root"+n.substring(n.indexOf(" > ")):":root"}var Ga=Ba(function(e,t){return Ra(Ua,e,t)}),Wa=Ba(function(e,t){return Array.from(e.querySelectorAll(t))})
function Ya(e){var t=e.nodeName.toLowerCase(),r=e.parentElement,n=e.parentNode,a=""
if("head"!==t&&"body"!==t&&(null==n?void 0:n.children.length)>1){var o=Array.prototype.indexOf.call(n.children,e)+1
a=":nth-child(".concat(o,")")}return r?Ya(r)+" > "+t+a:t+a}function Ka(e,t){return Ra(Ya,e,t)}function Xa(e,t){var r,n
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=Xa(e.parentNode,t)),e.previousSibling){n=1,r=e.previousSibling
do{1===r.nodeType&&r.nodeName===e.nodeName&&n++,r=r.previousSibling}while(r)
1===n&&(n=null)}else if(e.nextSibling){r=e.nextSibling
do{1===r.nodeType&&r.nodeName===e.nodeName?(n=1,r=null):(n=null,r=r.previousSibling)}while(r)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&Fa(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),n>1&&(a.count=n),t.push(a)}return t}var Za=function(e){return Xa(e).reduce(function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")},"")},Ja={},Qa={set:function(e,t){!function(e){ba("string"==typeof e,"key must be a string, "+l(e)+" given"),ba(""!==e,"key must not be empty")}(e),Ja[e]=t},get:function(e,t){if(function(e){ba("function"==typeof e||void 0===e,"creator must be a function or undefined, "+l(e)+" given")}(t),e in Ja)return Ja[e]
if("function"==typeof t){var r=t()
return ba(void 0!==r,"Cache creator function should not return undefined"),this.set(e,r),Ja[e]}},clear:function(){Ja={}}},eo=Qa,to=function(e,t){var r=t||e
return eo.get("nodeMap")?eo.get("nodeMap").get(r):null},ro="DqElm.RunOptions",no=Ba(function(e,t,r){var n,a,o,i,s,l
return null!==(n=t)&&void 0!==n||(t=null),null!==(a=r)&&void 0!==a||(r={}),t||(t=null!==(s=eo.get(ro))&&void 0!==s?s:{}),this.spec=r,e instanceof oa?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=to(e)),this.fromFrame=(null===(o=this.spec.selector)||void 0===o?void 0:o.length)>1,this._includeElementInJson=t.elementRef,t.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(i=this._virtualNode)||void 0===i?void 0:i.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,c._audit.noHtml||(this.source=null!==(l=this.spec.source)&&void 0!==l?l:function(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof u.XMLSerializer||(t=(new u.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var r=e.indexOf(">")
e=e.substring(0,r+1)}return e}(t||"")}(this._element)),this})
no.prototype={get selector(){return this.spec.selector||[Ga(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Ka(this.element)]},get xpath(){return this.spec.xpath||[Za(this.element)]},get element(){return this._element},toJSON:function(){var e={selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes,fromFrame:this.fromFrame}
return this._includeElementInJson&&(e.element=this._element),e}},no.fromFrame=function(e,t,r){var n=no.mergeSpecs(e,r)
return new no(r.element,t,n)},no.mergeSpecs=function(e,t){return U({},e,{selector:[].concat($(t.selector),$(e.selector)),ancestry:[].concat($(t.ancestry),$(e.ancestry)),xpath:[].concat($(t.xpath),$(e.xpath)),nodeIndexes:[].concat($(t.nodeIndexes),$(e.nodeIndexes)),fromFrame:!0})},no.setRunOptions=function(e){var t=e.elementRef,r=e.absolutePaths
eo.set(ro,{elementRef:t,absolutePaths:r})}
var ao=no,oo=function(e,t,r,n){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):n(t)}},data:function(t){e.data=t},relatedNodes:function(t){u.Node&&(t=t instanceof u.Node||t instanceof oa?[t]:ya(t),e.relatedNodes=[],t.forEach(function(t){if(t instanceof oa&&(t=t.actualNode),t instanceof u.Node){var r=new ao(t)
e.relatedNodes.push(r)}}))}}}
function uo(e){return io(e,new Map)}function io(e,t){var r,n
if(null===e||"object"!==l(e))return e
if(null!==(r=u)&&void 0!==r&&r.Node&&e instanceof u.Node||null!==(n=u)&&void 0!==n&&n.HTMLCollection&&e instanceof u.HTMLCollection||"nodeName"in e&&"nodeType"in e&&"ownerDocument"in e)return e
if(t.has(e))return t.get(e)
if(Array.isArray(e)){var a=[]
return t.set(e,a),e.forEach(function(e){a.push(io(e,t))}),a}var o={}
for(var i in t.set(e,o),e)o[i]=io(e[i],t)
return o}var so=new(De(Kt()).CssSelectorParser)
so.registerSelectorPseudos("not"),so.registerSelectorPseudos("is"),so.registerNestingOperators(">"),so.registerAttrEqualityMods("^","$","*","~")
var lo=so
function co(e,t){return yo(t).some(function(t){return wo(e,t)})}function po(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every(function(t){return e.hasClass(t.value)})}(e,t)&&function(e,t){return!t.attributes||t.attributes.every(function(t){var r=e.attr(t.key)
return null!==r&&t.test(r)})}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(r=e,!((n=t).pseudos&&!n.pseudos.every(function(e){if("not"===e.name)return!e.expressions.some(function(e){return wo(r,e)})
if("is"===e.name)return e.expressions.some(function(e){return wo(r,e)})
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")})))
var r,n}var fo,Do=(fo=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(fo,"\\")}),mo=/\\/g
function ho(e){if(e)return e.map(function(e){var t,r,n=e.name.replace(mo,""),a=(e.value||"").replace(mo,"")
switch(e.operator){case"^=":r=new RegExp("^"+Do(a))
break
case"$=":r=new RegExp(Do(a)+"$")
break
case"~=":r=new RegExp("(^|\\s)"+Do(a)+"(\\s|$)")
break
case"|=":r=new RegExp("^"+Do(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&r.test(e)}),{key:n,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}})}function go(e){if(e)return e.map(function(e){return{value:e=e.replace(mo,""),regexp:new RegExp("(^|\\s)"+Do(e)+"(\\s|$)")}})}function vo(e){if(e)return e.map(function(e){var t
return["is","not"].includes(e.name)&&(t=bo(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}})}function bo(e){return e.map(function(e){for(var t=[],r=e.rule;r;)t.push({tag:r.tagName?r.tagName.toLowerCase():"*",combinator:r.nestingOperator?r.nestingOperator:" ",id:r.id,attributes:ho(r.attrs),classes:go(r.classNames),pseudos:vo(r.pseudos)}),r=r.rule
return t})}function yo(e){var t=lo.parse(e)
return bo(t=t.selectors?t.selectors:[t])}function Fo(e,t,r,n){if(!e)return!1
for(var a=Array.isArray(t)?t[r]:t,o=po(e,a);!o&&n&&e.parent;)o=po(e=e.parent,a)
if(r>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&Fo(e.parent,t,r-1," "===a.combinator)}return o}function wo(e,t,r){return Fo(e,t,t.length-1,r)}var Eo=function(e,t){for(;e;){if(co(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Co(){}function xo(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Ao,ko,No=function(){var e,t=[],r=0,n=0,a=Co,o=!1,u=function(t){e=t,setTimeout(function(){null!=e&&na("Uncaught error (of queue)",e)},1)},i=u
function s(e){return function(r){t[e]=r,(n-=1)||a===Co||(o=!0,a(t))}}function c(e){return a=Co,i(e),t}var d={defer:function(a){if("object"===l(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(xo(a),void 0===e){if(o)throw new Error("Queue already completed")
return t.push(a),++n,function(){for(var e=t.length;r<e;r++){var n=t[r]
try{n.call(null,s(r),c)}catch(e){c(e)}}}(),d}},then:function(r){if(xo(r),a!==Co)throw new Error("queue `then` already set")
return e||(a=r,n||(o=!0,a(t))),d},catch:function(t){if(xo(t),i!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):i=t,d},abort:c}
return d},Bo=u.crypto||u.msCrypto
if(!ko&&Bo&&Bo.getRandomValues){var To=new Uint8Array(16)
ko=function(){return Bo.getRandomValues(To),To}}if(!ko){var Ro=new Array(16)
ko=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),Ro[t]=e>>>((3&t)<<3)&255
return Ro}}for(var So="function"==typeof u.Buffer?u.Buffer:Array,_o=[],Oo={},Mo=0;Mo<256;Mo++)_o[Mo]=(Mo+256).toString(16).substr(1),Oo[_o[Mo]]=Mo
function Po(e,t){var r=t||0,n=_o
return n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]}var Io=ko(),jo=[1|Io[0],Io[1],Io[2],Io[3],Io[4],Io[5]],Lo=16383&(Io[6]<<8|Io[7]),qo=0,zo=0
function Vo(e,t,r){var n=t&&r||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Lo,u=null!=e.msecs?e.msecs:(new Date).getTime(),i=null!=e.nsecs?e.nsecs:zo+1,s=u-qo+(i-zo)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||u>qo)&&null==e.nsecs&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
qo=u,zo=i,Lo=o
var l=(1e4*(268435455&(u+=122192928e5))+i)%4294967296
a[n++]=l>>>24&255,a[n++]=l>>>16&255,a[n++]=l>>>8&255,a[n++]=255&l
var c=u/4294967296*1e4&268435455
a[n++]=c>>>8&255,a[n++]=255&c,a[n++]=c>>>24&15|16,a[n++]=c>>>16&255,a[n++]=o>>>8|128,a[n++]=255&o
for(var d=e.node||jo,p=0;p<6;p++)a[n+p]=d[p]
return t||Po(a)}function $o(e,t,r){var n=t&&r||0
"string"==typeof e&&(t="binary"==e?new So(16):null,e=null)
var a=(e=e||{}).random||(e.rng||ko)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[n+o]=a[o]
return t||Po(a)}(Ao=$o).v1=Vo,Ao.v4=$o,Ao.parse=function(e,t,r){var n=t&&r||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){a<16&&(t[n+a++]=Oo[e])});a<16;)t[n+a++]=0
return t},Ao.unparse=Po,Ao.BufferClass=So,c._uuid=Vo()
var Ho=$o,Uo=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function Go(){var e="axeAPI",t=""
return void 0!==c&&c._audit&&c._audit.application&&(e=c._audit.application),void 0!==c&&(t=c.version),e+"."+t}function Wo(e){Ko(e),ba(u.parent===e,"Source of the response must be the parent window.")}function Yo(e){Ko(e),ba(e.parent===u,"Respondable target must be a frame in the current window")}function Ko(e){ba(u!==e,"Messages can not be sent to the same window.")}var Xo={},Zo=[]
function Jo(){var e="".concat($o(),":").concat($o())
return Zo.includes(e)?Jo():(Zo.push(e),e)}function Qo(e,t,r,n){if(r?Wo(e):Yo(e),t.message instanceof Error&&!r)return c.log(t.message),!1
var a=function(e){var t=e.topic,r=e.channelId,n=e.message,a={channelId:r,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:Go()}
return n instanceof Error?a.error={name:n.name,message:n.message,stack:n.stack}:a.payload=n,JSON.stringify(a)}(U({messageId:Jo()},t)),o=c._audit.allowedOrigins
return!(!o||!o.length||("function"==typeof n&&function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
ba(!Xo[e],"A replyHandler already exists for this message channel."),Xo[e]={replyHandler:t,sendToParent:r}}(t.channelId,n,r),o.forEach(function(t){try{e.postMessage(a,t)}catch(r){if(r instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw r}}),0))}function eu(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(n,a,o){Qo(e,{channelId:t,message:n,keepalive:a},r,o)}}var tu,ru,nu={open:function(e){if("function"==typeof u.addEventListener){var t=function(t){(function(e,t){var r,n=e.origin,a=e.data,o=e.source
try{var i=function(e){var t,r,n,a,o
try{t=JSON.parse(e)}catch(e){return}if(null!==(i=t)&&"object"===l(i)&&"string"==typeof i.channelId&&i.source===Go()){var i,s=t,c=s.topic,d=s.channelId,p=s.messageId,f=s.keepalive
return{topic:c,message:"object"===l(t.error)?(r=t.error,n=r.message||"Unknown error occurred",a=Uo.includes(r.name)?r.name:"Error",o=u[a]||Error,r.stack&&(n+="\n"+r.stack.replace(r.message,"")),new o(n)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(a)||{},s=i.channelId,d=i.message,p=i.messageId
if(!function(e){var t=c._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(n)||(r=p,Zo.includes(r)||(Zo.push(r),0)))return
if(d instanceof Error&&o.parent!==u)return c.log(d),!1
try{if(i.topic){var f=eu(o,s)
Wo(o),t(i,f)}else!function(e,t){var r=t.channelId,n=t.message,a=t.keepalive,o=function(e){return Xo[e]}(r)||{},u=o.replyHandler,i=o.sendToParent
if(u){i?Wo(e):Yo(e)
var s=eu(e,r,i)
!a&&r&&function(e){delete Xo[e]}(r)
try{u(n,a,s)}catch(e){c.log(e),s(e,a)}}}(o,i)}catch(e){!function(e,t,r){if(!e.parent!==u)return c.log(t)
try{Qo(e,{topic:null,channelId:r,message:t,messageId:Jo(),keepalive:!0},!0)}catch(e){return c.log(e)}}(o,e,s)}}catch(e){return c.log(e),!1}})(t,e)}
return u.addEventListener("message",t,!1),function(){u.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof u.addEventListener&&Qo(e,t,!1,r)}}
function au(e){e.updateMessenger(nu)}var ou={}
function uu(e,t,r,n,a){var o={topic:t,message:r,channelId:"".concat($o(),":").concat($o()),keepalive:n}
return ru(e,o,a)}function iu(e,t){var r=e.topic,n=e.message,a=e.keepalive,o=ou[r]
if(o)try{o(n,a,t)}catch(e){c.log(e),t(e,a)}}function su(e,t,r,n){var a,o,u=e.contentWindow,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!u)return na("Frame does not have a content window",e),void r(null)
if(0!==i){var s=setTimeout(function(){s=setTimeout(function(){t.debug?n(cu("No response from frame",e)):r(null)},0)},i)
uu(u,"axe.ping",null,void 0,function(){clearTimeout(s),lu(e,t,r,n)})}else lu(e,t,r,n)}function lu(e,t,r,n){var a,o,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,i=e.contentWindow,s=setTimeout(function(){n(cu("Axe in frame timed out",e))},u)
uu(i,"axe.start",t,void 0,function(e){clearTimeout(s),e instanceof Error==0?r(e):n(e)})}function cu(e,t){var r
return c._tree&&(r=Ga(t)),new Error(e+": "+(r||t))}uu.updateMessenger=function(e){var t=e.open,r=e.post
ba("function"==typeof t,"open callback must be a function"),ba("function"==typeof r,"post callback must be a function"),tu&&tu()
var n=t(iu)
n?(ba("function"==typeof n,"open callback must return a cleanup function"),tu=n):tu=null,ru=r},uu.subscribe=function(e,t){ba("function"==typeof t,"Subscriber callback must be a function"),ba(!ou[e],"Topic ".concat(e," is already registered to.")),ou[e]=t},uu.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:u).frameElement},au(uu)
var du=null,pu={update:function(e){ba("object"===l(e),"serializer must be an object"),du=e},toSpec:function(e){return pu.dqElmToSpec(new ao(e))},dqElmToSpec:function(e,t){var r
return e instanceof ao==0?e:(t&&(e=function(e,t){var r=e.fromFrame,n=t.ancestry,a=t.xpath,o=!1!==t.selectors||r
return(e=new ao(e.element,t,{source:e.source,nodeIndexes:e.nodeIndexes,selector:o?e.selector:[":root"],ancestry:n?e.ancestry:[":root"],xpath:a?e.xpath:"/"})).fromFrame=r,e}(e,t)),"function"==typeof(null===(r=du)||void 0===r?void 0:r.toSpec)?du.toSpec(e):e.toJSON())},mergeSpecs:function(e,t){var r
return"function"==typeof(null===(r=du)||void 0===r?void 0:r.mergeSpecs)?du.mergeSpecs(e,t):ao.mergeSpecs(e,t)},mapRawResults:function(e){return e.map(function(e){return U({},e,{nodes:pu.mapRawNodeResults(e.nodes)})})},mapRawNodeResults:function(e){return null==e?void 0:e.map(function(e){var t=e.node,r=V(e,p)
r.node=pu.dqElmToSpec(t)
for(var n=0,a=["any","all","none"];n<a.length;n++){var o=a[n]
r[o]=r[o].map(function(e){var t=e.relatedNodes,r=V(e,f)
return r.relatedNodes=t.map(pu.dqElmToSpec),r})}return r})}},fu=pu,Du=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},mu=function(e,t,r){if(Array.isArray(e))return e.find(function(e){return null!==e&&"object"===l(e)&&Object.hasOwn(e,t)&&e[t]===r})}
function hu(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),n=0;n<r;n++){var a=null==e?void 0:e[n],o=null==t?void 0:t[n]
if("number"!=typeof a||isNaN(a))return 0===n?1:-1
if("number"!=typeof o||isNaN(o))return 0===n?-1:1
if(a!==o)return a-o}return 0}var gu=function(e,t){var r=[]
return e.forEach(function(e){var t,n=(t=e)&&t.results?Array.isArray(t.results)?t.results.length?t.results:null:[t.results]:null
if(n&&n.length){var a=function(e){return e.frameElement?fu.toSpec(e.frameElement):e.frameSpec?e.frameSpec:null}(e)
n.forEach(function(e){e.nodes&&a&&function(e,t,r){e.forEach(function(e){e.node=fu.mergeSpecs(e.node,r),Du(e).forEach(function(e){e.relatedNodes=e.relatedNodes.map(function(e){return fu.mergeSpecs(e,r)})})})}(e.nodes,0,a)
var t=mu(r,"id",e.id)
t?e.nodes.length&&function(e,t){for(var r,n=t[0].node,a=0;a<e.length;a++){var o=hu((r=e[a].node).nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<r.selector.length)return void e.splice.apply(e,[a,0].concat($(t)))}e.push.apply(e,$(t))}(t.nodes,e.nodes):r.push(e)})}}),r.forEach(function(e){e.nodes&&e.nodes.sort(function(e,t){return hu(e.node.nodeIndexes,t.node.nodeIndexes)})}),r}
function vu(e,t,r,n,a,o){t=U({},t,{elementRef:!1})
var u=No()
e.frames.forEach(function(e){var a=e.node,o=V(e,D)
u.defer(function(e,u){su(a,{options:t,command:r,parameter:n,context:o},function(t){return e(t?{results:t,frameElement:a}:null)},u)})}),u.then(function(e){a(gu(e,t))}).catch(o)}function bu(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var yu=function e(){for(var t={},r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return n.forEach(function(r){if(r&&"object"===l(r)&&!Array.isArray(r))for(var n=0,a=Object.keys(r);n<a.length;n++){var o=a[n]
!t.hasOwnProperty(o)||"object"!==l(r[o])||Array.isArray(t[o])?t[o]=r[o]:t[o]=e(t[o],r[o])}}),t},Fu=function(e,t){Object.assign(e,t),Object.keys(t).filter(function(e){return"function"==typeof t[e]}).forEach(function(r){e[r]=null
try{e[r]=t[r](e)}catch(e){}})},wu=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],Eu=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(wu.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},Cu={}
fe(Cu,{createGrid:function(){return Ei},findElmsInContext:function(){return ku},findNearbyElms:function(){return Si},findUp:function(){return Bu},findUpVirtual:function(){return Nu},focusDisabled:function(){return Li},getComposedParent:function(){return Xu},getElementByReference:function(){return $i},getElementCoordinates:function(){return Ju},getElementStack:function(){return Yi},getModalDialog:function(){return Oi},getOverflowHiddenAncestors:function(){return Su},getRootNode:function(){return Au},getScrollOffset:function(){return Zu},getTabbableElements:function(){return Ki},getTargetRects:function(){return Qi},getTargetSize:function(){return es},getTextElementStack:function(){return jl},getViewportSize:function(){return Qu},getVisibleChildTextRects:function(){return Pl},hasContent:function(){return Hl},hasContentVirtual:function(){return $l},hasLangText:function(){return Ul},idrefs:function(){return rs},insertedIntoFocusOrder:function(){return Gl},isCurrentPageLink:function(){return Vi},isFocusable:function(){return Zi},isHTML5:function(){return Xl},isHiddenForEveryone:function(){return Wu},isHiddenWithCSS:function(){return Kl},isInTabOrder:function(){return Ji},isInTextBlock:function(){return tc},isInert:function(){return Mi},isModalOpen:function(){return rc},isMultiline:function(){return nc},isNativelyFocusable:function(){return Xi},isNode:function(){return ac},isOffscreen:function(){return ei},isOpaque:function(){return xf},isSkipLink:function(){return Af},isVisible:function(){return Tf},isVisibleOnScreen:function(){return ri},isVisibleToScreenReaders:function(){return Js},isVisualContent:function(){return ql},reduceToElementsBelowFloating:function(){return Rf},shadowElementsFromPoint:function(){return Mf},urlPropsFromAttribute:function(){return Lf},visuallyContains:function(){return Sf},visuallyOverlaps:function(){return qf},visuallySort:function(){return Hi}})
var xu=function(e){var t=e.getRootNode&&e.getRootNode()||s
return t===e&&(t=s),t},Au=xu,ku=function(e){var t,r=e.context,n=e.value,a=e.attr,o=e.elm,u=void 0===o?"":o,i=Fa(n)
return t=9===r.nodeType||11===r.nodeType?r:Au(r),Array.from(t.querySelectorAll(u+"["+a+"="+i+"]"))},Nu=function(e,t){var r
if(r=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(r=r.assignedSlot?r.assignedSlot:r.parentNode)&&11===r.nodeType&&(r=r.host)}while(r&&!ka(r,t)&&r!==s.documentElement)
return r&&ka(r,t)?r:null},Bu=function(e,t){return Nu(to(e),t)}
function Tu(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var Ru=Ba(function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(Ru(e.parent))):t}),Su=Ru,_u=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Ou=/(\w+)\((\d+)/
function Mu(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function Pu(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function Iu(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function ju(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function Lu(e){return"true"===e.attr("aria-hidden")}function qu(e){return"0"===e.getComputedStylePropertyValue("opacity")}function zu(e){var t=kD(e.actualNode),r=parseInt(e.getComputedStylePropertyValue("height")),n=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===r||0===n)}function Vu(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.getComputedStylePropertyValue("position")
if("fixed"===t)return!1
var r=Su(e)
if(!r.length)return!1
var n=e.boundingClientRect
return r.some(function(r){if("absolute"===t&&!function(e,t){for(var r=e.parent;r&&r!==t;){if(["relative","sticky"].includes(r.getComputedStylePropertyValue("position")))return!0
r=r.parent}return!1}(e,r)&&"static"===r.getComputedStylePropertyValue("position"))return!1
var a=r.boundingClientRect
return a.width<2||a.height<2||!Tu(n,a)})}function $u(e){var t=e.getComputedStylePropertyValue("clip").match(_u),r=e.getComputedStylePropertyValue("clip-path").match(Ou)
if(t&&5===t.length){var n=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(n))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(r){var a=r[1],o=parseInt(r[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function Hu(e,t){var r=Eo(e,"map")
if(!r)return!0
var n=r.attr("name")
if(!n)return!0
var a=xu(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=fm(c._tree,'img[usemap="#'.concat(Fa(n),'"]'))
return!o||!o.length||o.some(function(e){return!t(e)})}function Uu(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find(function(e){return"summary"===e.props.nodeName})!==e)&&!e.parent.hasAttr("open")}var Gu=[Pu,Iu,ju,Uu]
function Wu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.skipAncestors,n=t.isAncestor,a=void 0!==n&&n
return e=WD(e).vNode,r?Yu(e,a):Ku(e,a)}var Yu=Ba(function(e,t){return!(!Mu(e)&&(!e.actualNode||!Gu.some(function(r){return r(e,{isAncestor:t})})&&e.actualNode.isConnected))}),Ku=Ba(function(e,t){return!!Yu(e,t)||!!e.parent&&Ku(e.parent,!0)}),Xu=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var r=t.parentNode
if(1===r.nodeType)return r
if(r.host)return r.host}return null},Zu=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,r=e.body
return{left:t&&t.scrollLeft||r&&r.scrollLeft||0,top:t&&t.scrollTop||r&&r.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Ju=function(e){var t=Zu(s),r=t.left,n=t.top,a=e.getBoundingClientRect()
return{top:a.top+n,right:a.right+r,bottom:a.bottom+n,left:a.left+r,width:a.right-a.left,height:a.bottom-a.top}},Qu=function(e){var t=e.document,r=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(r)return{width:r.clientWidth,height:r.clientHeight}
var n=t.body
return{width:n.clientWidth,height:n.clientHeight}},ei=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=WD(e).domNode
if(t){var r,n=s.documentElement,a=u.getComputedStyle(t),o=u.getComputedStyle(s.body||n).getPropertyValue("direction"),i=Ju(t)
if(i.bottom<0&&(function(e,t){for(e=Xu(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Xu(e)}return!0}(t,i.bottom)||"absolute"===a.position))return!0
if(0===i.left&&0===i.right)return!1
if("ltr"===o){if(i.right<=0)return!0}else if(r=Math.max(n.scrollWidth,Qu(u).width),i.left>=r)return!0
return!1}},ti=[qu,zu,Vu,$u,ei]
function ri(e){return e=WD(e).vNode,ni(e)}var ni=Ba(function(e,t){return e.actualNode&&"area"===e.props.nodeName?!Hu(e,ni):!Wu(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!ti.some(function(r){return r(e,{isAncestor:t})}))&&(!e.parent||ni(e.parent,!0))})
function ai(e,t){var r=Math.min(e.top,t.top),n=Math.max(e.right,t.right),a=Math.max(e.bottom,t.bottom),o=Math.min(e.left,t.left)
return new u.DOMRect(o,r,n-o,a-r)}function oi(e,t){var r=e.x,n=e.y,a=t.top,o=t.right,u=t.bottom,i=t.left
return n>=a&&r<=o&&n<=u&&r>=i}var ui={}
function ii(e,t){var r=Math.max(e.left,t.left),n=Math.min(e.right,t.right),a=Math.max(e.top,t.top),o=Math.min(e.bottom,t.bottom)
return r>=n||a>=o?null:new u.DOMRect(r,a,n-r,o-a)}function si(e){var t=e.left,r=e.top,n=e.width,a=e.height
return new u.DOMPoint(t+n/2,r+a/2)}fe(ui,{getBoundingRect:function(){return ai},getIntersectionRect:function(){return ii},getOffset:function(){return di},getRectCenter:function(){return si},hasVisualOverlap:function(){return Di},isPointInRect:function(){return oi},rectHasMinimumSize:function(){return ci},rectsOverlap:function(){return Tu},splitRects:function(){return mi}})
var li=.05
function ci(e,t){var r=t.width,n=t.height
return r+li>=e&&n+li>=e}function di(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n=Qi(e),a=Qi(t)
if(!n.length||!a.length)return null
var o,u=si(n.reduce(ai)),i=1/0,s=Q(a)
try{for(s.s();!(o=s.n()).done;){var l=o.value
if(oi(u,l))return 0
var c=fi(u,pi(u,l))
i=Math.min(i,c)}}catch(e){s.e(e)}finally{s.f()}if(ci(2*r,es(t)))return i
var d=fi(u,si(a.reduce(ai)))-r
return Math.max(0,Math.min(i,d))}function pi(e,t){return{x:e.x<t.left?t.left:e.x>t.right?t.right:e.x,y:e.y<t.top?t.top:e.y>t.bottom?t.bottom:e.y}}function fi(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Di(e,t){var r=e.boundingClientRect,n=t.boundingClientRect
return!(r.left>=n.right||r.right<=n.left||r.top>=n.bottom||r.bottom<=n.top)&&Hi(e,t)>0}function mi(e,t){var r,n=[e],a=Q(t)
try{var o=function(){var e=r.value
if((n=n.reduce(function(t,r){return t.concat(function(e,t){var r,n,a=e.top,o=e.left,u=e.bottom,i=e.right,s=a<t.bottom&&u>t.top,l=o<t.right&&i>t.left,c=[]
if(hi(t.top,a,u)&&l&&c.push({top:a,left:o,bottom:t.top,right:i}),hi(t.right,o,i)&&s&&c.push({top:a,left:t.right,bottom:u,right:i}),hi(t.bottom,a,u)&&l&&c.push({top:t.bottom,right:i,bottom:u,left:o}),hi(t.left,o,i)&&s&&c.push({top:a,left:o,bottom:u,right:t.left}),0===c.length){if(n=t,(r=e).top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right)return[]
c.push(e)}return c.map(gi)}(r,e))},[])).length>4e3)throw new Error("splitRects: Too many rects")}
for(a.s();!(r=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return n}var hi=function(e,t,r){return e>t&&e<r}
function gi(e){return new u.DOMRect(e.left,e.top,e.right-e.left,e.bottom-e.top)}var vi=0,bi=.1,yi=.2,Fi=.3,wi=0
function Ei(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.body,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(eo.get("gridCreated")&&!r)return ra.gridSize
if(eo.set("gridCreated",!0),!r){var n,a=to(s.documentElement)
if(a||(a=new $f(s.documentElement)),wi=0,a._stackingOrder=[ki(vi,wi++,null)],null!==(n=t)&&void 0!==n||(t=new Ti),Bi(t,a),kD(a.actualNode)){var o=new Ti(a)
a._subGrid=o}}for(var i=s.createTreeWalker(e,u.NodeFilter.SHOW_ELEMENT,null,!1),l=r?i.nextNode():i.currentNode;l;){var d=to(l)
d&&d.parent?r=d.parent:l.assignedSlot?r=to(l.assignedSlot):l.parentElement?r=to(l.parentElement):l.parentNode&&to(l.parentNode)&&(r=to(l.parentNode)),d||(d=new c.VirtualNode(l,r)),d._stackingOrder=Ai(d,r,wi++)
var p=Ni(d,r),f=p?p._subGrid:t
if(kD(d.actualNode)){var D=new Ti(d)
d._subGrid=D}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&ri(l)&&Bi(f,d),Eu(l)&&Ei(l.shadowRoot,f,d),l=i.nextNode()}return ra.gridSize}function Ci(e,t){var r=e.getComputedStylePropertyValue("position"),n=e.getComputedStylePropertyValue("z-index")
if("fixed"===r||"sticky"===r)return!0
if("auto"!==n&&"static"!==r)return!0
if("1"!==e.getComputedStylePropertyValue("opacity"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-transform")||e.getComputedStylePropertyValue("-ms-transform")||e.getComputedStylePropertyValue("transform")||"none"))return!0
var a=e.getComputedStylePropertyValue("mix-blend-mode")
if(a&&"normal"!==a)return!0
var o=e.getComputedStylePropertyValue("filter")
if(o&&"none"!==o)return!0
var u=e.getComputedStylePropertyValue("perspective")
if(u&&"none"!==u)return!0
var i=e.getComputedStylePropertyValue("clip-path")
if(i&&"none"!==i)return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask")||e.getComputedStylePropertyValue("mask")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-image")||e.getComputedStylePropertyValue("mask-image")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-border")||e.getComputedStylePropertyValue("mask-border")||"none"))return!0
if("isolate"===e.getComputedStylePropertyValue("isolation"))return!0
var s=e.getComputedStylePropertyValue("will-change")
if("transform"===s||"opacity"===s)return!0
if("touch"===e.getComputedStylePropertyValue("-webkit-overflow-scrolling"))return!0
var l=e.getComputedStylePropertyValue("contain")
return!!["layout","paint","strict","content"].includes(l)||!("auto"===n||!xi(t))}function xi(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function Ai(e,t,r){var n=t._stackingOrder.slice()
if(Ci(e,t)){var a=n.findIndex(function(e){var t=e.stackLevel
return[vi,yi,Fi].includes(t)});-1!==a&&n.splice(a,n.length-a)}var o=function(e,t){var r=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||xi(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
return["auto","0"].includes(r)?"static"!==e.getComputedStylePropertyValue("position")?Fi:"none"!==e.getComputedStylePropertyValue("float")?yi:Ci(e,t)?bi:null:parseInt(r)}(e,t)
return null!==o&&n.push(ki(o,r,e)),n}function ki(e,t,r){return{stackLevel:e,treeOrder:t,vNode:r}}function Ni(e,t){for(var r=null,n=[e];t;){if(kD(t.actualNode)){r=t
break}if(t._scrollRegionParent){r=t._scrollRegionParent
break}n.push(t),t=to(t.actualNode.parentElement||t.actualNode.parentNode)}return n.forEach(function(e){return e._scrollRegionParent=r}),r}function Bi(e,t){var r=Su(t)
t.clientRects.forEach(function(n){var a,o=r.reduce(function(e,t){return e&&ii(e,t.boundingClientRect)},n)
if(o){null!==(a=t._grid)&&void 0!==a||(t._grid=e)
var u=e.getGridPositionOfRect(o)
e.loopGridPosition(u,function(e){e.includes(t)||e.push(t)})}})}var Ti=Z(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
K(this,e),this.container=t,this.cells=[]},[{key:"toGridIndex",value:function(e){return Math.floor(e/ra.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,r,n=e.x,a=e.y
ba(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),u=this.toGridIndex(n)
ba(oi({y:o,x:u},this.boundaries),"Element midpoint exceeds the grid bounds")
var i=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(r=i[u-i._negativeIndex])&&void 0!==r?r:[]}},{key:"loopGridPosition",value:function(e,t){var r=e,n=r.left,a=r.right,o=r.top,u=r.bottom
this.boundaries&&(e=ai(this.boundaries,e)),this.boundaries=e,Ri(this.cells,o,u,function(e,r){Ri(e,n,a,function(e,n){t(e,{row:r,col:n})})})}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,r=e.right,n=e.bottom,a=e.left,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-o),r=this.toGridIndex(r+o-1),n=this.toGridIndex(n+o-1),a=this.toGridIndex(a-o),new u.DOMRect(a,t,r-a,n-t)}}])
function Ri(e,t,r,n){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var u=t-e._negativeIndex,i=r-e._negativeIndex,s=u;s<=i;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),n(e[s],s+e._negativeIndex)}}function Si(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(Ei(),null===(t=e._grid)||void 0===t||null===(t=t.cells)||void 0===t||!t.length)return[]
var n=e.boundingClientRect,a=e._grid,o=_i(e),u=a.getGridPositionOfRect(n,r),i=[]
return a.loopGridPosition(u,function(t){var r,n=Q(t)
try{for(n.s();!(r=n.n()).done;){var a=r.value
a&&a!==e&&!i.includes(a)&&o===_i(a)&&i.push(a)}}catch(e){n.e(e)}finally{n.f()}}),i}var _i=Ba(function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||_i(e.parent))}),Oi=Ba(function(){var e
if(!c._tree)return null
var t=rm(c._tree[0],"dialog[open]",function(e){var t=e.boundingClientRect
return s.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&ri(e)})
return t.length?t.find(function(e){var t=e.boundingClientRect
return s.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)})||(null!==(e=t.find(function(e){var t,r=null!==(t=function(e){Ei()
var t=c._tree[0]._grid,r=new u.DOMRect(0,0,u.innerWidth,u.innerHeight)
if(t)for(var n=0;n<t.cells.length;n++){var a=t.cells[n]
if(a)for(var o=0;o<a.length;o++){var i=a[o]
if(i)for(var s=0;s<i.length;s++){var l=i[s],d=ii(l.boundingClientRect,r)
if("html"!==l.props.nodeName&&l!==e&&"none"!==l.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:l,rect:d}}}}}(e))&&void 0!==t?t:{},n=r.vNode,a=r.rect
return!!n&&!s.elementsFromPoint(a.left+1,a.top+1).includes(n.actualNode)}))&&void 0!==e?e:null):null})
function Mi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.skipAncestors,n=t.isAncestor
return r?Pi(e,n):Ii(e,n)}var Pi=Ba(function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var r=Oi()
if(r&&!bu(r,e))return!0}return!1}),Ii=Ba(function(e,t){return!!Pi(e,t)||!!e.parent&&Ii(e.parent,!0)}),ji=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],Li=function(e){var t,r=WD(e).vNode
if(t=r.props.nodeName,ji.includes(t)&&r.hasAttr("disabled")||Mi(r))return!0
for(var n=r.parent,a=[],o=!1;n&&n.shadowId===r.shadowId&&!o&&(a.push(n),"legend"!==n.props.nodeName);){if(void 0!==n._inDisabledFieldset){o=n._inDisabledFieldset
break}"fieldset"===n.props.nodeName&&n.hasAttr("disabled")&&(o=!0),n=n.parent}return a.forEach(function(e){return e._inDisabledFieldset=o}),!!o||"area"!==r.props.nodeName&&!!r.actualNode&&Wu(r)},qi=/^\/\#/,zi=/^#[!/]/
function Vi(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if(qi.test(r))return!0
var n=e.hash,a=e.protocol,o=e.hostname,i=e.port,s=e.pathname
if(zi.test(n))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=u.location)||void 0===t?void 0:t.origin)||-1===u.location.origin.indexOf("://"))return null
var l,c=u.location.origin+u.location.pathname
return l=o?"".concat(a,"//").concat(o).concat(i?":".concat(i):""):u.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:u.location.pathname)===c}var $i=function(e,t){var r=e.getAttribute(t)
if(!r)return null
if("href"===t&&!Vi(e))return null;-1!==r.indexOf("#")&&(r=decodeURIComponent(r.substr(r.indexOf("#")+1)))
var n=s.getElementById(r)
return n||((n=s.getElementsByName(r)).length?n[0]:null)}
function Hi(e,t){Ei()
for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),n=0;n<r;n++){if(void 0===t._stackingOrder[n])return-1
if(void 0===e._stackingOrder[n])return 1
if(t._stackingOrder[n].stackLevel>e._stackingOrder[n].stackLevel)return 1
if(t._stackingOrder[n].stackLevel<e._stackingOrder[n].stackLevel)return-1
if(t._stackingOrder[n].treeOrder!==e._stackingOrder[n].treeOrder)return t._stackingOrder[n].treeOrder-e._stackingOrder[n].treeOrder}var a=e.actualNode,o=t.actualNode
if(a.getRootNode&&a.getRootNode()!==o.getRootNode()){for(var i=[];a;)i.push({root:a.getRootNode(),node:a}),a=a.getRootNode().host
for(;o&&!i.find(function(e){return e.root===o.getRootNode()});)o=o.getRootNode().host
if((a=i.find(function(e){return e.root===o.getRootNode()}).node)===o)return e.actualNode.getRootNode()!==a.getRootNode()?-1:1}var s=u.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=a.compareDocumentPosition(o),f=p&l?1:-1,D=p&c||p&d,m=Ui(e),h=Ui(t)
return m===h||D?f:h-m}function Ui(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:Gi(e)?1:0}function Gi(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=Gi(e.parent)
return e._isFloated=t,t}function Wi(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=si(t),a=e.getCellFromPoint(n)||[],o=Math.floor(n.x),u=Math.floor(n.y),i=a.filter(function(e){return e.clientRects.some(function(e){var t=e.left,r=e.top
return o<Math.floor(t+e.width)&&o>=Math.floor(t)&&u<Math.floor(r+e.height)&&u>=Math.floor(r)})}),l=e.container
return l&&(i=Wi(l._grid,l.boundingClientRect,!0).concat(i)),r||(i=i.sort(Hi).map(function(e){return e.actualNode}).concat(s.documentElement).filter(function(e,t,r){return r.indexOf(e)===t})),i}var Yi=function(e){Ei()
var t=to(e),r=t._grid
return r?Wi(r,t.boundingClientRect):[]},Ki=function(e){return fm(e,"*").filter(function(e){var t=e.isFocusable,r=ZD(e.actualNode.getAttribute("tabindex"))
return null!==r?t&&r>=0:t})},Xi=function(e){var t=WD(e).vNode
if(!t||Li(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!fm(t,"summary").length}return!1}
function Zi(e){var t=WD(e).vNode
return!(1!==t.props.nodeType||Li(t)||!Xi(t)&&null===ZD(t.attr("tabindex")))}function Ji(e){var t=WD(e).vNode
return 1===t.props.nodeType&&!(ZD(t.attr("tabindex"))<=-1)&&Zi(t)}var Qi=Ba(function(e){var t=e.boundingClientRect,r=Si(e).filter(function(t){return Di(e,t)&&"none"!==t.getComputedStylePropertyValue("pointer-events")&&!function(e,t){return bu(e,t)&&!Ji(t)}(e,t)})
return r.length?mi(t,r.map(function(e){return e.boundingClientRect})):[t]}),es=Ba(function(e,t){return function(e,t){return e.reduce(function(e,r){var n=ci(t,e)
return n!==ci(t,r)?n?e:r:e.width*e.height>r.width*r.height?e:r})}(Qi(e),t)}),ts={}
fe(ts,{accessibleText:function(){return ns},accessibleTextVirtual:function(){return Cl},autocomplete:function(){return Nl},formControlValue:function(){return pl},formControlValueMethods:function(){return cl},hasUnicode:function(){return wl},isHumanInterpretable:function(){return kl},isIconLigature:function(){return El},isValidAutocomplete:function(){return Bl},label:function(){return _l},labelText:function(){return ml},labelVirtual:function(){return Sl},nativeElementType:function(){return Ol},nativeTextAlternative:function(){return yl},nativeTextMethods:function(){return bl},removeUnicode:function(){return Al},sanitize:function(){return Fs},subtreeText:function(){return Dl},titleText:function(){return Ys},unsupported:function(){return Zs},visible:function(){return Rl},visibleTextNodes:function(){return Ml},visibleVirtual:function(){return el}})
var rs=function(e,t){e=e.actualNode||e
try{var r=Au(e),n=[],a=e.getAttribute(t)
if(a){a=Hf(a)
for(var o=0;o<a.length;o++)n.push(r.getElementById(a[o]))}return n}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},ns=function(e,t){return Cl(to(e),t)},as=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=WD(e).vNode
return 1!==(null==r?void 0:r.props.nodeType)||1!==r.props.nodeType||t.inLabelledByContext||t.inControlContext||!r.attr("aria-labelledby")?"":rs(r,"aria-labelledby").filter(function(e){return e}).reduce(function(e,n){var a=ns(n,U({inLabelledByContext:!0,startNode:t.startNode||r},t))
return e?"".concat(e," ").concat(a):a},"")}
function os(e){var t=WD(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":t.attr("aria-label")||""}var us={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-braillelabel":{type:"string",allowEmpty:!0,global:!0},"aria-brailleroledescription":{type:"string",allowEmpty:!0,global:!0},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-description":{type:"string",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string",allowEmpty:!0}},is={alert:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-expanded","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},ss={ariaAttrs:us,ariaRoles:U({},is,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-glossary","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","gridcell","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","separator","slider","switch","tab","treeitem"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["form","search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","math","menuitem","menuitemcheckbox","menuitemradio","meter","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},search:{contentTypes:["flow"],allowedRoles:["form","group","none","presentation","region","search"]},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},ls=U({},ss),cs=ls,ds=function(e){var t=cs.ariaRoles[e]
return!!t&&!!t.unsupported},ps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.allowAbstract,n=t.flagUnsupported,a=void 0!==n&&n,o=cs.ariaRoles[e],u=ds(e)
return!(!o||a&&u||!r&&"abstract"===o.type)},fs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.fallback,n=t.abstracts,a=t.dpub
if(1!==(e=e instanceof oa?e:to(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(r?Hf(o):[o]).find(function(e){return!(!a&&"doc-"===e.substr(0,4))&&ps(e,{allowAbstract:n})})||null},Ds=function(e){return Object.keys(cs.htmlElms).filter(function(t){var r=cs.htmlElms[t]
return r.contentTypes?r.contentTypes.includes(e):!!r.variant&&!(!r.variant.default||!r.variant.default.contentTypes)&&r.variant.default.contentTypes.includes(e)})},ms=function(){return eo.get("globalAriaAttrs",function(){return Object.keys(cs.ariaAttrs).filter(function(e){return cs.ariaAttrs[e].global})})},hs=Ba(function(e){for(var t=[],r=e.rows,n=0,a=r.length;n<a;n++){var o=r[n].cells
t[n]=t[n]||[]
for(var u=0,i=0,s=o.length;i<s;i++)for(var l=0;l<o[i].colSpan;l++){for(var c=o[i].getAttribute("rowspan"),d=0===parseInt(c)||0===o[i].rowspan?r.length:o[i].rowSpan,p=0;p<d;p++){for(t[n+p]=t[n+p]||[];t[n+p][u];)u++
t[n+p][u]=o[i]}u++}}return t}),gs=Ba(function(e,t){var r,n
for(t||(t=hs(Bu(e,"table"))),r=0;r<t.length;r++)if(t[r]&&-1!==(n=t[r].indexOf(e)))return{x:n,y:r}})
function vs(e){var t=WD(e),r=t.vNode,n=t.domNode,a=r.attr("scope"),o=r.attr("role")
if(!["td","th"].includes(r.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==r.props.nodeName)return!1
if(!r.actualNode)return"auto"
var u=hs(Bu(n,"table")),i=gs(n,u)
return u[i.y].every(function(e){return"TH"===e.nodeName.toUpperCase()})?"col":u.map(function(e){return e[i.x]}).every(function(e){return e&&"TH"===e.nodeName.toUpperCase()})?"row":"auto"}var bs=function(e){return-1!==["col","auto"].indexOf(vs(e))},ys=function(e){return["row","auto"].includes(vs(e))},Fs=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},ws=function(){return eo.get("sectioningContentSelector",function(){return Ds("sectioning").map(function(e){return"".concat(e,":not([role])")}).join(", ")+" , [role=article], [role=complementary], [role=navigation], [role=region]"})},Es=function(){return eo.get("sectioningContentPlusMainSelector",function(){return ws()+" , main:not([role]), [role=main]"})}
function Cs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).checkTitle,r=void 0!==t&&t
return!!(Fs(as(e))||Fs(os(e))||r&&1===(null==e?void 0:e.props.nodeType)&&Fs(e.attr("title")))}var xs={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:function(e){return Eo(e.parent,ws())&&!Cs(e,{checkTitle:!0})?null:"complementary"},body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return Eo(e,Es())?null:"contentinfo"},form:function(e){return Cs(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return Eo(e,Es())?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),r=ms().find(function(t){return e.hasAttr(t)})
return!t||r||Zi(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var r=rs(e.actualNode,"list").filter(function(e){return!!e})[0]
t=r&&"datalist"===r.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",meter:"meter",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",search:"search",section:function(e){return Cs(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=Eo(e,"table"),r=fs(t)
return["grid","treegrid"].includes(r)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return bs(e)?"columnheader":ys(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},As=function(e,t){var r=l(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===r)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var n=t.substring(1,t.length-1)
return new RegExp(n).test(e)}}return t===e},ks=function(e,t){return As(!!Cl(e),t)},Ns=function(e,t){if("object"!==l(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every(function(r){return As(e(r),t[r])})},Bs=function(e,t){return e=WD(e).vNode,Ns(function(t){return e.attr(t)},t)}
function Ts(e,t){return!!t(e)}var Rs=function(e,t){return As(fs(e),t)},Ss=function(e,t){return As(zs(e),t)},_s=function(e,t){return e=WD(e).vNode,As(e.props.nodeName,t)},Os=function(e,t){return e=WD(e).vNode,Ns(function(t){return e.props[t]},t)},Ms=function(e,t){return As(Gs(e),t)},Ps={hasAccessibleName:ks,attributes:Bs,condition:Ts,explicitRole:Rs,implicitRole:Ss,nodeName:_s,properties:Os,semanticRole:Ms},Is=function e(t,r){return t=WD(t).vNode,Array.isArray(r)?r.some(function(r){return e(t,r)}):"string"==typeof r?co(t,r):Object.keys(r).every(function(e){if(!Ps[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var n=Ps[e],a=r[e]
return n(t,a)})},js=function(e,t){return Is(e,t)}
js.hasAccessibleName=ks,js.attributes=Bs,js.condition=Ts,js.explicitRole=Rs,js.fromDefinition=Is,js.fromFunction=Ns,js.fromPrimative=As,js.implicitRole=Ss,js.nodeName=_s,js.properties=Os,js.semanticRole=Ms
var Ls=js,qs=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,r=void 0!==t&&t,n=cs.htmlElms[e.props.nodeName]
if(!n)return{}
if(!n.variant)return n
var a=n.variant,o=V(n,m)
for(var u in a)if(a.hasOwnProperty(u)&&"default"!==u){for(var i=a[u],s=i.matches,l=V(i,h),c=Array.isArray(s)?s:[s],d=0;d<c.length&&r;d++)if(c[d].hasOwnProperty("hasAccessibleName"))return n
if(Ls(e,s))for(var p in l)l.hasOwnProperty(p)&&(o[p]=l[p])}for(var f in a.default)a.default.hasOwnProperty(f)&&void 0===o[f]&&(o[f]=a.default[f])
return o},zs=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,r=e instanceof oa?e:to(e)
if(e=r.actualNode,!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var n=r.props.nodeName,a=xs[n]
return!a&&t?qs(r).chromiumRole||null:"function"==typeof a?a(r):a||null},Vs={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function $s(e,t){var r=Vs[e.props.nodeName]
if(!r)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!r.includes(e.parent.props.nodeName))return null
var n=fs(e.parent,t)
return["none","presentation"].includes(n)&&!Us(e.parent)?n:n?null:$s(e.parent,t)}function Hs(e,t){var r=t.chromium,n=V(t,g),a=zs(e,{chromium:r})
return a?$s(e,n)||a:null}function Us(e){return ms().some(function(t){return e.hasAttr(t)})||Zi(e)}var Gs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noPresentational,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noImplicit,n=V(t,v),a=WD(e).vNode
if(1!==a.props.nodeType)return null
var o=fs(a,n)
return o?["presentation","none"].includes(o)&&Us(a)?r?null:Hs(a,n):o:r?null:Hs(a,n)}(e,V(t,b))
return r&&["presentation","none"].includes(n)?null:n},Ws=["iframe"],Ys=function(e){var t=WD(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!js(t,Ws)&&["none","presentation"].includes(Gs(t))?"":t.attr("title"):""},Ks=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof oa?e:to(e)).props.nodeType)return!1
var r=Gs(e),n=cs.ariaRoles[r]
return!(!n||!n.nameFromContent)||!t&&(!n||["presentation","none"].includes(r))},Xs=function(e){var t=e.actualNode,r=e.children
if(!r)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var n=rs(t,"aria-owns").filter(function(e){return!!e}).map(function(e){return c.utils.getNodeFromTree(e)})
return[].concat($(r),$(n))}return $(r)},Zs={accessibleNameFromFieldValue:["progressbar"]}
function Js(e){return e=WD(e).vNode,Qs(e)}var Qs=Ba(function(e,t){return!Lu(e)&&!Mi(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!Hu(e,Qs):!Wu(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||Qs(e.parent,!0)))}),el=function e(t,r,n){var a=WD(t).vNode,o=r?Js:ri,u=!t.actualNode||t.actualNode&&o(t),i=a.children.map(function(t){var a=t.props,o=a.nodeType,i=a.nodeValue
if(3===o){if(i&&u)return i}else if(!n)return e(t,r)}).join("")
return Fs(i)},tl=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],rl=function(e){var t=(e=e instanceof oa?e:to(e)).props.nodeName
return"textarea"===t||"input"===t&&!tl.includes((e.attr("type")||"").toLowerCase())},nl=function(e){return"select"===(e=e instanceof oa?e:to(e)).props.nodeName},al=function(e){return"textbox"===fs(e)},ol=function(e){return"listbox"===fs(e)},ul=function(e){return"combobox"===fs(e)},il=["progressbar","scrollbar","slider","spinbutton"],sl=function(e){var t=fs(e)
return il.includes(t)},ll=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],cl={nativeTextboxValue:function(e){var t=WD(e).vNode
return rl(t)&&t.props.value||""},nativeSelectValue:function(e){var t=WD(e).vNode
if(!nl(t))return""
var r=fm(t,"option"),n=r.filter(function(e){return e.props.selected})
return n.length||n.push(r[0]),n.map(function(e){return el(e)}).join(" ")||""},ariaTextboxValue:function(e){var t=WD(e),r=t.vNode,n=t.domNode
return al(r)?!n||n&&!Wu(n)?el(r,!0):n.textContent:""},ariaListboxValue:dl,ariaComboboxValue:function(e,t){var r=WD(e).vNode
if(!ul(r))return""
var n=Xs(r).filter(function(e){return"listbox"===Gs(e)})[0]
return n?dl(n,t):""},ariaRangeValue:function(e){var t=WD(e).vNode
if(!sl(t)||!t.hasAttr("aria-valuenow"))return""
var r=+t.attr("aria-valuenow")
return isNaN(r)?"0":String(r)}}
function dl(e,t){var r=WD(e).vNode
if(!ol(r))return""
var n=Xs(r).filter(function(e){return"option"===Gs(e)&&"true"===e.attr("aria-selected")})
return 0===n.length?"":Cl(n[0],t)}var pl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.actualNode,n=Zs.accessibleNameFromFieldValue||[],a=Gs(e)
if(t.startNode===e||!ll.includes(a)||n.includes(a))return""
var o=Object.keys(cl).map(function(e){return cl[e]}).reduce(function(r,n){return r||n(e,t)},"")
return t.debug&&na(o||"{empty-value}",r,t),o},fl=Ds("phrasing").concat(["#text"]),Dl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Cl.alreadyProcessed
t.startNode=t.startNode||e
var n=t,a=n.strict,o=n.inControlContext,u=n.inLabelledByContext,i=Gs(e),s=qs(e,{noMatchAccessibleName:!0}).contentTypes
return r(e,t)||1!==e.props.nodeType||null!=s&&s.includes("embedded")||ll.includes(i)?"":t.subtreeDescendant||t.inLabelledByContext||Ks(e,{strict:a})?(a||(t=U({subtreeDescendant:!o&&!u},t)),Xs(e).reduce(function(e,r){return function(e,t,r){var n=t.props.nodeName,a=Cl(t,r)
return a?(fl.includes(n)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,r,t)},"")):""},ml=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Cl.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||r(e,t))return""
t.startNode||(t.startNode=e)
var n,a=U({inControlContext:!0},t),o=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return ku({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),u=Eo(e,"label")
return u?(n=[].concat($(o),[u.actualNode])).sort(GD):n=o,n.map(function(e){return ns(e,a)}).filter(function(e){return""!==e}).join(" ")},hl={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function gl(e,t){return t.attr(e)||""}function vl(e,t,r){var n=t.actualNode,a=[e=e.toLowerCase(),n.nodeName.toLowerCase()].join(","),o=n.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?ns(o,r):""}var bl={valueText:function(e){return e.props.value||""},buttonDefaultText:function(e){return hl[e.props.type]||""},tableCaptionText:vl.bind(null,"caption"),figureText:vl.bind(null,"figcaption"),svgTitleText:vl.bind(null,"title"),fieldsetLegendText:vl.bind(null,"legend"),altText:gl.bind(null,"alt"),tableSummaryText:gl.bind(null,"summary"),titleText:Ys,subtreeText:Dl,labelText:ml,singleSpace:function(){return" "},placeholderText:gl.bind(null,"placeholder")}
function yl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(Gs(e)))return""
var n=function(e){return(qs(e,{noMatchAccessibleName:!0}).namingMethods||[]).map(function(e){return bl[e]})}(e),a=n.reduce(function(r,n){return r||n(e,t)},"")
return t.debug&&c.log(a||"{empty-value}",r,t),a}var Fl=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},wl=function(e,t){var r=t.emoji,n=t.nonBmp,a=t.punctuations,o=!1
return r&&(o||(o=/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e))),n&&(o||(o=/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e)||/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g.test(e))),a&&(o||(o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e))),o}
function El(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=e.actualNode.nodeValue.trim()
if(!Fs(n)||wl(n,{emoji:!0,nonBmp:!0}))return!1
var a=eo.get("canvasContext",function(){return s.createElement("canvas").getContext("2d",{willReadFrequently:!0})}),o=a.canvas,i=eo.get("fonts",function(){return{}}),l=u.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
i[l]||(i[l]={occurrences:0,numLigatures:0})
var c=i[l]
if(c.occurrences>=r){if(c.numLigatures/c.occurrences===1)return!0
if(0===c.numLigatures)return!1}c.occurrences++
var d=30,p="".concat(d,"px ").concat(l)
a.font=p
var f=n.charAt(0),D=a.measureText(f).width
if(0===D)return c.numLigatures++,!0
if(D<30){var m=30/D
D*=m,p="".concat(d*=m,"px ").concat(l)}o.width=D,o.height=d,a.font=p,a.textAlign="left",a.textBaseline="top",a.fillText(f,0,0)
var h=new Uint32Array(a.getImageData(0,0,D,d).data.buffer)
if(!h.some(function(e){return e}))return c.numLigatures++,!0
a.clearRect(0,0,D,d),a.fillText(n,0,0)
var g=new Uint32Array(a.getImageData(0,0,D,d).data.buffer),v=h.reduce(function(e,t,r){return 0===t&&0===g[r]||0!==t&&0!==g[r]?e:++e},0),b=n.split("").reduce(function(e,t){return e+a.measureText(t).width},0),y=a.measureText(n).width
return v/h.length>=t&&1-y/b>=t&&(c.numLigatures++,!0)}function Cl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=U({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=U({includeHidden:!Js(e)},t)),t}(e,t),function(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!Js(e)}(e,t))return""
if(function(e,t){var r,n=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(r=t.occurrenceThreshold)&&void 0!==r?r:t.occuranceThreshold
return!(3!==e.props.nodeType||!n)&&El(e,a,o)}(e,t))return""
var r=[as,os,yl,pl,Dl,xl,Ys].reduce(function(r,n){return t.startNode===e&&(r=Fs(r)),""!==r?r:n(e,t)},"")
return t.debug&&c.log(r||"{empty-value}",e.actualNode,t),r}function xl(e){return 3!==e.props.nodeType?"":e.props.nodeValue}Cl.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var Al=function(e,t){var r=t.emoji,n=t.nonBmp,a=t.punctuations
return r&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),n&&(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"").replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"").replace(/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},kl=function(e){return function(e){return 0===Fs(e).length}(e)||function(e){return 1===e.length&&e.match(/\D/)}(e)||function(e){return["aa","abc"].includes(e.toLowerCase())}(e)||function(e){var t=Al(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return!Fs(t)}(e)?0:1},Nl={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},Bl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.looseTyped,n=void 0!==r&&r,a=t.stateTerms,o=void 0===a?[]:a,u=t.locations,i=void 0===u?[]:u,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p,D=t.ignoredValues,m=void 0===D?[]:D
if(e=e.toLowerCase().trim(),(o=o.concat(Nl.stateTerms)).includes(e)||""===e)return!0
l=l.concat(Nl.qualifiers),i=i.concat(Nl.locations),d=d.concat(Nl.standaloneTerms),f=f.concat(Nl.qualifiedTerms)
var h=e.split(/\s+/g)
if("webauthn"===h[h.length-1]&&(h.pop(),0===h.length))return!1
if(!n&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),i.includes(h[0])&&h.shift(),l.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var g=h[h.length-1]
return m.includes(g)?void 0:d.includes(g)||f.includes(g)},Tl=function(e){var t
return e.attr("aria-labelledby")&&(t=rs(e.actualNode,"aria-labelledby").map(function(e){var t=to(e)
return t?el(t):""}).join(" ").trim())||(t=e.attr("aria-label"))&&(t=Fs(t))?t:null},Rl=function(e,t,r){return e=to(e),el(e,t,r)},Sl=function(e){var t,r
if(r=Tl(e))return r
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var n=Fa(e.attr("id"))
if(r=(t=Au(e.actualNode).querySelector('label[for="'+n+'"]'))&&Rl(t,!0))return r}return(r=(t=Eo(e,"label"))&&el(t,!0))||null},_l=function(e){return e=to(e),Sl(e)},Ol=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],Ml=function e(t){var r=ri(t),n=[]
return t.children.forEach(function(t){3===t.actualNode.nodeType?r&&n.push(t):n=n.concat(e(t))}),n},Pl=Ba(function(e){var t=to(e),r=t.boundingClientRect,n=[],a=Su(t)
return e.childNodes.forEach(function(e){if(3===e.nodeType&&""!==Fs(e.nodeValue)){var t=function(e){var t=s.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some(function(e){return!oi(si(e),t)})})(t,r)||n.push.apply(n,$(Il(t,a)))}}),n.length?n:Il([r],a)})
function Il(e,t){var r=[]
return e.forEach(function(e){if(!(e.width<1||e.height<1)){var n=t.reduce(function(e,t){return e&&ii(e,t.boundingClientRect)},e)
n&&r.push(n)}}),r}var jl=function(e){Ei()
var t=to(e)._grid
return t?Pl(e).map(function(e){return Wi(t,e)}):[]},Ll=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],ql=function(e){var t=WD(e).vNode,r=c.commons.aria.getExplicitRole(t)
if(r)return-1!==Ll.indexOf(r)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},zl=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function Vl(e){return!zl.includes(e.props.nodeName)&&e.children.some(function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()})}var $l=function e(t,r,n){return Vl(t)||ql(t.actualNode)||!n&&!!Tl(t)||!r&&t.children.some(function(t){return 1===t.actualNode.nodeType&&e(t)})},Hl=function(e,t,r){return e=to(e),$l(e,t,r)}
function Ul(e){return!(void 0!==e.children&&!Vl(e))||(1===e.props.nodeType&&ql(e)?!!c.commons.text.accessibleTextVirtual(e):e.children.some(function(e){return!e.attr("lang")&&Ul(e)&&!Wu(e)}))}var Gl=function(e){return ZD(e.getAttribute("tabindex"))>-1&&Zi(e)&&!Xi(e)}
function Wl(e,t){var r=WD(e),n=r.vNode,a=r.domNode
return n?(void 0===n._isHiddenWithCSS&&(n._isHiddenWithCSS=Yl(a,t)),n._isHiddenWithCSS):Yl(a,t)}function Yl(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=u.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var n=["hidden","collapse"],a=r.getPropertyValue("visibility")
if(n.includes(a)&&!t)return!0
if(n.includes(a)&&t&&n.includes(t))return!0
var o=Xu(e)
return!(!o||n.includes(a))&&Wl(o,a)}var Kl=Wl,Xl=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId},Zl=function(e){var t;(e instanceof oa||null!==(t=u)&&void 0!==t&&t.Node&&e instanceof u.Node)&&(e=c.commons.aria.getRole(e))
var r=cs.ariaRoles[e]
return(null==r?void 0:r.type)||null}
function Jl(e,t){!1!==t(e.actualNode)&&e.children.forEach(function(e){return Jl(e,t)})}var Ql=["block","list-item","table","flex","grid","inline-block"]
function ec(e){var t=u.getComputedStyle(e).getPropertyValue("display")
return Ql.includes(t)||"table-"===t.substr(0,6)}var tc=function(e,t){if(ec(e))return!1
var r=function(e){for(var t=Xu(e);t&&!ec(t);)t=Xu(t)
return to(t)}(e),n="",a="",o=0
return Jl(r,function(t){if(2===o)return!1
if(3===t.nodeType&&(n+=t.nodeValue),1===t.nodeType){var r=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(r))0===o?(n="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===Zl(t))return a+=t.textContent,!1}}}),n=Fs(n),null!=t&&t.noLengthCompare?0!==n.length:(a=Fs(a),n.length>a.length)},rc=function(e){var t=(e=e||{}).modalPercent||.75
if(eo.get("isModalOpen"))return eo.get("isModalOpen")
if(rm(c._tree[0],"dialog, [role=dialog], [aria-modal=true]",ri).length)return eo.set("isModalOpen",!0),!0
for(var r,n=Qu(u),a=n.width*t,o=n.height*t,i=(n.width-a)/2,l=(n.height-o)/2,d=[{x:i,y:l},{x:n.width-i,y:l},{x:n.width/2,y:n.height/2},{x:i,y:n.height-l},{x:n.width-i,y:n.height-l}].map(function(e){return Array.from(s.elementsFromPoint(e.x,e.y))}),p=function(){var e=d[f].find(function(e){var t=u.getComputedStyle(e)
return parseInt(t.width,10)>=a&&parseInt(t.height,10)>=o&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)})
if(e&&d.every(function(t){return t.includes(e)}))return eo.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++)if(r=p())return r.v
eo.set("isModalOpen",void 0)}
function nc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e.ownerDocument.createRange()
r.setStart(e,0),r.setEnd(e,e.childNodes.length)
var n,a=0,o=0,u=Q(r.getClientRects())
try{for(u.s();!(n=u.n()).done;){var i=n.value
if(!(i.height<=t))if(a>i.top+t)a=Math.max(a,i.bottom)
else{if(0!==o)return!0
a=i.bottom,o++}}}catch(e){u.e(e)}finally{u.f()}return!1}var ac=function(e){return e instanceof u.Node},oc="color.incompleteData",uc={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
var r=eo.get(oc,function(){return{}})
return t&&(r[e]=t),r[e]},get:function(e){var t=eo.get(oc)
return null==t?void 0:t[e]},clear:function(){eo.set(oc,{})}},ic=uc,sc=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return ic.set("bgColor","imgNode"),!0
var n=(t=t||u.getComputedStyle(e)).getPropertyValue("background-image"),a="none"!==n
if(a){var o=/gradient/.test(n)
ic.set("bgColor",o?"bgGradient":"bgImage")}return a},lc={}
fe(lc,{ArrayFrom:function(){return gf.default},Colorjs:function(){return df},CssSelectorParser:function(){return mc.CssSelectorParser},doT:function(){return hc.default},emojiRegexText:function(){return Fl},memoize:function(){return gc.default}})
var cc=De(Xt()),dc=De(Zt()),pc=(De(Jt()),De(Jr())),fc=De(gn()),Dc=De(Qn())
"hasOwn"in Object||(Object.hasOwn=pc.default),"values"in Object||(Object.values=fc.default),"Promise"in u||cc.default.polyfill(),"Uint32Array"in u||(u.Uint32Array=dc.Uint32Array),u.Uint32Array&&("some"in u.Uint32Array.prototype||Object.defineProperty(u.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in u.Uint32Array.prototype||Object.defineProperty(u.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),r=1;r<arguments.length;r++){var n=arguments[r]
if(null!=n)for(var a in n)n.hasOwnProperty(a)&&(t[a]=n[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,r=Object(this),n=r.length>>>0,a=arguments[1],o=0;o<n;o++)if(t=r[o],e.call(a,t,o,r))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var r,n=Object(this),a=n.length>>>0,o=0;o<a;o++)if(r=n[o],e.call(t,r,o,n))return o
return-1}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),r=parseInt(t.length,10)||0
if(0===r)return!1
var n,a,o=parseInt(arguments[1],10)||0
for(o>=0?n=o:(n=r+o)<0&&(n=0);n<r;){if(e===(a=t[n])||e!=e&&a!=a)return!0
n++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),r=t.length>>>0,n=arguments.length>=2?arguments[1]:void 0,a=0;a<r;a++)if(a in t&&e.call(n,t[a],a,t))return!0
return!1}}),Array.from||(Array.from=Dc.default),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,function(r,n){return Array.isArray(n)?r.push.apply(r,e.call(n,t-1)):r.push(n),r},[]):Array.prototype.slice.call(this)},writable:!0}),u.Node&&!("isConnected"in u.Node.prototype)&&Object.defineProperty(u.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var mc=De(Kt()),hc=De(ea()),gc=De(Ut())
function vc(e,t){var r=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(function(e){return[e]}))
var n=t[0].length,a=t[0].map(function(e,r){return t.map(function(e){return e[r]})}),o=e.map(function(e){return a.map(function(t){var r=0
if(!Array.isArray(e)){var n,a=Q(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
r+=e*o}}catch(e){a.e(e)}finally{a.f()}return r}for(var u=0;u<e.length;u++)r+=e[u]*(t[u]||0)
return r})})
return 1===r&&(o=o[0]),1===n?o.map(function(e){return e[0]}):o}function bc(e){return"string"===yc(e)}function yc(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Fc(e,t){e=+e,t=+t
var r=(Math.floor(e)+"").length
if(t>r)return+e.toFixed(t-r)
var n=Math.pow(10,r-t)
return Math.round(e/n)*n}function wc(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,r=e.match(/^([a-z]+)\((.+?)\)$/i)
if(r){var n=[]
return r[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,function(e,r){/%$/.test(r)?(r=new Number(r.slice(0,-1)/100)).type="<percentage>":/deg$/.test(r)?((r=new Number(+r.slice(0,-3))).type="<angle>",r.unit="deg"):t.test(r)&&((r=new Number(r)).type="<number>"),e.startsWith("/")&&((r=r instanceof Number?r:new Number(r)).alpha=!0),n.push(r)}),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:n}}}}function Ec(e){return e[e.length-1]}function Cc(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function xc(e,t,r){return(r-e)/(t-e)}function Ac(e,t,r){return Cc(t[0],t[1],xc(e[0],e[1],r))}function kc(e){return e.map(function(e){return e.split("|").map(function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var r=new String(t[1])
return r.range=[+t[2],+t[3]],r}return e})})}var Nc=Object.freeze({__proto__:null,isString:bc,type:yc,toPrecision:Fc,parseFunction:wc,last:Ec,interpolate:Cc,interpolateInv:xc,mapRange:Ac,parseCoordGrammar:kc,multiplyMatrices:vc}),Bc=Z(function e(){K(this,e)},[{key:"add",value:function(e,t,r){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][r?"unshift":"push"](t)},this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}}]),Tc=new Bc,Rc={gamut_mapping:"lch.c",precision:5,deltaE:"76"},Sc={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function _c(e){return Array.isArray(e)?e:Sc[e]}function Oc(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=_c(e),t=_c(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return r
var a={W1:e,W2:t,XYZ:r,options:n}
if(Tc.run("chromatic-adaptation-start",a),a.M||(a.W1===Sc.D65&&a.W2===Sc.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===Sc.D50&&a.W2===Sc.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Tc.run("chromatic-adaptation-end",a),a.M)return vc(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var Mc=(e=new WeakSet,t=new WeakMap,Z(function r(n){var a,o,u,i,s,l,c
K(this,r),I(this,e),P(this,t,void 0),this.id=n.id,this.name=n.name,this.base=n.base?Mc.get(n.base):null,this.aliases=n.aliases,this.base&&(this.fromBase=n.fromBase,this.toBase=n.toBase)
var d=null!==(a=n.coords)&&void 0!==a?a:this.base.coords
this.coords=d
var p=null!==(o=null!==(u=n.white)&&void 0!==u?u:this.base.white)&&void 0!==o?o:"D65"
for(var f in this.white=_c(p),this.formats=null!==(i=n.formats)&&void 0!==i?i:{},this.formats){var D=this.formats[f]
D.type||(D.type="function"),D.name||(D.name=f)}!n.cssId||null!==(s=this.formats.functions)&&void 0!==s&&s.color?null===(l=this.formats)||void 0===l||!l.color||null!==(c=this.formats)&&void 0!==c&&c.color.id||(this.formats.color.id=this.id):(this.formats.color={id:n.cssId},Object.defineProperty(this,"cssId",{value:n.cssId})),this.referred=n.referred,q(t,this,z(e,this,Ic).call(this).reverse()),Tc.run("colorspace-init-end",this)},[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,r=void 0===t?75e-6:t
if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r})
var n=Object.values(this.coords)
return e.every(function(e,t){var a=n[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=G(a.range,2),u=o[0],i=o[1]
return(void 0===u||e>=u-r)&&(void 0===i||e<=i+r)}return!0})}},{key:"cssId",get:function(){var e
return(null===(e=this.formats.functions)||void 0===e||null===(e=e.color)||void 0===e?void 0:e.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(t){return"object"===l(t)?t=z(e,this,Pc).call(this,t):(r="default"===t?Object.values(this.formats)[0]:this.formats[t])?r=z(e,this,Pc).call(this,r):null
var r}},{key:"to",value:function(e,r){if(1===arguments.length){var n=[e.space,e.coords]
e=n[0],r=n[1]}if(this===(e=Mc.get(e)))return r
r=r.map(function(e){return Number.isNaN(e)?0:e})
for(var a,o,u=L(t,this),i=L(t,e),s=0;s<u.length&&u[s]===i[s];s++)a=u[s],o=s
if(!a)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(e,": no connection space was found"))
for(var l=u.length-1;l>o;l--)r=u[l].toBase(r)
for(var c=o+1;c<i.length;c++)r=i[c].fromBase(r)
return r}},{key:"from",value:function(e,t){if(1===arguments.length){var r=[e.space,e.coords]
e=r[0],t=r[1]}return(e=Mc.get(e)).to(this,t)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var r,n=this.coords[t],a=n.range||n.refRange
e.push(null!==(r=null==a?void 0:a.min)&&void 0!==r?r:0)}return e}}],[{key:"all",get:function(){return $(new Set(Object.values(Mc.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var r,n=Q(t.aliases)
try{for(n.s();!(r=n.n()).done;){var a=r.value
this.register(a,t)}}catch(e){n.e(e)}finally{n.f()}}return t}},{key:"get",value:function(e){if(!e||e instanceof Mc)return e
if("string"===yc(e)){var t=Mc.registry[e.toLowerCase()]
if(!t)throw new TypeError('No color space found with id = "'.concat(e,'"'))
return t}for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a]
if(n.length)return Mc.get.apply(Mc,n)
throw new TypeError("".concat(e," is not a valid color space"))}},{key:"resolveCoord",value:function(e,t){var r,n,a=yc(e)
if("string"===a)if(e.includes(".")){var o=G(e.split("."),2)
r=o[0],n=o[1]}else r=void 0,n=e
else if(Array.isArray(e)){var u=G(e,2)
r=u[0],n=u[1]}else r=e.space,n=e.coordId
if((r=Mc.get(r))||(r=t),!r)throw new TypeError("Cannot resolve coordinate reference ".concat(e,": No color space specified and relative references are not allowed here"))
if("number"===(a=yc(n))||"string"===a&&n>=0){var i=Object.entries(r.coords)[n]
if(i)return U({space:r,id:i[0],index:n},i[1])}r=Mc.get(r)
var s=n.toLowerCase(),l=0
for(var c in r.coords){var d,p=r.coords[c]
if(c.toLowerCase()===s||(null===(d=p.name)||void 0===d?void 0:d.toLowerCase())===s)return U({space:r,id:c,index:l},p)
l++}throw new TypeError('No "'.concat(n,'" coordinate found in ').concat(r.name,". Its coordinates are: ").concat(Object.keys(r.coords).join(", ")))}}]))
function Pc(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=kc(e.coords)
var t=Object.entries(this.coords).map(function(t,r){var n=G(t,2),a=(n[0],n[1]),o=e.coordGrammar[r][0],u=a.range||a.refRange,i=o.range,s=""
return"<percentage>"==o?(i=[0,100],s="%"):"<angle>"==o&&(s="deg"),{fromRange:u,toRange:i,suffix:s}})
e.serializeCoords=function(e,r){return e.map(function(e,n){var a=t[n],o=a.fromRange,u=a.toRange,i=a.suffix
return o&&u&&(e=Ac(o,u,e)),e=Fc(e,r),i&&(e+=i),e})}}return e}function Ic(){for(var e=[this],t=this;t=t.base;)e.push(t)
return e}var jc=Mc
me(jc,"registry",{}),me(jc,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var Lc=new jc({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),qc=function(e){function t(e){var r,n,a,o
return K(this,t),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Lc),e.toXYZ_M&&e.fromXYZ_M&&(null!==(a=e.toBase)&&void 0!==a||(e.toBase=function(t){var r=vc(e.toXYZ_M,t)
return n.white!==n.base.white&&(r=Oc(n.white,n.base.white,r)),r}),null!==(o=e.fromBase)&&void 0!==o||(e.fromBase=function(t){return t=Oc(n.base.white,n.white,t),vc(e.fromXYZ_M,t)})),null!==(r=e.referred)&&void 0!==r||(e.referred="display"),n=R(this,t,[e])}return O(t,e),Z(t)}(jc)
function zc(e){var t,r={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(Tc.run("parse-start",r),r.color)return r.color
if(r.parsed=wc(r.str),r.parsed){var n=r.parsed.name
if("color"===n){var a,o=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1,i=Q(jc.all)
try{var s,l=function(){var e,t=a.value,n=t.getFormat("color")
if(n&&(o===n.id||null!==(e=n.ids)&&void 0!==e&&e.includes(o))){var i=Object.keys(t.coords).length,s=Array(i).fill(0)
return s.forEach(function(e,t){return s[t]=r.parsed.args[t]||0}),{v:{spaceId:t.id,coords:s,alpha:u}}}}
for(i.s();!(a=i.n()).done;)if(s=l())return s.v}catch(e){i.e(e)}finally{i.f()}var c=""
if(o in jc.registry){var d,p=null===(d=jc.registry[o].formats)||void 0===d||null===(d=d.functions)||void 0===d||null===(d=d.color)||void 0===d?void 0:d.id
p&&(c="Did you mean color(".concat(p,")?"))}throw new TypeError("Cannot parse color(".concat(o,"). ")+(c||"Missing a plugin?"))}var f,D=Q(jc.all)
try{var m,h=function(){var e=f.value,t=e.getFormat(n)
if(t&&"function"===t.type){var a=1;(t.lastAlpha||Ec(r.parsed.args).alpha)&&(a=r.parsed.args.pop())
var o=r.parsed.args
return t.coordGrammar&&Object.entries(e.coords).forEach(function(e,r){var a,u=G(e,2),i=u[0],s=u[1],l=t.coordGrammar[r],c=null===(a=o[r])||void 0===a?void 0:a.type
if(!(l=l.find(function(e){return e==c}))){var d=s.name||i
throw new TypeError("".concat(c," not allowed for ").concat(d," in ").concat(n,"()"))}var p=l.range
"<percentage>"===c&&(p||(p=[0,1]))
var f=s.range||s.refRange
p&&f&&(o[r]=Ac(p,f,o[r]))}),{v:{spaceId:e.id,coords:o,alpha:a}}}}
for(D.s();!(f=D.n()).done;)if(m=h())return m.v}catch(e){D.e(e)}finally{D.f()}}else{var g,v=Q(jc.all)
try{for(v.s();!(g=v.n()).done;){var b=g.value
for(var y in b.formats){var F=b.formats[y]
if("custom"===F.type&&(!F.test||F.test(r.str))){var w,E=F.parse(r.str)
if(E)return null!==(w=E.alpha)&&void 0!==w||(E.alpha=1),E}}}}catch(e){v.e(e)}finally{v.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function Vc(e){if(!e)throw new TypeError("Empty color reference")
bc(e)&&(e=zc(e))
var t=e.space||e.spaceId
return t instanceof jc||(e.space=jc.get(t)),void 0===e.alpha&&(e.alpha=1),e}function $c(e,t){return(t=jc.get(t)).from(e)}function Hc(e,t){var r=jc.resolveCoord(t,e.space),n=r.space,a=r.index
return $c(e,n)[a]}function Uc(e,t,r){return t=jc.get(t),e.coords=t.to(e.space,r),e}function Gc(e,t,r){if(e=Vc(e),2===arguments.length&&"object"===yc(arguments[1])){var n=arguments[1]
for(var a in n)Gc(e,a,n[a])}else{"function"==typeof r&&(r=r(Hc(e,t)))
var o=jc.resolveCoord(t,e.space),u=o.space,i=o.index,s=$c(e,u)
s[i]=r,Uc(e,u,s)}return e}var Wc=new jc({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Lc,fromBase:function(e){return Oc(Lc.white,"D50",e)},toBase:function(e){return Oc("D50",Lc.white,e)},formats:{color:{}}}),Yc=216/24389,Kc=24/116,Xc=24389/27,Zc=Sc.D50,Jc=new jc({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zc,base:Wc,fromBase:function(e){var t=e.map(function(e,t){return e/Zc[t]}).map(function(e){return e>Yc?Math.cbrt(e):(Xc*e+16)/116})
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Kc?Math.pow(t[0],3):(116*t[0]-16)/Xc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Xc,t[2]>Kc?Math.pow(t[2],3):(116*t[2]-16)/Xc].map(function(e,t){return e*Zc[t]})},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}})
function Qc(e){return(e%360+360)%360}var ed=new jc({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Jc,fromBase:function(e){var t,r=G(e,3),n=r[0],a=r[1],o=r[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Qc(t)]},toBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2]
return n<0&&(n=0),isNaN(a)&&(a=0),[r,n*Math.cos(a*Math.PI/180),n*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),td=Math.pow(25,7),rd=Math.PI,nd=180/rd,ad=rd/180
function od(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.kL,a=void 0===n?1:n,o=r.kC,u=void 0===o?1:o,i=r.kH,s=void 0===i?1:i,l=G(Jc.from(e),3),c=l[0],d=l[1],p=l[2],f=ed.from(Jc,[c,d,p])[1],D=G(Jc.from(t),3),m=D[0],h=D[1],g=D[2],v=ed.from(Jc,[m,h,g])[1]
f<0&&(f=0),v<0&&(v=0)
var b=(f+v)/2,y=Math.pow(b,7),F=.5*(1-Math.sqrt(y/(y+td))),w=(1+F)*d,E=(1+F)*h,C=Math.sqrt(Math.pow(w,2)+Math.pow(p,2)),x=Math.sqrt(Math.pow(E,2)+Math.pow(g,2)),A=0===w&&0===p?0:Math.atan2(p,w),k=0===E&&0===g?0:Math.atan2(g,E)
A<0&&(A+=2*rd),k<0&&(k+=2*rd)
var N,B=m-c,T=x-C,R=(k*=nd)-(A*=nd),S=A+k,_=Math.abs(R)
C*x===0?N=0:_<=180?N=R:R>180?N=R-360:R<-180?N=R+360:console.log("the unthinkable has happened")
var O,M=2*Math.sqrt(x*C)*Math.sin(N*ad/2),P=(c+m)/2,I=(C+x)/2,j=Math.pow(I,7)
O=C*x===0?S:_<=180?S/2:S<360?(S+360)/2:(S-360)/2
var L=Math.pow(P-50,2),q=1+.015*L/Math.sqrt(20+L),z=1+.045*I,V=1
V-=.17*Math.cos((O-30)*ad),V+=.24*Math.cos(2*O*ad),V+=.32*Math.cos((3*O+6)*ad)
var $=1+.015*I*(V-=.2*Math.cos((4*O-63)*ad)),H=30*Math.exp(-1*Math.pow((O-275)/25,2)),U=2*Math.sqrt(j/(j+td)),W=-1*Math.sin(2*H*ad)*U,Y=Math.pow(B/(a*q),2)
return Y+=Math.pow(T/(u*z),2),Y+=Math.pow(M/(s*$),2),Y+=W*(T/(u*z))*(M/(s*$)),Math.sqrt(Y)}function ud(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.space,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,n=void 0===r?75e-6:r
e=Vc(e),t=jc.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:n})}function id(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function sd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.method,n=void 0===r?Rc.gamut_mapping:r,a=t.space,o=void 0===a?e.space:a
if(bc(arguments[1])&&(o=arguments[1]),ud(e,o=jc.get(o),{epsilon:0}))return e
var u=ld(e,o)
if("clip"!==n&&!ud(e,o)){var i=sd(id(u),{method:"clip",space:o})
if(od(e,i)>2){for(var s=jc.resolveCoord(n),l=s.space,c=s.id,d=ld(u,l),p=(s.range||s.refRange)[0],f=Hc(d,c);f-p>.01;){var D=id(d)
od(d,D=sd(D,{space:o,method:"clip"}))-2<.01?p=Hc(d,c):f=Hc(d,c),Gc(d,c,(p+f)/2)}u=ld(d,o)}else u=i}if("clip"===n||!ud(u,o,{epsilon:0})){var m=Object.values(o.coords).map(function(e){return e.range||[]})
u.coords=u.coords.map(function(e,t){var r=G(m[t],2),n=r[0],a=r[1]
return void 0!==n&&(e=Math.max(n,e)),void 0!==a&&(e=Math.min(e,a)),e})}return o!==e.space&&(u=ld(u,e.space)),e.coords=u.coords,e}function ld(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=Vc(e)
var n=(t=jc.get(t)).from(e),a={space:t,coords:n,alpha:e.alpha}
return r&&(a=sd(a)),a}function cd(e){var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,u=void 0===o?Rc.precision:o,i=a.format,s=void 0===i?"default":i,l=a.inGamut,c=void 0===l||l,d=V(a,y),p=s
s=null!==(t=null!==(r=(e=Vc(e)).space.getFormat(s))&&void 0!==r?r:e.space.getFormat("default"))&&void 0!==t?t:jc.DEFAULT_FORMAT,c||(c=s.toGamut)
var f=e.coords
if(f=f.map(function(e){return e||0}),c&&!ud(e)&&(f=sd(id(e),!0===c?void 0:c).coords),"custom"===s.type){if(d.precision=u,!s.serialize)throw new TypeError("format ".concat(p," can only be used to parse colors, not for serialization"))
n=s.serialize(f,e.alpha,d)}else{var D=s.name||"color"
s.serializeCoords?f=s.serializeCoords(f,u):null!==u&&(f=f.map(function(e){return Fc(e,u)}))
var m=$(f)
if("color"===D){var h,g=s.id||(null===(h=s.ids)||void 0===h?void 0:h[0])||e.space.id
m.unshift(g)}var v=e.alpha
null!==u&&(v=Fc(v,u))
var b=e.alpha<1&&!s.noAlpha?"".concat(s.commas?",":" /"," ").concat(v):""
n="".concat(D,"(").concat(m.join(s.commas?", ":" ")).concat(b,")")}return n}sd.returns="color",ld.returns="color"
var dd=new qc({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],formats:{color:{}}}),pd=1.09929682680944,fd=.018053968510807,Dd=new qc({id:"rec2020",name:"REC.2020",base:dd,toBase:function(e){return e.map(function(e){return e<4.5*fd?e/4.5:Math.pow((e+pd-1)/pd,1/.45)})},fromBase:function(e){return e.map(function(e){return e>=fd?pd*Math.pow(e,.45)-(pd-1):4.5*e})},formats:{color:{}}}),md=new qc({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),hd=new qc({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],formats:{color:{}}}),gd={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},vd=Array(3).fill("<percentage> | <number>[0, 255]"),bd=Array(3).fill("<number>[0, 255]"),yd=new qc({id:"srgb",name:"sRGB",base:hd,fromBase:function(e){return e.map(function(e){var t=e<0?-1:1,r=e*t
return r>.0031308?t*(1.055*Math.pow(r,1/2.4)-.055):12.92*e})},toBase:function(e){return e.map(function(e){var t=e<0?-1:1,r=e*t
return r<.04045?e/12.92:t*Math.pow((r+.055)/1.055,2.4)})},formats:{rgb:{coords:vd},rgb_number:{name:"rgb",commas:!0,coords:bd,noAlpha:!0},color:{},rgba:{coords:vd,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:bd},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,function(e){t.push(parseInt(e,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,n=void 0===r||r
t<1&&e.push(t),e=e.map(function(e){return Math.round(255*e)})
var a=n&&e.every(function(e){return e%17==0})
return"#"+e.map(function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")}).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=gd.black,t.alpha=0):t.coords=gd[e],t.coords)return t}}}}),Fd=new qc({id:"p3",name:"P3",base:md,fromBase:yd.fromBase,toBase:yd.toBase,formats:{color:{id:"display-p3"}}})
if(Rc.display_space=yd,"undefined"!=typeof CSS&&null!==(o=CSS)&&void 0!==o&&o.supports)for(var wd=0,Ed=[Jc,Dd,Fd];wd<Ed.length;wd++){var Cd=Ed[wd],xd=Cd.getMinCoords(),Ad=cd({space:Cd,coords:xd,alpha:1})
if(CSS.supports("color",Ad)){Rc.display_space=Cd
break}}function kd(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.space,a=void 0===n?Rc.display_space:n,o=V(r,F),u=cd(e,o)
if("undefined"==typeof CSS||null!==(t=CSS)&&void 0!==t&&t.supports("color",u)||!Rc.display_space)(u=new String(u)).color=e
else{var i=ld(e,a);(u=new String(cd(i,o))).color=i}return u}function Nd(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",n=(r=jc.get(r)).from(e),a=r.from(t)
return Math.sqrt(n.reduce(function(e,t,r){var n=a[r]
return isNaN(t)||isNaN(n)?e:e+Math.pow(n-t,2)},0))}function Bd(e){return Hc(e,[Lc,"y"])}function Td(e,t){Gc(e,[Lc,"y"],t)}var Rd=Object.freeze({__proto__:null,getLuminance:Bd,setLuminance:Td,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return Bd(this)},set:function(e){Td(this,e)}})}})
function Sd(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function _d(e){var t=e<0?-1:1,r=Math.abs(e)
return t*Math.pow(r,2.4)}var Od=216/24389,Md=24/116,Pd=24389/27,Id=Sc.D65,jd=new jc({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Id,base:Lc,fromBase:function(e){var t=e.map(function(e,t){return e/Id[t]}).map(function(e){return e>Od?Math.cbrt(e):(Pd*e+16)/116})
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Md?Math.pow(t[0],3):(116*t[0]-16)/Pd,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Pd,t[2]>Md?Math.pow(t[2],3):(116*t[2]-16)/Pd].map(function(e,t){return e*Id[t]})},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}}),Ld=.5*Math.pow(5,.5)+.5,qd=Object.freeze({__proto__:null,contrastWCAG21:function(e,t){e=Vc(e),t=Vc(t)
var r=Math.max(Bd(e),0),n=Math.max(Bd(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}return(r+.05)/(n+.05)},contrastAPCA:function(e,t){var r,n,a,o
t=Vc(t),e=Vc(e)
var u=G((t=ld(t,"srgb")).coords,3)
n=u[0],a=u[1],o=u[2]
var i=.2126729*_d(n)+.7151522*_d(a)+.072175*_d(o),s=G((e=ld(e,"srgb")).coords,3)
n=s[0],a=s[1],o=s[2]
var l=.2126729*_d(n)+.7151522*_d(a)+.072175*_d(o),c=Sd(i),d=Sd(l),p=d>c
return r=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(r)<.1?0:r>0?r-.027:r+.027)},contrastMichelson:function(e,t){e=Vc(e),t=Vc(t)
var r=Math.max(Bd(e),0),n=Math.max(Bd(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}var o=r+n
return 0===o?0:(r-n)/o},contrastWeber:function(e,t){e=Vc(e),t=Vc(t)
var r=Math.max(Bd(e),0),n=Math.max(Bd(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}return 0===n?5e4:(r-n)/n},contrastLstar:function(e,t){e=Vc(e),t=Vc(t)
var r=Hc(e,[Jc,"l"]),n=Hc(t,[Jc,"l"])
return Math.abs(r-n)},contrastDeltaPhi:function(e,t){e=Vc(e),t=Vc(t)
var r=Hc(e,[jd,"l"]),n=Hc(t,[jd,"l"]),a=Math.abs(Math.pow(r,Ld)-Math.pow(n,Ld)),o=Math.pow(a,1/Ld)*Math.SQRT2-40
return o<7.5?0:o}})
function zd(e){var t=G($c(e,Lc),3),r=t[0],n=t[1],a=r+15*n+3*t[2]
return[4*r/a,9*n/a]}function Vd(e){var t=G($c(e,Lc),3),r=t[0],n=t[1],a=r+n+t[2]
return[r/a,n/a]}var $d=Object.freeze({__proto__:null,uv:zd,xy:Vd,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return zd(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return Vd(this)}})}}),Hd=Math.PI/180,Ud=new jc({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Lc,fromBase:function(e){return e.map(function(e){return Math.max(203*e,0)})},toBase:function(e){return e.map(function(e){return Math.max(e/203,0)})}}),Gd=1.15,Wd=.66,Yd=2610/Math.pow(2,14),Kd=Math.pow(2,14)/2610,Xd=3424/Math.pow(2,12),Zd=2413/Math.pow(2,7),Jd=2392/Math.pow(2,7),Qd=1.7*2523/Math.pow(2,5),ep=Math.pow(2,5)/(1.7*2523),tp=-.56,rp=16295499532821565e-27,np=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ap=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],op=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],up=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],ip=new jc({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ud,fromBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2],o=vc(np,[Gd*r-(Gd-1)*a,Wd*n-(Wd-1)*r,a]).map(function(e){var t=Xd+Zd*Math.pow(e/1e4,Yd),r=1+Jd*Math.pow(e/1e4,Yd)
return Math.pow(t/r,Qd)}),u=G(vc(op,o),3),i=u[0],s=u[1],l=u[2]
return[(1+tp)*i/(1+tp*i)-rp,s,l]},toBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2],o=vc(up,[(r+rp)/(1+tp-tp*(r+rp)),n,a]).map(function(e){var t=Xd-Math.pow(e,ep),r=Jd*Math.pow(e,ep)-Zd
return 1e4*Math.pow(t/r,Kd)}),u=G(vc(ap,o),3),i=u[0],s=u[1],l=u[2],c=(i+(Gd-1)*l)/Gd
return[c,(s+(Wd-1)*c)/Wd,l]},formats:{color:{}}}),sp=new jc({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ip,fromBase:function(e){var t,r=G(e,3),n=r[0],a=r[1],o=r[2],u=2e-4
return t=Math.abs(a)<u&&Math.abs(o)<u?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Qc(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}}),lp=.8359375,cp=2413/128,dp=18.6875,pp=2610/16384,fp=16384/2610,Dp=32/2523,mp=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],hp=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],gp=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],vp=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]],bp=new jc({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ud,fromBase:function(e){return t=vc(mp,e).map(function(e){var t=lp+cp*Math.pow(e/1e4,pp),r=1+dp*Math.pow(e/1e4,pp)
return Math.pow(t/r,78.84375)}),vc(hp,t)
var t},toBase:function(e){var t=function(e){return vc(gp,e).map(function(e){var t=Math.max(Math.pow(e,Dp)-lp,0),r=cp-dp*Math.pow(e,Dp)
return 1e4*Math.pow(t/r,fp)})}(e)
return vc(vp,t)},formats:{color:{}}}),yp=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Fp=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],wp=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Ep=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],Cp=new jc({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Lc,fromBase:function(e){var t=vc(yp,e).map(function(e){return Math.cbrt(e)})
return vc(wp,t)},toBase:function(e){var t=vc(Ep,e).map(function(e){return Math.pow(e,3)})
return vc(Fp,t)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),xp=Object.freeze({__proto__:null,deltaE76:function(e,t){return Nd(e,t,"lab")},deltaECMC:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.l,a=void 0===n?2:n,o=r.c,u=void 0===o?1:o,i=G(Jc.from(e),3),s=i[0],l=i[1],c=i[2],d=G(ed.from(Jc,[s,l,c]),3),p=d[1],f=d[2],D=G(Jc.from(t),3),m=D[0],h=D[1],g=D[2],v=ed.from(Jc,[m,h,g])[1]
p<0&&(p=0),v<0&&(v=0)
var b=s-m,y=p-v,F=l-h,w=c-g,E=Math.pow(F,2)+Math.pow(w,2)-Math.pow(y,2),C=.511
s>=16&&(C=.040975*s/(1+.01765*s))
var x,A=.0638*p/(1+.0131*p)+.638
Number.isNaN(f)&&(f=0),x=f>=164&&f<=345?.56+Math.abs(.2*Math.cos((f+168)*Hd)):.36+Math.abs(.4*Math.cos((f+35)*Hd))
var k=Math.pow(p,4),N=Math.sqrt(k/(k+1900)),B=A*(N*x+1-N),T=Math.pow(b/(a*C),2)
return T+=Math.pow(y/(u*A),2),T+=E/Math.pow(B,2),Math.sqrt(T)},deltaE2000:od,deltaEJz:function(e,t){var r=G(sp.from(e),3),n=r[0],a=r[1],o=r[2],u=G(sp.from(t),3),i=u[0],s=u[1],l=u[2],c=n-i,d=a-s
Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o)
var p=o-l,f=2*Math.sqrt(a*s)*Math.sin(p/2*(Math.PI/180))
return Math.sqrt(Math.pow(c,2)+Math.pow(d,2)+Math.pow(f,2))},deltaEITP:function(e,t){var r=G(bp.from(e),3),n=r[0],a=r[1],o=r[2],u=G(bp.from(t),3),i=u[0],s=u[1],l=u[2]
return 720*Math.sqrt(Math.pow(n-i,2)+.25*Math.pow(a-s,2)+Math.pow(o-l,2))},deltaEOK:function(e,t){var r=G(Cp.from(e),3),n=r[0],a=r[1],o=r[2],u=G(Cp.from(t),3),i=n-u[0],s=a-u[1],l=o-u[2]
return Math.sqrt(Math.pow(i,2)+Math.pow(s,2)+Math.pow(l,2))}})
function Ap(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
bc(r)&&(r={method:r})
var n=r,a=n.method,o=void 0===a?Rc.deltaE:a,u=V(n,E)
for(var i in e=Vc(e),t=Vc(t),xp)if("deltae"+o.toLowerCase()===i.toLowerCase())return xp[i](e,t,u)
throw new TypeError("Unknown deltaE method: ".concat(o))}var kp=Object.freeze({__proto__:null,lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Gc(e,[jc.get("oklch","lch"),"l"],function(e){return e*(1+t)})},darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Gc(e,[jc.get("oklch","lch"),"l"],function(e){return e*(1-t)})}})
function Np(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[Vc(e),Vc(t)]
if(e=a[0],t=a[1],"object"===yc(r)){var o=[.5,r]
r=o[0],n=o[1]}var u=n
return Tp(e,t,{space:u.space,outputSpace:u.outputSpace,premultiplied:u.premultiplied})(r)}function Bp(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Rp(e)){n=t
var a=G((r=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=n,u=o.maxDeltaE,i=o.deltaEMethod,s=o.steps,l=void 0===s?2:s,c=o.maxSteps,d=void 0===c?1e3:c,p=V(o,C)
if(!r){var f=[Vc(e),Vc(t)]
r=Tp(e=f[0],t=f[1],p)}var D=Ap(e,t),m=u>0?Math.max(l,Math.ceil(D/u)+1):l,h=[]
if(void 0!==d&&(m=Math.min(m,d)),1===m)h=[{p:.5,color:r(.5)}]
else{var g=1/(m-1)
h=Array.from({length:m},function(e,t){var n=t*g
return{p:n,color:r(n)}})}if(u>0)for(var v=h.reduce(function(e,t,r){if(0===r)return 0
var n=Ap(t.color,h[r-1].color,i)
return Math.max(e,n)},0);v>u;){v=0
for(var b=1;b<h.length&&h.length<d;b++){var y=h[b-1],F=h[b],w=(F.p+y.p)/2,E=r(w)
v=Math.max(v,Ap(E,y.color),Ap(E,F.color)),h.splice(b,0,{p:w,color:r(w)}),b++}}return h=h.map(function(e){return e.color})}function Tp(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Rp(e)){var n=e,a=t
return Tp.apply(void 0,$(n.rangeArgs.colors).concat([U({},n.rangeArgs.options,a)]))}var o=r.space,u=r.outputSpace,i=r.progression,s=r.premultiplied
e=Vc(e),t=Vc(t),e=id(e),t=id(t)
var l={colors:[e,t],options:r}
if(o=o?jc.get(o):jc.registry[Rc.interpolationSpace]||e.space,u=u?jc.get(u):o,e=ld(e,o),t=ld(t,o),e=sd(e),t=sd(t),o.coords.h&&"angle"===o.coords.h.type){var c=r.hue=r.hue||"shorter",d=[o,"h"],p=[Hc(e,d),Hc(t,d)],f=p[0],D=p[1],m=function(e,t){if("raw"===e)return t
var r=G(t.map(Qc),2),n=r[0],a=r[1],o=a-n
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(n+=360):"longer"===e?-180<o&&o<180&&(o>0?a+=360:n+=360):"shorter"===e&&(o>180?n+=360:o<-180&&(a+=360)),[n,a]}(c,[f,D]),h=G(m,2)
f=h[0],D=h[1],Gc(e,d,f),Gc(t,d,D)}return s&&(e.coords=e.coords.map(function(t){return t*e.alpha}),t.coords=t.coords.map(function(e){return e*t.alpha})),Object.assign(function(r){r=i?i(r):r
var n=e.coords.map(function(e,n){return Cc(e,t.coords[n],r)}),a=Cc(e.alpha,t.alpha,r),l={space:o,coords:n,alpha:a}
return s&&(l.coords=l.coords.map(function(e){return e/a})),u!==o&&(l=ld(l,u)),l},{rangeArgs:l})}function Rp(e){return"function"===yc(e)&&!!e.rangeArgs}Rc.interpolationSpace="lab"
var Sp=Object.freeze({__proto__:null,mix:Np,steps:Bp,range:Tp,isRange:Rp,register:function(e){e.defineFunction("mix",Np,{returns:"color"}),e.defineFunction("range",Tp,{returns:"function<color>"}),e.defineFunction("steps",Bp,{returns:"array<color>"})}}),_p=new jc({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:yd,fromBase:function(e){var t=Math.max.apply(Math,$(e)),r=Math.min.apply(Math,$(e)),n=G(e,3),a=n[0],o=n[1],u=n[2],i=NaN,s=0,l=(r+t)/2,c=t-r
if(0!==c){switch(s=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:i=(o-u)/c+(o<u?6:0)
break
case o:i=(u-a)/c+2
break
case u:i=(a-o)/c+4}i*=60}return[i,100*s,100*l]},toBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2]
function o(e){var t=(e+r/30)%12,o=n*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(r%=360)<0&&(r+=360),n/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Op=new jc({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:_p,fromBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2],o=(a/=100)+(n/=100)*Math.min(a,1-a)
return[r,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2],o=(a/=100)*(1-(n/=100)/2)
return[r,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{toGamut:!0}}}),Mp=new jc({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Op,fromBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2]
return[r,a*(100-n)/100,100-a]},toBase:function(e){var t=G(e,3),r=t[0],n=t[1],a=t[2],o=(n/=100)+(a/=100)
if(o>=1)return[r,0,n/o*100]
var u=1-a
return[r,100*(0===u?0:1-n/u),100*u]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),Pp=new qc({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Ip=new qc({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Pp,toBase:function(e){return e.map(function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)})},fromBase:function(e){return e.map(function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)})},formats:{color:{id:"a98-rgb"}}}),jp=new qc({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Wc,toXYZ_M:[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fromXYZ_M:[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]]}),Lp=1/512,qp=new qc({id:"prophoto",name:"ProPhoto",base:jp,toBase:function(e){return e.map(function(e){return e<.03125?e/16:Math.pow(e,1.8)})},fromBase:function(e){return e.map(function(e){return e>=Lp?Math.pow(e,1/1.8):16*e})},formats:{color:{id:"prophoto-rgb"}}}),zp=new jc({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Cp,fromBase:function(e){var t,r=G(e,3),n=r[0],a=r[1],o=r[2],u=2e-4
return t=Math.abs(a)<u&&Math.abs(o)<u?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Qc(t)]},toBase:function(e){var t,r,n=G(e,3),a=n[0],o=n[1],u=n[2]
return isNaN(u)?(t=0,r=0):(t=o*Math.cos(u*Math.PI/180),r=o*Math.sin(u*Math.PI/180)),[a,t,r]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Vp=2610/Math.pow(2,14),$p=Math.pow(2,14)/2610,Hp=2523/Math.pow(2,5),Up=Math.pow(2,5)/2523,Gp=3424/Math.pow(2,12),Wp=2413/Math.pow(2,7),Yp=2392/Math.pow(2,7),Kp=new qc({id:"rec2100pq",name:"REC.2100-PQ",base:dd,toBase:function(e){return e.map(function(e){return 1e4*Math.pow(Math.max(Math.pow(e,Up)-Gp,0)/(Wp-Yp*Math.pow(e,Up)),$p)/203})},fromBase:function(e){return e.map(function(e){var t=Math.max(203*e/1e4,0),r=Gp+Wp*Math.pow(t,Vp),n=1+Yp*Math.pow(t,Vp)
return Math.pow(r/n,Hp)})},formats:{color:{id:"rec2100-pq"}}}),Xp=.17883277,Zp=.28466892,Jp=.55991073,Qp=3.7743,ef=new qc({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:dd,toBase:function(e){return e.map(function(e){return e<=.5?Math.pow(e,2)/3*Qp:Math.exp((e-Jp)/Xp+Zp)/12*Qp})},fromBase:function(e){return e.map(function(e){return(e/=Qp)<=1/12?Math.sqrt(3*e):Xp*Math.log(12*e-Zp)+Jp})},formats:{color:{id:"rec2100-hlg"}}}),tf={}
function rf(e){var t=e.id
e.toCone_M,e.fromCone_M,tf[t]=arguments[0]}function nf(e,t){var r=tf[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],n=G(vc(r.toCone_M,e),3),a=n[0],o=n[1],u=n[2],i=G(vc(r.toCone_M,t),3),s=vc([[i[0]/a,0,0],[0,i[1]/o,0],[0,0,i[2]/u]],r.toCone_M)
return vc(r.fromCone_M,s)}Tc.add("chromatic-adaptation-start",function(e){e.options.method&&(e.M=nf(e.W1,e.W2,e.options.method))}),Tc.add("chromatic-adaptation-end",function(e){e.M||(e.M=nf(e.W1,e.W2,e.options.method))}),rf({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]}),rf({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]}),rf({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]}),rf({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]}),Object.assign(Sc,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Sc.ACES=[.32168/.33767,1,.34065/.33767]
var af=new qc({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Sc.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],formats:{color:{}}}),of=Math.pow(2,-16),uf=-.35828683,sf=(Math.log2(65504)+9.72)/17.52,lf=new qc({id:"acescc",name:"ACEScc",coords:{r:{range:[uf,sf],name:"Red"},g:{range:[uf,sf],name:"Green"},b:{range:[uf,sf],name:"Blue"}},referred:"scene",base:af,toBase:function(e){return e.map(function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-of):e<sf?Math.pow(2,17.52*e-9.72):65504})},fromBase:function(e){return e.map(function(e){return e<=0?(Math.log2(of)+9.72)/17.52:e<of?(Math.log2(of+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),cf=Object.freeze({__proto__:null,XYZ_D65:Lc,XYZ_D50:Wc,XYZ_ABS_D65:Ud,Lab_D65:jd,Lab:Jc,LCH:ed,sRGB_Linear:hd,sRGB:yd,HSL:_p,HWB:Mp,HSV:Op,P3_Linear:md,P3:Fd,A98RGB_Linear:Pp,A98RGB:Ip,ProPhoto_Linear:jp,ProPhoto:qp,REC_2020_Linear:dd,REC_2020:Dd,OKLab:Cp,OKLCH:zp,Jzazbz:ip,JzCzHz:sp,ICTCP:bp,REC_2100_PQ:Kp,REC_2100_HLG:ef,ACEScg:af,ACEScc:lf}),df=(_=new WeakMap,Z(function e(){var t,r,n,a,o=this
K(this,e),P(this,_,void 0)
for(var u=arguments.length,i=new Array(u),s=0;s<u;s++)i[s]=arguments[s]
1===i.length&&(t=Vc(i[0])),t?(r=t.space||t.spaceId,n=t.coords,a=t.alpha):(r=i[0],n=i[1],a=i[2]),q(_,this,jc.get(r)),this.coords=n?n.slice():[0,0,0],this.alpha=a<1?a:1
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in L(_,this).coords)c(d)},[{key:"space",get:function(){return L(_,this)}},{key:"spaceId",get:function(){return L(_,this).id}},{key:"clone",value:function(){return new df(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n=kd.apply(void 0,[this].concat(t))
return n.color=new df(n.color),n}}],[{key:"get",value:function(e){if(e instanceof df)return e
for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return function(e,t,r){if(S())return Reflect.construct.apply(null,arguments)
var n=[null]
n.push.apply(n,t)
var a=new(e.bind.apply(e,n))
return r&&M(a,r.prototype),a}(df,[e].concat(r))}},{key:"defineFunction",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=r.instance,a=void 0===n||n,o=r.returns,u=function(){var e=t.apply(void 0,arguments)
if("color"===o)e=df.get(e)
else if("function<color>"===o){var r=e
e=function(){var e=r.apply(void 0,arguments)
return df.get(e)},Object.assign(e,r)}else"array<color>"===o&&(e=e.map(function(e){return df.get(e)}))
return e}
e in df||(df[e]=u),a&&(df.prototype[e]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return u.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(e){for(var t in e)df.defineFunction(t,e[t],e[t])}},{key:"extend",value:function(e){if(e.register)e.register(df)
else for(var t in e)df.defineFunction(t,e[t])}}]))
df.defineFunctions({get:Hc,getAll:$c,set:Gc,setAll:Uc,to:ld,equals:function(e,t){return e=Vc(e),t=Vc(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every(function(e,r){return e===t.coords[r]})},inGamut:ud,toGamut:sd,distance:Nd,toString:cd}),Object.assign(df,{util:Nc,hooks:Tc,WHITES:Sc,Space:jc,spaces:jc.registry,parse:zc,defaults:Rc})
for(var pf=0,ff=Object.keys(cf);pf<ff.length;pf++){var Df=ff[pf]
jc.register(cf[Df])}for(var mf in jc.registry)hf(mf,jc.registry[mf])
function hf(e,t){Object.keys(t.coords),Object.values(t.coords).map(function(e){return e.name})
var r=e.replace(/-/g,"_")
Object.defineProperty(df.prototype,r,{get:function(){var r=this,n=this.getAll(e)
return"undefined"==typeof Proxy?n:new Proxy(n,{has:function(e,r){try{return jc.resolveCoord([t,r]),!0}catch(e){}return Reflect.has(e,r)},get:function(e,r,n){if(r&&"symbol"!==l(r)&&!(r in e)){var a=jc.resolveCoord([t,r]).index
if(a>=0)return e[a]}return Reflect.get(e,r,n)},set:function(n,a,o,u){if(a&&"symbol"!==l(a)&&!(a in n)||a>=0){var i=jc.resolveCoord([t,a]).index
if(i>=0)return n[i]=o,r.setAll(e,n),!0}return Reflect.set(n,a,o,u)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}Tc.add("colorspace-init-end",function(e){var t
hf(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach(function(t){hf(t,e)})}),df.extend(xp),df.extend({deltaE:Ap}),df.extend(kp),df.extend({contrast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
bc(r)&&(r={algorithm:r})
var n=r,a=n.algorithm,o=V(n,w)
if(!a){var u=Object.keys(qd).map(function(e){return e.replace(/^contrast/,"")}).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(u))}for(var i in e=Vc(e),t=Vc(t),qd)if("contrast"+a.toLowerCase()===i.toLowerCase())return qd[i](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),df.extend($d),df.extend(Rd),df.extend(Sp),df.extend(qd)
var gf=De(Qn())
hc.default.templateSettings.strip=!1
var vf=/^#[0-9a-f]{3,8}$/i,bf=/hsl\(\s*([-\d.]+)(rad|turn)/,yf=(j=new WeakMap,X=new WeakMap,te=new WeakMap,re=new WeakMap,ne=new WeakMap,ae=new WeakMap,oe=new WeakSet,Z(function e(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
if(K(this,e),I(this,oe),P(this,j,void 0),P(this,X,void 0),P(this,te,void 0),P(this,re,void 0),P(this,ne,void 0),P(this,ae,void 0),t instanceof yf){var o=t.r,u=t.g,i=t.b
return this.r=o,this.g=u,this.b=i,void(this.alpha=t.alpha)}this.red=t,this.green=r,this.blue=n,this.alpha=a},[{key:"r",get:function(){return L(j,this)},set:function(e){q(j,this,e),q(re,this,Math.round(255*Ef(e,0,1)))}},{key:"g",get:function(){return L(X,this)},set:function(e){q(X,this,e),q(ne,this,Math.round(255*Ef(e,0,1)))}},{key:"b",get:function(){return L(te,this)},set:function(e){q(te,this,e),q(ae,this,Math.round(255*Ef(e,0,1)))}},{key:"red",get:function(){return L(re,this)},set:function(e){q(j,this,e/255),q(re,this,Ef(e,0,255))}},{key:"green",get:function(){return L(ne,this)},set:function(e){q(X,this,e/255),q(ne,this,Ef(e,0,255))}},{key:"blue",get:function(){return L(ae,this)},set:function(e){q(te,this,e/255),q(ae,this,Ef(e,0,255))}},{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),r=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?r:"0"+r)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){e=e.replace(bf,function(e,t,r){var n=t+r
switch(r){case"rad":return e.replace(n,180*t/Math.PI)
case"turn":return e.replace(n,360*t)}})
try{var t
"Prototype"in u&&"Version"in u.Prototype&&(t=Array.from,Array.from=gf.default)
var r=new df(e).to("srgb")
t&&(Array.from=t,t=null),this.r=r.r,this.g=r.g,this.b=r.b,this.alpha=+r.alpha}catch(t){throw new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(vf)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.r,t=this.g,r=this.b
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))}},{key:"getLuminosity",value:function(){return.3*this.r+.59*this.g+.11*this.b}},{key:"setLuminosity",value:function(e){var t=e-this.getLuminosity()
return z(oe,this,Ff).call(this,t).clip()}},{key:"getSaturation",value:function(){return Math.max(this.r,this.g,this.b)-Math.min(this.r,this.g,this.b)}},{key:"setSaturation",value:function(e){var t=new yf(this),r=G([{name:"r",value:t.r},{name:"g",value:t.g},{name:"b",value:t.b}].sort(function(e,t){return e.value-t.value}),3),n=r[0],a=r[1],o=r[2]
return o.value>n.value?(a.value=(a.value-n.value)*e/(o.value-n.value),o.value=e):a.value=o.value=0,n.value=0,t[o.name]=o.value,t[n.name]=n.value,t[a.name]=a.value,t}},{key:"clip",value:function(){var e=new yf(this),t=e.getLuminosity(),r=Math.min(e.r,e.g,e.b),n=Math.max(e.r,e.g,e.b)
return r<0&&(e.r=t+(e.r-t)*t/(t-r),e.g=t+(e.g-t)*t/(t-r),e.b=t+(e.b-t)*t/(t-r)),n>1&&(e.r=t+(e.r-t)*(1-t)/(n-t),e.g=t+(e.g-t)*(1-t)/(n-t),e.b=t+(e.b-t)*(1-t)/(n-t)),e}}]))
function Ff(e){var t=new yf(this)
return t.r+=e,t.g+=e,t.b+=e,t}var wf=yf
function Ef(e,t,r){return Math.min(Math.max(t,e),r)}var Cf=function(e){var t=new wf
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var r=e.getPropertyValue("opacity")
t.alpha=t.alpha*r}return t},xf=function(e){var t=u.getComputedStyle(e)
return sc(e,t)||1===Cf(t).alpha}
function Af(e){if(!e.href)return!1
var t=eo.get("firstPageLink",kf)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function kf(){return(u.location.origin?fm(c._tree,'a[href]:not([href^="javascript:"])').find(function(e){return!Vi(e.actualNode)}):fm(c._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var Nf=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Bf=/(\w+)\((\d+)/,Tf=function e(t,r,n){var a
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var o=t instanceof oa?t:to(t)
t=o?o.actualNode:t
var i="_isVisible"+(r?"ScreenReader":""),s=null!==(a=u.Node)&&void 0!==a?a:{},l=s.DOCUMENT_NODE,d=s.DOCUMENT_FRAGMENT_NODE,p=o?o.props.nodeType:t.nodeType,f=o?o.props.nodeName:t.nodeName.toLowerCase()
if(o&&void 0!==o[i])return o[i]
if(p===l)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(o?o.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var D=o.parent,m=!0
return D&&(m=e(D,r,!0)),o&&(o[i]=m),m}var h=u.getComputedStyle(t,null)
if(null===h)return!1
if("area"===f)return function(t,r,n){var a=Bu(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=Au(t)
if(!u||9!==u.nodeType)return!1
var i=fm(c._tree,'img[usemap="#'.concat(Fa(o),'"]'))
return!(!i||!i.length)&&i.some(function(t){return e(t.actualNode,r,n)})}(t,r,n)
if("none"===h.getPropertyValue("display"))return!1
var g=parseInt(h.getPropertyValue("height")),v=parseInt(h.getPropertyValue("width")),b=kD(t),y=b&&0===g,F=b&&0===v,w="absolute"===h.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===h.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(Nf),r=e.getPropertyValue("clip-path").match(Bf)
if(t&&5===t.length){var n=e.getPropertyValue("position")
if(["fixed","absolute"].includes(n))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(r){var a=r[1],o=parseInt(r[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(h)||"0"===h.getPropertyValue("opacity")||y||F||w))return!1
if(!n&&("hidden"===h.getPropertyValue("visibility")||!r&&ei(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,r,!0)),o&&(o[i]=C),C},Rf=function(e,t){for(var r=["fixed","sticky"],n=[],a=!1,o=0;o<e.length;++o){var i=e[o]
i===t&&(a=!0)
var s=u.getComputedStyle(i)
a||-1===r.indexOf(s.position)?n.push(i):n=[]}return n}
function Sf(e,t){var r=_f(t)
do{var n=_f(e)
if(n===r||n===t)return Of(e,t)
e=n}while(e)
return!1}function _f(e){for(var t=to(e).parent;t;){if(kD(t.actualNode))return t.actualNode
t=t.parent}}function Of(e,t){var r=u.getComputedStyle(t),n=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var a=Array.from(e.getClientRects()),o=t.getBoundingClientRect(),i={left:o.left,top:o.top,width:o.width,height:o.height}
return(["scroll","auto"].includes(n)||t instanceof u.HTMLHtmlElement)&&(i.width=t.scrollWidth,i.height=t.scrollHeight),1===a.length&&"hidden"===n&&"nowrap"===r.getPropertyValue("white-space")&&(a[0]=i),a.some(function(e){return!(Math.ceil(e.left)<Math.floor(i.left)||Math.ceil(e.top)<Math.floor(i.top)||Math.floor(e.left+e.width)>Math.ceil(i.left+i.width)||Math.floor(e.top+e.height)>Math.ceil(i.top+i.height))})}var Mf=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(a>999)throw new Error("Infinite loop detected")
return Array.from(n.elementsFromPoint(t,r)||[]).filter(function(e){return Au(e)===n}).reduce(function(n,o){if(Eu(o)){var u=e(t,r,o.shadowRoot,a+1);(n=n.concat(u)).length&&Sf(n[0],o)&&n.push(o)}else n.push(o)
return n},[])}
function Pf(e){var t={}
if(!e||!e.length)return t
var r=e.substring(1).split("&")
if(!r||!r.length)return t
for(var n=0;n<r.length;n++){var a=G(r[n].split("="),2),o=a[0],u=a[1],i=void 0===u?"":u
t[decodeURIComponent(o)]=decodeURIComponent(i)}return t}function If(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===G(t,1)[0]?"":e:""}var jf,Lf=function(e,t){if(e.hasAttribute(t)){var r=e.nodeName.toUpperCase(),n=e;["A","AREA"].includes(r)&&!e.ownerSVGElement||((n=s.createElement("a")).href=e.getAttribute(t))
var a,o=["https:","ftps:"].includes(n.protocol)?n.protocol.replace(/s:$/,":"):n.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(n.pathname)?n.pathname:"/".concat(n.pathname)),i=u.pathname,l=u.filename
return{protocol:o,hostname:n.hostname,port:(a=n.port,["443","80"].includes(a)?"":a),pathname:/\/$/.test(i)?i:"".concat(i,"/"),search:Pf(n.search),hash:If(n.hash),filename:l}}},qf=function(e,t){var r=t.getBoundingClientRect(),n=r.top,a=r.left,o=n-t.scrollTop,i=n-t.scrollTop+t.scrollHeight,s=a-t.scrollLeft,l=a-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>r.right||e.top>i&&e.top>r.bottom||e.right<s&&e.right<r.left||e.bottom<o&&e.bottom<r.top)return!1
var c=u.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof u.HTMLBodyElement||t instanceof u.HTMLHtmlElement},zf=0,Vf=function(e){function t(e,r,n){var a
if(K(this,t),(a=R(this,t)).shadowId=n,a.children=[],a.actualNode=e,a.parent=r,r||(zf=0),a.nodeIndex=zf++,a._isHidden=null,a._cache={},a._isXHTML=Ta(e.ownerDocument),"input"===e.nodeName.toLowerCase()){var o=e.getAttribute("type")
o=a._isXHTML?o:(o||"").toLowerCase(),xm().includes(o)||(o="text"),a._type=o}return eo.get("nodeMap")&&eo.get("nodeMap").set(e,a),a}return O(t,e),Z(t,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,r=e.nodeName,n=e.id,a=e.nodeValue
this._cache.props={nodeType:t,nodeName:this._isXHTML?r:r.toLowerCase(),id:n,type:this._type,nodeValue:a},1===t&&(this._cache.props.multiple=this.actualNode.multiple,this._cache.props.value=this.actualNode.value,this._cache.props.selected=this.actualNode.selected,this._cache.props.checked=this.actualNode.checked,this._cache.props.indeterminate=this.actualNode.indeterminate)}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof u.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map(function(e){return e.name})),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=u.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=Zi(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=Ki(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter(function(e){return e.width>0})),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}])}(oa),$f=Vf,Hf=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},Uf=" [idsMap]"
function Gf(e,t,r){var n=e[0]._selectorMap
if(n){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some(function(e){return Wf(e)}))return
var u=new Set
t.forEach(function(e){var t,r=function(e,t,r){var n=e[e.length-1],a=null,o=e.length>1||!!n.pseudos||!!n.classes
if(Wf(n))a=t["*"]
else{if(n.id){var u
if(!t[Uf]||!Object.hasOwn(t[Uf],n.id)||null===(u=t[Uf][n.id])||void 0===u||!u.length)return
a=t[Uf][n.id].filter(function(e){return e.shadowId===r})}if(n.tag&&"*"!==n.tag){var i
if(null===(i=t[n.tag])||void 0===i||!i.length)return
var s=t[n.tag]
a=a?Yf(s,a):s}if(n.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?Yf(c,a):c}if(n.attributes)for(var d=0;d<n.attributes.length;d++){var p,f=n.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var D=t["[".concat(f.key,"]")]
a=a?Yf(D,a):D}}return{nodes:a,isComplexSelector:o}}(e,n,a)
null==r||null===(t=r.nodes)||void 0===t||t.forEach(function(t){r.isComplexSelector&&!wo(t,e)||u.add(t)})})
var i=[]
return u.forEach(function(e){return i.push(e)}),r&&(i=i.filter(r)),i.sort(function(e,t){return e.nodeIndex-t.nodeIndex})}}function Wf(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function Yf(e,t){return e.filter(function(e){return t.includes(e)})}function Kf(e,t,r){Object.hasOwn(r,e)||(r[e]=[]),r[e].push(t)}function Xf(e,t){1===e.props.nodeType&&(Kf(e.props.nodeName,e,t),Kf("*",e,t),e.attrNames.forEach(function(r){"id"===r&&(t[Uf]=t[Uf]||{},Hf(e.attr(r)).forEach(function(r){Kf(r,e,t[Uf])})),Kf("[".concat(r,"]"),e,t)}))}function Zf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.documentElement,t=arguments.length>1?arguments[1]:void 0
jf=!1
var r={}
eo.set("nodeMap",new WeakMap),eo.set("selectorMap",r)
var n=Qf(e,t,null)
return n[0]._selectorMap=r,n[0]._hasShadowRoot=jf,n}function Jf(e,t,r){var n=new $f(e,t,r)
return Xf(n,eo.get("selectorMap")),n}function Qf(e,t,r){var n,a
function o(e,r,n){var a=Qf(r,t,n)
return a&&(e=e.concat(a)),e}e.documentElement&&(e=e.documentElement)
var i=e.nodeName.toLowerCase()
return Eu(e)?(jf=!0,n=Jf(e,r,t),t="a"+Math.random().toString().substring(2),a=Array.from(e.shadowRoot.childNodes),n.children=a.reduce(function(e,t){return o(e,t,n)},[]),[n]):"content"===i&&"function"==typeof e.getDistributedNodes?(a=Array.from(e.getDistributedNodes())).reduce(function(e,t){return o(e,t,r)},[]):"slot"===i&&"function"==typeof e.assignedNodes?((a=Array.from(e.assignedNodes())).length||(a=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),u.getComputedStyle(e),a.reduce(function(e,t){return o(e,t,r)},[])):1===e.nodeType?(n=Jf(e,r,t),a=Array.from(e.childNodes),n.children=a.reduce(function(e,t){return o(e,t,n)},[]),[n]):3===e.nodeType?[Jf(e,r)]:void 0}var eD=function(e){return e?e.trim().split("-")[0].toLowerCase():""},tD=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map(function(e){if(t[e].length){var r=c._audit.data.failureSummaries[e]
return r&&"function"==typeof r.failureMessage?r.failureMessage(t[e].map(function(e){return e.message||""})):void 0}}).filter(function(e){return void 0!==e}).join("\n\n")}
function rD(){var e=c._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var nD=ra.resultGroups
function aD(e,t){var r=c.utils.aggregateResult(e)
return nD.forEach(function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(r[e]||[]).forEach(function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])}),r[e]=(r[e]||[]).map(function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map(function(e){if("object"===l(e.node)){var r=oD(e.node,t)
Object.assign(e,r)}return delete e.result,delete e.node,function(e,t){["any","all","none"].forEach(function(r){Array.isArray(e[r])&&e[r].filter(function(e){return Array.isArray(e.relatedNodes)}).forEach(function(e){e.relatedNodes=e.relatedNodes.map(function(e){return oD(e,t)})})})}(e,t),e})),nD.forEach(function(t){return delete e[t]}),delete e.pageLevel,delete e.result,e})}),r}function oD(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
e=fu.dqElmToSpec(e,t)
var r,n,a,o,u,i={}
return c._audit.noHtml?i.html=null:i.html=null!==(r=e.source)&&void 0!==r?r:"Undefined",t.elementRef&&!e.fromFrame&&(i.element=null!==(n=e.element)&&void 0!==n?n:null),(!1!==t.selectors||e.fromFrame)&&(i.target=null!==(a=e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(i.ancestry=null!==(o=e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(i.xpath=null!==(u=e.xpath)&&void 0!==u?u:["/"]),i}var uD=/\$\{\s?data\s?\}/g
function iD(e,t){if("string"==typeof t)return e.replace(uD,t)
for(var r in t)if(t.hasOwnProperty(r)){var n=new RegExp("\\${\\s?data\\."+r+"\\s?}","g"),a=void 0===t[r]?"":String(t[r])
e=e.replace(n,a)}return e}var sD=function e(t,r){if(t){if(Array.isArray(r))return r.values=r.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?iD(1===r.length?t.singular:t.plural,r):iD(t,r)
if("string"==typeof t)return iD(t,r)
if("string"==typeof r)return iD(t[r],r)
var n=t.default||rD()
return r&&r.messageKey&&t[r.messageKey]&&(n=t[r.messageKey]),e(n,r)}},lD=function(e,t,r){var n=c._audit.data.checks[e]
if(!n)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!n.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return sD(n.messages[t],r)},cD=function(e,t,r){var n=((r.rules&&r.rules[t]||{}).checks||{})[e.id],a=(r.checks||{})[e.id],o=e.enabled,u=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(u=a.options)),n&&(n.hasOwnProperty("enabled")&&(o=n.enabled),n.hasOwnProperty("options")&&(u=n.options)),{enabled:o,options:u,absolutePaths:r.absolutePaths}}
function dD(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u
return t&&"object"===l(t)?t:"object"!==l(r)?{}:{testEngine:{name:"axe-core",version:c.version},testRunner:{name:c._audit.brand},testEnvironment:pD(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function pD(e){if(!e.navigator||"object"!==l(e.navigator))return{}
var t,r=e.navigator,n=e.innerHeight,a=e.innerWidth,o=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=o.angle,i=o.type
return{userAgent:r.userAgent,windowWidth:a,windowHeight:n,orientationAngle:u,orientationType:i}}function fD(e,t){var r=t.focusable,n=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:r&&DD(e),size:mD(e),page:n}}function DD(e){var t=ZD(e.getAttribute("tabindex"))
return null===t||t>=0}function mD(e){var t=parseInt(e.getAttribute("width"),10),r=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(r)){var n=e.getBoundingClientRect()
t=isNaN(t)?n.width:t,r=isNaN(r)?n.height:r}return{width:t,height:r}}function hD(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[]
OD(e)||(e=[e])
for(var r=0;r<e.length;r++){var n=gD(e[r])
n&&t.push(n)}return t}function gD(e){return e instanceof u.Node?e:"string"==typeof e?[e]:(LD(e)?(function(e){yD(Array.isArray(e.fromFrames),"fromFrames property must be an array"),yD(e.fromFrames.every(function(e){return!MD(e,"fromFrames")}),"Invalid context; fromFrames selector must be appended, rather than nested"),yD(!MD(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):qD(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,r=[],n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value
if(qD(a)&&(vD(a),a=a.fromShadowDom),"string"!=typeof a&&!bD(a))return
r.push(a)}}catch(e){n.e(e)}finally{n.f()}return r}}(e))}function vD(e){yD(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),yD(e.fromShadowDom.every(function(e){return!MD(e,"fromFrames")}),"shadow selector must be inside fromFrame instead"),yD(e.fromShadowDom.every(function(e){return!MD(e,"fromShadowDom")}),"fromShadowDom selector must be appended, rather than nested")}function bD(e){return Array.isArray(e)&&e.every(function(e){return"string"==typeof e})}function yD(e,t){ba(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function FD(e,t){for(var r=[],n=0,a=e[t].length;n<a;n++){var o=e[t][n]
if(o instanceof u.Node)o.documentElement instanceof u.Node?r.push(e.flatTree[0]):r.push(to(o))
else if(o&&o.length)if(o.length>1)wD(e,t,o)
else{var i=Em(o[0])
r.push.apply(r,$(i.map(function(e){return to(e)})))}}return r.filter(function(e){return e})}function wD(e,t,r){e.frames=e.frames||[],Em(r.shift()).forEach(function(n){var a=e.frames.find(function(e){return e.node===n})
a||(a=fD(n,e),e.frames.push(a)),a[t].push(r)})}function ED(e,t){var r,n,a,o,i,c=this
e=uo(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(n=e)||void 0===n?void 0:n.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(a=e)||void 0===a?void 0:a.focusable)||e.focusable,this.size="object"===l(null===(o=e)||void 0===o?void 0:o.size)?e.size:{},e=function(e){if(ID(e)){var t=" must be used inside include or exclude. It should not be on the same object."
yD(!MD(e,"fromFrames"),"fromFrames"+t),yD(!MD(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!jD(e))return{include:[s],exclude:[]}
e={include:e,exclude:[]}}var r=hD(e.include)
return 0===r.length&&r.push(s),{include:r,exclude:hD(e.exclude)}}(e),this.flatTree=null!=t?t:Zf(function(e){for(var t=e.include,r=e.exclude,n=Array.from(t).concat(Array.from(r)),a=0;a<n.length;a++){var o=n[a]
if(o instanceof u.Element)return o.ownerDocument.documentElement
if(o instanceof u.Document)return o.documentElement}return s.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=FD(this,"include"),this.exclude=FD(this,"exclude"),vm("frame, iframe",this).forEach(function(e){$D(e,c)&&function(e,t){Js(t)&&!mu(e.frames,"node",t)&&e.frames.push(fD(t,e))}(c,e.actualNode)}),void 0===this.page&&(this.page=1===(i=this.include).length&&i[0].actualNode===s.documentElement,this.frames.forEach(function(e){e.page=c.page})),function(e){if(0===e.include.length&&0===e.frames.length){var t=uu.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(GD)}function CD(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new ED(e).frames.map(function(e){var t=e.node,r=V(e,x)
return r.initiator=!1,{frameSelector:Ka(t),frameContext:r}})}function xD(e){var t=c._audit.rules.find(function(t){return t.id===e})
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}function AD(e,t){var r=e.getPropertyValue(t)
return["scroll","auto"].includes(r)}var kD=Ba(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,n=e.scrollHeight>e.clientHeight+t
if(r||n){var a=u.getComputedStyle(e),o=AD(a,"overflow-x"),i=AD(a,"overflow-y")
return r&&o||n&&i?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}})
function ND(e){return Array.from(e.children||e.childNodes||[]).reduce(function(e,t){var r=kD(t)
return r&&e.push(r),e.concat(ND(t))},[])}var BD=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(ND(s.body))}
function TD(){return uo(cs)}var RD,SD=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var r=t.data,n=t.isCrossOrigin,a=void 0!==n&&n,o=t.shadowId,u=t.root,i=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(r.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(r))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:u,priority:i}}},_D=function(e){if(RD&&RD.parentNode)return void 0===RD.styleSheet?RD.appendChild(s.createTextNode(e)):RD.styleSheet.cssText+=e,RD
if(e){var t=s.head||s.getElementsByTagName("head")[0]
return(RD=s.createElement("style")).type="text/css",void 0===RD.styleSheet?RD.appendChild(s.createTextNode(e)):RD.styleSheet.cssText=e,t.appendChild(RD),RD}}
function OD(e){return!!e&&"object"===l(e)&&"number"==typeof e.length&&e instanceof u.Node==0}function MD(e,t){return!(!e||"object"!==l(e))&&Object.prototype.hasOwnProperty.call(e,t)}function PD(e){return ID(e)||jD(e)}function ID(e){return["include","exclude"].some(function(t){return MD(e,t)&&jD(e[t])})}function jD(e){return"string"==typeof e||e instanceof u.Node||LD(e)||qD(e)||OD(e)}function LD(e){return MD(e,"fromFrames")}function qD(e){return MD(e,"fromShadowDom")}var zD=function e(t,r){var n=to(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),n&&null!==n._isHidden)return n._isHidden
var a=u.getComputedStyle(t,null)
if(!a||!t.parentNode||"none"===a.getPropertyValue("display")||!r&&"hidden"===a.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var o=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return n&&(n._isHidden=o),o},VD=function(e){var t,r,n=null!==(t=null===(r=e.props)||void 0===r?void 0:r.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!cs.htmlElms[n]}
function $D(e,t){var r=t.include,n=void 0===r?[]:r,a=t.exclude,o=void 0===a?[]:a,u=n.filter(function(t){return bu(t,e)})
if(0===u.length)return!1
var i=o.filter(function(t){return bu(t,e)})
if(0===i.length)return!0
var s=HD(u)
return bu(HD(i),s)}function HD(e){var t,r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t&&bu(a,t)||(t=a)}}catch(e){n.e(e)}finally{n.f()}return t}function UD(e,t){return e.length===t.length&&e.every(function(e,r){var n=t[r]
return Array.isArray(e)?e.length===n.length&&e.every(function(e,t){return n[t]===e}):e===n})}var GD=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function WD(e){return e instanceof oa?{vNode:e,domNode:e.actualNode}:{vNode:to(e),domNode:e}}var YD=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var u=o.filter(function(e){return 3===e.type})
if(!u.length)return Promise.resolve({isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var i=u.filter(function(e){return e.href}).map(function(e){return e.href}).filter(function(e){return!n.includes(e)}).map(function(e,a){var o=[].concat($(r),[a]),u=/^https?:\/\/|^\/\//i.test(e)
return XD(e,t,o,n,u)}),s=o.filter(function(e){return 3!==e.type})
return s.length?(i.push(Promise.resolve(t.convertDataToStylesheet({data:s.map(function(e){return e.cssText}).join(),isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(i)):Promise.all(i)},KD=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?YD(e,t,r,n,a):XD(e.href,t,r,n,!0)},XD=function(e,t,r,n,a){return n.push(e),new Promise(function(t,r){var n=new u.XMLHttpRequest
n.open("GET",e),n.timeout=ra.preload.timeout,n.addEventListener("error",r),n.addEventListener("timeout",r),n.addEventListener("loadend",function(e){if(e.loaded&&n.responseText)return t(n.responseText)
r(n.responseText)}),n.send()}).then(function(e){var o=t.convertDataToStylesheet({data:e,isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId})
return KD(o.sheet,t,r,n,o.isCrossOrigin)})},ZD=function(e){if("string"!=typeof e)return null
var t=e.trim().match(/^([-+]?\d+)/)
return t?Number(t[1]):null},JD=function(){function e(){if(u.performance&&u.performance)return u.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){u.performance&&void 0!==u.performance.mark&&u.performance.mark(e)},measure:function(e,t,r){u.performance&&void 0!==u.performance.measure&&u.performance.measure(e,t,r)},logMeasures:function(e){function t(e){na("Measure "+e.name+" took "+e.duration+"ms")}if(u.performance&&void 0!==u.performance.getEntriesByType)for(var r=u.performance.getEntriesByName("mark_axe_start")[0],n=u.performance.getEntriesByType("measure").filter(function(e){return e.startTime>=r.startTime}),a=0;a<n.length;++a){var o=n[a]
if(o.name===e)return void t(o)
t(o)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}()
function QD(){if(s.elementsFromPoint)return s.elementsFromPoint
if(s.msElementsFromPoint)return s.msElementsFromPoint
var e,t=((e=s.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),r=t?"pointer-events":"visibility",n=t?"none":"hidden",a=s.createElement("style")
return a.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var o,u,i,l=[],c=[]
for(s.head.appendChild(a);(o=s.elementFromPoint(e,t))&&-1===l.indexOf(o);)l.push(o),c.push({value:o.style.getPropertyValue(r),priority:o.style.getPropertyPriority(r)}),o.style.setProperty(r,n,"important")
for(l.indexOf(s.documentElement)<l.length-1&&(l.splice(l.indexOf(s.documentElement),1),l.push(s.documentElement)),u=c.length;i=c[--u];)l[u].style.setProperty(r,i.value?i.value:"",i.priority)
return s.head.removeChild(a),l}}"function"==typeof u.addEventListener&&(s.elementsFromPoint=QD())
var em=function(e,t){return e.concat(t).filter(function(e,t,r){return r.indexOf(e)===t})}
function tm(e,t,r,n,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=r,o.parentShadowId=n,o}var rm=function(e,t,r){e=Array.isArray(e)?e:[e]
var n=yo(t)
return Gf(e,n,r)||function(e,t,r){for(var n=eo.get("qsa.recycledLocalVariables",function(){return[]}),a=[],o=tm(Array.isArray(e)?e:[e],t,null,e[0].shadowId,n.pop()),u=[];o.vNodesIndex<o.vNodes.length;){for(var i,s,l=o.vNodes[o.vNodesIndex++],c=null,d=null,p=((null===(i=o.anyLevel)||void 0===i?void 0:i.length)||0)+((null===(s=o.thisLevel)||void 0===s?void 0:s.length)||0),f=!1,D=0;D<p;D++){var m,h,g,v=D<((null===(m=o.anyLevel)||void 0===m?void 0:m.length)||0)?o.anyLevel[D]:o.thisLevel[D-((null===(h=o.anyLevel)||void 0===h?void 0:h.length)||0)]
if((!v[0].id||l.shadowId===o.parentShadowId)&&wo(l,v[0]))if(1===v.length)f||r&&!r(l)||(u.push(l),f=!0)
else{var b=v.slice(1)
if(!1===[" ",">"].includes(b[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===b[0].combinator?(c=c||[]).push(b):(d=d||[]).push(b)}v[0].id&&l.shadowId!==o.parentShadowId||null===(g=o.anyLevel)||void 0===g||!g.includes(v)||(d=d||[]).push(v)}for(l.children&&l.children.length&&(a.push(o),o=tm(l.children,d,c,l.shadowId,n.pop()));o.vNodesIndex===o.vNodes.length&&a.length;)n.push(o),o=a.pop()}return u}(e,n,r)},nm=function(e){var t=e.treeRoot,r=function(e){var t=[],r=rm(e,"*",function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)}).map(function(e){return{shadowId:e.shadowId,rootNode:xu(e.actualNode)}})
return em(r,[])}(void 0===t?c._tree[0]:t)
if(!r.length)return Promise.resolve()
var n=s.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var r=[]
return e.forEach(function(e,n){var a=e.rootNode,o=e.shadowId,u=function(e,t,r){var n
return n=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(om).reduce(function(r,n){var a=n.nodeName.toUpperCase(),o="STYLE"===a?n.textContent:n,u=t({data:o,isLink:"LINK"===a,root:e})
return u.sheet&&r.push(u.sheet),r},[])}(e,r):function(e){return Array.from(e.styleSheets).filter(function(e){return!!e.media&&um(e.media.mediaText)})}(e),function(e){var t=[]
return e.filter(function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)})}(n)}(a,o,t)
if(!u)return Promise.all(r)
var i=n+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:i},l=[],c=Promise.all(u.map(function(e,t){return KD(e,s,[i,t],l)}))
r.push(c)}),Promise.all(r)}(r,SD(n)).then(function(e){return am(e)})}
function am(e){return e.reduce(function(e,t){return Array.isArray(t)?e.concat(am(t)):e.concat(t)},[])}function om(e){var t=e.nodeName.toUpperCase(),r=e.getAttribute("href"),n=e.getAttribute("rel"),a="LINK"===t&&r&&n&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&um(e.media)}function um(e){return!e||!e.toUpperCase().includes("PRINT")}var im=function(e){var t=e.treeRoot,r=void 0===t?c._tree[0]:t,n=rm(r,"video[autoplay], audio[autoplay]",function(e){var t=e.actualNode
return!("none"===t.preload&&0===t.readyState&&t.networkState!==t.NETWORK_LOADING||t.hasAttribute("paused")||t.hasAttribute("muted")||(t.hasAttribute("src")?!t.getAttribute("src"):Array.from(t.getElementsByTagName("source")).filter(function(e){return!!e.getAttribute("src")}).length<=0))})
return Promise.all(n.map(function(e){var t,r=e.actualNode
return t=r,new Promise(function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",function r(){t.removeEventListener("loadedmetadata",r),e(t)})})}))}
function sm(e){var t={cssom:nm,media:im}
return lm(e)?new Promise(function(r,n){var a=cm(e),o=a.assets,u=a.timeout,i=setTimeout(function(){return n(new Error("Preload assets timed out."))},u)
Promise.all(o.map(function(r){return t[r](e).then(function(e){return t={},a=e,(n=J(n=r))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t
var t,n,a})})).then(function(e){var t=e.reduce(function(e,t){return U({},e,t)},{})
clearTimeout(i),r(t)}).catch(function(e){clearTimeout(i),n(e)})}):Promise.resolve()}function lm(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===l(t)&&Array.isArray(t.assets)))
var t}function cm(e){var t=ra.preload,r=t.assets,n=t.timeout,a={assets:r,timeout:n}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every(function(e){return r.includes(e.toLowerCase())}))throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "),"."))
return a.assets=em(e.preload.assets.map(function(e){return e.toLowerCase()}),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}function dm(e){var t=c._audit.data.checks||{},r=c._audit.data.rules||{},n=mu(c._audit.rules,"id",e.id)||{}
e.tags=uo(n.tags||[])
var a=pm(t,!0,n),o=pm(t,!1,n)
e.nodes.forEach(function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)}),Fu(e,uo(r[e.id]||{}))}function pm(e,t,r){return function(n){var a=e[n.id]||{},o=a.messages||{},u=Object.assign({},a)
delete u.messages,r.reviewOnFail||void 0!==n.result?u.message=n.result===t?o.pass:o.fail:("object"!==l(o.incomplete)||Array.isArray(n.data)||(u.message=function(e,t){function r(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:rD()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:r(t)
try{var n=t.incomplete[e.missingData[0].reason]
if(!n)throw new Error
return n}catch(n){return"string"==typeof e.missingData?t.incomplete[e.missingData]:r(t)}}(n.data,o)),u.message||(u.message=o.incomplete)),"function"!=typeof u.message&&(u.message=sD(u.message,n.data)),Fu(n,u)}}var fm=function(e,t){return rm(e,t)}
function Dm(e,t){var r,n,a=c._audit&&c._audit.tagExclude?c._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(r=t.include||[],r=Array.isArray(r)?r:[r],n=t.exclude||[],n=(n=Array.isArray(n)?n:[n]).concat(a.filter(function(e){return-1===r.indexOf(e)}))):(r=Array.isArray(t)?t:[t],n=a.filter(function(e){return-1===r.indexOf(e)})),!!(r.some(function(t){return-1!==e.tags.indexOf(t)})||0===r.length&&!1!==e.enabled)&&n.every(function(t){return-1===e.tags.indexOf(t)})}var mm=function(e,t,r){var n=r.runOnly||{},a=(r.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===n.type?-1!==n.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===n.type&&n.values?Dm(e,n.values):Dm(e,[]))}
function hm(e,t){if(!t)return e
var r=e.cloneNode(!1),n=Aa(r)
if(1===r.nodeType){var a=r.outerHTML
r=eo.get(a,function(){return gm(r,n,e,t)})}else r=gm(r,n,e,t)
return Array.from(e.childNodes).forEach(function(e){r.appendChild(hm(e,t))}),r}function gm(e,t,r,n){return t?(e=s.createElement(e.nodeName),Array.from(t).forEach(function(t){(function(e,t,r){return void 0!==r[t]&&(!0===r[t]||ka(e,r[t]))})(r,t.name,n)||e.setAttribute(t.name,t.value)}),e):e}function vm(e,t){var r,n=[]
if(c._selectCache)for(var a=0,o=c._selectCache.length;a<o;a++){var u=c._selectCache[a]
if(u.selector===e)return u.result}for(var i=t.include.reduce(function(e,t){return e.length&&bu(e[e.length-1],t)||e.push(t),e},[]),s=function(e){return e.exclude&&0!==e.exclude.length?function(t){return $D(t,e)}:null}(t),l=0;l<i.length;l++)r=i[l],n=bm(n,rm(r,e,s))
return c._selectCache&&c._selectCache.push({selector:e,result:n}),n}function bm(e,t){if(0===e.length)return t
if(e.length<t.length){var r=e
e=t,t=r}for(var n=0,a=t.length;n<a;n++)e.includes(t[n])||e.push(t[n])
return e}var ym=function(e){e.forEach(function(e){return function(e,t,r){if(e===u)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)})}
function Fm(e){return wm(Array.isArray(e)?$(e):[e],s)}function wm(e,t){var r=e.shift(),n=r?t.querySelector(r):null
return 0===e.length?n:null!=n&&n.shadowRoot?wm(e,n.shadowRoot):null}function Em(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=Array.isArray(e)?$(e):[e]
return 0===e.length?[]:Cm(r,t)}function Cm(e,t){var r,n=Y(r=e)||H(r)||ee(r)||W(),a=n[0],o=n.slice(1),u=t.querySelectorAll(a)
if(0===o.length)return Array.from(u)
var i,s=[],l=Q(u)
try{for(l.s();!(i=l.n()).done;){var c=i.value
null!=c&&c.shadowRoot&&s.push.apply(s,$(Cm(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var xm=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Am=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function km(e){e=Array.isArray(e)?e:Am
var t=[]
return e.forEach(function(e,r){var n=String.fromCharCode(r+96).replace("`","")
Array.isArray(e)?t=t.concat(km(e).map(function(e){return n+e})):t.push(n)}),t}var Nm=function(e){for(var t=Am;e.length<3;)e+="`"
for(var r=0;r<=e.length-1;r++)if(!(t=t[e.charCodeAt(r)-96]))return!1
return!0},Bm=function(e){function t(e){var r,n,a,o
return K(this,t),(r=R(this,t))._props=function(e){var t,r,n,a=null!==(t=e.nodeName)&&void 0!==t?t:Rm[e.nodeType],o=null!==(r=null!==(n=e.nodeType)&&void 0!==n?n:Tm[e.nodeName])&&void 0!==r?r:1
ba("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),ba("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var u=null
"input"===(a=a.toLowerCase())&&(u=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),xm().includes(u)||(u="text"))
var i=U({},e,{nodeType:o,nodeName:a})
return u&&(i.type=u),delete i.attributes,Object.freeze(i)}(e),r._attrs=(n=e.attributes,a=void 0===n?{}:n,o={htmlFor:"for",className:"class"},Object.keys(a).reduce(function(e,t){var r=a[t]
return ba("object"!==l(r)||null===r,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==r&&(e[o[t]||t]=null!==r?String(r):null),e},{})),r}return O(t,e),Z(t,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}])}(oa),Tm={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Rm={}
Object.keys(Tm).forEach(function(e){Rm[Tm[e]]=e})
var Sm,_m=Bm,Om=function(e,t){if(e=e||function(){},t=t||c.log,!c._audit)throw new Error("No audit configured")
var r=c.utils.queue(),n=[]
Object.keys(c.plugins).forEach(function(e){r.defer(function(t){var r=function(e){n.push(e),t()}
try{c.plugins[e].cleanup(t,r)}catch(e){r(e)}})})
var a=c.utils.getFlattenedTree(s.body)
c.utils.querySelectorAll(a,"iframe, frame").forEach(function(e){r.defer(function(t,r){return c.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,r)})}),r.then(function(r){0===n.length?e(r):t(n)}).catch(t)},Mm={}
function Pm(e){return Mm.hasOwnProperty(e)}function Im(e){return"string"==typeof e&&Mm[e]?Mm[e]:"function"==typeof e?e:Sm}var jm={}
fe(jm,{getAllCells:function(){return Lm},getCellPosition:function(){return gs},getHeaders:function(){return zm},getScope:function(){return vs},isColumnHeader:function(){return bs},isDataCell:function(){return Vm},isDataTable:function(){return $m},isHeader:function(){return Hm},isRowHeader:function(){return ys},toArray:function(){return hs},toGrid:function(){return hs},traverse:function(){return Gm}})
var Lm=function(e){var t,r,n,a,o=[]
for(t=0,n=e.rows.length;t<n;t++)for(r=0,a=e.rows[t].cells.length;r<a;r++)o.push(e.rows[t].cells[r])
return o}
function qm(e,t,r){for(var n,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?ys:bs,u=r[t.y][t.x],i=u.colSpan-1,s=u.getAttribute("rowspan"),l=(0===parseInt(s)||0===u.rowspan?r.length:u.rowSpan)-1,d=t.y+l,p=t.x+i,f="row"===e?t.y:0,D="row"===e?0:t.x,m=[],h=d;h>=f&&!n;h--)for(var g=p;g>=D;g--){var v=r[h]?r[h][g]:void 0
if(v){var b=c.utils.getNodeFromTree(v)
if(b[a]){n=b[a]
break}m.push(v)}}return n=(n||[]).concat(m.filter(o)),m.forEach(function(e){c.utils.getNodeFromTree(e)[a]=n}),n}var zm=function(e,t){if(e.getAttribute("headers")){var r=rs(e,"headers")
if(r.filter(function(e){return e}).length)return r}t||(t=hs(Bu(e,"table")))
var n=gs(e,t),a=qm("row",n,t),o=qm("col",n,t)
return[].concat(a,o).reverse()},Vm=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return ps(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},$m=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!Zi(e))return!1
if("true"===e.getAttribute("contenteditable")||Bu(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===Zl(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var r=0,n=e.children.length;r<n;r++)if("COLGROUP"===e.children[r].nodeName.toUpperCase())return!0
for(var a,o,i=0,s=e.rows.length,l=!1,c=0;c<s;c++)for(var d=0,p=(a=e.rows[c]).cells.length;d<p;d++){if("TH"===(o=a.cells[d]).nodeName.toUpperCase())return!0
if(l||o.offsetWidth===o.clientWidth&&o.offsetHeight===o.clientHeight||(l=!0),o.getAttribute("scope")||o.getAttribute("headers")||o.getAttribute("abbr"))return!0
if(["columnheader","rowheader"].includes((o.getAttribute("role")||"").toLowerCase()))return!0
if(1===o.children.length&&"ABBR"===o.children[0].nodeName.toUpperCase())return!0
i++}if(e.getElementsByTagName("table").length)return!1
if(s<2)return!1
var f,D,m=e.rows[Math.ceil(s/2)]
if(1===m.cells.length&&1===m.cells[0].colSpan)return!1
if(m.cells.length>=5)return!0
if(l)return!0
for(var h=0;h<s;h++){if(a=e.rows[h],f&&f!==u.getComputedStyle(a).getPropertyValue("background-color"))return!0
if(f=u.getComputedStyle(a).getPropertyValue("background-color"),D&&D!==u.getComputedStyle(a).getPropertyValue("background-image"))return!0
D=u.getComputedStyle(a).getPropertyValue("background-image")}return s>=20||!(Ju(e).width>.95*Qu(u).width)&&!(i<10)&&!e.querySelector("object, embed, iframe, applet")},Hm=function(e){if(bs(e)||ys(e))return!0
if(e.getAttribute("id")){var t=Fa(e.getAttribute("id"))
return!!s.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function Um(e,t,r,n){var a,o=r[t.y]?r[t.y][t.x]:void 0
return o?"function"==typeof n&&!0===(a=n(o,t,r))?[o]:((a=Um(e,{x:t.x+e.x,y:t.y+e.y},r,n)).unshift(o),a):[]}var Gm=function(e,t,r,n){if(Array.isArray(t)&&(n=r,r=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return Um(e,{x:t.x+e.x,y:t.y+e.y},r,n)},Wm={}
fe(Wm,{allowedAttr:function(){return Ym},arialabelText:function(){return os},arialabelledbyText:function(){return as},getAccessibleRefs:function(){return Zm},getElementUnallowedRoles:function(){return th},getExplicitRole:function(){return fs},getImplicitRole:function(){return zs},getOwnedVirtual:function(){return Xs},getRole:function(){return Gs},getRoleType:function(){return Zl},getRolesByType:function(){return nh},getRolesWithNameFromContents:function(){return oh},implicitNodes:function(){return ch},implicitRole:function(){return zs},isAccessibleRef:function(){return dh},isAriaRoleAllowedOnElement:function(){return Jm},isComboboxPopup:function(){return ph},isUnsupportedRole:function(){return ds},isValidRole:function(){return ps},label:function(){return Dh},labelVirtual:function(){return Tl},lookupTable:function(){return lh},namedFromContents:function(){return Ks},requiredAttr:function(){return mh},requiredContext:function(){return hh},requiredOwned:function(){return gh},validateAttr:function(){return bh},validateAttrValue:function(){return vh}})
var Ym=function(e){var t=cs.ariaRoles[e],r=$(ms())
return t?(t.allowedAttrs&&r.push.apply(r,$(t.allowedAttrs)),t.requiredAttrs&&r.push.apply(r,$(t.requiredAttrs)),r):r},Km=/^idrefs?$/
function Xm(e,t,r){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var n=e.getAttribute("for")
t.has(n)?t.get(n).push(e):t.set(n,[e])}for(var a=0;a<r.length;++a){var o=r[a],u=Fs(e.getAttribute(o)||"")
if(u){var i,s=Q(Hf(u))
try{for(s.s();!(i=s.n()).done;){var l=i.value
t.has(l)?t.get(l).push(e):t.set(l,[e])}}catch(e){s.e(e)}finally{s.f()}}}}for(var c=0;c<e.childNodes.length;c++)1===e.childNodes[c].nodeType&&Xm(e.childNodes[c],t,r)}var Zm=function(e){var t
e=e.actualNode||e
var r=Au(e)
r=r.documentElement||r
var n=eo.get("idRefsByRoot",function(){return new Map}),a=n.get(r)
return a||(a=new Map,n.set(r,a),Xm(r,a,Object.keys(cs.ariaAttrs).filter(function(e){var t=cs.ariaAttrs[e].type
return Km.test(t)}))),null!==(t=a.get(e.id))&&void 0!==t?t:[]},Jm=function(e,t){var r=e instanceof oa?e:to(e),n=zs(r),a=qs(r)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==n&&!!a.allowedRoles},Qm=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],eh={header:"banner",footer:"contentinfo"},th=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=WD(e).vNode
if(!VD(r))return[]
var n=r.props.nodeName,a=zs(r)||eh[n]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var r=Hf(e.attr("role").toLowerCase())
t=t.concat(r)}return t.filter(function(e){return ps(e)})}(r).filter(function(e){return!function(e,t,r,n){return!(!r||e!==n)||(!Qm.includes(e)||Zl(e)===n)&&Jm(t,e)}(e,r,t,a)})},rh=function(e){return Object.keys(cs.ariaRoles).filter(function(t){return cs.ariaRoles[t].type===e})},nh=function(e){return rh(e)},ah=function(){return eo.get("ariaRolesNameFromContent",function(){return Object.keys(cs.ariaRoles).filter(function(e){return cs.ariaRoles[e].nameFromContent})})},oh=function(){return ah()},uh=function(e){return null===e},ih=function(e){return null!==e},sh={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
sh.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:ih}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:ih}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:ih}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:ih}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:ih}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:ih}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:ih}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:ih}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:ih}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:ih}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:ih}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:ih}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:ih}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:ih}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},sh.implicitHtmlRole=xs,sh.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:ih}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:ih}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof c.AbstractVirtualNode||(e=c.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],sh.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:uh}},{nodeName:"img",attributes:{alt:uh}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],sh.evaluateRoleForElement={A:function(e){var t=e.node,r=e.out
return"http://www.w3.org/2000/svg"===t.namespaceURI||!t.href.length||r},AREA:function(e){return!e.node.href},BUTTON:function(e){var t=e.node,r=e.role,n=e.out
return"menu"===t.getAttribute("type")?"menuitem"===r:n},IMG:function(e){var t=e.node,r=e.role,n=e.out
switch(t.alt){case null:return n
case"":return"presentation"===r||"none"===r
default:return"presentation"!==r&&"none"!==r}},INPUT:function(e){var t=e.node,r=e.role,n=e.out
switch(t.type){case"button":case"image":return n
case"checkbox":return!("button"!==r||!t.hasAttribute("aria-pressed"))||n
case"radio":return"menuitemradio"===r
case"text":return"combobox"===r||"searchbox"===r||"spinbutton"===r
case"tel":return"combobox"===r||"spinbutton"===r
case"url":case"search":case"email":return"combobox"===r
default:return!1}},LI:function(e){var t=e.node,r=e.out
return!c.utils.matchesSelector(t,"ol li, ul li")||r},MENU:function(e){return"context"!==e.node.getAttribute("type")},OPTION:function(e){var t=e.node
return!c.utils.matchesSelector(t,"select > option, datalist > option, optgroup > option")},SELECT:function(e){var t=e.node,r=e.role
return!t.multiple&&t.size<=1&&"menu"===r},SVG:function(e){var t=e.node,r=e.out
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||r}},sh.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var lh=sh,ch=function(e){var t=null,r=lh.role[e]
return r&&r.implicit&&(t=uo(r.implicit)),t},dh=function(e){return!!Zm(e).length}
function ph(e){var t,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,n=Gs(e)
if(null!==(t=r)&&void 0!==t||(r=us["aria-haspopup"].values),!r.includes(n))return!1
var a=function(e){for(;e=e.parent;)if(null!==Gs(e,{noPresentational:!0}))return e
return null}(e)
if(fh(a))return!0
var o=e.props.id
if(!o)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var u=xu(e.actualNode).querySelectorAll('[aria-owns~="'.concat(o,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(o,'"][role~="combobox"]:not(select)'))
return Array.from(u).some(fh)}var fh=function(e){return e&&"combobox"===Gs(e)},Dh=function(e){return e=to(e),Tl(e)},mh=function(e){var t=cs.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?$(t.requiredAttrs):[]},hh=function(e){var t=cs.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?$(t.requiredContext):null},gh=function(e){var t=cs.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?$(t.requiredOwned):null},vh=function(e,t){var r,n,a=(e=e instanceof oa?e:to(e)).attr(t),o=cs.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(n=Hf(a)).reduce(function(e,t){return e&&o.values.includes(t)},0!==n.length)
case"idref":try{var u=Au(e.actualNode)
return!(!a||!u.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return rs(e,t).some(function(e){return!!e})
case"string":return""!==a.trim()
case"decimal":return!(!(r=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!r[1]&&!r[2])
case"int":var i=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=i}},bh=function(e){return!!cs.ariaAttrs[e]}
function yh(e){return"caption"===e.props.nodeName}var Fh={}
fe(Fh,{getAriaRolesByType:function(){return rh},getAriaRolesSupportingNameFromContent:function(){return ah},getElementSpec:function(){return qs},getElementsByContentType:function(){return Ds},getGlobalAriaAttrs:function(){return ms},implicitHtmlRoles:function(){return xs}})
var wh=["alert","log","status"]
function Eh(e,t){var r=e.actualNode
if("button"===Gs(e)||function(e,t){var r=e.actualNode,n=Gs(e),a=(r.getAttribute("aria-live")||"").toLowerCase().trim(),o=rh("landmark")
return!!(["assertive","polite"].includes(a)||wh.includes(n)||o.includes(n)||t.regionMatcher&&Ls(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Af(e.actualNode)&&$i(e.actualNode,"href")||!Js(r)){for(var n=e;n;)n._hasRegionDescendant=!0,n=n.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return r!==s.body&&Hl(r,!0)&&!function(e){return["none","presentation"].includes(Gs(e))&&!Vl(e)}(e)?[e]:e.children.filter(function(e){return 1===e.actualNode.nodeType}).map(function(e){return Eh(e,t)}).reduce(function(e,t){return e.concat(t)},[])}function Ch(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function xh(e){var t=u.getComputedStyle(function(e){for(var t=e,r=e.textContent.trim(),n=r;n===r&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,n=e.children[a].textContent.trim()}while(""===n&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:Ch(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function Ah(e,t,r){return r.reduce(function(r,n){return r||(!n.size||e.fontSize/n.size>t.fontSize)&&(!n.weight||e.fontWeight-n.weight>t.fontWeight)&&(!n.italic||e.isItalic&&!t.isItalic)},!1)}var kh=/[;,\s]/,Nh=/^[0-9.]+$/,Bh={}
fe(Bh,{aria:function(){return Wm},color:function(){return Th},dom:function(){return Cu},forms:function(){return cg},matches:function(){return Ls},math:function(){return ui},standards:function(){return Fh},table:function(){return jm},text:function(){return ts},utils:function(){return ua}})
var Th={}
fe(Th,{Color:function(){return wf},centerPointOfRect:function(){return Rh},elementHasImage:function(){return sc},elementIsDistinct:function(){return _h},filteredRectStack:function(){return Mh},flattenColors:function(){return jh},flattenShadowColors:function(){return qh},getBackgroundColor:function(){return ng},getBackgroundStack:function(){return zh},getContrast:function(){return ug},getForegroundColor:function(){return ig},getOwnBackgroundColor:function(){return Cf},getRectStack:function(){return Oh},getStackingContext:function(){return Jh},getStrokeColorsFromShadows:function(){return Wh},getTextShadowColors:function(){return Xh},hasValidContrastRatio:function(){return lg},incompleteData:function(){return ic},parseTextShadows:function(){return Kh},stackingContextToColor:function(){return Qh}})
var Rh=function(e){if(!(e.left>u.innerWidth||e.top>u.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),u.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),u.innerHeight-1)}}
function Sh(e){return e.getPropertyValue("font-family").split(/[,;]/g).map(function(e){return e.trim().toLowerCase()})}var _h=function(e,t){var r=u.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce(function(e,t){var n=new wf
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha},!1))return!0
var n=u.getComputedStyle(t)
if(Sh(r)[0]!==Sh(n)[0])return!0
var a=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce(function(e,t){return e||r.getPropertyValue(t)!==n.getPropertyValue(t)},!1),o=r.getPropertyValue("text-decoration")
return o.split(" ").length<3&&(a=a||o!==n.getPropertyValue("text-decoration")),a},Oh=function(e){var t=Yi(e),r=jl(e)
return!r||r.length<=1?[t]:r.some(function(e){return void 0===e})?null:(r.splice(0,0,t),r)},Mh=function(e){var t=Oh(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var r,n=t.shift()
return t.forEach(function(a,o){if(0!==o){var u=t[o-1],i=t[o]
r=u.every(function(e,t){return e===i[t]})||n.includes(e)}}),r?t[0]:(ic.set("bgColor","elmPartiallyObscuring"),null)}return ic.set("bgColor","outsideViewport"),null},Ph=["hue","saturation","color","luminosity"],Ih={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t},hue:function(e,t){return t.setSaturation(e.getSaturation()).setLuminosity(e.getLuminosity())},saturation:function(e,t){return e.setSaturation(t.getSaturation()).setLuminosity(e.getLuminosity())},color:function(e,t){return t.setLuminosity(e.getLuminosity())},luminosity:function(e,t){return e.setLuminosity(t.getLuminosity())}}
function jh(e,t){var r,n=function(e,t,r){if(Ph.includes(r))return Ih[r](e,t)
var n=new wf
return["r","g","b"].forEach(function(a){n[a]=Ih[r](e[a],t[a])}),n}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"),a=Lh(e.red,e.alpha,t.red,t.alpha,255*n.r),o=Lh(e.green,e.alpha,t.green,t.alpha,255*n.g),u=Lh(e.blue,e.alpha,t.blue,t.alpha,255*n.b),i=(r=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,r),1))
if(0===i)return new wf(a,o,u,i)
var s=Math.round(a/i),l=Math.round(o/i),c=Math.round(u/i)
return new wf(s,l,c,i)}function Lh(e,t,r,n,a){return t*(1-n)*e+t*n*a+(1-t)*n*r}function qh(e,t){var r=e.alpha,n=(1-r)*t.red+r*e.red,a=(1-r)*t.green+r*e.green,o=(1-r)*t.blue+r*e.blue,u=e.alpha+t.alpha*(1-e.alpha)
return new wf(n,a,o,u)}function zh(e){for(var t=jl(e).map(function(t){return function(e){var t=e.indexOf(s.body),r=e,n=Cf(u.getComputedStyle(s.documentElement))
if(t>1&&0===n.alpha&&!sc(s.documentElement)){t>1&&(r.splice(t,1),r.push(s.body))
var a=r.indexOf(s.documentElement)
a>0&&(r.splice(a,1),r.push(s.documentElement))}return r}(t=Rf(t,e))}),r=0;r<t.length;r++){var n=t[r]
if(n[0]!==e)return ic.set("bgColor","bgOverlap"),null
if(0!==r&&!Vh(n,t[0]))return ic.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function Vh(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var r=0;r<e.length;++r)if(e[r]!==t[r])return!1
return!0}var $h=.54,Hh=.5,Uh=1.5,Gh=["top","right","bottom","left"]
function Wh(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreEdgeCount,r=void 0!==t&&t,n=function(e){var t,r={},n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a,o=t.value,u=o.colorStr,i=o.pixels
null!==(a=r[u])&&void 0!==a||(r[u]={top:[],right:[],bottom:[],left:[]})
var s=r[u],l=G(i,2),c=l[0],d=l[1]
c>Hh?s.right.push(c):-c>Hh&&s.left.push(-c),d>Hh?s.bottom.push(d):-d>Hh&&s.top.push(-d)}}catch(e){n.e(e)}finally{n.f()}return r}(e),a=Object.entries(n).map(function(e){var t=G(e,2),r=t[0],n=t[1],a=Gh.filter(function(e){return 0!==n[e].length}).length
return{colorStr:r,sides:n,edgeCount:a}})
return!r&&a.some(function(e){var t=e.edgeCount
return t>1&&t<4})?null:a.map(Yh).filter(function(e){return null!==e})}function Yh(e){var t=e.colorStr,r=e.sides
if(4!==e.edgeCount)return null
var n=new wf
n.parseString(t)
var a=0,o=!0
return Gh.forEach(function(e){a+=r[e].length/4,o&&(o=r[e].every(function(e){return e>Uh}))}),o||(n.alpha=1-Math.pow($h,a)),n}function Kh(e){var t={pixels:[]},r=e.trim(),n=[t]
if(!r)return[]
for(;r;){var a=r.match(/^[a-z]+(\([^)]+\))?/i)||r.match(/^#[0-9a-f]+/i),o=r.match(/^([0-9.-]+)px/i)||r.match(/^(0)/)
if(a)ba(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),r=r.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){ba(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),r=r.replace(o[0],"").trim()
var u=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(u)}else{if(","!==r[0])throw new Error("Unable to process text-shadows: ".concat(r))
ba(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},n.push(t),r=r.substr(1).trim()}}return n.forEach(function(e){var t=e.pixels
2===t.length&&t.push(0)}),n}function Xh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,n=t.maxRatio,a=t.ignoreEdgeCount,o=[],i=u.getComputedStyle(e),s=i.getPropertyValue("text-shadow")
if("none"===s)return o
var l=i.getPropertyValue("font-size"),c=parseInt(l)
ba(!1===isNaN(c),"Unable to determine font-size value ".concat(l))
var d,p=[],f=Q(Kh(s))
try{for(f.s();!(d=f.n()).done;){var D=d.value,m=D.colorStr||i.getPropertyValue("color"),h=G(D.pixels,3),g=h[0],v=h[1],b=h[2],y=void 0===b?0:b
if(!(n&&y>=c*n))if(r&&y<c*r)p.push({colorStr:m,pixels:D.pixels})
else{if(p.length>0){var F=Wh(p,{ignoreEdgeCount:a})
if(null===F)return null
o.push.apply(o,$(F)),p.splice(0,p.length)}var w=Zh({colorStr:m,offsetX:g,offsetY:v,blurRadius:y,fontSize:c})
o.push(w)}}}catch(e){f.e(e)}finally{f.f()}if(p.length>0){var E=Wh(p,{ignoreEdgeCount:a})
if(null===E)return null
o.push.apply(o,$(E))}return o}function Zh(e){var t=e.colorStr,r=e.offsetX,n=e.offsetY,a=e.blurRadius,o=e.fontSize
if(r>a||n>a)return new wf(0,0,0,0)
var u=new wf
return u.parseString(t),u.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),u}function Jh(e,t){var r,n=to(e)
if(n._stackingContext)return n._stackingContext
var a=[],o=new Map
return(t=null!==(r=t)&&void 0!==r?r:zh(e)).forEach(function(e){var t,r=to(e),n=function(e){var t=new wf
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(r),u=r._stackingOrder.filter(function(e){return!!e.vNode})
u.forEach(function(e,t){var r,n=e.vNode,i=null===(r=u[t-1])||void 0===r?void 0:r.vNode,s=rg(o,n,i)
0!==t||o.get(n)||a.unshift(s),o.set(n,s)})
var i=null===(t=u[u.length-1])||void 0===t?void 0:t.vNode,s=rg(o,r,i)
u.length||a.unshift(s),s.bgColor=n}),n._stackingContext=a,a}function Qh(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var r=e.bgColor
return r.alpha*=e.opacity,{color:r,blendMode:e.blendMode}}var n=jh(e.descendants.reduce(eg,tg()),e.bgColor,e.descendants[0].blendMode)
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}function eg(e,t){var r
return r=e instanceof wf?e:Qh(e).color,jh(Qh(t).color,r,t.blendMode)}function tg(e,t){var r,n
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(r=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==r?r:1),bgColor:new wf(0,0,0,0),blendMode:(n=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),n||void 0),descendants:[]}}function rg(e,t,r){var n,a=e.get(r),o=null!==(n=e.get(t))&&void 0!==n?n:tg(t,a)
return a&&r!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function ng(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,n=to(e),a=n._cache.getBackgroundColor
if(a)return t.push.apply(t,$(a.bgElms)),ic.set("bgColor",a.incompleteData),a.bgColor
var o=function(e,t,r){var n,a,o=zh(e)
if(!o)return null
var i=Pl(e),l=null!==(n=Xh(e,{minRatio:r,ignoreEdgeCount:!0}))&&void 0!==n?n:[]
l.length&&(l=[{color:l.reduce(qh)}])
for(var c=0;c<o.length;c++){var d=o[c],p=u.getComputedStyle(d)
if(sc(d,p))return t.push(d),null
var f=Cf(p)
if(0!==f.alpha){if("inline"!==p.getPropertyValue("display")&&!ag(d,i))return t.push(d),ic.set("bgColor","elmPartiallyObscured"),null
if(t.push(d),1===f.alpha)break}}l=Jh(e,o).map(Qh).concat(l)
var D=function(e,t){var r=[]
if(!t){var n=s.documentElement,a=s.body,o=u.getComputedStyle(n),i=u.getComputedStyle(a),l=Cf(o),c=Cf(i),d=0!==c.alpha&&ag(a,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:og(i.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:l,blendMode:og(o.getPropertyValue("mix-blend-mode"))})}return r}(e,o.includes(s.body))
if((a=l).unshift.apply(a,$(D)),0===l.length)return new wf(255,255,255,1)
var m=l.reduce(function(e,t){return jh(t.color,e.color instanceof wf?e.color:e,t.blendMode)})
return jh(m.color instanceof wf?m.color:m,new wf(255,255,255,1))}(e,t,r)
return n._cache.getBackgroundColor={bgColor:o,bgElms:t,incompleteData:ic.get("bgColor")},o}function ag(e,t){t=Array.isArray(t)?t:[t]
var r=e.getBoundingClientRect(),n=r.right,a=r.bottom,o=u.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(o)||e instanceof u.HTMLHtmlElement)&&(n=r.left+e.scrollWidth,a=r.top+e.scrollHeight),t.every(function(e){return e.top>=r.top&&e.bottom<=a&&e.left>=r.left&&e.right<=n})}function og(e){return e||void 0}var ug=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=jh(t,e))
var r=e.getRelativeLuminance(),n=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}
function ig(e,t,r){for(var n,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=u.getComputedStyle(e),i=[function(){return function(e,t){var r=t.textStrokeEmMin,n=void 0===r?0:r,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),u=a/parseFloat(o)
if(isNaN(u)||u<n)return null
var i=e.getPropertyValue("-webkit-text-stroke-color")
return(new wf).parseString(i)}(o,a)},function(){return function(e){return(new wf).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(o)},function(){return Xh(e,{minRatio:0})}],s=[],l=0,c=i;l<c.length;l++){var d=(0,c[l])()
if(d&&(s=s.concat(d),1===d.alpha))break}var p=s.reduce(function(e,t){return jh(e,t)})
if(null!==(n=r)&&void 0!==n||(r=ng(e,[])),null===r){var f=ic.get("bgColor")
return ic.set("fgColor",f),null}var D=Jh(e)
return jh(function(e,t,r){for(;t;){var n
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(n=t.ancestor)||void 0===n?void 0:n.descendants)||r
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(Qh)
if(o.length){var u=o.reduce(function(e,t){return jh(t.color,e.color instanceof wf?e.color:e)},{color:new wf(0,0,0,0),blendMode:"normal"})
e=jh(e,u),t=t.ancestor}else t=t.ancestor}}return e}(p,sg(D,e),D),new wf(255,255,255,1))}function sg(e,t){var r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a,o=r.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var u=sg(o.descendants,t)
if(u)return u}}catch(e){n.e(e)}finally{n.f()}}var lg=function(e,t,r,n){var a=ug(e,t),o=n&&Math.ceil(72*r)/96<14||!n&&Math.ceil(72*r)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},cg={}
fe(cg,{isAriaCombobox:function(){return ul},isAriaListbox:function(){return ol},isAriaRange:function(){return sl},isAriaTextbox:function(){return al},isDisabled:function(){return pg},isNativeSelect:function(){return nl},isNativeTextbox:function(){return rl}})
var dg=["fieldset","button","select","input","textarea"],pg=function e(t){var r=t._isDisabled
if("boolean"==typeof r)return r
var n=t.props.nodeName,a=t.attr("aria-disabled")
return r=!(!dg.includes(n)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=r,r}
function fg(e,t){if(!e||!t)return!1
var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t)
return r.length===n.length&&r.every(function(r){var n=e[r],a=t[r]
return l(n)===l(a)&&("object"===l(n)||"object"===l(a)?fg(n,a):n===a)})}function Dg(e){var t=Gs(e),r=t&&t.includes("heading"),n=e.attr("aria-level"),a=parseInt(n,10),o=G(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return r?o&&!n?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function mg(e,t){var r,n=null===(r=t.data)||void 0===r?void 0:r.headingOrder,a=gg(t.node.ancestry,1)
if(!n)return e
var o=n.map(function(e){return function(e,t){return U({},e,{ancestry:t.concat(e.ancestry)})}(e,a)}),u=function(e,t){for(;t.length;){var r=hg(e,t)
if(-1!==r)return r
t=gg(t,1)}return-1}(e,a)
return-1===u?e.push.apply(e,$(o)):e.splice.apply(e,[u,0].concat($(o))),e}function hg(e,t){return e.findIndex(function(e){return UD(e.ancestry,t)})}function gg(e,t){return e.slice(0,e.length-t)}function vg(e,t){var r=e.boundingClientRect,n=t.boundingClientRect
return r.top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right}function bg(e){return e.getComputedStylePropertyValue("pointer-events")}function yg(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function Fg(e,t){return bu(e,t)&&!Ji(t)}function wg(e){return e.map(function(e){return e.actualNode})}function Eg(e){return Math.round(10*e)/10}function Cg(e,t,r){var n=r.validRoles,a=void 0===n?[]:n,o=r.validNodeNames,u=void 0===o?[]:o,i=e.props,s=i.nodeName,l=i.nodeType,c=i.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!Js(e))return!1
var p=fs(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!u.includes(s)&&d+s}function xg(e){return"div"===e.props.nodeName&&null===fs(e)}function Ag(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map(function(e){return{vChild:e,nested:t}})}function kg(e){return""!==(e||"").trim()}function Ng(e){var t=Al(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Fs(t)}function Bg(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach(function(e){"widget"===Zl(e)&&Zi(e)?t.push(e):t.push.apply(t,$(Bg(e)))}),t}function Tg(e){var t=ZD(e.attr("tabindex"))
return null!==t&&t<0}function Rg(e){if(Ji(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some(function(e){return Rg(e)})}var Sg=["block","list-item","table","flex","grid","inline-block"]
function _g(e){var t=u.getComputedStyle(e).getPropertyValue("display")
return-1!==Sg.indexOf(t)||"table-"===t.substr(0,6)}function Og(e,t){var r=e.getRelativeLuminance(),n=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}var Mg=["block","list-item","table","flex","grid","inline-block"]
function Pg(e){var t=u.getComputedStyle(e).getPropertyValue("display")
return-1!==Mg.indexOf(t)||"table-"===t.substr(0,6)}var Ig=Ba(function(e,t){var r=u.getComputedStyle(e,t),n=function(e,t){return r.getPropertyValue(e)===t}
if(n("content","none")||n("display","none")||n("visibility","hidden")||!1===n("position","absolute"))return 0
if(0===Cf(r).alpha&&n("background-image","none"))return 0
var a=jg(r.getPropertyValue("width")),o=jg(r.getPropertyValue("height"))
return"px"!==a.unit||"px"!==o.unit?0===a.value||0===o.value?0:1/0:a.value*o.value})
function jg(e){var t=G(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),r=t[1],n=void 0===r?"":r,a=t[2],o=void 0===a?"":a
return{value:parseFloat(n),unit:o.toLowerCase()}}var Lg={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},qg={alert:!0,alertdialog:!0,application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,dialog:!0,form:!0,log:!0,main:!0,navigation:!0,region:!0,search:!1,status:!0,tabpanel:!0}
function zg(e,t,r,n){var a=fs(e)
if(r||(r=hh(a)),!r)return null
for(var o=r.includes("group"),u=n?e:e.parent;u;){var i=Gs(u,{noPresentational:!0})
if(i){if("group"!==i||!o)return r.includes(i)?null:r
t.includes(a)&&r.push(a),r=r.filter(function(e){return"group"!==e}),u=u.parent}else u=u.parent}return r}function Vg(e){var t=e.vNode
return 3===t.props.nodeType?t.props.nodeValue.trim().length>0:$l(t,!1,!0)}var $g=Ba(function(e){if(e){var t=Gs(e,{noPresentational:!0,chromium:!0})
return t?Zl(t):$g(e.parent)}})
function Hg(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==n||null===(r=n.filter)||void 0===r?void 0:r.call(n,function(e){return a.hasAttr(e)}))&&void 0!==t?t:[]
if(0===o.length)return!0
var u=function(e){if(e.parent)return Eo(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),i=u&&Gs(u)
if(!i||"treegrid"===i)return!0
var s="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:s,invalidAttrs:o,ownerRole:i}),!1}function Ug(e,t,r){var n,a=r.props,o=a.nodeName,u=a.type,i=(n=r.attr("aria-checked"))?(n=n.toLowerCase(),["mixed","true"].includes(n)?n:"false"):""
if("input"!==o||"checkbox"!==u||!i)return!0
var s,l=(s=r).props.indeterminate?"mixed":s.props.checked?"true":"false"
return i===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}var Gg={row:Hg,checkbox:Ug}
function Wg(e,t,r){return"aria-required"===e&&"false"===t||!("aria-multiline"!==e||"false"!==t||!r.hasAttr("contenteditable"))}var Yg=function(e,t){try{return"svg"===t.props.nodeName||!!Eo(t,"svg")}catch(e){return!1}},Kg=[function(e,t){return Xg(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!Yg(0,t)},function(e,t){return Zi(t)},function(e,t){return Ji(t)||!Zg(t)},function(e){return!tc(e,{noLengthCompare:!0})}]
function Xg(e){return"widget"===Zl(e)}var Zg=Ba(function e(t){return!(null==t||!t.parent)&&(!(!Xg(t.parent)||!Ji(t.parent))||e(t.parent))}),Jg=function(e,t){var r=fs(t)
return!(r&&!["none","presentation"].includes(r)&&!(is[r]||{}).accessibleNameRequired&&!Zi(t))}
function Qg(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var r=e.ownerDocument.createRange()
return r.setStart(e,0),r.setEnd(e,e.childNodes.length),0===r.getClientRects().length}var ev=function(e,t,r){return r.initiator},tv={emoji:!0,nonBmp:!1,punctuations:!0}
function rv(e){return!e||"true"!==e.getAttribute("aria-hidden")&&rv(Xu(e))}var nv={"abstractrole-evaluate":function(e,t,r){var n=Hf(r.attr("role")).filter(function(e){return"abstract"===Zl(e)})
return n.length>0&&(this.data(n),!0)},"accesskeys-after":function(e){var t={}
return e.filter(function(e){if(!e.data)return!1
var r=e.data.toUpperCase()
return t[r]?(t[r].relatedNodes.push(e.relatedNodes[0]),!1):(t[r]=e,e.relatedNodes=[],!0)}).map(function(e){return e.result=!!e.relatedNodes.length,e})},"accesskeys-evaluate":function(e,t,r){return Wu(r)||(this.data(r.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,r){var n=r.attr("alt")
return"string"==typeof n&&/^\s+$/.test(n)},"aria-allowed-attr-evaluate":function(e,t,r){var n=[],a=Gs(r),o=Ym(a)
Array.isArray(t[a])&&(o=em(t[a].concat(o)))
var u,i=Q(r.attrNames)
try{for(i.s();!(u=i.n()).done;){var s=u.value
!bh(s)||o.includes(s)||Wg(s,r.attr(s),r)||n.push(s)}}catch(e){i.e(e)}finally{i.f()}return!n.length||(this.data(n.map(function(e){return e+'="'+r.attr(e)+'"'})),!(a||VD(r)||Zi(r))&&void 0)},"aria-allowed-attr-matches":function(e,t){var r=/^aria-/,n=t.attrNames
if(n.length)for(var a=0,o=n.length;a<o;a++)if(r.test(n[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=t.allowImplicit,a=void 0===n||n,o=t.ignoredTags,u=void 0===o?[]:o,i=r.props.nodeName
if(u.map(function(e){return e.toLowerCase()}).includes(i))return!0
var s=th(r,a)
if(s.length){if(this.data(s),!Js(r))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==fs(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,r){return"true"===r.attr("aria-busy")},"aria-conditional-attr-evaluate":function(e,t,r){var n=Gs(r)
return!Gg[n]||Gg[n].call(this,e,t,r)},"aria-conditional-checkbox-attr-evaluate":Ug,"aria-conditional-row-attr-evaluate":Hg,"aria-errormessage-evaluate":function(e,t,r){t=Array.isArray(t)?t:[]
var n=r.attr("aria-errormessage"),a=r.hasAttr("aria-errormessage"),o=r.attr("aria-invalid")
return!r.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(n)||!a||(this.data(Hf(n)),function(e){if(""===e.trim())return cs.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&rs(r,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:Hf(e)})}return t?Js(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||Hf(r.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:Hf(e)}),!1):void 0}.call(this,n))},"aria-has-attr-matches":function(e,t){var r=/^aria-/
return t.attrNames.some(function(e){return r.test(e)})},"aria-hidden-body-evaluate":function(e,t,r){return"true"!==r.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return rv(Xu(e))},"aria-label-evaluate":function(e,t,r){return!!Fs(os(r))},"aria-labelledby-evaluate":function(e,t,r){try{return!!Fs(as(r))}catch(e){return}},"aria-level-evaluate":function(e,t,r){var n=r.attr("aria-level")
if(!(parseInt(n,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=r.props.nodeName,o=Gs(r,{chromium:!0}),u=function(e,t,r,n){var a=cs.ariaRoles[t]
return a?a.prohibitedAttrs||[]:t||n.includes(r)||"widget"===$g(e)?[]:["aria-label","aria-labelledby"]}(r,o,a,n).filter(function(e){return!!r.attrNames.includes(e)&&""!==Fs(r.attr(e))})
if(0===u.length)return!1
var i=r.hasAttr("role")?"hasRole":"noRole"
i+=u.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:i,prohibited:u})
var s=Dl(r,{subtreeDescendant:!0})
return""===Fs(s)||void 0},"aria-required-attr-evaluate":function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=fs(n),o=n.attrNames,u=mh(a)
if(Array.isArray(r[a])&&(u=em(r[a],u)),!a||!o.length||!u.length)return!0
if(function(e,t){return"separator"===t&&!Zi(e)}(n,a)||function(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}(n,a))return!0
if("slider"===a&&null!==(t=n.attr("aria-valuetext"))&&void 0!==t&&t.trim())return!0
var i=qs(n),s=u.filter(function(e){return!n.attr(e)&&!function(e,t){var r
return void 0!==(null===(r=e.implicitAttrs)||void 0===r?void 0:r[t])}(i,e)})
return!s.length||(this.data(s),!1)},"aria-required-children-evaluate":function(e,t,r){var n=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=fs(r,{dpub:!0}),o=gh(a)
if(null===o)return!0
var u=function(e,t){for(var r,n=[],a=Xs(e),o=function(){if(3===r.props.nodeType&&n.push({vNode:r,role:null}),1!==r.props.nodeType||!Js(r))return 1
var e=Gs(r,{noPresentational:!0}),o=function(e){return ms().find(function(t){return e.hasAttr(t)})}(r),u=!!o||Zi(r)
if(!e&&!u||["group","rowgroup"].includes(e)&&t.some(function(t){return t===e}))a.push.apply(a,$(r.children))
else if(e||u){var i=o||"tabindex"
n.push({role:e,attr:i,vNode:r})}};r=a.shift();)o()
return n}(r,o),i=u.filter(function(e){var t=e.role
return 1===e.vNode.props.nodeType&&!o.includes(t)})
return i.length?(this.relatedNodes(i.map(function(e){return e.vNode})),this.data({messageKey:"unallowed",values:i.map(function(e){return function(e,t){var r=e.props,n=r.nodeName
if(3===r.nodeType)return"#text"
var a=fs(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?n+"[".concat(t,"]"):n}(e.vNode,e.attr)}).filter(function(e,t,r){return r.indexOf(e)===t}).join(", ")}),!1):!!function(e,t){return t.some(function(t){var r=t.role
return r&&e.includes(r)})}(o,u)||("true"===r.attr("aria-busy")?(this.data({messageKey:"aria-busy"}),!0):(this.data(o),!(!n.includes(a)||u.some(Vg))&&void 0))},"aria-required-children-matches":function(e,t){var r=fs(t,{dpub:!0})
return!!gh(r)},"aria-required-parent-evaluate":function(e,t,r){var n=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=zg(r,n)
if(!a)return!0
var o=function(e){for(var t=[],r=null;e;){if(e.getAttribute("id")){var n=Fa(e.getAttribute("id"));(r=Au(e).querySelector("[aria-owns~=".concat(n,"]")))&&t.push(r)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var u=0,i=o.length;u<i;u++)if(!(a=zg(to(o[u]),n,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var r=fs(t)
return!!hh(r)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Gs(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(r)||!(!r||"presentation"===r||"none"===r)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,r){var n=r.attrNames.filter(function(t){var r=cs.ariaAttrs[t]
if(!bh(t))return!1
var n=r.unsupported
return"object"!==l(n)?!!n:!Ls(e,n.exceptions)})
return!!n.length&&(this.data(n),!0)},"aria-valid-attr-evaluate":function(e,t,r){t=Array.isArray(t.value)?t.value:[]
var n=[],a=/^aria-/
return r.attrNames.forEach(function(e){-1===t.indexOf(e)&&a.test(e)&&!bh(e)&&n.push(e)}),!n.length||(this.data(n),!1)},"aria-valid-attr-value-evaluate":function(e,t,r){t=Array.isArray(t.value)?t.value:[]
var n="",a="",o=[],u=/^aria-/,i=["aria-errormessage"],s={"aria-controls":function(){var e=!1===["false",null].includes(r.attr("aria-haspopup"))
return e&&(n='aria-controls="'.concat(r.attr("aria-controls"),'"'),a="controlsWithinPopup"),"false"!==r.attr("aria-expanded")&&"false"!==r.attr("aria-selected")&&!1===e},"aria-current":function(e){e||(n='aria-current="'.concat(r.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==r.attr("aria-expanded")},"aria-describedby":function(e){e||(n='aria-describedby="'.concat(r.attr("aria-describedby"),'"'),a=c._tree&&c._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(n='aria-labelledby="'.concat(r.attr("aria-labelledby"),'"'),a=c._tree&&c._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return r.attrNames.forEach(function(e){if(!i.includes(e)&&!t.includes(e)&&u.test(e)){var l,c=r.attr(e)
try{l=vh(r,e)}catch(t){return n="".concat(e,'="').concat(c,'"'),void(a="idrefs")}s[e]&&!s[e](l)||l||(""!==c||function(e){var t
return"string"===(null===(t=cs.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(n=e,a="empty"))}}),o.length?(this.data(o),!1):!n||void this.data({messageKey:a,needsReview:n})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!r.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var n=r.attr(t.attribute)
return!!Fs(n)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,r){if("input"!==r.props.nodeName)return!0
var n=["text","search","number","tel"],a=["text","search","url"],o={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":n,"cc-exp":["text","search","month","tel"],"cc-exp-month":n,"cc-exp-year":n,"cc-csc":n,"transaction-amount":n,"bday-day":n,"bday-month":n,"bday-year":n,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===l(t)&&Object.keys(t).forEach(function(e){o[e]||(o[e]=[]),o[e]=o[e].concat(t[e])})
var u=r.attr("autocomplete").split(/\s+/g).map(function(e){return e.toLowerCase()}),i=u[u.length-1]
if(Nl.stateTerms.includes(i))return!0
var s=o[i],c=r.hasAttr("type")?Fs(r.attr("type")).toLowerCase():"text"
return c=xm().includes(c)?c:"text",void 0===s?"text"===c:s.includes(c)},"autocomplete-matches":function(e,t){var r=t.attr("autocomplete")
if(!r||""===Fs(r))return!1
var n=t.props.nodeName
if(!1===["textarea","input","select"].includes(n))return!1
if("input"===n&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),u=ZD(t.attr("tabindex"))
if(u<0&&o){var i=cs.ariaRoles[o]
if(void 0===i||"widget"!==i.type)return!1}return!(u<0&&t.actualNode&&!ri(t)&&!Js(t))},"autocomplete-valid-evaluate":function(e,t,r){var n=r.attr("autocomplete")||""
return Bl(n,t)},"avoid-inline-spacing-evaluate":function(e,t){var r=t.cssProperties.filter(function(t){if("important"===e.style.getPropertyPriority(t))return t})
return!(r.length>0&&(this.data(r),1))},"braille-label-equivalent-evaluate":function(e,t,r){var n
if(!(null!==(n=r.attr("aria-braillelabel"))&&void 0!==n?n:"").trim())return!0
try{return""!==Fs(Cl(r))}catch(e){return}},"braille-roledescription-equivalent-evaluate":function(e,t,r){var n,a=null!==(n=r.attr("aria-brailleroledescription"))&&void 0!==n?n:""
if(""===Fs(a))return!0
var o=r.attr("aria-roledescription")
return"string"!=typeof o?(this.data({messageKey:"noRoleDescription"}),!1):""!==Fs(o)||(this.data({messageKey:"emptyRoleDescription"}),!1)},"bypass-matches":function(e,t,r){return!ev(0,0,r)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,r){return!fm(r,"track").some(function(e){return"captions"===(e.attr("kind")||"").toLowerCase()})&&void 0},"caption-faked-evaluate":function(e){var t=hs(e),r=t[0]
return t.length<=1||r.length<=1||e.rows.length<=1||r.reduce(function(e,t,n){return e||t!==r[n+1]&&void 0!==r[n+1]},!1)},"color-contrast-evaluate":function(e,t,r){var n=t.ignoreUnicode,a=t.ignoreLength,o=t.ignorePseudo,i=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!ri(e))return this.data({messageKey:"hidden"}),!0
var f=el(r,!1,!0)
if(n&&function(e){var t={nonBmp:!0},r=wl(e,t),n=""===Fs(Al(e,t))
return r&&n}(f))this.data({messageKey:"nonBmp"})
else{var D=u.getComputedStyle(e),m=parseFloat(D.getPropertyValue("font-size")),h=D.getPropertyValue("font-weight"),g=parseFloat(h)>=i||"bold"===h,v=Math.ceil(72*m)/96,b=g&&v<s||!g&&v<l?c.normal:c.large,y=b.expected,F=b.minThreshold,w=b.maxThreshold,E=function(e,t){var r=t.pseudoSizeThreshold,n=void 0===r?.25:r,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,u=o.width*o.height*n
do{if(Ig(e.actualNode,":before")+Ig(e.actualNode,":after")>u)return e}while(e=e.parent)}}(r,{ignorePseudo:o,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:y+":1"}),void this.relatedNodes(E.actualNode)
var C=Xh(e,{minRatio:.001,maxRatio:d})
if(null!==C){var x=[],A=ng(e,x,d),k=ig(e,!1,A,t),N=null,B=null,T=null
if(0===C.length)N=ug(A,k)
else if(k&&A){T=[].concat($(C),[A]).reduce(qh)
var R=ug(A,k),S=ug(A,T),_=ug(T,k);(N=Math.max(R,S,_))!==R&&(B=S>_?"shadowOnBgColor":"fgOnShadowColor")}var O=N>y
if("number"==typeof F&&("number"!=typeof N||N<F)||"number"==typeof w&&("number"!=typeof N||N>w))return this.data({contrastRatio:N}),!0
var M,P=Math.floor(100*N)/100
null===A?M=ic.get("bgColor"):O||(M=B)
var I=1===P,j=1===f.length
return I?M=ic.set("bgColor","equalRatio"):O||!j||a||(M="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:A?A.toHexString():void 0,contrastRatio:P,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:M,expectedContrastRatio:y+":1",shadowColor:T?T.toHexString():void 0}),null===k||null===A||I||j&&!a&&!O?(M=null,ic.clear(),void this.relatedNodes(x)):(O||this.relatedNodes(x),O)}this.data({messageKey:"complexTextShadows"})}},"color-contrast-matches":function(e,t){var r=t.props,n=r.nodeName,a=r.type
if("option"===n)return!1
if("select"===n&&!e.options.length)return!1
if("input"===n&&["hidden","range","color","checkbox","radio","image"].includes(a))return!1
if(pg(t)||Mi(t))return!1
if(["input","select","textarea"].includes(n)){var o=u.getComputedStyle(e),i=parseInt(o.getPropertyValue("text-indent"),10)
if(i){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+i,right:l.right+i},!qf(l,e))return!1}return!0}var c=Nu(t,"label")
if("label"===n||c){var d=c||e,p=c?to(c):t
if(d.htmlFor){var f=Au(d).getElementById(d.htmlFor),D=f&&to(f)
if(D&&pg(D))return!1}var m=fm(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&pg(m))return!1}for(var h=[],g=t;g;){if(g.props.id){var v=Zm(g).filter(function(e){return Hf(e.getAttribute("aria-labelledby")||"").includes(g.props.id)}).map(function(e){return to(e)})
h.push.apply(h,$(v))}g=g.parent}if(h.length>0&&h.every(pg))return!1
if(!function(e){var t=el(e,!1,!0)
return""!==t&&""!==Al(t,tv)&&e.children.some(function(e){return"#text"===e.props.nodeName&&!El(e)})}(t))return!1
for(var b=s.createRange(),y=t.children,F=0;F<y.length;F++){var w=y[F]
3===w.actualNode.nodeType&&""!==Fs(w.actualNode.nodeValue)&&b.selectNodeContents(w.actualNode)}var E=Array.from(b.getClientRects()),C=Su(t)
return E.some(function(t){var r=qf(t,e)
if(!C.length)return r
var n=C.some(function(e){return Tu(t,e.boundingClientRect)})
return r&&n})},"css-orientation-lock-evaluate":function(e,t,r,n){var a=(n||{}).cssom,o=void 0===a?void 0:a,u=(t||{}).degreeThreshold,i=void 0===u?0:u
if(o&&o.length){for(var s=!1,l=[],c=o.reduce(function(e,t){var r=t.sheet,n=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:n,rules:[]}),!r||!r.cssRules)return e
var o=Array.from(r.cssRules)
return e[a].rules=e[a].rules.concat(o),e},{}),d=function(){var e=f[p],t=c[e],r=t.root,n=t.rules.filter(D)
if(!n.length)return 1
n.forEach(function(e){var t=e.cssRules
Array.from(t).forEach(function(e){var t=function(e){var t=e.selectorText,r=e.style
if(!t||r.length<=0)return!1
var n=r.transform||r.webkitTransform||r.msTransform||!1
if(!n&&!r.rotate)return!1
var a=function(e){if(!e)return 0
var t=e.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!t)return 0
var r=G(t,3)
return m(r[1],r[2])}(n),o=a+m("rotate",r.rotate)
return!!o&&(o=Math.abs(o),!(Math.abs(o-180)%180<=i)&&Math.abs(o-90)%90<=i)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var n=Array.from(r.querySelectorAll(e.selectorText))||[]
l=l.concat(n)}s=s||t})})},p=0,f=Object.keys(c);p<f.length;p++)d()
return!s||(l.length&&this.relatedNodes(l),!1)}function D(e){var t=e.type,r=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(r)||/orientation:\s*portrait/i.test(r))}function m(e,t){switch(e){case"rotate":case"rotateZ":return h(t)
case"rotate3d":var r=G(t.split(",").map(function(e){return e.trim()}),4),n=r[2],a=r[3]
if(0===parseInt(n))return
return h(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var r=G(t,2),n=r[0],a=r[1]
return g(Math.atan2(parseFloat(a),parseFloat(n)))}var o=parseFloat(t[8]),u=Math.asin(o),i=Math.cos(u)
return g(Math.acos(parseFloat(t[0])/i))}(t)
default:return 0}}function h(e){var t=G(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(!t)return 0
var r,n,a=parseFloat(e.replace(t,""))
switch(t){case"rad":return g(a)
case"grad":return n=a,(n%=400)<0&&(n+=400),Math.round(n/400*360)
case"turn":return r=a,Math.round(360/(1/r))
default:return parseInt(a)}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if($m(e)){var t=hs(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return $m(e)},"deprecatedrole-evaluate":function(e,t,r){var n=Gs(r,{dpub:!0,fallback:!0}),a=cs.ariaRoles[n]
return!(null==a||!a.deprecated||(this.data(n),0))},"dlitem-evaluate":function(e){var t=Xu(e),r=t.nodeName.toUpperCase(),n=fs(t)
return"DIV"===r&&["presentation","none",null].includes(n)&&(r=(t=Xu(t)).nodeName.toUpperCase(),n=fs(t)),"DL"===r&&!(n&&!["presentation","none","list"].includes(n))},"doc-has-title-evaluate":function(){var e=s.title
return!!Fs(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),r='*[id="'.concat(Fa(t),'"]'),n=Array.from(Au(e).querySelectorAll(r))
return!dh(e)&&n.some(Zi)},"duplicate-id-after":function(e){var t=[]
return e.filter(function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)})},"duplicate-id-aria-matches":function(e){return dh(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var r=Au(e),n=Array.from(r.querySelectorAll('[id="'.concat(Fa(t),'"]'))).filter(function(t){return t!==e})
return n.length&&this.relatedNodes(n),this.data(t),0===n.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),r='*[id="'.concat(Fa(t),'"]'),n=Array.from(Au(e).querySelectorAll(r))
return!dh(e)&&n.every(function(e){return!Zi(e)})},"duplicate-img-label-evaluate":function(e,t,r){if(["none","presentation"].includes(Gs(r)))return!1
var n=Eo(r,t.parentSelector)
if(!n)return!1
var a=el(n,!0).toLowerCase()
return""!==a&&a===Cl(r).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,r){var n=this
if(!r.attr("id"))return!1
if(r.actualNode){var a=Au(r.actualNode),o=Fa(r.attr("id")),u=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(u),!u.length)return!1
try{return u.some(function(e){if(ri(e)){var t=Fs(ns(e,{inControlContext:!0,startNode:r}))
return n.data({explicitLabel:t}),!!t}return!0})}catch(e){return}}},"fallbackrole-evaluate":function(e,t,r){var n=Hf(r.attr("role"))
return!(n.length<=1)&&(!function(e,t){return!zs(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(r,n)||void 0)},"focusable-content-evaluate":function(e,t,r){var n=r.tabbableElements
return!!n&&n.filter(function(e){return e!==r}).length>0},"focusable-disabled-evaluate":function(e,t,r){var n=["button","fieldset","input","select","textarea"],a=r.tabbableElements
if(!a||!a.length)return!0
var o=a.filter(function(e){return n.includes(e.props.nodeName)})
return this.relatedNodes(o.map(function(e){return e.actualNode})),!(0!==o.length&&!rc())||!!o.every(function(e){var t=e.getComputedStylePropertyValue("pointer-events"),r=parseInt(e.getComputedStylePropertyValue("width")),n=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===r||0===n)&&"none"===t})&&void 0},"focusable-element-evaluate":function(e,t,r){return!(!r.hasAttr("contenteditable")||!function e(t){var n=t.attr("contenteditable")
if("true"===n||""===n)return!0
if("false"===n)return!1
var a=Eo(r.parent,"[contenteditable]")
return!!a&&e(a)}(r))||Ji(r)},"focusable-modal-open-evaluate":function(e,t,r){var n=r.tabbableElements.map(function(e){return e.actualNode})
return!n||!n.length||!rc()||void this.relatedNodes(n)},"focusable-no-name-evaluate":function(e,t,r){if(!Ji(r))return!1
try{return!Cl(r)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,r){var n=["button","fieldset","input","select","textarea"],a=r.tabbableElements
if(!a||!a.length)return!0
var o=a.filter(function(e){return!n.includes(e.props.nodeName)})
return this.relatedNodes(o.map(function(e){return e.actualNode})),!(0!==o.length&&!rc())||!!o.every(function(e){var t=e.getComputedStylePropertyValue("pointer-events"),r=parseInt(e.getComputedStylePropertyValue("width")),n=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===r||0===n)&&"none"===t})&&void 0},"frame-focusable-content-evaluate":function(e,t,r){if(r.children)try{return!r.children.some(function(e){return Rg(e)})}catch(e){return}},"frame-focusable-content-matches":function(e,t,r){var n,a
return!r.initiator&&!r.focusable&&(null===(n=r.size)||void 0===n?void 0:n.width)*(null===(a=r.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter(function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var r=e.node.ancestry.flat(1/0).join(" > ")
return t[r]=e,!0}var n=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[n]&&(t[n].result=!0),!1})},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!Fs(t)},"has-alt-evaluate":function(e,t,r){var n=r.props.nodeName
return!!["img","input","area"].includes(n)&&r.hasAttr("alt")},"has-descendant-after":function(e){return e.some(function(e){return!0===e.result})&&e.forEach(function(e){e.result=!0}),e},"has-descendant-evaluate":function(e,t,r){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&rc())return!0
var n=rm(r,t.selector,function(e){return Js(e)})
return this.relatedNodes(n.map(function(e){return e.actualNode})),n.length>0},"has-global-aria-attribute-evaluate":function(e,t,r){var n=ms().filter(function(e){return r.hasAttr(e)})
return this.data(n),n.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==zs(t,{chromium:!0})},"has-lang-evaluate":function(e,t,r){var n=void 0!==s&&Ta(s)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&kg(r.attr("xml:lang"))&&!kg(r.attr("lang"))&&!n?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some(function(e){return kg(r.attr(e))})||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,r){try{return""!==Fs(Dl(r))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var r=Zl(t)
return"widget"===r||"composite"===r},"heading-matches":function(e,t){return"heading"===Gs(t)},"heading-order-after":function(e){var t=function(e){return(e=$(e)).sort(function(e,t){var r=e.node,n=t.node
return r.ancestry.length-n.ancestry.length}),e.reduce(mg,[]).filter(function(e){return-1!==e.level})}(e)
return e.forEach(function(e){e.result=function(e,t){var r,n,a,o,u=hg(t,e.node.ancestry),i=null!==(r=null===(n=t[u])||void 0===n?void 0:n.level)&&void 0!==r?r:-1,s=null!==(a=null===(o=t[u-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===u||(-1!==i?i-s<=1:void 0)}(e,t)}),e},"heading-order-evaluate":function(){var e=eo.get("headingOrder")
if(e)return!0
var t=rm(c._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",Js)
return e=t.map(function(e){return{ancestry:[Ka(e.actualNode)],level:Dg(e)}}),this.data({headingOrder:e}),eo.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,r){var n=Sl(r),a=e.getAttribute("title")
return!!n&&(a||(a="",e.getAttribute("aria-describedby")&&(a=rs(e,"aria-describedby").map(function(e){return e?ns(e):""}).join(""))),Fs(a)===Fs(n))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&$l(r)){var n=u.getComputedStyle(e)
if("none"===n.getPropertyValue("display"))return
if("hidden"===n.getPropertyValue("visibility")){var a=Xu(e),o=a&&u.getComputedStyle(a)
if(!o||"hidden"!==o.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,r){if(r.hasAttr("id")){if(!r.actualNode)return
var n=Au(e),a=Fa(e.getAttribute("id")),o=n.querySelector('label[for="'.concat(a,'"]'))
if(o&&!Js(o)){var u
try{u=Cl(r).trim()}catch(e){return}return""===u}}return!1},"html-namespace-matches":function(e,t){return!Yg(0,t)},"html5-scope-evaluate":function(e){return!Xl(s)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter(function(e){return void 0!==e.result}),r=[],n={},a=function(e){var a,o=t[e],u=o.data,i=u.name,s=u.urlProps
if(n[i])return 1
var l=t.filter(function(t,r){return t.data.name===i&&r!==e}),c=l.every(function(e){return fg(e.data.urlProps,s)})
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,$(l.map(function(e){return e.relatedNodes[0]}))),n[i]=l,r.push(o)},o=0;o<t.length;o++)a(o)
return r},"identical-links-same-purpose-evaluate":function(e,t,r){var n=ts.accessibleTextVirtual(r),a=ts.sanitize(ts.removeUnicode(n,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:Cu.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!Cl(t))return!1
var r=Gs(e)
return!r||"link"===r},"implicit-evaluate":function(e,t,r){try{var n=Eo(r,"label")
if(n){var a=Fs(Cl(n,{inControlContext:!0,startNode:r}))
return n.actualNode&&this.relatedNodes([n.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var r=t.cssProperty,n=t.absoluteValues,a=t.minValue,o=t.maxValue,i=t.normalValue,s=void 0===i?0:i,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(r)||c&&!nc(e))return!0
var d={}
"number"==typeof a&&(d.minValue=a),"number"==typeof o&&(d.maxValue=o)
var p=e.style.getPropertyValue(r)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(U({value:p},d)),!0
var f=function(e,t){var r=t.cssProperty,n=t.absoluteValues,a=t.normalValue,o=u.getComputedStyle(e),i=o.getPropertyValue(r)
if("normal"===i)return a
var s=parseFloat(i)
if(n)return s
var l=parseFloat(o.getPropertyValue("font-size")),c=Math.round(s/l*100)/100
return isNaN(c)?i:c}(e,{absoluteValues:n,cssProperty:r,normalValue:s})
return this.data(U({value:f},d)),"number"==typeof f?("number"!=typeof a||f>=a)&&("number"!=typeof o||f<=o):void 0},"inserted-into-focus-order-matches":function(e){return Gl(e)},"internal-link-present-evaluate":function(e,t,r){return fm(r,"a[href]").some(function(e){return/^#[^/!]/.test(e.attr("href"))})},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=[],a=[]
if(r.children){for(var o=Ag(r.children);o.length;){var u,i=o.shift(),s=i.vChild,l=i.nested
if(t.divGroups&&!l&&xg(s)){if(!s.children)return
var c=Ag(s.children,!0)
o.push.apply(o,$(c))}else{var d=Cg(s,l,t)
d&&(a.includes(d)||a.push(d),1===(null==s||null===(u=s.actualNode)||void 0===u?void 0:u.nodeType)&&n.push(s.actualNode))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(n),!0)}},"invalidrole-evaluate":function(e,t,r){var n=Hf(r.attr("role"))
return!!n.every(function(e){return!ps(e.toLowerCase(),{allowAbstract:!0})})&&(this.data(n),!0)},"is-element-focusable-evaluate":function(e,t,r){return Zi(r)},"is-initiator-matches":ev,"is-on-screen-evaluate":function(e){return ri(e)},"is-visible-matches":function(e){return ri(e)},"is-visible-on-screen-matches":function(e,t){return ri(t)},"label-content-name-mismatch-evaluate":function(e,t,r){var n,a,o,u,i=null==t?void 0:t.pixelThreshold,s=null!==(n=null==t?void 0:t.occurrenceThreshold)&&void 0!==n?n:null==t?void 0:t.occuranceThreshold,l=ns(e).toLowerCase(),c=Fs(Dl(r,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:i,occurrenceThreshold:s})).toLowerCase()
return!c||(kl(l)<1||kl(c)<1?void 0:(a=c,o=Ng(l),u=Ng(a),!(!o||!u)&&o.includes(u)))},"label-content-name-mismatch-matches":function(e,t){var r=Gs(e)
return!!(r&&rh("widget").includes(r)&&ah().includes(r)&&(Fs(os(t))||Fs(as(e)))&&Fs(el(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var r=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(r)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!Nu(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=rh("landmark"),r=Xu(e),n=Gs(e)
for(this.data({role:n});r;){var a=r.getAttribute("role")
if(a||"FORM"===r.nodeName.toUpperCase()||(a=zs(r)),a&&t.includes(a)&&("main"!==a||"complementary"!==n))return!1
r=Xu(r)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter(function(e){var r=t.find(function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText})
return r?(r.result=!1,r.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)})},"landmark-is-unique-evaluate":function(e,t,r){var n=Gs(e),a=Cl(r)
return a=a?a.toLowerCase():null,this.data({role:n,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){return function(e){var t=rh("landmark"),r=Gs(e)
if(!r)return!1
var n=e.props.nodeName
return"section"===n||"form"===n?!!Cl(e):t.indexOf(r)>=0||"region"===r}(t)&&Js(t)},"layout-table-matches":function(e){return!$m(e)&&!Zi(e)},"link-in-text-block-evaluate":function(e,t){var r=t.requiredContrastRatio,n=t.allowSameColor
if(Pg(e))return!1
for(var a=Xu(e);a&&1===a.nodeType&&!Pg(a);)a=Xu(a)
if(a){this.relatedNodes([a])
var o=ig(e),u=ig(a),i=ng(e),s=ng(a),l=o&&u?Og(o,u):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=r)return!0
var c=i&&s?Og(i,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=r)return!0
if(!c){var d,p=null!==(d=ic.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void ic.clear()}if(l)return!(!n||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:r,nodeBackgroundColor:i?i.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:r,nodeColor:o?o.toHexString():void 0,parentColor:u?u.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=Fs(e.innerText),r=e.getAttribute("role")
return(!r||"link"===r)&&!!t&&!!ri(e)&&tc(e)},"link-in-text-block-style-evaluate":function(e){if(_g(e))return!1
for(var t=Xu(e);t&&1===t.nodeType&&!_g(t);)t=Xu(t)
if(t){if(this.relatedNodes([t]),_h(e,t))return!0
if(!function(e){for(var t=0,r=["before","after"];t<r.length;t++){var n=r[t]
if("none"!==u.getComputedStyle(e,":".concat(n)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,r){var n=r.parent
if(n){var a=n.props.nodeName,o=fs(n)
return!!["presentation","none","list"].includes(o)||(o&&ps(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,r){return Ls(r,t.matcher)},"meta-refresh-evaluate":function(e,t,r){var n=t||{},a=n.minDelay,o=n.maxDelay,u=G((r.attr("content")||"").trim().split(kh),1)[0]
if(!u.match(Nh))return!0
var i=parseFloat(u)
return this.data({redirectDelay:i}),"number"==typeof a&&i<=t.minDelay||"number"==typeof o&&i>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,r){var n=t||{},a=n.scaleMinimum,o=void 0===a?2:a,u=n.lowerBound,i=void 0!==u&&u,s=r.attr("content")||""
if(!s)return!0
var l=s.split(/[;,]/).reduce(function(e,t){var r=t.trim()
if(!r)return e
var n=G(r.split("="),2),a=n[0],o=n[1]
if(!a||!o)return e
var u=a.toLowerCase().trim(),i=o.toLowerCase().trim()
return"maximum-scale"===u&&"yes"===i&&(i=1),"maximum-scale"===u&&parseFloat(i)<0||(e[u]=i),e},{})
if(i&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<i)return!0
if(!i&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!i&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=Fa(e.getAttribute("id")),r=e.parentNode,n=Au(e)
n=n.documentElement||n
var a=Array.from(n.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter(function(e){return!Wu(e)}));r;)"LABEL"===r.nodeName.toUpperCase()&&-1===a.indexOf(r)&&a.push(r),r=r.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter(function(e){return Js(e)})
if(o.length>1)return
return!rs(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var r=Gs(t)
return!!r&&!!cs.ariaRoles[r].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){var r=e.hasAttribute("controls")
if(e.hasAttribute("loop"))return r
if(e.duration){var n=t.allowedDuration,a=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return G(t,2)[1].split(",").map(function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),r=0,n=1;t.length>0;)r+=n*parseInt(t.pop(),10),n*=60
return parseFloat(r)}(e):parseFloat(e)})}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=a||!!r}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":Jg,"no-focusable-content-evaluate":function(e,t,r){if(r.children)try{var n=Bg(r)
if(!n.length)return!0
var a=n.filter(Tg)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(n),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,r){var n,a,o=Gs(r,{noImplicit:!0})
this.data(o)
try{n=Fs(ml(r)).toLowerCase(),a=Fs(Cl(r)).toLowerCase()}catch(e){return}return!(!a&&!n)&&!((a||!n)&&a.includes(n))&&void 0},"no-naming-method-matches":function(e,t){var r=qs(t).namingMethods
return!(r&&0!==r.length||"combobox"===fs(t)&&fm(t,'input:not([type="hidden"])').length||ph(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var r=ZD(t.attr("tabindex"))
return null===r||r>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,r){var n=r.props.nodeName,a=(r.attr("type")||"").toLowerCase(),o=r.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==n||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[Jg,Qg].every(function(r){return r(e,t)})},"only-dlitems-evaluate":function(e,t,r){var n=["definition","term","list"],a=r.children.reduce(function(e,t){var r=t.actualNode
return"DIV"===r.nodeName.toUpperCase()&&null===Gs(r)?e.concat(t.children):e.concat(t)},[]).reduce(function(e,t){var r=t.actualNode,a=r.nodeName.toUpperCase()
if(1===r.nodeType&&Js(r)){var o=fs(r);("DT"!==a&&"DD"!==a||o)&&(n.includes(o)||e.badNodes.push(r))}else 3===r.nodeType&&""!==r.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e},{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,r){var n=!1,a=!1,o=!0,u=[],i=[],s=[]
return r.children.forEach(function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&Js(t)){o=!1
var r="LI"===t.nodeName.toUpperCase(),l=Gs(e),c="listitem"===l
r||c||u.push(t),r&&!c&&(i.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else n=!0}),n||u.length?(this.relatedNodes(u),!0):!o&&!a&&(this.relatedNodes(i),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,r){var n=Array.from(e.parentNode.children),a=n.indexOf(e),o=(t=t||{}).margins||[],u=n.slice(a+1).find(function(e){return"P"===e.nodeName.toUpperCase()}),i=n.slice(0,a).reverse().find(function(e){return"P"===e.nodeName.toUpperCase()}),s=xh(e),l=u?xh(u):null,c=i?xh(i):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,D=null==u?void 0:u.textContent.trim().length
if(f>D*d)return!0
if(!l||!Ah(s,l,o))return!0
var m=Nu(r,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!Ah(s,c,o)||f>D*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),r=e.textContent.trim()
return!(0===r.length||(r.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter(function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()}).length},"page-no-duplicate-after":function(e){return e.filter(function(e){return"ignored"!==e.data})},"page-no-duplicate-evaluate":function(e,t,r){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var n="page-no-duplicate;"+t.selector
if(!eo.get(n)){eo.set(n,!0)
var a=rm(c._tree[0],t.selector,function(e){return Js(e)})
return"string"==typeof t.nativeScopeFilter&&(a=a.filter(function(e){return e.actualNode.hasAttribute("role")||!Nu(e,t.nativeScopeFilter)})),"string"==typeof t.role&&(a=a.filter(function(e){return Gs(e)===t.role})),this.relatedNodes(a.filter(function(e){return e!==r}).map(function(e){return e.actualNode})),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==zs(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,r){var n=fs(r)
if(["presentation","none"].includes(n)&&["iframe","frame"].includes(r.props.nodeName)&&r.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:r.props.nodeName}),!1
var a=Gs(r)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(n))return!1
var o,u=ms().some(function(e){return r.hasAttr(e)}),i=Zi(r)
return o=u&&!i?"globalAria":!u&&i?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter(function(e){return e.data.isIframe})
return e.forEach(function(e){if(!e.result&&1!==e.node.ancestry.length){var r,n=e.node.ancestry.slice(0,-1),a=Q(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
if(UD(n,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}}),t.forEach(function(e){e.result||(e.result=!0)}),e},"region-evaluate":function(e,t,r){return this.data({isIframe:["iframe","frame"].includes(r.props.nodeName)}),!eo.get("regionlessNodes",function(){return function(e){return Eh(c._tree[0],e).map(function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==s.body;)e=e.parent
return e}).filter(function(e,t,r){return r.indexOf(e)===t})}(t)}).includes(r)},"same-caption-summary-evaluate":function(e,t,r){if(void 0!==r.children){var n=r.attr("summary"),a=r.children.find(yh),o=!!a&&Fs(Dl(a))
return!(!o||!n)&&Fs(n).toLowerCase()===Fs(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var r=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(r)},"scrollable-region-focusable-matches":function(e,t){return void 0!==kD(e,13)&&!1===ph(t)&&fm(t,"*").some(function(e){return $l(e,!0,!0)})},"skip-link-evaluate":function(e){var t=$i(e,"href")
return!!t&&(Js(t)||void 0)},"skip-link-matches":function(e){return Af(e)&&ei(e)},"structured-dlitems-evaluate":function(e,t,r){var n=r.children
if(!n||!n.length)return!1
for(var a,o=!1,u=!1,i=0;i<n.length;i++){if("DT"===(a=n[i].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(u=!0)}return o||u},"summary-interactive-matches":function(e,t){var r,n,a,o=t.parent
return!("details"!==o.props.nodeName||(a=null===(n=(r=t).actualNode)||void 0===n?void 0:n.parentElement)&&a!==r.parent.actualNode)&&o.children.find(function(e){return"summary"===e.props.nodeName})===t},"svg-namespace-matches":Yg,"svg-non-empty-title-evaluate":function(e,t,r){if(r.children){var n=r.children.find(function(e){return"title"===e.props.nodeName})
if(!n)return this.data({messageKey:"noTitle"}),!1
try{if(""===Dl(n,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,r){var n=ZD(r.attr("tabindex"))
return null===n||n<=0},"table-or-grid-role-matches":function(e,t){var r=Gs(t)
return["treegrid","grid","table"].includes(r)},"target-offset-evaluate":function(e,t,r){var n=(null==t?void 0:t.minOffset)||24
if(ci(10*n,r.boundingClientRect))return this.data({messageKey:"large",minOffset:n}),!0
var a,o=[],u=n,i=Q(Si(r,n))
try{for(i.s();!(a=i.n()).done;){var s=a.value
if("widget"===Zl(s)&&Zi(s)){var l=null
try{l=di(r,s,n/2)}catch(e){if(e.message.startsWith("splitRects"))return void this.data({messageKey:"tooManyRects",closestOffset:0,minOffset:n})
throw e}null!==l&&(.05+(l=2*Eg(l))>=n||(u=Math.min(u,l),o.push(s)))}}}catch(e){i.e(e)}finally{i.f()}return 0===o.length?(this.data({closestOffset:u,minOffset:n}),!0):(this.relatedNodes(o.map(function(e){return e.actualNode})),o.some(Ji)?(this.data({closestOffset:u,minOffset:n}),!Ji(r)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:u,minOffset:n}))},"target-size-evaluate":function(e,t,r){var n=(null==t?void 0:t.minSize)||24,a=r.boundingClientRect
if(ci(10*n,a))return this.data({messageKey:"large",minSize:n}),!0
var o=ci.bind(null,n),u=Si(r),i=function(e,t){return t.filter(function(t){return!vg(t,e)&&Fg(e,t)})}(r,u),s=function(e,t){var r,n=[],a=[],o=Q(t)
try{for(o.s();!(r=o.n()).done;){var u=r.value
!Fg(e,u)&&Di(e,u)&&"none"!==bg(u)&&(vg(e,u)?n.push(u):a.push(u))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:n,partialObscuringElms:a}}(r,u),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(i.length&&(l.length||!o(a)))return this.data({minSize:n,messageKey:"contentOverflow"}),void this.relatedNodes(wg(i))
if(l.length)return this.relatedNodes(wg(l)),this.data({messageKey:"obscured"}),!0
var d=!Ji(r)&&void 0
if(!o(a))return this.data(U({minSize:n},yg(a))),d
var p=c.filter(function(e){return"widget"===Zl(e)&&Zi(e)})
if(!p.length)return this.data(U({minSize:n},yg(a))),!0
var f=function(e,t){var r,n=e.boundingClientRect,a=t.map(function(e){return e.boundingClientRect})
try{r=mi(n,a)}catch(e){return null}return function(e,t){return e.reduce(function(e,r){var n=ci(t,e)
return n!==ci(t,r)?n?e:r:e.width*e.height>r.width*r.height?e:r})}(r)}(r,p)
if(f){if(!o(f)){if(i.length)return this.data({minSize:n,messageKey:"contentOverflow"}),void this.relatedNodes(wg(i))
var D=p.every(Ji),m="partiallyObscured".concat(D?"":"NonTabbable")
return this.data(U({messageKey:m,minSize:n},yg(f))),this.relatedNodes(wg(p)),D?d:void 0}return this.data(U({minSize:n},yg(f||a))),this.relatedNodes(wg(p)),!0}this.data({minSize:n,messageKey:"tooManyRects"})},"td-has-header-evaluate":function(e){var t=[],r=Lm(e),n=hs(e)
return r.forEach(function(e){Hl(e)&&Vm(e)&&!Dh(e)&&(zm(e,n).some(function(e){return null!==e&&!!Hl(e)})||t.push(e))}),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],r=[],n=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],u=0;u<o.cells.length;u++)t.push(o.cells[u])
var i=t.filter(function(e){return e.getAttribute("id")}).map(function(e){return e.getAttribute("id")})
return t.forEach(function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&Js(e)){var o=e.getAttribute("headers").trim()
if(!o)return r.push(e)
var u=Hf(o)
0!==u.length&&(e.getAttribute("id")&&(t=-1!==u.indexOf(e.getAttribute("id").trim())),a=u.some(function(e){return!i.includes(e)}),(t||a)&&n.push(e))}}),n.length>0?(this.relatedNodes(n),!1):!r.length||void this.relatedNodes(r)},"th-has-data-cells-evaluate":function(e){var t=Lm(e),r=this,n=[]
t.forEach(function(e){var t=e.getAttribute("headers")
t&&(n=n.concat(t.split(/\s+/)))
var r=e.getAttribute("aria-labelledby")
r&&(n=n.concat(r.split(/\s+/)))})
var a=t.filter(function(e){return""!==Fs(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))}),o=hs(e),u=!0
return a.forEach(function(e){if(!e.getAttribute("id")||!n.includes(e.getAttribute("id"))){var t=gs(e,o),a=!1
bs(e)&&(a=Gm("down",t,o).find(function(t){return!bs(t)&&zm(t,o).includes(e)})),!a&&ys(e)&&(a=Gm("right",t,o).find(function(t){return!ys(t)&&zm(t,o).includes(e)})),a||r.relatedNodes(e),u=u&&a}}),!!u||void 0},"title-only-evaluate":function(e,t,r){var n=Sl(r),a=Ys(r),o=r.attr("aria-describedby")
return!(n||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach(function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0}),e.forEach(function(e){e.result=!!t[e.data]}),e},"unique-frame-title-evaluate":function(e,t,r){var n=Fs(r.attr("title")).toLowerCase()
return this.data(n),!0},"unsupportedrole-evaluate":function(e,t,r){var n=Gs(r,{dpub:!0,fallback:!0}),a=ds(n)
return a&&this.data(n),a},"valid-lang-evaluate":function(e,t,r){var n=[]
return t.attributes.forEach(function(e){var a=r.attr(e)
if("string"==typeof a){var o=eD(a),u=t.value?!t.value.map(eD).includes(o):!Nm(o);(""!==o&&u||""!==a&&!Fs(a))&&n.push(e+'="'+r.attr(e)+'"')}}),!(!n.length||"html"!==r.props.nodeName&&!Ul(r)||(this.data(n),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var r=fs(e)
return r&&(qg[r]||t.roles.includes(r))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Lg[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return Kg.every(function(r){return r(e,t)})},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,r){return eD(r.attr("lang"))===eD(r.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=eD(e.getAttribute("lang")),r=eD(e.getAttribute("xml:lang"))
return Nm(t)&&Nm(r)}},av=nv,ov=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function uv(e){if("string"==typeof e){if(av[e])return av[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function iv(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==l(e))&&(e={value:e}),e}function sv(e){e&&(this.id=e.id,this.configure(e))}sv.prototype.enabled=!0,sv.prototype.run=function(e,t,r,n,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,u=this.getOptions(t.options)
if(o){var i,s=new ov(this),l=oo(s,t,n,a)
try{i=this.evaluate.call(l,e.actualNode,u,e,r)}catch(t){return e&&e.actualNode&&(t.errorNode=fu.toSpec(e)),void a(t)}l.isAsync||(s.result=i,n(s))}else n(null)},sv.prototype.runSync=function(e,t,r){var n=(t=t||{}).enabled
if(!(void 0===n?this.enabled:n))return null
var a,o=this.getOptions(t.options),u=new ov(this),i=oo(u,t)
i.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(i,e.actualNode,o,e,r)}catch(t){throw e&&e.actualNode&&(t.errorNode=fu.toSpec(e)),t}return u.result=a,u},sv.prototype.configure=function(e){var t=this
e.evaluate&&!av[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=iv(e.options):this.options=e.options),["evaluate","after"].filter(function(t){return e.hasOwnProperty(t)}).forEach(function(r){return t[r]=uv(e[r])})},sv.prototype.getOptions=function(e){return this._internalCheck?yu(this.options,iv(e||{})):e||this.options}
var lv=sv,cv=function(e){this.id=e.id,this.result=ra.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function dv(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(ba(ra.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=uv(e.matches))}function pv(e){if(e.length){var t=!1,r={}
return e.forEach(function(e){var n=e.results.filter(function(e){return e})
r[e.type]=n,n.length&&(t=!0)}),t?r:null}}dv.prototype.matches=function(){return!0},dv.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="mark_gather_start_"+this.id,n="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&JD.mark(r)
var u=vm(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&JD.mark(a),u=u.filter(function(e){return Js(e)}),t.performanceTimer&&(JD.mark(o),JD.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(JD.mark(n),JD.measure("rule_"+this.id+"#gather",r,n)),u},dv.prototype.runChecks=function(e,t,r,n,a,o){var u=this,i=No()
this[e].forEach(function(e){var a=u._audit.checks[e.id||e],o=cD(a,u.id,r)
i.defer(function(e,r){a.run(t,o,n,e,r)})}),i.then(function(t){t=t.filter(function(e){return e}),a({type:e,results:t})}).catch(o)},dv.prototype.runChecksSync=function(e,t,r,n){var a=this,o=[]
return this[e].forEach(function(e){var u=a._audit.checks[e.id||e],i=cD(u,a.id,r)
o.push(u.runSync(t,i,n))}),{type:e,results:o=o.filter(function(e){return e})}},dv.prototype.run=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
r.performanceTimer&&this._trackPerformance()
var o,u=No(),i=new cv(this)
try{o=this.gatherAndMatchNodes(e,r)}catch(e){return void a(new d({cause:e,ruleId:this.id}))}r.performanceTimer&&this._logGatherPerformance(o),o.forEach(function(n){u.defer(function(a,o){var u=No();["any","all","none"].forEach(function(a){u.defer(function(o,u){t.runChecks(a,n,r,e,o,u)})}),u.then(function(e){var r=pv(e)
r&&(r.node=new ao(n),i.nodes.push(r),t.reviewOnFail&&(["any","all"].forEach(function(e){r[e].forEach(function(e){!1===e.result&&(e.result=void 0)})}),r.none.forEach(function(e){!0===e.result&&(e.result=void 0)}))),a()}).catch(function(e){return o(e)})})}),u.then(function(){r.performanceTimer&&t._logRulePerformance(),setTimeout(function(){n(i)},0)}).catch(function(e){r.performanceTimer&&t._logRulePerformance(),a(e)})},dv.prototype.runSync=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
r.performanceTimer&&this._trackPerformance()
var n,a=new cv(this)
try{n=this.gatherAndMatchNodes(e,r)}catch(e){throw new d({cause:e,ruleId:this.id})}return r.performanceTimer&&this._logGatherPerformance(n),n.forEach(function(n){var o=[];["any","all","none"].forEach(function(a){o.push(t.runChecksSync(a,n,r,e))})
var u=pv(o)
u&&(u.node=n.actualNode?new ao(n):null,a.nodes.push(u),t.reviewOnFail&&(["any","all"].forEach(function(e){u[e].forEach(function(e){!1===e.result&&(e.result=void 0)})}),u.none.forEach(function(e){!0===e.result&&(e.result=void 0)})))}),r.performanceTimer&&this._logRulePerformance(),a},dv.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},dv.prototype._logGatherPerformance=function(e){na("gather (",e.length,"):",JD.timeElapsed()+"ms"),JD.mark(this._markChecksStart)},dv.prototype._logRulePerformance=function(){JD.mark(this._markChecksEnd),JD.mark(this._markEnd),JD.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),JD.measure("rule_"+this.id,this._markStart,this._markEnd)},dv.prototype.gatherAndMatchNodes=function(e,t){var r=this,n="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&JD.mark(n),o=o.filter(function(t){return r.matches(t.actualNode,t,e)}),t.performanceTimer&&(JD.mark(a),JD.measure("rule_"+this.id+"#matches",n,a)),o},dv.prototype.after=function(e,t){var r,n=this,a=Du(r=this).map(function(e){var t=r._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null}).filter(Boolean),o=this.id
return a.forEach(function(r){var a,u,i,s=(a=e.nodes,u=r.id,i=[],a.forEach(function(e){Du(e).forEach(function(t){t.id===u&&(t.node=e.node,i.push(t))})}),i),l=cD(r,o,t),c=r.after(s,l.options)
n.reviewOnFail&&c.forEach(function(e){var t=(n.any.includes(e.id)||n.all.includes(e.id))&&!1===e.result,r=n.none.includes(e.id)&&!0===e.result;(t||r)&&(e.result=void 0)}),s.forEach(function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)})}),e.nodes=function(e){var t=["any","all","none"],r=e.nodes.filter(function(e){var r=0
return t.forEach(function(t){e[t]=e[t].filter(function(e){return!0!==e.filtered}),r+=e[t].length}),r>0})
return e.pageLevel&&r.length&&(r=[r.reduce(function(e,r){if(e)return t.forEach(function(t){e[t].push.apply(e[t],r[t])}),e})]),r}(e),e},dv.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=uv(e.matches)),e.impact&&(ba(ra.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var fv=De(ea()),Dv=/\{\{.+?\}\}/g,mv=Z(function e(t){K(this,e),this.lang="en",this.defaultConfig=t,this.standards=cs,this._init(),this._defaultLocale=null},[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),r=0;r<t.length;r++){var n=t[r],a=this.data.checks[n].messages,o=a.pass,u=a.fail,i=a.incomplete
e.checks[n]={pass:o,fail:u,incomplete:i}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var D=Object.keys(this.data.failureSummaries),m=0;m<D.length;m++){var h=D[m],g=this.data.failureSummaries[h].failureMessage
e.failureSummaries[h]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.checks[n])throw new Error('Locale provided for unknown check: "'.concat(n,'"'))
this.data.checks[n]=bv(this.data.checks[n],e[n])}}},{key:"_applyRuleLocale",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.rules[n])throw new Error('Locale provided for unknown rule: "'.concat(n,'"'))
this.data.rules[n]=yv(this.data.rules[n],e[n])}}},{key:"_applyFailureSummaries",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.failureSummaries[n])throw new Error('Locale provided for unknown failureMessage: "'.concat(n,'"'))
this.data.failureSummaries[n]=Fv(this.data.failureSummaries[n],e[n])}}},{key:"applyLocale",value:function(e){this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=wv(this.data.incompleteFallbackMessage,e.incompleteFallbackMessage)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=gv()
this.allowedOrigins=[]
var r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
if(a===ra.allOrigins)return void(this.allowedOrigins=["*"])
a!==ra.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=uo(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var r=gv()
t.allowedOrigins=r?[r]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=U({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental","deprecated"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,vv(e.rules,this,"addRule"),vv(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new dv(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===l(t)&&(this.data.checks[e.id]=t,"object"===l(t.messages)&&Object.keys(t.messages).filter(function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]}).forEach(function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())})),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new lv(e)}},{key:"run",value:function(e,t,r,n){this.normalizeOptions(t),ao.setRunOptions(t),c._selectCache=[]
var a=function(e,t,r){return e.reduce(function(e,n){return mm(n,t,r)?n.preload?(e.later.push(n),e):(e.now.push(n),e):e},{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,i=No()
o.forEach(function(r){i.defer(Ev(r,e,t))})
var s=No()
u.length&&s.defer(function(e){sm(t).then(function(t){return e(t)}).catch(function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)})})
var l=No()
l.defer(i),l.defer(s),l.then(function(a){var o=a.pop()
if(o&&o.length){var i=o[0]
i&&(e=U({},e,i))}var s=a[0]
if(!u.length)return c._selectCache=void 0,void r(s.filter(function(e){return!!e}))
var l=No()
u.forEach(function(r){var n=Ev(r,e,t)
l.defer(n)}),l.then(function(e){c._selectCache=void 0,r(s.concat(e).filter(function(e){return!!e}))}).catch(n)}).catch(n)}},{key:"after",value:function(e,t){var r=this.rules
return e.map(function(e){var n=mu(r,"id",e.id)
if(!n)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return n.after(e,t)})}},{key:"getRule",value:function(e){return this.rules.find(function(t){return t.id===e})}},{key:"normalizeOptions",value:function(e){var t=[],r=[]
if(this.rules.forEach(function(e){r.push(e.id),e.tags.forEach(function(e){t.includes(e)||t.push(e)})}),["object","string"].includes(l(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var n=e.runOnly.find(function(e){return t.includes(e)}),a=e.runOnly.find(function(e){return r.includes(e)})
if(n&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var o=e.runOnly
if(o.value&&!o.values&&(o.values=o.value,delete o.value),!Array.isArray(o.values)||0===o.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(o.type))o.type="rule",o.values.forEach(function(e){if(!r.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")})
else{if(!["tag","tags",void 0].includes(o.type))throw new Error("Unknown runOnly type '".concat(o.type,"'"))
o.type="tag"
var u=o.values.filter(function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)})
0!==u.length&&c.log("Could not find tags `"+u.join("`, `")+"`")}}return"object"===l(e.rules)&&Object.keys(e.rules).forEach(function(e){if(!r.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")}),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=(c.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach(function(n){e.data.rules[n.id]||(e.data.rules[n.id]={})
var a=e.data.rules[n.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===Cv(t,n.id,r))&&(a.helpUrl=Cv(e,n.id,r))})}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),hv=mv
function gv(){return u.origin&&"null"!==u.origin?u.origin:u.location&&u.location.origin&&"null"!==u.location.origin?u.location.origin:void 0}function vv(e,t,r){var n,a
for(n=0,a=e.length;n<a;n++)t[r](e[n])}var bv=function(e,t){var r=t.pass,n=t.fail
return"string"==typeof r&&Dv.test(r)&&(r=fv.default.compile(r)),"string"==typeof n&&Dv.test(n)&&(n=fv.default.compile(n)),U({},e,{messages:{pass:r||e.messages.pass,fail:n||e.messages.fail,incomplete:"object"===l(e.messages.incomplete)?U({},e.messages.incomplete,t.incomplete):t.incomplete}})},yv=function(e,t){var r=t.help,n=t.description
return"string"==typeof r&&Dv.test(r)&&(r=fv.default.compile(r)),"string"==typeof n&&Dv.test(n)&&(n=fv.default.compile(n)),U({},e,{help:r||e.help,description:n||e.description})},Fv=function(e,t){var r=t.failureMessage
return"string"==typeof r&&Dv.test(r)&&(r=fv.default.compile(r)),U({},e,{failureMessage:r||e.failureMessage})},wv=function(e,t){return"string"==typeof t&&Dv.test(t)&&(t=fv.default.compile(t)),t||e}
function Ev(e,t,r){return r.performanceTimer&&JD.mark("mark_rule_start_"+e.id),function(n,a){e.run(t,r,function(e){n(e)},function(t){if(r.debug)a(t)
else{var o=Object.assign(new cv(e),{result:ra.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
n(o)}})}}function Cv(e,t,r){var n=e.brand,a=e.application,o=e.lang
return ra.helpUrlBase+n+"/"+(r||c.version.substring(0,c.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}function xv(e){var t=u&&"Node"in u&&"NodeList"in u,r=!!s
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(eo.set("globalDocumentSet",!0),s=e.ownerDocument),t||(eo.set("globalWindowSet",!0),u=s.defaultView)}}var Av=function(){eo.get("globalDocumentSet")&&(eo.set("globalDocumentSet",!1),s=null),eo.get("globalWindowSet")&&(eo.set("globalWindowSet",!1),u=null),c._memoizedFns.forEach(function(e){return e.clear()}),eo.clear(),c._tree=void 0,c._selectorData=void 0,c._selectCache=void 0}
function kv(e,t,r,n){try{e=new ED(e),c._tree=e.flatTree,c._selectorData=qa(e.flatTree)}catch(e){return Av(),n(e)}var a=No(),o=c._audit
t.performanceTimer&&JD.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer(function(r,n){vu(e,t,"rules",null,r,n)}),a.defer(function(r,n){o.run(e,t,r,n)}),a.then(function(a){try{t.performanceTimer&&JD.auditEnd()
var u=gu(a.map(function(e){return{results:e}}))
e.initiator&&(t.performanceTimer&&JD.mark("auditAfterStart"),u=o.after(u,t),t.performanceTimer&&(JD.mark("auditAfterEnd"),JD.measure("audit.after","auditAfterStart","auditAfterEnd"),JD.logMeasures("audit.after")),u.forEach(dm),u=u.map(Da))
try{r(u,Av)}catch(e){Av(),na(e)}}catch(e){Av(),n(e)}}).catch(function(e){Av(),n(e)})}function Nv(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach(function(e){c._audit.registerCommand(e)})}function Bv(e){var t,r,n,a=G(e,3),o=a[0],u=a[1],i=a[2],d=new TypeError("axe.run arguments are invalid")
if(!PD(o)){if(void 0!==i)throw d
i=u,u=o,o=s}if("object"!==l(u)){if(void 0!==i)throw d
i=u,u={}}if("function"!=typeof i&&void 0!==i)throw d
return(u=uo(u)).reporter=null!==(t=null!==(r=u.reporter)&&void 0!==r?r:null===(n=c._audit)||void 0===n?void 0:n.reporter)&&void 0!==t?t:"v1",{context:o,options:u,callback:i}}u.top!==u&&(uu.subscribe("axe.start",function(e,t,r){var n=r,a=function(e){e instanceof Error==0&&(e=new Error(e)),r(e)},o=e&&e.context||{}
o.hasOwnProperty("include")&&!o.include.length&&(o.include=[s])
var u=e&&e.options||{}
switch(e.command){case"rules":return kv(o,u,function(e,t){e=fu.mapRawResults(e),n(e),t()},a)
case"cleanup-plugin":return Om(n,a)
default:if(c._audit&&c._audit.commands&&c._audit.commands[e.command])return c._audit.commands[e.command](e,r)}}),uu.subscribe("axe.ping",function(e,t,r){r({axe:!0})})),Nv.prototype.run=function(){return this._run.apply(this,arguments)},Nv.prototype.collect=function(){return this._collect.apply(this,arguments)},Nv.prototype.cleanup=function(e){var t=c.utils.queue(),r=this
Object.keys(this._registry).forEach(function(e){t.defer(function(t){r._registry[e].cleanup(t)})}),t.then(e)},Nv.prototype.add=function(e){this._registry[e.id]=e}
var Tv=function(){}
function Rv(e){var t=e.frames,r=e.frameSpec
return r?t.map(function(e){return fu.mergeSpecs(e,r)}):t}var Sv=function(e,t,r){if("function"==typeof t&&(r=t,t={}),!e||!Array.isArray(e))return r(e)
r(e.map(function(e){for(var t=U({},e),r=0,n=["passes","violations","incomplete","inapplicable"];r<n.length;r++){var a=n[r]
t[a]=fu.mapRawNodeResults(t[a])}return t}))},_v={base:{Audit:hv,CheckResult:ov,Check:lv,Context:ED,RuleResult:cv,Rule:dv,metadataFunctionMap:av},public:{reporters:Mm},helpers:{failureSummary:tD,incompleteFallbackMessage:rD,processAggregate:aD},utils:{setDefaultFrameMessenger:au,cacheNodeSelectors:Xf,getNodesMatchingExpression:Gf,convertSelector:yo},commons:{dom:{nativelyHidden:Mu,displayHidden:Pu,visibilityHidden:Iu,contentVisibiltyHidden:ju,ariaHidden:Lu,opacityHidden:qu,scrollHidden:zu,overflowHidden:Vu,clipHidden:$u,areaHidden:Hu,detailsHidden:Uu}}}
c._thisWillBeDeletedDoNotUse=_v,c.constants=ra,c.log=na,c.AbstractVirtualNode=oa,c.SerialVirtualNode=_m,c.VirtualNode=$f,c._cache=eo,c.imports=lc,c.cleanup=Om,c.configure=function(e){var t=c._audit
if(!t)throw new Error("No audit configured")
if(e.axeVersion||e.ver){var r=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(r))throw new Error("Invalid configured version ".concat(r))
var n=G(r.split("-"),2),a=n[0],o=n[1],u=G(a.split(".").map(Number),3),i=u[0],s=u[1],l=u[2],d=G(c.version.split("-"),2),p=d[0],f=d[1],D=G(p.split(".").map(Number),3),m=D[0],h=D[1],g=D[2]
if(i!==m||h<s||h===s&&g<l||i===m&&s===h&&l===g&&o&&o!==f)throw new Error("Configured version ".concat(r," is not compatible with current axe version ").concat(c.version))}if(e.reporter&&("function"==typeof e.reporter||Pm(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach(function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)})}var v,b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach(function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)})}if(e.disableOtherRules&&t.rules.forEach(function(e){!1===b.includes(e.id)&&(e.enabled=!1)}),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(ls).forEach(function(e){v[e]&&(ls[e]=yu(ls[e],v[e]))})),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(ra.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},c.frameMessenger=function(e){uu.updateMessenger(e)},c.getRules=function(e){var t=(e=e||[]).length?c._audit.rules.filter(function(t){return!!e.filter(function(e){return-1!==t.tags.indexOf(e)}).length}):c._audit.rules,r=c._audit.data.rules||{}
return t.map(function(e){var t=r[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}})},c._load=function(e){c._audit=new hv(e)},c.plugins={},c.registerPlugin=function(e){c.plugins[e.id]=new Nv(e)},c.hasReporter=Pm,c.getReporter=Im,c.addReporter=function(e,t,r){Mm[e]=t,r&&(Sm=t)},c.reset=function(){var e=c._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(ls).forEach(function(e){ls[e]=ss[e]})},c._runRules=kv,c.runVirtualRule=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
r.reporter=r.reporter||c._audit.reporter||"v1",c._selectorData={},t instanceof oa||(t=new _m(t))
var n=xD(e)
if(!n)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(n=Object.create(n,{excludeHidden:{value:!1}})).runSync(a,r)
dm(o),Da(o)
var u=ga([o])
return u.violations.forEach(function(e){return e.nodes.forEach(function(e){e.failureSummary=tD(e)})}),U({},dD(),u,{toolOptions:r})},c.run=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
xv(t[0])
var n=Bv(t),a=n.context,o=n.options,u=n.callback,i=void 0===u?Tv:u,s=function(e){var t,r,n
return"function"==typeof Promise&&e===Tv?t=new Promise(function(e,t){r=t,n=e}):(n=function(t){return e(null,t)},r=function(t){return e(t)}),{thenable:t,reject:r,resolve:n}}(i),l=s.thenable,d=s.resolve,p=s.reject
try{ba(c._audit,"No audit configured"),ba(!c._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if("function"!=typeof t||t===Tv)throw e
t(e.message)}(e,i)}return c._running=!0,o.performanceTimer&&JD.start(),c._runRules(a,o,function(e,t){var r=function(e){c._running=!1,t()
try{p(e)}catch(e){c.log(e)}}
try{o.performanceTimer&&JD.mark("reporterStart"),function(e,t,r,n){var a=Im(t.reporter)(e,t,r,n)
void 0!==a&&r(a)}(e,o,function(e){o.performanceTimer&&(JD.mark("reporterEnd"),JD.measure("reporter","reporterStart","reporterEnd"),JD.logMeasures("reporter"),JD.end()),c._running=!1,t()
try{d(e)}catch(e){c.log(e)}},r)}catch(e){r(e)}},function(e){o.performanceTimer&&JD.end(),c._running=!1,i(e),p(e)}),l},c.setup=function(e){if(c._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return e&&"object"===l(e.documentElement)&&"object"===l(e.defaultView)&&(e=e.documentElement),xv(e),c._tree=Zf(e),c._selectorData=qa(c._tree),c._tree[0]},c.teardown=Av,c.runPartial=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n=Bv(t),a=n.options,o=n.context
ba(c._audit,"Axe is not configured. Audit is missing."),ba(!c._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new ED(o,c._tree)
return c._tree=u.flatTree,c._selectorData=qa(u.flatTree),c._running=!0,a.elementRef=!1,new Promise(function(e,t){c._audit.run(u,a,e,t)}).then(function(e){e=fu.mapRawResults(e)
var t,r=u.frames.map(function(e){var t=e.node
return fu.toSpec(t)})
return u.initiator&&(t=dD()),c._running=!1,Av(),{results:e,frames:r,environmentData:t}}).catch(function(e){return c._running=!1,Av(),Promise.reject(e)})},c.finishRun=function(e){var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=uo(a)
var o=(e.find(function(e){return e.environmentData})||{}).environmentData
c._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(r=a.reporter)&&void 0!==r?r:null===(n=c._audit)||void 0===n?void 0:n.reporter)&&void 0!==t?t:"v1",function(e){var t,r=[],n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value,o=r.shift()
if(a){a.frameSpec=null!=o?o:null
var u=Rv(a)
r.unshift.apply(r,$(u))}}}catch(e){n.e(e)}finally{n.f()}}(e)
var u=gu(e)
return(u=c._audit.after(u,a)).forEach(dm),function(e,t){return new Promise(function(r,n){Im(t.reporter)(e,t,r,n)})}(u=u.map(Da),U({environmentData:o},a))},c.commons=Bh,c.utils=ua,c.addReporter("na",function(e,t,r){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=V(n,A)
r(U({},dD(a),{toolOptions:o},aD(e,t)))}),c.addReporter("no-passes",function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=V(n,k)
t.resultTypes=["violations"]
var u=aD(e,t).violations
r(U({},dD(a),{toolOptions:o,violations:u}))}),c.addReporter("rawEnv",function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=V(n,N)
Sv(e,o,function(e){var t=dD(a)
r({raw:e,env:t})})}),c.addReporter("raw",Sv),c.addReporter("v1",function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=V(n,B),u=aD(e,t),i=function(e){e.nodes.forEach(function(e){e.failureSummary=tD(e)})}
u.incomplete.forEach(i),u.violations.forEach(i),r(U({},dD(a),{toolOptions:o},u))}),c.addReporter("v2",function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=V(n,T),u=aD(e,t)
r(U({},dD(a),{toolOptions:o},u))},!0)}(),c._load({lang:"en",data:{rules:{accesskeys:{description:"Ensure every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensure <area> elements of image maps have alternative text",help:"Active <area> elements must have alternative text"},"aria-allowed-attr":{description:"Ensure an element's role supports its ARIA attributes",help:"Elements must only use supported ARIA attributes"},"aria-allowed-role":{description:"Ensure role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-braille-equivalent":{description:"Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",help:"aria-braille attributes must have a non-braille equivalent"},"aria-command-name":{description:"Ensure every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-conditional-attr":{description:"Ensure ARIA attributes are used as described in the specification of the element's role",help:"ARIA attributes must be used as specified for the element's role"},"aria-deprecated-role":{description:"Ensure elements do not use deprecated roles",help:"Deprecated ARIA roles must not be used"},"aria-dialog-name":{description:"Ensure every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:'Ensure aria-hidden="true" is not present on the document body.',help:'aria-hidden="true" must not be present on the document body'},"aria-hidden-focus":{description:"Ensure aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensure every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensure every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensure every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-prohibited-attr":{description:"Ensure ARIA attributes are not prohibited for an element's role",help:"Elements must only use permitted ARIA attributes"},"aria-required-attr":{description:"Ensure elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensure elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensure elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensure all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensure role="text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensure every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensure every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensure every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensure all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensure attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensure <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensure <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensure buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensure <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensure <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensure each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensure every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensure every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensure every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensure headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensure table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensure elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensure form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensure <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensure <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensure <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensure the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensure every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensure the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensure <img> elements have alternative text or a role of none or presentation",help:"Images must have alternative text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensure input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensure <input type="image"> elements have alternative text',help:"Image buttons must have alternative text"},"label-content-name-mismatch":{description:"Ensure that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensure every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensure the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensure the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensure the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensure the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensure the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensure the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensure the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensure the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{description:"Ensure landmarks are unique",help:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensure links have discernible text",help:"Links must have discernible text"},list:{description:"Ensure that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensure <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensure <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensure <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensure <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensure <object> elements have alternative text",help:"<object> elements must have alternative text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensure all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:'Ensure [role="img"] elements have alternative text',help:'[role="img"] elements must have an alternative text'},"scope-attr-valid":{description:"Ensure the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensure select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensure that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"summary-name":{description:"Ensure summary elements have discernible text",help:"Summary elements must have discernible text"},"svg-img-alt":{description:"Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensure tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"Tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch targets have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensure lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensure <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"Ensure aria-errormessage value `${data.values}` references an existing element",plural:"Ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"Unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:{default:"Required ARIA children are present","aria-busy":"Element has an aria-busy attribute, so it is allowed to omit required children"},fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}",controlsWithinPopup:"Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},"braille-label-equivalent":{impact:"serious",messages:{pass:"aria-braillelabel is used on an element with accessible text",fail:"aria-braillelabel is used on an element with no accessible text",incomplete:"Unable to compute accessible text"}},"braille-roledescription-equivalent":{impact:"serious",messages:{pass:"aria-brailleroledescription is used on an element with aria-roledescription",fail:{noRoleDescription:"aria-brailleroledescription is used on an element with no aria-roledescription",emptyRoleDescription:"aria-brailleroledescription is used on an element with an empty aria-roledescription"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"serious",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",complexTextShadows:"Element's contrast could not be determined because it uses complex text shadows",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"The autocomplete value is on an appropriate element",fail:"The autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted",incomplete:"the autocomplete attribute has a non-standard value. Check whether any standard value could be used instead."}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:'Focusable content should have tabindex="-1" or be removed from the DOM'}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Element has an explicit <label>",fail:"Element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Element has an implicit (wrapped) <label>",fail:"Element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped) <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item parent element has a role that is not role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions are available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:{default:"Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",large:"Target far exceeds the minimum size of ${data.minOffset}px."},fail:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",incomplete:{default:"Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",nonTabbableNeighbor:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable",large:"Target far exceeds the minimum size of ${data.minSize}px."},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"Ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",r=e
if(r)for(var n=-1,a=r.length-1;n<a;)t+="\n  "+r[n+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",r=e
if(r)for(var n=-1,a=r.length-1;n<a;)t+="\n  "+r[n+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",impact:"serious",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",impact:"critical",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",impact:"critical",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],any:[],none:["aria-unsupported-attr"]},{id:"aria-allowed-role",impact:"minor",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-braille-equivalent",reviewOnFail:!0,impact:"serious",selector:"[aria-brailleroledescription], [aria-braillelabel]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:["braille-roledescription-equivalent","braille-label-equivalent"],any:[],none:[]},{id:"aria-command-name",impact:"serious",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-conditional-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:[]},{id:"aria-deprecated-role",impact:"minor",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["deprecatedrole"]},{id:"aria-dialog-name",impact:"serious",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",impact:"critical",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag131","wcag412","EN-301-549","EN-9.1.3.1","EN-9.4.1.2"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",impact:"serious",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",impact:"serious",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",impact:"serious",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",impact:"serious",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-prohibited-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[],any:[],none:[{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-required-attr",impact:"critical",selector:"[role]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",impact:"critical",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",impact:"critical",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",impact:"serious",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",impact:"critical",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole"]},{id:"aria-text",impact:"serious",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",impact:"serious",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",impact:"serious",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",impact:"serious",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",impact:"critical",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","EN-301-549","EN-9.1.2.1","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",impact:"serious",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","EN-301-549","EN-9.1.3.5","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"],ignoredValues:["text","pronouns","gender","message","content"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",impact:"serious",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","EN-301-549","EN-9.1.4.12","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",impact:"serious",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",impact:"critical",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"bypass",impact:"serious",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a","EN-301-549","EN-9.2.4.1"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","TTv5","TT13.c","EN-301-549","EN-9.1.4.3","ACT"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",impact:"serious",selector:"html",tags:["cat.structure","wcag134","wcag21aa","EN-301-549","EN-9.1.3.4","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",impact:"serious",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",impact:"serious",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["dlitem"],none:[]},{id:"document-title",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","TTv5","TT12.a","EN-301-549","EN-9.2.4.2","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",impact:"serious",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",impact:"critical",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],reviewOnFail:!0,actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",impact:"minor",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",impact:"minor",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",impact:"minor",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",impact:"minor",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",impact:"moderate",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c","EN-301-549","EN-9.3.3.2"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",impact:"serious",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",impact:"critical",selector:"html, frame, iframe",tags:["cat.structure","best-practice","review-item"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",impact:"serious",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag2a","wcag412","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",impact:"serious",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",impact:"moderate",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",impact:"minor",selector:"*",excludeHidden:!1,tags:["cat.structure","best-practice","experimental","review-item"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",impact:"serious",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",impact:"moderate",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","EN-301-549","EN-9.3.1.1","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",impact:"minor",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",impact:"critical",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","TT7.b","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",impact:"minor",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",impact:"critical",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"input-image-alt",impact:"critical",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","EN-9.4.1.2","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label"],none:[]},{id:"label-content-name-mismatch",impact:"serious",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","EN-301-549","EN-9.2.5.3","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",impact:"serious",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",impact:"critical",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["hidden-explicit-label"]},{id:"landmark-banner-is-top-level",impact:"moderate",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",impact:"moderate",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",impact:"moderate",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",role:"banner"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",impact:"moderate",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",impact:"serious",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a","EN-301-549","EN-9.1.4.1"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",impact:"serious",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",impact:"serious",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",impact:"serious",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["listitem"],none:[]},{id:"marquee",impact:"serious",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",impact:"minor",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",impact:"critical",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a","EN-301-549","EN-9.2.2.1"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",impact:"minor",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",impact:"critical",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","EN-301-549","EN-9.1.4.4","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",impact:"serious",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",impact:"moderate",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","TTv5","TT2.a","EN-301-549","EN-9.1.4.2","ACT"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",impact:"serious",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","EN-301-549","EN-9.1.1.1"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",impact:"serious",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",impact:"minor",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",impact:"moderate",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",impact:"serious",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",impact:"moderate",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",impact:"serious",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","wcag213","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","EN-9.2.1.3"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",impact:"critical",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["hidden-explicit-label"]},{id:"server-side-image-map",impact:"minor",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],all:[],any:[],none:["exists"]},{id:"skip-link",impact:"moderate",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"summary-name",impact:"serious",selector:"summary",matches:"summary-interactive-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"svg-img-alt",impact:"serious",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",impact:"serious",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",impact:"minor",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","EN-301-549","EN-9.1.3.1"],all:["caption-faked"],any:[],none:[]},{id:"target-size",impact:"serious",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["cat.sensory-and-visual-cues","wcag22aa","wcag258"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",impact:"critical",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",impact:"serious",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",impact:"serious",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","TTv5","TT11.b","EN-301-549","EN-9.3.1.2","ACT"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",impact:"critical",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a","EN-301-549","EN-9.1.2.2"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate",deprecated:!0},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"braille-label-equivalent",evaluate:"braille-label-equivalent-evaluate"},{id:"braille-roledescription-equivalent",evaluate:"braille-roledescription-equivalent-evaluate"},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"],ignoredValues:["text","pronouns","gender","message","content"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",role:"banner"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate"},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},770:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(389)
function a(...e){return e.every(n.isArray)}},941:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEmpty})
var n=r(553)},943:(e,t,r)=>{"use strict"
function n(e,t){return e!==t}r.r(t),r.d(t,{default:()=>n})}}])
