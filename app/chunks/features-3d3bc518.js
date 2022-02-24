var ue=Object.defineProperty,he=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var Q=(y,t,r)=>t in y?ue(y,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):y[t]=r,K=(y,t)=>{for(var r in t||(t={}))de.call(t,r)&&Q(y,r,t[r]);if(J)for(var r of J(t))fe.call(t,r)&&Q(y,r,t[r]);return y},q=(y,t)=>he(y,me(t));import{S as I,i as M,s as A,T as f,U as g,a as h,d as s,b as e,g as B,K as p,M as k,e as P,k as X,c as T,m as ee,f as b,L as ge,n as te,o as Y,B as re,p as ie,w as oe,q as N,y as le,V as pe,ab as ve,ac as we,t as ye,h as Ce,j as xe,ad as _e,O as ke,v as Ee,x as Fe,ae as ne,af as be,ag as Ge,ah as Se,a9 as Be}from"./vendor-b0fa9227.js";import{r as De}from"./reduce-motion-a393834c.js";const We=`[33mGitpod[39m [34m/Workspace[39m $ cargo install --path . --features=stable
  [33mBlocking[39m waiting for file lock on package cache
[33mInstalling[39m nu v0.28.0 (/workspace/nushell)
  [33mBlocking[39m waiting for file lock on package cache
  [33mUpdating[39m crates.io index
[33mDownloading[39m crates ...
[33mDownloaded[39m byteorder v1.4.3
[33mDownloaded[39m http-client v6.3.5
[33mDownloaded[39m typenum v1.13.0
[33mDownloaded[39m openssl v0.10.33
[33mDownloaded[39m regex-syntax v0.6.23
[33mDownloaded[39m openssl-sys v0.9.61
[33mDownloaded[39m regex v1.4.5
[33mDownloaded[39m ptree v0.3.2
[33mDownloaded[39m byte-unit v4.0.10
[33mDownloaded[39m directories v3.0.1
[33mDownloaded[39m syn v1.0.64
 [33mCompiling[39m libc v0.2.88
 [33mCompiling[39m proc-macro2 v1.0.24
 [33mCompiling[39m unicode-xid v0.2.1
 [33mCompiling[39m syn v1.0.64
 [33mCompiling[39m autocfg v1.0.1
 [33mCompiling[39m cfg-if v1.0.0
 [33mCompiling[39m memchr v2.3.4
 [33mCompiling[39m version_check v0.9.2
 [33mCompiling[39m serde_derive v1.0.124
 [33mCompiling[39m serde v1.0.124
 [33mCompiling[39m value-bag v1.0.0-alpha.6
 [33mCompiling[39m log v0.4.14
 [33mCompiling[39m pkg-config v0.3.19
 [33mCompiling[39m lazy_static v1.4.0
 [33mCompiling[39m itoa v0.4.7
 [33mCompiling[39m byteorder v1.4.3
 [33mCompiling[39m bitflags v1.2.1
 [33mCompiling[39m ryu v1.0.5
 [33mCompiling[39m futures-core v0.3.13
 [33mCompiling[39m regex-syntax v0.6.23
 [33mCompiling[39m slab v0.4.2
 [33mCompiling[39m cfg-if v0.1.10
 [33mCompiling[39m pin-project-lite v0.2.6
 [33mCompiling[39m serde_json v1.0.64
 [33mCompiling[39m hashbrown v0.9.1
 [33mCompiling[39m futures-io v0.3.13
 [33mCompiling[39m fnv v1.0.7
 [33mCompiling[39m proc-macro-hack v0.5.19
 [33mCompiling[39m typenum v1.13.0
 [33mCompiling[39m pin-utils v0.1.0
 [33mCompiling[39m unicode-width v0.1.8
 [33mCompiling[39m getrandom v0.2.2
 [33mCompiling[39m futures v0.1.31
 [33mCompiling[39m futures-sink v0.3.13
 [33mCompiling[39m ppv-lite86 v0.2.10
 [33mCompiling[39m termcolor v1.1.2
 [33mCompiling[39m typed-arena v1.7.0
 [33mCompiling[39m dtoa v0.4.7
 [33mCompiling[39m proc-macro-nested v0.1.7
 [33mCompiling[39m once_cell v1.7.2
 [33mCompiling[39m matches v0.1.8
 [33mCompiling[39m percent-encoding v2.1.0
 [33mCompiling[39m bytes v0.5.6
 [33mCompiling[39m futures-task v0.3.13
 [33mCompiling[39m utf8-width v0.1.4
 [33mCompiling[39m scopeguard v1.1.0
 [33mCompiling[39m glob v0.3.0
 [33mCompiling[39m tinyvec_macros v0.1.0
 [33mCompiling[39m either v1.6.1
 [33mCompiling[39m pin-project-lite v0.1.12
 [33mCompiling[39m remove_dir_all v0.5.3
 [33mCompiling[39m dunce v1.0.1
 [33mCompiling[39m fastrand v1.4.0
 [33mCompiling[39m cache-padded v1.1.1
 [33mCompiling[39m parking v2.0.0
 [33mCompiling[39m waker-fn v1.1.0
 [33mCompiling[39m opaque-debug v0.3.0
 [33mCompiling[39m event-listener v2.5.1
 [33mCompiling[39m yaml-rust v0.4.5
 [33mCompiling[39m futures-executor v0.3.13
 [33mCompiling[39m async-global-executor v2.0.2
 [33mCompiling[39m tokio-util v0.3.1
 [33mCompiling[39m tokio-tls v0.3.1
 [33mCompiling[39m serde_yaml v0.8.17
 [33mCompiling[39m config v0.10.1
 [33mCompiling[39m futures v0.3.13
 [33mCompiling[39m h2 v0.2.7
 [33mCompiling[39m async-std v1.9.0
 [33mCompiling[39m futures_codec v0.4.1
 [33mCompiling[39m ptree v0.3.2
 [33mCompiling[39m dtparse v1.2.0
 [33mCompiling[39m bzip2 v0.3.3
 [33mCompiling[39m ichwh v0.3.4
 [33mCompiling[39m zip v0.5.11
 [33mCompiling[39m hyper v0.13.10
 [33mCompiling[39m calamine v0.17.0
 [33mCompiling[39m onig v6.1.1
 [33mCompiling[39m syntect v4.5.0
 [33mCompiling[39m hyper-tls v0.4.3
 [33mCompiling[39m surf v1.0.3
 [33mCompiling[39m http-client v6.3.5
 [33mCompiling[39m surf v2.2.0
 [33mCompiling[39m git2 v0.13.17
 [33mCompiling[39m shadow-rs v0.5.24
 [33mCompiling[39m nu v0.28.0
[33mInstalling[39m /workspace/.cargo/bin/nu
  [33mFinished[39m dev target(s) in 12m 30s

 exit
 \u{1F919} This task ran as a workspace prebuild
 \u{1F389} Well done on saving 12 minutes

[33mGitpod[39m [34m/Workspace[39m $ `,Ue=`[33mGitpod[39m [34m/Workspace[39m $ sudo apt-get install mc
[33mGitpod[39m [34m/Workspace[39m $ docker run -it alpine:latest
Unable to find image 'alpine:latest' locally
latest: Pulling from library/alpine
Status: Downloaded newer image for alpine:latest
/ # `;function Le(y){let t,r,i,d,v,u,c,m,a,o;return{c(){t=f("svg"),r=f("rect"),i=f("rect"),d=f("rect"),v=f("circle"),u=f("rect"),c=f("rect"),m=f("rect"),a=f("rect"),o=f("rect"),this.h()},l(l){t=g(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,"aria-hidden":!0});var n=h(t);r=g(n,"rect",{width:!0,height:!0,fill:!0}),h(r).forEach(s),i=g(n,"rect",{width:!0,height:!0,fill:!0}),h(i).forEach(s),d=g(n,"rect",{y:!0,width:!0,height:!0,fill:!0}),h(d).forEach(s),v=g(n,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),h(v).forEach(s),u=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(u).forEach(s),c=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(c).forEach(s),m=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(m).forEach(s),a=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(a).forEach(s),o=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(o).forEach(s),n.forEach(s),this.h()},h(){e(r,"width","337"),e(r,"height","296"),e(r,"fill","#F9F9F9"),e(i,"width","337"),e(i,"height","44"),e(i,"fill","#F3F1F0"),e(d,"y","252"),e(d,"width","337"),e(d,"height","44"),e(d,"fill","#FF8A00"),e(v,"cx","30"),e(v,"cy","22"),e(v,"r","6"),e(v,"fill","#ECE7E5"),e(u,"x","37"),e(u,"y","79"),e(u,"width","161"),e(u,"height","13"),e(u,"fill","#F3F1F0"),e(c,"x","37"),e(c,"y","203"),e(c,"width","87"),e(c,"height","13"),e(c,"fill","#F3F1F0"),e(m,"x","81"),e(m,"y","110"),e(m,"width","161"),e(m,"height","13"),e(m,"fill","#F3F1F0"),e(a,"x","81"),e(a,"y","141"),e(a,"width","161"),e(a,"height","13"),e(a,"fill","#F3F1F0"),e(o,"x","81"),e(o,"y","172"),e(o,"width","161"),e(o,"height","13"),e(o,"fill","#F3F1F0"),e(t,"width","337"),e(t,"height","296"),e(t,"viewBox","0 0 337 296"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"aria-hidden","true")},m(l,n){B(l,t,n),p(t,r),p(t,i),p(t,d),p(t,v),p(t,u),p(t,c),p(t,m),p(t,a),p(t,o)},p:k,i:k,o:k,d(l){l&&s(t)}}}class je extends I{constructor(t){super();M(this,t,null,Le,A,{})}}function Ie(y){let t,r,i,d,v,u,c,m,a,o;return{c(){t=f("svg"),r=f("rect"),i=f("rect"),d=f("rect"),v=f("circle"),u=f("rect"),c=f("rect"),m=f("rect"),a=f("rect"),o=f("rect"),this.h()},l(l){t=g(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,"aria-hidden":!0});var n=h(t);r=g(n,"rect",{width:!0,height:!0,fill:!0}),h(r).forEach(s),i=g(n,"rect",{width:!0,height:!0,fill:!0}),h(i).forEach(s),d=g(n,"rect",{y:!0,width:!0,height:!0,fill:!0}),h(d).forEach(s),v=g(n,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),h(v).forEach(s),u=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(u).forEach(s),c=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(c).forEach(s),m=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(m).forEach(s),a=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(a).forEach(s),o=g(n,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(o).forEach(s),n.forEach(s),this.h()},h(){e(r,"width","286"),e(r,"height","272"),e(r,"fill","#585653"),e(i,"width","286"),e(i,"height","44"),e(i,"fill","#696662"),e(d,"y","228"),e(d,"width","286"),e(d,"height","44"),e(d,"fill","#FF8A00"),e(v,"cx","30"),e(v,"cy","22"),e(v,"r","6"),e(v,"fill","#807C78"),e(u,"x","41"),e(u,"y","67"),e(u,"width","161"),e(u,"height","13"),e(u,"fill","#807C78"),e(c,"x","41"),e(c,"y","191"),e(c,"width","87"),e(c,"height","13"),e(c,"fill","#807C78"),e(m,"x","85"),e(m,"y","98"),e(m,"width","161"),e(m,"height","13"),e(m,"fill","#807C78"),e(a,"x","85"),e(a,"y","129"),e(a,"width","161"),e(a,"height","13"),e(a,"fill","#807C78"),e(o,"x","85"),e(o,"y","160"),e(o,"width","161"),e(o,"height","13"),e(o,"fill","#807C78"),e(t,"width","286"),e(t,"height","272"),e(t,"viewBox","0 0 286 272"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"aria-hidden","true")},m(l,n){B(l,t,n),p(t,r),p(t,i),p(t,d),p(t,v),p(t,u),p(t,c),p(t,m),p(t,a),p(t,o)},p:k,i:k,o:k,d(l){l&&s(t)}}}class Me extends I{constructor(t){super();M(this,t,null,Ie,A,{})}}function Ae(y){let t,r,i,d,v,u,c,m,a,o,l;return{c(){t=f("svg"),r=f("rect"),i=f("rect"),d=f("rect"),v=f("circle"),u=f("rect"),c=f("rect"),m=f("rect"),a=f("rect"),o=f("rect"),l=f("rect"),this.h()},l(n){t=g(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,"aria-hidden":!0});var w=h(t);r=g(w,"rect",{width:!0,height:!0,fill:!0}),h(r).forEach(s),i=g(w,"rect",{width:!0,height:!0,fill:!0}),h(i).forEach(s),d=g(w,"rect",{y:!0,width:!0,height:!0,fill:!0}),h(d).forEach(s),v=g(w,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),h(v).forEach(s),u=g(w,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(u).forEach(s),c=g(w,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(c).forEach(s),m=g(w,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(m).forEach(s),a=g(w,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(a).forEach(s),o=g(w,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(o).forEach(s),l=g(w,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0}),h(l).forEach(s),w.forEach(s),this.h()},h(){e(r,"width","337"),e(r,"height","296"),e(r,"fill","#F9F9F9"),e(i,"width","337"),e(i,"height","44"),e(i,"fill","#F3F1F0"),e(d,"y","252"),e(d,"width","337"),e(d,"height","44"),e(d,"fill","#FF8A00"),e(v,"cx","30"),e(v,"cy","22"),e(v,"r","6"),e(v,"fill","#ECE7E5"),e(u,"x","101"),e(u,"y","79"),e(u,"width","149"),e(u,"height","13"),e(u,"fill","#F3F1F0"),e(c,"x","101"),e(c,"y","203"),e(c,"width","80"),e(c,"height","13"),e(c,"fill","#F3F1F0"),e(m,"x","142"),e(m,"y","110"),e(m,"width","149"),e(m,"height","13"),e(m,"fill","#F3F1F0"),e(a,"x","142"),e(a,"y","141"),e(a,"width","149"),e(a,"height","13"),e(a,"fill","#F3F1F0"),e(o,"x","142"),e(o,"y","172"),e(o,"width","149"),e(o,"height","13"),e(o,"fill","#F3F1F0"),e(l,"x","4"),e(l,"y","48"),e(l,"width","69"),e(l,"height","200"),e(l,"fill","#F3F1F0"),e(t,"width","337"),e(t,"height","296"),e(t,"viewBox","0 0 337 296"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"aria-hidden","true")},m(n,w){B(n,t,w),p(t,r),p(t,i),p(t,d),p(t,v),p(t,u),p(t,c),p(t,m),p(t,a),p(t,o),p(t,l)},p:k,i:k,o:k,d(n){n&&s(t)}}}class Oe extends I{constructor(t){super();M(this,t,null,Ae,A,{})}}function Pe(y){let t,r,i,d,v,u,c,m,a,o,l,n,w,C,_,E,x,G,D,W,S;return{c(){t=f("svg"),r=f("g"),i=f("rect"),d=f("rect"),v=f("circle"),u=f("rect"),c=f("rect"),m=f("rect"),a=f("path"),o=f("defs"),l=f("linearGradient"),n=f("stop"),w=f("stop"),C=f("linearGradient"),_=f("stop"),E=f("stop"),x=f("linearGradient"),G=f("stop"),D=f("stop"),W=f("clipPath"),S=f("rect"),this.h()},l(U){t=g(U,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,"aria-hidden":!0});var L=h(t);r=g(L,"g",{"clip-path":!0});var F=h(r);i=g(F,"rect",{width:!0,height:!0,fill:!0}),h(i).forEach(s),d=g(F,"rect",{width:!0,height:!0,fill:!0}),h(d).forEach(s),v=g(F,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),h(v).forEach(s),u=g(F,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0}),h(u).forEach(s),c=g(F,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0}),h(c).forEach(s),m=g(F,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0}),h(m).forEach(s),a=g(F,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),h(a).forEach(s),F.forEach(s),o=g(L,"defs",{});var j=h(o);l=g(j,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var V=h(l);n=g(V,"stop",{"stop-color":!0}),h(n).forEach(s),w=g(V,"stop",{offset:!0,"stop-color":!0}),h(w).forEach(s),V.forEach(s),C=g(j,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var z=h(C);_=g(z,"stop",{"stop-color":!0}),h(_).forEach(s),E=g(z,"stop",{offset:!0,"stop-color":!0}),h(E).forEach(s),z.forEach(s),x=g(j,"linearGradient",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,gradientUnits:!0});var $=h(x);G=g($,"stop",{"stop-color":!0}),h(G).forEach(s),D=g($,"stop",{offset:!0,"stop-color":!0}),h(D).forEach(s),$.forEach(s),W=g(j,"clipPath",{id:!0});var H=h(W);S=g(H,"rect",{width:!0,height:!0,fill:!0}),h(S).forEach(s),H.forEach(s),j.forEach(s),L.forEach(s),this.h()},h(){e(i,"width","372"),e(i,"height","296"),e(i,"fill","#F9F9F9"),e(d,"width","432"),e(d,"height","44"),e(d,"fill","#F3F1F0"),e(v,"cx","30"),e(v,"cy","22"),e(v,"r","6"),e(v,"fill","#ECE7E5"),e(u,"x","103"),e(u,"y","220"),e(u,"width","50"),e(u,"height","10"),e(u,"rx","5"),e(u,"fill","url(#workspace-4-paint0_linear)"),e(c,"x","161"),e(c,"y","220"),e(c,"width","50"),e(c,"height","10"),e(c,"rx","5"),e(c,"fill","url(#workspace-4-paint1_linear)"),e(m,"x","219"),e(m,"y","220"),e(m,"width","50"),e(m,"height","10"),e(m,"rx","5"),e(m,"fill","#ECE7E5"),e(a,"fill-rule","evenodd"),e(a,"clip-rule","evenodd"),e(a,"d","M191.647 109.386C193.429 112.608 192.345 116.712 189.227 118.553L169.836 130C169.323 130.303 169.007 130.866 169.007 131.476V149.446C169.007 150.056 169.323 150.619 169.836 150.922L185.185 159.983C185.69 160.281 186.31 160.281 186.815 159.983L202.164 150.922C202.677 150.619 202.993 150.056 202.993 149.446V138.27L189.196 146.312C186.068 148.136 182.101 146.994 180.336 143.763C178.571 140.531 179.676 136.433 182.804 134.61L202.546 123.102C208.56 119.597 216 124.086 216 131.219V150.81C216 155.399 213.62 159.636 209.763 161.912L192.141 172.315C188.336 174.562 183.664 174.562 179.859 172.315L162.237 161.912C158.38 159.636 156 155.399 156 150.81V130.112C156 125.523 158.38 121.286 162.237 119.01L182.773 106.886C185.892 105.045 189.865 106.165 191.647 109.386Z"),e(a,"fill","url(#workspace-4-paint2_linear)"),e(r,"clip-path","url(#workspace-4-clip0)"),e(n,"stop-color","#7FE959"),e(w,"offset","1"),e(w,"stop-color","#31B602"),e(l,"id","workspace-4-paint0_linear"),e(l,"x1","125.5"),e(l,"y1","207.5"),e(l,"x2","135"),e(l,"y2","237"),e(l,"gradientUnits","userSpaceOnUse"),e(_,"stop-color","#7FE959"),e(E,"offset","1"),e(E,"stop-color","#31B602"),e(C,"id","workspace-4-paint1_linear"),e(C,"x1","183.5"),e(C,"y1","207.5"),e(C,"x2","193"),e(C,"y2","237"),e(C,"gradientUnits","userSpaceOnUse"),e(G,"stop-color","#FFB45B"),e(D,"offset","1"),e(D,"stop-color","#FF8A00"),e(x,"id","workspace-4-paint2_linear"),e(x,"x1","201.16"),e(x,"y1","116.283"),e(x,"x2","168.917"),e(x,"y2","165.351"),e(x,"gradientUnits","userSpaceOnUse"),e(S,"width","372"),e(S,"height","296"),e(S,"fill","white"),e(W,"id","workspace-4-clip0"),e(t,"width","372"),e(t,"height","296"),e(t,"viewBox","0 0 372 296"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"aria-hidden","true")},m(U,L){B(U,t,L),p(t,r),p(r,i),p(r,d),p(r,v),p(r,u),p(r,c),p(r,m),p(r,a),p(t,o),p(o,l),p(l,n),p(l,w),p(o,C),p(C,_),p(C,E),p(o,x),p(x,G),p(x,D),p(o,W),p(W,S)},p:k,i:k,o:k,d(U){U&&s(t)}}}class Te extends I{constructor(t){super();M(this,t,null,Pe,A,{})}}function ae(y,t,r){const i=y.slice();return i[11]=t[r].Component,i[12]=t[r].top,i[13]=t[r].left,i[14]=t[r].width,i[15]=t[r].id,i}function se(y,t){let r,i,d,v,u,c,m,a;var o=t[11];function l(n){return{}}return o&&(i=new o(l())),{key:y,first:null,c(){r=P("div"),i&&oe(i.$$.fragment),d=X(),this.h()},l(n){r=T(n,"DIV",{class:!0,style:!0});var w=h(r);i&&Fe(i.$$.fragment,w),d=ee(w),w.forEach(s),this.h()},h(){e(r,"class","item svelte-kj3u3u"),b(r,"top",100*(t[12]/R)+"%"),b(r,"left",100*(t[13]/O)+"%"),b(r,"width",100*(t[14]/O)+"%"),this.first=r},m(n,w){B(n,r,w),i&&le(i,r,null),p(r,d),c=!0,m||(a=ge(r,"outroend",t[4]),m=!0)},p(n,w){if(t=n,o!==(o=t[11])){if(i){te();const C=i;Y(C.$$.fragment,1,0,()=>{re(C,1)}),ie()}o?(i=new o(l()),oe(i.$$.fragment),N(i.$$.fragment,1),le(i,r,d)):i=null}(!c||w&4)&&b(r,"top",100*(t[12]/R)+"%"),(!c||w&4)&&b(r,"left",100*(t[13]/O)+"%"),(!c||w&4)&&b(r,"width",100*(t[14]/O)+"%")},i(n){c||(i&&N(i.$$.fragment,n),pe(()=>{u&&u.end(1),v=ve(r,be,{duration:1500,easing:ne}),v.start()}),c=!0)},o(n){i&&Y(i.$$.fragment,n),v&&v.invalidate(),n&&(u=we(r,t[3],{duration:1500,delay:1500,factor:1.015,easing:ne})),c=!1},d(n){n&&s(r),i&&re(i),n&&u&&u.end(),m=!1,a()}}}function ce(y){let t,r;return{c(){t=P("figcaption"),r=ye(y[0]),this.h()},l(i){t=T(i,"FIGCAPTION",{class:!0});var d=h(t);r=Ce(d,y[0]),d.forEach(s),this.h()},h(){e(t,"class","svelte-kj3u3u")},m(i,d){B(i,t,d),p(t,r)},p(i,d){d&1&&xe(r,i[0])},d(i){i&&s(t)}}}function Ve(y){let t,r,i=[],d=new Map,v,u,c=y[2];const m=o=>o[15];for(let o=0;o<c.length;o+=1){let l=ae(y,c,o),n=m(l);d.set(n,i[o]=se(n,l))}let a=y[0]&&ce(y);return{c(){t=P("figure"),r=P("div");for(let o=0;o<i.length;o+=1)i[o].c();v=X(),a&&a.c(),this.h()},l(o){t=T(o,"FIGURE",{class:!0,style:!0});var l=h(t);r=T(l,"DIV",{class:!0});var n=h(r);for(let w=0;w<i.length;w+=1)i[w].l(n);n.forEach(s),v=ee(l),a&&a.l(l),l.forEach(s),this.h()},h(){e(r,"class","container svelte-kj3u3u"),e(t,"class","aspect svelte-kj3u3u"),b(t,"--width",O),b(t,"--height",R)},m(o,l){B(o,t,l),p(t,r);for(let n=0;n<i.length;n+=1)i[n].m(r,null);p(t,v),a&&a.m(t,null),y[6](t),u=!0},p(o,[l]){l&20&&(c=o[2],te(),i=_e(i,l,m,1,o,c,d,r,Ge,se,null,ae),ie()),o[0]?a?a.p(o,l):(a=ce(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(o){if(!u){for(let l=0;l<c.length;l+=1)N(i[l]);u=!0}},o(o){for(let l=0;l<i.length;l+=1)Y(i[l]);u=!1},d(o){o&&s(t);for(let l=0;l<i.length;l+=1)i[l].d();a&&a.d(),y[6](null)}}}let O=632,R=500,Z=2;function ze(y,t,r){let i;ke(y,De,C=>r(9,i=C));let{alt:d=""}=t,{iterations:v=3}=t,u,c=[{id:"1",left:34,top:92,width:337,Component:je},{id:"2",left:110,top:52,width:286,Component:Me},{id:"3",left:166,top:196,width:337,Component:Oe},{id:"4",left:260,top:24,width:372,Component:Te}],m=i?c:c.slice(0,Z),a=Z,o=v;function l(C,_){const E=getComputedStyle(C).transform.replace("none","");return{delay:_.delay||0,duration:_.duration||400,easing:_.easing||Se,css:(x,G)=>`opacity: ${x}; transform: ${E} scale(${1+((_.factor||1.5)-1)*G})`}}function n(){if(!i){if(o===0){r(2,m=[c[a],...m]);return}r(2,m=[c[a],...m.slice(0,Z-1)]),a=(a+1)%c.length,o--}}Ee(()=>{const C=new IntersectionObserver(([_])=>{_.isIntersecting&&(C.unobserve(u),n())});return C.observe(u),()=>{C.disconnect()}});function w(C){Be[C?"unshift":"push"](()=>{u=C,r(1,u)})}return y.$$set=C=>{"alt"in C&&r(0,d=C.alt),"iterations"in C&&r(5,v=C.iterations)},[d,u,m,l,n,v,w]}class $e extends I{constructor(t){super();M(this,t,ze,Ve,A,{alt:0,iterations:5})}}const Ke={title:"Multi track development with ease",paragraph:"You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug or one for your code review directly in Gitpod.",image:{src:"/svg/features/muti-track-development.svg",alt:"Multi track development with ease"}},qe={title:"Where teams code together",paragraph:"Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.",image:{src:"/images/features/collaboration.png",alt:"Collaboration",classNames:"shadow-medium",styles:"border-radius: 7px"}},Ye={title:"Code anywhere, on any device",paragraph:"You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. ",image:{src:"/images/features/ipad.png",alt:"Gitpod Workspace on an iPad."}},He=[{title:"Remote development without friction",paragraph:"Gitpod continuously builds your git branches like a CI server so that you can start coding right away - no more waiting for dependencies to download and builds to finish.",moreButton:{text:"More on prebuilds",href:"/docs/prebuilds"},terminal:{source:We}},{title:"Works on my machine - and yours",paragraph:"Spin up pre-configured, standardized dev environments from any git context when you need them and close them when you're done. You won\u2019t go back to the friction of long-living stateful environments. ",previewComponent:$e}],Je=[Ke,{title:"Bringing dev closer to prod",paragraph:"Gitpod provisions powerful Linux containers under the hood. A Linux shell with root/sudo, a file system, Docker and all other tools and binaries that run on Linux. One OS for both dev and prod.",moreButton:{href:"#get-started",text:"Try now"},terminal:{source:Ue,dark:!0,shadow:!1,narrow:!0,skipToEnd:!0}},q(K({},qe),{moreButton:{href:"/docs/sharing-and-collaboration",text:"More on collaboration"}}),q(K({},Ye),{moreButton:{href:"#get-started",text:"Try now"}})],Qe=[{icon:{src:"/svg/features/open-source.svg"},title:"Open Source",text:"We're free from big tech influence and integrate, not dictate. This makes our product development fast and close to our users & community."},{icon:{src:"/svg/features/saas.svg"},title:"SaaS or Self-hosted",text:"Use our SaaS solution running on the carbon neutral Google Cloud Platform or host Gitpod on your own cloud infrastructure using GKE, k3s, EKS or AKS."},{icon:{src:"/svg/features/secure.svg"},title:"Secure by design",text:"Gitpod centralizes all source code and safely stores it in the cloud, never locally. Security is at the core of everything we do at Gitpod. <br><a href='/security'>More about security</a>"}];export{$e as W,qe as a,Ye as c,He as f,Ue as l,Ke as m,Je as o,Qe as s,We as t};
