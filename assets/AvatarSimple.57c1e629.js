import{b as c,g as u,o as r,e as o,k as p,j as _,u as t,bE as l,i as m,n as g,A as v}from"./index.4498c4e2.js";const f=["src"],h=["src"],b=c({__name:"AvatarSimple",props:{size:{default:void 0},picture:null,squared:{type:Boolean,default:!1},badge:{default:void 0}},setup(n){const e=n,d=u(()=>[e.size&&`is-${e.size}`,e.squared&&"is-squared"]);return(i,a)=>(r(),o("div",{class:g(["avatar",t(d)])},[p(i.$slots,"default",{},()=>[_("img",{src:e.picture,class:"avatar-image",alt:"placeholder",height:"38",width:"38",onErrorOnce:a[0]||(a[0]=s=>t(l)(s,"150x150"))},null,40,f),e.badge?(r(),o("img",{key:0,src:e.badge,class:"avatar-badge",alt:"Badge",height:"18",width:"18",onErrorOnce:a[1]||(a[1]=s=>t(l)(s,"150x150"))},null,40,h)):m("",!0)],!0)],2))}});const B=v(b,[["__scopeId","data-v-c54a15df"]]);export{B as _};
