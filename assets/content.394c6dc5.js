import{_ as D}from"./DemoLinks.072b5868.js";import{_ as f,a as x}from"./DemoTitle.9dad457e.js";import{D as S}from"./DocumentationFooter.04bcec7b.js";import{_ as k,a as h}from"./PrismCode.98a08cea.js";import{_ as y}from"./DemoProps.vue_vue_type_script_setup_true_lang.c9237587.js";import{b as d,o as m,e as _,f as e,w as t,u as l,F as v,j as o,bU as q,E as w,G as A,bR as C}from"./index.d17d1dd6.js";import{b as T}from"./index.2857af7a.js";import{_ as I}from"./BoxedSection.21357e39.js";import{_ as P}from"./CaseStudy.3b248243.js";import{_ as $}from"./SideBenefits.bc31b9eb.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";import"./SimpleTableHeader.176728da.js";const E={props:[{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"blob",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},V=`
<script setup lang="ts">
import { baseFeatures } from '/@src/data/blocks/advanced/features'
<\/script>

<template>
  <AppSection
    :features="baseFeatures"
    image="/@src/assets/illustrations/apps/hero-app-screen.png"
    dark-image="/@src/assets/illustrations/apps/hero-app-screen-dark.png"
    blob
  />
</template>
`,F=`
export const baseFeatures: BaseFeature[] = [
  {
    title: 'AI Powered',
    text: 'Our AI handles every complex operation, letting you focus.',
  },
  {
    title: 'Real-Time Data',
    text: 'All your data is processed in real-time, for better performance.',
  },
  {
    title: 'Fast and Secure',
    text: 'Your data is virtually unhackable compared to traditional net.',
  },
]
`,N=o("div",{class:"py-4"},null,-1),R=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),U=d({__name:"AdvancedContentBlockADoc",setup(g){return(p,b)=>{const n=f,r=q,s=w,a=A,i=k,u=y,c=h;return m(),_(v,null,[e(a,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),e(r,{features:l(T),image:"/assets/illustrations/apps/hero-app-screen.png","dark-image":"/assets/illustrations/apps/hero-app-screen-dark.png",blob:""},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block A Props",subtitle:"Available props for block A"}),N,e(c,null,{code:t(()=>[e(i,{language:"html",code:l(V)},null,8,["code"])]),props:t(()=>[e(u,{props:l(E).props},null,8,["props"])]),sample:t(()=>[e(i,{language:"javascript",code:l(F)},null,8,["code"])]),usage:t(()=>[R]),_:1})]),_:1})]),_:1})],64)}}}),L={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"cta",type:"string",required:"true",default:"undefined",values:["string"]},{name:"to",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Y=`
<template>
  <BoxedSection
    minititle="Join Early Access!"
    title="Your entire ecommerce business, connected and powered by AI"
    subtitle="INTRODUCING VULK"
    content="The first-ever Marketplace Optimization Platform, designed to
          optimize your ecommerce business for smart, strategic growth."
    image="/@src/assets/illustrations/chart/circular-people-chart.png"
    dark-image="/@src/assets/illustrations/chart/circular-people-chart-dark.png"
    cta="Learn more about our product"
    to="index"
  />
</template>
`,z=o("div",{class:"py-4"},null,-1),O=o("div",{class:"py-4"},null,-1),j=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),G=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),W=d({__name:"AdvancedContentBlockBDoc",setup(g){return(p,b)=>{const n=f,r=I,s=w,a=A,i=k,u=y,c=h;return m(),_(v,null,[e(a,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),z,e(r,{minititle:"Join Early Access!",title:"Your entire ecommerce business, connected and powered by AI",subtitle:"INTRODUCING VULK",content:`The first-ever Marketplace Optimization Platform, designed to
                optimize your ecommerce business for smart, strategic growth.`,image:"/assets/illustrations/chart/circular-people-chart.png","dark-image":"/assets/illustrations/chart/circular-people-chart-dark.png",cta:"Learn more about our product",to:"index"})]),_:1})]),_:1}),e(a,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block B Props",subtitle:"Available props for block B"}),O,e(c,null,{code:t(()=>[e(i,{language:"html",code:l(Y)},null,8,["code"])]),props:t(()=>[e(u,{props:l(L).props},null,8,["props"])]),sample:t(()=>[j]),usage:t(()=>[G]),_:1})]),_:1})]),_:1})],64)}}}),J={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"background",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"cta",type:"string",required:"true",default:"undefined",values:["string"]},{name:"to",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},K=`
<template>
  <CaseStudy background="https://dummyimage.com/1200x800.jpg">
    <SideSection
      subtitle="Success Stories"
      title="Learn how they built a successful business"
      content="See how some of our customers leverage Vulk technology to increase profits and take back control from resellers"
      image="/@src/assets/illustrations/features/feature-3.png"
      dark-image="/@src/assets/illustrations/features/feature-3-dark.png"
      cta="Read success stories"
      inverted
      to="index"
    />
  </CaseStudy>
</template>
`,M=o("div",{class:"py-4"},null,-1),H=o("div",{class:"py-4"},null,-1),Q=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),X=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Z=d({__name:"AdvancedContentBlockCDoc",setup(g){return(p,b)=>{const n=f,r=C,s=P,a=w,i=A,u=k,c=y,B=h;return m(),_(v,null,[e(i,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-c-props"}),M,e(s,{background:"data:image/gif;base64,replace_with_your_image"},{default:t(()=>[e(r,{subtitle:"Success Stories",title:"Learn how they built a successful business",content:"See how some of our customers leverage Vulk technology to increase profits and take back control from resellers",image:"/assets/illustrations/features/feature-3.png","dark-image":"/assets/illustrations/features/feature-3-dark.png",cta:"Read success stories",inverted:"",to:"index"})]),_:1})]),_:1})]),_:1}),e(i,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(a,null,{default:t(()=>[e(n,{title:"Block C Props",subtitle:"Available props for block C"}),H,e(B,null,{code:t(()=>[e(u,{language:"html",code:l(K)},null,8,["code"])]),props:t(()=>[e(c,{props:l(J).props},null,8,["props"])]),sample:t(()=>[Q]),usage:t(()=>[X]),_:1})]),_:1})]),_:1})],64)}}}),ee={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"content",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"darkImage",type:"string",required:"false",default:"undefined",values:["string"]},{name:"benefits",type:"array",required:"true",default:"( ) => [ ]",values:["array of strings"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},te=`
<template>
  <SideBenefits
    subtitle="DATA DRIVEN"
    title="Your entire business, connected and powered by AI"
    content="To grow your business on today\u2019s dynamic marketplaces, you need
          an advantage.
          With our AI working continually behind the scenes, you can
          unlock growth opportunities and compete at the highest level
          24/7."
    image="/@src/assets/illustrations/features/banking-cards-feature.png"
    dark-image="/@src/assets/illustrations/features/banking-cards-feature-dark.png"
    :benefits="[
      'Upgrade your customer experience instantly',
      'Retain more, happier customers',
      'Start with done-for-you account setup',
      'Track results in real-time',
    ]"
    reverse
  />
</template>
`,oe=o("div",{class:"py-4"},null,-1),ne=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),se=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),ae=d({__name:"AdvancedContentBlockDDoc",setup(g){return(p,b)=>{const n=f,r=$,s=w,a=A,i=k,u=y,c=h;return m(),_(v,null,[e(a,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),e(r,{subtitle:"DATA DRIVEN",title:"Your entire business, connected and powered by AI",content:`To grow your business on today\u2019s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7.`,image:"/assets/illustrations/features/banking-cards-feature.png","dark-image":"/assets/illustrations/features/banking-cards-feature-dark.png",benefits:["Upgrade your customer experience instantly","Retain more, happier customers","Start with done-for-you account setup","Track results in real-time"],reverse:""})]),_:1})]),_:1}),e(a,{color:"darker"},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block D",subtitle:"Advanced block D variation 2",link:"block-d-props",inverted:""}),e(r,{subtitle:"DATA DRIVEN",title:"Your entire business, connected and powered by AI",content:`To grow your business on today\u2019s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7.`,image:"/assets/illustrations/features/banking-cards-feature.png","dark-image":"/assets/illustrations/features/banking-cards-feature-dark.png",benefits:["Upgrade your customer experience instantly","Retain more, happier customers","Start with done-for-you account setup","Track results in real-time"],reverse:"",inverted:""})]),_:1})]),_:1}),e(a,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(n,{title:"Block D Props",subtitle:"Available props for block D"}),oe,e(c,null,{code:t(()=>[e(i,{language:"html",code:l(te)},null,8,["code"])]),props:t(()=>[e(u,{props:l(ee).props},null,8,["props"])]),sample:t(()=>[ne]),usage:t(()=>[se]),_:1})]),_:1})]),_:1})],64)}}}),ye=d({__name:"content",setup(g){const p=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(b,n)=>{const r=x,s=D;return m(),_("div",null,[e(r,{title:"Advanced Content",subtitle:"Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(s,{links:p,width:"400px"}),e(U),e(W),e(Z),e(ae),e(S)])}}});export{ye as default};
