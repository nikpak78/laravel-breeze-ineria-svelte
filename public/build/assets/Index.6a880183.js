import{S as Q,i as V,s as Y,a as k,c as Z,b as C,m as ee,t as te,d as le,e as L,f as ne,L as ie,g as d,I,j as s,k as o,W,r as q,U as re,A as se,n as P,X as oe,K as D,p as ae,a0 as ue,a1 as de,E as fe,F as ce}from"./app.43b7aeae.js";import{A as me}from"./Authenticated.da906620.js";import{i as pe}from"./link.4bd505ab.js";import{u as _e}from"./useForm.310a098d.js";import"./ApplicationLogo.31531ae0.js";import"./InertiaLink.70d82a1a.js";function G(r,e,t){const l=r.slice();return l[9]=e[t],l}function be(r){let e=[],t=new Map,l,n=r[0];const a=i=>i[9].id;for(let i=0;i<n.length;i+=1){let u=G(r,n,i),f=a(u);t.set(f,e[i]=H(f,u))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=ae()},m(i,u){for(let f=0;f<e.length;f+=1)e[f].m(i,u);C(i,l,u)},p(i,u){u&1&&(n=i[0],e=ue(e,u,a,1,i,n,t,l.parentNode,de,H,l,G))},d(i){for(let u=0;u<e.length;u+=1)e[u].d(i);i&&L(l)}}}function ge(r){let e;return{c(){e=I("No links added. Why don't you add one below?")},m(t,l){C(t,e,l)},p:P,d(t){t&&L(e)}}}function H(r,e){let t,l,n=e[9].title+"",a,i,u,f,y,w,m,g;return{key:r,first:null,c(){t=d("li"),l=d("a"),a=I(n),u=k(),f=d("button"),f.textContent="Delete Link",w=k(),s(l,"href",i=e[9].url),s(l,"target","_blank"),s(f,"class","inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"),this.first=t},m($,p){C($,t,p),o(t,l),o(l,a),o(t,u),o(t,f),o(t,w),m||(g=fe(y=pe.call(null,f,{href:`/links/${e[9].id}`,method:"delete"})),m=!0)},p($,p){e=$,p&1&&n!==(n=e[9].title+"")&&D(a,n),p&1&&i!==(i=e[9].url)&&s(l,"href",i),y&&ce(y.update)&&p&1&&y.update.call(null,{href:`/links/${e[9].id}`,method:"delete"})},d($){$&&L(t),m=!1,g()}}}function J(r){let e,t=r[2].errors.title+"",l;return{c(){e=d("div"),l=I(t),s(e,"class","form-error")},m(n,a){C(n,e,a),o(e,l)},p(n,a){a&4&&t!==(t=n[2].errors.title+"")&&D(l,t)},d(n){n&&L(e)}}}function O(r){let e,t=r[2].errors.url+"",l;return{c(){e=d("div"),l=I(t),s(e,"class","form-error")},m(n,a){C(n,e,a),o(e,l)},p(n,a){a&4&&t!==(t=n[2].errors.url+"")&&D(l,t)},d(n){n&&L(e)}}}function he(r){let e,t,l,n,a,i,u,f,y,w,m,g,$,p,S,E,F,N,K,h,M,R,A,X,T,j,z;function B(c,x){return c[0].length?be:ge}let U=B(r),v=U(r),_=r[2].errors.title&&J(r),b=r[2].errors.url&&O(r);return{c(){e=d("div"),t=d("div"),l=d("div"),n=d("div"),v.c(),a=k(),i=d("form"),u=d("div"),f=d("label"),f.textContent="Title",y=k(),w=d("div"),m=d("input"),g=k(),_&&_.c(),$=k(),p=d("div"),S=d("label"),S.textContent="URL",E=k(),F=d("div"),N=d("span"),N.textContent="http://",K=k(),h=d("input"),M=k(),b&&b.c(),R=k(),A=d("button"),X=I("Submit"),s(f,"for","title"),s(f,"class","block text-sm font-medium text-gray-700"),s(m,"type","text"),s(m,"name","title"),s(m,"id","title"),s(m,"class","shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"),s(m,"placeholder","Twitter"),s(w,"class","mt-1"),s(u,"class","mt-8"),s(S,"for","url"),s(S,"class","block text-sm font-medium text-gray-700"),s(N,"class","inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"),s(h,"type","text"),s(h,"name","url"),s(h,"id","url"),s(h,"class","flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"),s(h,"placeholder","www.twitter.com"),s(F,"class","mt-1 flex rounded-md shadow-sm"),s(p,"class","mt-4"),A.disabled=T=r[2].processing,s(A,"type","submit"),s(A,"class","inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),s(n,"class","p-6 bg-white border-b border-gray-200"),s(l,"class","bg-white shadow-sm sm:rounded-lg"),s(t,"class","max-w-7xl mx-auto sm:px-6 lg:px-8"),s(e,"class","py-12")},m(c,x){C(c,e,x),o(e,t),o(t,l),o(l,n),v.m(n,null),o(n,a),o(n,i),o(i,u),o(u,f),o(u,y),o(u,w),o(w,m),W(m,r[2].title),r[6](m),o(u,g),_&&_.m(u,null),o(i,$),o(i,p),o(p,S),o(p,E),o(p,F),o(F,N),o(F,K),o(F,h),W(h,r[2].url),o(p,M),b&&b.m(p,null),o(i,R),o(i,A),o(A,X),j||(z=[q(m,"input",r[5]),q(h,"input",r[7]),q(i,"submit",re(r[4]))],j=!0)},p(c,x){U===(U=B(c))&&v?v.p(c,x):(v.d(1),v=U(c),v&&(v.c(),v.m(n,a))),x&4&&m.value!==c[2].title&&W(m,c[2].title),c[2].errors.title?_?_.p(c,x):(_=J(c),_.c(),_.m(u,null)):_&&(_.d(1),_=null),x&4&&h.value!==c[2].url&&W(h,c[2].url),c[2].errors.url?b?b.p(c,x):(b=O(c),b.c(),b.m(p,null)):b&&(b.d(1),b=null),x&4&&T!==(T=c[2].processing)&&(A.disabled=T)},d(c){c&&L(e),v.d(),r[6](null),_&&_.d(),b&&b.d(),j=!1,se(z)}}}function ke(r){let e;return{c(){e=d("h2"),e.textContent="Links",s(e,"class","font-semibold text-xl text-gray-800 leading-tight"),s(e,"slot","header")},m(t,l){C(t,e,l)},p:P,d(t){t&&L(e)}}}function ve(r){let e,t,l;return t=new me({props:{$$slots:{header:[ke],default:[he]},$$scope:{ctx:r}}}),{c(){e=k(),Z(t.$$.fragment),document.title="Links List"},m(n,a){C(n,e,a),ee(t,n,a),l=!0},p(n,[a]){const i={};a&4103&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)},i(n){l||(te(t.$$.fragment,n),l=!0)},o(n){le(t.$$.fragment,n),l=!1},d(n){n&&L(e),ne(t,n)}}}function ye(r,e,t){let l,{links:n}=e,a=_e({title:null,url:null});ie(r,a,g=>t(2,l=g));let i;function u(){i.focus()}function f(){u(),l.post("/links"),l.reset()}function y(){l.title=this.value,a.set(l)}function w(g){oe[g?"unshift":"push"](()=>{i=g,t(1,i)})}function m(){l.url=this.value,a.set(l)}return r.$$set=g=>{"links"in g&&t(0,n=g.links)},[n,i,l,a,f,y,w,m]}class Fe extends Q{constructor(e){super(),V(this,e,ye,ve,Y,{links:0})}}export{Fe as default};