import{_ as U}from"./DemoLinks.072b5868.js";import{_ as B,a as Y}from"./DemoTitle.9dad457e.js";import{D as V}from"./DocumentationFooter.04bcec7b.js";import{b as h,X as k,bc as E,aR as N,o as M,h as y,j as o,bC as I,bD as G,f as e,w as t,k as T,l as a,t as j,n as L,af as A,q as K,v as $,x as q,y as F,A as H,u as _,C as S,E as C,G as O,e as R}from"./index.d17d1dd6.js";import{_ as P,a as w}from"./PrismCode.98a08cea.js";import{_ as x}from"./PlaceholderSection.609330ec.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";const X=i=>(q("data-v-99b9c1dc"),i=i(),F(),i),J={class:"modal-content"},Q={class:"modal-card"},W={class:"modal-card-head"},Z=X(()=>o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1)),ee=[Z],oe={class:"inner-content"},te=h({__name:"Modal",props:{title:null,size:{default:void 0},actions:{default:void 0},open:{type:Boolean},rounded:{type:Boolean},noscroll:{type:Boolean},noclose:{type:Boolean},tabs:{type:Boolean},cancelLabel:{default:void 0}},emits:["close"],setup(i,{emit:s}){const m=i,n=k(!1);return E(()=>{m.noscroll&&m.open?(document.documentElement.classList.add("no-scroll"),n.value=!0):n.value&&m.noscroll&&!m.open&&(document.documentElement.classList.remove("no-scroll"),n.value=!1)}),N(()=>{document.documentElement.classList.remove("no-scroll")}),(l,c)=>{const p=K,u=$;return M(),y(A,{to:"body"},[o("div",{class:L([[i.open&&"is-active",i.size&&`is-${i.size}`],"modal v-modal"])},[o("div",{class:"modal-background v-modal-close",onClick:c[0]||(c[0]=()=>i.noclose===!1&&s("close")),onKeydown:c[1]||(c[1]=I(G(()=>i.noclose===!1&&s("close"),["prevent"]),["space"]))},null,32),o("div",J,[o("div",Q,[o("header",W,[e(p,{tag:"h3",size:6,weight:"semi",narrow:""},{default:t(()=>[T(l.$slots,"title",{},()=>[a(j(i.title),1)],!0)]),_:3}),o("button",{class:"v-modal-close ml-auto","aria-label":"close",onClick:c[2]||(c[2]=r=>s("close"))},ee)]),o("div",{class:L(["modal-card-body",[m.tabs&&"has-tabs"]])},[o("div",oe,[T(l.$slots,"content",{},void 0,!0)])],2),o("div",{class:L(["modal-card-foot",[i.actions==="center"&&"is-centered",i.actions==="right"&&"is-end"]])},[T(l.$slots,"cancel",{},()=>[e(u,{raised:"",long:2,rounded:i.rounded,onClick:c[3]||(c[3]=r=>s("close")),onKeydown:c[4]||(c[4]=I(G(()=>s("close"),["prevent"]),["space"]))},{default:t(()=>[a(" Cancel ")]),_:1},8,["rounded"])],!0),T(l.$slots,"action",{},void 0,!0)],2)])])],2)])}}});const z=H(te,[["__scopeId","data-v-99b9c1dc"]]),D=`
<script setup lang="ts">
export type ModalSize = 'small' | 'medium' | 'large' | 'big'
export type ModalAction = 'center' | 'right'

export interface ModalEmits {
  (e: 'close'): void
}

export interface ModalProps {
  title: string
  size?: ModalSize
  actions?: ModalAction
  open?: boolean
  rounded?: boolean
  noscroll?: boolean
  noclose?: boolean
  tabs?: boolean
  cancelLabel?: string
}
<\/script>
`,ae=`
<script setup lang="ts">
const modalBaseOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBaseOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Premium features"
    :open="modalBaseOpen"
    actions="center"
    noscroll
    @close="modalBaseOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,ne=`
<script setup lang="ts">
const modalSmallOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalSmallOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Small Modal"
    :open="modalSmallOpen"
    size="small"
    actions="center"
    noscroll
    @close="modalSmallOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,se=`
<script setup lang="ts">
const modalMediumOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalMediumOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Medium Modal"
    :open="modalMediumOpen"
    size="medium"
    actions="center"
    noscroll
    @close="modalMediumOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,le=`
<script setup lang="ts">
const modalLargeOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalLargeOpen = true">Open Large Modal</Button>

  <!--Modal-->
  <Modal
    title="Large Modal"
    :open="modalLargeOpen"
    size="large"
    actions="center"
    noscroll
    @close="modalLargeOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,ie=`
<script setup lang="ts">
const modalBigOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBigOpen = true">Open Large Modal</Button>

  <!--Modal-->
  <Modal
    title="Big Modal"
    :open="modalBigOpen"
    size="big"
    actions="center"
    noscroll
    @close="modalBigOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,ce={class:"mx-auto max-w-6"},re={class:"pt-4 pb-6"},de={class:"pt-4"},me=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),pe=o("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),o("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),o("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),o("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),o("code",null,"noclose"),a(" prop. . ")],-1),ue=h({__name:"ModalBase",setup(i){const s=k(!1);return(m,n)=>{const d=B,l=$,c=S,p=x,u=z,r=P,g=w,f=C,v=O;return M(),y(v,{id:"modal-base-demo","bordered-bottom":""},{default:t(()=>[e(f,null,{default:t(()=>[o("div",ce,[o("div",re,[e(d,{title:"Modal",subtitle:"Modal base variation"}),o("div",de,[e(l,{bold:"",onClick:n[0]||(n[0]=b=>s.value=!0)},{default:t(()=>[a("Open Modal")]),_:1}),e(u,{title:"Premium features",open:s.value,actions:"center",noscroll:"",onClose:n[1]||(n[1]=b=>s.value=!1)},{content:t(()=>[e(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[e(c,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[e(l,{color:"primary",long:2,raised:""},{default:t(()=>[a("Confirm")]),_:1})]),_:1},8,["open"])])]),e(g,null,{code:t(()=>[e(r,{language:"html",code:_(ae)},null,8,["code"])]),props:t(()=>[e(r,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[me]),usage:t(()=>[pe]),_:1})])]),_:1})]),_:1})}}}),_e={class:"mx-auto max-w-6"},ge={class:"pt-4 pb-6"},fe={class:"pt-4"},ve=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),be=o("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),o("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),o("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),o("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),o("code",null,"noclose"),a(" prop. . ")],-1),he=h({__name:"ModalSmall",setup(i){const s=k(!1);return(m,n)=>{const d=B,l=$,c=S,p=x,u=z,r=P,g=w,f=C,v=O;return M(),y(v,{id:"modal-small-demo","bordered-bottom":""},{default:t(()=>[e(f,null,{default:t(()=>[o("div",_e,[o("div",ge,[e(d,{title:"Modal",subtitle:"Modal small variation"}),o("div",fe,[e(l,{bold:"",onClick:n[0]||(n[0]=b=>s.value=!0)},{default:t(()=>[a(" Open Small Modal ")]),_:1}),e(u,{title:"Small Modal",open:s.value,size:"small",actions:"center",noscroll:"",onClose:n[1]||(n[1]=b=>s.value=!1)},{content:t(()=>[e(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[e(c,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[e(l,{color:"primary",long:2,raised:""},{default:t(()=>[a("Confirm")]),_:1})]),_:1},8,["open"])])]),e(g,null,{code:t(()=>[e(r,{language:"html",code:_(ne)},null,8,["code"])]),props:t(()=>[e(r,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[ve]),usage:t(()=>[be]),_:1})])]),_:1})]),_:1})}}}),Me={class:"mx-auto max-w-6"},ke={class:"pt-4 pb-6"},ye={class:"pt-4"},$e=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Be=o("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),o("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),o("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),o("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),o("code",null,"noclose"),a(" prop. . ")],-1),Se=h({__name:"ModalMedium",setup(i){const s=k(!1);return(m,n)=>{const d=B,l=$,c=S,p=x,u=z,r=P,g=w,f=C,v=O;return M(),y(v,{id:"modal-medium-demo","bordered-bottom":""},{default:t(()=>[e(f,null,{default:t(()=>[o("div",Me,[o("div",ke,[e(d,{title:"Modal",subtitle:"Modal medium variation"}),o("div",ye,[e(l,{bold:"",onClick:n[0]||(n[0]=b=>s.value=!0)},{default:t(()=>[a(" Open Medium Modal ")]),_:1}),e(u,{title:"Medium Modal",open:s.value,size:"medium",actions:"center",noscroll:"",onClose:n[1]||(n[1]=b=>s.value=!1)},{content:t(()=>[e(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[e(c,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[e(l,{color:"primary",long:2,raised:""},{default:t(()=>[a("Confirm")]),_:1})]),_:1},8,["open"])])]),e(g,null,{code:t(()=>[e(r,{language:"html",code:_(se)},null,8,["code"])]),props:t(()=>[e(r,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[$e]),usage:t(()=>[Be]),_:1})])]),_:1})]),_:1})}}}),Ce={class:"mx-auto max-w-6"},Oe={class:"pt-4 pb-6"},Pe={class:"pt-4"},we=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),xe=o("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),o("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),o("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),o("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),o("code",null,"noclose"),a(" prop. . ")],-1),ze=h({__name:"ModalLarge",setup(i){const s=k(!1);return(m,n)=>{const d=B,l=$,c=S,p=x,u=z,r=P,g=w,f=C,v=O;return M(),y(v,{id:"modal-large-demo","bordered-bottom":""},{default:t(()=>[e(f,null,{default:t(()=>[o("div",Ce,[o("div",Oe,[e(d,{title:"Modal",subtitle:"Modal large variation"}),o("div",Pe,[e(l,{bold:"",onClick:n[0]||(n[0]=b=>s.value=!0)},{default:t(()=>[a(" Open Large Modal ")]),_:1}),e(u,{title:"Large Modal",open:s.value,size:"large",actions:"center",noscroll:"",onClose:n[1]||(n[1]=b=>s.value=!1)},{content:t(()=>[e(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[e(c,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[e(l,{color:"primary",long:2,raised:""},{default:t(()=>[a("Confirm")]),_:1})]),_:1},8,["open"])])]),e(g,null,{code:t(()=>[e(r,{language:"html",code:_(le)},null,8,["code"])]),props:t(()=>[e(r,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[we]),usage:t(()=>[xe]),_:1})])]),_:1})]),_:1})}}}),De={class:"mx-auto max-w-6"},Te={class:"pt-4 pb-6"},Le={class:"pt-4"},Ie=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ge=o("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),o("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),o("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),o("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),o("code",null,"noclose"),a(" prop. . ")],-1),Ue=h({__name:"ModalBig",setup(i){const s=k(!1);return(m,n)=>{const d=B,l=$,c=S,p=x,u=z,r=P,g=w,f=C,v=O;return M(),y(v,{id:"modal-big-demo","bordered-bottom":""},{default:t(()=>[e(f,null,{default:t(()=>[o("div",De,[o("div",Te,[e(d,{title:"Modal",subtitle:"Modal big variation"}),o("div",Le,[e(l,{bold:"",onClick:n[0]||(n[0]=b=>s.value=!0)},{default:t(()=>[a("Open Big Modal")]),_:1}),e(u,{title:"Big Modal",open:s.value,size:"big",actions:"center",noscroll:"",onClose:n[1]||(n[1]=b=>s.value=!1)},{content:t(()=>[e(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[e(c,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[e(l,{color:"primary",long:2,raised:""},{default:t(()=>[a("Confirm")]),_:1})]),_:1},8,["open"])])]),e(g,null,{code:t(()=>[e(r,{language:"html",code:_(ie)},null,8,["code"])]),props:t(()=>[e(r,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[Ie]),usage:t(()=>[Ge]),_:1})])]),_:1})]),_:1})}}}),He=h({__name:"modals",setup(i){const s=[{label:"Modal",target:"modal-base-demo"},{label:"Small",target:"modal-small-demo"},{label:"Medium",target:"modal-medium-demo"},{label:"Large",target:"modal-large-demo"},{label:"Big",target:"modal-big-demo"}];return(m,n)=>{const d=Y,l=U;return M(),R("div",null,[e(d,{title:"Modal Component",subtitle:"Modals are a very important part of modern dynamic applications. They can help displaying additional info. Explore Vulk modals."}),e(l,{links:s,width:"400px"}),e(ue),e(he),e(Se),e(ze),e(Ue),e(V)])}}});export{He as default};
