import{b as B,g as m,r as b,o as n,e as a,j as s,u as c,bE as w,t as o,i as y,f as _,w as x,l as u,n as h,q as k,x as C,y as I,A as L,F as D,m as E}from"./index.d17d1dd6.js";import{_ as F}from"./AvatarSimple.100281ad.js";const g=e=>(C("data-v-26c227af"),e=e(),I(),e),S={key:0,class:"featured-post-image"},N=["src"],V={class:"post-date"},z={class:"post-date-inner"},R={class:"featured-post-body"},A={class:"featured-post-title"},O={class:"title-avatar"},P={class:"title-meta"},T={class:"post-subtitle"},$={class:"author-name",href:"#"},j=g(()=>s("span",{class:"px-2"},"\xB7",-1)),q={href:"#"},H={class:"post-action"},M=g(()=>s("span",null,"\u27F6",-1)),G={class:"post-stats is-flex is-align-items-center"},J={class:"is-flex is-align-items-center"},K=g(()=>s("i",{class:"iconify","data-icon":"feather:eye"},null,-1)),Q={class:"ml-1"},U={key:1,class:"featured-post-image"},W=["src"],X={class:"post-date"},Y={class:"post-date-inner"},Z=B({__name:"BlogListItem",props:{post:null,upsideDown:{type:Boolean,default:!1}},setup(e){const t=e,d=m(()=>[t.upsideDown?"is-upside-down":""]);return(f,i)=>{const v=F,p=k,r=b("RouterLink");return n(),a("div",{class:h(["post-list-item",c(d)])},[t.upsideDown?y("",!0):(n(),a("div",S,[s("img",{src:t.post.image,alt:"Featured image",width:"360",height:"200",onErrorOnce:i[0]||(i[0]=l=>c(w)(l,"360x200"))},null,40,N),s("div",V,[s("div",z,[s("span",null,o(t.post.date),1)])])])),s("div",R,[s("div",A,[s("div",O,[_(v,{picture:t.post.author.photo,size:"medium"},null,8,["picture"])]),s("div",P,[_(p,{tag:"h3",size:5,weight:"semi",narrow:""},{default:x(()=>[s("span",null,o(t.post.title),1)]),_:1}),s("h4",T,[s("span",null,[u(" by "),s("a",$,o(t.post.author.name),1)]),j,s("span",null,[u(" Posted in "),s("a",q,o(t.post.category),1)])])])]),s("p",null,o(t.post.abstract),1),s("div",H,[_(r,{to:"/blog",class:"read-more-link"},{default:x(()=>[u(" Read More "),M]),_:1}),s("div",G,[s("div",J,[K,s("span",Q,o(t.post.views),1)])])])]),t.upsideDown?(n(),a("div",U,[s("img",{src:t.post.image,alt:"Featured image",width:"758",height:"421",onErrorOnce:i[1]||(i[1]=l=>c(w)(l,"758x421"))},null,40,W),s("div",X,[s("div",Y,[s("span",null,o(t.post.date),1)])])])):y("",!0)],2)}}});const ss=L(Z,[["__scopeId","data-v-26c227af"]]),ts={class:"columns b-columns-half-tablet-p is-multiline"},es=B({__name:"BlogList",props:{posts:{default:()=>[]},upsideDown:{type:Boolean,default:!1},limit:{default:20},singleList:{type:Boolean,default:!1},sideList:{type:Boolean,default:!1}},setup(e){const t=e,d=m(()=>[t.singleList&&!t.sideList&&"max-w-7"]),f=m(()=>[t.singleList?"is-12":"is-6"]);return(i,v)=>{const p=ss;return n(),a("div",{class:h(["blog-grid mx-auto",c(d)])},[s("div",ts,[(n(!0),a(D,null,E(t.posts.slice(0,t.limit),(r,l)=>(n(),a("div",{key:l,class:h(["column",c(f)])},[_(p,{post:r,"upside-down":t.upsideDown},null,8,["post","upside-down"])],2))),128))])],2)}}});const as=L(es,[["__scopeId","data-v-9010d847"]]);export{as as _};
