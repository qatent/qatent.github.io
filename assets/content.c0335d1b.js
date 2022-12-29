import{_ as Y}from"./DemoLinks.09b4b6cb.js";import{_ as $,a as ee}from"./DemoTitle.63799a9a.js";import{D as te}from"./DocumentationFooter.3fc21694.js";import{_ as D,a as S}from"./PrismCode.424bb1bc.js";import{_ as I}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as k,o as m,e as p,f as e,w as o,u as t,F as f,j as n,l as b,E as L,G as P,g as h,k as C,n as x,m as j,t as w,h as X,i as W,bF as Z,bZ as K,A as F,q as N,v as oe,bH as ne}from"./index.4498c4e2.js";import{_ as le}from"./ContentBlockA.689afa38.js";import{c as z,a as R,b as E,d as J,e as H,f as M,g as v,h as A,i as V,j as T,k as U,l as y,m as B,n as O,o as ae,p as q}from"./index.9b327d4c.js";import{_ as se}from"./ContentBlockB.c8cb81ec.js";import{_ as ie}from"./AvatarSimple.57c1e629.js";import{_ as re}from"./ContentBlockH.debd2240.js";import{_ as ue}from"./ContentBlockI.80d08aad.js";import{_ as ce}from"./Counter.7503e175.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";import"./popper.esm.e6a251b9.js";const de={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},me=`
<script setup lang="ts">
import { content } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockA
    :title="content.title"
    :text="content.text"
    link="index"
    :images="content.images"
  />
</template>
`,pe=`
export const content = {
  title: 'Supported languages',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  link: 'index',
  linkLabel: 'Learn More',
  images: [
    {
      url: '/assets/stacks/bulma.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/html5.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/js.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/sass.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/photoshop.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/illustrator.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/vuejs.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/reactjs.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/alpinejs.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/nodejs.svg',
      label: 'programming language',
    },
  ],
}
`,_e=n("div",{class:"py-4"},null,-1),ge=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),be=k({__name:"ContentBlockADoc",setup(_){return(l,g)=>{const s=$,r=le,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-a-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(r,{title:t(z).title,text:t(z).text,link:"index",images:t(z).images},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props",inverted:""}),e(r,{title:t(z).title,text:t(z).text,link:"index",images:t(z).images,inverted:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(r,{title:t(R).title,text:t(R).text,link:"index",images:t(R).images,squared:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{id:"block-a-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A Props",subtitle:"Available props for block A"}),_e,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(me)},null,8,["code"])]),props:o(()=>[e(c,{props:t(de).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(pe)},null,8,["code"])]),usage:o(()=>[ge]),_:1})]),_:1})]),_:1})],64)}}}),fe={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ke=`
<script setup lang="ts">
import { content3 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockB
    :title="content3.title"
    :subtitle="content3.subtitle"
    :text="content3.text"
    :images="content3.images"
    link="index"
  />
</template>
`,ve=`
export const content3 = {
  title: 'Our Decision Board',
  subtitle: 'Meet our advisors',
  text: [
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
    },
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
    },
  ],
  images: [
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      name: 'Mila Jensen',
      position: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      name: 'Rob Carlyle',
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      name: 'Danny Spitz',
      position: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      name: 'Melany Cambell',
      position: 'Business Analyst',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      name: 'Navad Prasad',
      position: 'Sales Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
}
`,he=n("div",{class:"py-4"},null,-1),xe=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ye=k({__name:"ContentBlockBDoc",setup(_){return(l,g)=>{const s=$,r=se,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-b-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(r,{title:t(E).title,subtitle:t(E).subtitle,text:t(E).text,images:t(E).images,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props",inverted:""}),e(r,{title:t(E).title,subtitle:t(E).subtitle,text:t(E).text,images:t(E).images,link:"index",inverted:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Block B variation 3",link:"block-b-props"}),e(r,{title:t(J).title,subtitle:t(J).subtitle,text:t(J).text,images:t(J).images,link:"index",squared:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{id:"block-b-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B Props",subtitle:"Available props for block B"}),he,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(ke)},null,8,["code"])]),props:o(()=>[e(c,{props:t(fe).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(ve)},null,8,["code"])]),usage:o(()=>[xe]),_:1})]),_:1})]),_:1})],64)}}}),Be={class:"py-6 mx-auto max-w-6"},qe={class:"has-text-centered pb-6"},we=["src"],Ce={class:"columns b-columns-half-tablet-p py-4"},$e=k({__name:"ContentBlockC",props:{title:null,subtitle:null,text:null,image:null,links:{type:Boolean,default:!1},linksLabel:{default:"Learn More"},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(_){const l=_,g=h(()=>[l.imageSquared&&"image-squared"]),s=h(()=>[l.inverted&&"text-light"]);return(r,a)=>{const i=Z,u=K;return m(),p("div",Be,[C(r.$slots,"title",{},()=>[n("div",qe,[e(i,{title:l.title,subtitle:l.subtitle,inverted:l.inverted},null,8,["title","subtitle","inverted"])])],!0),C(r.$slots,"image",{},()=>[n("div",null,[n("img",{class:x(["inline-block",t(g)]),src:l.image,alt:"featured image"},null,10,we)])],!0),C(r.$slots,"content",{},()=>[n("div",Ce,[(m(!0),p(f,null,j(l.text.slice(0,2),(c,d)=>(m(),p("div",{key:d,class:"column is-6"},[n("p",{class:x(["paragraph rem-95",t(s)])},w(c.paragraph),3),l.links?(m(),X(u,{key:0,label:l.linksLabel,link:c.link,size:"small"},null,8,["label","link"])):W("",!0)]))),128))])],!0)])}}});const De=F($e,[["__scopeId","data-v-0860e327"]]),Se={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linksLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ie=`
<script setup lang="ts">
import { content5 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockC
    :title="content5.title"
    :subtitle="content5.subtitle"
    :text="content5.text"
    :image="content5.image"
  />
</template>
`,Le=`
export const content5 = {
  title: 'The number one solution',
  subtitle: 'Some amazing features',
  image: 'data:image/gif;base64,replace_with_your_image',
  text: [
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
      link: 'index',
    },
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
      link: 'index',
    },
  ],
}
`,Pe=n("div",{class:"py-4"},null,-1),Ee=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),He=k({__name:"ContentBlockCDoc",setup(_){return(l,g)=>{const s=$,r=De,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-c-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(r,{title:t(H).title,subtitle:t(H).subtitle,text:t(H).text,image:t(H).image},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props",inverted:""}),e(r,{title:t(H).title,subtitle:t(H).subtitle,text:t(H).text,image:t(H).image,inverted:""},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C",subtitle:"Block C variation 3",link:"block-c-props"}),e(r,{title:t(M).title,subtitle:t(M).subtitle,text:t(M).text,image:t(M).image,links:"","image-squared":""},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{id:"block-c-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C Props",subtitle:"Available props for block C"}),Pe,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ie)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Se).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Le)},null,8,["code"])]),usage:o(()=>[Ee]),_:1})]),_:1})]),_:1})],64)}}}),Ae={class:"py-12 mx-auto max-w-9"},Te={class:"has-text-centered mb-8"},je={class:"is-flex b-only-mobile-flex-wrap"},ze=["src","alt"],Fe={class:"px-4 py-4"},Ge={class:"columns"},Je={class:"column"},Me=k({__name:"ContentBlockD",props:{title:null,subtitle:null,text:null,images:null,link:{default:void 0},linkLabel:{default:"Learn More"},limit:{default:2},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(_){const l=_,g=h(()=>[l.limit&&`max-w-1/${l.limit}`]),s=h(()=>[l.imageSquared&&"image-squared"]),r=h(()=>[l.inverted&&"text-light"]);return(a,i)=>{const u=Z,c=K;return m(),p("div",Ae,[C(a.$slots,"title",{},()=>[n("div",Te,[e(u,{title:l.title,subtitle:l.subtitle,inverted:l.inverted},null,8,["title","subtitle","inverted"])])],!0),C(a.$slots,"images",{},()=>[n("div",je,[(m(!0),p(f,null,j(l.images.slice(0,l.limit),(d,G)=>(m(),p("div",{key:G,class:x(["max-w-mobile px-2",t(g)])},[n("img",{class:x(["inline-block mx-2",t(s)]),src:d.url,alt:d.label},null,10,ze)],2))),128))])],!0),n("div",Fe,[C(a.$slots,"content",{},()=>[n("div",Ge,[n("div",Je,[n("p",{class:x(["paragraph",t(r)])},w(l.text),3),l.link?(m(),X(c,{key:0,label:l.linkLabel,link:l.link},null,8,["label","link"])):W("",!0)])])],!0)])])}}});const Ve=F(Me,[["__scopeId","data-v-8ad70b5b"]]),Ue={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"2",values:["number"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ne=`
<script setup lang="ts">
import { content7 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockD
    :title="content7.title"
    :subtitle="content7.subtitle"
    :text="content7.text"
    :images="content7.images"
    link="index"
    inverted
  />
</template>     
`,Re=`
export const content7 = {
  title: 'The number one solution',
  subtitle: 'Some amazing features',
  images: [
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam; Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Ita ne hoc quidem modo paria peccata sunt.',
  link: 'index',
}
`,We=n("div",{class:"py-4"},null,-1),Oe=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Xe=k({__name:"ContentBlockDDoc",setup(_){return(l,g)=>{const s=$,r=Ve,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-d-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props",inverted:""}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,link:"index",inverted:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,limit:3,"image-squared":""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"}),e(r,{title:t(v).title,subtitle:t(v).subtitle,text:t(v).text,images:t(v).images,limit:4,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{id:"block-d-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D Props",subtitle:"Available props for block D"}),We,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ne)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Ue).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Re)},null,8,["code"])]),usage:o(()=>[Oe]),_:1})]),_:1})]),_:1})],64)}}}),Ze={class:"py-6 mx-auto max-w-8"},Ke={class:"columns is-vcentered b-only-tablet-p-flex"},Qe={class:"column is-6"},Ye={class:"py-2"},et={class:"is-flex pt-4"},tt={class:"column is-6"},ot=["src"],nt=k({__name:"ContentBlockE",props:{title:null,image:null,text:null,icons:{default:()=>[]},iconSquared:{type:Boolean,default:!1},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(_){const l=_,g=h(()=>[l.imageSquared&&"image-squared"]),s=h(()=>[l.inverted&&"text-light"]);return(r,a)=>{const i=N,u=ie;return m(),p("div",Ze,[n("div",Ke,[n("div",Qe,[C(r.$slots,"content",{},()=>[n("p",{class:x(["paragraph mb-4",t(s)])},w(l.text),3),n("div",Ye,[e(i,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"])]),n("div",et,[(m(!0),p(f,null,j(l.icons.slice(0,5),(c,d)=>(m(),p("div",{key:d,class:"icon-wrapper px-2"},[e(u,{picture:c.url,squared:l.iconSquared},null,8,["picture","squared"])]))),128))])],!0)]),n("div",tt,[C(r.$slots,"image",{},()=>[n("img",{src:l.image,class:x(t(g)),alt:"featured image"},null,10,ot)],!0)])])])}}});const lt=F(nt,[["__scopeId","data-v-1f0cdb09"]]),at={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"icons",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"iconSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},st=`
<script setup lang="ts">
import { content8 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockE
    :title="content8.title"
    :text="content8.text"
    :icons="content8.icons"
    :image="content8.image"
  />
</template> 
`,it=`
export const content8 = {
  title: 'Works with all frameworks',
  image: 'data:image/gif;base64,replace_with_your_image',
  icons: [
    {
      url: '/assets/stacks/js.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/vuejs.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/reactjs.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/angular.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/alpinejs.svg',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
}
`,rt=n("div",{class:"py-4"},null,-1),ut=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ct=k({__name:"ContentBlockEDoc",setup(_){return(l,g)=>{const s=$,r=lt,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-e-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),e(r,{title:t(A).title,text:t(A).text,icons:t(A).icons,image:t(A).image},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props",inverted:""}),e(r,{title:t(A).title,text:t(A).text,icons:t(A).icons,image:t(A).image,inverted:""},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),e(r,{title:t(V).title,text:t(V).text,icons:t(V).icons,image:t(V).image,"icon-squared":"","image-squared":""},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{id:"block-e-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E Props",subtitle:"Available props for block E"}),rt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(st)},null,8,["code"])]),props:o(()=>[e(c,{props:t(at).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(it)},null,8,["code"])]),usage:o(()=>[ut]),_:1})]),_:1})]),_:1})],64)}}}),dt={class:"columns is-vcentered b-only-tablet-p-flex"},mt={class:"column is-6"},pt=["src"],_t={class:"column is-6"},gt={class:"is-flex is-align-items-center pt-4"},bt=["src","alt"],ft=k({__name:"ContentBlockF",props:{title:null,image:null,text:null,logos:{default:()=>[]},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(_){const l=_,g=h(()=>[l.inverted&&"is-inverted"]),s=h(()=>[l.imageSquared&&"image-squared"]),r=h(()=>[l.inverted&&"text-light"]);return(a,i)=>{const u=N;return m(),p("div",{class:x(["py-6 mx-auto max-w-8",t(g)])},[n("div",dt,[n("div",mt,[C(a.$slots,"image",{},()=>[n("img",{src:l.image,class:x(t(s)),alt:"featured image"},null,10,pt)],!0)]),n("div",_t,[C(a.$slots,"content",{},()=>[e(u,{tag:"h3",size:5,weight:"semi",leading:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"]),n("p",{class:x(["paragraph",t(r)])},w(l.text),3),n("div",gt,[(m(!0),p(f,null,j(l.logos.slice(0,5),(c,d)=>(m(),p("img",{key:d,class:"small-logo mx-2 max-w-1/5",src:c.url,alt:c.label},null,8,bt))),128))])],!0)])])],2)}}});const kt=F(ft,[["__scopeId","data-v-eca1ff7c"]]),vt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ht=`
<script setup lang="ts">
import { content10 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockF
    :title="content10.title"
    :text="content10.text"
    :image="content10.image"
    :logos="content10.logos"
  />
</template>
`,xt=`
export const content10 = {
  title: 'They trust our brand',
  image: 'data:image/gif;base64,replace_with_your_image',
  logos: [
    {
      url: '/assets/brands/infinite.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/kromo.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/gutwork.svg',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
}
`,yt=n("div",{class:"py-4"},null,-1),Bt=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),qt=k({__name:"ContentBlockFDoc",setup(_){return(l,g)=>{const s=$,r=kt,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-f-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F",subtitle:"Block F variation 1",link:"block-f-props"}),e(r,{title:t(T).title,text:t(T).text,image:t(T).image,logos:t(T).logos},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F",subtitle:"Block F variation 2",link:"block-f-props",inverted:""}),e(r,{title:t(T).title,text:t(T).text,image:t(T).image,logos:t(T).logos,"image-squared":"",inverted:""},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F",subtitle:"Block F variation 3",link:"block-f-props"}),e(r,{title:t(U).title,text:t(U).text,image:t(U).image,logos:t(U).logos,"image-squared":""},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{id:"block-f-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F Props",subtitle:"Available props for block F"}),yt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(ht)},null,8,["code"])]),props:o(()=>[e(c,{props:t(vt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(xt)},null,8,["code"])]),usage:o(()=>[Bt]),_:1})]),_:1})]),_:1})],64)}}}),wt={class:"columns is-vcentered b-columns-half-tablet-p"},Ct={class:"column is-5"},$t={class:"is-flex is-align-items-center py-4 small:mx-auto small:max-w-4 j-center-tablet-p j-center-mobile"},Dt=["src","alt"],St={class:"column is-7"},It={class:"columns is-multiline image-columns b-columns-half-mobile b-only-tablet-p-flex"},Lt=["src","alt"],Pt=k({__name:"ContentBlockG",props:{title:null,images:null,text:null,logos:{default:()=>[]},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(_){const l=_,g=h(()=>[l.inverted&&"is-inverted"]),s=h(()=>[l.imageSquared&&"image-squared"]),r=h(()=>[l.inverted&&"text-light"]);return(a,i)=>{const u=N;return m(),p("div",{class:x(["py-6 mx-auto max-w-8",t(g)])},[n("div",wt,[n("div",Ct,[C(a.$slots,"content",{},()=>[e(u,{tag:"h3",size:5,weight:"semi",leading:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"]),n("p",{class:x(["paragraph",t(r)])},w(l.text),3),n("div",$t,[(m(!0),p(f,null,j(l.logos.slice(0,4),(c,d)=>(m(),p("img",{key:d,class:"small-logo mx-2 max-w-1/5",src:c.url,alt:c.label},null,8,Dt))),128))])],!0)]),n("div",St,[C(a.$slots,"images",{},()=>[n("div",It,[(m(!0),p(f,null,j(l.images.slice(0,4),(c,d)=>(m(),p("div",{key:d,class:"column is-6 p-2"},[n("img",{class:x(["block",t(s)]),src:c.url,alt:c.label},null,10,Lt)]))),128))])],!0)])])],2)}}});const Et=F(Pt,[["__scopeId","data-v-9ff69ce7"]]),Ht={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},At=`
<script setup lang="ts">
import { content12 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockG
    :title="content12.title"
    :text="content12.text"
    :images="content12.images"
    :logos="content12.logos"
  />
</template>
`,Tt=`
export const content12 = {
  title: 'They trust our brand',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  images: [
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
  ],
  logos: [
    {
      url: '/assets/brands/covenant.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/proactive.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/infinite.svg',
      label: 'featured image',
    },
  ],
}
`,jt=n("div",{class:"py-4"},null,-1),zt=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ft=k({__name:"ContentBlockGDoc",setup(_){return(l,g)=>{const s=$,r=Et,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-g-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G",subtitle:"Block G variation 1",link:"block-g-props"}),e(r,{title:t(y).title,text:t(y).text,images:t(y).images,logos:t(y).logos},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G",subtitle:"Block G variation 1",link:"block-g-props",inverted:""}),e(r,{title:t(y).title,text:t(y).text,images:t(y).images,logos:t(y).logos,inverted:""},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G",subtitle:"Block G variation 2",link:"block-g-props"}),e(r,{title:t(y).title,text:t(y).text,images:t(y).images,logos:t(y).logos,"image-squared":""},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{id:"block-g-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G Props",subtitle:"Available props for block G"}),jt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(At)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Ht).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Tt)},null,8,["code"])]),usage:o(()=>[zt]),_:1})]),_:1})]),_:1})],64)}}}),Gt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["2","3","4"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linksLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Jt=`
<script setup lang="ts">
import { content13 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockH 
    :title="content13.title" 
    :text="content13.text" 
    :images="content13.images" 
  />
</template>  
`,Mt=`
export const content13 = {
  title: 'Ready To Go?',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones.',
  images: [
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
  ],
}
`,Vt=n("div",{class:"py-4"},null,-1),Ut=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Nt=k({__name:"ContentBlockHDoc",setup(_){return(l,g)=>{const s=$,r=re,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-h-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 1",link:"block-h-props"}),e(r,{title:t(B).title,text:t(B).text,images:t(B).images},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 1",link:"block-h-props",inverted:""}),e(r,{title:t(B).title,text:t(B).text,images:t(B).images,inverted:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 2",link:"block-h-props"}),e(r,{title:t(B).title,text:t(B).text,images:t(B).images,limit:2,links:"","image-squared":""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 3",link:"block-h-props"}),e(r,{title:t(B).title,text:t(B).text,images:t(B).images,limit:4,links:"","image-squared":""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{id:"block-h-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H Props",subtitle:"Available props for block H"}),Vt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Jt)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Gt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Mt)},null,8,["code"])]),usage:o(()=>[Ut]),_:1})]),_:1})]),_:1})],64)}}}),Rt={props:[{name:"counters",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"icons",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Wt=`
<script setup lang="ts">
import { content14 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockI :counters="content14" />
</template>  
`,Ot=`
export const content14 = [
  {
    icon: 'ion:card-outline',
    number: 74,
    text: 'Available payment gateways',
  },
  {
    icon: 'ion:diamond-outline',
    number: 9718,
    text: 'Customers across the world',
  },
  {
    icon: 'ion:timer-outline',
    number: 534,
    text: 'Real time balance metrics',
  },
  {
    icon: 'ion:business-outline',
    number: 92,
    text: 'Regional and local offices',
  },
]
`,Xt=n("div",{class:"py-4"},null,-1),Zt=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Kt=k({__name:"ContentBlockIDoc",setup(_){return(l,g)=>{const s=$,r=ue,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-i-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props"}),e(r,{counters:t(O)},null,8,["counters"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props",inverted:""}),e(r,{counters:t(O),inverted:""},null,8,["counters"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props"}),e(r,{counters:t(ae)},null,8,["counters"])]),_:1})]),_:1}),e(i,{id:"block-i-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I Props",subtitle:"Available props for block I"}),Xt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Wt)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Rt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Ot)},null,8,["code"])]),usage:o(()=>[Zt]),_:1})]),_:1})]),_:1})],64)}}}),Qt={class:"py-6 mx-auto max-w-10"},Yt={class:"columns is-vcentered b-only-tablet-p-flex"},eo={class:"column is-6"},to={class:"paragraph"},oo={class:"py-4"},no={class:"columns b-flex-mobile b-columns-third-tablet-p is-multiline m-0 has-text-centered"},lo={class:"counter-icon"},ao=["data-icon"],so={class:"pb-4"},io={key:0},ro={class:"column is-6"},uo=["src"],co=k({__name:"ContentBlockJ",props:{title:null,text:null,image:null,imageSquared:{type:Boolean,default:!1},counters:null,link:{default:void 0},linkLabel:{default:"Learn More"},inverted:{type:Boolean,default:!1}},setup(_){const l=_,g=h(()=>[l.imageSquared&&"image-squared"]),s=h(()=>[l.inverted&&"text-light"]);return(r,a)=>{const i=N,u=ce,c=oe,d=ne;return m(),p("div",Qt,[n("div",Yt,[n("div",eo,[e(i,{tag:"h2",size:4,weight:"semi",leading:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"]),n("p",to,w(l.text),1),n("div",oo,[n("div",no,[(m(!0),p(f,null,j(l.counters,(G,Q)=>(m(),p("div",{key:Q,class:"column is-4"},[n("div",lo,[n("i",{class:"iconify","data-icon":G.icon},null,8,ao)]),n("div",so,[e(i,{tag:"h3",size:4,weight:"bold",narrow:"",inverted:l.inverted},{default:o(()=>[e(u,{number:G.number},null,8,["number"])]),_:2},1032,["inverted"]),n("p",{class:x(["paragraph pt-2 max-w-3 rem-95",t(s)])},w(G.text),3)])]))),128))]),l.link?(m(),p("div",io,[e(d,{alignment:"centered"},{default:o(()=>[e(c,{to:l.link,color:"primary",bold:"",raised:""},{default:o(()=>[b(w(l.linkLabel),1)]),_:1},8,["to"])]),_:1})])):W("",!0)])]),n("div",ro,[n("img",{src:l.image,class:x(t(g)),alt:"featured image"},null,10,uo)])])])}}});const mo=F(co,[["__scopeId","data-v-893d1163"]]),po={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"counters",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},_o=`
<script setup lang="ts">
import { content16 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockJ
    :title="content16.title"
    :text="content16.text"
    :image="content16.image"
    :counters="content16.counters"
  />
</template>
`,go=`
export const content16 = {
  title: 'Great starter kits',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  image: 'data:image/gif;base64,replace_with_your_image',
  link: 'index',
  counters: [
    {
      icon: 'logos:bootstrap',
      number: 250,
      text: 'Bootstrap components',
    },
    {
      icon: 'logos:bulma',
      number: 180,
      text: 'Bulma components',
    },
    {
      icon: 'logos:android-icon',
      number: 94,
      text: 'Android components',
    },
  ],
}
`,bo=n("div",{class:"py-4"},null,-1),fo=n("p",{class:"paragraph rem-95"},[b(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),b(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ko=k({__name:"ContentBlockJDoc",setup(_){return(l,g)=>{const s=$,r=mo,a=L,i=P,u=D,c=I,d=S;return m(),p(f,null,[e(i,{id:"block-j-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J",subtitle:"Block J variation 1",link:"block-j-props"}),e(r,{title:t(q).title,text:t(q).text,image:t(q).image,counters:t(q).counters},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J",subtitle:"Block J variation 1",link:"block-j-props",inverted:""}),e(r,{title:t(q).title,text:t(q).text,image:t(q).image,counters:t(q).counters,inverted:""},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J",subtitle:"Block J variation 2",link:"block-j-props"}),e(r,{title:t(q).title,text:t(q).text,image:t(q).image,counters:t(q).counters,link:"index","image-squared":""},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{id:"block-j-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J Props",subtitle:"Available props for block J"}),bo,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(_o)},null,8,["code"])]),props:o(()=>[e(c,{props:t(po).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(go)},null,8,["code"])]),usage:o(()=>[fo]),_:1})]),_:1})]),_:1})],64)}}}),jo=k({__name:"content",setup(_){const l=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"},{label:"Block I",target:"block-i-demo"},{label:"Block J",target:"block-j-demo"}];return(g,s)=>{const r=ee,a=Y;return m(),p("div",null,[e(r,{title:"Content Blocks",subtitle:"More than 10 customizable content blocks are awaiting for you to build your own layouts, pages, and content."}),e(a,{links:l,width:"940px"}),e(be),e(ye),e(He),e(Xe),e(ct),e(qt),e(Ft),e(Nt),e(Kt),e(ko),e(te)])}}});export{jo as default};
