(()=>{(function(){function t(){for(var n=arguments.length,o=0;o<n;o++){var i=o<0||arguments.length<=o?void 0:arguments[o];i.nodeType===1||i.nodeType===11?this.appendChild(i):this.appendChild(document.createTextNode(String(i)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var c=i.length;if(!!n)for(c||n.removeChild(this);c--;){var l=i[c];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),c?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function Ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function et(t,e,r){return e&&tt(t.prototype,e),r&&tt(t,r),t}function xt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?rt(Object(r),!0).forEach(function(n){xt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function it(t,e){return Lt(t)||Nt(t,e)||st(t,e)||Pt()}function T(t){return It(t)||_t(t)||st(t)||kt()}function It(t){if(Array.isArray(t))return U(t)}function Lt(t){if(Array.isArray(t))return t}function _t(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Nt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,o=!1,i=void 0;try{for(var a=t[Symbol.iterator](),c;!(n=(c=a.next()).done)&&(r.push(c.value),!(e&&r.length===e));n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return r}}function st(t,e){if(!!t){if(typeof t=="string")return U(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(t,e)}}function U(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function kt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var o=Object.getOwnPropertyDescriptor(Object(t),n),i=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,i||o)},{})}function $(t){return typeof t=="string"}function X(t){return Array.isArray(t)}function F(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=M(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=($(r)||X(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function K(t){var e=$(t)||X(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function G(t){return t!==null&&typeof t=="object"}function Rt(t){return G(t)&&/^(1|3|11)$/.test(t.nodeType)}function jt(t){return typeof t=="number"&&t>-1&&t%1===0}function Wt(t){return G(t)&&jt(t.length)}function B(t){return X(t)?t:t==null?[]:Wt(t)?Array.prototype.slice.call(t):[t]}function ot(t){var e=t;return $(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),B(e).reduce(function(r,n){return[].concat(T(r),T(B(n).filter(Rt)))},[])}var Mt=Object.entries,q="_splittype",N={},Dt=0;function k(t,e,r){if(!G(t))return console.warn("[data.set] owner is not an object"),null;var n=t[q]||(t[q]=++Dt),o=N[n]||(N[n]={});return r===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(N[n]=nt(nt({},o),e)):e!==void 0&&(o[e]=r),r}function D(t,e){var r=G(t)?t[q]:null,n=r&&N[r]||{};return e===void 0?n:n[e]}function at(t){var e=t&&t[q];e&&(delete t[e],delete N[e])}function Bt(){Object.keys(N).forEach(function(t){delete N[t]})}function Ht(){Mt(N).forEach(function(t){var e=it(t,2),r=e[0],n=e[1],o=n.isRoot,i=n.isSplit;(!o||!i)&&(N[r]=null,delete N[r])})}function $t(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var Z="\\ud800-\\udfff",ct="\\u0300-\\u036f\\ufe20-\\ufe23",lt="\\u20d0-\\u20f0",ut="\\ufe0e\\ufe0f",Ft="[".concat(Z,"]"),z="[".concat(ct).concat(lt,"]"),Y="\\ud83c[\\udffb-\\udfff]",qt="(?:".concat(z,"|").concat(Y,")"),ft="[^".concat(Z,"]"),dt="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="\\u200d",gt="".concat(qt,"?"),vt="[".concat(ut,"]?"),Gt="(?:"+ht+"(?:"+[ft,dt,pt].join("|")+")"+vt+gt+")*",Ut=vt+gt+Gt,zt="(?:".concat(["".concat(ft).concat(z,"?"),z,dt,pt,Ft].join("|"),`
)`),Yt=RegExp("".concat(Y,"(?=").concat(Y,")|").concat(zt).concat(Ut),"g"),Vt=[ht,Z,ct,lt,ut],Xt=RegExp("[".concat(Vt.join(""),"]"));function Kt(t){return t.split("")}function yt(t){return Xt.test(t)}function Zt(t){return t.match(Yt)||[]}function Jt(t){return yt(t)?Zt(t):Kt(t)}function Qt(t){return t==null?"":String(t)}function te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=Qt(t),t&&$(t)&&!e&&yt(t)?Jt(t):t.split(e)}function V(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var o=e[n],i=$(o)?o.trim():o;i===null||i===""||(n==="children"?r.append.apply(r,T(B(i))):r.setAttribute(n,i))}),r}var J={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ee(t,e){e=M(J,e);var r=K(e.types),n=e.tagName,o=t.nodeValue,i=document.createDocumentFragment(),a=[],c=[];return/^\s/.test(o)&&i.append(" "),a=$t(o).reduce(function(l,h,m,p){var d,b;return r.chars&&(b=te(h).map(function(E){var A=V(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:E});return k(A,"isChar",!0),c=[].concat(T(c),[A]),A})),r.words||r.lines?(d=V(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?b:h}),k(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),i.appendChild(d)):b.forEach(function(E){i.appendChild(E)}),m<p.length-1&&i.append(" "),r.words?l.concat(d):l},[]),/\s$/.test(o)&&i.append(" "),t.replaceWith(i),{words:a,chars:c}}function mt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return ee(t,e);var o=B(t.childNodes);if(o.length&&(k(t,"isSplit",!0),!D(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,a=t.previousSibling,c=t.textContent||"",l=i?i.textContent:" ",h=a?a.textContent:" ";k(t,{isWordEnd:/\s$/.test(c)||/^\s/.test(l),isWordStart:/^\s/.test(c)||/\s$/.test(h)})}return o.reduce(function(m,p){var d=mt(p,e),b=d.words,E=d.chars;return{words:[].concat(T(m.words),T(b)),chars:[].concat(T(m.chars),T(E))}},n)}function re(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var o=t.offsetParent,i=it(n,2),a=i[0],c=i[1],l=0,h=0;if(o&&o!==document.body){var m=o.getBoundingClientRect();l=m.x+a,h=m.y+c}var p=t.getBoundingClientRect(),d=p.width,b=p.height,E=p.x,A=p.y,C=A+c-h,_=E+a-l;return{width:d,height:b,top:C,left:_}}function bt(t){D(t).isWord?(at(t),t.replaceWith.apply(t,T(t.childNodes))):B(t.children).forEach(function(e){return bt(e)})}var ne=function(){return document.createDocumentFragment()};function oe(t,e,r){var n=K(e.types),o=e.tagName,i=t.getElementsByTagName("*"),a=[],c=[],l=null,h,m,p,d=[],b=t.parentElement,E=t.nextElementSibling,A=ne(),C=window.getComputedStyle(t),_=C.textAlign,I=parseFloat(C.fontSize),x=I*.2;return e.absolute&&(p={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},m=t.offsetWidth,h=t.offsetHeight,k(t,{cssWidth:t.style.width,cssHeight:t.style.height})),B(i).forEach(function(y){var g=y.parentElement===t,v=re(y,g,e,r),w=v.width,L=v.height,P=v.top,R=v.left;/^br$/i.test(y.nodeName)||(n.lines&&g&&((l===null||P-l>=x)&&(l=P,a.push(c=[])),c.push(y)),e.absolute&&k(y,{top:P,left:R,width:w,height:L}))}),b&&b.removeChild(t),n.lines&&(d=a.map(function(y){var g=V(o,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(_,"; width: 100%;")});k(g,"isLine",!0);var v={height:0,top:1e4};return A.appendChild(g),y.forEach(function(w,L,P){var R=D(w),s=R.isWordEnd,u=R.top,f=R.height,S=P[L+1];v.height=Math.max(v.height,f),v.top=Math.min(v.top,u),g.appendChild(w),s&&D(S).isWordStart&&g.append(" ")}),e.absolute&&k(g,{height:v.height,top:v.top}),g}),n.words||bt(A),t.replaceChildren(A)),e.absolute&&(t.style.width="".concat(t.style.width||m,"px"),t.style.height="".concat(h,"px"),B(i).forEach(function(y){var g=D(y),v=g.isLine,w=g.top,L=g.left,P=g.width,R=g.height,s=D(y.parentElement),u=!v&&s.isLine;y.style.top="".concat(u?w-s.top:w,"px"),y.style.left=v?"".concat(p.left,"px"):"".concat(L-(u?p.left:0),"px"),y.style.height="".concat(R,"px"),y.style.width=v?"".concat(p.width,"px"):"".concat(P,"px"),y.style.position="absolute"})),b&&(E?b.insertBefore(t,E):b.appendChild(t)),d}var H=M(J,{}),Et=function(){et(t,null,[{key:"clearData",value:function(){Bt()}},{key:"setDefaults",value:function(r){return H=M(H,F(r)),J}},{key:"revert",value:function(r){ot(r).forEach(function(n){var o=D(n),i=o.isSplit,a=o.html,c=o.cssWidth,l=o.cssHeight;i&&(n.innerHTML=a,n.style.width=c||"",n.style.height=l||"",at(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return N}},{key:"defaults",get:function(){return H},set:function(r){H=M(H,F(r))}}]);function t(e,r){Ct(this,t),this.isSplit=!1,this.settings=M(H,F(r)),this.elements=ot(e),this.split()}return et(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(a){k(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var o=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=M(this.settings,F(r)));var i=K(this.settings.types);i.none||(this.elements.forEach(function(a){k(a,"isRoot",!0);var c=mt(a,n.settings),l=c.words,h=c.chars;n.words=[].concat(T(n.words),T(l)),n.chars=[].concat(T(n.chars),T(h))}),this.elements.forEach(function(a){if(i.lines||n.settings.absolute){var c=oe(a,n.settings,o);n.lines=[].concat(T(n.lines),T(c))}}),this.isSplit=!0,window.scrollTo(o[0],o[1]),Ht())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var O=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},St=function(t,e="lines, words"){if(!!t)return typeSplit=new Et(t,{types:e}),typeSplit},W=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:o,isDesktop:i,reduceMotion:a}=r.conditions;if(n===void 0||o===void 0||i===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let c=`data-ix-${e}-desktop`,l=`data-ix-${e}-tablet`,h=`data-ix-${e}-mobile`;return runMobile=O(!0,t.getAttribute(h)),runTablet=O(!0,t.getAttribute(l)),runDesktop=O(!0,t.getAttribute(c)),!(runMobile===!1&&n||runTablet===!1&&o||runDesktop===!1&&i)};var wt=function(t){let e="accordion",r='[data-ix-accordion="wrap"]',n='[data-ix-accordion="item"]',o='[data-ix-accordion="top"]',i="data-ix-accordion-first-open",a="data-ix-accordion-one-active",c="data-ix-accordion-keep-one-open",l="data-ix-accordion-hover",h="is-active",m=gsap.utils.toArray(r),p=function(d,b=!0){b===!0?d.classList.add(h):d.classList.remove(h),setTimeout(()=>{ScrollTrigger.refresh()},600)};m.length===0||m===void 0||m.forEach(d=>{if(W(d,e,t)===!1)return;let E=O(!1,d.getAttribute(i)),A=O(!1,d.getAttribute(a)),C=O(!1,d.getAttribute(c)),_=O(!1,d.getAttribute(l)),I=d.querySelectorAll(n);if(I.length===0)return;let x=d.firstElementChild;E&&p(x),_||d.addEventListener("click",function(y){let g=y.target.closest(o);if(!g)return;let v=g.closest(n),w=v.classList.contains(h);w||(A&&I.forEach(L=>{L===v?p(L):p(L,!1)}),A||p(v)),w&&!C&&p(v,!1)}),_&&d.querySelectorAll(n).forEach(g=>{g.addEventListener("mouseover",function(){p(g)}),g.addEventListener("mouseout",function(){p(g,!1)})})})};var Ot=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n="data-ix-hoveractive-class",o="is-active";gsap.utils.toArray(r).forEach(a=>{if(!a)return;let c=O(o,a.getAttribute(n));W(a,e,t)!==!1&&(a.addEventListener("mouseover",function(h){a.classList.add(c)}),a.addEventListener("mouseleave",function(h){a.classList.remove(c)}))})};var At=function(){let t='[data-ix-horizontalscroll="wrap"]',e='[data-ix-horizontalscroll="track"]',r='[data-ix-horizontalscroll="sticky"]',n=gsap.utils.toArray(t);n.length!==0&&n.forEach(o=>{let i=o.querySelector(e),a=o.querySelector(r);if(!o||!i||!a)return;let c=gsap.timeline({scrollTrigger:{trigger:o,start:"top top",end:"98% bottom",scrub:.5},defaults:{duration:1,ease:"power1.out"}}).to(i,{xPercent:-100,ease:"none"})})};var Q=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",o="item",i="container",a="stagger",c="rich-text",l="image-wrap",h="image",m="line",p="data-ix-scrollin-toggle-actions",d="data-ix-scrollin-scrub",b="data-ix-scrollin-start",E="data-ix-scrollin-end",A="data-ix-scrollin-direction",C=function(s){let u={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return u.toggleActions=O(u.toggleActions,s.getAttribute(p)),u.scrub=O(u.scrub,s.getAttribute(d)),u.start=O(u.start,s.getAttribute(b)),u.end=O(u.end,s.getAttribute(E)),gsap.timeline({defaults:{duration:.6,ease:"power1.out"},scrollTrigger:{trigger:s,start:u.start,end:u.end,toggleActions:u.toggleActions,scrub:u.scrub}})},_=function(s,u,f={}){let S={opacity:0,y:"2rem"},j={opacity:1,y:"0rem"};return f.stagger===!0&&(j.stagger={each:.1,from:"start"}),u.fromTo(s,S,j)},I=function(s){let u=St(s);if(!u)return;let f=C(s),S=_(u.words,f,{stagger:!0,skew:"large"});f.eventCallback("onComplete",()=>{})},x=function(s){if(!s)return;let u=C(s),f=_(s,u)},y=function(s){let u="right",f,S=O(u,s.getAttribute(A)),j={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"};return S==="left"&&(f=j.left),S==="right"&&(f=j.right),S==="top"&&(f=j.top),S==="bottom"&&(f=j.bottom),f},g=function(s){if(!s)return;let u=y(s),f="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";C(s).fromTo(s,{clipPath:u},{clipPath:f,duration:1})},v=function(s){if(!s)return;let u=y(s),f="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";C(s).fromTo(s,{clipPath:u},{clipPath:f})},w=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);u.length!==0&&u.forEach(f=>{let S=C(f),j=_(f,S)})},L=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);if(u.length===0)return;let f=C(s),S=_(u,f,{stagger:!0})},P=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);u.length!==0&&u.forEach(f=>{let S=f.tagName;["H1","H2","H3","H4","H5","H6"].includes(S)&&I(f),S==="FIGURE"?g(f):x(f)})};gsap.utils.toArray(`[${r}]`).forEach(s=>{if(!s||W(s,e,t)===!1)return;let f=s.getAttribute(r);f===n&&I(s),f===o&&x(s),f===h&&g(s),f===m&&v(s),f===i&&w(s),f===a&&L(s),f===c&&P(s)})};var Tt=function(t){let e="cursor",r='[data-ix-cursor="wrap"]',n='[data-ix-cursor="inner"]',o='[data-ix-cursor="dot"]',i='[data-ix-cursor="hover"]',a='[data-ix-cursor="no-hover"]',c='[data-ix-cursor="checkbox"]',l="is-hover",h=document.querySelector(r),m=document.querySelector(n),p=document.querySelector(o),d=document.querySelector(c);if(!h||!m|!d||"ontouchstart"in window||navigator.maxTouchPoints||W(h,e,t)===!1)return;let E=function(){console.log(d.checked),d.checked?h.style.display="flex":h.style.display="none"};E(),d.addEventListener("change",E),function(){gsap.utils.toArray(`${i}, :is(a, button):not(${a})`).forEach(x=>{!x||!p||(x.addEventListener("mouseover",function(y){p.classList.add(l)}),x.addEventListener("mouseleave",function(y){p.classList.remove(l)}))})}(),function(){!p||document.addEventListener("click",function(I){gsap.timeline({}).fromTo(p,{rotateZ:-45},{rotateZ:45,ease:"power1.out",duration:.3})})}(),function(){let I={x:0,y:0},x=gsap.timeline({paused:!0,defaults:{ease:"none"}});x.fromTo(m,{x:"-50vw"},{x:"50vw"});let y=gsap.timeline({paused:!0,defaults:{ease:"none"}});y.fromTo(m,{y:"-50vh"},{y:"50vh"});function g(v,w){gsap.to(I,{x:v,y:w,ease:"none",duration:0,onUpdate:()=>{x.progress(I.x),y.progress(I.y)}})}document.addEventListener("mousemove",function(v){let w=v.clientX/window.innerWidth,L=v.clientY/window.innerHeight;g(w,L)})}()};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script Loaded"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let t=document.querySelectorAll("[data-ix-reset]"),e=function(){let n='[data-ix-team="wrap"]',o='[data-ix-team="sticky"]',i='[data-ix-team="top-list"]',a='[data-ix-team="bottom-list"]',c=gsap.utils.toArray(n);c.length!==0&&c.forEach(l=>{let h=l.querySelector(o),m=l.querySelectorAll(i),p=l.querySelectorAll(a);if(!l||!h)return;let d=m[0].offsetWidth;l.style.height=d+"px",ScrollTrigger.refresh();let b=gsap.timeline({scrollTrigger:{trigger:l,start:"top top",end:"98% bottom",scrub:.5},defaults:{duration:1,ease:"power1.out"}}).set(h,{overflow:"hidden"}).to(m,{xPercent:-50,ease:"none"}).to(p,{xPercent:50,ease:"none"},"<")})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},o=>{let{isMobile:i,isTablet:a,isDesktop:c,reduceMotion:l}=o.conditions;wt(o),Ot(o),e(o),Q(o),Tt(o),l||Q(o),c&&At()})})(),t.forEach(function(n){n.addEventListener("click",function(o){ScrollTrigger.refresh()})})});})();
