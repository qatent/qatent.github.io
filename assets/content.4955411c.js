import{_ as Z}from"./DemoLinks.072b5868.js";import{_ as $,a as ee}from"./DemoTitle.9dad457e.js";import{D as te}from"./DocumentationFooter.04bcec7b.js";import{_ as D,a as S}from"./PrismCode.98a08cea.js";import{_ as I}from"./DemoProps.vue_vue_type_script_setup_true_lang.c9237587.js";import{b as v,o as m,e as p,f as e,w as o,u as t,cs as j,ct as N,F as k,j as n,l as _,E as L,G as E,cu as P,cv as J,g as B,k as C,n as q,m as z,t as w,h as X,i as R,bF as Y,bY as K,A as F,cw as H,cx as M,cy as f,q as W,cz as A,cA as V,cB as T,cC as U,cD as oe,cE as h,cF as x,cG as O,cH as ne,v as le,bH as ae,cI as y}from"./index.d17d1dd6.js";import{_ as se}from"./ContentBlockA.4c8a1df8.js";import{_ as ie}from"./ContentBlockB.26fc9001.js";import{_ as re}from"./AvatarSimple.100281ad.js";import{_ as ue}from"./ContentBlockH.365ada34.js";import{_ as ce}from"./ContentBlockI.e0951697.js";import{_ as de}from"./Counter.52c4138a.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";import"./SimpleTableHeader.176728da.js";import"./popper.esm.d22b517c.js";const me={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},pe=`
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
`,_e=`
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
`,ge=n("div",{class:"py-4"},null,-1),be=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),fe=v({__name:"ContentBlockADoc",setup(g){return(l,b)=>{const s=$,r=se,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-a-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(r,{title:t(j).title,text:t(j).text,link:"index",images:t(j).images},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props",inverted:""}),e(r,{title:t(j).title,text:t(j).text,link:"index",images:t(j).images,inverted:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(r,{title:t(N).title,text:t(N).text,link:"index",images:t(N).images,squared:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{id:"block-a-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A Props",subtitle:"Available props for block A"}),ge,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(pe)},null,8,["code"])]),props:o(()=>[e(c,{props:t(me).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(_e)},null,8,["code"])]),usage:o(()=>[be]),_:1})]),_:1})]),_:1})],64)}}}),ke={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"squared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ve=`
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
`,he=`
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
`,xe=n("div",{class:"py-4"},null,-1),ye=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Be=v({__name:"ContentBlockBDoc",setup(g){return(l,b)=>{const s=$,r=ie,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-b-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(r,{title:t(P).title,subtitle:t(P).subtitle,text:t(P).text,images:t(P).images,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props",inverted:""}),e(r,{title:t(P).title,subtitle:t(P).subtitle,text:t(P).text,images:t(P).images,link:"index",inverted:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Block B variation 3",link:"block-b-props"}),e(r,{title:t(J).title,subtitle:t(J).subtitle,text:t(J).text,images:t(J).images,link:"index",squared:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{id:"block-b-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B Props",subtitle:"Available props for block B"}),xe,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(ve)},null,8,["code"])]),props:o(()=>[e(c,{props:t(ke).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(he)},null,8,["code"])]),usage:o(()=>[ye]),_:1})]),_:1})]),_:1})],64)}}}),qe={class:"py-6 mx-auto max-w-6"},we={class:"has-text-centered pb-6"},Ce=["src"],$e={class:"columns b-columns-half-tablet-p py-4"},De=v({__name:"ContentBlockC",props:{title:null,subtitle:null,text:null,image:null,links:{type:Boolean,default:!1},linksLabel:{default:"Learn More"},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const l=g,b=B(()=>[l.imageSquared&&"image-squared"]),s=B(()=>[l.inverted&&"text-light"]);return(r,a)=>{const i=Y,u=K;return m(),p("div",qe,[C(r.$slots,"title",{},()=>[n("div",we,[e(i,{title:l.title,subtitle:l.subtitle,inverted:l.inverted},null,8,["title","subtitle","inverted"])])],!0),C(r.$slots,"image",{},()=>[n("div",null,[n("img",{class:q(["inline-block",t(b)]),src:l.image,alt:"featured image"},null,10,Ce)])],!0),C(r.$slots,"content",{},()=>[n("div",$e,[(m(!0),p(k,null,z(l.text.slice(0,2),(c,d)=>(m(),p("div",{key:d,class:"column is-6"},[n("p",{class:q(["paragraph rem-95",t(s)])},w(c.paragraph),3),l.links?(m(),X(u,{key:0,label:l.linksLabel,link:c.link,size:"small"},null,8,["label","link"])):R("",!0)]))),128))])],!0)])}}});const Se=F(De,[["__scopeId","data-v-0860e327"]]),Ie={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linksLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Le=`
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
`,Ee=`
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
`,Pe=n("div",{class:"py-4"},null,-1),He=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ae=v({__name:"ContentBlockCDoc",setup(g){return(l,b)=>{const s=$,r=Se,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-c-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(r,{title:t(H).title,subtitle:t(H).subtitle,text:t(H).text,image:t(H).image},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props",inverted:""}),e(r,{title:t(H).title,subtitle:t(H).subtitle,text:t(H).text,image:t(H).image,inverted:""},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C",subtitle:"Block C variation 3",link:"block-c-props"}),e(r,{title:t(M).title,subtitle:t(M).subtitle,text:t(M).text,image:t(M).image,links:"","image-squared":""},null,8,["title","subtitle","text","image"])]),_:1})]),_:1}),e(i,{id:"block-c-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block C Props",subtitle:"Available props for block C"}),Pe,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Le)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Ie).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Ee)},null,8,["code"])]),usage:o(()=>[He]),_:1})]),_:1})]),_:1})],64)}}}),Te={class:"py-12 mx-auto max-w-9"},je={class:"has-text-centered mb-8"},ze={class:"is-flex b-only-mobile-flex-wrap"},Ge=["src","alt"],Fe={class:"px-4 py-4"},Je={class:"columns"},Me={class:"column"},Ve=v({__name:"ContentBlockD",props:{title:null,subtitle:null,text:null,images:null,link:{default:void 0},linkLabel:{default:"Learn More"},limit:{default:2},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const l=g,b=B(()=>[l.limit&&`max-w-1/${l.limit}`]),s=B(()=>[l.imageSquared&&"image-squared"]),r=B(()=>[l.inverted&&"text-light"]);return(a,i)=>{const u=Y,c=K;return m(),p("div",Te,[C(a.$slots,"title",{},()=>[n("div",je,[e(u,{title:l.title,subtitle:l.subtitle,inverted:l.inverted},null,8,["title","subtitle","inverted"])])],!0),C(a.$slots,"images",{},()=>[n("div",ze,[(m(!0),p(k,null,z(l.images.slice(0,l.limit),(d,G)=>(m(),p("div",{key:G,class:q(["max-w-mobile px-2",t(b)])},[n("img",{class:q(["inline-block mx-2",t(s)]),src:d.url,alt:d.label},null,10,Ge)],2))),128))])],!0),n("div",Fe,[C(a.$slots,"content",{},()=>[n("div",Je,[n("div",Me,[n("p",{class:q(["paragraph",t(r)])},w(l.text),3),l.link?(m(),X(c,{key:0,label:l.linkLabel,link:l.link},null,8,["label","link"])):R("",!0)])])],!0)])])}}});const Ue=F(Ve,[["__scopeId","data-v-8ad70b5b"]]),Ne={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"subtitle",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"2",values:["number"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Re=`
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
`,We=`
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
`,Oe=n("div",{class:"py-4"},null,-1),Xe=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ye=v({__name:"ContentBlockDDoc",setup(g){return(l,b)=>{const s=$,r=Ue,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-d-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"}),e(r,{title:t(f).title,subtitle:t(f).subtitle,text:t(f).text,images:t(f).images,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props",inverted:""}),e(r,{title:t(f).title,subtitle:t(f).subtitle,text:t(f).text,images:t(f).images,link:"index",inverted:""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"}),e(r,{title:t(f).title,subtitle:t(f).subtitle,text:t(f).text,images:t(f).images,limit:3,"image-squared":""},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"}),e(r,{title:t(f).title,subtitle:t(f).subtitle,text:t(f).text,images:t(f).images,limit:4,link:"index"},null,8,["title","subtitle","text","images"])]),_:1})]),_:1}),e(i,{id:"block-d-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block D Props",subtitle:"Available props for block D"}),Oe,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Re)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Ne).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(We)},null,8,["code"])]),usage:o(()=>[Xe]),_:1})]),_:1})]),_:1})],64)}}}),Ke={class:"py-6 mx-auto max-w-8"},Qe={class:"columns is-vcentered b-only-tablet-p-flex"},Ze={class:"column is-6"},et={class:"py-2"},tt={class:"is-flex pt-4"},ot={class:"column is-6"},nt=["src"],lt=v({__name:"ContentBlockE",props:{title:null,image:null,text:null,icons:{default:()=>[]},iconSquared:{type:Boolean,default:!1},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const l=g,b=B(()=>[l.imageSquared&&"image-squared"]),s=B(()=>[l.inverted&&"text-light"]);return(r,a)=>{const i=W,u=re;return m(),p("div",Ke,[n("div",Qe,[n("div",Ze,[C(r.$slots,"content",{},()=>[n("p",{class:q(["paragraph mb-4",t(s)])},w(l.text),3),n("div",et,[e(i,{tag:"h3",size:6,weight:"semi",narrow:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"])]),n("div",tt,[(m(!0),p(k,null,z(l.icons.slice(0,5),(c,d)=>(m(),p("div",{key:d,class:"icon-wrapper px-2"},[e(u,{picture:c.url,squared:l.iconSquared},null,8,["picture","squared"])]))),128))])],!0)]),n("div",ot,[C(r.$slots,"image",{},()=>[n("img",{src:l.image,class:q(t(b)),alt:"featured image"},null,10,nt)],!0)])])])}}});const at=F(lt,[["__scopeId","data-v-1f0cdb09"]]),st={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"icons",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"iconSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},it=`
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
`,rt=`
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
`,ut=n("div",{class:"py-4"},null,-1),ct=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),dt=v({__name:"ContentBlockEDoc",setup(g){return(l,b)=>{const s=$,r=at,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-e-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E",subtitle:"Block E variation 1",link:"block-e-props"}),e(r,{title:t(A).title,text:t(A).text,icons:t(A).icons,image:t(A).image},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E",subtitle:"Block E variation 2",link:"block-e-props",inverted:""}),e(r,{title:t(A).title,text:t(A).text,icons:t(A).icons,image:t(A).image,inverted:""},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E",subtitle:"Block E variation 3",link:"block-e-props"}),e(r,{title:t(V).title,text:t(V).text,icons:t(V).icons,image:t(V).image,"icon-squared":"","image-squared":""},null,8,["title","text","icons","image"])]),_:1})]),_:1}),e(i,{id:"block-e-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block E Props",subtitle:"Available props for block E"}),ut,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(it)},null,8,["code"])]),props:o(()=>[e(c,{props:t(st).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(rt)},null,8,["code"])]),usage:o(()=>[ct]),_:1})]),_:1})]),_:1})],64)}}}),mt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},pt=`
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
`,_t=`
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
`,gt=n("div",{class:"py-4"},null,-1),bt=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),ft=v({__name:"ContentBlockFDoc",setup(g){return(l,b)=>{const s=$,r=oe,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-f-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F",subtitle:"Block F variation 1",link:"block-f-props"}),e(r,{title:t(T).title,text:t(T).text,image:t(T).image,logos:t(T).logos},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F",subtitle:"Block F variation 2",link:"block-f-props",inverted:""}),e(r,{title:t(T).title,text:t(T).text,image:t(T).image,logos:t(T).logos,"image-squared":"",inverted:""},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F",subtitle:"Block F variation 3",link:"block-f-props"}),e(r,{title:t(U).title,text:t(U).text,image:t(U).image,logos:t(U).logos,"image-squared":""},null,8,["title","text","image","logos"])]),_:1})]),_:1}),e(i,{id:"block-f-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block F Props",subtitle:"Available props for block F"}),gt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(pt)},null,8,["code"])]),props:o(()=>[e(c,{props:t(mt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(_t)},null,8,["code"])]),usage:o(()=>[bt]),_:1})]),_:1})]),_:1})],64)}}}),kt={class:"columns is-vcentered b-columns-half-tablet-p"},vt={class:"column is-5"},ht={class:"is-flex is-align-items-center py-4 small:mx-auto small:max-w-4 j-center-tablet-p j-center-mobile"},xt=["src","alt"],yt={class:"column is-7"},Bt={class:"columns is-multiline image-columns b-columns-half-mobile b-only-tablet-p-flex"},qt=["src","alt"],wt=v({__name:"ContentBlockG",props:{title:null,images:null,text:null,logos:{default:()=>[]},imageSquared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(g){const l=g,b=B(()=>[l.inverted&&"is-inverted"]),s=B(()=>[l.imageSquared&&"image-squared"]),r=B(()=>[l.inverted&&"text-light"]);return(a,i)=>{const u=W;return m(),p("div",{class:q(["py-6 mx-auto max-w-8",t(b)])},[n("div",kt,[n("div",vt,[C(a.$slots,"content",{},()=>[e(u,{tag:"h3",size:5,weight:"semi",leading:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"]),n("p",{class:q(["paragraph",t(r)])},w(l.text),3),n("div",ht,[(m(!0),p(k,null,z(l.logos.slice(0,4),(c,d)=>(m(),p("img",{key:d,class:"small-logo mx-2 max-w-1/5",src:c.url,alt:c.label},null,8,xt))),128))])],!0)]),n("div",yt,[C(a.$slots,"images",{},()=>[n("div",Bt,[(m(!0),p(k,null,z(l.images.slice(0,4),(c,d)=>(m(),p("div",{key:d,class:"column is-6 p-2"},[n("img",{class:q(["block",t(s)]),src:c.url,alt:c.label},null,10,qt)]))),128))])],!0)])])],2)}}});const Ct=F(wt,[["__scopeId","data-v-9ff69ce7"]]),$t={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Dt=`
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
`,St=`
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
`,It=n("div",{class:"py-4"},null,-1),Lt=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Et=v({__name:"ContentBlockGDoc",setup(g){return(l,b)=>{const s=$,r=Ct,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-g-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G",subtitle:"Block G variation 1",link:"block-g-props"}),e(r,{title:t(h).title,text:t(h).text,images:t(h).images,logos:t(h).logos},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G",subtitle:"Block G variation 1",link:"block-g-props",inverted:""}),e(r,{title:t(h).title,text:t(h).text,images:t(h).images,logos:t(h).logos,inverted:""},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G",subtitle:"Block G variation 2",link:"block-g-props"}),e(r,{title:t(h).title,text:t(h).text,images:t(h).images,logos:t(h).logos,"image-squared":""},null,8,["title","text","images","logos"])]),_:1})]),_:1}),e(i,{id:"block-g-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block G Props",subtitle:"Available props for block G"}),It,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Dt)},null,8,["code"])]),props:o(()=>[e(c,{props:t($t).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(St)},null,8,["code"])]),usage:o(()=>[Lt]),_:1})]),_:1})]),_:1})],64)}}}),Pt={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"images",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"3",values:["2","3","4"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"links",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linksLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ht=`
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
`,At=`
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
`,Tt=n("div",{class:"py-4"},null,-1),jt=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),zt=v({__name:"ContentBlockHDoc",setup(g){return(l,b)=>{const s=$,r=ue,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-h-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 1",link:"block-h-props"}),e(r,{title:t(x).title,text:t(x).text,images:t(x).images},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 1",link:"block-h-props",inverted:""}),e(r,{title:t(x).title,text:t(x).text,images:t(x).images,inverted:""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 2",link:"block-h-props"}),e(r,{title:t(x).title,text:t(x).text,images:t(x).images,limit:2,links:"","image-squared":""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H",subtitle:"Block H variation 3",link:"block-h-props"}),e(r,{title:t(x).title,text:t(x).text,images:t(x).images,limit:4,links:"","image-squared":""},null,8,["title","text","images"])]),_:1})]),_:1}),e(i,{id:"block-h-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block H Props",subtitle:"Available props for block H"}),Tt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ht)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Pt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(At)},null,8,["code"])]),usage:o(()=>[jt]),_:1})]),_:1})]),_:1})],64)}}}),Gt={props:[{name:"counters",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"icons",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},Ft=`
<script setup lang="ts">
import { content14 } from '/@src/data/blocks/content'
<\/script>

<template>
  <ContentBlockI :counters="content14" />
</template>  
`,Jt=`
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
`,Mt=n("div",{class:"py-4"},null,-1),Vt=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),Ut=v({__name:"ContentBlockIDoc",setup(g){return(l,b)=>{const s=$,r=ce,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-i-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props"}),e(r,{counters:t(O)},null,8,["counters"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props",inverted:""}),e(r,{counters:t(O),inverted:""},null,8,["counters"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I",subtitle:"Block I variation 1",link:"block-i-props"}),e(r,{counters:t(ne)},null,8,["counters"])]),_:1})]),_:1}),e(i,{id:"block-i-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block I Props",subtitle:"Available props for block I"}),Mt,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(Ft)},null,8,["code"])]),props:o(()=>[e(c,{props:t(Gt).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(Jt)},null,8,["code"])]),usage:o(()=>[Vt]),_:1})]),_:1})]),_:1})],64)}}}),Nt={class:"py-6 mx-auto max-w-10"},Rt={class:"columns is-vcentered b-only-tablet-p-flex"},Wt={class:"column is-6"},Ot={class:"paragraph"},Xt={class:"py-4"},Yt={class:"columns b-flex-mobile b-columns-third-tablet-p is-multiline m-0 has-text-centered"},Kt={class:"counter-icon"},Qt=["data-icon"],Zt={class:"pb-4"},eo={key:0},to={class:"column is-6"},oo=["src"],no=v({__name:"ContentBlockJ",props:{title:null,text:null,image:null,imageSquared:{type:Boolean,default:!1},counters:null,link:{default:void 0},linkLabel:{default:"Learn More"},inverted:{type:Boolean,default:!1}},setup(g){const l=g,b=B(()=>[l.imageSquared&&"image-squared"]),s=B(()=>[l.inverted&&"text-light"]);return(r,a)=>{const i=W,u=de,c=le,d=ae;return m(),p("div",Nt,[n("div",Rt,[n("div",Wt,[e(i,{tag:"h2",size:4,weight:"semi",leading:"",inverted:l.inverted},{default:o(()=>[n("span",null,w(l.title),1)]),_:1},8,["inverted"]),n("p",Ot,w(l.text),1),n("div",Xt,[n("div",Yt,[(m(!0),p(k,null,z(l.counters,(G,Q)=>(m(),p("div",{key:Q,class:"column is-4"},[n("div",Kt,[n("i",{class:"iconify","data-icon":G.icon},null,8,Qt)]),n("div",Zt,[e(i,{tag:"h3",size:4,weight:"bold",narrow:"",inverted:l.inverted},{default:o(()=>[e(u,{number:G.number},null,8,["number"])]),_:2},1032,["inverted"]),n("p",{class:q(["paragraph pt-2 max-w-3 rem-95",t(s)])},w(G.text),3)])]))),128))]),l.link?(m(),p("div",eo,[e(d,{alignment:"centered"},{default:o(()=>[e(c,{to:l.link,color:"primary",bold:"",raised:""},{default:o(()=>[_(w(l.linkLabel),1)]),_:1},8,["to"])]),_:1})])):R("",!0)])]),n("div",to,[n("img",{src:l.image,class:q(t(b)),alt:"featured image"},null,10,oo)])])])}}});const lo=F(no,[["__scopeId","data-v-893d1163"]]),ao={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"text",type:"string",required:"true",default:"undefined",values:["string"]},{name:"image",type:"string",required:"true",default:"undefined",values:["string"]},{name:"counters",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"link",type:"string",required:"false",default:"undefined",values:["string"]},{name:"linkLabel",type:"string",required:"false",default:"Learn More",values:["string"]},{name:"imageSquared",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},so=`
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
`,io=`
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
`,ro=n("div",{class:"py-4"},null,-1),uo=n("p",{class:"paragraph rem-95"},[_(" Vulk ships with highly customizable and versatile Content blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. However, there are some cases when even in light mode, the section background is dark or colored. In that case, you can use the "),n("code",null,"inverted"),_(" prop to invert the component when in light mode. See markup and props tab for more details about usage. ")],-1),co=v({__name:"ContentBlockJDoc",setup(g){return(l,b)=>{const s=$,r=lo,a=L,i=E,u=D,c=I,d=S;return m(),p(k,null,[e(i,{id:"block-j-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J",subtitle:"Block J variation 1",link:"block-j-props"}),e(r,{title:t(y).title,text:t(y).text,image:t(y).image,counters:t(y).counters},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{color:"darker"},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J",subtitle:"Block J variation 1",link:"block-j-props",inverted:""}),e(r,{title:t(y).title,text:t(y).text,image:t(y).image,counters:t(y).counters,inverted:""},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J",subtitle:"Block J variation 2",link:"block-j-props"}),e(r,{title:t(y).title,text:t(y).text,image:t(y).image,counters:t(y).counters,link:"index","image-squared":""},null,8,["title","text","image","counters"])]),_:1})]),_:1}),e(i,{id:"block-j-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block J Props",subtitle:"Available props for block J"}),ro,e(d,null,{code:o(()=>[e(u,{language:"html",code:t(so)},null,8,["code"])]),props:o(()=>[e(c,{props:t(ao).props},null,8,["props"])]),sample:o(()=>[e(u,{language:"javascript",code:t(io)},null,8,["code"])]),usage:o(()=>[uo]),_:1})]),_:1})]),_:1})],64)}}}),So=v({__name:"content",setup(g){const l=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"},{label:"Block I",target:"block-i-demo"},{label:"Block J",target:"block-j-demo"}];return(b,s)=>{const r=ee,a=Z;return m(),p("div",null,[e(r,{title:"Content Blocks",subtitle:"More than 10 customizable content blocks are awaiting for you to build your own layouts, pages, and content."}),e(a,{links:l,width:"940px"}),e(fe),e(Be),e(Ae),e(Ye),e(dt),e(ft),e(Et),e(zt),e(Ut),e(co),e(te)])}}});export{So as default};
