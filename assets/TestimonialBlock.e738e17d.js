import{o as c,e as i,j as t,b as g,g as n,n as o,u as s,bE as x,f as l,w as u,l as T,t as a,i as k,q as b,v as y,A as B}from"./index.4498c4e2.js";const C={viewBox:"0 0 1664 1408",width:"1.2em",height:"1.2em"},V=t("path",{fill:"currentColor",d:"M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"},null,-1),w=[V];function z(_,e){return c(),i("svg",C,w)}const E={name:"fa-quote-left",render:z},N={class:"py-6"},$=["src"],H={class:"paragraph"},L={key:0,class:"py-4"},M=g({__name:"TestimonialBlock",props:{image:null,title:null,content:null,linkLabel:{default:void 0},link:{default:void 0},reverse:{type:Boolean,default:!1}},setup(_){const e=_,d=n(()=>[e.reverse&&"is-reverse"]),m=n(()=>[e.reverse&&"is-offset-1"]),p=n(()=>[!e.reverse&&"is-offset-1"]);return(j,r)=>{const f=E,v=b,h=y;return c(),i("div",N,[t("div",{class:o(["columns is-vcentered b-columns-half-tablet-p",s(d)])},[t("div",{class:o(["column is-6",s(m)])},[t("img",{class:"testimonial-image",src:e.image,alt:"testifier image",onErrorOnce:r[0]||(r[0]=q=>s(x)(q,"600x600"))},null,40,$)],2),t("div",{class:o(["column is-5",s(p)])},[l(f,{class:"rem-125 mb-4 text-success"}),l(v,{tag:"h3",size:2,weight:"thin",leading:""},{default:u(()=>[T(a(e.title),1)]),_:1}),t("p",H,a(e.content),1),e.link?(c(),i("div",L,[l(h,{to:e.link,color:"primary",outlined:"",raised:""},{default:u(()=>[t("span",null,a(e.linkLabel),1)]),_:1},8,["to"])])):k("",!0)],2)],2)])}}});const D=B(M,[["__scopeId","data-v-b4d2fcfc"]]);export{D as _};
