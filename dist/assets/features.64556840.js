import{_ as te}from"./DemoLinks.072b5868.js";import{_ as w,a as se}from"./DemoTitle.9dad457e.js";import{D as oe}from"./DocumentationFooter.04bcec7b.js";import{_ as $,a as I}from"./PrismCode.98a08cea.js";import{_ as D}from"./DemoProps.vue_vue_type_script_setup_true_lang.c9237587.js";import{b as v,o as c,e as p,f as e,w as t,u as a,bZ as q,F as h,j as o,l as k,E as L,G as S,cl as P,cm as ae,g as y,r as W,m as z,n as g,k as F,t as b,h as H,i as C,ap as Y,q as E,x as Z,y as Q,A as R,C as T,bY as A,cn as G,ci as V,cj as j,co as K,cp as M,cq as U,cr as O}from"./index.d17d1dd6.js";import{_ as ie}from"./FeatureBlockA.73fd1520.js";import{_ as J}from"./IconBox.a31e6aa1.js";import{_ as le}from"./FeatureBlockL.8c5d3fa3.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";import"./SimpleTableHeader.176728da.js";const ne={props:[{name:"alignment",type:"string",required:"false",default:"undefined",values:["centered"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},re=`
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockA
    alignment="centered"
    :features="features"
    :columns="4"
    :limit="6"
    size="medium"
    inverted
  />
</template>
`,ue=`
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`,ce=o("div",{class:"py-4"},null,-1),de=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),me=v({__name:"FeatureBlockADoc",setup(f){return(s,_)=>{const i=w,r=ie,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 1",link:"block-a-props"}),e(r,{alignment:"centered",features:a(q),columns:4,limit:6,size:"medium"},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 2",link:"block-a-props"}),e(r,{alignment:"centered",features:a(q),columns:4,limit:6,size:"medium",rounded:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 3",link:"block-a-props",inverted:""}),e(r,{alignment:"centered",features:a(q),columns:4,limit:6,size:"medium",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 4",link:"block-a-props"}),e(r,{features:a(q),columns:3,limit:8,size:"small"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 5",link:"block-a-props",inverted:""}),e(r,{features:a(q),columns:3,limit:8,size:"small",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 6",link:"block-a-props"}),e(r,{features:a(q),columns:3,limit:8,size:"small",rounded:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A",subtitle:"Feature block A variation 7",link:"block-a-props"}),e(r,{features:a(q),columns:6,limit:4,size:"medium"},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block A Props",subtitle:"Available props for block A"}),ce,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(re)},null,8,["code"])]),props:t(()=>[e(d,{props:a(ne).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(ue)},null,8,["code"])]),usage:t(()=>[de]),_:1})]),_:1})]),_:1})],64)}}}),pe={props:[{name:"alignment",type:"string",required:"false",default:"undefined",values:["centered"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},fe=`
<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockB
    alignment="centered"
    :features="features"
    :columns="4"
    :limit="6"
    size="medium"
    inverted
  />
</template>
`,_e=`
export const features2: ImageFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/laptop-mail.svg',
    darkImage: '/assets/icons/colored/laptop-mail.svg',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/papers.svg',
    darkImage: '/assets/icons/colored/papers.svg',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/compass.svg',
    darkImage: '/assets/icons/colored/compass.svg',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/credit-card.svg',
    darkImage: '/assets/icons/colored/credit-card.svg',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/clock.svg',
    darkImage: '/assets/icons/colored/clock.svg',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/bell.svg',
    darkImage: '/assets/icons/colored/bell.svg',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/puzzle.svg',
    darkImage: '/assets/icons/colored/puzzle.svg',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/chat.svg',
    darkImage: '/assets/icons/colored/chat.svg',
    link: '/',
  },
]
`,be=o("div",{class:"py-4"},null,-1),ge=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ke=v({__name:"FeatureBlockBDoc",setup(f){return(s,_)=>{const i=w,r=ae,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 1",link:"block-b-props"}),e(r,{alignment:"centered",features:a(P),columns:4,limit:6},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 2",link:"block-b-props",inverted:""}),e(r,{alignment:"centered",features:a(P),columns:4,limit:6,inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 3",link:"block-b-props"}),e(r,{alignment:"centered",features:a(P),columns:4,limit:6,size:"small",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 4",link:"block-b-props"}),e(r,{size:"small",features:a(P),columns:3,limit:8},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B",subtitle:"Feature block B variation 5",link:"block-b-props",inverted:""}),e(r,{size:"small",features:a(P),columns:3,limit:8,inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block B Props",subtitle:"Available props for block B"}),be,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(fe)},null,8,["code"])]),props:t(()=>[e(d,{props:a(pe).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(_e)},null,8,["code"])]),usage:t(()=>[ge]),_:1})]),_:1})]),_:1})],64)}}}),X=f=>(Z("data-v-3daafbb4"),f=f(),Q(),f),ve={class:"py-6 mx-auto max-w-9"},he={class:"columns is-multiline b-columns-half-tablet-p"},ye=["data-icon"],xe={class:"paragraph rem-95"},Be=X(()=>o("span",null,"Read More",-1)),qe=X(()=>o("i",{class:"iconify","data-icon":"feather:arrow-right"},null,-1)),Fe=Y('<div class="bubble bubble-1" data-v-3daafbb4></div><div class="bubble bubble-2" data-v-3daafbb4></div><div class="bubble bubble-3" data-v-3daafbb4></div><div class="bubble bubble-4" data-v-3daafbb4></div><div class="bubble bubble-5" data-v-3daafbb4></div>',5),we=v({__name:"FeatureBlockC",props:{features:null,limit:{default:3},size:{default:void 0},rounded:{type:Boolean,default:!1},links:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.horizontal?"is-6":"is-4"]),i=y(()=>[s.animated&&"animated",!s.horizontal&&"has-text-centered p-6 large:p-10"]),r=y(()=>[s.size==="small"&&"rem-90",s.links&&"mb-4",!s.horizontal&&"mx-auto max-w-2"]);return(l,n)=>{const u=J,d=E,m=W("RouterLink");return c(),p("div",ve,[o("div",he,[(c(!0),p(h,null,z(s.features.slice(0,s.limit),(B,x)=>(c(),p("div",{key:x,class:g(["column",a(_)])},[o("div",{class:g(["box",a(i)])},[F(l.$slots,"column",{feature:B,index:x},()=>[e(u,{color:B.color,size:s.size,rounded:s.rounded},{default:t(()=>[o("i",{class:"iconify","data-icon":B.icon},null,8,ye)]),_:2},1032,["color","size","rounded"]),e(d,{tag:"h3",size:6,weight:"semi",leading:""},{default:t(()=>[o("span",null,b(B.title),1)]),_:2},1024),o("p",xe,b(B.text),1),s.links?(c(),H(m,{key:0,class:g(["action",a(r)]),to:B.link},{default:t(()=>[Be,qe]),_:2},1032,["class","to"])):C("",!0),Fe],!0)],2)],2))),128))])])}}});const $e=R(we,[["__scopeId","data-v-3daafbb4"]]),Ie={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},De=`
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockC
    :features="features"
    :limit="6"
    size="medium"
    links
    animated
  />
</template>
`,Le=`
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`,Se=o("div",{class:"py-4"},null,-1),ze=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),He=v({__name:"FeatureBlockCDoc",setup(f){return(s,_)=>{const i=w,r=$e,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C",subtitle:"Feature block C variation 1",link:"block-c-props"}),e(r,{features:a(q),limit:6,size:"medium",links:"",animated:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C",subtitle:"Feature block C variation 2",link:"block-c-props"}),e(r,{features:a(q),limit:6,size:"small",animated:"",horizontal:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C",subtitle:"Feature block C variation 3",link:"block-c-props"}),e(r,{features:a(q),limit:6,size:"medium",links:"",rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block C Props",subtitle:"Available props for block C"}),Se,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(De)},null,8,["code"])]),props:t(()=>[e(d,{props:a(Ie).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Le)},null,8,["code"])]),usage:t(()=>[ze]),_:1})]),_:1})]),_:1})],64)}}}),ee=f=>(Z("data-v-155ebed8"),f=f(),Q(),f),Ce={class:"py-6 mx-auto max-w-9"},Ee={class:"columns is-multiline b-columns-half-tablet-p"},Pe={class:"paragraph rem-95"},Ae=ee(()=>o("span",null,"Read More",-1)),Te=ee(()=>o("i",{class:"iconify","data-icon":"feather:arrow-right"},null,-1)),Ve=Y('<div class="bubble bubble-1" data-v-155ebed8></div><div class="bubble bubble-2" data-v-155ebed8></div><div class="bubble bubble-3" data-v-155ebed8></div><div class="bubble bubble-4" data-v-155ebed8></div><div class="bubble bubble-5" data-v-155ebed8></div>',5),Re=v({__name:"FeatureBlockD",props:{features:null,limit:{default:3},size:{default:void 0},links:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.horizontal?"is-6":"is-4"]),i=y(()=>[s.animated&&"animated",!s.horizontal&&"has-text-centered p-6 large:p-10"]),r=y(()=>[s.size&&`is-${s.size}`]),l=y(()=>[s.size==="small"&&"rem-90",s.links&&"mb-4",!s.horizontal&&"mx-auto max-w-2"]);return(n,u)=>{const d=T,m=E,B=W("RouterLink");return c(),p("div",Ce,[o("div",Ee,[(c(!0),p(h,null,z(s.features.slice(0,s.limit),(x,N)=>(c(),p("div",{key:N,class:g(["column",a(_)])},[o("div",{class:g(["box",a(i)])},[F(n.$slots,"column",{feature:x,index:N},()=>[e(d,{src:x.image,"src-dark":x.darkImage,class:g(["feature-block-image",...a(r)]),alt:"featured image"},null,8,["src","src-dark","class"]),e(m,{tag:"h3",size:6,weight:"semi",leading:""},{default:t(()=>[o("span",null,b(x.title),1)]),_:2},1024),o("p",Pe,b(x.text),1),s.links?(c(),H(B,{key:0,class:g(["action",a(l)]),to:x.link},{default:t(()=>[Ae,Te]),_:2},1032,["class","to"])):C("",!0),Ve],!0)],2)],2))),128))])])}}});const Ne=R(Re,[["__scopeId","data-v-155ebed8"]]),Ge={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},je=`
<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockD
    :features="features2"
    :limit="6"
    size="medium"
    links
    animated
  />
</template>
`,Me=`
export const features2: ImageFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/laptop-mail.svg',
    darkImage: '/assets/icons/colored/laptop-mail.svg',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/papers.svg',
    darkImage: '/assets/icons/colored/papers.svg',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/compass.svg',
    darkImage: '/assets/icons/colored/compass.svg',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/credit-card.svg',
    darkImage: '/assets/icons/colored/credit-card.svg',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/clock.svg',
    darkImage: '/assets/icons/colored/clock.svg',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/bell.svg',
    darkImage: '/assets/icons/colored/bell.svg',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/puzzle.svg',
    darkImage: '/assets/icons/colored/puzzle.svg',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/chat.svg',
    darkImage: '/assets/icons/colored/chat.svg',
    link: '/',
  },
]
`,Je=o("div",{class:"py-4"},null,-1),Ke=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ue=v({__name:"FeatureBlockDDoc",setup(f){return(s,_)=>{const i=w,r=Ne,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D",subtitle:"Feature block D variation 1",link:"block-d-props"}),e(r,{features:a(P),limit:6,size:"medium",links:"",animated:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D",subtitle:"Feature block D variation 2",link:"block-d-props"}),e(r,{features:a(P),limit:6,size:"small",horizontal:"",animated:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D",subtitle:"Feature block D variation 3",link:"block-d-props"}),e(r,{features:a(P),limit:6,links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block D Props",subtitle:"Available props for block D"}),Je,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(je)},null,8,["code"])]),props:t(()=>[e(d,{props:a(Ge).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Me)},null,8,["code"])]),usage:t(()=>[Ke]),_:1})]),_:1})]),_:1})],64)}}}),Oe={class:"py-6"},We={class:"columns is-multiline is-vcentered"},Ye={class:"column is-6"},Ze={class:"columns b-columns-half-tablet-p"},Qe={class:"py-2 medium:py-4"},Xe={class:"column is-6"},et=v({__name:"FeatureBlockE",props:{title:null,content:null,features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.inverted&&"text-light"]);return(i,r)=>{const l=E,n=A,u=T;return c(),p("div",Oe,[o("div",We,[o("div",Ye,[e(l,{tag:"h2",size:3,weight:"semi",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(s.title),1)]),_:1},8,["inverted"]),o("p",{class:g(["paragraph max-w-tp-full medium:max-w-4 mb-5",a(_)])},b(s.content),3),F(i.$slots,"features",{},()=>[o("div",Ze,[(c(!0),p(h,null,z(s.features.slice(0,2),(d,m)=>(c(),p("div",{key:m,class:"column is-6"},[o("div",Qe,[e(l,{tag:"h3",size:6,weight:"semi",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(d.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph max-w-3 rem-95",a(_)])},b(d.text),3),s.links?(c(),H(n,{key:0,link:d.link,size:"small"},null,8,["link"])):C("",!0)])]))),128))])])]),o("div",Xe,[F(i.$slots,"image",{},()=>[e(u,{src:s.image,"src-dark":s.darkImage,class:g(["block","mx-auto"]),alt:"featured image"},null,8,["src","src-dark"])])])])])}}}),tt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},st=`
<script setup lang="ts">
import { features3 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockE
    title="VR For Business."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
      inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
      respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
      constructio interrete. Disserendi artem nullam habuit. Videsne quam
      sit magna dissensio? Ecce aliud simile dissimile."
    :features="features3"
    image="/@src/assets/illustrations/features/vr.svg"
    dark-image="/@src/assets/illustrations/features/vr-dark.svg"
    links
  />
</template>
`,ot=`
export const features3: SimpleFeature[] = [
  {
    title: 'Monthly reports',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Pro Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`,at=o("div",{class:"py-4"},null,-1),it=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),lt=v({__name:"FeatureBlockEDoc",setup(f){return(s,_)=>{const i=w,r=et,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E",subtitle:"Feature block E variation 1",link:"block-e-props"}),e(r,{title:"Grow Faster.",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile.`,features:a(G),image:"/assets/illustrations/features/thinking.svg","dark-image":"/assets/illustrations/features/thinking.svg"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E",subtitle:"Feature block E variation 2",link:"block-e-props",inverted:""}),e(r,{title:"Grow Faster.",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile.`,features:a(G),image:"/assets/illustrations/features/bike-dark.svg","dark-image":"/assets/illustrations/features/bike-dark.svg",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E",subtitle:"Feature block E variation 3",link:"block-e-props"}),e(r,{title:"VR For Business.",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile.`,features:a(G),image:"/assets/illustrations/features/vr.svg","dark-image":"/assets/illustrations/features/vr-dark.svg",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block E Props",subtitle:"Available props for block E"}),at,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(st)},null,8,["code"])]),props:t(()=>[e(d,{props:a(tt).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(ot)},null,8,["code"])]),usage:t(()=>[it]),_:1})]),_:1})]),_:1})],64)}}}),nt={class:"py-6"},rt={class:"columns is-multiline is-vcentered"},ut={class:"column is-6"},ct={class:"column is-6"},dt={class:"mb-6"},mt={class:"columns is-multiline b-columns-half-tablet-p"},pt={class:"py-2 medium:py-4"},ft=v({__name:"FeatureBlockF",props:{title:null,features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.inverted&&"text-light"]);return(i,r)=>{const l=T,n=E,u=A;return c(),p("div",nt,[o("div",rt,[o("div",ut,[F(i.$slots,"image",{},()=>[e(l,{src:s.image,"src-dark":s.darkImage,class:g(["block","mx-auto"]),alt:"featured image"},null,8,["src","src-dark"])])]),o("div",ct,[F(i.$slots,"title",{},()=>[o("div",dt,[e(n,{tag:"h2",size:3,weight:"bold",narrow:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(s.title),1)]),_:1},8,["inverted"])])]),F(i.$slots,"features",{},()=>[o("div",mt,[(c(!0),p(h,null,z(s.features.slice(0,4),(d,m)=>(c(),p("div",{key:m,class:"column is-6"},[o("div",pt,[e(n,{tag:"h3",size:6,weight:"semi",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(d.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph max-w-3",a(_)])},b(d.text),3),s.links?(c(),H(u,{key:0,link:d.link,size:"small"},null,8,["link"])):C("",!0)])]))),128))])])])])])}}}),_t={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},bt=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockF
    title="On point delivery."
    :features="features4"
    image="/@src/assets/illustrations/features/flying.svg"
    dark-image="/@src/assets/illustrations/features/flying-dark.svg"
    links
  />
</template>
`,gt=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`,kt=o("div",{class:"py-4"},null,-1),vt=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ht=v({__name:"FeatureBlockFDoc",setup(f){return(s,_)=>{const i=w,r=ft,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F",subtitle:"Feature block F variation 1",link:"block-f-props"}),e(r,{title:"On point delivery.",features:a(V),image:"/assets/illustrations/features/bike.svg","dark-image":"/assets/illustrations/features/bike-dark.svg"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F",subtitle:"Feature block F variation 2",link:"block-f-props",inverted:""}),e(r,{title:"On point delivery.",features:a(V),image:"/assets/illustrations/features/flying-dark.svg","dark-image":"/assets/illustrations/features/flying-dark.svg",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F",subtitle:"Feature block F variation 3",link:"block-f-props"}),e(r,{title:"On point delivery.",features:a(V),image:"/assets/illustrations/features/flying.svg","dark-image":"/assets/illustrations/features/flying-dark.svg",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block F Props",subtitle:"Available props for block F"}),kt,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(bt)},null,8,["code"])]),props:t(()=>[e(d,{props:a(_t).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(gt)},null,8,["code"])]),usage:t(()=>[vt]),_:1})]),_:1})]),_:1})],64)}}}),yt={class:"py-6"},xt={class:"columns is-multiline"},Bt={class:"column is-12"},qt={class:"block mb-4 has-text-centered mx-auto max-w-8"},Ft={class:"columns b-columns-third-tablet-p has-text-left mt-4"},wt={class:"media"},$t={class:"media-left"},It=["data-icon"],Dt={class:"media-content"},Lt=v({__name:"FeatureBlockG",props:{features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.inverted&&"text-light"]);return(i,r)=>{const l=T,n=J,u=E,d=A;return c(),p("div",yt,[o("div",xt,[o("div",Bt,[o("div",qt,[F(i.$slots,"image",{},()=>[e(l,{src:"/@src/assets/illustrations/feature-image-tablet.svg","src-dark":s.darkImage,alt:"featured image"},null,8,["src-dark"])]),o("div",Ft,[F(i.$slots,"features",{},()=>[(c(!0),p(h,null,z(s.features.slice(0,3),(m,B)=>(c(),p("div",{key:B,class:"column is-4"},[o("div",wt,[o("div",$t,[e(n,{color:m.color,size:"small",inverted:s.inverted},{default:t(()=>[o("i",{class:"iconify","data-icon":m.icon},null,8,It)]),_:2},1032,["color","inverted"])]),o("div",Dt,[e(u,{tag:"h3",size:6,weight:"semi",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(m.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph rem-90",a(_)])},b(m.text),3),s.links?(c(),H(d,{key:0,link:m.link,size:"small"},null,8,["link"])):C("",!0)])])]))),128))])])])])])])}}}),St={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},zt=`
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockG
    :features="features5"
    image="/@src/assets/illustrations/features/feature-image-tablet.svg"
    dark-image="/@src/assets/illustrations/features/feature-image-tablet.svg"
    links
  />
</template>
`,Ht=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`,Ct=o("div",{class:"py-4"},null,-1),Et=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Pt=v({__name:"FeatureBlockGDoc",setup(f){return(s,_)=>{const i=w,r=Lt,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-g-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G",subtitle:"Feature block G variation 1",link:"block-g-props"}),e(r,{features:a(j),image:"/assets/illustrations/features/feature-image-meditation.svg","dark-image":"/assets/illustrations/features/feature-image-meditation.svg"},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G",subtitle:"Feature block G variation 2",link:"block-g-props",inverted:""}),e(r,{features:a(j),image:"data:image/gif;base64,replace_with_your_image","dark-image":"data:image/gif;base64,replace_with_your_image",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G",subtitle:"Feature block G variation 3",link:"block-g-props"}),e(r,{features:a(j),image:"/assets/illustrations/features/feature-image-tablet.svg","dark-image":"/assets/illustrations/features/feature-image-tablet.svg",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-g-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block G Props",subtitle:"Available props for block G"}),Ct,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(zt)},null,8,["code"])]),props:t(()=>[e(d,{props:a(St).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Ht)},null,8,["code"])]),usage:t(()=>[Et]),_:1})]),_:1})]),_:1})],64)}}}),At={class:"py-6"},Tt={class:"columns is-multiline b-columns-half-tablet-p"},Vt={class:"is-flex items-start py-4"},Rt=["data-icon"],Nt={class:"ml-4"},Gt=v({__name:"FeatureBlockH",props:{features:null,columns:{default:4},limit:{default:6},rounded:{type:Boolean,default:!1},links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.columns&&`is-${s.columns}`]),i=y(()=>[s.columns!=6&&"max-w-3 rem-80",s.columns===6&&"max-w-4 rem-90",s.inverted&&"text-light"]);return(r,l)=>{const n=J,u=E,d=A;return c(),p("div",At,[o("div",Tt,[(c(!0),p(h,null,z(s.features.slice(0,s.limit),(m,B)=>(c(),p("div",{key:B,class:g(["column",a(_)])},[o("div",Vt,[e(n,{color:m.color,size:"small",rounded:s.rounded,inverted:s.inverted},{default:t(()=>[o("i",{class:"iconify","data-icon":m.icon},null,8,Rt)]),_:2},1032,["color","rounded","inverted"]),o("div",Nt,[e(u,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(m.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph small:max-w-2 pt-2",a(i)])},b(m.text),3),s.links?(c(),H(d,{key:0,link:m.link,size:"small"},null,8,["link"])):C("",!0)])])],2))),128))])])}}}),jt={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Mt=`
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockH :features="features" :columns="3" :limit="8" />
</template>
`,Jt=`
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`,Kt=o("div",{class:"py-4"},null,-1),Ut=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ot=v({__name:"FeatureBlockHDoc",setup(f){return(s,_)=>{const i=w,r=Gt,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-h-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 1",link:"block-h-props"}),e(r,{features:a(q)},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 2",link:"block-h-props"}),e(r,{features:a(q),rounded:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 3",link:"block-h-props",inverted:""}),e(r,{features:a(q),rounded:"",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H",subtitle:"Feature block H variation 4",link:"block-h-props"}),e(r,{features:a(q),columns:3,limit:8},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-h-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block H Props",subtitle:"Available props for block H"}),Kt,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Mt)},null,8,["code"])]),props:t(()=>[e(d,{props:a(jt).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Jt)},null,8,["code"])]),usage:t(()=>[Ut]),_:1})]),_:1})]),_:1})],64)}}}),Wt={class:"py-6"},Yt={class:"pb-6"},Zt={class:"columns is-multiline b-columns-half-tablet-p"},Qt=v({__name:"FeatureBlockI",props:{title:null,content:null,features:null,columns:{default:4},limit:{default:3},links:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.rounded&&"image-rounded"]),i=y(()=>[s.columns&&`is-${s.columns}`]),r=y(()=>[s.inverted&&"text-light"]),l=y(()=>[s.columns!=6&&"rem-90",s.columns===6&&"rem-95",s.inverted&&"text-light"]);return(n,u)=>{const d=E,m=T,B=A;return c(),p("div",Wt,[F(n.$slots,"title",{},()=>[o("div",Yt,[e(d,{tag:"h2",size:3,weight:"bold",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(s.title),1)]),_:1},8,["inverted"]),o("p",{class:g(["paragraph max-w-7 pt-2",a(r)])},b(s.content),3)])],!0),o("div",Zt,[(c(!0),p(h,null,z(s.features.slice(0,s.limit),(x,N)=>(c(),p("div",{key:N,class:g(["column mobile:mb-6",a(i)])},[e(m,{class:g([...a(_)]),src:x.image,"src-dark":x.darkImage,alt:"featured image"},null,8,["class","src","src-dark"]),o("div",null,[e(d,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(x.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph pt-2",a(l)])},b(x.text),3),s.links?(c(),H(B,{key:0,link:x.link,size:"small"},null,8,["link"])):C("",!0)])],2))),128))])])}}});const Xt=R(Qt,[["__scopeId","data-v-cf7f9eda"]]),es={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"6",values:["number"]},{name:"size",type:"string",required:"false",default:"undefined",values:["small","medium"]},{name:"rounded",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ts=`
<script setup lang="ts">
import { features7 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockI
    title="Amazing Features"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
    inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
    respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
    constructio interrete. Disserendi artem nullam habuit."
    :features="features7"
    links
    rounded
  />
</template>
`,ss=`
export const features7: ImageFeature[] = [
  {
    title: 'Forest places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-1.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-1.svg',
    link: '/',
  },
  {
    title: 'Authentic places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-2.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-2.svg',
    link: '/',
  },
  {
    title: 'Countryside places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-3.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-3.svg',
    link: '/',
  },
  {
    title: 'Waterfall places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-4.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-4.svg',
    link: '/',
  },
]
`,os=o("div",{class:"py-4"},null,-1),as=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),is=v({__name:"FeatureBlockIDoc",setup(f){return(s,_)=>{const i=w,r=Xt,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-i-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 1",link:"block-i-props"}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(K)},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 2",link:"block-i-props",inverted:""}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(K),inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 3",link:"block-i-props"}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(M),links:"",rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 4",link:"block-i-props",inverted:""}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(M),links:"",rounded:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I",subtitle:"Feature block I variation 5",link:"block-i-props"}),e(r,{title:"Amazing Features",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit.`,features:a(M),columns:3,limit:4,rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-i-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block I Props",subtitle:"Available props for block I"}),os,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(ts)},null,8,["code"])]),props:t(()=>[e(d,{props:a(es).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(ss)},null,8,["code"])]),usage:t(()=>[as]),_:1})]),_:1})]),_:1})],64)}}}),ls={class:"py-6"},ns={class:"columns is-vcentered md:mb-4"},rs={class:"column is-5"},us={class:"column is-6 is-offset-1"},cs={class:"columns b-columns-half-tablet-p"},ds={class:"py-2 medium:py-4"},ms=v({__name:"FeatureBlockJ",props:{title:null,content:null,features:null,image:null,darkImage:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.inverted&&"text-light"]);return(i,r)=>{const l=E,n=T,u=A;return c(),p("div",ls,[o("div",ns,[o("div",rs,[F(i.$slots,"content",{},()=>[e(l,{tag:"h2",size:3,weight:"semi",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(s.title),1)]),_:1},8,["inverted"]),o("p",{class:g(["paragraph max-w-tp-full medium:max-w-4 mb-4",a(_)])},b(s.content),3)],!0)]),o("div",us,[F(i.$slots,"image",{},()=>[e(n,{src:s.image,"src-dark":s.darkImage,class:g(["mx-auto"]),alt:"featured image"},null,8,["src","src-dark"])],!0)])]),o("div",cs,[(c(!0),p(h,null,z(s.features.slice(0,4),(d,m)=>(c(),p("div",{key:m,class:"column is-3"},[o("div",ds,[e(l,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(d.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph rem-95 pt-2 max-w-3",a(_)])},b(d.text),3),s.links?(c(),H(u,{key:0,link:d.link,size:"small"},null,8,["link"])):C("",!0)])]))),128))])])}}});const ps=R(ms,[["__scopeId","data-v-4833903e"]]),fs={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},_s=`
<script setup lang="ts">
import { features8 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockJ
    title="Fresh Vegetables"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
      enim inter se dissentiunt. Expectoque quid ad id, quod
      quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
      Duo Reges: constructio interrete. Disserendi artem nullam
      habuit. Videsne quam sit magna dissensio? Ecce aliud simile
      dissimile."
    image="/@src/assets/illustrations/features/carrying-vegetables.svg"
    dark-image="/@src/assets/illustrations/features/carrying-vegetables.svg"
    :features="features8"
    links
  />
</template>
`,bs=`
export const features8: SimpleFeature[] = [
  {
    title: 'Delivered to your place',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Fresh and yummy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'No GMOs',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Reseller program',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`,gs=o("div",{class:"py-4"},null,-1),ks=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),vs=v({__name:"FeatureBlockJDoc",setup(f){return(s,_)=>{const i=w,r=ps,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-j-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block J",subtitle:"Feature block J variation 1",link:"block-j-props"}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,image:"/assets/illustrations/features/carrying-vegetables.svg","dark-image":"/assets/illustrations/features/carrying-vegetables.svg",features:a(U),links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block J",subtitle:"Feature block J variation 2",link:"block-j-props",inverted:""}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,image:"/assets/illustrations/features/carrying-vegetables.svg","dark-image":"/assets/illustrations/features/carrying-vegetables.svg",features:a(U),links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-j-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block J Props",subtitle:"Available props for block J"}),gs,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(_s)},null,8,["code"])]),props:t(()=>[e(d,{props:a(fs).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(bs)},null,8,["code"])]),usage:t(()=>[ks]),_:1})]),_:1})]),_:1})],64)}}}),hs={class:"py-6"},ys={class:"columns is-multiline is-vcentered"},xs={class:"column is-5"},Bs={class:"column is-6 is-offset-1"},qs={class:"columns is-multiline b-columns-half-tablet-p"},Fs={class:"py-2 medium:py-4"},ws=v({__name:"FeatureBlockK",props:{title:null,content:null,features:null,links:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(f){const s=f,_=y(()=>[s.inverted&&"text-light"]);return(i,r)=>{const l=E,n=A;return c(),p("div",hs,[o("div",ys,[o("div",xs,[F(i.$slots,"content",{},()=>[e(l,{tag:"h2",size:2,weight:"semi",leading:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(s.title),1)]),_:1},8,["inverted"]),o("p",{class:g(["paragraph max-w-tp-full medium:max-w-4 mb-4",a(_)])},b(s.content),3)],!0)]),o("div",Bs,[o("div",qs,[(c(!0),p(h,null,z(s.features.slice(0,4),(u,d)=>(c(),p("div",{key:d,class:"column is-6"},[o("div",Fs,[e(l,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:s.inverted},{default:t(()=>[o("span",null,b(u.title),1)]),_:2},1032,["inverted"]),o("p",{class:g(["paragraph rem-95 pt-2 max-w-3",a(_)])},b(u.text),3),s.links?(c(),H(n,{key:0,link:u.link,label:"Read More",size:"small"},null,8,["link"])):C("",!0)])]))),128))])])])])}}});const $s=R(ws,[["__scopeId","data-v-d70ae92d"]]),Is={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ds=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockK
    title="Fresh Vegetables"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
      enim inter se dissentiunt. Expectoque quid ad id, quod
      quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
      Duo Reges: constructio interrete. Disserendi artem nullam
      habuit. Videsne quam sit magna dissensio? Ecce aliud simile
      dissimile."
    :features="features4"
    links
  />
</template>
`,Ls=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`,Ss=o("div",{class:"py-4"},null,-1),zs=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Hs=v({__name:"FeatureBlockKDoc",setup(f){return(s,_)=>{const i=w,r=$s,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-k-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block K",subtitle:"Feature block K variation 1",link:"block-k-props"}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,features:a(V),links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block K",subtitle:"Feature block K variation 1",link:"block-k-props",inverted:""}),e(r,{title:"Fresh Vegetables",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile.`,features:a(V),links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-k-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block K Props",subtitle:"Available props for block K"}),Ss,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Ds)},null,8,["code"])]),props:t(()=>[e(d,{props:a(Is).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Ls)},null,8,["code"])]),usage:t(()=>[zs]),_:1})]),_:1})]),_:1})],64)}}}),Cs={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"blob",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"dots",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Es=`
<script setup lang="ts">
import { features9 } from '/@src/data/blocks/features'
<\/script>

<template>
  <FeatureBlockL :features="features9" blob dots links />
</template>
`,Ps=`
export const features9: BlobFeature[] = [
  {
    subtitle: 'Teamwork',
    title: 'Collaborate easily',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: 'data:image/gif;base64,replace_with_your_image',
    link: '/',
  },
  {
    subtitle: 'Efficiency',
    title: 'Save tons of time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: 'data:image/gif;base64,replace_with_your_image',
    link: '/',
  },
  {
    subtitle: 'Satisfaction',
    title: 'Get the job done',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: 'data:image/gif;base64,replace_with_your_image',
    link: '/',
  },
]
`,As=o("div",{class:"py-4"},null,-1),Ts=o("p",{class:"paragraph rem-95"},[k(" Vulk ships with highly customizable and versatile Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),o("code",null,"inverted"),k(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Vs=v({__name:"FeatureBlockLDoc",setup(f){return(s,_)=>{const i=w,r=le,l=L,n=S,u=$,d=D,m=I;return c(),p(h,null,[e(n,{id:"block-l-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block L",subtitle:"Feature block L variation 1",link:"block-l-props"}),e(r,{features:a(O),blob:"",dots:"",links:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block L",subtitle:"Feature block L variation 1",link:"block-l-props",inverted:""}),e(r,{features:a(O),blob:"",dots:"",links:"",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-l-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(i,{title:"Block L Props",subtitle:"Available props for block L"}),As,e(m,null,{code:t(()=>[e(u,{language:"html",code:a(Es)},null,8,["code"])]),props:t(()=>[e(d,{props:a(Cs).props},null,8,["props"])]),sample:t(()=>[e(u,{language:"javascript",code:a(Ps)},null,8,["code"])]),usage:t(()=>[Ts]),_:1})]),_:1})]),_:1})],64)}}}),Xs=v({__name:"features",setup(f){const s=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"},{label:"Block I",target:"block-i-demo"},{label:"Block J",target:"block-j-demo"},{label:"Block K",target:"block-k-demo"},{label:"Block L",target:"block-l-demo"}];return(_,i)=>{const r=se,l=te;return c(),p("div",null,[e(r,{title:"Feature Blocks",subtitle:"More than 12 customizable feature blocks are awaiting for you to build your own layouts, pages, and content."}),e(l,{links:s,width:"1080px"}),e(me),e(ke),e(He),e(Ue),e(lt),e(ht),e(Pt),e(Ot),e(is),e(vs),e(Hs),e(Vs),e(oe)])}}});export{Xs as default};
