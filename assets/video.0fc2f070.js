import{_ as V}from"./DemoLinks.09b4b6cb.js";import{_ as b,a as w}from"./DemoTitle.63799a9a.js";import{D as A}from"./DocumentationFooter.3fc21694.js";import{_ as k,a as v}from"./PrismCode.424bb1bc.js";import{_ as y}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as m,o as d,e as _,f as e,w as t,u as o,cl as p,F as B,j as h,E as x,G as C,cm as P}from"./index.4498c4e2.js";import{_ as S}from"./VideoBlockA.vue_vue_type_script_setup_true_lang.18807e43.js";import{_ as q}from"./VideoBlockB.vue_vue_type_script_setup_true_lang.9c01c083.js";import{_ as D}from"./VideoBlockC.vue_vue_type_script_setup_true_lang.7058c1c2.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";import"./Player.vue_vue_type_style_index_0_lang.211b269d.js";import"./IconBox.39e8ec7c.js";const L={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},T=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockA
    title="On point delivery."
    source="/assets/video/meeting.mp4"
    poster="data:image/gif;base64,replace_with_your_image"
    :features="features4"
  />
</template>
`,$=`
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
`,O={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},F=`
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockB
    title="Our Product"
    :features="features5"
    source="/assets/video/meeting.mp4"
    poster="data:image/gif;base64,replace_with_your_image"
  />
</template>
`,j=`
export const features5: IconFeature[] = [
  {
    title: 'Stay Relaxed',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'primary',
    icon: 'feather:coffee',
    link: '/',
  },
  {
    title: 'Save Time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'green',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Earn More',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'info',
    icon: 'feather:zap',
    link: '/',
  },
]
`,E={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},N=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockC
    title="Our Product"
    :features="features4"
    source="/assets/video/meeting.mp4"
    poster="data:image/gif;base64,replace_with_your_image"
  />
</template>
`,z=`
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
`,G=h("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Vulk video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),H=m({__name:"VideoBlockADoc",setup(f){return(u,g)=>{const s=b,i=S,a=x,r=C,l=k,n=y,c=v;return d(),_(B,null,[e(r,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(i,{title:"On point delivery.",source:"/assets/video/meeting.mp4",poster:"data:image/gif;base64,replace_with_your_image",features:o(p)},null,8,["features"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(i,{title:"On point delivery.",source:"/assets/video/meeting.mp4",poster:"data:image/gif;base64,replace_with_your_image",features:o(p),links:""},null,8,["features"])]),_:1})]),_:1}),e(r,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block A Props",subtitle:"Available props for block A"}),e(c,null,{code:t(()=>[e(l,{language:"html",code:o(T)},null,8,["code"])]),props:t(()=>[e(n,{props:o(L).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o($)},null,8,["code"])]),usage:t(()=>[G]),_:1})]),_:1})]),_:1})],64)}}}),I=h("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Vulk video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),M=m({__name:"VideoBlockBDoc",setup(f){return(u,g)=>{const s=b,i=q,a=x,r=C,l=k,n=y,c=v;return d(),_(B,null,[e(r,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(i,{title:"Our Product",features:o(P),source:"/assets/video/meeting.mp4",poster:"data:image/gif;base64,replace_with_your_image"},null,8,["features"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(i,{title:"Our Product",features:o(P),source:"/assets/video/meeting.mp4",poster:"data:image/gif;base64,replace_with_your_image"},null,8,["features"])]),_:1})]),_:1}),e(r,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block B Props",subtitle:"Available props for block B"}),e(c,null,{code:t(()=>[e(l,{language:"html",code:o(F)},null,8,["code"])]),props:t(()=>[e(n,{props:o(O).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o(j)},null,8,["code"])]),usage:t(()=>[I]),_:1})]),_:1})]),_:1})],64)}}}),R=h("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Vulk video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),Y=m({__name:"VideoBlockCDoc",setup(f){return(u,g)=>{const s=b,i=D,a=x,r=C,l=k,n=y,c=v;return d(),_(B,null,[e(r,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(i,{title:"Our Product",features:o(p),source:"/assets/video/meeting.mp4",poster:"data:image/gif;base64,replace_with_your_image"},null,8,["features"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),e(i,{title:"Our Product",features:o(p),source:"/assets/video/meeting.mp4",poster:"data:image/gif;base64,replace_with_your_image",links:""},null,8,["features"])]),_:1})]),_:1}),e(r,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block C Props",subtitle:"Available props for block C"}),e(c,null,{code:t(()=>[e(l,{language:"html",code:o(N)},null,8,["code"])]),props:t(()=>[e(n,{props:o(E).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o(z)},null,8,["code"])]),usage:t(()=>[R]),_:1})]),_:1})]),_:1})],64)}}}),ne=m({__name:"video",setup(f){const u=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"}];return(g,s)=>{const i=w,a=V;return d(),_("div",null,[e(i,{title:"Video Blocks",subtitle:"Vulk ships with 3 ready to use video section block variations. You can of course easily create your own from the existing ones."}),e(a,{links:u,width:"320px"}),e(H),e(M),e(Y),e(A)])}}});export{ne as default};
