import{_ as S}from"./DemoLinks.09b4b6cb.js";import{_ as b,a as A}from"./DemoTitle.63799a9a.js";import{b as _,o as p,h as f,w as t,f as o,j as e,u as l,l as s,E as $,G as w,v as B,e as g,t as v,i as D,A as H}from"./index.4498c4e2.js";import{_ as x,a as P}from"./PrismCode.424bb1bc.js";import{_ as y}from"./Popover.490377a8.js";import{_ as z}from"./IconBox.39e8ec7c.js";import{_ as I}from"./AvatarSimple.57c1e629.js";import{D as L}from"./DocumentationFooter.3fc21694.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./popper.esm.e6a251b9.js";const C=`
<script setup lang="ts">
export type PopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type PopoverColor =
  | 'default'
  | 'inverted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'

export type PopoverSpacing = 'small' | 'medium' | 'large'

export interface PopoverProps {
  content?: string
  placement?: PopoverPlacement
  spacing?: PopoverSpacing
  arrow?: boolean
  hover?: boolean
  custom?: boolean
  color?: PopoverColor
  offsetDistance?: number
  openDelay?: number
  closeDelay?: number
}
<\/script>
`,V=`
<template>
  <Popover
    content="This is a top popover"
    placement="top"
    arrow
    hover
  >
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`,Y=`
<template>
  <Popover
    content="This is a hover popover"
    placement="top"
    arrow
    hover
  >
    <Button>Hover me</Button>
  </Popover>
</template>
`,N=`
<template>
  <Popover
    content="This is a primary popover"
    placement="top"
    hover
    arrow
    color="primary"
  >
    <p class="paragraph cursor-pointer">Primary</p>
  </Popover>

  <Popover
    content="This is a success popover"
    placement="top"
    hover
    arrow
    color="success"
  >
    <p class="paragraph cursor-pointer">Success</p>
  </Popover>
</template>
`,q=`
<template>
  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:skull-outline"
        color="danger"
        heading="Danger ahead"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>

  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:rocket-outline"
        color="info"
        heading="Startup nation"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rounded
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`,j=`
<template>
  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="data:image/gif;base64,replace_with_your_image"
        heading="Helen Miller"
        subheading="Software Engineer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>

  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="data:image/gif;base64,replace_with_your_image"
        heading="Chris Wyatt"
        subheading="Frontend Developer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
        squared
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`,E={class:"mx-auto max-w-6"},O={class:"pt-4 pb-6"},W={class:"columns pt-4"},F={class:"column is-3 has-text-centered"},M=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),G={class:"column is-3 has-text-centered"},U=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),X={class:"column is-3 has-text-centered"},J=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),K={class:"column is-3 has-text-centered"},Q=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),R=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Z=e("p",{class:"paragraph rem-95"},[s(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),s(" prop. Accepted values are "),e("code",null,"medium"),s(" and "),e("code",null,"large"),s(" You can also make a button text bolder by adding the "),e("code",null,"bold"),s(" prop or make the button wider using the "),e("code",null,"long"),s(" prop. ")],-1),ee=_({__name:"PopoverBase",setup(d){return(n,h)=>{const c=b,a=y,r=x,i=P,u=$,m=w;return p(),f(m,{id:"popover-placement-demo","bordered-bottom":""},{default:t(()=>[o(u,null,{default:t(()=>[e("div",E,[e("div",O,[o(c,{title:"Popover placement",subtitle:"Available positions"}),e("div",W,[e("div",F,[o(a,{content:"This is a top popover",placement:"top",arrow:"",hover:""},{default:t(()=>[M]),_:1})]),e("div",G,[o(a,{content:"This is a bottom popover",placement:"bottom",hover:"",arrow:""},{default:t(()=>[U]),_:1})]),e("div",X,[o(a,{content:"This is a left popover",placement:"left",hover:"",arrow:""},{default:t(()=>[J]),_:1})]),e("div",K,[o(a,{content:"This is a right popover",placement:"right",spacing:"medium",hover:"",arrow:""},{default:t(()=>[Q]),_:1})])])]),o(i,null,{code:t(()=>[o(r,{language:"html",code:l(V)},null,8,["code"])]),props:t(()=>[o(r,{language:"javascript",code:l(C)},null,8,["code"])]),sample:t(()=>[R]),usage:t(()=>[Z]),_:1})])]),_:1})]),_:1})}}}),oe={class:"mx-auto max-w-6"},te={class:"pt-4 pb-6"},ae={class:"columns pt-4"},se={class:"column is-3 has-text-centered"},ne={class:"column is-3 has-text-centered"},re=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ce=e("p",{class:"paragraph rem-95"},[s(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),s(" prop. Accepted values are "),e("code",null,"medium"),s(" and "),e("code",null,"large"),s(" You can also make a button text bolder by adding the "),e("code",null,"bold"),s(" prop or make the button wider using the "),e("code",null,"long"),s(" prop. ")],-1),ie=_({__name:"PopoverTrigger",setup(d){return(n,h)=>{const c=b,a=B,r=y,i=x,u=P,m=$,k=w;return p(),f(k,{id:"popover-trigger-demo","bordered-bottom":""},{default:t(()=>[o(m,null,{default:t(()=>[e("div",oe,[e("div",te,[o(c,{title:"Popover trigger",subtitle:"Available triggers"}),e("div",ae,[e("div",se,[o(r,{content:"This is a hover popover",placement:"top",arrow:"",hover:""},{default:t(()=>[o(a,null,{default:t(()=>[s("Hover me")]),_:1})]),_:1})]),e("div",ne,[o(r,{content:"This is a click popover",placement:"top",arrow:""},{default:t(()=>[o(a,null,{default:t(()=>[s("Click me")]),_:1})]),_:1})])])]),o(u,null,{code:t(()=>[o(i,{language:"html",code:l(Y)},null,8,["code"])]),props:t(()=>[o(i,{language:"javascript",code:l(C)},null,8,["code"])]),sample:t(()=>[re]),usage:t(()=>[ce]),_:1})])]),_:1})]),_:1})}}}),pe={class:"mx-auto max-w-6"},le={class:"pt-4 pb-6"},de={class:"columns is-multiline pt-4"},ue={class:"column is-3 has-text-centered"},me=e("p",{class:"paragraph cursor-pointer"},"Default",-1),_e={class:"column is-3 has-text-centered"},he=e("p",{class:"paragraph cursor-pointer"},"Primary",-1),ve={class:"column is-3 has-text-centered"},ge=e("p",{class:"paragraph cursor-pointer"},"Inverted",-1),be={class:"column is-3 has-text-centered"},fe=e("p",{class:"paragraph cursor-pointer"},"Info",-1),$e={class:"column is-3 has-text-centered"},we=e("p",{class:"paragraph cursor-pointer"},"Success",-1),xe={class:"column is-3 has-text-centered"},Pe=e("p",{class:"paragraph cursor-pointer"},"Warning",-1),ye={class:"column is-3 has-text-centered"},Ce=e("p",{class:"paragraph cursor-pointer"},"Danger",-1),Te={class:"column is-3 has-text-centered"},ke=e("p",{class:"paragraph cursor-pointer"},"Purple",-1),De=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),He=e("p",{class:"paragraph rem-95"},[s(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),s(" prop. Accepted values are "),e("code",null,"medium"),s(" and "),e("code",null,"large"),s(" You can also make a button text bolder by adding the "),e("code",null,"bold"),s(" prop or make the button wider using the "),e("code",null,"long"),s(" prop. ")],-1),Se=_({__name:"PopoverColors",setup(d){return(n,h)=>{const c=b,a=y,r=x,i=P,u=$,m=w;return p(),f(m,{id:"popover-colors-demo","bordered-bottom":""},{default:t(()=>[o(u,null,{default:t(()=>[e("div",pe,[e("div",le,[o(c,{title:"Popover colors",subtitle:"Available colors"}),e("div",de,[e("div",ue,[o(a,{content:"This is a default popover",placement:"top",arrow:"",hover:""},{default:t(()=>[me]),_:1})]),e("div",_e,[o(a,{content:"This is a primary popover",placement:"top",hover:"",arrow:"",color:"primary"},{default:t(()=>[he]),_:1})]),e("div",ve,[o(a,{content:"This is a inverted popover",placement:"top",hover:"",arrow:"",color:"inverted"},{default:t(()=>[ge]),_:1})]),e("div",be,[o(a,{content:"This is a info popover",placement:"top",spacing:"medium",hover:"",arrow:"",color:"info"},{default:t(()=>[fe]),_:1})]),e("div",$e,[o(a,{content:"This is a success popover",placement:"top",hover:"",arrow:"",color:"success"},{default:t(()=>[we]),_:1})]),e("div",xe,[o(a,{content:"This is a warning popover",placement:"top",hover:"",arrow:"",color:"warning"},{default:t(()=>[Pe]),_:1})]),e("div",ye,[o(a,{content:"This is a danger popover",placement:"top",hover:"",arrow:"",color:"danger"},{default:t(()=>[Ce]),_:1})]),e("div",Te,[o(a,{content:"This is a purple popover",placement:"top",hover:"",arrow:"",color:"purple"},{default:t(()=>[ke]),_:1})])])]),o(i,null,{code:t(()=>[o(r,{language:"html",code:l(N)},null,8,["code"])]),props:t(()=>[o(r,{language:"javascript",code:l(C)},null,8,["code"])]),sample:t(()=>[De]),usage:t(()=>[He]),_:1})])]),_:1})]),_:1})}}}),Ae={class:"popover-wrap"},Be={class:"popover-head"},ze=["data-icon"],Ie={class:"meta"},Le={class:"meta-title"},Ve={key:0,class:"meta-subtitle"},Ye={class:"popover-body"},Ne={class:"paragraph rem-80"},qe=_({__name:"IconPopover",props:{icon:null,color:{default:"primary"},heading:null,subheading:{default:void 0},content:null,rounded:{type:Boolean,default:!1}},setup(d){const n=d;return(h,c)=>{const a=z;return p(),g("div",Ae,[e("div",Be,[o(a,{color:n.color,rounded:n.rounded},{default:t(()=>[e("i",{class:"iconify","data-icon":n.icon},null,8,ze)]),_:1},8,["color","rounded"]),e("div",Ie,[e("span",Le,v(n.heading),1),n.subheading?(p(),g("span",Ve,v(n.subheading),1)):D("",!0)])]),e("div",Ye,[e("p",Ne,v(n.content),1)])])}}});const T=H(qe,[["__scopeId","data-v-31a8733b"]]),je={class:"mx-auto max-w-6"},Ee={class:"pt-4 pb-6"},Oe={class:"columns pt-4"},We={class:"column is-3 has-text-centered"},Fe=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Me={class:"column is-3 has-text-centered"},Ge=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Ue={class:"column is-3 has-text-centered"},Xe=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Je={class:"column is-3 has-text-centered"},Ke=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),Qe=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Re=e("p",{class:"paragraph rem-95"},[s(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),s(" prop. Accepted values are "),e("code",null,"medium"),s(" and "),e("code",null,"large"),s(" You can also make a button text bolder by adding the "),e("code",null,"bold"),s(" prop or make the button wider using the "),e("code",null,"long"),s(" prop. ")],-1),Ze=_({__name:"PopoverCustomIcons",setup(d){return(n,h)=>{const c=b,a=y,r=x,i=P,u=$,m=w;return p(),f(m,{id:"custom-icons-demo","bordered-bottom":""},{default:t(()=>[o(u,null,{default:t(()=>[e("div",je,[e("div",Ee,[o(c,{title:"Custom - Icons",subtitle:"Custom icon layout"}),e("div",Oe,[e("div",We,[o(a,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(T,{icon:"ion:skull-outline",color:"danger",heading:"Danger ahead",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]),default:t(()=>[Fe]),_:1})]),e("div",Me,[o(a,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(T,{icon:"ion:leaf-outline",color:"success",heading:"Environment",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]),default:t(()=>[Ge]),_:1})]),e("div",Ue,[o(a,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(T,{icon:"ion:pizza-outline",color:"orange",heading:"Pizza slices",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",rounded:""})]),default:t(()=>[Xe]),_:1})]),e("div",Je,[o(a,{custom:"",spacing:"medium",arrow:"",hover:""},{popover:t(()=>[o(T,{icon:"ion:rocket-outline",color:"info",heading:"Startup nation",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",rounded:""})]),default:t(()=>[Ke]),_:1})])])]),o(i,null,{code:t(()=>[o(r,{language:"html",code:l(q)},null,8,["code"])]),props:t(()=>[o(r,{language:"javascript",code:l(C)},null,8,["code"])]),sample:t(()=>[Qe]),usage:t(()=>[Re]),_:1})])]),_:1})]),_:1})}}}),eo={class:"popover-wrap"},oo={class:"popover-head"},to={class:"meta"},ao={class:"meta-title"},so={key:0,class:"meta-subtitle"},no={class:"popover-body"},ro={class:"paragraph rem-80"},co=_({__name:"AvatarPopover",props:{avatar:null,heading:null,subheading:{default:void 0},content:null,squared:{type:Boolean,default:!1}},setup(d){const n=d;return(h,c)=>{const a=I;return p(),g("div",eo,[e("div",oo,[o(a,{picture:n.avatar,squared:n.squared,size:"medium"},null,8,["picture","squared"]),e("div",to,[e("span",ao,v(n.heading),1),n.subheading?(p(),g("span",so,v(n.subheading),1)):D("",!0)])]),e("div",no,[e("p",ro,v(n.content),1)])])}}});const io=H(co,[["__scopeId","data-v-3274b75c"]]),po={class:"mx-auto max-w-6"},lo={class:"pt-4 pb-6"},uo={class:"columns pt-4"},mo={class:"column is-3 has-text-centered"},_o=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),ho={class:"column is-3 has-text-centered"},vo=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),go={class:"column is-3 has-text-centered"},bo=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),fo={class:"column is-3 has-text-centered"},$o=e("p",{class:"paragraph cursor-pointer"},"Hover me",-1),wo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),xo=e("p",{class:"paragraph rem-95"},[s(" Buttons are a central part in all web and mobile application. Vulk buttons come in different flavors. You can control the avatar size using the "),e("code",null,"size"),s(" prop. Accepted values are "),e("code",null,"medium"),s(" and "),e("code",null,"large"),s(" You can also make a button text bolder by adding the "),e("code",null,"bold"),s(" prop or make the button wider using the "),e("code",null,"long"),s(" prop. ")],-1),Po=_({__name:"PopoverCustomAvatars",setup(d){return(n,h)=>{const c=b,a=io,r=y,i=x,u=P,m=$,k=w;return p(),f(k,{id:"custom-avatars-demo","bordered-bottom":""},{default:t(()=>[o(m,null,{default:t(()=>[e("div",po,[e("div",lo,[o(c,{title:"Custom - Avatars",subtitle:"Custom avatar layout"}),e("div",uo,[e("div",mo,[o(r,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(a,{avatar:"data:image/gif;base64,replace_with_your_image",heading:"Helen Miller",subheading:"Software Engineer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."})]),default:t(()=>[_o]),_:1})]),e("div",ho,[o(r,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(a,{avatar:"data:image/gif;base64,replace_with_your_image",heading:"Dayron Williams",subheading:"UX Designer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."})]),default:t(()=>[vo]),_:1})]),e("div",go,[o(r,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(a,{avatar:"data:image/gif;base64,replace_with_your_image",heading:"Chris Wyatt",subheading:"Frontend Developer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus.",squared:""})]),default:t(()=>[bo]),_:1})]),e("div",fo,[o(r,{custom:"",spacing:"large",arrow:"",hover:""},{popover:t(()=>[o(a,{avatar:"data:image/gif;base64,replace_with_your_image",heading:"Christina Chu",subheading:"Product Manager",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus.",squared:""})]),default:t(()=>[$o]),_:1})])])]),o(u,null,{code:t(()=>[o(i,{language:"html",code:l(j)},null,8,["code"])]),props:t(()=>[o(i,{language:"javascript",code:l(C)},null,8,["code"])]),sample:t(()=>[wo]),usage:t(()=>[xo]),_:1})])]),_:1})]),_:1})}}}),Vo=_({__name:"popover",setup(d){const n=[{label:"Placement",target:"popover-placement-demo"},{label:"Trigger",target:"popover-trigger-demo"},{label:"Colors",target:"popover-colors-demo"},{label:"Icons",target:"custom-icons-demo"},{label:"Avatars",target:"custom-avatars-demo"}];return(h,c)=>{const a=A,r=S;return p(),g("div",null,[o(a,{title:"Popover Component",subtitle:"Popovers are a central part in all web and mobile application with a wide variety of usage. Explore Vulk popovers."}),o(r,{links:n,width:"500px"}),o(ee),o(ie),o(Se),o(Ze),o(Po),o(L)])}}});export{Vo as default};
