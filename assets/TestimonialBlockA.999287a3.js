import{b as g,g as a,o as n,e as l,j as s,F as v,m as x,n as c,u as i,t as _,f as p,w as b,q as y,x as k,y as B,A as q}from"./index.4498c4e2.js";import{_ as w}from"./AvatarSimple.57c1e629.js";const C=t=>(k("data-v-0ff45955"),t=t(),B(),t),S={class:"py-6"},A={class:"testimonial-block columns b-columns-half-tablet-p is-multiline"},I=C(()=>s("i",{class:"iconify text-light mb-4","data-icon":"fa:quote-left"},null,-1)),z={class:"level mt-4 mb-4"},T={class:"level-item"},F={class:"paragraph rem-85 text-light"},N=g({__name:"TestimonialBlockA",props:{testimonials:null,boxed:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},limit:{default:3},columns:{default:4}},setup(t){const e=t,u=a(()=>[e.boxed&&"is-boxed"]),m=a(()=>[e.columns&&`is-${e.columns}`]),r=a(()=>[e.columns===4?"":"rem-85"]);return(V,$)=>{const d=w,f=y;return n(),l("div",S,[s("div",A,[(n(!0),l(v,null,x(e.testimonials.slice(0,e.limit),(o,h)=>(n(),l("div",{key:h,class:c(["column",i(m)])},[s("div",{class:c(["testimonial-block-item",i(u)])},[I,s("p",{class:c(["paragraph mx-auto max-w-4",i(r)])},_(o.content),3),s("div",z,[s("div",T,[p(d,{size:"large",picture:o.avatar,squared:e.squared},null,8,["picture","squared"])])]),p(f,{tag:"h3",size:7,weight:"semi",narrow:""},{default:b(()=>[s("span",null,_(o.name),1)]),_:2},1024),s("p",F,_(o.position),1)],2)],2))),128))])])}}});const E=q(N,[["__scopeId","data-v-0ff45955"]]);export{E as _};