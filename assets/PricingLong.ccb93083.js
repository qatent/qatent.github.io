import{_ as y}from"./PolkaDots.145177e6.js";import{b as w,g as r,o as e,e as l,j as s,f as p,i as _,F as u,m,n as c,u as g,t,x,y as B,A as b}from"./index.d17d1dd6.js";const C=n=>(x("data-v-ff7d8817"),n=n(),B(),n),D={class:"py-6"},I={key:0,class:"polka-wrap polka-1"},S={class:"columns b-columns-half-tablet-p"},L={class:"pricing-long-card"},N={class:"pricing-name"},P=["src"],V={class:"pricing-price"},F={class:"price-value"},$=C(()=>s("p",{class:"paragraph rem-95 is-inverted-light"}," per user, per month ",-1)),j={class:"pricing-long-card-body"},z={class:"pricing-features"},A={key:1,class:"polka-wrap polka-2"},E=w({__name:"PricingLong",props:{plans:{default:()=>[]},columns:{default:3},limit:{default:4},pulled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},polkaDots:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},setup(n){const o=n,f=r(()=>[o.pulled&&"is-pulled",o.rounded&&"is-rounded",o.shadow&&"has-shadow",o.columns===4&&"max-w-9",o.columns===2&&"max-w-6"]),h=r(()=>[o.columns&&`is-${o.columns}`]);return(q,G)=>{const i=y;return e(),l("div",D,[s("div",{class:c(["pricing-long mx-auto",g(f)])},[o.polkaDots?(e(),l("div",I,[p(i)])):_("",!0),s("div",S,[(e(!0),l(u,null,m(o.plans.slice(0,o.limit),(a,v)=>(e(),l("div",{key:v,class:c(["column",g(h)])},[s("div",L,[s("div",{class:c(["pricing-long-card-header",a.color&&`is-${a.color}`])},[s("div",N,[s("img",{src:a.logo,alt:"pricing logo"},null,8,P),s("span",null,t(a.name),1)]),s("div",V,[s("div",F,[s("span",null,t(a.price),1)]),$])],2),s("div",j,[s("div",z,[s("ul",null,[(e(!0),l(u,null,m(a.features,(d,k)=>(e(),l("li",{key:k},[s("span",null,t(d.value),1),s("p",null,t(d.label),1)]))),128))])])])])],2))),128))]),o.polkaDots?(e(),l("div",A,[p(i)])):_("",!0)],2)])}}});const K=b(E,[["__scopeId","data-v-ff7d8817"]]);export{K as _};
