import{S as k,i as S,s as w,a as h,c as L,b as u,m as j,t as q,d as B,e as m,f as C,g as p,I as b,p as E,j as d,k as _,K as y,l as I,E as K}from"./app.43b7aeae.js";import{L as N}from"./LayoutBase.2bc4fc14.js";import{i as x}from"./link.4bd505ab.js";function g(c,a,o){const l=c.slice();return l[1]=a[o],l}function v(c){let a,o,l=c[1].title+"",i,t,r,s,e;return{c(){a=p("li"),o=p("a"),i=b(l),r=h(),d(o,"href",t=`/posts/${c[1].slug}`)},m(f,n){u(f,a,n),_(a,o),_(o,i),_(a,r),s||(e=K(x.call(null,o)),s=!0)},p(f,n){n&1&&l!==(l=f[1].title+"")&&y(i,l),n&1&&t!==(t=`/posts/${f[1].slug}`)&&d(o,"href",t)},d(f){f&&m(a),s=!1,e()}}}function z(c){let a,o=c[0].name+"",l,i,t,r=c[0].posts,s=[];for(let e=0;e<r.length;e+=1)s[e]=v(g(c,r,e));return{c(){a=p("div"),l=b(o),i=h();for(let e=0;e<s.length;e+=1)s[e].c();t=E(),d(a,"class","text-4xl font-black")},m(e,f){u(e,a,f),_(a,l),u(e,i,f);for(let n=0;n<s.length;n+=1)s[n].m(e,f);u(e,t,f)},p(e,f){if(f&1&&o!==(o=e[0].name+"")&&y(l,o),f&1){r=e[0].posts;let n;for(n=0;n<r.length;n+=1){const $=g(e,r,n);s[n]?s[n].p($,f):(s[n]=v($),s[n].c(),s[n].m(t.parentNode,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=r.length}},d(e){e&&m(a),e&&m(i),I(s,e),e&&m(t)}}}function A(c){let a,o,l,i;return document.title=a=c[0].name,l=new N({props:{$$slots:{default:[z]},$$scope:{ctx:c}}}),{c(){o=h(),L(l.$$.fragment)},m(t,r){u(t,o,r),j(l,t,r),i=!0},p(t,[r]){(!i||r&1)&&a!==(a=t[0].name)&&(document.title=a);const s={};r&17&&(s.$$scope={dirty:r,ctx:t}),l.$set(s)},i(t){i||(q(l.$$.fragment,t),i=!0)},o(t){B(l.$$.fragment,t),i=!1},d(t){t&&m(o),C(l,t)}}}function D(c,a,o){let{category:l}=a;return c.$$set=i=>{"category"in i&&o(0,l=i.category)},[l]}class J extends k{constructor(a){super(),S(this,a,D,A,w,{category:0})}}export{J as default};
