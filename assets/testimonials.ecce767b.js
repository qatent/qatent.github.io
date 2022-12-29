import{_ as H}from"./DemoLinks.09b4b6cb.js";import{_ as y,a as M}from"./DemoTitle.63799a9a.js";import{_ as v,a as w}from"./PrismCode.424bb1bc.js";import{_ as q}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as g,o as u,e as p,f as e,w as t,u as n,F as h,j as a,E as B,G as x,g as R,m as T,n as J,l as I,t as f,q as L,x as D,y as P,A as E,r as j,h as z}from"./index.4498c4e2.js";import{_ as G}from"./TestimonialBlockA.999287a3.js";import{b as k,a as $,c as S,s as A}from"./index.bec4c590.js";import{_ as U}from"./TestimonialBlockC.c53f6d52.js";import{_ as V}from"./AvatarSimple.57c1e629.js";import{_ as K}from"./TestimonialBlockE.6adc07e4.js";import{D as F}from"./DocumentationFooter.3fc21694.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";const N={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"4",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"boxed",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},O=`
<script setup lang="ts">
import { baseTestimonials } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockA :testimonials="baseTestimonials" boxed :columns="3" :limit="8" />
</template>
`,W=`
export const baseTestimonials = [
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Henry Statterman',
    position: 'Sales Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Joey Bagara',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Linda Stinson',
    position: 'Art Director',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anika Geller',
    position: 'Business Analyst',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Ross Martin',
    position: 'Product Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Miranda Wallace',
    position: 'UX Designer',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anna Klecenszki',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Taha El Maliki',
    position: 'Business Developer',
  },
]
`,X=a("div",{class:"py-4"},null,-1),Y=a("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Q=g({__name:"TestimonialBlockADoc",setup(c){return(m,b)=>{const s=y,l=G,i=B,o=x,r=v,_=q,d=w;return u(),p(h,null,[e(o,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(l,{testimonials:n(k),limit:6},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(l,{testimonials:n(k),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(l,{testimonials:n(k),limit:8,columns:3},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 4",link:"block-a-props"}),e(l,{testimonials:n(k),boxed:""},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 4",link:"block-a-props"}),e(l,{testimonials:n(k),boxed:"",columns:3,limit:8},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block A Props",subtitle:"Available props for block A"}),X,e(d,null,{code:t(()=>[e(r,{language:"html",code:n(O)},null,8,["code"])]),props:t(()=>[e(_,{props:n(N).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:n(W)},null,8,["code"])]),usage:t(()=>[Y]),_:1})]),_:1})]),_:1})],64)}}}),Z=c=>(D("data-v-747a80d1"),c=c(),P(),c),ee={class:"py-6"},te=["src"],ae={class:"is-relative max-w-5 px-4 small:px-0 small:mx-auto"},oe={class:"paragraph rem-90 mb-4"},ie=Z(()=>a("i",{class:"iconify mr-2 text-light","data-icon":"fa:quote-left"},null,-1)),se={class:"paragraph rem-90 text-light"},ne=["src"],le=g({__name:"TestimonialBlockB",props:{testimonials:null,squared:{type:Boolean,default:!1},limit:{default:3}},setup(c){const m=c,b=R(()=>[m.squared&&"is-squared"]);return(s,l)=>{const i=L;return u(),p("div",ee,[(u(!0),p(h,null,T(m.testimonials.slice(0,m.limit),(o,r)=>(u(),p("div",{key:r,class:J(["testimonial-box max-w-7 mx-auto",n(b)])},[a("div",null,[a("img",{class:"testimonial-avatar small:mx-auto small:mb-4",src:o.avatar,alt:"Testimonial image"},null,8,te)]),a("div",ae,[a("p",oe,[ie,I(" "+f(o.content),1)]),e(i,{tag:"h3",size:7,weight:"semi",narrow:""},{default:t(()=>[a("span",null,f(o.name),1)]),_:2},1024),a("p",se,f(o.position),1),a("img",{class:"testimonial-logo",src:o.logo,alt:"company logo"},null,8,ne)])],2))),128))])}}});const re=E(le,[["__scopeId","data-v-747a80d1"]]),ce={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},me=`
<script setup lang="ts">
import { boxedTestimonials2 } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockB :testimonials="boxedTestimonials2" squared />
</template>
`,ue=`
export const baseTestimonials = [
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Henry Statterman',
    position: 'Sales Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Joey Bagara',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Linda Stinson',
    position: 'Art Director',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anika Geller',
    position: 'Business Analyst',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Ross Martin',
    position: 'Product Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Miranda Wallace',
    position: 'UX Designer',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anna Klecenszki',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Taha El Maliki',
    position: 'Business Developer',
  },
]
`,de=a("div",{class:"py-4"},null,-1),pe=a("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),_e=g({__name:"TestimonialBlockBDoc",setup(c){return(m,b)=>{const s=y,l=re,i=B,o=x,r=v,_=q,d=w;return u(),p(h,null,[e(o,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(l,{testimonials:n($)},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(l,{testimonials:n(S),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block B Props",subtitle:"Available props for block B"}),de,e(d,null,{code:t(()=>[e(r,{language:"html",code:n(me)},null,8,["code"])]),props:t(()=>[e(_,{props:n(ce).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:n(ue)},null,8,["code"])]),usage:t(()=>[pe]),_:1})]),_:1})]),_:1})],64)}}}),be={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},he=`
<script setup lang="ts">
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockC :testimonials="boxedTestimonials" squared />
</template>
`,ge=`
export const boxedTestimonials = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Henry Statterman',
    position: 'Sales Manager',
    logo: '/assets/brands/infinite.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Joey Bagara',
    position: 'Project Manager',
    logo: '/assets/brands/proactive.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Linda Stinson',
    position: 'Art Director',
    logo: '/assets/brands/tribe.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anika Geller',
    position: 'Business Analyst',
    logo: '/assets/brands/kromo.svg',
  },
]
`,fe=a("div",{class:"py-4"},null,-1),ke=a("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),ye=g({__name:"TestimonialBlockCDoc",setup(c){return(m,b)=>{const s=y,l=U,i=B,o=x,r=v,_=q,d=w;return u(),p(h,null,[e(o,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(l,{testimonials:n(S)},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),e(l,{testimonials:n($),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block C Props",subtitle:"Available props for block C"}),fe,e(d,null,{code:t(()=>[e(r,{language:"html",code:n(he)},null,8,["code"])]),props:t(()=>[e(_,{props:n(be).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:n(ge)},null,8,["code"])]),usage:t(()=>[ke]),_:1})]),_:1})]),_:1})],64)}}}),ve=c=>(D("data-v-382a2d04"),c=c(),P(),c),we={class:"py-6"},qe={class:"testimonials"},Be={class:"columns is-multiline"},xe={class:"testimonial-box"},Te={class:"testimonial-content"},Ae={class:"mb-4"},Ie={class:"paragraph rem-80 text-light"},Le={class:"paragraph rem-85 mb-4"},De=ve(()=>a("i",{class:"iconify mr-2 text-light","data-icon":"fa:quote-left"},null,-1)),Pe={class:"social"},Ee=["data-icon"],$e={class:"is-sr-only"},Se={class:"image"},Ce=["src"],He=g({__name:"TestimonialBlockD",props:{testimonials:null,squared:{type:Boolean,default:!1},limit:{default:4}},setup(c){const m=c;return(b,s)=>{const l=L,i=j("RouterLink"),o=V;return u(),p("div",we,[a("div",qe,[a("div",Be,[(u(!0),p(h,null,T(m.testimonials.slice(0,m.limit),(r,_)=>(u(),p("div",{key:_,class:"column is-6"},[a("div",xe,[a("div",Te,[a("div",Ae,[e(l,{tag:"h3",size:6,weight:"semi",narrow:""},{default:t(()=>[a("span",null,f(r.name),1)]),_:2},1024),a("p",Ie,f(r.position),1)]),a("p",Le,[De,I(" "+f(r.content),1)]),a("div",Pe,[(u(!0),p(h,null,T(r.socialLinks,(d,C)=>(u(),z(i,{key:C,to:d.url,target:"_blank",class:"px-1"},{default:t(()=>[a("i",{class:"iconify","data-icon":d.icon},null,8,Ee),a("span",$e,f(d.name),1)]),_:2},1032,["to"]))),128))])]),a("div",Se,[e(o,{size:"xl",picture:r.avatar,squared:m.squared},null,8,["picture","squared"]),a("img",{class:"testimonial-logo",src:r.logo,alt:"company logo"},null,8,Ce)])])]))),128))])])])}}});const Me=E(He,[["__scopeId","data-v-382a2d04"]]),Re={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Je=`
<script setup lang="ts">
import { socialTestimonials } from '/@src/data/blocks/testimonials'
<\/script>

<template>
  <TestimonialBlockD :testimonials="socialTestimonials" squared />
</template>
`,je=`
export const socialTestimonials = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Yenela Paloupakis',
    position: 'Solution Architect',
    logo: '/assets/brands/infinite.svg',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: "Kenneth O'Hara",
    position: 'Project Manager',
    logo: '/assets/brands/proactive.svg',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Melinda Callaway',
    position: 'Customer Support',
    logo: '/assets/brands/tribe.svg',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Eddie Finch',
    position: 'Business Analyst',
    logo: '/assets/brands/kromo.svg',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`,ze=a("div",{class:"py-4"},null,-1),Ge=a("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Ue=g({__name:"TestimonialBlockDDoc",setup(c){return(m,b)=>{const s=y,l=Me,i=B,o=x,r=v,_=q,d=w;return u(),p(h,null,[e(o,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(l,{testimonials:n(A)},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"}),e(l,{testimonials:n(A),squared:""},null,8,["testimonials"])]),_:1})]),_:1}),e(o,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block D Props",subtitle:"Available props for block D"}),ze,e(d,null,{code:t(()=>[e(r,{language:"html",code:n(Je)},null,8,["code"])]),props:t(()=>[e(_,{props:n(Re).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:n(je)},null,8,["code"])]),usage:t(()=>[Ge]),_:1})]),_:1})]),_:1})],64)}}}),Ve={props:[{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"name",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"position",type:"string",required:"true",default:"undefined",values:["string"]},{name:"logo",type:"string",required:"false",default:"undefined",values:["string"]},{name:"curved",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"reversed",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ke=`
<template>
  <TestimonialBlockE
    image="https://dummyimage.com/800x600.jpg"
    name="Kim Lee Seung"
    position="Solution Architect"
    content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate 
    quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
    logo="/@src/assets/brands/kromo.svg"
    curved
    reversed
  />
</template>
`,Fe=a("div",{class:"py-4"},null,-1),Ne=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Oe=a("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),We=g({__name:"TestimonialBlockEDoc",setup(c){return(m,b)=>{const s=y,l=K,i=B,o=x,r=v,_=q,d=w;return u(),p(h,null,[e(o,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),e(l,{image:"data:image/gif;base64,replace_with_your_image",name:"Irina Smirkova",position:"Sales Director",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/assets/brands/tribe.svg"})]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props"}),e(l,{image:"data:image/gif;base64,replace_with_your_image",name:"Basile Olembe",position:"General Manager",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/assets/brands/infinite.svg",curved:""})]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),e(l,{image:"data:image/gif;base64,replace_with_your_image",name:"Matt Henriks",position:"Ux Design Lead",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/assets/brands/proactive.svg",reversed:""})]),_:1})]),_:1}),e(o,{"bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block E",subtitle:"Block E variation 4",link:"block-e-props"}),e(l,{image:"data:image/gif;base64,replace_with_your_image",name:"Kim Lee Seung",position:"Solution Architect",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/assets/brands/kromo.svg",curved:"",reversed:""})]),_:1})]),_:1}),e(o,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{title:"Block E Props",subtitle:"Available props for block E"}),Fe,e(d,null,{code:t(()=>[e(r,{language:"html",code:n(Ke)},null,8,["code"])]),props:t(()=>[e(_,{props:n(Ve).props},null,8,["props"])]),sample:t(()=>[Ne]),usage:t(()=>[Oe]),_:1})]),_:1})]),_:1})],64)}}}),ut=g({__name:"testimonials",setup(c){const m=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"}];return(b,s)=>{const l=M,i=H;return u(),p("div",null,[e(l,{title:"Testimonial Blocks",subtitle:"More than 3 customizable Testimonial blocks are awaiting for you to build your own layouts, pages, and content."}),e(i,{links:m,width:"480px"}),e(Q),e(_e),e(ye),e(Ue),e(We),e(F)])}}});export{ut as default};
