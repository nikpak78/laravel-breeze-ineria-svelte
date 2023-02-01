import{S as B,i as C,s as E,a as $,c as v,b as m,m as y,t as k,d as w,e as c,f as x,L as V,g as _,j as g,k as z,r as G,U as q,I as j}from"./app.43b7aeae.js";import{G as A,B as F}from"./Guest.fb39dc27.js";import{u as N}from"./useForm.310a098d.js";import{I as O}from"./InertiaLink.70d82a1a.js";import"./ApplicationLogo.31531ae0.js";import"./link.4bd505ab.js";function I(o){let e;return{c(){e=_("div"),e.textContent=`A new verification link has been sent to the email address you
            provided during registration.`,g(e,"class","mb-4 font-medium text-sm text-green-600"),g(e,"v-if","verificationLinkSent")},m(t,i){m(t,e,i)},d(t){t&&c(e)}}}function R(o){let e;return{c(){e=j("Resend Verification Email")},m(t,i){m(t,e,i)},d(t){t&&c(e)}}}function T(o){let e;return{c(){e=j("Log Out")},m(t,i){m(t,e,i)},d(t){t&&c(e)}}}function U(o){let e,t,i,n,r,a,d,u,p,b,L,f=o[0]&&I();return a=new F({props:{"xclass:opacity-25":o[1].processing,disabled:o[1].processing,$$slots:{default:[R]},$$scope:{ctx:o}}}),u=new O({props:{href:window.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900",$$slots:{default:[T]},$$scope:{ctx:o}}}),{c(){e=_("div"),e.textContent=`Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.`,t=$(),f&&f.c(),i=$(),n=_("form"),r=_("div"),v(a.$$.fragment),d=$(),v(u.$$.fragment),g(e,"class","mb-4 text-sm text-gray-600"),g(r,"class","mt-4 flex items-center justify-between")},m(s,l){m(s,e,l),m(s,t,l),f&&f.m(s,l),m(s,i,l),m(s,n,l),z(n,r),y(a,r,null),z(r,d),y(u,r,null),p=!0,b||(L=G(n,"submit",q(o[2])),b=!0)},p(s,l){s[0]?f||(f=I(),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null);const S={};l&32&&(S.$$scope={dirty:l,ctx:s}),a.$set(S);const h={};l&32&&(h.$$scope={dirty:l,ctx:s}),u.$set(h)},i(s){p||(k(a.$$.fragment,s),k(u.$$.fragment,s),p=!0)},o(s){w(a.$$.fragment,s),w(u.$$.fragment,s),p=!1},d(s){s&&c(e),s&&c(t),f&&f.d(s),s&&c(i),s&&c(n),x(a),x(u),b=!1,L()}}}function D(o){let e,t,i;return t=new A({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){e=$(),v(t.$$.fragment),document.title="Email Verification"},m(n,r){m(n,e,r),y(t,n,r),i=!0},p(n,[r]){const a={};r&33&&(a.$$scope={dirty:r,ctx:n}),t.$set(a)},i(n){i||(k(t.$$.fragment,n),i=!0)},o(n){w(t.$$.fragment,n),i=!1},d(n){n&&c(e),x(t,n)}}}function H(o,e,t){let i,n,{status:r}=e;const a=N();V(o,a,u=>t(4,i=u));const d=()=>{i.post(window.route("verification.send"))};return o.$$set=u=>{"status"in u&&t(3,r=u.status)},o.$$.update=()=>{o.$$.dirty&8&&t(0,n=r==="verification-link-sent")},[n,a,d,r]}class X extends B{constructor(e){super(),C(this,e,H,D,E,{status:3})}}export{X as default};