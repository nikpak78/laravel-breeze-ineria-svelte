import{S as y,i as B,s as C,a as h,c as E,b as p,m as I,t as K,d as N,e as $,f as z,g as k,I as T,p as A,j as d,a6 as q,k as w,K as j,l as D,E as F}from"./app.43b7aeae.js";import{L as G}from"./LayoutBase.2bc4fc14.js";import{i as J}from"./link.4bd505ab.js";function H(i,l,a){const s=i.slice();return s[1]=l[a],s}function M(i){let l,a,s=i[1].name+"",o,t,u,_,v;return{c(){l=k("li"),a=k("a"),o=T(s),u=h(),d(a,"href",t=`/categories/${i[1].slug}`)},m(m,c){p(m,l,c),w(l,a),w(a,o),w(l,u),_||(v=F(J.call(null,a)),_=!0)},p(m,c){c&1&&s!==(s=m[1].name+"")&&j(o,s),c&1&&t!==(t=`/categories/${m[1].slug}`)&&d(a,"href",t)},d(m){m&&$(l),_=!1,v()}}}function O(i){let l,a=i[0].title+"",s,o,t,u,_,v,m,c=i[0].body+"",L,b,g=i[0].categories,r=[];for(let e=0;e<g.length;e+=1)r[e]=M(H(i,g,e));return{c(){l=k("div"),s=T(a),o=h(),t=k("img"),v=h(),m=k("div"),L=h();for(let e=0;e<r.length;e+=1)r[e].c();b=A(),d(l,"class","text-4xl font-black"),d(t,"class","mb-5 h-96 w-full"),d(t,"alt",u=i[0].title),q(t.src,_="/uploads/images/"+i[0].image)||d(t,"src",_),d(m,"class","")},m(e,f){p(e,l,f),w(l,s),p(e,o,f),p(e,t,f),p(e,v,f),p(e,m,f),m.innerHTML=c,p(e,L,f);for(let n=0;n<r.length;n+=1)r[n].m(e,f);p(e,b,f)},p(e,f){if(f&1&&a!==(a=e[0].title+"")&&j(s,a),f&1&&u!==(u=e[0].title)&&d(t,"alt",u),f&1&&!q(t.src,_="/uploads/images/"+e[0].image)&&d(t,"src",_),f&1&&c!==(c=e[0].body+"")&&(m.innerHTML=c),f&1){g=e[0].categories;let n;for(n=0;n<g.length;n+=1){const S=H(e,g,n);r[n]?r[n].p(S,f):(r[n]=M(S),r[n].c(),r[n].m(b.parentNode,b))}for(;n<r.length;n+=1)r[n].d(1);r.length=g.length}},d(e){e&&$(l),e&&$(o),e&&$(t),e&&$(v),e&&$(m),e&&$(L),D(r,e),e&&$(b)}}}function P(i){let l,a,s,o;return document.title=l=i[0].title,s=new G({props:{$$slots:{default:[O]},$$scope:{ctx:i}}}),{c(){a=h(),E(s.$$.fragment)},m(t,u){p(t,a,u),I(s,t,u),o=!0},p(t,[u]){(!o||u&1)&&l!==(l=t[0].title)&&(document.title=l);const _={};u&17&&(_.$$scope={dirty:u,ctx:t}),s.$set(_)},i(t){o||(K(s.$$.fragment,t),o=!0)},o(t){N(s.$$.fragment,t),o=!1},d(t){t&&$(a),z(s,t)}}}function Q(i,l,a){let{post:s}=l;return i.$$set=o=>{"post"in o&&a(0,s=o.post)},[s]}class W extends y{constructor(l){super(),B(this,l,Q,P,C,{post:0})}}export{W as default};
