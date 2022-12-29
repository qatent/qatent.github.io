import{_ as B}from"./FooterD.d961ddff.js";import{_ as F}from"./CtaBlockB.e8058dc8.js";import{g as I,_ as L}from"./index.e43c5e11.js";import{b as C,X as S,o,e as i,j as s,F as p,m,n as y,bD as x,bC as $,t as n,f as t,w as l,l as T,v as V,C as N,x as q,y as A,A as D,u as c,s as Q,E,G as K,bF as z}from"./index.4498c4e2.js";import{_ as M}from"./TestimonialBlockC.c53f6d52.js";import{_ as j}from"./ValuesSection.521e1f3a.js";import{_ as G,a as H}from"./VInput.3620f742.js";import{_ as R}from"./PageTitle.4a2bd2c4.js";import{e as k}from"./index.142c611c.js";import{p as U}from"./index.26826135.js";import{a as W}from"./index.bec4c590.js";import"./Field.e9551eba.js";import"./AvatarSimple.57c1e629.js";const X=r=>(q("data-v-c2dc9993"),r=r(),A(),r),Y={class:"pricing-wrapper"},J={class:"pricing-tabs"},O=["onClick","onKeydown"],Z=["src"],ss=X(()=>s("div",{class:"naver"},[s("div",{class:"naver-inner"},[s("div",{class:"naver-naver"})])],-1)),es={class:"container-inner"},ts={class:"solo-plans"},ns={class:"header"},os=["src"],is={class:"price"},as={class:"amount"},cs={class:"plan-tagline"},ls={class:"button-wrap"},rs={class:"benefits content"},_s={class:"container-inner no-padding"},ds={class:"plan-focus"},us={class:"left-side"},ps={class:"header"},ms=["src"],hs={class:"plan-tagline"},gs={class:"price"},vs={class:"amount"},fs={class:"price-info"},bs={class:"button-wrap"},ys={class:"benefits content"},ks={class:"right-side"},ws={class:"feature-highlight"},Ps={class:"highlight-item"},xs={class:"header"},Ts={class:"header-inner"},Cs={class:"title-wrap"},Bs={class:"subheader"},Fs=C({__name:"PricingTabbed",props:{plans:{default:()=>[]},personalPlans:{default:()=>[]},premiumPlans:{default:()=>[]}},setup(r){const h=r,_=S(0);return(w,P)=>{const g=V,b=G,v=H,f=N;return o(),i("div",Y,[s("div",J,[(o(!0),i(p,null,m(h.plans,(e,a)=>(o(),i("a",{key:a,class:y(["tab-item",_.value===a&&"is-active"]),onClick:x(d=>_.value=a,["prevent"]),onKeydown:$(x(()=>_.value=a,["prevent"]),["space"])},[s("img",{src:e.icon,alt:"Pricing icon"},null,8,Z),s("span",null,n(e.name),1)],42,O))),128)),ss]),s("div",{class:y(["pricing-container",_.value===0&&"is-active"])},[s("div",es,[s("div",ts,[(o(!0),i(p,null,m(h.personalPlans,(e,a)=>(o(),i("div",{key:a,class:"solo-plan"},[s("div",ns,[s("img",{src:e.icon,alt:"Pricing icon"},null,8,os),s("span",null,n(e.name),1)]),s("div",is,[s("div",as,n(e.price),1),s("p",null,"/"+n(e.priceBilling),1)]),s("div",cs,[s("p",null,n(e.planText),1)]),s("div",ls,[t(g,{to:"/",color:"primary",fullwidth:"",bold:"",raised:""},{default:l(()=>[T(n(e.buttonLabel),1)]),_:2},1024)]),s("div",rs,[s("ul",null,[(o(!0),i(p,null,m(e.features,(d,u)=>(o(),i("li",{key:u},n(d),1))),128))])])]))),128))])])],2),(o(!0),i(p,null,m(h.premiumPlans,(e,a)=>(o(),i("div",{key:a,class:y(["pricing-container",_.value===a+1&&"is-active"])},[s("div",_s,[s("div",ds,[s("div",us,[s("div",ps,[s("img",{src:e.icon,alt:"Pricing icon"},null,8,ms),s("span",null,n(e.name),1)]),s("div",hs,[s("p",null,n(e.planText),1)]),s("div",gs,[t(v,{icon:"feather:users"},{default:l(()=>[t(b,{placeholder:"Your team size...",rounded:""})]),_:1}),s("div",vs,n(e.price),1)]),s("div",fs,[s("p",null,n(e.priceBilling),1)]),s("div",bs,[t(g,{to:"/",color:"primary",fullwidth:"",bold:"",raised:""},{default:l(()=>[T(n(e.buttonLabel),1)]),_:2},1024)]),s("div",ys,[s("ul",null,[(o(!0),i(p,null,m(e.features,(d,u)=>(o(),i("li",{key:u},n(d),1))),128))])])]),s("div",ks,[s("div",ws,[s("div",Ps,[s("div",xs,[s("div",Ts,[s("div",Cs,[s("h3",null,n(e.highlight.title),1)])]),s("div",Bs,[s("p",null,n(e.highlight.subtitle),1)])]),t(f,{class:"highlight-image",src:e.highlight.image,"src-dark":e.highlight.darkImage,alt:"Feature highlight","image-width":"668","image-height":"454"},null,8,["src","src-dark"])])])])])])],2))),128))])}}});const Is=D(Fs,[["__scopeId","data-v-c2dc9993"]]),js=C({__name:"pricing-6",setup(r){return(h,_)=>{const w=R,P=Is,g=j,b=M,v=E,f=K,e=z,a=L,d=F,u=B;return o(),i("div",null,[t(f,null,{default:l(()=>[t(v,null,{default:l(()=>[t(w,{title:"A Price For Everyone",subtitle:"We scale with you",text:"Improve the way your work, discover a brand new tool and drop the hassle once and for all."}),t(P,{plans:c(k).allPlans,"personal-plans":c(k).personalPlans,"premium-plans":c(k).premiumPlans},null,8,["plans","personal-plans","premium-plans"]),t(g,{values:c(U),"image-height":"150px"},null,8,["values"]),t(b,{testimonials:c(W)},null,8,["testimonials"])]),_:1})]),_:1}),t(f,{wave:"wave-1","shape-color":"grey"},{default:l(()=>[t(v,null,{default:l(()=>[t(e,{title:"Read our FAQs",subtitle:"Have a Question?"}),t(a,{items:c(I)},null,8,["items"]),t(d,{"title-primary":"Start Now!","content-primary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?","cta-primary":"Free Trial","cta-primary-link":"/","title-secondary":"More info?","content-secondary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?","cta-secondary":"Contact Us","cta-secondary-link":"/",boxed:"",shapes:"",animated:""})]),_:1})]),_:1}),t(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,"social-links":c(Q)},null,8,["social-links"])])}}});export{js as default};
