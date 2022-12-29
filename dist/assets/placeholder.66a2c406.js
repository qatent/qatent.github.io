import{_ as P,a as x}from"./DemoTitle.9dad457e.js";import{b as m,g as B,o as c,e as _,j as o,k as g,f as e,w as t,l as a,t as h,n as w,u as p,i as $,q as C,A as D,h as j,C as T,v as V,bH as N,E as S,G as H}from"./index.d17d1dd6.js";import{_ as I,a as z}from"./PrismCode.98a08cea.js";import{D as E}from"./DocumentationFooter.04bcec7b.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";const G={class:"placeholder"},q={class:"placeholder-content"},A=m({__name:"Placeholder",props:{title:null,subtitle:{default:void 0},larger:{type:Boolean}},setup(r){const n=r,i=B(()=>[n.larger&&"is-larger"]);return(s,u)=>{const l=C;return c(),_("div",G,[o("div",q,[g(s.$slots,"image",{},void 0,!0),e(l,{tag:"h3",size:5,weight:"semi",leading:""},{default:t(()=>[a(h(n.title),1)]),_:1}),n.subtitle?(c(),_("p",{key:0,class:w([p(i),"mb-4"])},h(n.subtitle),3)):$("",!0),g(s.$slots,"action",{},void 0,!0)])])}}});const F=D(A,[["__scopeId","data-v-a1d282f4"]]),M=`
<script setup lang="ts">
export interface PlaceholderProps {
  title: string
  subtitle?: string
  larger?: boolean
}
<\/script>
`,J=`
<template>
  <Placeholder
    title="Project not found"
    subtitle="some nice subtitle text."
  >
    <template #image>
      <DarkImage
        src="https://dummyimage.com/800x600"
        src-dark="https://dummyimage.com/800c600"
        alt="illustration"
      />
    </template>
    <template #action>
      <Buttons alignment="centered">
        <Button color="primary" :long="2" raised>Projects</Button>
        <Button :long="2">Dashboard</Button>
      </Buttons>
    </template>
  </Placeholder>
</template>
`,K={class:"mx-auto max-w-6"},L={class:"pt-4 pb-6"},O={class:"is-flex is-align-items-flex-end pt-4"},Q=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),R=o("p",{class:"paragraph rem-95"},[a(" Vulk's placeholder is a very versatile component that can be used in a wide variety of setups. The core is the placeholder text props. Two additionnal slots ( "),o("code",null,"#image"),a(" and "),o("code",null,"#action"),a(" ) let you insert images and action buttons / links. ")],-1),U=m({__name:"PlaceholderDemo",setup(r){return(n,i)=>{const s=P,u=T,l=V,f=N,b=F,d=I,v=z,k=S,y=H;return c(),j(y,{id:"placeholder-component-demo","bordered-bottom":""},{default:t(()=>[e(k,null,{default:t(()=>[o("div",K,[o("div",L,[e(s,{title:"Placeholder",subtitle:"Content placeholder layout"}),o("div",O,[e(b,{title:"Project not found",subtitle:"Hey there, looks like you've hit an empty state. Make sure to create a project before assigning tasks."},{image:t(()=>[e(u,{src:"/assets/illustrations/hero/working-laptop.svg","src-dark":"/assets/illustrations/hero/working-laptop-dark.svg",alt:"illustration"})]),action:t(()=>[e(f,{alignment:"centered"},{default:t(()=>[e(l,{color:"primary",long:2,raised:""},{default:t(()=>[a("Projects")]),_:1}),e(l,{long:2},{default:t(()=>[a("Dashboard")]),_:1})]),_:1})]),_:1})])]),e(v,null,{code:t(()=>[e(d,{language:"html",code:p(J)},null,8,["code"])]),props:t(()=>[e(d,{language:"javascript",code:p(M)},null,8,["code"])]),sample:t(()=>[Q]),usage:t(()=>[R]),_:1})])]),_:1})]),_:1})}}}),ne=m({__name:"placeholder",setup(r){return(n,i)=>{const s=x;return c(),_("div",null,[e(s,{title:"Placeholder",subtitle:"Content placeholders have been growing as a core component in modern web applications. Get familiar with Vulk's content placeholder."}),e(U),e(E)])}}});export{ne as default};
