import{b as y,r as I,o as t,e as n,j as s,u as p,bE as h,i as g,f as c,w as r,F as w,m as x,h as R,t as v,q as B,x as G,y as C,A as k,g as D,n as E}from"./index.4498c4e2.js";import{_ as $}from"./Tags.vue_vue_type_script_setup_true_lang.835dc1b9.js";import{_ as S}from"./Tag.75316ce2.js";const u=o=>(G("data-v-7d65a6d2"),o=o(),C(),o),L={class:"card"},N={key:0,class:"card-image"},P=["src"],T={class:"card-content"},V={class:"media is-align-items-center"},j={class:"media-content"},z={class:"is-flex is-align-items-center is-justify-content-space-between"},F=u(()=>s("span",{class:"mr-2"},"Read More",-1)),O=u(()=>s("i",{class:"iconify","data-icon":"feather:arrow-right"},null,-1)),q={class:"card-stats is-flex is-align-items-center"},A={class:"is-flex is-align-items-center"},H=u(()=>s("i",{class:"iconify","data-icon":"feather:heart"},null,-1)),M={class:"ml-1"},J={key:1,class:"card-image"},K=["src"],Q=y({__name:"ResourceGridItem",props:{post:null,upsideDown:{type:Boolean,default:!1}},setup(o){const e=o;return(m,i)=>{const f=S,l=$,_=B,d=I("RouterLink");return t(),n("div",L,[e.upsideDown?(t(),n("div",N,[s("img",{class:"block",src:e.post.image,alt:"Post image",width:"360",height:"200",onErrorOnce:i[0]||(i[0]=a=>p(h)(a,"360x200"))},null,40,P)])):g("",!0),s("div",T,[s("div",V,[s("div",j,[c(l,null,{default:r(()=>[(t(!0),n(w,null,x(e.post.categories,(a,b)=>(t(),R(f,{key:b,label:a.name},null,8,["label"]))),128))]),_:1}),c(_,{tag:"h3",size:6,weight:"semi"},{default:r(()=>[s("span",null,v(e.post.title),1)]),_:1})])]),s("div",z,[s("div",null,[c(d,{to:{name:"blog-post"},class:"is-flex is-align-items-center"},{default:r(()=>[F,O]),_:1})]),s("div",q,[s("div",A,[H,s("span",M,v(e.post.likes),1)])])])]),e.upsideDown?g("",!0):(t(),n("div",J,[s("img",{class:"block",src:e.post.image,alt:"Post image",width:"360",height:"200",onErrorOnce:i[1]||(i[1]=a=>p(h)(a,"360x200"))},null,40,K)]))])}}});const U=k(Q,[["__scopeId","data-v-7d65a6d2"]]),W={class:"resource-grid"},X={class:"columns b-columns-half-tablet-p is-multiline"},Y=y({__name:"ResourceGrid",props:{posts:{default:()=>[]},upsideDown:{type:Boolean,default:!1},limit:{default:20},sideGrid:{type:Boolean,default:!1}},setup(o){const e=o,m=D(()=>[e.sideGrid?"is-6":"is-4"]);return(i,f)=>{const l=U;return t(),n("div",W,[s("div",X,[(t(!0),n(w,null,x(e.posts.slice(0,e.limit),(_,d)=>(t(),n("div",{key:d,class:E(["column",p(m)])},[c(l,{post:_,"upside-down":e.upsideDown},null,8,["post","upside-down"])],2))),128))])])}}});const ts=k(Y,[["__scopeId","data-v-55ef87f4"]]);export{ts as _};
