(()=>{(function(){function t(){for(var n=arguments.length,o=0;o<n;o++){var i=o<0||arguments.length<=o?void 0:arguments[o];i.nodeType===1||i.nodeType===11?this.appendChild(i):this.appendChild(document.createTextNode(String(i)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var c=i.length;if(!!n)for(c||n.removeChild(this);c--;){var l=i[c];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),c?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function Ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function et(t,e,r){return e&&tt(t.prototype,e),r&&tt(t,r),t}function It(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?rt(Object(r),!0).forEach(function(n){It(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function it(t,e){return Lt(t)||Nt(t,e)||st(t,e)||Pt()}function C(t){return xt(t)||_t(t)||st(t)||kt()}function xt(t){if(Array.isArray(t))return U(t)}function Lt(t){if(Array.isArray(t))return t}function _t(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Nt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,o=!1,i=void 0;try{for(var a=t[Symbol.iterator](),c;!(n=(c=a.next()).done)&&(r.push(c.value),!(e&&r.length===e));n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return r}}function st(t,e){if(!!t){if(typeof t=="string")return U(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(t,e)}}function U(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function kt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var o=Object.getOwnPropertyDescriptor(Object(t),n),i=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,i||o)},{})}function $(t){return typeof t=="string"}function V(t){return Array.isArray(t)}function F(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=M(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=($(r)||V(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function X(t){var e=$(t)||V(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function G(t){return t!==null&&typeof t=="object"}function Rt(t){return G(t)&&/^(1|3|11)$/.test(t.nodeType)}function jt(t){return typeof t=="number"&&t>-1&&t%1===0}function Wt(t){return G(t)&&jt(t.length)}function H(t){return V(t)?t:t==null?[]:Wt(t)?Array.prototype.slice.call(t):[t]}function ot(t){var e=t;return $(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),H(e).reduce(function(r,n){return[].concat(C(r),C(H(n).filter(Rt)))},[])}var Mt=Object.entries,q="_splittype",N={},Dt=0;function P(t,e,r){if(!G(t))return console.warn("[data.set] owner is not an object"),null;var n=t[q]||(t[q]=++Dt),o=N[n]||(N[n]={});return r===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(N[n]=nt(nt({},o),e)):e!==void 0&&(o[e]=r),r}function D(t,e){var r=G(t)?t[q]:null,n=r&&N[r]||{};return e===void 0?n:n[e]}function at(t){var e=t&&t[q];e&&(delete t[e],delete N[e])}function Ht(){Object.keys(N).forEach(function(t){delete N[t]})}function Bt(){Mt(N).forEach(function(t){var e=it(t,2),r=e[0],n=e[1],o=n.isRoot,i=n.isSplit;(!o||!i)&&(N[r]=null,delete N[r])})}function $t(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var J="\\ud800-\\udfff",ct="\\u0300-\\u036f\\ufe20-\\ufe23",lt="\\u20d0-\\u20f0",ut="\\ufe0e\\ufe0f",Ft="[".concat(J,"]"),z="[".concat(ct).concat(lt,"]"),K="\\ud83c[\\udffb-\\udfff]",qt="(?:".concat(z,"|").concat(K,")"),ft="[^".concat(J,"]"),dt="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",ht="\\u200d",gt="".concat(qt,"?"),vt="[".concat(ut,"]?"),Gt="(?:"+ht+"(?:"+[ft,dt,pt].join("|")+")"+vt+gt+")*",Ut=vt+gt+Gt,zt="(?:".concat(["".concat(ft).concat(z,"?"),z,dt,pt,Ft].join("|"),`
)`),Kt=RegExp("".concat(K,"(?=").concat(K,")|").concat(zt).concat(Ut),"g"),Yt=[ht,J,ct,lt,ut],Vt=RegExp("[".concat(Yt.join(""),"]"));function Xt(t){return t.split("")}function yt(t){return Vt.test(t)}function Jt(t){return t.match(Kt)||[]}function Zt(t){return yt(t)?Jt(t):Xt(t)}function Qt(t){return t==null?"":String(t)}function te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=Qt(t),t&&$(t)&&!e&&yt(t)?Zt(t):t.split(e)}function Y(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var o=e[n],i=$(o)?o.trim():o;i===null||i===""||(n==="children"?r.append.apply(r,C(H(i))):r.setAttribute(n,i))}),r}var Z={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ee(t,e){e=M(Z,e);var r=X(e.types),n=e.tagName,o=t.nodeValue,i=document.createDocumentFragment(),a=[],c=[];return/^\s/.test(o)&&i.append(" "),a=$t(o).reduce(function(l,p,b,v){var d,y;return r.chars&&(y=te(p).map(function(S){var O=Y(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:S});return P(O,"isChar",!0),c=[].concat(C(c),[O]),O})),r.words||r.lines?(d=Y(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?y:p}),P(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),i.appendChild(d)):y.forEach(function(S){i.appendChild(S)}),b<v.length-1&&i.append(" "),r.words?l.concat(d):l},[]),/\s$/.test(o)&&i.append(" "),t.replaceWith(i),{words:a,chars:c}}function mt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return ee(t,e);var o=H(t.childNodes);if(o.length&&(P(t,"isSplit",!0),!D(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,a=t.previousSibling,c=t.textContent||"",l=i?i.textContent:" ",p=a?a.textContent:" ";P(t,{isWordEnd:/\s$/.test(c)||/^\s/.test(l),isWordStart:/^\s/.test(c)||/\s$/.test(p)})}return o.reduce(function(b,v){var d=mt(v,e),y=d.words,S=d.chars;return{words:[].concat(C(b.words),C(y)),chars:[].concat(C(b.chars),C(S))}},n)}function re(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var o=t.offsetParent,i=it(n,2),a=i[0],c=i[1],l=0,p=0;if(o&&o!==document.body){var b=o.getBoundingClientRect();l=b.x+a,p=b.y+c}var v=t.getBoundingClientRect(),d=v.width,y=v.height,S=v.x,O=v.y,I=O+c-p,L=S+a-l;return{width:d,height:y,top:I,left:L}}function bt(t){D(t).isWord?(at(t),t.replaceWith.apply(t,C(t.childNodes))):H(t.children).forEach(function(e){return bt(e)})}var ne=function(){return document.createDocumentFragment()};function oe(t,e,r){var n=X(e.types),o=e.tagName,i=t.getElementsByTagName("*"),a=[],c=[],l=null,p,b,v,d=[],y=t.parentElement,S=t.nextElementSibling,O=ne(),I=window.getComputedStyle(t),L=I.textAlign,k=parseFloat(I.fontSize),W=k*.2;return e.absolute&&(v={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},b=t.offsetWidth,p=t.offsetHeight,P(t,{cssWidth:t.style.width,cssHeight:t.style.height})),H(i).forEach(function(E){var g=E.parentElement===t,h=re(E,g,e,r),m=h.width,w=h.height,_=h.top,x=h.left;/^br$/i.test(E.nodeName)||(n.lines&&g&&((l===null||_-l>=W)&&(l=_,a.push(c=[])),c.push(E)),e.absolute&&P(E,{top:_,left:x,width:m,height:w}))}),y&&y.removeChild(t),n.lines&&(d=a.map(function(E){var g=Y(o,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(L,"; width: 100%;")});P(g,"isLine",!0);var h={height:0,top:1e4};return O.appendChild(g),E.forEach(function(m,w,_){var x=D(m),s=x.isWordEnd,u=x.top,f=x.height,A=_[w+1];h.height=Math.max(h.height,f),h.top=Math.min(h.top,u),g.appendChild(m),s&&D(A).isWordStart&&g.append(" ")}),e.absolute&&P(g,{height:h.height,top:h.top}),g}),n.words||bt(O),t.replaceChildren(O)),e.absolute&&(t.style.width="".concat(t.style.width||b,"px"),t.style.height="".concat(p,"px"),H(i).forEach(function(E){var g=D(E),h=g.isLine,m=g.top,w=g.left,_=g.width,x=g.height,s=D(E.parentElement),u=!h&&s.isLine;E.style.top="".concat(u?m-s.top:m,"px"),E.style.left=h?"".concat(v.left,"px"):"".concat(w-(u?v.left:0),"px"),E.style.height="".concat(x,"px"),E.style.width=h?"".concat(v.width,"px"):"".concat(_,"px"),E.style.position="absolute"})),y&&(S?y.insertBefore(t,S):y.appendChild(t)),d}var B=M(Z,{}),Et=function(){et(t,null,[{key:"clearData",value:function(){Ht()}},{key:"setDefaults",value:function(r){return B=M(B,F(r)),Z}},{key:"revert",value:function(r){ot(r).forEach(function(n){var o=D(n),i=o.isSplit,a=o.html,c=o.cssWidth,l=o.cssHeight;i&&(n.innerHTML=a,n.style.width=c||"",n.style.height=l||"",at(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return N}},{key:"defaults",get:function(){return B},set:function(r){B=M(B,F(r))}}]);function t(e,r){Ct(this,t),this.isSplit=!1,this.settings=M(B,F(r)),this.elements=ot(e),this.split()}return et(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(a){P(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var o=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=M(this.settings,F(r)));var i=X(this.settings.types);i.none||(this.elements.forEach(function(a){P(a,"isRoot",!0);var c=mt(a,n.settings),l=c.words,p=c.chars;n.words=[].concat(C(n.words),C(l)),n.chars=[].concat(C(n.chars),C(p))}),this.elements.forEach(function(a){if(i.lines||n.settings.absolute){var c=oe(a,n.settings,o);n.lines=[].concat(C(n.lines),C(c))}}),this.isSplit=!0,window.scrollTo(o[0],o[1]),Bt())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var T=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},St=function(t,e="lines, words"){if(!!t)return typeSplit=new Et(t,{types:e}),typeSplit},j=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:o,isDesktop:i,reduceMotion:a}=r.conditions;if(n===void 0||o===void 0||i===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let c=`data-ix-${e}-desktop`,l=`data-ix-${e}-tablet`,p=`data-ix-${e}-mobile`;return runMobile=T(!0,t.getAttribute(p)),runTablet=T(!0,t.getAttribute(l)),runDesktop=T(!0,t.getAttribute(c)),!(runMobile===!1&&n||runTablet===!1&&o||runDesktop===!1&&i)};var Ot=function(t){let e="accordion",r='[data-ix-accordion="wrap"]',n='[data-ix-accordion="item"]',o='[data-ix-accordion="top"]',i="data-ix-accordion-first-open",a="data-ix-accordion-one-active",c="data-ix-accordion-keep-one-open",l="data-ix-accordion-hover",p="is-active",b=gsap.utils.toArray(r),v=function(d,y=!0){y===!0?d.classList.add(p):d.classList.remove(p),setTimeout(()=>{ScrollTrigger.refresh()},600)};b.length===0||b===void 0||b.forEach(d=>{if(j(d,e,t)===!1)return;let S=T(!1,d.getAttribute(i)),O=T(!1,d.getAttribute(a)),I=T(!1,d.getAttribute(c)),L=T(!1,d.getAttribute(l)),k=d.querySelectorAll(n);if(k.length===0)return;let W=d.firstElementChild;S&&v(W),L||d.addEventListener("click",function(E){let g=E.target.closest(o);if(!g)return;let h=g.closest(n),m=h.classList.contains(p);m||(O&&k.forEach(w=>{w===h?v(w):v(w,!1)}),O||v(h)),m&&!I&&v(h,!1)}),L&&d.querySelectorAll(n).forEach(g=>{g.addEventListener("mouseover",function(){v(g)}),g.addEventListener("mouseout",function(){v(g,!1)})})})};var wt=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n="data-ix-hoveractive-class",o="is-active";gsap.utils.toArray(r).forEach(a=>{if(!a)return;let c=T(o,a.getAttribute(n));j(a,e,t)!==!1&&(a.addEventListener("mouseover",function(p){a.classList.add(c)}),a.addEventListener("mouseleave",function(p){a.classList.remove(c)}))})};var At=function(){let t='[data-ix-horizontalscroll="wrap"]',e='[data-ix-horizontalscroll="track"]',r='[data-ix-horizontalscroll="sticky"]',n=gsap.utils.toArray(t);n.length!==0&&n.forEach(o=>{let i=o.querySelector(e),a=o.querySelector(r);if(!o||!i||!a)return;let c=gsap.timeline({scrollTrigger:{trigger:o,start:"top top",end:"98% bottom",scrub:.5},defaults:{duration:1,ease:"power1.out"}}).to(i,{xPercent:-100,ease:"none"})})};var Q=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",o="item",i="container",a="stagger",c="rich-text",l="image-wrap",p="image",b="line",v="data-ix-scrollin-toggle-actions",d="data-ix-scrollin-scrub",y="data-ix-scrollin-start",S="data-ix-scrollin-end",O="data-ix-scrollin-direction",I=function(s){let u={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return u.toggleActions=T(u.toggleActions,s.getAttribute(v)),u.scrub=T(u.scrub,s.getAttribute(d)),u.start=T(u.start,s.getAttribute(y)),u.end=T(u.end,s.getAttribute(S)),gsap.timeline({defaults:{duration:.6,ease:"power1.out"},scrollTrigger:{trigger:s,start:u.start,end:u.end,toggleActions:u.toggleActions,scrub:u.scrub}})},L=function(s,u,f={}){let A={opacity:0,y:"2rem"},R={opacity:1,y:"0rem"};return f.stagger===!0&&(R.stagger={each:.1,from:"start"}),u.fromTo(s,A,R)},k=function(s){let u=St(s);if(!u)return;let f=I(s),A=L(u.words,f,{stagger:!0,skew:"large"});f.eventCallback("onComplete",()=>{})},W=function(s){if(!s)return;let u=I(s),f=L(s,u)},E=function(s){let u="right",f,A=T(u,s.getAttribute(O)),R={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"};return A==="left"&&(f=R.left),A==="right"&&(f=R.right),A==="top"&&(f=R.top),A==="bottom"&&(f=R.bottom),f},g=function(s){if(!s)return;let u=E(s),f="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";I(s).fromTo(s,{clipPath:u},{clipPath:f,duration:1})},h=function(s){if(!s)return;let u=E(s),f="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";I(s).fromTo(s,{clipPath:u},{clipPath:f})},m=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);u.length!==0&&u.forEach(f=>{let A=I(f),R=L(f,A)})},w=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);if(u.length===0)return;let f=I(s),A=L(u,f,{stagger:!0})},_=function(s){if(!s)return;let u=gsap.utils.toArray(s.children);u.length!==0&&u.forEach(f=>{let A=f.tagName;["H1","H2","H3","H4","H5","H6"].includes(A)&&k(f),A==="FIGURE"?g(f):W(f)})};gsap.utils.toArray(`[${r}]`).forEach(s=>{if(!s||j(s,e,t)===!1)return;let f=s.getAttribute(r);f===n&&k(s),f===o&&W(s),f===p&&g(s),f===b&&h(s),f===i&&m(s),f===a&&w(s),f===c&&_(s)})};var Tt=function(t){let e="cursor",r='[data-ix-cursor="wrap"]',n='[data-ix-cursor="inner"]',o='[data-ix-cursor="dot"]',i='[data-ix-cursor="hover"]',a='[data-ix-cursor="no-hover"]',c='[data-ix-cursor="checkbox"]',l='[data-ix-cursor="hide"]',p="default-cursor",b="is-hover",v="is-checked",d=document.querySelector(r),y=document.querySelector(n),S=document.querySelector(o),O=document.querySelector(c);if(!d||!y|!O||"ontouchstart"in window||navigator.maxTouchPoints||j(d,e,t)===!1)return;(function(){localStorage.getItem(p)===null?O.click():O.checked=!1})();let k=function(){O.checked===!0&&(d.style.display="flex",localStorage.removeItem(p)),O.checked===!1&&(d.style.display="none",localStorage.setItem(p,"true"))};k(),O.addEventListener("change",k),function(){gsap.utils.toArray(`${i}, :is(a, button):not(${a})`).forEach(m=>{!m||!S||(m.addEventListener("mouseover",function(w){S.classList.add(b)}),m.addEventListener("mouseleave",function(w){S.classList.remove(b)}))})}(),function(){gsap.utils.toArray(`${l}`).forEach(m=>{!m||!S||(m.addEventListener("mouseover",function(w){S.style.opacity=0}),m.addEventListener("mouseleave",function(w){S.style.opacity=1}))})}(),function(){let h={x:0,y:0},m=gsap.timeline({paused:!0,defaults:{ease:"none"}});m.fromTo(y,{x:"-50vw"},{x:"50vw"});let w=gsap.timeline({paused:!0,defaults:{ease:"none"}});w.fromTo(y,{y:"-50vh"},{y:"50vh"});function _(x,s){gsap.to(h,{x,y:s,ease:"none",duration:0,onUpdate:()=>{m.progress(h.x),w.progress(h.y)}})}document.addEventListener("mousemove",function(x){let s=x.clientX/window.innerWidth,u=x.clientY/window.innerHeight;_(s,u)})}()};document.addEventListener("DOMContentLoaded",function(){gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let t=function(){let n='[data-ix-team="wrap"]',o='[data-ix-team="sticky"]',i='[data-ix-team="top-list"]',a='[data-ix-team="bottom-list"]',c=gsap.utils.toArray(n);c.length!==0&&c.forEach(l=>{let p=l.querySelector(o),b=l.querySelectorAll(i),v=l.querySelectorAll(a);if(!l||!p)return;let d=b[0].offsetWidth;l.style.height=d+"px",ScrollTrigger.refresh();let y=gsap.timeline({scrollTrigger:{trigger:l,start:"top top",end:"98% bottom",scrub:.5},defaults:{duration:1,ease:"power1.out"}}).set(p,{overflow:"hidden"}).to(b,{xPercent:-50,ease:"none"}).to(v,{xPercent:50,ease:"none"},"<")})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},o=>{let{isMobile:i,isTablet:a,isDesktop:c,reduceMotion:l}=o.conditions;Ot(o),wt(o),t(o),Q(o),Tt(o),l||Q(o),(c||a)&&At()})})(),document.querySelectorAll("[data-ix-reset]").forEach(function(n){n.addEventListener("click",function(o){ScrollTrigger.refresh()})})});})();
