import{S as Q,i as x,s as F,e as d,k as b,t as T,ai as ee,c as g,a as v,d as _,m as w,h as C,aj as te,a0 as se,b as u,g as k,K as m,M,C as A,w as B,x as G,y as K,z as le,A as ae,q as E,o as I,B as L,a4 as J,a6 as ie,j as O,l as R,n as ne,p as re,Q as oe}from"./vendor-b0fa9227.js";import{C as ce}from"./carousel-c9c14552.js";import{S as fe}from"./section-43cb9a7d.js";function ue(c){let e,l,t,s,i,a,n,r,o,f,h,P,p,S,z,j;return{c(){e=d("a"),l=d("div"),t=d("div"),s=b(),i=d("div"),a=d("img"),r=b(),o=d("div"),f=d("p"),h=T(c[0]),P=b(),p=d("p"),S=T(c[2]),z=b(),j=new ee,this.h()},l($){e=g($,"A",{href:!0,target:!0,"data-analytics":!0,class:!0,rel:!0});var y=v(e);l=g(y,"DIV",{class:!0});var D=v(l);t=g(D,"DIV",{});var Z=v(t);Z.forEach(_),s=w(D),i=g(D,"DIV",{class:!0});var V=v(i);a=g(V,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),r=w(V),o=g(V,"DIV",{class:!0});var q=v(o);f=g(q,"P",{class:!0});var N=v(f);h=C(N,c[0]),N.forEach(_),P=w(q),p=g(q,"P",{class:!0});var H=v(p);S=C(H,c[2]),z=w(H),j=te(H),H.forEach(_),q.forEach(_),V.forEach(_),D.forEach(_),y.forEach(_),this.h()},h(){se(a.src,n=`/images/avatars/${c[1]}`)||u(a,"src",n),u(a,"alt",c[0]),u(a,"class","w-12 h-12 rounded-full"),u(a,"width","48"),u(a,"height","48"),u(f,"class","mb-0 font-semibold text-small leading-6"),j.a=null,u(p,"class","role svelte-18sw0qh"),u(o,"class","ml-3"),u(i,"class","mt-4 flex"),u(l,"class","testimonial w-96 p-xx-small overflow-hidden rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out svelte-18sw0qh"),u(e,"href",`https://twitter.com/${c[5]}/status/${c[6]}`),u(e,"target","_blank"),u(e,"data-analytics",'{"variant":"social_media","context":"socialproof","label":"'+c[0]+'"}'),u(e,"class","my-2 text-small"),u(e,"rel","noreferrer")},m($,y){k($,e,y),m(e,l),m(l,t),t.innerHTML=c[4],m(l,s),m(l,i),m(i,a),m(i,r),m(i,o),m(o,f),m(f,h),m(o,P),m(o,p),m(p,S),m(p,z),j.m(c[3],p)},p:M,i:M,o:M,d($){$&&_(e)}}}function me(c,e,l){let{testimonial:t}=e;const{name:s,avatar:i,role:a,org:n,text:r,twitterHandle:o,tweetId:f}=t;return c.$$set=h=>{"testimonial"in h&&l(7,t=h.testimonial)},[s,i,a,n,r,o,f,t]}class _e extends Q{constructor(e){super();x(this,e,me,ue,F,{testimonial:7})}}function U(c,e,l){const t=c.slice();return t[5]=e[l],t}function W(c){let e,l;return{c(){e=d("h2"),l=T(c[1])},l(t){e=g(t,"H2",{});var s=v(e);l=C(s,c[1]),s.forEach(_)},m(t,s){k(t,e,s),m(e,l)},p(t,s){s&2&&O(l,t[1])},d(t){t&&_(e)}}}function X(c){let e,l;return{c(){e=d("p"),l=T(c[2]),this.h()},l(t){e=g(t,"P",{class:!0});var s=v(e);l=C(s,c[2]),s.forEach(_),this.h()},h(){u(e,"class","text-large mt-xx-small mb-medium")},m(t,s){k(t,e,s),m(e,l)},p(t,s){s&4&&O(l,t[2])},d(t){t&&_(e)}}}function Y(c){let e,l;return e=new _e({props:{testimonial:c[5]}}),{c(){B(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,s){K(e,t,s),l=!0},p(t,s){const i={};s&1&&(i.testimonial=t[5]),e.$set(i)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function he(c){let e,l,t=c[0],s=[];for(let a=0;a<t.length;a+=1)s[a]=Y(U(c,t,a));const i=a=>I(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=R()},l(a){for(let n=0;n<s.length;n+=1)s[n].l(a);e=R()},m(a,n){for(let r=0;r<s.length;r+=1)s[r].m(a,n);k(a,e,n),l=!0},p(a,n){if(n&1){t=a[0];let r;for(r=0;r<t.length;r+=1){const o=U(a,t,r);s[r]?(s[r].p(o,n),E(s[r],1)):(s[r]=Y(o),s[r].c(),E(s[r],1),s[r].m(e.parentNode,e))}for(ne(),r=t.length;r<s.length;r+=1)i(r);re()}},i(a){if(!l){for(let n=0;n<t.length;n+=1)E(s[n]);l=!0}},o(a){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)I(s[n]);l=!1},d(a){oe(s,a),a&&_(e)}}}function de(c){let e,l,t,s,i,a,n=c[1]&&W(c),r=c[2]&&X(c);return i=new ce({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),{c(){e=d("div"),l=d("div"),n&&n.c(),t=b(),r&&r.c(),s=b(),B(i.$$.fragment),this.h()},l(o){e=g(o,"DIV",{class:!0});var f=v(e);l=g(f,"DIV",{class:!0});var h=v(l);n&&n.l(h),t=w(h),r&&r.l(h),h.forEach(_),s=w(f),G(i.$$.fragment,f),f.forEach(_),this.h()},h(){u(l,"class","text-center"),u(e,"class","row")},m(o,f){k(o,e,f),m(e,l),n&&n.m(l,null),m(l,t),r&&r.m(l,null),m(e,s),K(i,e,null),a=!0},p(o,f){o[1]?n?n.p(o,f):(n=W(o),n.c(),n.m(l,t)):n&&(n.d(1),n=null),o[2]?r?r.p(o,f):(r=X(o),r.c(),r.m(l,null)):r&&(r.d(1),r=null);const h={};f&257&&(h.$$scope={dirty:f,ctx:o}),i.$set(h)},i(o){a||(E(i.$$.fragment,o),a=!0)},o(o){I(i.$$.fragment,o),a=!1},d(o){o&&_(e),n&&n.d(),r&&r.d(),L(i)}}}function ge(c){let e,l;const t=[{class:c[3]},c[4]];let s={$$slots:{default:[de]},$$scope:{ctx:c}};for(let i=0;i<t.length;i+=1)s=A(s,t[i]);return e=new fe({props:s}),{c(){B(e.$$.fragment)},l(i){G(e.$$.fragment,i)},m(i,a){K(e,i,a),l=!0},p(i,[a]){const n=a&24?le(t,[a&8&&{class:i[3]},a&16&&ae(i[4])]):{};a&263&&(n.$$scope={dirty:a,ctx:i}),e.$set(n)},i(i){l||(E(e.$$.fragment,i),l=!0)},o(i){I(e.$$.fragment,i),l=!1},d(i){L(e,i)}}}function ve(c,e,l){const t=["testimonials","title","text","class"];let s=J(e,t),{testimonials:i}=e,{title:a=""}=e,{text:n=""}=e,{class:r=""}=e;return c.$$set=o=>{e=A(A({},e),ie(o)),l(4,s=J(e,t)),"testimonials"in o&&l(0,i=o.testimonials),"title"in o&&l(1,a=o.title),"text"in o&&l(2,n=o.text),"class"in o&&l(3,r=o.class)},[i,a,n,r,s]}class Ee extends Q{constructor(e){super();x(this,e,ve,ge,F,{testimonials:0,title:1,text:2,class:3})}}export{Ee as T};