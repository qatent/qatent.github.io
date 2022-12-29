import{_ as C}from"./DemoLinks.09b4b6cb.js";import{_ as h,a as w}from"./DemoTitle.63799a9a.js";import{D as F}from"./DocumentationFooter.3fc21694.js";import{b as p,o as c,h as b,w as e,f as t,j as i,u as n,bT as A,E as q,G as f,e as g,F as x,m as I,t as k,q as B,A as L}from"./index.4498c4e2.js";import{_ as Q,a as y}from"./PrismCode.424bb1bc.js";import{f as v}from"./index.607b0f84.js";import{_ as P}from"./FaqList.37c6707f.js";import{a as D}from"./index.d590f481.js";import{_ as $}from"./IconBox.39e8ec7c.js";import{g as S,_ as H}from"./index.e43c5e11.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";const j=`
<script setup lang="ts">
export interface DoubleFaqCollapseItem {
  title: string
  content: string
}

export interface DoubleFaqCollapseProps {
  left: DoubleFaqCollapseItem[]
  right: DoubleFaqCollapseItem[]
  chevrons: boolean
}
<\/script>
`,E=`
<script setup lang="ts">
import { faq } from '/@src/data/pages/commerce'
<\/script>

<template>
  <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
</template>
`,T=`
export const faq = {
  left: [
    {
      title: 'How much does it cost?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Does it really work anywhere?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'How does it differ from other tools?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
  right: [
    {
      title: 'How does it work?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Can I try it for free?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'How many agents are allowed?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
}
`,V={class:"mx-auto max-w-10"},W={class:"pt-4 pb-6"},U={class:"pt-4"},z=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=p({__name:"AdvancedFaqBlockA",setup(d){return(m,_)=>{const u=h,a=A,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-a-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",V,[i("div",W,[t(u,{title:"Block A",subtitle:"Faq variation 1"}),i("div",U,[t(a,{left:n(v).left,right:n(v).right,chevrons:""},null,8,["left","right"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(E)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(j)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(T)},null,8,["code"])]),usage:e(()=>[z]),_:1})])]),_:1})]),_:1})}}}),G=`
<script setup lang="ts">
export interface FaqCollapseItem {
  title: string
  content: string
}

export interface FaqCollapseProps {
  items: FaqCollapseItem[]
  chevrons?: boolean
}
<\/script>
`,J=`
<script setup lang="ts">
import { mentorsFaq } from '/@src/data/pages/mentors'
<\/script>

<template>
  <FaqList :items="mentorsFaq" />
</template>
`,K=`
export const mentorsFaq = [
  {
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'All the free calls with mentors really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'Do mentors do calls for free?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's the catch? Will mentors simply pitch me?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How do I become a Vulk mentor?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
]
`,M={class:"mx-auto max-w-10"},O={class:"pt-4 pb-6"},R={class:"pt-4"},X=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Y=p({__name:"AdvancedFaqBlockB",setup(d){return(m,_)=>{const u=h,a=P,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-b-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",M,[i("div",O,[t(u,{title:"Block B",subtitle:"Faq variation 2"}),i("div",R,[t(a,{items:n(D)},null,8,["items"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(J)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(G)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(K)},null,8,["code"])]),usage:e(()=>[X]),_:1})])]),_:1})]),_:1})}}}),Z={class:"py-6"},tt={class:"mx-auto max-w-9"},et={class:"columns is-multiline b-columns-half-tablet-p"},it={class:"faq-item"},ot=["data-icon"],nt={class:"item-content"},st={class:"paragraph rem-90"},at=p({__name:"FaqStatic",props:{items:{default:()=>[]}},setup(d){const m=d;return(_,u)=>{const a=$,o=B;return c(),g("div",Z,[i("div",tt,[i("div",et,[(c(!0),g(x,null,I(m.items,(s,r)=>(c(),g("div",{key:r,class:"column is-6"},[i("div",it,[t(a,{color:s.color,size:"medium"},{default:e(()=>[i("i",{class:"iconify","data-icon":s.icon},null,8,ot)]),_:2},1032,["color"]),i("div",nt,[t(o,{tag:"h3",size:6,weight:"semi",leading:""},{default:e(()=>[i("span",null,k(s.title),1)]),_:2},1024),i("p",st,k(s.content),1)])])]))),128))])])])}}});const ut=L(at,[["__scopeId","data-v-2ce856af"]]),rt=[{icon:"ph:gear-six-duotone",color:"primary",title:"How does it work?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."},{icon:"ph:crown-duotone",color:"success",title:"What's included with membership?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam."},{icon:"ph:phone-duotone",color:"yellow",title:"All the free calls with mentors really unlimited?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo."},{icon:"ph:confetti-duotone",color:"info",title:"Do mentors do calls for free?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."},{icon:"ph:lightbulb-filament-duotone",color:"orange",title:"What's the catch? Will mentors simply pitch me?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur."},{icon:"ph:trophy-duotone",color:"green",title:"How do I become a Vulk mentor?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo."}],ct=`
<script setup lang="ts">
export interface FaqStaticItem {
  title: string
  content: string
  icon: string
  color: IconBoxColor
}

export interface FaqStaticProps {
  items: FaqStaticItem[]
}
<\/script>
`,mt=`
<script setup lang="ts">
import { staticFaq } from '/@src/data/blocks/faq'
<\/script>

<template>
  <FaqStatic :items="staticFaq" />
</template>
`,lt=`
import type { FaqStaticItem } from '/@src/components/advanced/faq/FaqStatic.vue'

export const staticFaq: FaqStaticItem[] = [
  {
    icon: 'ph:gear-six-duotone',
    color: 'primary',
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    icon: 'ph:crown-duotone',
    color: 'success',
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam.',
  },
  {
    icon: 'ph:phone-duotone',
    color: 'yellow',
    title: 'All the free calls with mentors really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
  },
  {
    icon: 'ph:confetti-duotone',
    color: 'info',
    title: 'Do mentors do calls for free?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    icon: 'ph:lightbulb-filament-duotone',
    color: 'orange',
    title: "What's the catch? Will mentors simply pitch me?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur.',
  },
  {
    icon: 'ph:trophy-duotone',
    color: 'green',
    title: 'How do I become a Vulk mentor?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
  },
]
`,dt={class:"mx-auto max-w-10"},pt={class:"pt-4 pb-6"},_t={class:"pt-4"},gt=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ht=p({__name:"AdvancedFaqBlockC",setup(d){return(m,_)=>{const u=h,a=ut,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-c-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",dt,[i("div",pt,[t(u,{title:"Block C",subtitle:"Faq variation 3"}),i("div",_t,[t(a,{items:n(rt)},null,8,["items"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(mt)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(ct)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(lt)},null,8,["code"])]),usage:e(()=>[gt]),_:1})])]),_:1})]),_:1})}}}),bt=`
<script setup lang="ts">
export interface FaqBoxedCollapseItem {
  title: string
  content: string
}

export interface FaqBoxedCollapseProps {
  items: FaqBoxedCollapseItem[]
  chevrons?: boolean
}
<\/script>
`,qt=`
<script setup lang="ts">
import { genericFaq } from '/@src/data/blocks/advanced/faq'
<\/script>

<template>
  <FaqListBoxed :items="genericFaq" />
</template>
`,ft=`
export const genericFaq = [
  {
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'All the free API services really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How does billing work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'Can I sign up for dedicated support?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How do I upgrade my account?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
]
`,Qt={class:"mx-auto max-w-10"},yt={class:"pt-4 pb-6"},kt={class:"pt-4"},vt=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced FAQ blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Ct=p({__name:"AdvancedFaqBlockD",setup(d){return(m,_)=>{const u=h,a=H,o=Q,s=y,r=q,l=f;return c(),b(l,{id:"block-d-demo","bordered-bottom":""},{default:e(()=>[t(r,null,{default:e(()=>[i("div",Qt,[i("div",yt,[t(u,{title:"Block D",subtitle:"Faq variation 4"}),i("div",kt,[t(a,{items:n(S)},null,8,["items"])])]),t(s,null,{code:e(()=>[t(o,{language:"html",code:n(qt)},null,8,["code"])]),props:e(()=>[t(o,{language:"javascript",code:n(bt)},null,8,["code"])]),sample:e(()=>[t(o,{language:"javascript",code:n(ft)},null,8,["code"])]),usage:e(()=>[vt]),_:1})])]),_:1})]),_:1})}}}),Et=p({__name:"faq",setup(d){const m=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(_,u)=>{const a=w,o=C;return c(),g("div",null,[t(a,{title:"Advanced FAQ",subtitle:"Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),t(o,{links:m,width:"420px"}),t(N),t(Y),t(ht),t(Ct),t(F)])}}});export{Et as default};
