import{_ as k}from"./ErrorHero.bf2e6cdb.js";import{b as x,cx as B,g as i,o as C,e as I,f as e,w as s,j as o,l as a,t as $,u as E,bD as p,bC as N,E as S,C as T,q as A,v as D,bH as H,x as P,y as V,z as j,A as z,bI as d}from"./index.4498c4e2.js";import{_ as K}from"./ThemeToggle.5b9938b7.js";const r=t=>(P("data-v-775e7e83"),t=t(),V(),t),q={class:"error-nav"},F={class:"error-nav-inner"},M=r(()=>o("div",{class:"left"},[o("img",{class:"navbar-logo",src:j,alt:"logo"})],-1)),O={class:"right"},R={class:"error-wrapper"},G={class:"error-wrapper-inner"},J=r(()=>o("div",{class:"underlay"},[o("span",null,"404")],-1)),L={class:"error-image"},Q={class:"error-content"},U=r(()=>o("span",null,"Page Not Found",-1)),W={class:"paragraph rem-115 mx-auto max-w-4 mb-4"},u=x({__name:"[...all]",setup(t){const _=B(),m=i(()=>Array.isArray(_.params.all)?_.params.all:[]),g=i(()=>`/${m.value.join("/")}`);return(l,n)=>{const v=K,f=S,h=T,y=A,c=D,b=H,w=k;return C(),I("div",null,[e(w,{color:"grey",pattern:""},{error:s(()=>[o("div",null,[o("div",q,[e(f,null,{default:s(()=>[o("div",F,[M,o("div",O,[e(v)])])]),_:1})]),o("div",R,[o("div",G,[J,o("div",L,[e(h,{src:"/assets/illustrations/error/error-1.svg","src-dark":"/assets/illustrations/error/error-1.svg",alt:"Error image"})]),o("div",Q,[e(y,{tag:"h2",size:3,weight:"bold",leading:""},{default:s(()=>[U]),_:1}),o("p",W,[a(" Oops, something went wrong and we couldn't find that page at "),o("strong",null,$(E(g)),1),a(" . Please try again later. ")]),e(b,{alignment:"centered"},{default:s(()=>[e(c,{to:"/",long:3,color:"primary",raised:"",bold:""},{default:s(()=>[a(" Homepage ")]),_:1}),e(c,{long:3,color:"primary",outlined:"",bold:"",onClick:n[0]||(n[0]=p(X=>l.$router.back(),["prevent"])),onKeydown:n[1]||(n[1]=N(p(()=>l.$router.back(),["prevent"]),["space"]))},{default:s(()=>[a(" Back ")]),_:1})]),_:1})])])])])]),_:1})])}}});typeof d=="function"&&d(u);const eo=z(u,[["__scopeId","data-v-775e7e83"]]);export{eo as default};