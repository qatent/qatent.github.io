import{_ as j}from"./DemoLinks.09b4b6cb.js";import{_ as b,a as N}from"./DemoTitle.63799a9a.js";import{D as V}from"./DocumentationFooter.3fc21694.js";import{_ as y,a as f}from"./PrismCode.424bb1bc.js";import{b as g,o as u,h,w as t,f as o,j as e,u as _,q as S,E as w,G as $,x as T,y as k,l as c,A as z,aW as P,bh as E,e as Y}from"./index.4498c4e2.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";const C=`
<script setup lang="ts">
export type SectionSize = 'medium' | 'large'
export type SectionColor = 'grey' | 'darker' | 'primary' | 'gradient'
export type SectionWave = 'wave-1' | 'wave-2'
export type SectionTongue = 'tongue-1' | 'tongue-2'
export type SectionShapeColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface SectionProps {
  size?: SectionSize
  color?: SectionColor
  borderedTop?: boolean
  borderedBottom?: boolean
  bottomSpaced?: boolean
  bottomNarrow?: boolean
  topNarrow?: boolean
  overflown?: boolean
  wave?: SectionWave
  tongue?: SectionTongue
  shapeColor?: SectionShapeColor
  overlay?: boolean
}
<\/script>
`,A=`
<template>
  <Section>
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`,L=`
<template>
  <Section color="grey">
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`,q=`
<template>
  <Section bordered-top bordered-bottom>
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`,F=`
<template>
  <!--Wave 1-->
  <Section wave="wave-1" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
  <Section color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>

  <!--Wave 2-->
  <Section wave="wave-2" shape-color="darker">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
  <Section color="darker">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
</template>
`,G=`
<template>
<!--Tongue 1-->
  <Section tongue="tongue-1" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>

  <!--Tongue 2-->
  <Section tongue="tongue-2" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
</template>
`,H=`
<template>
  <Section
    v-background="{
      src: 'data:image/gif;base64,replace_with_your_image',
      placeholder: 'https://dummyimage.com/1920x1080/',
    }"
    overlay
  >
    <Container>
      <div class="has-text-centered content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph is-inverted-light">
          I can hold any type of content
        </p>
      </div>
    </Container>
  </Section>
</template>
`,B=n=>(T("data-v-70578341"),n=n(),k(),n),J={class:"mx-auto max-w-6"},K={class:"pt-4 pb-6"},M={class:"section-holder mt-4"},O={class:"content py-6"},Q=B(()=>e("span",null,"Iam a Section",-1)),R=B(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),U=B(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),X=B(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Vulk sections sizes can be customized using the "),e("code",null,"size"),c(" prop. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1)),Z=g({__name:"SectionBase",setup(n){return(m,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),h(s,{id:"section-base-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",J,[e("div",K,[o(r,{title:"Section",subtitle:"Section base layout"}),e("div",M,[o(s,null,{default:t(()=>[o(a,null,{default:t(()=>[e("div",O,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[Q]),_:1}),R])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:_(A)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:_(C)},null,8,["code"])]),sample:t(()=>[U]),usage:t(()=>[X]),_:1})])]),_:1})]),_:1})}}});const ee=z(Z,[["__scopeId","data-v-70578341"]]),I=n=>(T("data-v-52522fa5"),n=n(),k(),n),oe={class:"mx-auto max-w-6"},te={class:"pt-4 pb-6"},ne={class:"section-holder mt-4"},ae={class:"content py-6"},se=I(()=>e("span",null,"Iam a Section",-1)),ce=I(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),ie={class:"mt-4"},le={class:"content py-6"},re=I(()=>e("span",null,"Iam a Section",-1)),_e=I(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),de=I(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),pe=I(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Vulk sections colors can be customized using the "),e("code",null,"color"),c(" prop. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1)),ue=g({__name:"SectionColor",setup(n){return(m,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),h(s,{id:"section-color-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",oe,[e("div",te,[o(r,{title:"Section Color",subtitle:"Available section colors"}),e("div",ne,[o(s,{color:"darker"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",ae,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[se]),_:1}),ce])]),_:1})]),_:1})]),e("div",ie,[o(s,{color:"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",le,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[re]),_:1}),_e])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:_(L)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:_(C)},null,8,["code"])]),sample:t(()=>[de]),usage:t(()=>[pe]),_:1})])]),_:1})]),_:1})}}});const me=z(ue,[["__scopeId","data-v-52522fa5"]]),he={class:"mx-auto max-w-6"},ge={class:"pt-4 pb-6"},ve={class:"section-holder mt-4"},be={class:"content py-6"},ye=e("span",null,"Iam a Section",-1),fe=e("p",{class:"paragraph"},"I can hold any type of content",-1),Se=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),we=e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Vulk sections top and bottom borders can be added using the "),e("code",null,"bordered-bottom"),c(" and "),e("code",null,"bordered-top"),c(" props. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1),$e=g({__name:"SectionBorders",setup(n){return(m,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),h(s,{id:"section-borders-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",he,[e("div",ge,[o(r,{title:"Section Borders",subtitle:"Section borders setup"}),e("div",ve,[o(s,{"bordered-top":"","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",be,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[ye]),_:1}),fe])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:_(q)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:_(C)},null,8,["code"])]),sample:t(()=>[Se]),usage:t(()=>[we]),_:1})])]),_:1})]),_:1})}}}),p=n=>(T("data-v-f9b41566"),n=n(),k(),n),Ce={class:"mx-auto max-w-6"},Ie={class:"pt-4 pb-6"},xe={class:"section-holder mt-4"},Te={class:"content py-6"},ke=p(()=>e("span",null,"Iam a Section",-1)),ze=p(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Be={class:"content py-6"},De=p(()=>e("span",null,"Iam a Section",-1)),We=p(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),je={class:"section-holder mt-4"},Ne={class:"content py-6"},Ve=p(()=>e("span",null,"Iam a Section",-1)),Pe=p(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Ee={class:"content py-6"},Ye=p(()=>e("span",null,"Iam a Section",-1)),Ae=p(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Le=p(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),qe=p(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Vulk sections can have svg waves using the "),e("code",null,"wave"),c(" and optional "),e("code",null,"shape-color"),c(" props. The "),e("code",null,"shape-color"),c(" should be set to the color of the following section. ")],-1)),Fe=g({__name:"SectionWave",setup(n){return(m,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),h(s,{id:"section-wave-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ce,[e("div",Ie,[o(r,{title:"Section Wave",subtitle:"Section wave shape"}),e("div",xe,[o(s,{wave:"wave-1","shape-color":"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Te,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[ke]),_:1}),ze])]),_:1})]),_:1}),o(s,{color:"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Be,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[De]),_:1}),We])]),_:1})]),_:1})]),e("div",je,[o(s,{wave:"wave-2","shape-color":"darker"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ne,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[Ve]),_:1}),Pe])]),_:1})]),_:1}),o(s,{color:"darker"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Ee,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[Ye]),_:1}),Ae])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:_(F)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:_(C)},null,8,["code"])]),sample:t(()=>[Le]),usage:t(()=>[qe]),_:1})])]),_:1})]),_:1})}}});const Ge=z(Fe,[["__scopeId","data-v-f9b41566"]]),x=n=>(T("data-v-4e5b76ca"),n=n(),k(),n),He={class:"mx-auto max-w-6"},Je={class:"pt-4 pb-6"},Ke={class:"section-holder mt-4"},Me={class:"content py-6"},Oe=x(()=>e("span",null,"Iam a Section",-1)),Qe=x(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Re={class:"content py-6"},Ue=x(()=>e("span",null,"Iam a Section",-1)),Xe=x(()=>e("p",{class:"paragraph"},"I can hold any type of content",-1)),Ze=x(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),eo=x(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Vulk sections can have svg tongues using the "),e("code",null,"tongue"),c(" and optional "),e("code",null,"shape-color"),c(" props. The "),e("code",null,"shape-color"),c(" should be set to the color of the following section. ")],-1)),oo=g({__name:"SectionTongue",setup(n){return(m,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f;return u(),h(s,{id:"section-tongue-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",He,[e("div",Je,[o(r,{title:"Section Wave",subtitle:"Section wave shape"}),e("div",Ke,[o(s,{tongue:"tongue-1","shape-color":"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Me,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[Oe]),_:1}),Qe])]),_:1})]),_:1}),o(s,{tongue:"tongue-2","shape-color":"grey"},{default:t(()=>[o(a,null,{default:t(()=>[e("div",Re,[o(i,{tag:"h3",size:4,weight:"semi",narrow:""},{default:t(()=>[Ue]),_:1}),Xe])]),_:1})]),_:1})])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:_(G)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:_(C)},null,8,["code"])]),sample:t(()=>[Ze]),usage:t(()=>[eo]),_:1})])]),_:1})]),_:1})}}});const to=z(oo,[["__scopeId","data-v-4e5b76ca"]]),D=n=>(T("data-v-e36d45e6"),n=n(),k(),n),no={class:"mx-auto max-w-6"},ao={class:"pt-4 pb-6"},so={class:"section-holder mt-4"},co={class:"has-text-centered content py-6"},io=D(()=>e("span",null,"Iam a Section",-1)),lo=D(()=>e("p",{class:"paragraph is-inverted-light"}," I can hold any type of content ",-1)),ro=D(()=>e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1)),_o=D(()=>e("p",{class:"paragraph rem-95"},[c(" Sections are the base layout building block for any website. Vulk sections sizes can have a background image using the "),e("code",null,"v-background"),c(" prop. Sections should be used as much as possible in conjunction with the "),e("code",null,"<Container />"),c(" component. ")],-1)),po=g({__name:"SectionBackground",setup(n){return(m,v)=>{const r=b,i=S,a=w,s=$,l=y,d=f,W=P("background");return u(),h(s,{id:"section-background-demo","bordered-bottom":""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",no,[e("div",ao,[o(r,{title:"Background",subtitle:"Section background image"}),e("div",so,[E((u(),h(s,{overlay:""},{default:t(()=>[o(a,null,{default:t(()=>[e("div",co,[o(i,{tag:"h3",size:4,weight:"semi",narrow:"",inverted:""},{default:t(()=>[io]),_:1}),lo])]),_:1})]),_:1})),[[W,{src:"data:image/gif;base64,replace_with_your_image",placeholder:"https://dummyimage.com/1920x1080/"}]])])]),o(d,null,{code:t(()=>[o(l,{language:"html",code:_(H)},null,8,["code"])]),props:t(()=>[o(l,{language:"javascript",code:_(C)},null,8,["code"])]),sample:t(()=>[ro]),usage:t(()=>[_o]),_:1})])]),_:1})]),_:1})}}});const uo=z(po,[["__scopeId","data-v-e36d45e6"]]),wo=g({__name:"sections",setup(n){const m=[{label:"Section",target:"section-base-demo"},{label:"Color",target:"section-color-demo"},{label:"Borders",target:"section-borders-demo"},{label:"Waves",target:"section-wave-demo"},{label:"Tongues",target:"section-tongue-demo"},{label:"Background",target:"section-background-demo"}];return(v,r)=>{const i=N,a=j;return u(),Y("div",null,[o(i,{title:"Section Blocks",subtitle:"Sections are the base layout building block for any website. Vulk sections are very versatile and easily customizable. Explore Vulk sections."}),o(a,{links:m,width:"580px"}),o(ee),o(me),o($e),o(Ge),o(to),o(uo),o(V)])}}});export{wo as default};
