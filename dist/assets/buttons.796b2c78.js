import{_ as T}from"./DemoLinks.072b5868.js";import{_ as f,a as S}from"./DemoTitle.9dad457e.js";import{b as p,o as m,h,w as o,f as t,j as e,l as n,u as i,v as B,bH as v,E as x,G as $,e as k}from"./index.d17d1dd6.js";import{_ as y,a as w}from"./PrismCode.98a08cea.js";import{D as C}from"./DocumentationFooter.04bcec7b.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";const D=`
<script setup lang="ts">
export type ButtonSize = 'medium' | 'large' | 'form'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  long?: 1 | 2 | 3
  rounded?: boolean
  outlined?: boolean
  raised?: boolean
  elevated?: boolean
  bold?: boolean
  fullwidth?: boolean
  to?: RouteLocationRaw
  loading?: boolean
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}
<\/script>
`,z=`
<template>
  <Button>Normal</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</template>
`,I=`
<template>
  <Button rounded>Normal</Button>
  <Button size="medium" rounded>Medium</Button>
  <Button size="large" rounded>Large</Button>
</template>
`,L=`
<template>
  <Button>Iam a Button</Button>
  <Button href="https://google.com">Iam a Link</Button>
  <Button to="index">Iam a RouterLink</Button>
</template>
`,P=`
<template>
  <Button color="primary" :long="1">Primary</Button>
  <Button color="success" :long="1">Success</Button>
</template>
`,N=`
<template>
  <Button color="primary" :long="1" outlined>Primary</Button>
  <Button color="success" :long="1" outlined>Success</Button>
  <Button color="info" :long="1" outlined>Info</Button>
</template>
`,V=`
<template>
  <Button icon-left="feather:github">GitHub</Button>
  <Button icon-right="feather:arrow-right">Go Right</Button>
</template>
`,j=`
<template>
  <Button color="primary" elevated>Primary</Button>
  <Button color="success" raised>Success</Button>
  <Button color="info" elevated>Info</Button>
</template>
`,H=`
<template>
  <Button loading>Default</Button>
  <Button color="primary" loading>Primary</Button>
  <Button color="success"loading>Success</Button>
</template>
`,R=`
<template>
  <Button disabled>Default</Button>
  <Button color="primary" disabled>Primary</Button>
  <Button color="success"disabled>Success</Button>
</template>
`,G={class:"mx-auto max-w-6"},A={class:"pt-4 pb-6"},E={class:"is-flex is-align-items-flex-end pt-4"},M=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),O=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),n(" prop. Accepted values are "),e("code",null,"medium"),n(" and "),e("code",null,"large"),n(" You can also make a button text bolder by adding the "),e("code",null,"bold"),n(" prop or make the button wider using the "),e("code",null,"long"),n(" prop. ")],-1),Y=p({__name:"ButtonSize",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-size-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",G,[e("div",A,[t(c,{title:"Button Sizes",subtitle:"Available button sizes"}),e("div",E,[t(s,null,{default:o(()=>[t(a,null,{default:o(()=>[n("Normal")]),_:1}),t(a,{size:"medium"},{default:o(()=>[n("Medium")]),_:1}),t(a,{size:"large"},{default:o(()=>[n("Large")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(z)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[M]),usage:o(()=>[O]),_:1})])]),_:1})]),_:1})}}}),W={class:"mx-auto max-w-6"},F={class:"pt-4 pb-6"},q={class:"is-flex is-align-items-flex-end pt-4"},J=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),K=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the render element type by using the "),e("code",null,"to"),n(" prop. If you enter an external link as a value, it generates an HTML "),e("code",null,"<a></a>"),n(" tag. If you enter a route, it generates a "),e("code",null,"<RouterLink />"),n(" element. Omitting it generates a standard HTML "),e("code",null,"<button></button>"),n(" element. ")],-1),Q=p({__name:"ButtonType",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-types-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",W,[e("div",F,[t(c,{title:"Button Type",subtitle:"Available button types"}),e("div",q,[t(s,null,{default:o(()=>[t(a,null,{default:o(()=>[n("Iam a Button")]),_:1}),t(a,{href:"https://google.com"},{default:o(()=>[n("Iam a Link")]),_:1}),t(a,{to:"index"},{default:o(()=>[n("Iam a RouterLink")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(L)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[J]),usage:o(()=>[K]),_:1})])]),_:1})]),_:1})}}}),U={class:"mx-auto max-w-6"},X={class:"pt-4 pb-6"},Z={class:"is-flex is-align-items-flex-end pt-4"},tt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ot=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the button shape using the "),e("code",null,"rounded"),n(" prop. This prop is a "),e("code",null,"boolean"),n(" and does not need a value. ")],-1),et=p({__name:"ButtonShape",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-shape-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",U,[e("div",X,[t(c,{title:"Button Shape",subtitle:"Rounded button variation"}),e("div",Z,[t(s,null,{default:o(()=>[t(a,{rounded:""},{default:o(()=>[n("Normal")]),_:1}),t(a,{size:"medium",rounded:""},{default:o(()=>[n("Medium")]),_:1}),t(a,{size:"large",rounded:""},{default:o(()=>[n("Large")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(I)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[tt]),usage:o(()=>[ot]),_:1})])]),_:1})]),_:1})}}}),nt={class:"mx-auto max-w-6"},at={class:"pt-4 pb-6"},lt={class:"is-flex is-align-items-flex-end pt-4"},st=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ct=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control button colors using the "),e("code",null,"color"),n(" prop. Allowed values are "),e("code",null,"primary"),n(" , "),e("code",null,"success"),n(" , "),e("code",null,"info"),n(" , "),e("code",null,"warning"),n(" and "),e("code",null,"danger"),n(" . ")],-1),it=p({__name:"ButtonColor",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-colors-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",nt,[e("div",at,[t(c,{title:"Button Colors",subtitle:"Available button colors"}),e("div",lt,[t(s,null,{default:o(()=>[t(a,{long:1},{default:o(()=>[n("Default")]),_:1}),t(a,{color:"primary",long:1},{default:o(()=>[n("Primary")]),_:1}),t(a,{color:"success",long:1},{default:o(()=>[n("Success")]),_:1}),t(a,{color:"info",long:1},{default:o(()=>[n("Info")]),_:1}),t(a,{color:"warning",long:1},{default:o(()=>[n("Warning")]),_:1}),t(a,{color:"danger",long:1},{default:o(()=>[n("Danger")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(P)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[st]),usage:o(()=>[ct]),_:1})])]),_:1})]),_:1})}}}),ut={class:"mx-auto max-w-6"},rt={class:"pt-4 pb-6"},dt={class:"is-flex is-align-items-flex-end pt-4"},_t=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),pt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. Buttons can have icons either on the left or on the right side. To insert a left icon, use the "),e("code",null,"icon-left"),n(" prop. To insert a right icon, use the "),e("code",null,"icon-right"),n(" prop. All ionify ico sets are available. ")],-1),mt=p({__name:"ButtonIcon",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-icons-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",ut,[e("div",rt,[t(c,{title:"Button Icons",subtitle:"Icon buttons variation"}),e("div",dt,[t(s,null,{default:o(()=>[t(a,{long:1,"icon-left":"feather:github"},{default:o(()=>[n("GitHub")]),_:1}),t(a,{color:"primary",long:1,"icon-right":"feather:arrow-right"},{default:o(()=>[n(" Go Right ")]),_:1}),t(a,{long:1,"icon-left":"feather:github"},{default:o(()=>[n("GitHub")]),_:1}),t(a,{size:"medium",long:1,"icon-left":"feather:github"},{default:o(()=>[n(" GitHub ")]),_:1}),t(a,{size:"large",long:1,"icon-left":"feather:github"},{default:o(()=>[n(" GitHub ")]),_:1}),t(a,{color:"danger",outlined:"",long:1,"icon-left":"feather:heart"},{default:o(()=>[n(" I Love it ")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(V)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[_t]),usage:o(()=>[pt]),_:1})])]),_:1})]),_:1})}}}),gt={class:"mx-auto max-w-6"},bt={class:"pt-4 pb-6"},ft={class:"is-flex is-align-items-flex-end pt-4"},ht=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Bt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can make outlined buttons using the "),e("code",null,"outlined"),n(" prop. The outlined prop is a boolean an doesn't need a value. Only works on colored buttons. ")],-1),vt=p({__name:"ButtonOutlined",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-outlined-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",gt,[e("div",bt,[t(c,{title:"Outlined",subtitle:"Available outlined buttons"}),e("div",ft,[t(s,null,{default:o(()=>[t(a,{color:"primary",long:1,outlined:""},{default:o(()=>[n("Primary")]),_:1}),t(a,{color:"success",long:1,outlined:""},{default:o(()=>[n("Success")]),_:1}),t(a,{color:"info",long:1,outlined:""},{default:o(()=>[n("Info")]),_:1}),t(a,{color:"warning",long:1,outlined:""},{default:o(()=>[n("Warning")]),_:1}),t(a,{color:"danger",long:1,outlined:""},{default:o(()=>[n("Danger")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(N)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[ht]),usage:o(()=>[Bt]),_:1})])]),_:1})]),_:1})}}}),xt={class:"mx-auto max-w-6"},$t={class:"pt-4 pb-6"},yt={class:"is-flex is-align-items-flex-end pt-4"},wt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Dt=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. Buttons can be elevated, showing a colored box shadow wether it is by default or on hover. To elevate a button by default, use the "),e("code",null,"elevated"),n(" prop. To elevate a button on hover, use the "),e("code",null,"raised"),n(" prop. ")],-1),Tt=p({__name:"ButtonElevation",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-elevation-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",xt,[e("div",$t,[t(c,{title:"Elevation",subtitle:"Button elevation variations"}),e("div",yt,[t(s,null,{default:o(()=>[t(a,{color:"primary",long:1,elevated:""},{default:o(()=>[n("Primary")]),_:1}),t(a,{color:"success",long:1,elevated:""},{default:o(()=>[n("Success")]),_:1}),t(a,{color:"info",long:1,elevated:""},{default:o(()=>[n("Info")]),_:1}),t(a,{color:"warning",long:1,elevated:""},{default:o(()=>[n("Warning")]),_:1}),t(a,{color:"danger",long:1,elevated:""},{default:o(()=>[n("Danger")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(j)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[wt]),usage:o(()=>[Dt]),_:1})])]),_:1})]),_:1})}}}),St={class:"mx-auto max-w-6"},kt={class:"pt-4 pb-6"},Ct={class:"is-flex is-align-items-flex-end pt-4"},zt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),It=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. Buttons can have a loading state. To show a loading button, use the "),e("code",null,"loading"),n(" prop. ")],-1),Lt=p({__name:"ButtonLoading",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-loading-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",St,[e("div",kt,[t(c,{title:"Button Loading",subtitle:"Loading button state"}),e("div",Ct,[t(s,null,{default:o(()=>[t(a,{long:1,loading:""},{default:o(()=>[n("Default")]),_:1}),t(a,{color:"primary",long:1,loading:""},{default:o(()=>[n("Primary")]),_:1}),t(a,{color:"success",long:1,loading:""},{default:o(()=>[n("Success")]),_:1}),t(a,{color:"info",long:1,loading:""},{default:o(()=>[n("Info")]),_:1}),t(a,{color:"warning",long:1,loading:""},{default:o(()=>[n("Warning")]),_:1}),t(a,{color:"danger",long:1,loading:""},{default:o(()=>[n("Danger")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(H)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[zt]),usage:o(()=>[It]),_:1})])]),_:1})]),_:1})}}}),Pt={class:"mx-auto max-w-6"},Nt={class:"pt-4 pb-6"},Vt={class:"is-flex is-align-items-flex-end pt-4"},jt=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ht=e("p",{class:"paragraph rem-95"},[n(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. Buttons can have a disabled state. To show a disabled button, use the "),e("code",null,"disabled"),n(" prop. ")],-1),Rt=p({__name:"ButtonDisabled",setup(g){return(_,b)=>{const c=f,a=B,s=v,l=y,u=w,r=x,d=$;return m(),h(d,{id:"button-disabled-demo","bordered-bottom":""},{default:o(()=>[t(r,null,{default:o(()=>[e("div",Pt,[e("div",Nt,[t(c,{title:"Button disabled",subtitle:"Disabled button state"}),e("div",Vt,[t(s,null,{default:o(()=>[t(a,{long:1,disabled:""},{default:o(()=>[n("Default")]),_:1}),t(a,{color:"primary",long:1,disabled:""},{default:o(()=>[n("Primary")]),_:1}),t(a,{color:"success",long:1,disabled:""},{default:o(()=>[n("Success")]),_:1}),t(a,{color:"info",long:1,disabled:""},{default:o(()=>[n("Info")]),_:1}),t(a,{color:"warning",long:1,disabled:""},{default:o(()=>[n("Warning")]),_:1}),t(a,{color:"danger",long:1,disabled:""},{default:o(()=>[n("Danger")]),_:1})]),_:1})])]),t(u,null,{code:o(()=>[t(l,{language:"html",code:i(R)},null,8,["code"])]),props:o(()=>[t(l,{language:"javascript",code:i(D)},null,8,["code"])]),sample:o(()=>[jt]),usage:o(()=>[Ht]),_:1})])]),_:1})]),_:1})}}}),qt=p({__name:"buttons",setup(g){const _=[{label:"Sizes",target:"button-size-demo"},{label:"Shape",target:"button-shape-demo"},{label:"Types",target:"button-types-demo"},{label:"Color",target:"button-colors-demo"},{label:"Outlined",target:"button-outlined-demo"},{label:"Icons",target:"button-icons-demo"},{label:"Elevation",target:"button-elevation-demo"},{label:"Loading",target:"button-loading-demo"},{label:"Disabled",target:"button-disabled-demo"}];return(b,c)=>{const a=S,s=T;return m(),k("div",null,[t(a,{title:"Button Component",subtitle:"Buttons are a central part in all web and mobile application with a wide variety of usage. Explore Vulk buttons."}),t(s,{links:_,width:"800px"}),t(Y),t(et),t(Q),t(it),t(vt),t(mt),t(Tt),t(Lt),t(Rt),t(C)])}}});export{qt as default};
