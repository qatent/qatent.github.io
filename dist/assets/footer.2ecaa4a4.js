import{_ as T}from"./DemoLinks.072b5868.js";import{_ as g,a as $}from"./DemoTitle.9dad457e.js";import{_ as b,a as L}from"./PrismCode.98a08cea.js";import{b as k,r as F,aW as y,o as p,e as v,f as e,w as l,j as t,l as o,u as c,s as d,bh as C,h as R,F as D,E as A,G as S,ck as B,q as P}from"./index.d17d1dd6.js";import{_ as z,D as G}from"./DocumentationFooter.04bcec7b.js";import{_ as q}from"./FooterC.7c3eeb5d.js";import{_ as I}from"./FooterD.f746d5f2.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.d1808188.js";import"./Field.c654973d.js";import"./VInput.05d9ddc1.js";const N=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterASocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterAProps {
  color?: FooterColors
  socialLinks?: FooterASocialLink[]
  bubbles?: boolean
  curved?: boolean
}
<\/script>
`,H=`
<template>
  <FooterA color="dark" :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Home</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Pricing</RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Team</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">T.O.S</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Privacy</RouterLink>
    </template>
  </FooterA>
</template>
`,Y=`
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`,Q={class:"py-12"},U={class:"py-12"},j={class:"py-12"},V={class:"py-12"},E={class:"py-4"},M=t("p",{class:"paragraph rem-95"},[o(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),t("code",null,"color"),o(" prop. You can choose to display some animated bubbles by activating the "),t("code",null,"bubbles"),o(" prop. You can also give a curved shape to your footer using the "),t("code",null,"curved"),o(" prop. ")],-1),O=k({__name:"FooterBlockADoc",setup(x){return(f,h)=>{const r=g,a=A,s=S,i=F("RouterLink"),n=B,u=b,m=L,_=y("background");return p(),v(D,null,[e(s,{id:"block-a-demo"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",Q,[e(r,{title:"Footer A",subtitle:"Footer A variation 1",link:"block-a-props"})])]),_:1})]),_:1}),e(n,{color:"dark","social-links":c(d)},{"left-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Docs ")]),_:1})]),"right-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Support ")]),_:1})]),_:1},8,["social-links"]),e(s,{color:"grey"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",U,[e(r,{title:"Footer A",subtitle:"Footer A variation 2",link:"block-a-props"})])]),_:1})]),_:1}),e(n,{color:"light",bubbles:"","social-links":c(d)},{"left-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Docs ")]),_:1})]),"right-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Support ")]),_:1})]),_:1},8,["social-links"]),e(s,{"bordered-top":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",j,[e(r,{title:"Footer A",subtitle:"Footer A variation 3",link:"block-a-props"})])]),_:1})]),_:1}),e(n,{curved:"","social-links":c(d)},{"left-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Docs ")]),_:1})]),"right-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Support ")]),_:1})]),_:1},8,["social-links"]),e(s,null,{default:l(()=>[e(a,null,{default:l(()=>[t("div",V,[e(r,{title:"Footer A",subtitle:"Footer A variation 4",link:"block-a-props"})])]),_:1})]),_:1}),C((p(),R(n,{color:"dark",curved:"","social-links":c(d)},{"left-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Docs ")]),_:1})]),"right-links":l(()=>[e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1}),e(i,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Support ")]),_:1})]),_:1},8,["social-links"])),[[_,{src:"/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(s,{id:"block-a-props","bordered-bottom":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",E,[e(r,{title:"Props",subtitle:"Footer A available props"})]),e(m,null,{code:l(()=>[e(u,{language:"html",code:c(H)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:c(N)},null,8,["code"])]),sample:l(()=>[e(u,{language:"javascript",code:c(Y)},null,8,["code"])]),usage:l(()=>[M]),_:1})]),_:1})]),_:1})],64)}}}),W=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterBProps {
  color?: FooterColors
  bubbles?: boolean
}
<\/script>
`,J=`
<template>
  <FooterB color="dark">
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Demos</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Components</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Documentation</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Support</RouterLink>
      </li>
    </template>
  </FooterB>
</template>
`,K={class:"py-12"},X={class:"inline-block px-2"},Z={class:"inline-block px-2"},ee={class:"inline-block px-2"},le={class:"inline-block px-2"},te={class:"py-12"},oe={class:"inline-block px-2"},ne={class:"inline-block px-2"},ie={class:"inline-block px-2"},ae={class:"inline-block px-2"},se={class:"py-12"},re={class:"inline-block px-2"},ce={class:"inline-block px-2"},ue={class:"inline-block px-2"},de={class:"inline-block px-2"},me={class:"py-12"},pe={class:"inline-block px-2"},_e={class:"inline-block px-2"},fe={class:"inline-block px-2"},ke={class:"inline-block px-2"},ve={class:"py-4"},xe=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),he=t("p",{class:"paragraph rem-95"},[o(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),t("code",null,"color"),o(" prop. You can choose to display some animated bubbles by activating the "),t("code",null,"bubbles"),o(" prop. ")],-1),ge=k({__name:"FooterBlockBDoc",setup(x){return(f,h)=>{const r=g,a=A,s=S,i=F("RouterLink"),n=z,u=b,m=L,_=y("background");return p(),v(D,null,[e(s,{id:"block-b-demo"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",K,[e(r,{title:"Footer B",subtitle:"Footer B variation 1",link:"block-b-props"})])]),_:1})]),_:1}),e(n,{color:"dark"},{links:l(()=>[t("li",X,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Demos ")]),_:1})]),t("li",Z,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Components ")]),_:1})]),t("li",ee,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Documentation ")]),_:1})]),t("li",le,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Support ")]),_:1})])]),_:1}),e(s,{color:"grey"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",te,[e(r,{title:"Footer B",subtitle:"Footer B variation 2",link:"block-b-props"})])]),_:1})]),_:1}),e(n,{color:"light",bubbles:""},{links:l(()=>[t("li",oe,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Demos ")]),_:1})]),t("li",ne,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Components ")]),_:1})]),t("li",ie,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Documentation ")]),_:1})]),t("li",ae,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Support ")]),_:1})])]),_:1}),e(s,{"bordered-top":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",se,[e(r,{title:"Footer B",subtitle:"Footer B variation 3",link:"block-b-props"})])]),_:1})]),_:1}),e(n,null,{links:l(()=>[t("li",re,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Demos ")]),_:1})]),t("li",ce,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Components ")]),_:1})]),t("li",ue,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Documentation ")]),_:1})]),t("li",de,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Support ")]),_:1})])]),_:1}),e(s,{id:"block-b-demo"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",me,[e(r,{title:"Footer B",subtitle:"Footer B variation 4",link:"block-b-props"})])]),_:1})]),_:1}),C((p(),R(n,{color:"dark"},{links:l(()=>[t("li",pe,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Demos ")]),_:1})]),t("li",_e,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Components ")]),_:1})]),t("li",fe,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Documentation ")]),_:1})]),t("li",ke,[e(i,{to:{name:"index"},class:"footer-link"},{default:l(()=>[o(" Support ")]),_:1})])]),_:1})),[[_,{src:"/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(s,{id:"block-b-props","bordered-bottom":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",ve,[e(r,{title:"Props",subtitle:"Footer B available props"})]),e(m,null,{code:l(()=>[e(u,{language:"html",code:c(J)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:c(W)},null,8,["code"])]),sample:l(()=>[xe]),usage:l(()=>[he]),_:1})]),_:1})]),_:1})],64)}}}),be=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterCSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterCProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterCSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}
<\/script>
`,Le=`
<template>
  <FooterC text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones."
    color="dark"
    :social-links="socialLinks"
    image="/@src/assets/illustrations/footer/footer-cityscape.png"
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Get Started</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign In</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Training</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Contact</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Help Center</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Guides</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">API Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Terms</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Privacy</RouterLink>
        </li>
      </ul>
    </template>
  </FooterC>
</template>
`,Fe=`
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`,ye={class:"py-12"},Ce=t("span",null,"Discover",-1),Re=t("span",null,"Company",-1),De=t("span",null,"Support",-1),Ae={class:"py-12"},Se=t("span",null,"Discover",-1),we=t("span",null,"Company",-1),Pe=t("span",null,"Support",-1),Te={class:"py-12"},$e=t("span",null,"Discover",-1),Be=t("span",null,"Company",-1),ze=t("span",null,"Support",-1),Ge={class:"py-12"},qe=t("span",null,"Discover",-1),Ie=t("span",null,"Company",-1),Ne=t("span",null,"Support",-1),He={class:"py-4"},Ye=t("p",{class:"paragraph rem-95"},[o(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),t("code",null,"color"),o(" prop. You can choose to display some animated bubbles by activating the "),t("code",null,"bubbles"),o(" prop. You can also give a curved shape to your footer using the "),t("code",null,"curved"),o(" prop. ")],-1),Qe=k({__name:"FooterBlockCDoc",setup(x){return(f,h)=>{const r=g,a=A,s=S,i=P,n=F("RouterLink"),u=q,m=b,_=L,w=y("background");return p(),v(D,null,[e(s,{id:"block-c-demo"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",ye,[e(r,{title:"Footer C",subtitle:"Footer C variation 1",link:"block-c-props"})])]),_:1})]),_:1}),e(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":c(d),image:"/assets/illustrations/footer/footer-cityscape.png"},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[Ce]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[Re]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[De]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"]),e(s,{color:"grey"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",Ae,[e(r,{title:"Footer C",subtitle:"Footer C variation 2",link:"block-c-props"})])]),_:1})]),_:1}),e(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light",bubbles:"","social-links":c(d),image:"/assets/illustrations/footer/footer-cityscape.png"},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[Se]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[we]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[Pe]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"]),e(s,{"bordered-top":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",Te,[e(r,{title:"Footer C",subtitle:"Footer C variation 3",link:"block-c-props"})])]),_:1})]),_:1}),e(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,"social-links":c(d),curved:"",image:"/assets/illustrations/footer/footer-cityscape.png"},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[$e]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[Be]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[ze]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"]),e(s,null,{default:l(()=>[e(a,null,{default:l(()=>[t("div",Ge,[e(r,{title:"Footer C",subtitle:"Footer C variation 4",link:"block-c-props"})])]),_:1})]),_:1}),C((p(),R(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":c(d),image:"/assets/illustrations/footer/footer-cityscape.png"},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[qe]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[Ie]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[Ne]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"])),[[w,{src:"/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(s,{id:"block-c-props","bordered-bottom":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",He,[e(r,{title:"Props",subtitle:"Footer C available props"})]),e(_,null,{code:l(()=>[e(m,{language:"html",code:c(Le)},null,8,["code"])]),props:l(()=>[e(m,{language:"javascript",code:c(be)},null,8,["code"])]),sample:l(()=>[e(m,{language:"javascript",code:c(Fe)},null,8,["code"])]),usage:l(()=>[Ye]),_:1})]),_:1})]),_:1})],64)}}}),Ue=`
<script setup lang="ts">
export type FooterColors = 'light' | 'dark' | 'default'

export interface FooterDSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterDProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterDSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}
<\/script>
`,je=`
<template>
  <FooterD text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones."
    color="light"
    :social-links="socialLinks"
    bubbles
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Get Started</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign In</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Training</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Contact</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Help Center</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Guides</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">API Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Terms</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Privacy</RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>
</template>
`,Ve=`
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`,Ee={class:"py-12"},Me=t("span",null,"Discover",-1),Oe=t("span",null,"Company",-1),We=t("span",null,"Support",-1),Je={class:"py-12"},Ke=t("span",null,"Discover",-1),Xe=t("span",null,"Company",-1),Ze=t("span",null,"Support",-1),el={class:"py-12"},ll=t("span",null,"Discover",-1),tl=t("span",null,"Company",-1),ol=t("span",null,"Support",-1),nl={class:"py-12"},il=t("span",null,"Discover",-1),al=t("span",null,"Company",-1),sl=t("span",null,"Support",-1),rl={class:"py-4"},cl=t("p",{class:"paragraph rem-95"},[o(" Footers are an important part of every website. They act as a recap of the most important navigation links as well as a provider of additional info or actions, such as Newsletter subscription or social links. You can control the footer color using the "),t("code",null,"color"),o(" prop. You can choose to display some animated bubbles by activating the "),t("code",null,"bubbles"),o(" prop. You can also give a curved shape to your footer using the "),t("code",null,"curved"),o(" prop. ")],-1),ul=k({__name:"FooterBlockDDoc",setup(x){return(f,h)=>{const r=g,a=A,s=S,i=P,n=F("RouterLink"),u=I,m=b,_=L,w=y("background");return p(),v(D,null,[e(s,{id:"block-d-demo"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",Ee,[e(r,{title:"Block D",subtitle:"Block D variation 1",link:"block-d-props"})])]),_:1})]),_:1}),e(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":c(d)},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[Me]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[Oe]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[We]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"]),e(s,{color:"grey"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",Je,[e(r,{title:"Block D",subtitle:"Block D variation 2",link:"block-d-props"})])]),_:1})]),_:1}),e(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light","social-links":c(d),bubbles:""},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[Ke]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[Xe]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[Ze]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"]),e(s,{"bordered-top":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",el,[e(r,{title:"Block D",subtitle:"Block D variation 3",link:"block-d-props"})])]),_:1})]),_:1}),e(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,"social-links":c(d),curved:""},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[ll]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[tl]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin"},{default:l(()=>[ol]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"]),e(s,{id:"block-d-demo"},{default:l(()=>[e(a,null,{default:l(()=>[t("div",nl,[e(r,{title:"Block D",subtitle:"Block D variation 4",link:"block-d-props"})])]),_:1})]),_:1}),C((p(),R(u,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":c(d)},{"column-1":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[il]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Get Started ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Product ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Features ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign Up ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Sign In ")]),_:1})])])]),"column-2":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[al]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Company ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" About ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Training ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" FAQs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Contact ")]),_:1})])])]),"column-3":l(()=>[e(i,{tag:"h3",size:6,weight:"thin",inverted:""},{default:l(()=>[sl]),_:1}),t("ul",null,[t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Help Center ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Guides ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" API Docs ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Terms ")]),_:1})]),t("li",null,[e(n,{to:{name:"index"},class:"level-item footer-link"},{default:l(()=>[o(" Privacy ")]),_:1})])])]),_:1},8,["social-links"])),[[w,{src:"/assets/shapes/lowpoly-pattern.png",placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e(s,{id:"block-d-props","bordered-bottom":""},{default:l(()=>[e(a,null,{default:l(()=>[t("div",rl,[e(r,{title:"Props",subtitle:"Footer D available props"})]),e(_,null,{code:l(()=>[e(m,{language:"html",code:c(je)},null,8,["code"])]),props:l(()=>[e(m,{language:"javascript",code:c(Ue)},null,8,["code"])]),sample:l(()=>[e(m,{language:"javascript",code:c(Ve)},null,8,["code"])]),usage:l(()=>[cl]),_:1})]),_:1})]),_:1})],64)}}}),Fl=k({__name:"footer",setup(x){const f=[{label:"Footer A",target:"block-a-demo"},{label:"Footer B",target:"block-b-demo"},{label:"Footer C",target:"block-c-demo"},{label:"Footer D",target:"block-d-demo"}];return(h,r)=>{const a=$,s=T;return p(),v("div",null,[e(a,{title:"Footer Blocks",subtitle:"More than 4 customizable footer blocks are awaiting for you to build your own layouts, pages, and content."}),e(s,{links:f,width:"440px"}),e(O),e(ge),e(Qe),e(ul),e(G)])}}});export{Fl as default};
