import{b as x,g as o,o as t,e as l,j as s,F as y,m as B,n as a,u as i,k as z,f as d,w as r,t as u,h as C,i as b,q as w,bZ as A,A as F}from"./index.4498c4e2.js";import{_ as N}from"./IconBox.39e8ec7c.js";const V={class:"py-6"},$={class:"py-4"},I=["data-icon"],L=x({__name:"FeatureBlockA",props:{alignment:{default:void 0},features:null,columns:{default:4},limit:{default:6},size:{default:void 0},rounded:{type:Boolean,default:!1},links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(_){const e=_,m=o(()=>[e.alignment&&"has-text-centered"]),p=o(()=>[e.columns&&`is-${e.columns}`]),f=o(()=>[e.alignment==="centered"&&"mx-auto",e.size==="small"&&"rem-90",e.columns!=6&&"max-w-3",e.columns===6&&"max-w-4",e.columns===3&&"rem-90",e.inverted&&"text-light"]);return(v,S)=>{const g=N,k=w,h=A;return t(),l("div",V,[s("div",{class:a(["columns is-multiline b-columns-half-tablet-p",i(m)])},[(t(!0),l(y,null,B(e.features.slice(0,e.limit),(n,c)=>(t(),l("div",{key:c,class:a(["column",i(p)])},[s("div",$,[z(v.$slots,"column",{feature:n,index:c},()=>[d(g,{color:n.color,size:e.size,rounded:e.rounded,inverted:e.inverted},{default:r(()=>[s("i",{class:"iconify","data-icon":n.icon},null,8,I)]),_:2},1032,["color","size","rounded","inverted"]),d(k,{tag:"h3",size:6,weight:"semi",leading:"",inverted:e.inverted},{default:r(()=>[s("span",null,u(n.title),1)]),_:2},1032,["inverted"]),s("p",{class:a(["paragraph",i(f)])},u(n.text),3),e.links?(t(),C(h,{key:0,link:n.link,size:"small"},null,8,["link"])):b("",!0)],!0)])],2))),128))],2)])}}});const D=F(L,[["__scopeId","data-v-d65fe399"]]);export{D as _};