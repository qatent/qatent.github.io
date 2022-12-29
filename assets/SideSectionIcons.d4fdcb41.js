import{A as v,o as n,e as o,ap as z,b as w,j as e,f as a,F as k,m as $,w as _,t as i,C as S,q as I,x as G,y as A,g as x,l as H,k as y,n as h,u as g,h as N,i as V,B as P,bM as W}from"./index.4498c4e2.js";import{_ as D}from"./HalfCircle.1780916b.js";const M={},T={xmlns:"http://www.w3.org/2000/svg",width:"33.83",height:"44.928",viewBox:"0 0 33.83 44.928"},F=z('<g id="Group_9" data-name="Group 9" transform="translate(-214.172 -157.4)" data-v-031dff9e><path id="Path_27" data-name="Path 27" d="M242.2,174.7a16.337,16.337,0,1,1-23.1-.4A16.3,16.3,0,0,1,242.2,174.7Z" class="full-circle" data-v-031dff9e></path><g id="Group_8" data-name="Group 8" data-v-031dff9e><g id="Group_7" data-name="Group 7" data-v-031dff9e><path id="Path_28" data-name="Path 28" d="M231.6,158.2h0a15.191,15.191,0,0,1,11.2,4.8,15.5,15.5,0,0,1-11.2,26.3,15.533,15.533,0,0,1-15.5-15.9,15.474,15.474,0,0,1,4.8-10.9,15.3,15.3,0,0,1,10.7-4.3m0-.8a16.05,16.05,0,0,0-11.3,4.6,16.35,16.35,0,0,0,11.4,28.1,16.05,16.05,0,0,0,11.3-4.6,16.35,16.35,0,0,0-11.4-28.1Z" class="outline-circle" data-v-031dff9e></path></g></g></g>',1),Z=[F];function j(s,t){return n(),o("svg",T,Z)}const q=v(M,[["render",j],["__scopeId","data-v-031dff9e"]]),B=s=>(G("data-v-11fb41e0"),s=s(),A(),s),E={class:"app-section"},L=B(()=>e("div",{class:"shape-1"},null,-1)),J=B(()=>e("div",{class:"shape-2"},null,-1)),K={class:"columns is-multiline py-6"},O={class:"column is-12"},Q={class:"is-relative block mb-4 has-text-centered mx-auto max-w-8"},R={class:"full-circle-1 text-success"},U={class:"full-circle-2 text-primary"},X={class:"full-circle-3 text-yellow"},Y={class:"half-circle-1 text-info"},ee={class:"columns has-text-left b-columns-third-tablet-p mt-4"},te={class:"media"},se={class:"media-content"},ae={class:"subtitle is-6 text-medium"},ne=w({__name:"AppSectionShapes",props:{features:null,image:null,darkImage:null,imageWidth:{default:"1200"},imageHeight:{default:"882"},inverted:{type:Boolean,default:!1},blob:{type:Boolean,default:!1}},setup(s){const t=s;return(f,r)=>{const l=q,b=D,u=S,c=I;return n(),o("div",E,[L,J,e("div",K,[e("div",O,[e("div",Q,[e("div",R,[a(l)]),e("div",U,[a(l)]),e("div",X,[a(l)]),e("div",Y,[a(b)]),e("div",null,[a(u,{src:t.image,"src-dark":t.darkImage,class:"is-16by9 is-relative z-1 has-light-shadow app-mockup",alt:"App mockup",width:t.imageWidth,height:t.imageHeight},null,8,["src","src-dark","width","height"])]),e("div",ee,[(n(!0),o(k,null,$(t.features.slice(0,3),(d,p)=>(n(),o("div",{key:p,class:"column is-4"},[e("div",te,[e("div",se,[a(c,{tag:"h3",size:5,weight:"semi",inverted:t.inverted},{default:_(()=>[e("span",null,i(d.title),1)]),_:2},1032,["inverted"]),e("p",ae,i(d.text),1)])])]))),128))])])])])])}}});const ge=v(ne,[["__scopeId","data-v-11fb41e0"]]),ie={class:"columns is-vcentered b-columns-half-tablet-p"},oe={class:"column is-6"},le={class:"max-w-5"},ce={class:"text-gradient"},de={class:"columns is-multiline b-columns-half-tablet-p"},_e={class:"py-2 medium:py-3"},re=["data-icon"],ue={class:"column is-6 has-text-centered is-relative"},pe=w({__name:"SideSectionIcons",props:{title:null,subtitle:null,content:null,features:null,image:null,darkImage:{default:void 0},imageWidth:{default:"900"},imageHeight:{default:"788"},inverted:{type:Boolean,default:!1},blob:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},setup(s){const t=s,f=x(()=>[t.inverted&&"is-inverted",t.reverse&&"is-reverse"]),r=x(()=>[t.inverted&&"is-inverted"]);return(l,b)=>{const u=P,c=I,d=W,p=S;return n(),o("div",{class:h(["side-section mobile:py-0 small:py-6 z-1",g(f)])},[e("div",ie,[e("div",oe,[e("div",le,[a(u,{tag:"h3",size:6,weight:"bold",class:"pb-4",leading:""},{default:_(()=>[e("span",ce,i(s.subtitle),1)]),_:1}),a(c,{tag:"h2",size:3,weight:"semi",inverted:t.inverted,leading:""},{default:_(()=>[H(i(s.title),1)]),_:1},8,["inverted"]),y(l.$slots,"content",{},()=>[e("p",{class:h(["paragraph rem-95 mb-4",g(r)])},i(t.content),3)],!0),y(l.$slots,"features",{},()=>[e("div",de,[(n(!0),o(k,null,$(t.features.slice(0,4),(m,C)=>(n(),o("div",{key:C,class:"column is-6"},[e("div",_e,[e("i",{class:"iconify","data-icon":m.icon},null,8,re),a(c,{tag:"h3",size:6,weight:"semi",leading:"",inverted:t.inverted},{default:_(()=>[e("span",null,i(m.title),1)]),_:2},1032,["inverted"]),e("p",{class:h(["paragraph rem-85 max-w-3",g(r)])},i(m.text),3)])]))),128))])],!0)])]),e("div",ue,[t.blob?(n(),N(d,{key:0})):V("",!0),a(p,{class:"is-relative mx-auto",src:t.image,"src-dark":t.darkImage,alt:"side section image",width:t.imageWidth,height:t.imageHeight},null,8,["src","src-dark","width","height"])])])],2)}}});const ve=v(pe,[["__scopeId","data-v-d05ad19d"]]);export{ve as _,ge as a,q as b};
