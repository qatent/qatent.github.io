import{b as S,X as m,bb as C,o as t,e,j as s,F as _,m as d,n as g,bC as B,bD as F,t as l,f as y,w as b,i as w,l as I,v as N,x as P,y as V,A as K}from"./index.4498c4e2.js";const T="/assets/illustrations/pricing/sitting-girl.svg",o=a=>(P("data-v-fc1111aa"),a=a(),V(),a),D={class:"side-pricing"},E={class:"plans-wrapper"},G={class:"plans-wrapper-inner"},L={class:"plans"},j=["onClick","onKeydown"],q=["src"],x={class:"description"},z={class:"price"},A={class:"plan-details"},M=o(()=>s("img",{class:"girl",src:T,alt:"Pricing plan illustration"},null,-1)),O={class:"inner"},X=o(()=>s("h3",null,"Benefits",-1)),$={class:"feature-list"},H=o(()=>s("div",{class:"dot"},[s("div",{class:"dot-inner"},[s("i",{class:"iconify","data-icon":"feather:check"})])],-1)),J={class:"inner"},Q=o(()=>s("h3",null,"Features",-1)),R={class:"feature-list is-last"},U=o(()=>s("div",{class:"dot"},[s("div",{class:"dot-inner"},[s("i",{class:"iconify","data-icon":"feather:check"})])],-1)),W={key:0,class:"button-wrap pt-5"},Y=o(()=>s("a",{href:"https://my.qatent.com/signup",style:{"margin-bottom":"0",color:"#ffffff"}},"Start your Free Trial",-1)),Z={key:1,class:"button-wrap pt-5"},ss=S({__name:"PricingSection",props:{plans:null},setup(a){const p=a,c=m(0),k=m([]);return C(k,(h,v)=>{console.log("TOGGLE",h,v)}),(h,v)=>{const f=N;return t(),e("div",null,[s("div",D,[s("div",E,[s("div",G,[s("div",L,[(t(!0),e(_,null,d(p.plans,(i,n)=>(t(),e("div",{key:n,class:g(["plan",[c.value===n&&"is-active"]]),onClick:r=>c.value=n,onKeydown:B(F(()=>c.value=n,["prevent"]),["space"])},[s("img",{src:i.icon,alt:"Pricing plan icon"},null,8,q),s("div",x,[s("h3",null,l(i.title),1),s("p",null,l(i.subtitle),1)]),s("div",z,[s("div",null,[s("span",null,l(i.price.monthly),1)])])],42,j))),128))])])]),s("div",A,[M,(t(!0),e(_,null,d(p.plans,(i,n)=>(t(),e("div",{key:n,class:g(["plan-details-inner",[c.value===n&&"is-active"]])},[s("div",O,[X,s("div",$,[(t(!0),e(_,null,d(i.benefits,(r,u)=>(t(),e("div",{key:u,class:"feature-list-item"},[H,s("span",null,l(r.content),1)]))),128))])]),s("div",J,[Q,s("div",R,[(t(!0),e(_,null,d(i.features,(r,u)=>(t(),e("div",{key:u,class:"feature-list-item is-feature"},[U,s("span",null,l(r.content),1)]))),128))])]),n!==2?(t(),e("div",W,[y(f,{color:"primary",elevated:"",bold:"",fullwidth:""},{default:b(()=>[Y]),_:1})])):w("",!0),n===2?(t(),e("div",Z,[y(f,{color:"primary",disabled:"",elevated:"",bold:"",fullwidth:""},{default:b(()=>[I(" Coming Soon ")]),_:1})])):w("",!0)],2))),128))])])])}}});const es=K(ss,[["__scopeId","data-v-fc1111aa"]]);export{es as _};
