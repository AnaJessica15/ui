function R(){}const Pt=t=>t;function un(t,e){for(const n in e)t[n]=e[n];return t}function xe(t){return t()}function Oe(){return Object.create(null)}function z(t){t.forEach(xe)}function Z(t){return typeof t=="function"}function pn(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let jt;function Xr(t,e){return jt||(jt=document.createElement("a")),jt.href=e,t===jt.href}function dn(t){return Object.keys(t).length===0}function $e(t,...e){if(t==null)return R;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yr(t,e,n){t.$$.on_destroy.push($e(e,n))}function Gr(t,e,n,r){if(t){const i=Ee(t,e,n,r);return t[0](i)}}function Ee(t,e,n,r){return t[1]&&r?un(n.ctx.slice(),t[1](r(e))):n.ctx}function Jr(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],o=Math.max(e.dirty.length,i.length);for(let c=0;c<o;c+=1)a[c]=e.dirty[c]|i[c];return a}return e.dirty|i}return e.dirty}function Qr(t,e,n,r,i,a){if(i){const o=Ee(e,n,r,a);t.p(o,i)}}function Zr(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Kr(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ti(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function ei(t){return t==null?"":t}function ni(t,e,n){return t.set(n),e}function ri(t){return t&&Z(t.destroy)?t.destroy:R}const Ae=typeof window!="undefined";let Gt=Ae?()=>window.performance.now():()=>Date.now(),Jt=Ae?t=>requestAnimationFrame(t):R;const K=new Set;function Ce(t){K.forEach(e=>{e.c(t)||(K.delete(e),e.f())}),K.size!==0&&Jt(Ce)}function Qt(t){let e;return K.size===0&&Jt(Ce),{promise:new Promise(n=>{K.add(e={c:t,f:n})}),abort(){K.delete(e)}}}let Dt=!1;function vn(){Dt=!0}function hn(){Dt=!1}function mn(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function gn(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let f=0;f<e.length;f++){const l=e[f];l.claim_order!==void 0&&s.push(l)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const f=e[s].claim_order,l=(i>0&&e[n[i]].claim_order<=f?i+1:mn(1,i,p=>e[n[p]].claim_order,f))-1;r[s]=n[l]+1;const d=l+1;n[d]=s,i=Math.max(d,i)}const a=[],o=[];let c=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(a.push(e[s-1]);c>=s;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);a.reverse(),o.sort((s,f)=>s.claim_order-f.claim_order);for(let s=0,f=0;s<o.length;s++){for(;f<a.length&&o[s].claim_order>=a[f].claim_order;)f++;const l=f<a.length?a[f]:null;t.insertBefore(o[s],l)}}function yn(t,e){t.appendChild(e)}function ke(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _n(t){const e=Zt("style");return bn(ke(t),e),e.sheet}function bn(t,e){yn(t.head||t,e)}function wn(t,e){if(Dt){for(gn(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xn(t,e,n){t.insertBefore(e,n||null)}function On(t,e,n){Dt&&!n?wn(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Rt(t){t.parentNode.removeChild(t)}function ii(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Zt(t){return document.createElement(t)}function $n(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Kt(t){return document.createTextNode(t)}function oi(){return Kt(" ")}function ai(){return Kt("")}function si(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ci(t){return function(e){return e.preventDefault(),t.call(this,e)}}function En(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fi(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:En(t,r,e[r])}function li(t,e,n){const r=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function An(t){return Array.from(t.childNodes)}function Pe(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function je(t,e,n,r,i=!1){Pe(t);const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,i||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const s=n(c);return s===void 0?t.splice(o,1):t[o]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function De(t,e,n,r){return je(t,i=>i.nodeName===e,i=>{const a=[];for(let o=0;o<i.attributes.length;o++){const c=i.attributes[o];n[c.name]||a.push(c.name)}a.forEach(o=>i.removeAttribute(o))},()=>r(e))}function ui(t,e,n){return De(t,e,n,Zt)}function pi(t,e,n){return De(t,e,n,$n)}function Cn(t,e){return je(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Kt(e),!0)}function di(t){return Cn(t," ")}function Re(t,e,n){for(let r=n;r<t.length;r+=1){const i=t[r];if(i.nodeType===8&&i.textContent.trim()===e)return r}return t.length}function vi(t){const e=Re(t,"HTML_TAG_START",0),n=Re(t,"HTML_TAG_END",e);if(e===n)return new Te;Pe(t);const r=t.splice(e,n-e+1);Rt(r[0]),Rt(r[r.length-1]);const i=r.slice(1,r.length-1);for(const a of i)a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Te(i)}function hi(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function mi(t,e){t.value=e==null?"":e}function gi(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function yi(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function _i(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];r.selected=~e.indexOf(r.__value)}}function bi(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function wi(t,e,n){t.classList[n?"add":"remove"](e)}function Se(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function xi(t,e=document.body){return Array.from(e.querySelectorAll(t))}class kn{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.e=Zt(n.nodeName),this.t=n,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)xn(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(Rt)}}class Te extends kn{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)On(this.t,this.n[n],e)}}const St=new Map;let Tt=0;function Pn(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jn(t,e){const n={stylesheet:_n(e),rules:{}};return St.set(t,n),n}function Bt(t,e,n,r,i,a,o,c=0){const s=16.666/r;let f=`{
`;for(let m=0;m<=1;m+=s){const _=e+(n-e)*a(m);f+=m*100+`%{${o(_,1-_)}}
`}const l=f+`100% {${o(n,1-n)}}
}`,d=`__svelte_${Pn(l)}_${c}`,p=ke(t),{stylesheet:u,rules:v}=St.get(p)||jn(p,t);v[d]||(v[d]=!0,u.insertRule(`@keyframes ${d} ${l}`,u.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${r}ms linear ${i}ms 1 both`,Tt+=1,d}function Mt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),Tt-=i,Tt||Dn())}function Dn(){Jt(()=>{Tt||(St.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),St.clear())})}let dt;function vt(t){dt=t}function tt(){if(!dt)throw new Error("Function called outside component initialization");return dt}function Oi(t){tt().$$.before_update.push(t)}function $i(t){tt().$$.on_mount.push(t)}function Ei(t){tt().$$.after_update.push(t)}function Ai(){const t=tt();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Se(e,n);r.slice().forEach(a=>{a.call(t,i)})}}}function Ci(t,e){tt().$$.context.set(t,e)}function ki(t){return tt().$$.context.get(t)}function Pi(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const ht=[],Be=[],Lt=[],te=[],Me=Promise.resolve();let ee=!1;function Le(){ee||(ee=!0,Me.then(Ne))}function ji(){return Le(),Me}function et(t){Lt.push(t)}function Di(t){te.push(t)}const ne=new Set;let Nt=0;function Ne(){const t=dt;do{for(;Nt<ht.length;){const e=ht[Nt];Nt++,vt(e),Rn(e.$$)}for(vt(null),ht.length=0,Nt=0;Be.length;)Be.pop()();for(let e=0;e<Lt.length;e+=1){const n=Lt[e];ne.has(n)||(ne.add(n),n())}Lt.length=0}while(ht.length);for(;te.length;)te.pop()();ee=!1,ne.clear(),vt(t)}function Rn(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}let mt;function re(){return mt||(mt=Promise.resolve(),mt.then(()=>{mt=null})),mt}function G(t,e,n){t.dispatchEvent(Se(`${e?"intro":"outro"}${n}`))}const Ft=new Set;let F;function Ri(){F={r:0,c:[],p:F}}function Si(){F.r||z(F.c),F=F.p}function Fe(t,e){t&&t.i&&(Ft.delete(t),t.i(e))}function Sn(t,e,n,r){if(t&&t.o){if(Ft.has(t))return;Ft.add(t),F.c.push(()=>{Ft.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ie={duration:0};function Ti(t,e,n){let r=e(t,n),i=!1,a,o,c=0;function s(){a&&Mt(t,a)}function f(){const{delay:d=0,duration:p=300,easing:u=Pt,tick:v=R,css:h}=r||ie;h&&(a=Bt(t,0,1,p,d,u,h,c++)),v(0,1);const m=Gt()+d,_=m+p;o&&o.abort(),i=!0,et(()=>G(t,!0,"start")),o=Qt(w=>{if(i){if(w>=_)return v(1,0),G(t,!0,"end"),s(),i=!1;if(w>=m){const x=u((w-m)/p);v(x,1-x)}}return i})}let l=!1;return{start(){l||(l=!0,Mt(t),Z(r)?(r=r(),re().then(f)):f())},invalidate(){l=!1},end(){i&&(s(),i=!1)}}}function Bi(t,e,n){let r=e(t,n),i=!0,a;const o=F;o.r+=1;function c(){const{delay:s=0,duration:f=300,easing:l=Pt,tick:d=R,css:p}=r||ie;p&&(a=Bt(t,1,0,f,s,l,p));const u=Gt()+s,v=u+f;et(()=>G(t,!1,"start")),Qt(h=>{if(i){if(h>=v)return d(0,1),G(t,!1,"end"),--o.r||z(o.c),!1;if(h>=u){const m=l((h-u)/f);d(1-m,m)}}return i})}return Z(r)?re().then(()=>{r=r(),c()}):c(),{end(s){s&&r.tick&&r.tick(1,0),i&&(a&&Mt(t,a),i=!1)}}}function Mi(t,e,n,r){let i=e(t,n),a=r?0:1,o=null,c=null,s=null;function f(){s&&Mt(t,s)}function l(p,u){const v=p.b-a;return u*=Math.abs(v),{a,b:p.b,d:v,duration:u,start:p.start,end:p.start+u,group:p.group}}function d(p){const{delay:u=0,duration:v=300,easing:h=Pt,tick:m=R,css:_}=i||ie,w={start:Gt()+u,b:p};p||(w.group=F,F.r+=1),o||c?c=w:(_&&(f(),s=Bt(t,a,p,v,u,h,_)),p&&m(0,1),o=l(w,v),et(()=>G(t,p,"start")),Qt(x=>{if(c&&x>c.start&&(o=l(c,v),c=null,G(t,o.b,"start"),_&&(f(),s=Bt(t,a,o.b,o.duration,0,h,i.css))),o){if(x>=o.end)m(a=o.b,1-a),G(t,o.b,"end"),c||(o.b?f():--o.group.r||z(o.group.c)),o=null;else if(x>=o.start){const y=x-o.start;a=o.a+o.d*h(y/o.duration),m(a,1-a)}}return!!(o||c)}))}return{run(p){Z(i)?re().then(()=>{i=i(),d(p)}):d(p)},end(){f(),o=c=null}}}const Li=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ni(t,e){Sn(t,1,1,()=>{e.delete(t.key)})}function Fi(t,e,n,r,i,a,o,c,s,f,l,d){let p=t.length,u=a.length,v=p;const h={};for(;v--;)h[t[v].key]=v;const m=[],_=new Map,w=new Map;for(v=u;v--;){const g=d(i,a,v),b=n(g);let O=o.get(b);O?r&&O.p(g,e):(O=f(b,g),O.c()),_.set(b,m[v]=O),b in h&&w.set(b,Math.abs(v-h[b]))}const x=new Set,y=new Set;function $(g){Fe(g,1),g.m(c,l),o.set(g.key,g),l=g.first,u--}for(;p&&u;){const g=m[u-1],b=t[p-1],O=g.key,E=b.key;g===b?(l=g.first,p--,u--):_.has(E)?!o.has(O)||x.has(O)?$(g):y.has(E)?p--:w.get(O)>w.get(E)?(y.add(O),$(g)):(x.add(E),p--):(s(b,o),p--)}for(;p--;){const g=t[p];_.has(g.key)||s(g,o)}for(;u;)$(m[u-1]);return m}function Hi(t,e){const n={},r={},i={$$scope:1};let a=t.length;for(;a--;){const o=t[a],c=e[a];if(c){for(const s in o)s in c||(r[s]=1);for(const s in c)i[s]||(n[s]=c[s],i[s]=1);t[a]=c}else for(const s in o)i[s]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Wi(t){return typeof t=="object"&&t!==null?t:{}}function qi(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Ii(t){t&&t.c()}function zi(t,e){t&&t.l(e)}function Tn(t,e,n,r){const{fragment:i,on_mount:a,on_destroy:o,after_update:c}=t.$$;i&&i.m(e,n),r||et(()=>{const s=a.map(xe).filter(Z);o?o.push(...s):z(s),t.$$.on_mount=[]}),c.forEach(et)}function Bn(t,e){const n=t.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mn(t,e){t.$$.dirty[0]===-1&&(ht.push(t),Le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ui(t,e,n,r,i,a,o,c=[-1]){const s=dt;vt(t);const f=t.$$={fragment:null,ctx:null,props:a,update:R,not_equal:i,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Oe(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};o&&o(f.root);let l=!1;if(f.ctx=n?n(t,e.props||{},(d,p,...u)=>{const v=u.length?u[0]:p;return f.ctx&&i(f.ctx[d],f.ctx[d]=v)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](v),l&&Mn(t,d)),p}):[],f.update(),l=!0,z(f.before_update),f.fragment=r?r(f.ctx):!1,e.target){if(e.hydrate){vn();const d=An(e.target);f.fragment&&f.fragment.l(d),d.forEach(Rt)}else f.fragment&&f.fragment.c();e.intro&&Fe(t.$$.fragment),Tn(t,e.target,e.anchor,e.customElement),hn(),Ne()}vt(s)}class Vi{$destroy(){Bn(this,1),this.$destroy=R}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!dn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt=[];function Ln(t,e){return{subscribe:Nn(t,e).subscribe}}function Nn(t,e=R){let n;const r=new Set;function i(c){if(pn(t,c)&&(t=c,n)){const s=!nt.length;for(const f of r)f[1](),nt.push(f,t);if(s){for(let f=0;f<nt.length;f+=2)nt[f][0](nt[f+1]);nt.length=0}}}function a(c){i(c(t))}function o(c,s=R){const f=[c,s];return r.add(f),r.size===1&&(n=e(i)||R),c(t),()=>{r.delete(f),r.size===0&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function Xi(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,a=e.length<2;return Ln(n,o=>{let c=!1;const s=[];let f=0,l=R;const d=()=>{if(f)return;l();const u=e(r?s[0]:s,o);a?o(u):l=Z(u)?u:R},p=i.map((u,v)=>$e(u,h=>{s[v]=h,f&=~(1<<v),c&&d()},()=>{f|=1<<v}));return c=!0,d(),function(){z(p),l()}})}/*! js-cookie v3.0.1 | MIT */function Ht(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var Fn={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function oe(t,e){function n(i,a,o){if(typeof document!="undefined"){o=Ht({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var s in o)!o[s]||(c+="; "+s,o[s]!==!0&&(c+="="+o[s].split(";")[0]));return document.cookie=i+"="+t.write(a,i)+c}}function r(i){if(!(typeof document=="undefined"||arguments.length&&!i)){for(var a=document.cookie?document.cookie.split("; "):[],o={},c=0;c<a.length;c++){var s=a[c].split("="),f=s.slice(1).join("=");try{var l=decodeURIComponent(s[0]);if(o[l]=t.read(f,l),i===l)break}catch{}}return i?o[i]:o}}return Object.create({set:n,get:r,remove:function(i,a){n(i,"",Ht({},a,{expires:-1}))},withAttributes:function(i){return oe(this.converter,Ht({},this.attributes,i))},withConverter:function(i){return oe(Ht({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var Yi=oe(Fn,{path:"/"});function Gi(t){return t*t*t}function Hn(t){const e=t-1;return e*e*e+1}function Ji(t,{delay:e=0,duration:n=400,easing:r=Pt}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*i}`}}function Qi(t,{delay:e=0,duration:n=400,easing:r=Hn}={}){const i=getComputedStyle(t),a=+i.opacity,o=parseFloat(i.height),c=parseFloat(i.paddingTop),s=parseFloat(i.paddingBottom),f=parseFloat(i.marginTop),l=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),p=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*a};height: ${u*o}px;padding-top: ${u*c}px;padding-bottom: ${u*s}px;margin-top: ${u*f}px;margin-bottom: ${u*l}px;border-top-width: ${u*d}px;border-bottom-width: ${u*p}px;`}}var k="top",S="bottom",T="right",P="left",ae="auto",gt=[k,S,T,P],rt="start",yt="end",Wn="clippingParents",He="viewport",_t="popper",qn="reference",We=gt.reduce(function(t,e){return t.concat([e+"-"+rt,e+"-"+yt])},[]),qe=[].concat(gt,[ae]).reduce(function(t,e){return t.concat([e,e+"-"+rt,e+"-"+yt])},[]),In="beforeRead",zn="read",Un="afterRead",Vn="beforeMain",Xn="main",Yn="afterMain",Gn="beforeWrite",Jn="write",Qn="afterWrite",Zn=[In,zn,Un,Vn,Xn,Yn,Gn,Jn,Qn];function H(t){return t?(t.nodeName||"").toLowerCase():null}function N(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function it(t){var e=N(t).Element;return t instanceof e||t instanceof Element}function B(t){var e=N(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ie(t){if(typeof ShadowRoot=="undefined")return!1;var e=N(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Kn(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},a=e.elements[n];!B(a)||!H(a)||(Object.assign(a.style,r),Object.keys(i).forEach(function(o){var c=i[o];c===!1?a.removeAttribute(o):a.setAttribute(o,c===!0?"":c)}))})}function tr(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],a=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),c=o.reduce(function(s,f){return s[f]="",s},{});!B(i)||!H(i)||(Object.assign(i.style,c),Object.keys(a).forEach(function(s){i.removeAttribute(s)}))})}}var er={name:"applyStyles",enabled:!0,phase:"write",fn:Kn,effect:tr,requires:["computeStyles"]};function W(t){return t.split("-")[0]}var J=Math.max,Wt=Math.min,ot=Math.round;function at(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),r=1,i=1;if(B(t)&&e){var a=t.offsetHeight,o=t.offsetWidth;o>0&&(r=ot(n.width)/o||1),a>0&&(i=ot(n.height)/a||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function se(t){var e=at(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function ze(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Ie(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(t){return N(t).getComputedStyle(t)}function nr(t){return["table","td","th"].indexOf(H(t))>=0}function U(t){return((it(t)?t.ownerDocument:t.document)||window.document).documentElement}function qt(t){return H(t)==="html"?t:t.assignedSlot||t.parentNode||(Ie(t)?t.host:null)||U(t)}function Ue(t){return!B(t)||q(t).position==="fixed"?null:t.offsetParent}function rr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&B(t)){var r=q(t);if(r.position==="fixed")return null}for(var i=qt(t);B(i)&&["html","body"].indexOf(H(i))<0;){var a=q(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function bt(t){for(var e=N(t),n=Ue(t);n&&nr(n)&&q(n).position==="static";)n=Ue(n);return n&&(H(n)==="html"||H(n)==="body"&&q(n).position==="static")?e:n||rr(t)||e}function ce(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function wt(t,e,n){return J(t,Wt(e,n))}function ir(t,e,n){var r=wt(t,e,n);return r>n?n:r}function Ve(){return{top:0,right:0,bottom:0,left:0}}function Xe(t){return Object.assign({},Ve(),t)}function Ye(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var or=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Xe(typeof e!="number"?e:Ye(e,gt))};function ar(t){var e,n=t.state,r=t.name,i=t.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,c=W(n.placement),s=ce(c),f=[P,T].indexOf(c)>=0,l=f?"height":"width";if(!(!a||!o)){var d=or(i.padding,n),p=se(a),u=s==="y"?k:P,v=s==="y"?S:T,h=n.rects.reference[l]+n.rects.reference[s]-o[s]-n.rects.popper[l],m=o[s]-n.rects.reference[s],_=bt(a),w=_?s==="y"?_.clientHeight||0:_.clientWidth||0:0,x=h/2-m/2,y=d[u],$=w-p[l]-d[v],g=w/2-p[l]/2+x,b=wt(y,g,$),O=s;n.modifiersData[r]=(e={},e[O]=b,e.centerOffset=b-g,e)}}function sr(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!ze(e.elements.popper,i)||(e.elements.arrow=i))}var cr={name:"arrow",enabled:!0,phase:"main",fn:ar,effect:sr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function st(t){return t.split("-")[1]}var fr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function lr(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:ot(e*i)/i||0,y:ot(n*i)/i||0}}function Ge(t){var e,n=t.popper,r=t.popperRect,i=t.placement,a=t.variation,o=t.offsets,c=t.position,s=t.gpuAcceleration,f=t.adaptive,l=t.roundOffsets,d=t.isFixed,p=o.x,u=p===void 0?0:p,v=o.y,h=v===void 0?0:v,m=typeof l=="function"?l({x:u,y:h}):{x:u,y:h};u=m.x,h=m.y;var _=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),x=P,y=k,$=window;if(f){var g=bt(n),b="clientHeight",O="clientWidth";if(g===N(n)&&(g=U(n),q(g).position!=="static"&&c==="absolute"&&(b="scrollHeight",O="scrollWidth")),g=g,i===k||(i===P||i===T)&&a===yt){y=S;var E=d&&$.visualViewport?$.visualViewport.height:g[b];h-=E-r.height,h*=s?1:-1}if(i===P||(i===k||i===S)&&a===yt){x=T;var A=d&&$.visualViewport?$.visualViewport.width:g[O];u-=A-r.width,u*=s?1:-1}}var C=Object.assign({position:c},f&&fr),M=l===!0?lr({x:u,y:h}):{x:u,y:h};if(u=M.x,h=M.y,s){var j;return Object.assign({},C,(j={},j[y]=w?"0":"",j[x]=_?"0":"",j.transform=($.devicePixelRatio||1)<=1?"translate("+u+"px, "+h+"px)":"translate3d("+u+"px, "+h+"px, 0)",j))}return Object.assign({},C,(e={},e[y]=w?h+"px":"",e[x]=_?u+"px":"",e.transform="",e))}function ur(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,a=n.adaptive,o=a===void 0?!0:a,c=n.roundOffsets,s=c===void 0?!0:c,f={placement:W(e.placement),variation:st(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ge(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ge(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var pr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ur,data:{}},It={passive:!0};function dr(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,a=i===void 0?!0:i,o=r.resize,c=o===void 0?!0:o,s=N(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",n.update,It)}),c&&s.addEventListener("resize",n.update,It),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",n.update,It)}),c&&s.removeEventListener("resize",n.update,It)}}var vr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dr,data:{}},hr={left:"right",right:"left",bottom:"top",top:"bottom"};function zt(t){return t.replace(/left|right|bottom|top/g,function(e){return hr[e]})}var mr={start:"end",end:"start"};function Je(t){return t.replace(/start|end/g,function(e){return mr[e]})}function fe(t){var e=N(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function le(t){return at(U(t)).left+fe(t).scrollLeft}function gr(t){var e=N(t),n=U(t),r=e.visualViewport,i=n.clientWidth,a=n.clientHeight,o=0,c=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,c=r.offsetTop)),{width:i,height:a,x:o+le(t),y:c}}function yr(t){var e,n=U(t),r=fe(t),i=(e=t.ownerDocument)==null?void 0:e.body,a=J(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=J(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-r.scrollLeft+le(t),s=-r.scrollTop;return q(i||n).direction==="rtl"&&(c+=J(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:o,x:c,y:s}}function ue(t){var e=q(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Qe(t){return["html","body","#document"].indexOf(H(t))>=0?t.ownerDocument.body:B(t)&&ue(t)?t:Qe(qt(t))}function xt(t,e){var n;e===void 0&&(e=[]);var r=Qe(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),a=N(r),o=i?[a].concat(a.visualViewport||[],ue(r)?r:[]):r,c=e.concat(o);return i?c:c.concat(xt(qt(o)))}function pe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function _r(t){var e=at(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Ze(t,e){return e===He?pe(gr(t)):it(e)?_r(e):pe(yr(U(t)))}function br(t){var e=xt(qt(t)),n=["absolute","fixed"].indexOf(q(t).position)>=0,r=n&&B(t)?bt(t):t;return it(r)?e.filter(function(i){return it(i)&&ze(i,r)&&H(i)!=="body"}):[]}function wr(t,e,n){var r=e==="clippingParents"?br(t):[].concat(e),i=[].concat(r,[n]),a=i[0],o=i.reduce(function(c,s){var f=Ze(t,s);return c.top=J(f.top,c.top),c.right=Wt(f.right,c.right),c.bottom=Wt(f.bottom,c.bottom),c.left=J(f.left,c.left),c},Ze(t,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ke(t){var e=t.reference,n=t.element,r=t.placement,i=r?W(r):null,a=r?st(r):null,o=e.x+e.width/2-n.width/2,c=e.y+e.height/2-n.height/2,s;switch(i){case k:s={x:o,y:e.y-n.height};break;case S:s={x:o,y:e.y+e.height};break;case T:s={x:e.x+e.width,y:c};break;case P:s={x:e.x-n.width,y:c};break;default:s={x:e.x,y:e.y}}var f=i?ce(i):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case rt:s[f]=s[f]-(e[l]/2-n[l]/2);break;case yt:s[f]=s[f]+(e[l]/2-n[l]/2);break}}return s}function Ot(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,a=n.boundary,o=a===void 0?Wn:a,c=n.rootBoundary,s=c===void 0?He:c,f=n.elementContext,l=f===void 0?_t:f,d=n.altBoundary,p=d===void 0?!1:d,u=n.padding,v=u===void 0?0:u,h=Xe(typeof v!="number"?v:Ye(v,gt)),m=l===_t?qn:_t,_=t.rects.popper,w=t.elements[p?m:l],x=wr(it(w)?w:w.contextElement||U(t.elements.popper),o,s),y=at(t.elements.reference),$=Ke({reference:y,element:_,strategy:"absolute",placement:i}),g=pe(Object.assign({},_,$)),b=l===_t?g:y,O={top:x.top-b.top+h.top,bottom:b.bottom-x.bottom+h.bottom,left:x.left-b.left+h.left,right:b.right-x.right+h.right},E=t.modifiersData.offset;if(l===_t&&E){var A=E[i];Object.keys(O).forEach(function(C){var M=[T,S].indexOf(C)>=0?1:-1,j=[k,S].indexOf(C)>=0?"y":"x";O[C]+=A[j]*M})}return O}function xr(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,c=n.flipVariations,s=n.allowedAutoPlacements,f=s===void 0?qe:s,l=st(r),d=l?c?We:We.filter(function(v){return st(v)===l}):gt,p=d.filter(function(v){return f.indexOf(v)>=0});p.length===0&&(p=d);var u=p.reduce(function(v,h){return v[h]=Ot(t,{placement:h,boundary:i,rootBoundary:a,padding:o})[W(h)],v},{});return Object.keys(u).sort(function(v,h){return u[v]-u[h]})}function Or(t){if(W(t)===ae)return[];var e=zt(t);return[Je(t),e,Je(e)]}function $r(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0?!0:i,o=n.altAxis,c=o===void 0?!0:o,s=n.fallbackPlacements,f=n.padding,l=n.boundary,d=n.rootBoundary,p=n.altBoundary,u=n.flipVariations,v=u===void 0?!0:u,h=n.allowedAutoPlacements,m=e.options.placement,_=W(m),w=_===m,x=s||(w||!v?[zt(m)]:Or(m)),y=[m].concat(x).reduce(function(Q,I){return Q.concat(W(I)===ae?xr(e,{placement:I,boundary:l,rootBoundary:d,padding:f,flipVariations:v,allowedAutoPlacements:h}):I)},[]),$=e.rects.reference,g=e.rects.popper,b=new Map,O=!0,E=y[0],A=0;A<y.length;A++){var C=y[A],M=W(C),j=st(C)===rt,ft=[k,S].indexOf(M)>=0,lt=ft?"width":"height",D=Ot(e,{placement:C,boundary:l,rootBoundary:d,altBoundary:p,padding:f}),L=ft?j?T:P:j?S:k;$[lt]>g[lt]&&(L=zt(L));var $t=zt(L),V=[];if(a&&V.push(D[M]<=0),c&&V.push(D[L]<=0,D[$t]<=0),V.every(function(Q){return Q})){E=C,O=!1;break}b.set(C,V)}if(O)for(var Et=v?3:1,Ut=function(I){var pt=y.find(function(Ct){var X=b.get(Ct);if(X)return X.slice(0,I).every(function(Vt){return Vt})});if(pt)return E=pt,"break"},ut=Et;ut>0;ut--){var At=Ut(ut);if(At==="break")break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}}var Er={name:"flip",enabled:!0,phase:"main",fn:$r,requiresIfExists:["offset"],data:{_skip:!1}};function tn(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function en(t){return[k,T,S,P].some(function(e){return t[e]>=0})}function Ar(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,a=e.modifiersData.preventOverflow,o=Ot(e,{elementContext:"reference"}),c=Ot(e,{altBoundary:!0}),s=tn(o,r),f=tn(c,i,a),l=en(s),d=en(f);e.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var Cr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ar};function kr(t,e,n){var r=W(t),i=[P,k].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=a[0],c=a[1];return o=o||0,c=(c||0)*i,[P,T].indexOf(r)>=0?{x:c,y:o}:{x:o,y:c}}function Pr(t){var e=t.state,n=t.options,r=t.name,i=n.offset,a=i===void 0?[0,0]:i,o=qe.reduce(function(l,d){return l[d]=kr(d,e.rects,a),l},{}),c=o[e.placement],s=c.x,f=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=f),e.modifiersData[r]=o}var jr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Pr};function Dr(t){var e=t.state,n=t.name;e.modifiersData[n]=Ke({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Rr={name:"popperOffsets",enabled:!0,phase:"read",fn:Dr,data:{}};function Sr(t){return t==="x"?"y":"x"}function Tr(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,a=i===void 0?!0:i,o=n.altAxis,c=o===void 0?!1:o,s=n.boundary,f=n.rootBoundary,l=n.altBoundary,d=n.padding,p=n.tether,u=p===void 0?!0:p,v=n.tetherOffset,h=v===void 0?0:v,m=Ot(e,{boundary:s,rootBoundary:f,padding:d,altBoundary:l}),_=W(e.placement),w=st(e.placement),x=!w,y=ce(_),$=Sr(y),g=e.modifiersData.popperOffsets,b=e.rects.reference,O=e.rects.popper,E=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,A=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(!!g){if(a){var j,ft=y==="y"?k:P,lt=y==="y"?S:T,D=y==="y"?"height":"width",L=g[y],$t=L+m[ft],V=L-m[lt],Et=u?-O[D]/2:0,Ut=w===rt?b[D]:O[D],ut=w===rt?-O[D]:-b[D],At=e.elements.arrow,Q=u&&At?se(At):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ve(),pt=I[ft],Ct=I[lt],X=wt(0,b[D],Q[D]),Vt=x?b[D]/2-Et-X-pt-A.mainAxis:Ut-X-pt-A.mainAxis,on=x?-b[D]/2+Et+X+Ct+A.mainAxis:ut+X+Ct+A.mainAxis,Xt=e.elements.arrow&&bt(e.elements.arrow),an=Xt?y==="y"?Xt.clientTop||0:Xt.clientLeft||0:0,de=(j=C==null?void 0:C[y])!=null?j:0,sn=L+Vt-de-an,cn=L+on-de,ve=wt(u?Wt($t,sn):$t,L,u?J(V,cn):V);g[y]=ve,M[y]=ve-L}if(c){var he,fn=y==="x"?k:P,ln=y==="x"?S:T,Y=g[$],kt=$==="y"?"height":"width",me=Y+m[fn],ge=Y-m[ln],Yt=[k,P].indexOf(_)!==-1,ye=(he=C==null?void 0:C[$])!=null?he:0,_e=Yt?me:Y-b[kt]-O[kt]-ye+A.altAxis,be=Yt?Y+b[kt]+O[kt]-ye-A.altAxis:ge,we=u&&Yt?ir(_e,Y,be):wt(u?_e:me,Y,u?be:ge);g[$]=we,M[$]=we-Y}e.modifiersData[r]=M}}var Br={name:"preventOverflow",enabled:!0,phase:"main",fn:Tr,requiresIfExists:["offset"]};function Mr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Lr(t){return t===N(t)||!B(t)?fe(t):Mr(t)}function Nr(t){var e=t.getBoundingClientRect(),n=ot(e.width)/t.offsetWidth||1,r=ot(e.height)/t.offsetHeight||1;return n!==1||r!==1}function Fr(t,e,n){n===void 0&&(n=!1);var r=B(e),i=B(e)&&Nr(e),a=U(e),o=at(t,i),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&((H(e)!=="body"||ue(a))&&(c=Lr(e)),B(e)?(s=at(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):a&&(s.x=le(a))),{x:o.left+c.scrollLeft-s.x,y:o.top+c.scrollTop-s.y,width:o.width,height:o.height}}function Hr(t){var e=new Map,n=new Set,r=[];t.forEach(function(a){e.set(a.name,a)});function i(a){n.add(a.name);var o=[].concat(a.requires||[],a.requiresIfExists||[]);o.forEach(function(c){if(!n.has(c)){var s=e.get(c);s&&i(s)}}),r.push(a)}return t.forEach(function(a){n.has(a.name)||i(a)}),r}function Wr(t){var e=Hr(t);return Zn.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function qr(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Ir(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var nn={placement:"bottom",modifiers:[],strategy:"absolute"};function rn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function zr(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,a=i===void 0?nn:i;return function(c,s,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},nn,a),modifiersData:{},elements:{reference:c,popper:s},attributes:{},styles:{}},d=[],p=!1,u={state:l,setOptions:function(_){var w=typeof _=="function"?_(l.options):_;h(),l.options=Object.assign({},a,l.options,w),l.scrollParents={reference:it(c)?xt(c):c.contextElement?xt(c.contextElement):[],popper:xt(s)};var x=Wr(Ir([].concat(r,l.options.modifiers)));return l.orderedModifiers=x.filter(function(y){return y.enabled}),v(),u.update()},forceUpdate:function(){if(!p){var _=l.elements,w=_.reference,x=_.popper;if(!!rn(w,x)){l.rects={reference:Fr(w,bt(x),l.options.strategy==="fixed"),popper:se(x)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(A){return l.modifiersData[A.name]=Object.assign({},A.data)});for(var y=0;y<l.orderedModifiers.length;y++){if(l.reset===!0){l.reset=!1,y=-1;continue}var $=l.orderedModifiers[y],g=$.fn,b=$.options,O=b===void 0?{}:b,E=$.name;typeof g=="function"&&(l=g({state:l,options:O,name:E,instance:u})||l)}}}},update:qr(function(){return new Promise(function(m){u.forceUpdate(),m(l)})}),destroy:function(){h(),p=!0}};if(!rn(c,s))return u;u.setOptions(f).then(function(m){!p&&f.onFirstUpdate&&f.onFirstUpdate(m)});function v(){l.orderedModifiers.forEach(function(m){var _=m.name,w=m.options,x=w===void 0?{}:w,y=m.effect;if(typeof y=="function"){var $=y({state:l,name:_,instance:u,options:x}),g=function(){};d.push($||g)}})}function h(){d.forEach(function(m){return m()}),d=[]}return u}}var Ur=[vr,Rr,pr,er,jr,Er,Br,cr,Cr],Vr=zr({defaultModifiers:Ur});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ct=function(){return ct=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ct.apply(this,arguments)};function Zi(t){var e=null,n,r,i=t,a=function(){n&&r&&(e=Vr(n,r,i))},o=function(){e&&(e.destroy(),e=null)},c=function(f){return n=f,a(),{destroy:function(){o()}}},s=function(f,l){return r=f,i=ct(ct({},t),l),a(),{update:function(d){i=ct(ct({},t),d),e&&i&&e.setOptions(i)},destroy:function(){o()}}};return[c,s,function(){return e}]}export{Li as $,Wi as A,Bn as B,un as C,Nn as D,ji as E,Gr as F,Qr as G,Zr as H,Jr as I,wi as J,wn as K,si as L,R as M,z as N,Yr as O,Pi as P,ii as Q,ni as R,Vi as S,$n as T,pi as U,et as V,Mi as W,Qi as X,ki as Y,Z,ci as _,An as a,Xr as a0,Yi as a1,fi as a2,ri as a3,ti as a4,dt as a5,Kr as a6,xi as a7,ei as a8,Be as a9,Ai as aa,Ti as ab,Bi as ac,Fi as ad,Gi as ae,Ji as af,Ni as ag,Pt as ah,Te as ai,vi as aj,Ln as ak,Zi as al,qi as am,Di as an,li as ao,mi as ap,_i as aq,yi as ar,bi as as,Oi as at,Xi as au,En as b,ui as c,Rt as d,Zt as e,gi as f,On as g,Cn as h,Ui as i,hi as j,oi as k,ai as l,di as m,Ri as n,Sn as o,Si as p,Fe as q,Ci as r,pn as s,Kt as t,Ei as u,$i as v,Ii as w,zi as x,Tn as y,Hi as z};