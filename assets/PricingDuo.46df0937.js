import{_ as N}from"./PolkaDots.145177e6.js";import{b as z,g as f,X as F,o as e,e as t,j as s,f as o,w as i,l as c,t as d,n as p,F as g,m as y,i as k,u as w,q as I,v as S,x as V,y as $,A as P}from"./index.d17d1dd6.js";const b=_=>(V("data-v-0da1c9f6"),_=_(),$(),_),T={class:"pricing-duo"},j={class:"columns is-vcentered"},q={class:"column is-5 is-centered-mobile"},A={class:"paragraph mb-4 max-w-4"},E={class:"button-wrap"},L={class:"combo-button"},M={key:0,class:"polka-wrap polka-1"},X={class:"pricing-icon"},Y=["data-icon"],G={class:"plan-name"},H={class:"features-list"},J={key:0},K={class:"plan-price"},O=b(()=>s("div",{class:"price-per"},"per month",-1)),Q={key:1},R={class:"plan-price"},U=b(()=>s("div",{class:"price-per"},"per year",-1)),W={class:"plan-action"},Z={key:1,class:"polka-wrap polka-2"},ss=z({__name:"PricingDuo",props:{title:null,subtitle:null,plans:{default:()=>[]},pulled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},polkaDots:{type:Boolean,default:!1}},setup(_){const a=_,x=f(()=>[a.pulled&&"is-pulled"]),C=f(()=>[a.rounded&&"is-rounded"]),l=F(!1);return(es,r)=>{const u=I,v=S,h=N;return e(),t("div",{class:p(["py-6",w(x)])},[s("div",T,[s("div",j,[s("div",q,[o(u,{tag:"h2",size:3,weight:"semi",leading:""},{default:i(()=>[c(d(a.title),1)]),_:1}),s("p",A,d(a.subtitle),1),s("div",E,[s("div",L,[o(v,{class:p(!l.value&&"is-active"),onClick:r[0]||(r[0]=n=>l.value=!l.value)},{default:i(()=>[c(" Monthly ")]),_:1},8,["class"]),o(v,{class:p(l.value&&"is-active"),onClick:r[1]||(r[1]=n=>l.value=!l.value)},{default:i(()=>[c(" Yearly ")]),_:1},8,["class"])])])]),(e(!0),t(g,null,y(a.plans.slice(0,2),(n,m)=>(e(),t("div",{key:m,class:"column"},[a.polkaDots&&m===0?(e(),t("div",M,[o(h)])):k("",!0),s("div",{class:p(["pricing-card",w(C)])},[s("div",X,[s("i",{class:"iconify","data-icon":n.icon},null,8,Y)]),s("div",G,d(n.name),1),s("ul",H,[(e(!0),t(g,null,y(n.features,(B,D)=>(e(),t("li",{key:D},d(B),1))),128))]),l.value?(e(),t("div",Q,[s("div",R,[o(u,{tag:"h3",size:4,weight:"bold",narrow:""},{default:i(()=>[c(" $"+d(n.price.yearly.toFixed(2)),1)]),_:2},1024)]),U])):(e(),t("div",J,[s("div",K,[o(u,{tag:"h3",size:4,weight:"bold",narrow:""},{default:i(()=>[c(" $"+d(n.price.monthly.toFixed(2)),1)]),_:2},1024)]),O])),s("div",W,[o(v,{color:"primary",long:3,raised:""},{default:i(()=>[c("Try Now")]),_:1})])],2),a.polkaDots&&m===1?(e(),t("div",Z,[o(h)])):k("",!0)]))),128))])])],2)}}});const as=P(ss,[["__scopeId","data-v-0da1c9f6"]]);export{as as _};
