import{S as K,i as P,s as A,w as L,x as S,y as v,q as b,o as h,B as C,F as T,e as q,t as x,k,c as B,a as E,h as M,d as c,m as w,b as D,g as p,K as J,j as d,G as y,H as z,I as F}from"./vendor-b0fa9227.js";import{S as N}from"./section-43cb9a7d.js";import{L as O}from"./index-6a8481e7.js";const Q=i=>({}),G=i=>({}),R=i=>({}),I=i=>({});function U(i){let t=i[2].text+"",n;return{c(){n=x(t)},l(s){n=M(s,t)},m(s,l){p(s,n,l)},p(s,l){l&4&&t!==(t=s[2].text+"")&&d(n,t)},d(s){s&&c(n)}}}function V(i){let t,n,s,l,r,m,g,o,u;m=new O({props:{variant:"primary",size:"large",href:i[2].href,$$slots:{default:[U]},$$scope:{ctx:i}}});const j=i[3].image,f=T(j,i,i[4],I),H=i[3]["image-mobile"],_=T(H,i,i[4],G);return{c(){t=q("h2"),n=x(i[0]),s=k(),l=q("p"),r=k(),L(m.$$.fragment),g=k(),f&&f.c(),o=k(),_&&_.c(),this.h()},l(e){t=B(e,"H2",{});var a=E(t);n=M(a,i[0]),a.forEach(c),s=w(e),l=B(e,"P",{class:!0});var $=E(l);$.forEach(c),r=w(e),S(m.$$.fragment,e),g=w(e),f&&f.l(e),o=w(e),_&&_.l(e),this.h()},h(){D(l,"class","text-large mb-x-small max-w-4xl mx-auto")},m(e,a){p(e,t,a),J(t,n),p(e,s,a),p(e,l,a),l.innerHTML=i[1],p(e,r,a),v(m,e,a),p(e,g,a),f&&f.m(e,a),p(e,o,a),_&&_.m(e,a),u=!0},p(e,a){(!u||a&1)&&d(n,e[0]),(!u||a&2)&&(l.innerHTML=e[1]);const $={};a&4&&($.href=e[2].href),a&20&&($.$$scope={dirty:a,ctx:e}),m.$set($),f&&f.p&&(!u||a&16)&&y(f,j,e,e[4],u?F(j,e[4],a,R):z(e[4]),I),_&&_.p&&(!u||a&16)&&y(_,H,e,e[4],u?F(H,e[4],a,Q):z(e[4]),G)},i(e){u||(b(m.$$.fragment,e),b(f,e),b(_,e),u=!0)},o(e){h(m.$$.fragment,e),h(f,e),h(_,e),u=!1},d(e){e&&c(t),e&&c(s),e&&c(l),e&&c(r),C(m,e),e&&c(g),f&&f.d(e),e&&c(o),_&&_.d(e)}}}function W(i){let t,n;return t=new N({props:{class:"text-center",$$slots:{default:[V]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(s){S(t.$$.fragment,s)},m(s,l){v(t,s,l),n=!0},p(s,[l]){const r={};l&23&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){h(t.$$.fragment,s),n=!1},d(s){C(t,s)}}}function X(i,t,n){let{$$slots:s={},$$scope:l}=t,{title:r}=t,{text:m}=t,{link:g={href:"/#get-started",text:"Try now"}}=t;return i.$$set=o=>{"title"in o&&n(0,r=o.title),"text"in o&&n(1,m=o.text),"link"in o&&n(2,g=o.link),"$$scope"in o&&n(4,l=o.$$scope)},[r,m,g,s,l]}class te extends K{constructor(t){super();P(this,t,X,W,A,{title:0,text:1,link:2})}}export{te as C};
