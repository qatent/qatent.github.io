import{_ as D}from"./DemoLinks.072b5868.js";import{_ as v,a as L}from"./DemoTitle.9dad457e.js";import{D as C}from"./DocumentationFooter.04bcec7b.js";import{_ as k,a as f}from"./PrismCode.98a08cea.js";import{_ as h}from"./DemoProps.vue_vue_type_script_setup_true_lang.c9237587.js";import{b as d,o as m,e as g,f as e,w as s,u as t,F as y,j as l,E as x,G as B}from"./index.d17d1dd6.js";import{_ as S}from"./NumbersSection.74ba0cc0.js";import{s as q}from"./index.91126ad2.js";import{_ as $}from"./LogoStats.32ed3345.js";import{c as A}from"./index.046fb491.js";import{_ as P}from"./ValuesSection.846286c4.js";import{v as w}from"./index.907204bd.js";import{p as Q,_ as T}from"./index.7d1f3f18.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";import"./SimpleTableHeader.176728da.js";import"./Counter.52c4138a.js";const I={props:[{name:"numbers",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},O=`
<script setup lang="ts">
import { stats } from '/@src/data/pages/stats'
<\/script>

<template>
  <NumbersSection
    inverted
    subtitle="AI Technology"
    title="Our data scale powers your success"
    content="Our immense data scale feeds our machine learning and
            algorithms, so you can rest assured that every decision our AI
            makes is a smart one."
    :numbers="stats"
    animated
  />
</template>
`,V=`
export const stats = [
  {
    id: 0,
    prefix: '',
    suffix: 'TB',
    value: 40,
    text: 'Of annual data processed',
  },
  {
    id: 1,
    prefix: '$',
    suffix: 'B',
    value: 7,
    text: 'Amazon & Walmart.com sales optimized annually',
  },
  {
    id: 2,
    prefix: '',
    suffix: 'M',
    value: 750,
    text: 'Monthly bid changes executed',
  },
  {
    id: 3,
    prefix: '$',
    suffix: 'M',
    value: 450,
    text: 'Managed ad spend annually on automated campaigns',
  },
]
`,E=l("div",{class:"py-4"},null,-1),F=l("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=d({__name:"AdvancedCompanyBlockADoc",setup(_){return(p,b)=>{const a=v,r=S,o=x,n=B,i=k,u=h,c=f;return m(),g(y,null,[e(n,{id:"block-a-demo","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),e(r,{subtitle:"AI Technology",title:"Our data scale powers your success",content:`Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one.`,numbers:t(q)},null,8,["numbers"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 2",link:"block-a-props",inverted:""}),e(r,{inverted:"",subtitle:"AI Technology",title:"Our data scale powers your success",content:`Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one.`,numbers:t(q),animated:""},null,8,["numbers"])]),_:1})]),_:1}),e(n,{id:"block-a-props","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block A Props",subtitle:"Available props for block A"}),E,e(c,null,{code:s(()=>[e(i,{language:"html",code:t(O)},null,8,["code"])]),props:s(()=>[e(u,{props:t(I).props},null,8,["props"])]),sample:s(()=>[e(i,{language:"javascript",code:t(V)},null,8,["code"])]),usage:s(()=>[F]),_:1})]),_:1})]),_:1})],64)}}}),j={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"heading",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},M=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <LogoStats
    title="Over $1 billion"
    subtitle="Transactions from our clients in 2021"
    heading="Join us and grow"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus."
    :logos="customerLogos"
  />
</template>
`,U=`
export const customerLogos = [
  {
    id: 0,
    logo: '/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/assets/brands/tetra.svg',
  },
]
`,z=l("div",{class:"py-4"},null,-1),J=l("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),G=d({__name:"AdvancedCompanyBlockBDoc",setup(_){return(p,b)=>{const a=v,r=$,o=x,n=B,i=k,u=h,c=f;return m(),g(y,null,[e(n,{id:"block-b-demo","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),e(r,{title:"Over $1 billion",subtitle:"Transactions from our clients in 2021",heading:"Join us and grow",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus.",logos:t(A)},null,8,["logos"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block B",subtitle:"Advanced block B variation 2",link:"block-b-props",inverted:""}),e(r,{title:"Over $1 billion",subtitle:"Transactions from our clients in 2021",heading:"Join us and grow",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus.",logos:t(A),inverted:""},null,8,["logos"])]),_:1})]),_:1}),e(n,{id:"block-b-props","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block B Props",subtitle:"Available props for block B"}),z,e(c,null,{code:s(()=>[e(i,{language:"html",code:t(M)},null,8,["code"])]),props:s(()=>[e(u,{props:t(j).props},null,8,["props"])]),sample:s(()=>[e(i,{language:"javascript",code:t(U)},null,8,["code"])]),usage:s(()=>[J]),_:1})]),_:1})]),_:1})],64)}}}),H={props:[{name:"values",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},W=`
<script setup lang="ts">
import { values } from '/@src/data/blocks/advanced/values'
<\/script>

<template>
  <ValuesSection :values="values" />
</template>
`,K=`
export const values = [
  {
    id: 0,
    image: '/assets/illustrations/about/mission.svg',
    darkImage: '/assets/illustrations/about/mission-dark.svg',
    title: 'Our Mission',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere',
  },
  {
    id: 1,
    image: '/assets/illustrations/about/world.svg',
    darkImage: '/assets/illustrations/about/world.svg',
    title: 'Our Vision',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere',
  },
  {
    id: 3,
    image: '/assets/illustrations/about/values.svg',
    darkImage: '/assets/illustrations/about/values.svg',
    title: 'Our Values',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere',
  },
]
`,R=l("div",{class:"py-4"},null,-1),X=l("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Y=d({__name:"AdvancedCompanyBlockDDoc",setup(_){return(p,b)=>{const a=v,r=P,o=x,n=B,i=k,u=h,c=f;return m(),g(y,null,[e(n,{id:"block-d-demo","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),e(r,{values:t(w),"image-height":"120px"},null,8,["values"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block D",subtitle:"Advanced block D variation 2",link:"block-d-props",inverted:""}),e(r,{values:t(w),"image-height":"120px",inverted:""},null,8,["values"])]),_:1})]),_:1}),e(n,{id:"block-d-props","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block D Props",subtitle:"Available props for block D"}),R,e(c,null,{code:s(()=>[e(i,{language:"html",code:t(W)},null,8,["code"])]),props:s(()=>[e(u,{props:t(H).props},null,8,["props"])]),sample:s(()=>[e(i,{language:"javascript",code:t(K)},null,8,["code"])]),usage:s(()=>[X]),_:1})]),_:1})]),_:1})],64)}}}),Z={props:[{name:"releases",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},ee=`
<script setup lang="ts">
import { press } from '/@src/data/blocks/advanced/press'
<\/script>

<template>
  <PressSection :releases="press" />
</template>
`,se=`
export const press = [
  {
    id: 0,
    logo: '/assets/press/techcrunch.svg',
    darkLogo: '/assets/press/techcrunch-dark.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa tamen simplicia, vestra versuta. Negat esse eam, inquit, propter se expetendam. Quid sequatur, quid repugnet, vident. Quod quidem iam fit etiam in Academia. ',
  },
  {
    id: 1,
    logo: '/assets/press/guardian.svg',
    darkLogo: '/assets/press/guardian-dark.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa tamen simplicia, vestra versuta. Negat esse eam, inquit, propter se expetendam. Quid sequatur, quid repugnet, vident. Quod quidem iam fit etiam in Academia. ',
  },
  {
    id: 2,
    logo: '/assets/press/tnw.svg',
    darkLogo: '/assets/press/tnw.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa tamen simplicia, vestra versuta. Negat esse eam, inquit, propter se expetendam. Quid sequatur, quid repugnet, vident. Quod quidem iam fit etiam in Academia. ',
  },
  {
    id: 3,
    logo: '/assets/press/newguardian.svg',
    darkLogo: '/assets/press/newguardian-dark.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa tamen simplicia, vestra versuta. Negat esse eam, inquit, propter se expetendam. Quid sequatur, quid repugnet, vident. Quod quidem iam fit etiam in Academia. ',
  },
  {
    id: 4,
    logo: '/assets/press/theverge.svg',
    darkLogo: '/assets/press/theverge.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa tamen simplicia, vestra versuta. Negat esse eam, inquit, propter se expetendam. Quid sequatur, quid repugnet, vident. Quod quidem iam fit etiam in Academia. ',
  },
  {
    id: 5,
    logo: '/assets/press/theonion.svg',
    darkLogo: '/assets/press/theonion-dark.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa tamen simplicia, vestra versuta. Negat esse eam, inquit, propter se expetendam. Quid sequatur, quid repugnet, vident. Quod quidem iam fit etiam in Academia. ',
  },
]
`,te=l("div",{class:"py-4"},null,-1),oe=l("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ae=d({__name:"AdvancedCompanyBlockCDoc",setup(_){return(p,b)=>{const a=v,r=T,o=x,n=B,i=k,u=h,c=f;return m(),g(y,null,[e(n,{id:"block-c-demo","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-c-props"}),e(r,{releases:t(Q)},null,8,["releases"])]),_:1})]),_:1}),e(n,{id:"block-c-props","bordered-bottom":""},{default:s(()=>[e(o,null,{default:s(()=>[e(a,{title:"Block C Props",subtitle:"Available props for block C"}),te,e(c,null,{code:s(()=>[e(i,{language:"html",code:t(ee)},null,8,["code"])]),props:s(()=>[e(u,{props:t(Z).props},null,8,["props"])]),sample:s(()=>[e(i,{language:"javascript",code:t(se)},null,8,["code"])]),usage:s(()=>[oe]),_:1})]),_:1})]),_:1})],64)}}}),Be=d({__name:"company",setup(_){const p=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(b,a)=>{const r=L,o=D;return m(),g("div",null,[e(r,{title:"Advanced Company",subtitle:"Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(o,{links:p,width:"400px"}),e(N),e(G),e(ae),e(Y),e(C)])}}});export{Be as default};
