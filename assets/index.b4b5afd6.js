import{_ as k}from"./FooterD.d961ddff.js";import{b as H,_ as $}from"./index.9a5ed635.js";import{g as F,_ as B}from"./index.e43c5e11.js";import{b as m,r as L,o as s,e as n,j as o,f as e,w as a,n as q,t as _,F as y,m as f,l as h,i as N,q as R,A as C,u as l,s as T,E as w,G as S,bF as V}from"./index.4498c4e2.js";import{h as z,a as A,_ as E}from"./index.63989a60.js";import"./Field.e9551eba.js";import"./VInput.3620f742.js";import"./PageTitle.4a2bd2c4.js";const G={class:"flex-card category-card light-bordered"},j={class:"card-body"},D={class:"icon"},I=["data-icon"],P={class:"inner-content"},Q={class:"inner-text"},W={class:"card-meta"},O=["src"],Y={class:"meta-info"},J={class:"articles-number"},K={class:"authors"},M={class:"contributor-name"},U={key:0},X={key:0},Z={key:1},ee=m({__name:"HelpCenterCategoryCard",props:{category:null},setup(u){const t=u;return(g,p)=>{const c=R,r=L("RouterLink");return s(),n("div",G,[o("div",j,[e(r,{to:{name:"subpages-help-category-slug",params:{slug:t.category.slug}}},{default:a(()=>[o("div",D,[o("i",{class:q(["iconify",t.category.iconColor&&`text-${t.category.iconColor}`]),"data-icon":t.category.icon},null,10,I)]),o("div",P,[e(c,{tag:"h3",size:4,weight:"thin",leading:""},{default:a(()=>[o("span",null,_(t.category.name),1)]),_:1}),o("div",Q,[o("span",null,_(t.category.text),1)]),o("div",W,[(s(!0),n(y,null,f(t.category.contributors.slice(0,2),(i,d)=>(s(),n("img",{key:d,class:"small-avatar",src:i.picture,alt:"Contributor picture"},null,8,O))),128)),o("div",Y,[o("div",J,_(t.category.articles.length)+" articles in this section ",1),o("div",K,[h(" Written by "),o("span",M,_(t.category.contributors[0].name),1),t.category.contributors.length>1?(s(),n("span",U,[h(" and "+_(t.category.contributors.length-1)+" ",1),t.category.contributors.length-2<1?(s(),n("span",X," other ")):(s(),n("span",Z,"others"))])):N("",!0)])])])])]),_:1},8,["to"])])])}}});const te=C(ee,[["__scopeId","data-v-28c19f43"]]),oe={class:"py-6"},se={class:"help-center-categories"},ne={class:"columns is-multiline"},ae=m({__name:"HelpCenterCategories",props:{categories:null},setup(u){const t=u;return(g,p)=>{const c=te;return s(),n("div",oe,[o("div",se,[o("div",ne,[(s(!0),n(y,null,f(t.categories,(r,i)=>(s(),n("div",{key:i,class:"column is-6"},[e(c,{category:r},null,8,["category"])]))),128))])])])}}});const ce=C(ae,[["__scopeId","data-v-e9a2a596"]]),ge=m({__name:"index",setup(u){return(t,g)=>{const p=E,c=w,r=S,i=V,d=ce,v=B,b=$,x=k;return s(),n("div",null,[e(r,{color:"grey"},{default:a(()=>[e(c,null,{default:a(()=>[e(p,{title:"Help Center",subtitle:"Our Resources",text:"We have some nice resources to help you setup your project and get started as fast as possible.",topics:l(z)},null,8,["topics"])]),_:1})]),_:1}),e(r,{color:"grey"},{default:a(()=>[e(c,null,{default:a(()=>[e(i,{title:"Help Categories",subtitle:"Take a look at"}),e(d,{categories:l(A)},null,8,["categories"])]),_:1})]),_:1}),e(r,{color:"grey"},{default:a(()=>[e(c,null,{default:a(()=>[e(i,{title:"Read our FAQs",subtitle:"Have a Question?"}),e(v,{items:l(F)},null,8,["items"]),e(b,{punchline:"Easy-Peezy \u{1F44C}",title:"Resources to Get Started",subtitle:"You should definitely subscribe to our news for daily tips and tricks",posts:l(H),inverted:""},null,8,["posts"])]),_:1})]),_:1}),e(x,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light","social-links":l(T)},null,8,["social-links"])])}}});export{ge as default};