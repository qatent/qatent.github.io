import{b as r,g as _,o as s,e as t,F as i,m as c,j as u,n as p,u as d,A as m}from"./index.4498c4e2.js";const g=["src"],f=r({__name:"HeroClients",props:{logos:{default:()=>[]},limit:{default:5},inverted:{type:Boolean,default:!1}},setup(o){const e=o,n=_(()=>[e.inverted&&"is-inverted"]);return(v,h)=>(s(),t("ul",{class:p(d(n))},[(s(!0),t(i,null,c(e.logos.slice(0,e.limit),(l,a)=>(s(),t("li",{key:a},[u("img",{src:l.logo,alt:"Hero client logo",width:"300",height:"88"},null,8,g)]))),128))],2))}});const x=m(f,[["__scopeId","data-v-17e8636b"]]);export{x as _};
