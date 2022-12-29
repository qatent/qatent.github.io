import{_ as w}from"./DemoLinks.072b5868.js";import{_ as h,a as q}from"./DemoTitle.9dad457e.js";import{b as _,o as m,h as f,w as l,f as e,j as a,u as c,l as n,E as v,G as T,e as P}from"./index.d17d1dd6.js";import{_ as x,a as y}from"./PrismCode.98a08cea.js";import{_ as $}from"./Tags.vue_vue_type_script_setup_true_lang.0669ba9e.js";import{_ as S}from"./Tag.8fdd4d4e.js";import{D as C}from"./DocumentationFooter.04bcec7b.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";const D=`
<script setup lang="ts">
export type TagColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'orange'
  | 'blue'
  | 'green'
  | 'purple'
  | 'solid'

export type TagShape = 'squared' | 'curved' | 'rounded'

export interface TagProps {
  label: string | number
  color?: TagColor
  shape?: TagShape
  outlined?: boolean
  elevated?: boolean
  remove?: boolean
}

<\/script>
`,k=`
<template>
  <Tag label="Default"></Tag>
  <Tag color="primary" label="Primary"></Tag>
  <Tag color="success" label="Success"></Tag>
</template>
`,O=`
<template>
  <Tag label="Default" shape="rounded"></Tag>
  <Tag color="solid" label="Solid" shape="rounded"></Tag>
  <Tag color="primary" label="Primary" shape="rounded"></Tag>
</template>
`,B=`
<template>
  <Tag label="Default" shape="squared"></Tag>
  <Tag color="solid" label="Solid" shape="squared"></Tag>
  <Tag color="primary" label="Primary" shape="squared"></Tag>
</template>
`,V=`
<template>
  <Tag label="Default" outlined></Tag>
  <Tag color="primary" label="Primary" outlined></Tag>
  <Tag color="success" label="Success" outlined></Tag>
</template>
`,E=`
<template>
  <Tag label="Default" shape="rounded" elevated></Tag>
  <Tag color="solid" label="Solid" shape="rounded" elevated></Tag>
  <Tag color="primary" label="Primary" shape="rounded" elevated></Tag>
</template>
`,N={class:"mx-auto max-w-6"},j={class:"pt-4 pb-6"},G={class:"is-flex is-align-items-flex-end pt-4"},I=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),R=a("p",{class:"paragraph rem-95"},[n(" Tags are a central part in all web and mobile application. Vulk tags come in different flavors. You can control tag colors using the "),a("code",null,"color"),n(" prop. Allowed values are "),a("code",null,"solid"),n(" , "),a("code",null,"primary"),n(" , "),a("code",null,"success"),n(" , "),a("code",null,"info"),n(" , "),a("code",null,"purple"),n(" , "),a("code",null,"orange"),n(" , "),a("code",null,"green"),n(" , "),a("code",null,"warning"),n(" and "),a("code",null,"danger"),n(" . ")],-1),W=_({__name:"TagColor",setup(g){return(u,b)=>{const r=h,o=S,s=$,t=x,d=y,p=v,i=T;return m(),f(i,{id:"tag-colors-demo","bordered-bottom":""},{default:l(()=>[e(p,null,{default:l(()=>[a("div",N,[a("div",j,[e(r,{title:"Tag Colors",subtitle:"Available tag colors"}),a("div",G,[e(s,null,{default:l(()=>[e(o,{label:"Default"}),e(o,{color:"solid",label:"Solid"}),e(o,{color:"primary",label:"Primary"}),e(o,{color:"success",label:"Success"}),e(o,{color:"info",label:"Info"}),e(o,{color:"warning",label:"Warning"}),e(o,{color:"danger",label:"Danger"}),e(o,{color:"orange",label:"Orange"}),e(o,{color:"blue",label:"Blue"}),e(o,{color:"green",label:"Green"}),e(o,{color:"purple",label:"Purple"})]),_:1})])]),e(d,null,{code:l(()=>[e(t,{language:"html",code:c(k)},null,8,["code"])]),props:l(()=>[e(t,{language:"javascript",code:c(D)},null,8,["code"])]),sample:l(()=>[I]),usage:l(()=>[R]),_:1})])]),_:1})]),_:1})}}}),Y={class:"mx-auto max-w-6"},A={class:"pt-4 pb-6"},L={class:"is-flex is-align-items-flex-end pt-4"},F=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),H=a("p",{class:"paragraph rem-95"},[n(" Tags are a central part in all web and mobile application. Vulk tags come in different flavors. You can make rounded tags by using the "),a("code",null,"shape"),n(" prop. Allowed values are "),a("code",null,"squared"),n(" , "),a("code",null,"curved"),n(" and "),a("code",null,"rounded")],-1),z=_({__name:"TagRounded",setup(g){return(u,b)=>{const r=h,o=S,s=$,t=x,d=y,p=v,i=T;return m(),f(i,{id:"tag-rounded-demo","bordered-bottom":""},{default:l(()=>[e(p,null,{default:l(()=>[a("div",Y,[a("div",A,[e(r,{title:"Rounded tags",subtitle:"Rounded tags variation"}),a("div",L,[e(s,null,{default:l(()=>[e(o,{label:"Default",shape:"rounded"}),e(o,{color:"solid",label:"Solid",shape:"rounded"}),e(o,{color:"primary",label:"Primary",shape:"rounded"}),e(o,{color:"success",label:"Success",shape:"rounded"}),e(o,{color:"info",label:"Info",shape:"rounded"}),e(o,{color:"warning",label:"Warning",shape:"rounded"}),e(o,{color:"danger",label:"Danger",shape:"rounded"}),e(o,{color:"orange",label:"Orange",shape:"rounded"}),e(o,{color:"blue",label:"Blue",shape:"rounded"}),e(o,{color:"green",label:"Green",shape:"rounded"}),e(o,{color:"purple",label:"Purple",shape:"rounded"})]),_:1})])]),e(d,null,{code:l(()=>[e(t,{language:"html",code:c(O)},null,8,["code"])]),props:l(()=>[e(t,{language:"javascript",code:c(D)},null,8,["code"])]),sample:l(()=>[F]),usage:l(()=>[H]),_:1})])]),_:1})]),_:1})}}}),J={class:"mx-auto max-w-6"},K={class:"pt-4 pb-6"},M={class:"is-flex is-align-items-flex-end pt-4"},Q=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),U=a("p",{class:"paragraph rem-95"},[n(" Tags are a central part in all web and mobile application. Vulk tags come in different flavors. You can make squared tags by using the "),a("code",null,"shape"),n(" prop. Allowed values are "),a("code",null,"squared"),n(" , "),a("code",null,"curved"),n(" and "),a("code",null,"rounded")],-1),X=_({__name:"TagSquare",setup(g){return(u,b)=>{const r=h,o=S,s=$,t=x,d=y,p=v,i=T;return m(),f(i,{id:"tag-square-demo","bordered-bottom":""},{default:l(()=>[e(p,null,{default:l(()=>[a("div",J,[a("div",K,[e(r,{title:"Square tags",subtitle:"Squared tags variation"}),a("div",M,[e(s,null,{default:l(()=>[e(o,{label:"Default",shape:"squared"}),e(o,{color:"solid",label:"Solid",shape:"squared"}),e(o,{color:"primary",label:"Primary",shape:"squared"}),e(o,{color:"success",label:"Success",shape:"squared"}),e(o,{color:"info",label:"Info",shape:"squared"}),e(o,{color:"warning",label:"Warning",shape:"squared"}),e(o,{color:"danger",label:"Danger",shape:"squared"}),e(o,{color:"orange",label:"Orange",shape:"squared"}),e(o,{color:"blue",label:"Blue",shape:"squared"}),e(o,{color:"green",label:"Green",shape:"squared"}),e(o,{color:"purple",label:"Purple",shape:"squared"})]),_:1})])]),e(d,null,{code:l(()=>[e(t,{language:"html",code:c(B)},null,8,["code"])]),props:l(()=>[e(t,{language:"javascript",code:c(D)},null,8,["code"])]),sample:l(()=>[Q]),usage:l(()=>[U]),_:1})])]),_:1})]),_:1})}}}),Z={class:"mx-auto max-w-6"},ee={class:"pt-4 pb-6"},oe={class:"is-flex is-align-items-flex-end pt-4"},ae=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),le=a("p",{class:"paragraph rem-95"},[n(" Tags are a central part in all web and mobile application. Vulk tags come in different flavors. You can make tags outlined by using the "),a("code",null,"outlined"),n(" prop. ")],-1),ne=_({__name:"TagOutlined",setup(g){return(u,b)=>{const r=h,o=S,s=$,t=x,d=y,p=v,i=T;return m(),f(i,{id:"tag-outlined-demo","bordered-bottom":""},{default:l(()=>[e(p,null,{default:l(()=>[a("div",Z,[a("div",ee,[e(r,{title:"Outlined Tags",subtitle:"Outlined tag colors"}),a("div",oe,[e(s,null,{default:l(()=>[e(o,{color:"solid",label:"Solid",outlined:""}),e(o,{color:"primary",label:"Primary",outlined:""}),e(o,{color:"success",label:"Success",outlined:""}),e(o,{color:"info",label:"Info",outlined:""}),e(o,{color:"warning",label:"Warning",outlined:""}),e(o,{color:"danger",label:"Danger",outlined:""}),e(o,{color:"orange",label:"Orange",outlined:""}),e(o,{color:"blue",label:"Blue",outlined:""}),e(o,{color:"green",label:"Green",outlined:""}),e(o,{color:"purple",label:"Purple",outlined:""})]),_:1})])]),e(d,null,{code:l(()=>[e(t,{language:"html",code:c(V)},null,8,["code"])]),props:l(()=>[e(t,{language:"javascript",code:c(D)},null,8,["code"])]),sample:l(()=>[ae]),usage:l(()=>[le]),_:1})])]),_:1})]),_:1})}}}),te={class:"mx-auto max-w-6"},se={class:"pt-4 pb-6"},re={class:"is-flex is-align-items-flex-end pt-4"},ce=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),de=a("p",{class:"paragraph rem-95"},[n(" Tags are a central part in all web and mobile application. Vulk tags come in different flavors. You can control tag elevation using the "),a("code",null,"elevated"),n(" prop. ")],-1),pe=_({__name:"TagElevated",setup(g){return(u,b)=>{const r=h,o=S,s=$,t=x,d=y,p=v,i=T;return m(),f(i,{id:"tag-elevated-demo","bordered-bottom":""},{default:l(()=>[e(p,null,{default:l(()=>[a("div",te,[a("div",se,[e(r,{title:"Elevated tags",subtitle:"Elevated tags variation"}),a("div",re,[e(s,null,{default:l(()=>[e(o,{label:"Default",shape:"rounded",elevated:""}),e(o,{color:"solid",label:"Solid",shape:"rounded",elevated:""}),e(o,{color:"primary",label:"Primary",shape:"rounded",elevated:""}),e(o,{color:"success",label:"Success",shape:"rounded",elevated:""}),e(o,{color:"info",label:"Info",shape:"rounded",elevated:""}),e(o,{color:"warning",label:"Warning",shape:"rounded",elevated:""}),e(o,{color:"danger",label:"Danger",shape:"rounded",elevated:""}),e(o,{color:"orange",label:"Orange",shape:"rounded",elevated:""}),e(o,{color:"blue",label:"Blue",shape:"rounded",elevated:""}),e(o,{color:"green",label:"Green",shape:"rounded",elevated:""}),e(o,{color:"purple",label:"Purple",shape:"rounded",elevated:""})]),_:1})])]),e(d,null,{code:l(()=>[e(t,{language:"html",code:c(E)},null,8,["code"])]),props:l(()=>[e(t,{language:"javascript",code:c(D)},null,8,["code"])]),sample:l(()=>[ce]),usage:l(()=>[de]),_:1})])]),_:1})]),_:1})}}}),xe=_({__name:"tags",setup(g){const u=[{label:"Color",target:"tag-colors-demo"},{label:"Rounded",target:"tag-rounded-demo"},{label:"Square",target:"tag-square-demo"},{label:"Outlined",target:"tag-outlined-demo"},{label:"Elevation",target:"tag-elevation-demo"}];return(b,r)=>{const o=q,s=w;return m(),P("div",null,[e(o,{title:"Tag Component",subtitle:"Tags are an essential part in all web and mobile application with a wide variety of usage. Explore Vulk tags."}),e(s,{links:u,width:"480px"}),e(W),e(z),e(X),e(ne),e(pe),e(C)])}}});export{xe as default};
