(()=>{(function(){function t(){for(var n=arguments.length,o=0;o<n;o++){var i=o<0||arguments.length<=o?void 0:arguments[o];i.nodeType===1||i.nodeType===11?this.appendChild(i):this.appendChild(document.createTextNode(String(i)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var c=i.length;if(!!n)for(c||n.removeChild(this);c--;){var l=i[c];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),c?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function Ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function et(t,e,r){return e&&tt(t.prototype,e),r&&tt(t,r),t}function xt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?rt(Object(r),!0).forEach(function(n){xt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function it(t,e){return It(t)||Nt(t,e)||st(t,e)||Pt()}function T(t){return Lt(t)||_t(t)||st(t)||kt()}function Lt(t){if(Array.isArray(t))return U(t)}function It(t){if(Array.isArray(t))return t}function _t(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Nt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,o=!1,i=void 0;try{for(var a=t[Symbol.iterator](),c;!(n=(c=a.next()).done)&&(r.push(c.value),!(e&&r.length===e));n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return r}}function st(t,e){if(!!t){if(typeof t=="string")return U(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(t,e)}}function U(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function kt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var o=Object.getOwnPropertyDescriptor(Object(t),n),i=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,i||o)},{})}function $(t){return typeof t=="string"}function X(t){return Array.isArray(t)}function F(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=M(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=($(r)||X(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function K(t){var e=$(t)||X(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function G(t){return t!==null&&typeof t=="object"}function Rt(t){return G(t)&&/^(1|3|11)$/.test(t.nodeType)}function jt(t){return typeof t=="number"&&t>-1&&t%1===0}function Wt(t){return G(t)&&jt(t.length)}function H(t){return X(t)?t:t==null?[]:Wt(t)?Array.prototype.slice.call(t):[t]}function ot(t){var e=t;return $(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),H(e).reduce(function(r,n){return[].concat(T(r),T(H(n).filter(Rt)))},[])}var Mt=Object.entries,q="_splittype",_={},Dt=0;function k(t,e,r){if(!G(t))return console.warn("[data.set] owner is not an object"),null;var n=t[q]||(t[q]=++Dt),o=_[n]||(_[n]={});return r===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(_[n]=nt(nt({},o),e)):e!==void 0&&(o[e]=r),r}function D(t,e){var r=G(t)?t[q]:null,n=r&&_[r]||{};return e===void 0?n:n[e]}function at(t){var e=t&&t[q];e&&(delete t[e],delete _[e])}function Ht(){Object.keys(_).forEach(function(t){delete _[t]})}function Bt(){Mt(_).forEach(function(t){var e=it(t,2),r=e[0],n=e[1],o=n.isRoot,i=n.isSplit;(!o||!i)&&(_[r]=null,delete _[r])})}function $t(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var Z="\\ud800-\\udfff",ct="\\u0300-\\u036f\\ufe20-\\ufe23",lt="\\u20d0-\\u20f0",ut="\\ufe0e\\ufe0f",Ft="[".concat(Z,"]"),z="[".concat(ct).concat(lt,"]"),Y="\\ud83c[\\udffb-\\udfff]",qt="(?:".concat(z,"|").concat(Y,")"),ft="[^".concat(Z,"]"),dt="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="\\u200d",gt="".concat(qt,"?"),vt="[".concat(ut,"]?"),Gt="(?:"+ht+"(?:"+[ft,dt,pt].join("|")+")"+vt+gt+")*",Ut=vt+gt+Gt,zt="(?:".concat(["".concat(ft).concat(z,"?"),z,dt,pt,Ft].join("|"),`
)`),Yt=RegExp("".concat(Y,"(?=").concat(Y,")|").concat(zt).concat(Ut),"g"),Vt=[ht,Z,ct,lt,ut],Xt=RegExp("[".concat(Vt.join(""),"]"));function Kt(t){return t.split("")}function yt(t){return Xt.test(t)}function Zt(t){return t.match(Yt)||[]}function Jt(t){return yt(t)?Zt(t):Kt(t)}function Qt(t){return t==null?"":String(t)}function te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=Qt(t),t&&$(t)&&!e&&yt(t)?Jt(t):t.split(e)}function V(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var o=e[n],i=$(o)?o.trim():o;i===null||i===""||(n==="children"?r.append.apply(r,T(H(i))):r.setAttribute(n,i))}),r}var J={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ee(t,e){e=M(J,e);var r=K(e.types),n=e.tagName,o=t.nodeValue,i=document.createDocumentFragment(),a=[],c=[];return/^\s/.test(o)&&i.append(" "),a=$t(o).reduce(function(l,v,m,h){var f,b;return r.chars&&(b=te(v).map(function(A){var E=V(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:A});return k(E,"isChar",!0),c=[].concat(T(c),[E]),E})),r.words||r.lines?(f=V(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?b:v}),k(f,{isWord:!0,isWordStart:!0,isWordEnd:!0}),i.appendChild(f)):b.forEach(function(A){i.appendChild(A)}),m<h.length-1&&i.append(" "),r.words?l.concat(f):l},[]),/\s$/.test(o)&&i.append(" "),t.replaceWith(i),{words:a,chars:c}}function mt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return ee(t,e);var o=H(t.childNodes);if(o.length&&(k(t,"isSplit",!0),!D(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,a=t.previousSibling,c=t.textContent||"",l=i?i.textContent:" ",v=a?a.textContent:" ";k(t,{isWordEnd:/\s$/.test(c)||/^\s/.test(l),isWordStart:/^\s/.test(c)||/\s$/.test(v)})}return o.reduce(function(m,h){var f=mt(h,e),b=f.words,A=f.chars;return{words:[].concat(T(m.words),T(b)),chars:[].concat(T(m.chars),T(A))}},n)}function re(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var o=t.offsetParent,i=it(n,2),a=i[0],c=i[1],l=0,v=0;if(o&&o!==document.body){var m=o.getBoundingClientRect();l=m.x+a,v=m.y+c}var h=t.getBoundingClientRect(),f=h.width,b=h.height,A=h.x,E=h.y,C=E+c-v,I=A+a-l;return{width:f,height:b,top:C,left:I}}function bt(t){D(t).isWord?(at(t),t.replaceWith.apply(t,T(t.childNodes))):H(t.children).forEach(function(e){return bt(e)})}var ne=function(){return document.createDocumentFragment()};function oe(t,e,r){var n=K(e.types),o=e.tagName,i=t.getElementsByTagName("*"),a=[],c=[],l=null,v,m,h,f=[],b=t.parentElement,A=t.nextElementSibling,E=ne(),C=window.getComputedStyle(t),I=C.textAlign,P=parseFloat(C.fontSize),W=P*.2;return e.absolute&&(h={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},m=t.offsetWidth,v=t.offsetHeight,k(t,{cssWidth:t.style.width,cssHeight:t.style.height})),H(i).forEach(function(y){var d=y.parentElement===t,g=re(y,d,e,r),x=g.width,w=g.height,L=g.top,N=g.left;/^br$/i.test(y.nodeName)||(n.lines&&d&&((l===null||L-l>=W)&&(l=L,a.push(c=[])),c.push(y)),e.absolute&&k(y,{top:L,left:N,width:x,height:w}))}),b&&b.removeChild(t),n.lines&&(f=a.map(function(y){var d=V(o,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(I,"; width: 100%;")});k(d,"isLine",!0);var g={height:0,top:1e4};return E.appendChild(d),y.forEach(function(x,w,L){var N=D(x),s=N.isWordEnd,u=N.top,p=N.height,S=L[w+1];g.height=Math.max(g.height,p),g.top=Math.min(g.top,u),d.appendChild(x),s&&D(S).isWordStart&&d.append(" ")}),e.absolute&&k(d,{height:g.height,top:g.top}),d}),n.words||bt(E),t.replaceChildren(E)),e.absolute&&(t.style.width="".concat(t.style.width||m,"px"),t.style.height="".concat(v,"px"),H(i).forEach(function(y){var d=D(y),g=d.isLine,x=d.top,w=d.left,L=d.width,N=d.height,s=D(y.parentElement),u=!g&&s.isLine;y.style.top="".concat(u?x-s.top:x,"px"),y.style.left=g?"".concat(h.left,"px"):"".concat(w-(u?h.left:0),"px"),y.style.height="".concat(N,"px"),y.style.width=g?"".concat(h.width,"px"):"".concat(L,"px"),y.style.position="absolute"})),b&&(A?b.insertBefore(t,A):b.appendChild(t)),f}var B=M(J,{}),Et=function(){et(t,null,[{key:"clearData",value:function(){Ht()}},{key:"setDefaults",value:function(r){return B=M(B,F(r)),J}},{key:"revert",value:function(r){ot(r).forEach(function(n){var o=D(n),i=o.isSplit,a=o.html,c=o.cssWidth,l=o.cssHeight;i&&(n.innerHTML=a,n.style.width=c||"",n.style.height=l||"",at(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return _}},{key:"defaults",get:function(){return B},set:function(r){B=M(B,F(r))}}]);function t(e,r){Ct(this,t),this.isSplit=!1,this.settings=M(B,F(r)),this.elements=ot(e),this.split()}return et(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(a){k(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var o=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=M(this.settings,F(r)));var i=K(this.settings.types);i.none||(this.elements.forEach(function(a){k(a,"isRoot",!0);var c=mt(a,n.settings),l=c.words,v=c.chars;n.words=[].concat(T(n.words),T(l)),n.chars=[].concat(T(n.chars),T(v))}),this.elements.forEach(function(a){if(i.lines||n.settings.absolute){var c=oe(a,n.settings,o);n.lines=[].concat(T(n.lines),T(c))}}),this.isSplit=!0,window.scrollTo(o[0],o[1]),Bt())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var O=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},St=function(t,e="lines, words"){if(!!t)return typeSplit=new Et(t,{types:e}),typeSplit},j=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:o,isDesktop:i,reduceMotion:a}=r.conditions;if(n===void 0||o===void 0||i===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let c=`data-ix-${e}-desktop`,l=`data-ix-${e}-tablet`,v=`data-ix-${e}-mobile`;return runMobile=O(!0,t.getAttribute(v)),runTablet=O(!0,t.getAttribute(l)),runDesktop=O(!0,t.getAttribute(c)),!(runMobile===!1&&n||runTablet===!1&&o||runDesktop===!1&&i)};var wt=function(t){let e="accordion",r='[data-ix-accordion="wrap"]',n='[data-ix-accordion="item"]',o='[data-ix-accordion="top"]',i="data-ix-accordion-first-open",a="data-ix-accordion-one-active",c="data-ix-accordion-keep-one-open",l="data-ix-accordion-hover",v="is-active",m=gsap.utils.toArray(r),h=function(f,b=!0){b===!0?f.classList.add(v):f.classList.remove(v),setTimeout(()=>{ScrollTrigger.refresh()},600)};m.length===0||m===void 0||m.forEach(f=>{if(j(f,e,t)===!1)return;let A=O(!1,f.getAttribute(i)),E=O(!1,f.getAttribute(a)),C=O(!1,f.getAttribute(c)),I=O(!1,f.getAttribute(l)),P=f.querySelectorAll(n);if(P.length===0)return;let W=f.firstElementChild;A&&h(W),I||f.addEventListener("click",function(y){let d=y.target.closest(o);if(!d)return;let g=d.closest(n),x=g.classList.contains(v);x||(E&&P.forEach(w=>{w===g?h(w):h(w,!1)}),E||h(g)),x&&!C&&h(g,!1)}),I&&f.querySelectorAll(n).forEach(d=>{d.addEventListener("mouseover",function(){h(d)}),d.addEventListener("mouseout",function(){h(d,!1)})})})};var Ot=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n="data-ix-hoveractive-class",o="is-active";gsap.utils.toArray(r).forEach(a=>{if(!a)return;let c=O(o,a.getAttribute(n));j(a,e,t)!==!1&&(a.addEventListener("mouseover",function(v){a.classList.add(c)}),a.addEventListener("mouseleave",function(v){a.classList.remove(c)}))})};var At=function(){let t='[data-ix-horizontalscroll="wrap"]',e='[data-ix-horizontalscroll="track"]',r='[data-ix-horizontalscroll="sticky"]',n=gsap.utils.toArray(t);n.length!==0&&n.forEach(o=>{let i=o.querySelector(e),a=o.querySelector(r);if(!o||!i||!a)return;let c=gsap.timeline({scrollTrigger:{trigger:o,start:"top top",end:"98% bottom",scrub:.5},defaults:{duration:1,ease:"power1.out"}}).to(i,{xPercent:-100,ease:"none"})})};var Q=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",o="item",i="container",a="stagger",c="rich-text",l="image-wrap",v="image",m="line",h="data-ix-scrollin-toggle-actions",f="data-ix-scrollin-scrub",b="data-ix-scrollin-start",A="data-ix-scrollin-end",E="data-ix-scrollin-direction",C=function(s){let u={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return u.toggleActions=O(u.toggleActions,s.getAttribute(h)),u.scrub=O(u.scrub,s.getAttribute(f)),u.start=O(u.start,s.getAttribute(b)),u.end=O(u.end,s.getAttribute(A)),gsap.timeline({defaults:{duration:.6,ease:"power1.out"},scrollTrigger:{trigger:s,start:u.start,end:u.end,toggleActions:u.toggleActions,scrub:u.scrub}})},I=function(s,u,p={}){let S={opacity:0,y:"2rem"},R={opacity:1,y:"0rem"};return p.stagger===!0&&(R.stagger={each:.1,from:"start"}),u.fromTo(s,S,R)},P=function(s){let u=St(s);if(!u)return;let p=C(s),S=I(u.words,p,{stagger:!0,skew:"large"});p.eventCallback("onComplete",()=>{})},W=function(s){if(!s)return;let u=C(s),p=I(s,u)},y=function(s){let u="right",p,S=O(u,s.getAttribute(E)),R={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"};return S==="left"&&(p=R.left),S==="right"&&(p=R.right),S==="top"&&(p=R.top),S==="bottom"&&(p=R.bottom),p},d=function(s){if(!s)return;let u=y(s),p="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";C(s).fromTo(s,{clipPath:u},{clipPath:p,duration:1})},g=function(s){if(!s)return;let u=y(s),p="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";C(s).fromTo(s,{clipPath:u},{clipPath:p})},x=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);u.length!==0&&u.forEach(p=>{let S=C(p),R=I(p,S)})},w=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);if(u.length===0)return;let p=C(s),S=I(u,p,{stagger:!0})},L=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);u.length!==0&&u.forEach(p=>{let S=p.tagName;["H1","H2","H3","H4","H5","H6"].includes(S)&&P(p),S==="FIGURE"?d(p):W(p)})};gsap.utils.toArray(`[${r}]`).forEach(s=>{if(!s||j(s,e,t)===!1)return;let p=s.getAttribute(r);p===n&&P(s),p===o&&W(s),p===v&&d(s),p===m&&g(s),p===i&&x(s),p===a&&w(s),p===c&&L(s)})};var Tt=function(t){let e="cursor",r='[data-ix-cursor="wrap"]',n='[data-ix-cursor="inner"]',o='[data-ix-cursor="dot"]',i='[data-ix-cursor="hover"]',a='[data-ix-cursor="no-hover"]',c='[data-ix-cursor="checkbox"]',l='[data-ix-cursor="hide"]',v="is-hover",m=document.querySelector(r),h=document.querySelector(n),f=document.querySelector(o),b=document.querySelector(c);if(!m||!h|!b||"ontouchstart"in window||navigator.maxTouchPoints||j(m,e,t)===!1)return;let E=function(){console.log(b.checked),b.checked?m.style.display="flex":m.style.display="none"};E(),b.addEventListener("change",E),function(){gsap.utils.toArray(`${i}, :is(a, button):not(${a})`).forEach(d=>{!d||!f||(d.addEventListener("mouseover",function(g){f.classList.add(v)}),d.addEventListener("mouseleave",function(g){f.classList.remove(v)}))})}(),function(){gsap.utils.toArray(`${l}`).forEach(d=>{!d||!f||(d.addEventListener("mouseover",function(g){f.style.opacity=0}),d.addEventListener("mouseleave",function(g){f.style.opacity=1}))})}(),function(){!f||document.addEventListener("click",function(y){gsap.timeline({}).fromTo(f,{rotateZ:-45},{rotateZ:45,ease:"power1.out",duration:.3})})}(),function(){let y={x:0,y:0},d=gsap.timeline({paused:!0,defaults:{ease:"none"}});d.fromTo(h,{x:"-50vw"},{x:"50vw"});let g=gsap.timeline({paused:!0,defaults:{ease:"none"}});g.fromTo(h,{y:"-50vh"},{y:"50vh"});function x(w,L){gsap.to(y,{x:w,y:L,ease:"none",duration:0,onUpdate:()=>{d.progress(y.x),g.progress(y.y)}})}document.addEventListener("mousemove",function(w){let L=w.clientX/window.innerWidth,N=w.clientY/window.innerHeight;x(L,N)})}()};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script Loaded"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let t=document.querySelectorAll("[data-ix-reset]"),e=function(){let n='[data-ix-team="wrap"]',o='[data-ix-team="sticky"]',i='[data-ix-team="top-list"]',a='[data-ix-team="bottom-list"]',c=gsap.utils.toArray(n);c.length!==0&&c.forEach(l=>{let v=l.querySelector(o),m=l.querySelectorAll(i),h=l.querySelectorAll(a);if(!l||!v)return;let f=m[0].offsetWidth;l.style.height=f+"px",ScrollTrigger.refresh();let b=gsap.timeline({scrollTrigger:{trigger:l,start:"top top",end:"98% bottom",scrub:.5},defaults:{duration:1,ease:"power1.out"}}).set(v,{overflow:"hidden"}).to(m,{xPercent:-50,ease:"none"}).to(h,{xPercent:50,ease:"none"},"<")})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},o=>{let{isMobile:i,isTablet:a,isDesktop:c,reduceMotion:l}=o.conditions;wt(o),Ot(o),e(o),Q(o),Tt(o),l||Q(o),c&&At()})})(),t.forEach(function(n){n.addEventListener("click",function(o){ScrollTrigger.refresh()})})});})();
