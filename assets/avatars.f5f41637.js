import{_ as $}from"./DemoLinks.09b4b6cb.js";import{_ as v,a as q}from"./DemoTitle.63799a9a.js";import{b as _,o as d,h,w as s,f as e,j as a,u as c,l as o,E as f,G as b,e as j}from"./index.4498c4e2.js";import{_ as x,a as y}from"./PrismCode.424bb1bc.js";import{_ as S}from"./AvatarSimple.57c1e629.js";import{_ as k}from"./AvatarGroup.e6875e64.js";import{D as G}from"./DocumentationFooter.3fc21694.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";const w=`
export type AvatarSimpleSize = 'small' | 
            'medium' | 'large' | 'big' | 'xl' | ''

export interface AvatarSimpleProps {
  size?: AvatarSimpleSize
  picture: string
  squared?: boolean
  badge?: string
}
`,z=`
export const avatars = [
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
]
`,C=`
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="small"
  />
  <AvatarSimple 
    picture="https://dummyimage.com/150x150.jpg" />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="medium"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="large"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="big"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="xl"
  />
</template>
`,D=`
<template>
  <AvatarSimple picture="https://dummyimage.com/150x150" size="small" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="medium" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="large" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="big" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="xl" squared />
</template>
`,T=`
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150"
    size="medium"
    badge="/@src/assets/icons/flags/united-states-of-america.svg"
  />
</template>
`,P=`
<template>
  <AvatarGroup 
    size="medium" 
    :avatars="avatars" 
    :limit="5" 
    compact 
    counter 
  />
</template>
`,B=`
<script setup lang="ts">
import type { AvatarSimpleProps } from '/@src/components/base/avatar/AvatarSimple.vue'

export type AvatarGroupSize = 'small' | 'medium' | 'large'

export interface AvatarGroupProps {
  avatars: AvatarSimpleProps[]
  size?: AvatarGroupSize
  compact?: boolean
  squared?: boolean
  limit?: number
  counter?: boolean
  boxed?: boolean
}
<\/script>
`,V={class:"mx-auto max-w-6"},Y={class:"py-6"},E={class:"is-flex is-align-items-flex-end is-justify-content-center"},N={class:"px-2"},L={class:"px-2"},F={class:"px-2"},H={class:"px-2"},I={class:"px-2"},J={class:"px-2"},K=a("p",{class:"paragraph rem-95"},[o(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. You can control the avatar size using the "),a("code",null,"size"),o(" prop. Accepted values are "),a("code",null,"small"),o(" , "),a("code",null,"medium"),o(" , "),a("code",null,"large"),o(" , "),a("code",null,"big"),o(" , "),a("code",null,"xl"),o(" . ")],-1),M=_({__name:"AvatarSimpleSizes",setup(u){return(r,g)=>{const l=v,t=S,i=x,n=y,m=f,p=b;return d(),h(p,{id:"avatar-size-demo","bordered-bottom":""},{default:s(()=>[e(m,null,{default:s(()=>[a("div",V,[a("div",Y,[e(l,{title:"Avatar Sizes",subtitle:"Available avatar sizes"}),a("div",E,[a("div",N,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"small"})]),a("div",L,[e(t,{picture:"data:image/gif;base64,replace_with_your_image"})]),a("div",F,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"medium"})]),a("div",H,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"large"})]),a("div",I,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"big"})]),a("div",J,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"xl"})])])]),e(n,null,{code:s(()=>[e(i,{language:"html",code:c(C)},null,8,["code"])]),props:s(()=>[e(i,{language:"javascript",code:c(w)},null,8,["code"])]),sample:s(()=>[e(i,{language:"javascript",code:c(z)},null,8,["code"])]),usage:s(()=>[K]),_:1})])]),_:1})]),_:1})}}}),O={class:"mx-auto max-w-7"},Q={class:"py-6"},R={class:"is-flex is-align-items-flex-end is-justify-content-center"},U={class:"px-2"},W={class:"px-2"},X={class:"px-2"},Z={class:"px-2"},ee={class:"px-2"},ae={class:"px-2"},te=a("p",{class:"paragraph rem-95"},[o(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. You can control the avatar shape and make it square by using the "),a("code",null,"squared"),o(" prop. This prop is a "),a("code",null,"boolean"),o(" , it doesn't need any value. ")],-1),se=_({__name:"AvatarSimpleShapes",setup(u){return(r,g)=>{const l=v,t=S,i=x,n=y,m=f,p=b;return d(),h(p,{id:"avatar-square-demo","bordered-bottom":""},{default:s(()=>[e(m,null,{default:s(()=>[a("div",O,[a("div",Q,[e(l,{title:"Squared shape",subtitle:"Avatar squared variation"}),a("div",R,[a("div",U,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"small",squared:""})]),a("div",W,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",squared:""})]),a("div",X,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"medium",squared:""})]),a("div",Z,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"large",squared:""})]),a("div",ee,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"big",squared:""})]),a("div",ae,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"xl",squared:""})])])]),e(n,null,{code:s(()=>[e(i,{language:"html",code:c(D)},null,8,["code"])]),props:s(()=>[e(i,{language:"javascript",code:c(w)},null,8,["code"])]),sample:s(()=>[e(i,{language:"javascript",code:c(z)},null,8,["code"])]),usage:s(()=>[te]),_:1})])]),_:1})]),_:1})}}}),ie={class:"mx-auto max-w-6"},oe={class:"py-6"},ce={class:"is-flex is-align-items-flex-end is-justify-content-center"},ne={class:"px-2"},re={class:"px-2"},le={class:"px-2"},me={class:"px-2"},pe={class:"px-2"},_e={class:"px-2"},de={class:"is-flex is-align-items-flex-end is-justify-content-center pt-4"},ue={class:"px-2"},ge={class:"px-2"},ve={class:"px-2"},he={class:"px-2"},fe={class:"px-2"},be={class:"px-2"},xe=a("p",{class:"paragraph rem-95"},[o(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. You can add a badge to any avatar using the "),a("code",null,"badge"),o(" prop. The badge prop type is a "),a("code",null,"string"),o(" and waits for an image url. ")],-1),ye=_({__name:"AvatarSimpleBadge",setup(u){return(r,g)=>{const l=v,t=S,i=x,n=y,m=f,p=b;return d(),h(p,{id:"avatar-badge-demo","bordered-bottom":""},{default:s(()=>[e(m,null,{default:s(()=>[a("div",ie,[a("div",oe,[e(l,{title:"Badge",subtitle:"Avatar badge images"}),a("div",ce,[a("div",ne,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"small",badge:"/assets/icons/flags/canada.svg"})]),a("div",re,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",badge:"/assets/icons/flags/spain.svg"})]),a("div",le,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"medium",badge:"/assets/icons/flags/brazil.svg"})]),a("div",me,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"large",badge:"/assets/icons/flags/france.svg"})]),a("div",pe,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"big",badge:"/assets/icons/flags/germany.svg"})]),a("div",_e,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"xl",badge:"/assets/icons/flags/united-states-of-america.svg"})])]),a("div",de,[a("div",ue,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"small",badge:"/assets/icons/flags/canada.svg",squared:""})]),a("div",ge,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",badge:"/assets/icons/flags/spain.svg",squared:""})]),a("div",ve,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"medium",badge:"/assets/icons/flags/brazil.svg",squared:""})]),a("div",he,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"large",badge:"/assets/icons/flags/france.svg",squared:""})]),a("div",fe,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"big",badge:"/assets/icons/flags/germany.svg",squared:""})]),a("div",be,[e(t,{picture:"data:image/gif;base64,replace_with_your_image",size:"xl",badge:"/assets/icons/flags/united-states-of-america.svg",squared:""})])])]),e(n,null,{code:s(()=>[e(i,{language:"html",code:c(T)},null,8,["code"])]),props:s(()=>[e(i,{language:"javascript",code:c(w)},null,8,["code"])]),sample:s(()=>[e(i,{language:"javascript",code:c(z)},null,8,["code"])]),usage:s(()=>[xe]),_:1})])]),_:1})]),_:1})}}}),ze={class:"mx-auto max-w-6"},Se={class:"py-6"},we={class:"is-flex is-align-items-flex-end is-justify-content-center"},Ae=a("div",{class:"py-4"},null,-1),$e={class:"is-flex is-align-items-flex-end is-justify-content-center"},qe=a("div",{class:"py-4"},null,-1),je={class:"is-flex is-align-items-flex-end is-justify-content-center pt-4"},ke=a("p",{class:"paragraph rem-95"},[o(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. Avatars can be grouped using the "),a("code",null,"<AvatarGroup />"),o(" component. It waits for an "),a("code",null,"Array"),o(" of avatars. You can also control the size, the shape, the number of rendered avatars and if you wish to display a counter for the remaining unshown avatars. ")],-1),Ge=_({__name:"AvatarGroupBlock",setup(u){const r=[{picture:"data:image/gif;base64,replace_with_your_image"},{picture:"data:image/gif;base64,replace_with_your_image"},{picture:"data:image/gif;base64,replace_with_your_image"},{picture:"data:image/gif;base64,replace_with_your_image"},{picture:"data:image/gif;base64,replace_with_your_image"},{picture:"data:image/gif;base64,replace_with_your_image"},{picture:"data:image/gif;base64,replace_with_your_image"}];return(g,l)=>{const t=v,i=k,n=x,m=y,p=f,A=b;return d(),h(A,{id:"avatar-group-demo","bordered-bottom":""},{default:s(()=>[e(p,null,{default:s(()=>[a("div",ze,[a("div",Se,[e(t,{title:"Group",subtitle:"Avatar groups"}),a("div",we,[e(i,{size:"medium",avatars:r,limit:5,compact:"",counter:""})]),Ae,a("div",$e,[e(i,{size:"small",avatars:r,limit:3})]),qe,a("div",je,[e(i,{avatars:r,limit:5,squared:"",counter:"",compact:""})])]),e(m,null,{code:s(()=>[e(n,{language:"html",code:c(P)},null,8,["code"])]),props:s(()=>[e(n,{language:"javascript",code:c(B)},null,8,["code"])]),sample:s(()=>[e(n,{language:"javascript",code:c(z)},null,8,["code"])]),usage:s(()=>[ke]),_:1})])]),_:1})]),_:1})}}}),Fe=_({__name:"avatars",setup(u){const r=[{label:"Sizes",target:"avatar-size-demo"},{label:"Square",target:"avatar-square-demo"},{label:"Badge",target:"avatar-badge-demo"},{label:"Group",target:"avatar-group-demo"}];return(g,l)=>{const t=q,i=$;return d(),j("div",null,[e(t,{title:"Avatar Component",subtitle:"Avatars have become a central component in almost all web and mobile application. Explore Vulk avatars."}),e(i,{links:r,width:"340px"}),e(M),e(se),e(ye),e(Ge),e(G)])}}});export{Fe as default};
