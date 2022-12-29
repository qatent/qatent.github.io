import{_ as M}from"./DemoLinks.09b4b6cb.js";import{_ as y,a as O}from"./DemoTitle.63799a9a.js";import{_ as v,a as L}from"./PrismCode.424bb1bc.js";import{_ as B}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as f,g as A,r as S,o as u,e as p,j as l,F as k,m as H,n as E,u as i,bE as $,f as e,w as t,t as g,h as P,q as z,A as I,E as T,G as D,i as V,ap as j}from"./index.4498c4e2.js";import{b as x,a as G,l as R,c as F,d as w,g as q,_ as U}from"./TeamBlockE.ee3bf264.js";import{_ as K}from"./TeamBlockB.632cc9aa.js";import{_ as N}from"./TeamBlockC.aa05afca.js";import{_ as X}from"./TeamBlockF.58630c28.js";import{D as J}from"./DocumentationFooter.3fc21694.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";import"./AvatarSimple.57c1e629.js";import"./Bubbles.71fec6c3.js";const Q={class:"py-6"},W={class:"card"},Y={class:"card-image"},Z=["src"],ee={class:"card-content"},te={class:"media is-align-items-center"},ie={class:"media-content"},ae={class:"paragraph rem-85"},oe={class:"media-right"},ne=["data-icon"],le={class:"is-sr-only"},se=f({__name:"TeamBlockA",props:{items:null,columns:{default:3},limit:{default:32},curved:{type:Boolean,default:!1},grayscale:{type:Boolean,default:!1},scale:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},setup(h){const r=h,_=A(()=>[r.grayscale&&"is-grayscale",r.scale&&"is-scale",r.plain&&"is-plain",r.plain&&r.curved&&"is-curved"]),o=A(()=>[r.columns&&`is-${r.columns}`]);return(s,a)=>{const n=z,m=S("RouterLink");return u(),p("div",Q,[l("div",{class:E(["columns is-multiline b-columns-half-tablet-p",i(_)])},[(u(!0),p(k,null,H(r.items.slice(0,r.limit),(c,d)=>(u(),p("div",{key:d,class:E(["column",i(o)])},[l("div",W,[l("div",Y,[l("img",{src:c.image,alt:"Team member image",onErrorOnce:a[0]||(a[0]=b=>i($)(b,"500x333"))},null,40,Z)]),l("div",ee,[l("div",te,[l("div",ie,[e(n,{tag:"h3",size:7,weight:"semi",narrow:""},{default:t(()=>[l("span",null,g(c.name),1)]),_:2},1024),l("p",ae,g(c.position),1)]),l("div",oe,[(u(!0),p(k,null,H(c.socialLinks,(b,C)=>(u(),P(m,{key:C,to:b.url,target:"_blank",class:"px-1"},{default:t(()=>[l("i",{class:"iconify","data-icon":b.icon},null,8,ne),l("span",le,g(b.name),1)]),_:2},1032,["to"]))),128))])])])])],2))),128))],2)])}}});const re=I(se,[["__scopeId","data-v-4c4375bd"]]),ce={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4","6"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"grayscale",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"scale",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"plain",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"curved",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},me=`
<script setup lang="ts">
import { boxTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockA :items="boxTeam" :columns="4" :limit="6" scale />
</template>
`,ue=`
export const boxTeam = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Basile Olembe',
    position: 'General Manager',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Matt Henriks',
    position: 'UX Design Lead',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Kim Li Seung',
    position: 'Software Architect',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Gianni Collaro',
    position: 'Fullstack Developer',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
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
`,pe=l("div",{class:"py-4"},null,-1),de=l("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),be=f({__name:"TeamBlockADoc",setup(h){return(r,_)=>{const o=y,s=re,a=T,n=D,m=v,c=B,d=L;return u(),p(k,null,[e(n,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(s,{items:i(x)},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(s,{items:i(x),columns:4,limit:6,scale:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(s,{items:i(x),grayscale:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(s,{items:i(x),plain:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block A",subtitle:"Block A variation 3",link:"block-a-props"}),e(s,{items:i(x),plain:"",curved:""},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block A Props",subtitle:"Available props for block A"}),pe,e(d,null,{code:t(()=>[e(m,{language:"html",code:i(me)},null,8,["code"])]),props:t(()=>[e(c,{props:i(ce).props},null,8,["props"])]),sample:t(()=>[e(m,{language:"javascript",code:i(ue)},null,8,["code"])]),usage:t(()=>[de]),_:1})]),_:1})]),_:1})],64)}}}),he={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"bubbles",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},_e=`
<script setup lang="ts">
import { avatarTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockB :items="avatarTeam" squared bubbles />
</template>
`,ke=`
export const avatarTeam = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Basile Olembe',
    position: 'General Manager',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Matt Henriks',
    position: 'UX Design Lead',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Kim Li Seung',
    position: 'Software Architect',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Gianni Collaro',
    position: 'Fullstack Developer',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
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
`,fe=l("div",{class:"py-4"},null,-1),ge=l("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),we=f({__name:"TeamBlockBDoc",setup(h){return(r,_)=>{const o=y,s=K,a=T,n=D,m=v,c=B,d=L;return u(),p(k,null,[e(n,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(s,{items:i(G)},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(s,{items:i(G),squared:"",bubbles:""},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block B Props",subtitle:"Available props for block B"}),fe,e(d,null,{code:t(()=>[e(m,{language:"html",code:i(_e)},null,8,["code"])]),props:t(()=>[e(c,{props:i(he).props},null,8,["props"])]),sample:t(()=>[e(m,{language:"javascript",code:i(ke)},null,8,["code"])]),usage:t(()=>[ge]),_:1})]),_:1})]),_:1})],64)}}}),ye={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"bubbles",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ve=`
<script setup lang="ts">
import { longTeam2 } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockC :items="longTeam2" squared bubbles />
</template>
`,Le=`
export const longTeam2 = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
`,Be=l("div",{class:"py-4"},null,-1),Te=l("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),De=f({__name:"TeamBlockCDoc",setup(h){return(r,_)=>{const o=y,s=N,a=T,n=D,m=v,c=B,d=L;return u(),p(k,null,[e(n,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(s,{items:i(R)},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),e(s,{items:i(F),squared:"",bubbles:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block C",subtitle:"Block C variation 3",link:"block-c-props"}),e(s,{items:i(F),squared:"",grayscale:""},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block C Props",subtitle:"Available props for block C"}),Be,e(d,null,{code:t(()=>[e(m,{language:"html",code:i(ve)},null,8,["code"])]),props:t(()=>[e(c,{props:i(ye).props},null,8,["props"])]),sample:t(()=>[e(m,{language:"javascript",code:i(Le)},null,8,["code"])]),usage:t(()=>[Te]),_:1})]),_:1})]),_:1})],64)}}}),xe={class:"team-block py-6 mx-auto"},qe={class:"columns is-multiline b-columns-third-tablet-p"},Ae=["src"],He={class:"paragraph rem-85 mb-2"},Ee={class:"paragraph rem-85 mb-4 text-light mx-auto max-w-3"},Ce={class:"is-flex is-justify-content-center"},Ge=["data-icon"],Fe={class:"is-sr-only"},Se={key:0,class:"bubble-container"},$e=j('<div class="bubble bubble-1" data-v-515e1b0e></div><div class="bubble bubble-2" data-v-515e1b0e></div><div class="bubble bubble-3" data-v-515e1b0e></div><div class="bubble bubble-4" data-v-515e1b0e></div><div class="bubble bubble-5" data-v-515e1b0e></div>',5),Pe=[$e],ze=f({__name:"TeamBlockD",props:{items:null,columns:{default:3},limit:{default:8},squared:{type:Boolean,default:!1},bubbles:{type:Boolean,default:!1},animated:{type:Boolean,default:!1}},setup(h){const r=h,_=A(()=>[r.squared&&"is-squared",r.animated&&"is-animated"]),o=A(()=>[r.columns&&`is-${r.columns}`]);return(s,a)=>{const n=z,m=S("RouterLink");return u(),p("div",xe,[l("div",qe,[(u(!0),p(k,null,H(r.items.slice(0,r.limit),(c,d)=>(u(),p("div",{key:d,class:E(["column",i(o)])},[l("div",{class:E(["team-block-item has-text-centered",i(_)])},[l("img",{class:"block mx-auto size-110x110",src:c.image,alt:"featured image",height:"110",width:"110",onErrorOnce:a[0]||(a[0]=b=>i($)(b,"110x110"))},null,40,Ae),l("div",null,[e(n,{tag:"h3",size:7,weight:"semi",narrow:""},{default:t(()=>[l("span",null,g(c.name),1)]),_:2},1024),l("p",He,g(c.position),1),l("p",Ee,g(c.bio),1)]),l("div",Ce,[(u(!0),p(k,null,H(c.socialLinks,(b,C)=>(u(),P(m,{key:C,to:b.url,target:"_blank",class:"px-2"},{default:t(()=>[l("i",{class:"iconify","data-icon":b.icon},null,8,Ge),l("span",Fe,g(b.name),1)]),_:2},1032,["to"]))),128))]),r.bubbles?(u(),p("div",Se,Pe)):V("",!0)],2)],2))),128))])])}}});const Ie=I(ze,[["__scopeId","data-v-515e1b0e"]]),Me={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"columns",type:"number",required:"false",default:"3",values:["3","4"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"bubbles",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"grayscale",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Oe=`
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockD :items="cardTeam" bubbles animated squared />
</template>
`,Ve=`
export const cardTeam = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
`,je=l("div",{class:"py-4"},null,-1),Re=l("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),Ue=f({__name:"TeamBlockDDoc",setup(h){return(r,_)=>{const o=y,s=Ie,a=T,n=D,m=v,c=B,d=L;return u(),p(k,null,[e(n,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(s,{items:i(w)},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"}),e(s,{items:i(w),bubbles:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(s,{items:i(w),bubbles:"",animated:"",squared:""},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block D Props",subtitle:"Available props for block D"}),je,e(d,null,{code:t(()=>[e(m,{language:"html",code:i(Oe)},null,8,["code"])]),props:t(()=>[e(c,{props:i(Me).props},null,8,["props"])]),sample:t(()=>[e(m,{language:"javascript",code:i(Ve)},null,8,["code"])]),usage:t(()=>[Re]),_:1})]),_:1})]),_:1})],64)}}}),Ke={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"9",values:["number"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"animated",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ne=`
<script setup lang="ts">
import { gridTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockE :items="gridTeam" :limit="12" squared shapes animated />
</template>
`,Xe=`
export const cardTeam = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
`,Je=l("div",{class:"py-4"},null,-1),Qe=l("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),We=f({__name:"TeamBlockEDoc",setup(h){return(r,_)=>{const o=y,s=U,a=T,n=D,m=v,c=B,d=L;return u(),p(k,null,[e(n,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),e(s,{items:i(q)},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props"}),e(s,{items:i(q),squared:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),e(s,{items:i(q),limit:12,shapes:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block E",subtitle:"Block E variation 4",link:"block-e-props"}),e(s,{items:i(q),limit:12,squared:"",shapes:"",animated:""},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block E Props",subtitle:"Available props for block E"}),Je,e(d,null,{code:t(()=>[e(m,{language:"html",code:i(Ne)},null,8,["code"])]),props:t(()=>[e(c,{props:i(Ke).props},null,8,["props"])]),sample:t(()=>[e(m,{language:"javascript",code:i(Xe)},null,8,["code"])]),usage:t(()=>[Qe]),_:1})]),_:1})]),_:1})],64)}}}),Ye={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"32",values:["number"]},{name:"shapes",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"animated",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ze=`
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
<\/script>

<template>
  <TeamBlockF :items="cardTeam" squared animated />
</template>
`,et=`
export const cardTeam = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Basile Olembe',
    position: 'General Manager',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
`,tt=l("div",{class:"py-4"},null,-1),it=l("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Team blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),at=f({__name:"TeamBlockFDoc",setup(h){return(r,_)=>{const o=y,s=X,a=T,n=D,m=v,c=B,d=L;return u(),p(k,null,[e(n,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block F",subtitle:"Block F variation 1",link:"block-f-props"}),e(s,{items:i(w)},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block F",subtitle:"Block F variation 2",link:"block-f-props"}),e(s,{items:i(w),squared:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block F",subtitle:"Block F variation 3",link:"block-f-props"}),e(s,{items:i(w),animated:""},null,8,["items"])]),_:1})]),_:1}),e(n,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block F",subtitle:"Block F variation 4",link:"block-f-props"}),e(s,{items:i(w),squared:"",animated:""},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(o,{title:"Block F Props",subtitle:"Available props for block F"}),tt,e(d,null,{code:t(()=>[e(m,{language:"html",code:i(Ze)},null,8,["code"])]),props:t(()=>[e(c,{props:i(Ye).props},null,8,["props"])]),sample:t(()=>[e(m,{language:"javascript",code:i(et)},null,8,["code"])]),usage:t(()=>[it]),_:1})]),_:1})]),_:1})],64)}}}),wt=f({__name:"team",setup(h){const r=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"}];return(_,o)=>{const s=O,a=M;return u(),p("div",null,[e(s,{title:"Team Blocks",subtitle:"More than 6 customizable Team blocks are awaiting for you to build your own layouts, pages, and content."}),e(a,{links:r,width:"600px"}),e(be),e(we),e(De),e(Ue),e(We),e(at),e(J)])}}});export{wt as default};
