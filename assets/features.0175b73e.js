import{_ as P}from"./DemoLinks.09b4b6cb.js";import{_,a as C}from"./DemoTitle.63799a9a.js";import{D as q}from"./DocumentationFooter.3fc21694.js";import{_ as k,a as v}from"./PrismCode.424bb1bc.js";import{_ as y}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as p,o as m,e as g,f as e,w as t,u as o,bO as x,F as h,j as i,bP as F,E as w,G as B,bQ as E,bR as $,bS as T}from"./index.4498c4e2.js";import{_ as z}from"./ProcessSection.ed91a9c1.js";import{_ as U}from"./IconSection.0170f38b.js";import{i as D,s as S}from"./index.951b3096.js";import{_ as j}from"./QuickFeatures.82dbfd96.js";import{_ as I}from"./StackedSection.43baed5e.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";import"./IconBox.39e8ec7c.js";const O={props:[{name:"steps",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},Q=`
<script setup lang="ts">
import { tabbedProcess } from '/@src/data/pages/marketing'
<\/script>

<template>
  <TabbedSection
    :steps="tabbedProcess.steps"
    :images="tabbedProcess.images"
  />
</template>
`,V=`
export const tabbedProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'Goal-based Campaign Creation',
      content:
        'Build a foundation for long-term success. Our automation utilizes your individual product-level goals to create optimal advertising campaigns in four simple steps.',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'Algorithmic Keyword Bidding',
      content:
        'Never set a keyword bid again. Our AI-powered optimization leverages your goals to find your ideal bid value, so you\u2019re always capturing sales at the price that\u2019s right for you.',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'Automated Keyword Targeting',
      content:
        'Optimize your keywords for sales growth and profitability. Automatically capture new converting keywords while negating ones that are hurting performance.',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'Custom Analytics',
      content:
        'Track progress to your goals. Understand your total business performance with individual and combined product, campaign, and profitability metrics.',
    },
  ],
  images: [
    {
      id: 0,
      url: '/assets/illustrations/placeholder/placeholder-process-1.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-1-dark.png',
    },
    {
      id: 2,
      url: '/assets/illustrations/placeholder/placeholder-process-2.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-2-dark.png',
    },
    {
      id: 3,
      url: '/assets/illustrations/placeholder/placeholder-process-3.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-3-dark.png',
    },
    {
      id: 4,
      url: '/assets/illustrations/placeholder/placeholder-process-4.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-4-dark.png',
    },
  ],
}
`,L=i("div",{class:"py-4"},null,-1),G=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),K=p({__name:"AdvancedFeatureBlockADoc",setup(f){return(d,b)=>{const s=_,l=F,a=w,n=B,r=k,u=y,c=v;return m(),g(h,null,[e(n,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),e(l,{steps:o(x).steps,images:o(x).images},null,8,["steps","images"])]),_:1})]),_:1}),e(n,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block A Props",subtitle:"Available props for block A"}),L,e(c,null,{code:t(()=>[e(r,{language:"html",code:o(Q)},null,8,["code"])]),props:t(()=>[e(u,{props:o(O).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(V)},null,8,["code"])]),usage:t(()=>[G]),_:1})]),_:1})]),_:1})],64)}}}),N={props:[{name:"steps",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},M=`
<script setup lang="ts">
import { process } from '/@src/data/pages/marketing'
<\/script>

<template>
  <ProcessSection :steps="process.steps" />
</template>
`,R=`
export const marketingProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'Goal-based Campaign Creation',
      content:
        'Build a foundation for long-term success. Our automation utilizes your individual product-level goals to create optimal advertising campaigns in four simple steps.',
      image: '/assets/illustrations/workflow/workflow-1.png',
      imageDark: '/assets/illustrations/workflow/workflow-1-dark.png',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'Algorithmic Keyword Bidding',
      content:
        'Never set a keyword bid again. Our AI-powered optimization leverages your goals to find your ideal bid value, so you\u2019re always capturing sales at the price that\u2019s right for you.',
      image: '/assets/illustrations/workflow/workflow-2.png',
      imageDark: '/assets/illustrations/workflow/workflow-2-dark.png',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'Automated Keyword Targeting',
      content:
        'Optimize your keywords for sales growth and profitability. Automatically capture new converting keywords while negating ones that are hurting performance.',
      image: '/assets/illustrations/workflow/workflow-3.png',
      imageDark: '/assets/illustrations/workflow/workflow-3-dark.png',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'Custom Analytics',
      content:
        'Track progress to your goals. Understand your total business performance with individual and combined product, campaign, and profitability metrics.',
      image: '/assets/illustrations/workflow/workflow-4.png',
      imageDark: '/assets/illustrations/workflow/workflow-4-dark.png',
    },
  ],
}
`,W=i("div",{class:"py-4"},null,-1),H=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Y=p({__name:"AdvancedFeatureBlockBDoc",setup(f){return(d,b)=>{const s=_,l=z,a=w,n=B,r=k,u=y,c=v;return m(),g(h,null,[e(n,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),e(l,{steps:o(E).steps},null,8,["steps"])]),_:1})]),_:1}),e(n,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block B Props",subtitle:"Available props for block B"}),W,e(c,null,{code:t(()=>[e(r,{language:"html",code:o(M)},null,8,["code"])]),props:t(()=>[e(u,{props:o(N).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(R)},null,8,["code"])]),usage:t(()=>[H]),_:1})]),_:1})]),_:1})],64)}}}),J={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},X=`
<script setup lang="ts">
import { iconFeatures1 } from '/@src/data/blocks/advanced/features'
<\/script>

<template>
  <IconSection :features="iconFeatures1" />
</template>
`,Z=`
export const iconFeatures1 = [
  {
    id: 0,
    icon: '/assets/icons/colored/chat.svg',
    title: 'Reach more customers',
    content:
      'Be where your customers are. Target buyers by search behavior, discover new converting keywords, and automatically set bids based on your product goals.',
  },
  {
    id: 1,
    icon: '/assets/icons/colored/clock.svg',
    title: 'Save hours of time a week',
    content:
      'Optimize your advertising workflow with automated campaign creation, keyword refinement, and algorithmic bidding. You set the controls, and our AI-technology does the heavy lifting.',
  },
  {
    id: 2,
    icon: '/assets/icons/colored/certificate.svg',
    title: 'Get profitability insights',
    content:
      'Connect your PPC spend to individual product costs and see a granular view of your product-level profitability. Confidently make smart decisions with essential metrics and reporting.',
  },
]
`,ee=i("div",{class:"py-4"},null,-1),te=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),oe=p({__name:"AdvancedFeatureBlockCDoc",setup(f){return(d,b)=>{const s=_,l=U,a=w,n=B,r=k,u=y,c=v;return m(),g(h,null,[e(n,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-c-props"}),e(l,{features:o(D)},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block C",subtitle:"Advanced block C variation 2",link:"block-c-props",inverted:""}),e(l,{features:o(D),inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block C Props",subtitle:"Available props for block C"}),ee,e(c,null,{code:t(()=>[e(r,{language:"html",code:o(X)},null,8,["code"])]),props:t(()=>[e(u,{props:o(J).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(Z)},null,8,["code"])]),usage:t(()=>[te]),_:1})]),_:1})]),_:1})],64)}}}),se={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"legend",type:"string",required:"false",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"cta",type:"string",required:"false",default:"undefined",values:["string"]},{name:"to",type:"string",required:"false",default:"undefined",values:["string"]},{name:"bordered",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"blob",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"reverse",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ae=`
<template>
  <SideSection
    reverse
    subtitle="Goal-based Campaign Creation"
    title="Build campaigns aligned to your goals in minutes"
    content="Start with your business goals at a product level and let us automatically create ad groups and campaigns 
    targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps."
    image="/@src/assets/illustrations/features/feature-2.png"
    dark-image="/@src/assets/illustrations/features/feature-2-dark.png"
    blob
    to="index"
  >
    <template #content>
      <QuickFeatures class="mt-4" :benefits="['By product campaigns', 'Buyer targeting']" />
    </template>
  </SideSection>
</template>
`,ne=i("div",{class:"py-4"},null,-1),re=i("div",{class:"empty-text"},[i("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),le=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ie=p({__name:"AdvancedFeatureBlockDDoc",setup(f){return(d,b)=>{const s=_,l=j,a=$,n=w,r=B,u=k,c=y,A=v;return m(),g(h,null,[e(r,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(s,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),e(a,{subtitle:"Managed Services",title:"Market based DSP managed service",content:"Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs.",image:"/assets/illustrations/features/feature-1.png","dark-image":"/assets/illustrations/features/feature-1-dark.png",blob:"",to:"index"},{content:t(()=>[e(l,{class:"mt-4",features:["Budget efficiency","Focus on your work"]})]),_:1})]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(s,{title:"Block D",subtitle:"Advanced block D variation 2",link:"block-d-props"}),e(a,{reverse:"",subtitle:"Goal-based Campaign Creation",title:"Build campaigns aligned to your goals in minutes",content:"Start with your business goals at a product level and let us automatically create ad groups and campaigns targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps.",image:"/assets/illustrations/features/feature-2.png","dark-image":"/assets/illustrations/features/feature-2-dark.png",blob:"",to:"index"},{content:t(()=>[e(l,{class:"mt-4",benefits:["By product campaigns","Buyer targeting"]})]),_:1})]),_:1})]),_:1}),e(r,{color:"darker","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(s,{title:"Block D",subtitle:"Advanced block D variation 3",link:"block-d-props",inverted:""}),e(a,{subtitle:"Managed Services",title:"Market based DSP managed service",content:"Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs.",image:"/assets/illustrations/features/feature-1.png","dark-image":"/assets/illustrations/features/feature-1-dark.png",blob:"",to:"index",inverted:""},{content:t(()=>[e(l,{class:"mt-4",features:["Budget efficiency","Focus on your work"],inverted:""})]),_:1})]),_:1})]),_:1}),e(r,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(s,{title:"Block D Props",subtitle:"Available props for block D"}),ne,e(A,null,{code:t(()=>[e(u,{language:"html",code:o(ae)},null,8,["code"])]),props:t(()=>[e(c,{props:o(se).props},null,8,["props"])]),sample:t(()=>[re]),usage:t(()=>[le]),_:1})]),_:1})]),_:1})],64)}}}),ue={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"cta",type:"string",required:"false",default:"undefined",values:["string"]},{name:"to",type:"string",required:"false",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"layerBase",type:"string",required:"true",default:"undefined",values:["string"]},{name:"layerExtension",type:"string",required:"true",default:"undefined",values:["string"]},{name:"legend",type:"string",required:"false",default:"undefined",values:["string"]},{name:"bordered",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"blob",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"reverse",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ce=`
<template>
  <SpinnerSection
    inverted
    subtitle="Optional Web Development Services"
    title="Results-driven, affordable ad management"
    content="Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey."
    cta="Learn about our optional services"
    to="index"
    image="/assets/illustrations/chart/tech-chart.png"
    layer-base="/assets/illustrations/chart/tech-chart"
    layer-extension="svg"
  />
</template>
`,de=i("div",{class:"py-4"},null,-1),pe=i("div",{class:"empty-text"},[i("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),me=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ge=p({__name:"AdvancedFeatureBlockEDoc",setup(f){return(d,b)=>{const s=_,l=T,a=w,n=B,r=k,u=y,c=v;return m(),g(h,null,[e(n,{id:"block-e-demo",color:"darker","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block E",subtitle:"Advanced block E variation 1",link:"block-e-props",inverted:""}),e(l,{inverted:"",subtitle:"Web Development Services",title:"Results-driven, affordable ad management",content:"Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey.",cta:"Learn about our optional services",to:"index",image:"/assets/illustrations/chart/tech-chart.png","layer-base":"/assets/illustrations/chart/tech-chart","layer-extension":"svg"})]),_:1})]),_:1}),e(n,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block E Props",subtitle:"Available props for block E"}),de,e(c,null,{code:t(()=>[e(r,{language:"html",code:o(ce)},null,8,["code"])]),props:t(()=>[e(u,{props:o(ue).props},null,8,["props"])]),sample:t(()=>[pe]),usage:t(()=>[me]),_:1})]),_:1})]),_:1})],64)}}}),fe={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"cta",type:"string",required:"false",default:"undefined",values:["string"]},{name:"to",type:"string",required:"false",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"layerBase",type:"string",required:"true",default:"undefined",values:["string"]},{name:"layerExtension",type:"string",required:"true",default:"undefined",values:["string"]},{name:"legend",type:"string",required:"false",default:"undefined",values:["string"]},{name:"bordered",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"blob",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"reverse",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},be=`
<script setup lang="ts">
import { stackedFeatures } from '/@src/data/blocks/advanced/features'
<\/script>

<template>
  <StackedSection
    :features="stackedFeatures"
    image="/@src/assets/illustrations/features/calling.svg"
    dark-image="/@src/assets/illustrations/features/calling.svg"
    rounded
  />
</template>
`,_e=`
export const stackedFeatures: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
]
`,ke=i("div",{class:"py-4"},null,-1),ve=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ye=p({__name:"AdvancedFeatureBlockFDoc",setup(f){return(d,b)=>{const s=_,l=I,a=w,n=B,r=k,u=y,c=v;return m(),g(h,null,[e(n,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block F",subtitle:"Advanced block F variation 1",link:"block-f-props"}),e(l,{features:o(S),image:"/assets/illustrations/features/calling.svg","dark-image":"/assets/illustrations/features/calling.svg",rounded:""},null,8,["features"])]),_:1})]),_:1}),e(n,{color:"darker"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block F",subtitle:"Advanced block F variation 2",link:"block-f-props",inverted:""}),e(l,{features:o(S),image:"/assets/illustrations/features/calling.svg","dark-image":"/assets/illustrations/features/calling.svg",inverted:""},null,8,["features"])]),_:1})]),_:1}),e(n,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{title:"Block F Props",subtitle:"Available props for block F"}),ke,e(c,null,{code:t(()=>[e(r,{language:"html",code:o(be)},null,8,["code"])]),props:t(()=>[e(u,{props:o(fe).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(_e)},null,8,["code"])]),usage:t(()=>[ve]),_:1})]),_:1})]),_:1})],64)}}}),je=p({__name:"features",setup(f){const d=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"}];return(b,s)=>{const l=C,a=P;return m(),g("div",null,[e(l,{title:"Advanced Features",subtitle:"Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(a,{links:d,width:"580px"}),e(K),e(Y),e(oe),e(ie),e(ge),e(ye),e(q)])}}});export{je as default};
