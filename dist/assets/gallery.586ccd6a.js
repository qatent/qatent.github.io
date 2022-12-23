import{_ as U}from"./DemoLinks.072b5868.js";import{_ as x,a as J}from"./DemoTitle.9dad457e.js";import{_ as D,a as z}from"./PrismCode.98a08cea.js";import{_ as G}from"./DemoProps.vue_vue_type_script_setup_true_lang.c9237587.js";import{b as f,X as v,g as q,aW as W,o as c,e as u,j as p,F as k,m as E,bh as Y,n as B,bD as P,u as t,h as I,f as e,af as V,A as F,w as a,E as C,G as $,bC as H}from"./index.d17d1dd6.js";import{e as j}from"./lightbox.esm.63e0febe.js";import{m as T,a as L,b as O,s as w}from"./index.a4fd9d75.js";import{_ as X}from"./GalleryBlockB.b0e867fd.js";import{_ as Q}from"./GalleryBlockC.9cbe35bc.js";import{D as Z}from"./DocumentationFooter.04bcec7b.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";import"./SimpleTableHeader.176728da.js";const ee={class:"py-6"},ae=["src","onClick"],te=f({__name:"GalleryBlockA",props:{items:null,squared:{type:Boolean,default:!1},limit:{default:99}},setup(d){var _,m;const s=d,b=v("all"),o=v(""),r=(m=(_=s.items)==null?void 0:_.map(y=>({name:y.image})))!=null?m:[],l=y=>{o.value=y},i=()=>{o.value=""},n=q(()=>[s.squared&&"is-squared"]);return(y,h)=>{const S=W("background");return c(),u("div",ee,[p("div",{class:B(["parent",t(n)])},[(c(!0),u(k,null,E(s.items.slice(0,s.limit),(g,A)=>{var N;return Y((c(),u("div",{key:A,class:B(["block has-background-image",`frame-${(N=g.frame)!=null?N:"1x1"}`])},[p("img",{src:g.image,alt:"shadow image","aria-hidden":"true",onClick:P(ze=>l(g.image),["prevent"])},null,8,ae)],2)),[[S,{src:g.image,placeholder:`https://dummyimage.com/${g.size}/ededed/000000`}]])}),128))],2),(c(),I(V,{to:"body"},[e(t(j),{images:t(r),"current-image-name":o.value,filter:b.value,"timeout-duration":5e3,"close-on-backdrop-click":!0,onOnLightboxClose:i},null,8,["images","current-image-name","filter"])]))])}}});const oe=F(te,[["__scopeId","data-v-1167f7db"]]),le={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ie=`
<script setup lang="ts">
import { masonryGallery } from '/@src/data/blocks/gallery'
<\/script>

<template>
  <GalleryBlockA :items="masonryGallery" squared />
</template>
`,se=`
import type { GalleryBlockAItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockA.vue'

export const masonryGallery: GalleryBlockAItem[] = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x2',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '3x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
]
`,re=p("div",{class:"py-4"},null,-1),ne=p("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),me=f({__name:"GalleryBlockADoc",setup(d){return(s,b)=>{const o=x,r=oe,l=C,i=$,n=D,_=G,m=z;return c(),u(k,null,[e(i,{id:"block-a-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(r,{items:t(T)},null,8,["items"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(r,{items:t(T),squared:""},null,8,["items"])]),_:1})]),_:1}),e(i,{id:"block-a-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block A Props",subtitle:"Available props for block A"}),re,e(m,null,{code:a(()=>[e(n,{language:"html",code:t(ie)},null,8,["code"])]),props:a(()=>[e(_,{props:t(le).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:t(se)},null,8,["code"])]),usage:a(()=>[ne]),_:1})]),_:1})]),_:1})],64)}}}),ce={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},_e=`
<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
<\/script>

<template>
  <GalleryBlockB :items="advancedGallery" squared />
</template>
`,pe=`
import type { GalleryBlockBRow } from '/@src/components/blocks/gallery-blocks/GalleryBlockB.vue'

export const advancedGallery: GalleryBlockBRow[] = [
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 11, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Jane Mitchells',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 11, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Chiara Simoni',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 13, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Ben Wilson',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Terry Spitz',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Anya Sykorsky',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 15, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Yoni Fuller',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 17, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Jaime Escudero',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 3,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Lakisha Jackson',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Vishnu Prasad',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 18, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Erik Smith',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 20, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Daniel Walder',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 21, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Trisha Haze',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 23, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Robert Caradine',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 24, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Malik Shahid',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 26, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Yasmine Gunei',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 3,
        date: 'Nov 30, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Anthony Tether',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Mia Schultz',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Catarina Kolovskaya',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Dec 5, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Robert Plant',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Dec 6, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Christina Yang',
        },
      },
    ],
  },
]
`,ue=p("div",{class:"py-4"},null,-1),ge=p("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),de=f({__name:"GalleryBlockBDoc",setup(d){return(s,b)=>{const o=x,r=X,l=C,i=$,n=D,_=G,m=z;return c(),u(k,null,[e(i,{id:"block-b-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(r,{items:t(L)},null,8,["items"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(r,{items:t(L),squared:""},null,8,["items"])]),_:1})]),_:1}),e(i,{id:"block-b-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block B Props",subtitle:"Available props for block B"}),ue,e(m,null,{code:a(()=>[e(n,{language:"html",code:t(_e)},null,8,["code"])]),props:a(()=>[e(_,{props:t(ce).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:t(pe)},null,8,["code"])]),usage:a(()=>[ge]),_:1})]),_:1})]),_:1})],64)}}}),M={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},K=`
<script setup lang="ts">
import { simpleGallery } from '/@src/data/blocks/gallery'
<\/script>

<template>
  <GalleryBlockD :items="simpleGallery" gap="xs" :columns="4" :limit="6" />
</template>
`,R=`
import type { GalleryBlockDItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockD.vue'

export const simpleGallery: GalleryBlockDItem[] = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
]
`,be=p("div",{class:"py-4"},null,-1),ye=p("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),fe=f({__name:"GalleryBlockCDoc",setup(d){return(s,b)=>{const o=x,r=Q,l=C,i=$,n=D,_=G,m=z;return c(),u(k,null,[e(i,{id:"block-c-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(r,{items:t(O)},null,8,["items"])]),_:1})]),_:1}),e(i,{id:"block-c-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block C Props",subtitle:"Available props for block C"}),be,e(m,null,{code:a(()=>[e(n,{language:"html",code:t(K)},null,8,["code"])]),props:a(()=>[e(_,{props:t(M).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:t(R)},null,8,["code"])]),usage:a(()=>[ye]),_:1})]),_:1})]),_:1})],64)}}}),ke={class:"columns is-multiline b-columns-half-tablet-p"},he=["src","onClick","onKeydown"],we=f({__name:"GalleryBlockD",props:{items:null,columns:{default:3},limit:{default:32},gap:{default:"default"},squared:{type:Boolean,default:!1}},setup(d){var m,y;const s=d,b=v("all"),o=v(""),r=(y=(m=s.items)==null?void 0:m.map(h=>({name:h.image})))!=null?y:[],l=h=>{o.value=h},i=()=>{o.value=""},n=q(()=>[s.gap&&`gap-${s.gap}`,s.squared&&"is-squared"]),_=q(()=>[s.columns&&`is-${s.columns}`]);return(h,S)=>(c(),u("div",{class:B(["gallery py-6",t(n)])},[p("div",ke,[(c(!0),u(k,null,E(s.items.slice(0,s.limit),(g,A)=>(c(),u("div",{key:A,class:B(["column",t(_)])},[p("img",{class:"block",src:g.image,alt:"featured image",onClick:P(N=>l(g.image),["prevent"]),onKeydown:H(P(()=>l(g.image),["prevent"]),["space"])},null,40,he)],2))),128))]),(c(),I(V,{to:"body"},[e(t(j),{images:t(r),"current-image-name":o.value,filter:b.value,"timeout-duration":5e3,"close-on-backdrop-click":!0,onOnLightboxClose:i},null,8,["images","current-image-name","filter"])]))],2))}});const ve=F(we,[["__scopeId","data-v-ec3953c4"]]),Be=p("div",{class:"py-4"},null,-1),xe=p("p",{class:"paragraph rem-95"}," Vulk ships with highly customizable and versatile Gallery blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. ",-1),De=f({__name:"GalleryBlockDDoc",setup(d){return(s,b)=>{const o=x,r=ve,l=C,i=$,n=D,_=G,m=z;return c(),u(k,null,[e(i,{id:"block-d-demo","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(r,{items:t(w)},null,8,["items"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"}),e(r,{items:t(w),gap:"sm"},null,8,["items"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(r,{items:t(w),gap:"xs"},null,8,["items"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"}),e(r,{items:t(w),gap:"sm",squared:""},null,8,["items"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D",subtitle:"Block D variation 5",link:"block-d-props"}),e(r,{items:t(w),gap:"xs",columns:4,limit:6},null,8,["items"])]),_:1})]),_:1}),e(i,{id:"block-d-props","bordered-bottom":""},{default:a(()=>[e(l,null,{default:a(()=>[e(o,{title:"Block D Props",subtitle:"Available props for block D"}),Be,e(m,null,{code:a(()=>[e(n,{language:"html",code:t(K)},null,8,["code"])]),props:a(()=>[e(_,{props:t(M).props},null,8,["props"])]),sample:a(()=>[e(n,{language:"javascript",code:t(R)},null,8,["code"])]),usage:a(()=>[xe]),_:1})]),_:1})]),_:1})],64)}}}),je=f({__name:"gallery",setup(d){const s=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(b,o)=>{const r=J,l=U;return c(),u("div",null,[e(r,{title:"Gallery Blocks",subtitle:"More than 4 customizable gallery blocks are awaiting for you to build your own layouts, pages, and content."}),e(l,{links:s,width:"420px"}),e(me),e(de),e(fe),e(De),e(Z)])}}});export{je as default};
