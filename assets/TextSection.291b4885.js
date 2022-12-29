import{_ as A}from"./Player.vue_vue_type_style_index_0_lang.211b269d.js";import{b as h,g as b,r as B,o as n,e as i,j as s,f as c,w as l,t as o,l as w,n as $,u as y,h as P,i as C,k as I,B as V,q as v,x as k,y as T,A as f,F as x,m as S}from"./index.4498c4e2.js";const q=t=>(k("data-v-861fd45b"),t=t(),T(),t),N={class:"columns is-vcentered"},L={class:"column is-5"},F={class:"text-gradient"},R={class:"action-link"},j=q(()=>s("i",{class:"iconify","data-icon":"feather:arrow-right"},null,-1)),D={class:"column is-6 has-text-centered is-relative is-offset-1"},E={class:"video-player-container-wrapper"},G=h({__name:"SideSectionVideo",props:{title:null,subtitle:null,content:null,to:{default:void 0},cta:{default:void 0},source:null,poster:null,bordered:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},setup(t){const e=t,d=b(()=>[e.bordered&&"is-bordered",e.inverted&&"is-inverted",e.reverse&&"is-reverse"]),p=b(()=>[e.inverted&&"is-inverted"]);return(a,_)=>{const u=V,r=v,m=B("RouterLink"),z=A;return n(),i("div",{class:$(["side-section mobile:py-0 small:py-6 z-1",y(d)])},[s("div",N,[s("div",L,[c(u,{tag:"h3",size:6,weight:"bold",class:"pb-4",leading:""},{default:l(()=>[s("span",F,o(e.subtitle),1)]),_:1}),c(r,{tag:"h2",size:2,weight:"bold",inverted:e.inverted},{default:l(()=>[w(o(e.title),1)]),_:1},8,["inverted"]),s("p",{class:$(["paragraph rem-115 mb-4",y(p)])},o(e.content),3),t.cta?(n(),P(m,{key:0,to:e.to,class:"rem-115"},{default:l(()=>[s("span",R,o(e.cta),1),j]),_:1},8,["to"])):C("",!0),I(a.$slots,"content",{},void 0,!0)]),s("div",D,[s("div",E,[c(z,{ratio:"square",source:e.source,poster:e.poster,title:e.title},null,8,["source","poster","title"])])])])],2)}}});const fs=f(G,[["__scopeId","data-v-861fd45b"]]),H={class:"mx-auto max-w-9 pb-6"},J={class:"columns is-multiline b-columns-third-tablet-p"},K={class:"team-member"},M=["src"],O={class:"meta-info"},Q={class:"left"},U={class:"right"},W=["href"],X=["data-icon"],Y={class:"is-sr-only"},Z=h({__name:"TeamSection",props:{members:{default:()=>[]}},setup(t){const e=t;return(d,p)=>{const a=v;return n(),i("div",H,[s("div",J,[(n(!0),i(x,null,S(e.members,(_,u)=>(n(),i("div",{key:u,class:"column is-3"},[s("div",K,[s("img",{class:"mb-2",src:_.picture,alt:"Team member picture"},null,8,M),s("div",O,[s("div",Q,[c(a,{size:6,tag:"h3",narrow:""},{default:l(()=>[w(o(_.name),1)]),_:2},1024),s("p",null,o(_.role),1)]),s("div",U,[(n(!0),i(x,null,S(_.socialProfiles,(r,m)=>(n(),i("a",{key:m,href:r.url,target:"_blank",class:"social-profile"},[s("i",{class:"iconify","data-icon":r.icon},null,8,X),s("span",Y,o(r.name),1)],8,W))),128))])])])]))),128))])])}}});const gs=f(Z,[["__scopeId","data-v-0eb02c5e"]]),g=t=>(k("data-v-0e4471b2"),t=t(),T(),t),ss={class:"text-section"},es={class:"columns"},ts={class:"column is-7"},os={class:"paragraph mb-4"},ns={class:"paragraph"},as={class:"column is-4 is-offset-1"},is={class:"mb-4"},cs=g(()=>s("span",null,"General inquiries",-1)),ls=["mailto"],_s={class:"mb-4"},rs=g(()=>s("span",null,"Support inquiries",-1)),ds=["mailto"],ps=g(()=>s("span",null,"Assistance",-1)),us={class:"paragraph rem-90"},ms=h({__name:"TextSection",props:{firstParagraph:null,secondParagraph:null,supportParagraph:null,contactAddress:null,supportAddress:null},setup(t){const e=t;return(d,p)=>{const a=v;return n(),i("div",ss,[s("div",es,[s("div",ts,[s("p",os,o(e.firstParagraph),1),s("p",ns,o(e.secondParagraph),1)]),s("div",as,[s("div",is,[c(a,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[cs]),_:1}),s("a",{class:"mail-link",mailto:e.contactAddress},o(e.contactAddress),9,ls)]),s("div",_s,[c(a,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[rs]),_:1}),s("a",{class:"mail-link",mailto:e.supportAddress},o(e.supportAddress),9,ds)]),s("div",null,[c(a,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[ps]),_:1}),s("p",us,o(e.supportParagraph),1)])])])])}}});const bs=f(ms,[["__scopeId","data-v-0e4471b2"]]);export{bs as _,gs as a,fs as b};
