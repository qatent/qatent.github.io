import{_ as q}from"./DemoLinks.09b4b6cb.js";import{_ as h,a as A}from"./DemoTitle.63799a9a.js";import{D}from"./DocumentationFooter.3fc21694.js";import{_ as f,a as y}from"./PrismCode.424bb1bc.js";import{_ as k}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as p,o as d,e as g,f as e,w as t,u as o,F as v,j as s,E as w,G as B}from"./index.4498c4e2.js";import{_ as C}from"./TestimonialsGrid.92c0ee25.js";import{t as E,a as V}from"./index.b8fffa96.js";import{_ as I}from"./TestimonialsMarquee.9b933191.js";import{v as S,_ as F}from"./index.9804a7da.js";import{_ as P}from"./TestimonialBlock.e738e17d.js";import{_ as $}from"./TestimonialsTabbed.1ea4f235.js";import{m as x}from"./index.d590f481.js";import{_ as L}from"./TestimonialsCarousel.2c28d372.js";import{t as T}from"./index.607b0f84.js";import{_ as Q}from"./TestimonialsCarouselColor.63c79eb4.js";import{w as M}from"./index.710eaf51.js";import{_ as O}from"./TestimonialsCarouselSingle.c1535746.js";import{t as H}from"./index.aece666d.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";import"./AvatarSimple.57c1e629.js";import"./MarqueeText.1accbff5.js";import"./Tabs.1448ec8d.js";import"./Tag.75316ce2.js";import"./carousel.es.a2be4639.js";import"./PolkaDots.69f7b841.js";const G={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"blobs",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},N=`
<script setup lang="ts">
import { testimonials2 } from '/@src/data/blocks/advanced/testimonials'
<\/script>

<template>
  <TestimonialsGrid :testimonials="testimonials2" blobs />
</template>
`,W=`
export const testimonials2 = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise\u2019s sales velocity has increased substantially, and we\u2019re excited to.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      "Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales. We're definitely not changing tools as this is the real deal!",
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      "Once you see the algorithm in action, you see how awesome Vulk and their technology really are! I can't wait to get back working on my project!",
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
]
`,j=s("div",{class:"py-4"},null,-1),U=s("div",{class:"py-4"},null,-1),z=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),J=p({__name:"AdvancedTestimonialsBlockADoc",setup(b){return(c,_)=>{const a=h,l=C,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),j,e(l,{testimonials:o(E),blobs:""},null,8,["testimonials"])]),_:1})]),_:1}),e(n,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block A Props",subtitle:"Available props for block A"}),U,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(N)},null,8,["code"])]),props:t(()=>[e(m,{props:o(G).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(W)},null,8,["code"])]),usage:t(()=>[z]),_:1})]),_:1})]),_:1})],64)}}}),R={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"color",type:"string",required:"false",default:"false",values:["string"]},{name:"compact",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},K=`
<script setup lang="ts">
import { testimonials } from '/@src/data/blocks/advanced/testimonials'
<\/script>

<template>
  <TestimonialsMarquee :testimonials="testimonials" color="default" />
</template>
`,Y=`
export const testimonials = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise\u2019s sales velocity has increased substantially, and we\u2019re excited to continue on that path with web DSP.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'Once you see the algorithm in action, you see how awesome Vulk and their technology really are!',
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
  {
    id: 9,
    customer: {
      name: 'John Bigsby',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
]
`,X=s("div",{class:"py-4"},null,-1),Z=s("div",{class:"py-4"},null,-1),ee=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),te=p({__name:"AdvancedTestimonialsBlockBDoc",setup(b){return(c,_)=>{const a=h,l=w,i=I,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(a,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),X]),_:1}),e(i,{testimonials:o(V),color:"default"},null,8,["testimonials"])]),_:1}),e(n,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(a,{title:"Block B Props",subtitle:"Available props for block B"}),Z,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(K)},null,8,["code"])]),props:t(()=>[e(m,{props:o(R).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(Y)},null,8,["code"])]),usage:t(()=>[ee]),_:1})]),_:1})]),_:1})],64)}}}),oe={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"pulled",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},se=`
<script setup lang="ts">
import { vehicleTestimonials } from '/@src/data/pages/vehicle'
<\/script>

<template>
  <TestimonialCards :items="vehicleTestimonials" />
</template>
`,ae=`
export const testimonials = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise\u2019s sales velocity has increased substantially, and we\u2019re excited to continue on that path with web DSP.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'Once you see the algorithm in action, you see how awesome Vulk and their technology really are!',
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
  {
    id: 9,
    customer: {
      name: 'John Bigsby',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
]
`,ie=s("div",{class:"py-4"},null,-1),ne=s("div",{class:"py-4"},null,-1),re=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),le=p({__name:"AdvancedTestimonialsBlockCDoc",setup(b){return(c,_)=>{const a=h,l=F,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-c-props"}),ie,e(l,{items:o(S)},null,8,["items"])]),_:1})]),_:1}),e(n,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block C Props",subtitle:"Available props for block C"}),ne,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(se)},null,8,["code"])]),props:t(()=>[e(m,{props:o(oe).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(ae)},null,8,["code"])]),usage:t(()=>[re]),_:1})]),_:1})]),_:1})],64)}}}),me={props:[{name:"image",type:"string",required:"true",default:"false",values:["string"]},{name:"title",type:"string",required:"true",default:"false",values:["string"]},{name:"content",type:"string",required:"true",default:"false",values:["string"]},{name:"link",type:"string",required:"false",default:"false",values:["string"]},{name:"linkLabel",type:"string",required:"true",default:"false",values:["string"]}],slots:[]},ue=`
<template>
  <TestimonialBlock
    image="data:image/gif;base64,replace_with_your_image"
    title="I had trouble finding a fair deal. Then I simply decided to start
      using Vulk and it actually worked!"
    content="Isabella's insurance policy deals that were found on our platform
      completely changed her life and removed all the hassle."
    link-label="Read Isabella's Story"
    link="/about"
  />
</template>
`,ce=s("div",{class:"py-4"},null,-1),pe=s("div",{class:"py-4"},null,-1),de=s("div",{class:"empty-text"},[s("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ge=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),be=p({__name:"AdvancedTestimonialsBlockDDoc",setup(b){return(c,_)=>{const a=h,l=P,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),ce,e(l,{image:"data:image/gif;base64,replace_with_your_image",title:`I had trouble finding a fair deal. Then I simply decided to start
          using Vulk and it actually worked!`,content:`Isabella's insurance policy deals that were found on our platform
          completely changed her life and removed all the hassle.`,"link-label":"Read Isabella's Story",link:"/about"})]),_:1})]),_:1}),e(n,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block D Props",subtitle:"Available props for block D"}),pe,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(ue)},null,8,["code"])]),props:t(()=>[e(m,{props:o(me).props},null,8,["props"])]),sample:t(()=>[de]),usage:t(()=>[ge]),_:1})]),_:1})]),_:1})],64)}}}),_e={props:[{name:"trainees",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"mentors",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},he=`
<script setup lang="ts">
import { mentorTestimonials } from '/@src/data/pages/mentors'
<\/script>

<template>
  <TestimonialsTabbed
    :trainees="mentorTestimonials.trainees"
    :mentors="mentorTestimonials.mentors"
  />
</template>
`,fe=`
export const mentorTestimonials = {
  trainees: [
    {
      title:
        'Vulk has given me confidence in my plans and also allowed me to explore new opportunities and ways to increase my income',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Ousman Abedi',
        role: 'Store Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/asuna.svg',
      },
    },
    {
      title:
        "Vulk mentors helped me so much strenghtening my company's growth and securing new sources of income ",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Dany Bolzcak',
        role: 'Startup Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/vonmo.svg',
      },
    },
    {
      title:
        'I was so surprised to see all my metrics going up after only a month using Vulk mentors. Astonishing!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Christina Chu',
        role: 'Business Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/bobcot.svg',
      },
    },
    {
      title:
        'My analytics started going nuts after I took four sessions with Henry Miller, a marketing specialist I met here!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Helena Firnalts',
        role: 'Shop Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/tetra.svg',
      },
    },
  ],
  mentors: [
    {
      title:
        'I enjoy my participation to Vulk Mentors every single day. I like to meet new people and to discuss new opportunities ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Daryl Keppler',
        role: 'Marketing Specialist',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/kromo.svg',
      },
    },
    {
      title:
        'As a business owner, I totally understand the struggles one can run into when launching a product or a new service. This is why Ian here',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Armin Azadian',
        role: 'CEO @Livetalk',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/livetalk.svg',
      },
    },
    {
      title:
        "I already try to help people in my everyday work. Let's say Vulk mentors only reinforced that desire of mine",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Jordan Daniels',
        role: 'Business Developer',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/tribe.svg',
      },
    },
    {
      title:
        'Iam always interested in helping other people with their businesses. It has proved to be even useful for my own company',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Bianca Sorelli',
        role: 'Head of Marketing',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/grubspot.svg',
      },
    },
  ],
}
`,ye=s("div",{class:"py-4"},null,-1),ke=s("div",{class:"py-4"},null,-1),ve=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),we=p({__name:"AdvancedTestimonialsBlockEDoc",setup(b){return(c,_)=>{const a=h,l=$,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block E",subtitle:"Advanced block E variation 1",link:"block-c-props"}),ye,e(l,{trainees:o(x).trainees,mentors:o(x).mentors},null,8,["trainees","mentors"])]),_:1})]),_:1}),e(n,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block E Props",subtitle:"Available props for block E"}),ke,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(he)},null,8,["code"])]),props:t(()=>[e(m,{props:o(_e).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(fe)},null,8,["code"])]),usage:t(()=>[ve]),_:1})]),_:1})]),_:1})],64)}}}),Be={props:[{name:"slides",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},xe=`
<script setup lang="ts">
import { testimonials } from '/@src/data/pages/commerce'
<\/script>

<template>
  <TestimonialsCarousel :slides="testimonials" />
</template>
`,Te=`
export const mentorTestimonials = {
  trainees: [
    {
      title:
        'Vulk has given me confidence in my plans and also allowed me to explore new opportunities and ways to increase my income',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Ousman Abedi',
        role: 'Store Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/asuna.svg',
      },
    },
    {
      title:
        "Vulk mentors helped me so much strenghtening my company's growth and securing new sources of income ",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Dany Bolzcak',
        role: 'Startup Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/vonmo.svg',
      },
    },
    {
      title:
        'I was so surprised to see all my metrics going up after only a month using Vulk mentors. Astonishing!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Christina Chu',
        role: 'Business Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/bobcot.svg',
      },
    },
    {
      title:
        'My analytics started going nuts after I took four sessions with Henry Miller, a marketing specialist I met here!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Helena Firnalts',
        role: 'Shop Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/tetra.svg',
      },
    },
  ],
  mentors: [
    {
      title:
        'I enjoy my participation to Vulk Mentors every single day. I like to meet new people and to discuss new opportunities ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Daryl Keppler',
        role: 'Marketing Specialist',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/kromo.svg',
      },
    },
    {
      title:
        'As a business owner, I totally understand the struggles one can run into when launching a product or a new service. This is why Ian here',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Armin Azadian',
        role: 'CEO @Livetalk',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/livetalk.svg',
      },
    },
    {
      title:
        "I already try to help people in my everyday work. Let's say Vulk mentors only reinforced that desire of mine",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Jordan Daniels',
        role: 'Business Developer',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/tribe.svg',
      },
    },
    {
      title:
        'Iam always interested in helping other people with their businesses. It has proved to be even useful for my own company',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Bianca Sorelli',
        role: 'Head of Marketing',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/grubspot.svg',
      },
    },
  ],
}
`,qe=s("div",{class:"py-4"},null,-1),Ae=s("div",{class:"py-4"},null,-1),De=s("div",{class:"py-4"},null,-1),Ce=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Ee=p({__name:"AdvancedTestimonialsBlockFDoc",setup(b){return(c,_)=>{const a=h,l=L,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block F",subtitle:"Advanced block F variation 1",link:"block-f-props"}),qe,e(l,{slides:o(T)},null,8,["slides"])]),_:1})]),_:1}),e(n,{color:"darker","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block F",subtitle:"Advanced block F variation 2",link:"block-f-props",inverted:""}),Ae,e(l,{slides:o(T),inverted:""},null,8,["slides"])]),_:1})]),_:1}),e(n,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block F Props",subtitle:"Available props for block F"}),De,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(xe)},null,8,["code"])]),props:t(()=>[e(m,{props:o(Be).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(Te)},null,8,["code"])]),usage:t(()=>[Ce]),_:1})]),_:1})]),_:1})],64)}}}),Ve={props:[{name:"slides",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},Ie=`
<script setup lang="ts">
import { workoutTestimonials } from '/@src/data/pages/workout'
<\/script>

<template>
  <TestimonialsCarouselColor :slides="workoutTestimonials" />
</template>
`,Se=`
export const workoutTestimonials = [
  {
    id: 0,
    name: 'Greg Norton',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'This app changed my life',
    subquote: 'Greg lost 35lbs using our app daily',
  },
  {
    id: 1,
    name: 'Jane Smith',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'It feel so much better now',
    subquote: 'Jane lost 10lbs using our app daily',
  },
  {
    id: 2,
    name: 'Andres Cabeza',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'I simply love my new lifestyle',
    subquote: 'Jane lost 5lbs using our app daily',
  },
  {
    id: 3,
    name: 'Yuko Maeba',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'It is a pleasure to use this service',
    subquote: 'Jane lost 3lbs using our app daily',
  },
]
`,Fe=s("div",{class:"py-4"},null,-1),Pe=s("div",{class:"py-4"},null,-1),$e=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Le=p({__name:"AdvancedTestimonialsBlockGDoc",setup(b){return(c,_)=>{const a=h,l=Q,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-g-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block G",subtitle:"Advanced block G variation 1",link:"block-g-props"}),Fe,e(l,{slides:o(M)},null,8,["slides"])]),_:1})]),_:1}),e(n,{id:"block-g-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block G Props",subtitle:"Available props for block G"}),Pe,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(Ie)},null,8,["code"])]),props:t(()=>[e(m,{props:o(Ve).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(Se)},null,8,["code"])]),usage:t(()=>[$e]),_:1})]),_:1})]),_:1})],64)}}}),Qe={props:[{name:"slides",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},Me=`
<script setup lang="ts">
import { testimonials } from '/@src/data/pages/jobs'
<\/script>

<template>
  <TestimonialsCarouselSingle :slides="testimonials" />
</template>
`,Oe=`
export const testimonials = [
  {
    logo: '/assets/brands/vonmo.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 90,
    conversions: 45,
    testifier: {
      name: 'Danny Stokes',
      picture: 'data:image/gif;base64,replace_with_your_image',
      role: 'Founder @Vonmo',
    },
  },
  {
    logo: '/assets/brands/infinite.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 75,
    conversions: 52,
    testifier: {
      name: 'Bella Walid',
      picture: 'data:image/gif;base64,replace_with_your_image',
      role: 'Founder @Infinite',
    },
  },
  {
    logo: '/assets/brands/tribe.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 84,
    conversions: 65,
    testifier: {
      name: 'Johanna Miller',
      picture: 'data:image/gif;base64,replace_with_your_image',
      role: 'Founder @Tribe',
    },
  },
]
`,He=s("div",{class:"py-4"},null,-1),Ge=s("div",{class:"py-4"},null,-1),Ne=s("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),We=p({__name:"AdvancedTestimonialsBlockHDoc",setup(b){return(c,_)=>{const a=h,l=O,i=w,n=B,r=f,m=k,u=y;return d(),g(v,null,[e(n,{id:"block-h-demo","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block H",subtitle:"Advanced block H variation 1",link:"block-h-props"}),He,e(l,{slides:o(H)},null,8,["slides"])]),_:1})]),_:1}),e(n,{id:"block-h-props","bordered-bottom":""},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{title:"Block H Props",subtitle:"Available props for block H"}),Ge,e(u,null,{code:t(()=>[e(r,{language:"html",code:o(Me)},null,8,["code"])]),props:t(()=>[e(m,{props:o(Qe).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:o(Oe)},null,8,["code"])]),usage:t(()=>[Ne]),_:1})]),_:1})]),_:1})],64)}}}),kt=p({__name:"testimonials",setup(b){const c=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"}];return(_,a)=>{const l=A,i=q;return d(),g("div",null,[e(l,{title:"Testimonial Blocks",subtitle:"More than 8 customizable navbar blocks are awaiting for you to build your own layouts, pages, and content."}),e(i,{links:c,width:"750px"}),e(J),e(te),e(le),e(be),e(we),e(Ee),e(Le),e(We),e(D)])}}});export{kt as default};
