import{h as v,k as n,aj as f,ak as p,o as e,c as t,F as m,j as b,t as y,i as c,b as k,u,N as d}from"../app.0ec1a103.js";const j={class:"infinite-list",style:{overflow:"auto"}},x=v({__name:"basic",setup(g){const s=n(0),l=()=>{s.value+=2};return(o,_)=>{const a=f("infinite-scroll");return p((e(),t("ul",j,[(e(!0),t(m,null,b(s.value,i=>(e(),t("li",{key:i,class:"infinite-list-item"},y(i),1))),128))],512)),[[a,l]])}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const S={class:"infinite-list-wrapper",style:{overflow:"auto"}},w=["infinite-scroll-disabled"],N={key:0},O={key:1},B=v({__name:"disable-loading",setup(g){const s=n(10),l=n(!1),o=c(()=>s.value>=20),_=c(()=>l.value||o.value),a=()=>{l.value=!0,setTimeout(()=>{s.value+=2,l.value=!1},2e3)};return(i,D)=>{const h=f("infinite-scroll");return e(),t("div",S,[p(k("ul",{class:"list","infinite-scroll-disabled":u(_)},[(e(!0),t(m,null,b(s.value,r=>(e(),t("li",{key:r,class:"list-item"},y(r),1))),128))],8,w),[[h,a]]),l.value?(e(),t("p",N,"Loading...")):d("",!0),u(o)?(e(),t("p",O,"No more")):d("",!0)])}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{M as _,T as a};