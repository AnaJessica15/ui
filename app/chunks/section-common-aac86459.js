import{S as q,i as I,s as L,C as u,w as M,x as P,y as T,z,A,q as S,o as N,B,a4 as j,a6 as D,e as h,c as d,a as p,d as m,b as g,g as b,F,t as G,k as x,h as K,m as H,K as C,j as V,G as y,H as J,I as O}from"./vendor-b0fa9227.js";import{S as Q}from"./section-43cb9a7d.js";const R=o=>({}),k=o=>({});function E(o){let t,n;return{c(){t=h("p"),this.h()},l(l){t=d(l,"P",{class:!0});var i=p(t);i.forEach(m),this.h()},h(){g(t,"class",n="text-large "+o[2])},m(l,i){b(l,t,i),t.innerHTML=o[1]},p(l,i){i&2&&(t.innerHTML=l[1]),i&4&&n!==(n="text-large "+l[2])&&g(t,"class",n)},d(l){l&&m(t)}}}function U(o){let t,n,l,i,s,c,a=o[1]&&E(o);const _=o[4].content,r=F(_,o,o[5],k);return{c(){t=h("div"),n=h("h2"),l=G(o[0]),i=x(),a&&a.c(),s=x(),r&&r.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var f=p(t);n=d(f,"H2",{});var v=p(n);l=K(v,o[0]),v.forEach(m),i=H(f),a&&a.l(f),f.forEach(m),s=H(e),r&&r.l(e),this.h()},h(){g(t,"class","text-center")},m(e,f){b(e,t,f),C(t,n),C(n,l),C(t,i),a&&a.m(t,null),b(e,s,f),r&&r.m(e,f),c=!0},p(e,f){(!c||f&1)&&V(l,e[0]),e[1]?a?a.p(e,f):(a=E(e),a.c(),a.m(t,null)):a&&(a.d(1),a=null),r&&r.p&&(!c||f&32)&&y(r,_,e,e[5],c?O(_,e[5],f,R):J(e[5]),k)},i(e){c||(S(r,e),c=!0)},o(e){N(r,e),c=!1},d(e){e&&m(t),a&&a.d(),e&&m(s),r&&r.d(e)}}}function W(o){let t,n;const l=[o[3]];let i={$$slots:{default:[U]},$$scope:{ctx:o}};for(let s=0;s<l.length;s+=1)i=u(i,l[s]);return t=new Q({props:i}),{c(){M(t.$$.fragment)},l(s){P(t.$$.fragment,s)},m(s,c){T(t,s,c),n=!0},p(s,[c]){const a=c&8?z(l,[A(s[3])]):{};c&39&&(a.$$scope={dirty:c,ctx:s}),t.$set(a)},i(s){n||(S(t.$$.fragment,s),n=!0)},o(s){N(t.$$.fragment,s),n=!1},d(s){B(t,s)}}}function X(o,t,n){const l=["title","text","textClassNames"];let i=j(t,l),{$$slots:s={},$$scope:c}=t,{title:a}=t,{text:_=""}=t,{textClassNames:r=""}=t;return o.$$set=e=>{t=u(u({},t),D(e)),n(3,i=j(t,l)),"title"in e&&n(0,a=e.title),"text"in e&&n(1,_=e.text),"textClassNames"in e&&n(2,r=e.textClassNames),"$$scope"in e&&n(5,c=e.$$scope)},[a,_,r,i,s,c]}class w extends q{constructor(t){super();I(this,t,X,W,L,{title:0,text:1,textClassNames:2})}}export{w as S};
