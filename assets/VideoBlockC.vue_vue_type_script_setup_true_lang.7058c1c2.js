import{b as d,o as t,e as n,j as e,f as l,w as c,t as i,F as m,m as h,h as f,i as k,q as v,bZ as g}from"./index.4498c4e2.js";import{_ as y}from"./Player.vue_vue_type_style_index_0_lang.211b269d.js";const b={class:"py-6"},w={class:"columns is-vcentered"},B={class:"column is-6 is-relative is-centered-portrait"},x={class:"video-player-container-wrapper"},C={class:"column is-5 is-offset-1"},V={class:"columns is-multiline b-columns-half-tablet-p"},z={class:"py-2 medium:py-4"},N={class:"paragraph max-w-3 rem-95"},q=d({__name:"VideoBlockC",props:{title:null,features:null,source:null,poster:null,links:{type:Boolean,default:!1}},setup(r){const s=r;return(F,L)=>{const _=y,a=v,p=g;return t(),n("div",b,[e("div",w,[e("div",B,[e("div",x,[l(_,{ratio:"4by3",source:s.source,poster:s.poster,title:s.title},null,8,["source","poster","title"])])]),e("div",C,[l(a,{tag:"h2",size:3,weight:"bold"},{default:c(()=>[e("span",null,i(s.title),1)]),_:1}),e("div",V,[(t(!0),n(m,null,h(s.features.slice(0,4),(o,u)=>(t(),n("div",{key:u,class:"column is-6"},[e("div",z,[l(a,{tag:"h3",size:6,weight:"semi",leading:""},{default:c(()=>[e("span",null,i(o.title),1)]),_:2},1024),e("p",N,i(o.text),1),s.links?(t(),f(p,{key:0,link:o.link,size:"small"},null,8,["link"])):k("",!0)])]))),128))])])])])}}});export{q as _};