import{b as g,o as d,h as w,w as t,j as n,f as s,t as c,l,q as h,B as y,v as x,bH as B,D as T,A as k,e as b,k as p,bD as f,u as v,bC as S,i as V}from"./index.d17d1dd6.js";import{V as C}from"./vue-scrollto.3478456d.js";const D={class:"columns is-vcentered py-20"},z={class:"column is-relative"},H={class:"text-gradient"},N=g({__name:"HeroSub",props:{title:null,subtitle:null},setup(_){const e=_;return(u,i)=>{const o=h,r=y,a=x,m=B,$=T;return d(),w($,{alignment:"center",color:"grey"},{body:t(()=>[n("div",D,[n("div",z,[s(o,{tag:"h1",size:1,weight:"bold"},{default:t(()=>[n("span",H,c(e.title),1)]),_:1}),s(r,{tag:"p",size:5,weight:"thin",class:"mx-auto max-w-6 b-centered-tablet-p pt-2"},{default:t(()=>[l(c(e.subtitle),1)]),_:1}),s(m,{alignment:"centered"},{default:t(()=>[s(a,{to:{name:"blocks"},color:"primary",raised:"",bold:""},{default:t(()=>[l(" Components ")]),_:1}),s(a,{href:"https://docs.cssninja.io/vulk",bold:""},{default:t(()=>[l("Open Docs")]),_:1})]),_:1})])])]),_:1})}}});const M=k(N,[["__scopeId","data-v-3bdaec59"]]),j={class:"py-4"},I={class:"is-flex is-align-items-center"},K={key:0,class:"ml-auto weight-5"},q=g({__name:"DemoTitle",props:{title:null,subtitle:null,link:{default:void 0},inverted:{type:Boolean,default:!1}},setup(_){const e=_,u=C.scrollTo;return(i,o)=>{const r=h,a=y;return d(),b("div",j,[n("div",I,[n("div",null,[s(r,{tag:"h2",size:4,weight:"bold",inverted:e.inverted},{default:t(()=>[n("span",null,[p(i.$slots,"title",{},()=>[l(c(e.title),1)],!0)])]),_:3},8,["inverted"]),s(a,{tag:"p",size:6,weight:"thin"},{default:t(()=>[n("span",null,[p(i.$slots,"subtitle",{},()=>[l(c(e.subtitle),1)],!0)])]),_:3})]),_.link?(d(),b("div",K,[n("a",{class:"link",onClick:o[0]||(o[0]=f(m=>v(u)(`#${e.link}`,800),["prevent"])),onKeydown:o[1]||(o[1]=S(f(()=>v(u)(`#${e.link}`,800),["prevent"]),["space"]))},[p(i.$slots,"default",{},()=>[l("View Props")],!0)],32)])):V("",!0)])])}}});const O=k(q,[["__scopeId","data-v-b9bff318"]]);export{O as _,M as a};