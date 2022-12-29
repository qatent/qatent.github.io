import{_ as w}from"./DemoLinks.09b4b6cb.js";import{_ as g,a as S}from"./DemoTitle.63799a9a.js";import{D as z}from"./DocumentationFooter.3fc21694.js";import{b as u,o as _,h as b,w as a,f as e,j as t,l as o,u as p,q as L,E as f,G as T,B as P,v as x,bH as C,bF as B,r as D,bZ as A,e as V}from"./index.4498c4e2.js";import{_ as v,a as k}from"./PrismCode.424bb1bc.js";import{_ as I}from"./PageTitle.4a2bd2c4.js";import{_ as R}from"./CollectionTitle.3e1f9f48.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";const N=`
<script setup lang="ts">
export type TitleSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type TitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type TitleTag = 'h1' | 'h2' | 'h3'

export interface TitleProps {
  size?: TitleSize
  weight?: TitleWeight
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
  tag: TitleTag
}

<\/script>
`,j=`
<template>
  <Title 
    tag="h2" 
    :size="2" 
    weight="thin" 
    leading>
    This is a title
  </Title>
</template>
`,M=`
<script setup lang="ts">
export type SubtitleSize = 1 | 2 | 3 | 4 | 5 | 6
export type SubtitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type SubtitleTag = 'h3' | 'h4' | 'p'

export interface SubtitleProps {
  size?: SubtitleSize
  weight?: SubtitleWeight
  tag: SubtitleTag
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
}
<\/script>
`,G=`
<template>
  <Subtitle 
    tag="h3" 
    :size="3" 
    weight="thin" 
    leading>
    This is a subtitle
  </Subtitle>
</template>
`,H=`
<script setup lang="ts">
export interface PageTitleProps {
  title: string
  subtitle: string
  text?: string
  inverted?: boolean
  aligned?: boolean
  leading?: boolean
}
<\/script>
`,W=`
<template>
  <PageTitle
    title="Make it count again"
    subtitle="Get Started"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
  >
    <template #content>
      <Buttons alignment="centered" class="mt-4">
        <Button color="primary" :long="3" bold raised>
          Get Started
        </Button>
        <Button :long="3" bold>Learn More</Button>
      </Buttons>
    </template>
  </PageTitle>
</template>
`,Y=`
<script setup lang="ts">
export interface SectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
<\/script>
`,q=`
<template>
  <SectionTitle title="Make it count again" subtitle="Get Started" />
</template>
`,F=`
<script setup lang="ts">
export interface CollectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
<\/script>
`,E=`
<template>
  <CollectionTitle
    title="Trending \u{1F525}"
    subtitle="Take a closer look at our trending items"
  >
    <template #toolbar>
      <Button :long="2">View All</Button>
    </template>
  </CollectionTitle>
</template>
`,Q=`
<template>
  <!--Paragraph size-->
  <p class="paragraph rem-125">This is a paragraph at 1.25rem</p>

  <!--Paragraph color-->
  <p class="paragraph text-primary">This is a paragraph (primary)</p>
</template>
`,U=`
<script setup lang="ts">
export type ActionLinkSize = 'tiny' | 'small'

export interface ActionLinkProps {
  link: RouteLocationRaw
  label?: string
  size?: ActionLinkSize
  narrow?: boolean
  heavy?: boolean
}
<\/script>
`,Z=`
<template>
  <!--Normal link-->
  <a href="https://cssninja.io" class="link">Iam a normal link</a>

  <!--RouterLink-->
  <RouterLink :to="{ name: 'index' }" class="link">Iam a RouterLink</RouterLink>

  <!--ActionLink-->
  <ActionLink label="Iam an action link" link="index" />

  <!--Animated-->
  <a href="https://cssninja.io" class="link has-underline">Animated link</a>
</template>
`,J={class:"mx-auto max-w-8"},K={class:"pt-4 pb-6"},O={class:"columns pt-4"},X={class:"column is-6"},tt={class:"column is-6"},et=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),at=t("p",{class:"paragraph rem-95"},[o(" Vulk provides a title component that you can safely use in all parts of your application. It provides many props so you can control every aspect of it like the "),t("code",null,"size"),o(" , the "),t("code",null,"weight"),o(" , the spacing and even the rendered HTML "),t("code",null,"tag"),o(" . Titles have a bottom spacing of "),t("code",null,"1.5rem"),o(" by default. Use the "),t("code",null,"narrow"),o(" and the "),t("code",null,"leading"),o(" props to change this behaviour. ")],-1),ot=u({__name:"TitleBase",setup(m){return(d,h)=>{const l=g,s=L,n=v,i=k,c=f,r=T;return _(),b(r,{id:"title-base-demo","bordered-bottom":""},{default:a(()=>[e(c,null,{default:a(()=>[t("div",J,[t("div",K,[e(l,{title:"Title",subtitle:"Title component variations"}),t("div",O,[t("div",X,[e(s,{tag:"h1",size:1,leading:""},{default:a(()=>[o("This is a title")]),_:1}),e(s,{tag:"h2",size:2,leading:""},{default:a(()=>[o("This is a title")]),_:1}),e(s,{tag:"h2",size:3,leading:""},{default:a(()=>[o("This is a title")]),_:1}),e(s,{tag:"h2",size:4,leading:""},{default:a(()=>[o("This is a title")]),_:1}),e(s,{tag:"h2",size:5,leading:""},{default:a(()=>[o("This is a title")]),_:1}),e(s,{tag:"h2",size:6,leading:""},{default:a(()=>[o("This is a title")]),_:1})]),t("div",tt,[e(s,{tag:"h1",size:1,weight:"thin",leading:""},{default:a(()=>[o(" This is a title ")]),_:1}),e(s,{tag:"h2",size:2,weight:"thin",leading:""},{default:a(()=>[o(" This is a title ")]),_:1}),e(s,{tag:"h2",size:3,weight:"thin",leading:""},{default:a(()=>[o(" This is a title ")]),_:1}),e(s,{tag:"h3",size:4,weight:"thin",leading:""},{default:a(()=>[o(" This is a title ")]),_:1}),e(s,{tag:"h3",size:5,weight:"thin",leading:""},{default:a(()=>[o(" This is a title ")]),_:1}),e(s,{tag:"h3",size:6,weight:"thin",leading:""},{default:a(()=>[o(" This is a title ")]),_:1})])])]),e(i,null,{code:a(()=>[e(n,{language:"html",code:p(j)},null,8,["code"])]),props:a(()=>[e(n,{language:"javascript",code:p(N)},null,8,["code"])]),sample:a(()=>[et]),usage:a(()=>[at]),_:1})])]),_:1})]),_:1})}}}),st={class:"mx-auto max-w-8"},nt={class:"pt-4 pb-6"},it={class:"columns pt-4"},lt={class:"column is-6"},ct={class:"column is-6"},pt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),rt=t("p",{class:"paragraph rem-95"},[o(" Vulk provides a subtitle component that you can safely use in all parts of your application. It provides many props so you can control every aspect of it like the "),t("code",null,"size"),o(" , the "),t("code",null,"weight"),o(" , the spacing and even the rendered HTML "),t("code",null,"tag"),o(" . Subtitles have a bottom spacing of "),t("code",null,"1.5rem"),o(" by default. Use the "),t("code",null,"narrow"),o(" and the "),t("code",null,"leading"),o(" props to change this behaviour. ")],-1),dt=u({__name:"SubtitleBase",setup(m){return(d,h)=>{const l=g,s=P,n=v,i=k,c=f,r=T;return _(),b(r,{id:"subtitle-base-demo","bordered-bottom":""},{default:a(()=>[e(c,null,{default:a(()=>[t("div",st,[t("div",nt,[e(l,{title:"Subtitle",subtitle:"Subtitle component variations"}),t("div",it,[t("div",lt,[e(s,{tag:"h3",size:1,leading:""},{default:a(()=>[o("This is a subtitle")]),_:1}),e(s,{tag:"h3",size:2,leading:""},{default:a(()=>[o("This is a subtitle")]),_:1}),e(s,{tag:"h3",size:3,leading:""},{default:a(()=>[o("This is a subtitle")]),_:1}),e(s,{tag:"h4",size:4,leading:""},{default:a(()=>[o("This is a subtitle")]),_:1}),e(s,{tag:"h4",size:5,leading:""},{default:a(()=>[o("This is a subtitle")]),_:1}),e(s,{tag:"h4",size:6,leading:""},{default:a(()=>[o("This is a subtitle")]),_:1})]),t("div",ct,[e(s,{tag:"h3",size:1,weight:"thin",leading:""},{default:a(()=>[o(" This is a subtitle ")]),_:1}),e(s,{tag:"h3",size:2,weight:"thin",leading:""},{default:a(()=>[o(" This is a subtitle ")]),_:1}),e(s,{tag:"h3",size:3,weight:"thin",leading:""},{default:a(()=>[o(" This is a subtitle ")]),_:1}),e(s,{tag:"p",size:4,weight:"thin",leading:""},{default:a(()=>[o(" This is a subtitle ")]),_:1}),e(s,{tag:"p",size:5,weight:"thin",leading:""},{default:a(()=>[o(" This is a subtitle ")]),_:1}),e(s,{tag:"p",size:6,weight:"thin",leading:""},{default:a(()=>[o(" This is a subtitle ")]),_:1})])])]),e(i,null,{code:a(()=>[e(n,{language:"html",code:p(G)},null,8,["code"])]),props:a(()=>[e(n,{language:"javascript",code:p(M)},null,8,["code"])]),sample:a(()=>[pt]),usage:a(()=>[rt]),_:1})])]),_:1})]),_:1})}}}),ut={class:"mx-auto max-w-8"},_t={class:"pt-4 pb-6"},mt={class:"pt-4"},ht={class:"pt-4 pb-6"},gt={class:"pt-4"},bt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ft=t("p",{class:"paragraph rem-95"},[o(" Vulk provides a page title component that you can safely use in all parts of your application. It provides a few props so you can control every aspect of it like content, handled by the "),t("code",null,"title"),o(" , the "),t("code",null,"subtitle"),o(" , and the "),t("code",null,"text"),o(" (optional) props. It also provides a "),t("code",null,"#content"),o(" slot that you can use to insert additional elements. You can also left align your page title by using the "),t("code",null,"aligned"),o(" prop. ")],-1),Tt=u({__name:"PageTitleBase",setup(m){return(d,h)=>{const l=g,s=x,n=C,i=I,c=v,r=k,y=f,$=T;return _(),b($,{id:"page-title-base-demo","bordered-bottom":""},{default:a(()=>[e(y,null,{default:a(()=>[t("div",ut,[t("div",_t,[e(l,{title:"Page Title",subtitle:"Page title component variations"}),t("div",mt,[e(i,{title:"Make it count again",subtitle:"Get Started",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"},{content:a(()=>[e(n,{alignment:"centered",class:"mt-4"},{default:a(()=>[e(s,{color:"primary",long:3,bold:"",raised:""},{default:a(()=>[o(" Get Started ")]),_:1}),e(s,{long:3,bold:""},{default:a(()=>[o("Learn More")]),_:1})]),_:1})]),_:1})])]),t("div",ht,[t("div",gt,[e(i,{title:"Make it count again",subtitle:"Get Started",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis",aligned:""},{content:a(()=>[e(n,{class:"mt-4"},{default:a(()=>[e(s,{color:"primary",long:3,bold:"",raised:""},{default:a(()=>[o(" Get Started ")]),_:1}),e(s,{long:3,bold:""},{default:a(()=>[o("Learn More")]),_:1})]),_:1})]),_:1})])]),e(r,null,{code:a(()=>[e(c,{language:"html",code:p(W)},null,8,["code"])]),props:a(()=>[e(c,{language:"javascript",code:p(H)},null,8,["code"])]),sample:a(()=>[bt]),usage:a(()=>[ft]),_:1})])]),_:1})]),_:1})}}}),vt={class:"mx-auto max-w-8"},kt={class:"pt-4 pb-6"},yt={class:"pt-4"},xt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),$t=t("p",{class:"paragraph rem-95"},[o(" Vulk provides a section title component that you can safely use in all parts of your application. It provides a few props so you can control its content, using the "),t("code",null,"title"),o(" , the "),t("code",null,"subtitle"),o(" props . ")],-1),wt=u({__name:"SectionTitleBase",setup(m){return(d,h)=>{const l=g,s=B,n=v,i=k,c=f,r=T;return _(),b(r,{id:"section-title-base-demo","bordered-bottom":""},{default:a(()=>[e(c,null,{default:a(()=>[t("div",vt,[t("div",kt,[e(l,{title:"Section Title",subtitle:"Section title component variations"}),t("div",yt,[e(s,{title:"Make it count again",subtitle:"Get Started"})])]),e(i,null,{code:a(()=>[e(n,{language:"html",code:p(q)},null,8,["code"])]),props:a(()=>[e(n,{language:"javascript",code:p(Y)},null,8,["code"])]),sample:a(()=>[xt]),usage:a(()=>[$t]),_:1})])]),_:1})]),_:1})}}}),St={class:"mx-auto max-w-8"},zt={class:"pt-4 pb-6"},Lt={class:"pt-4"},Pt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ct=t("p",{class:"paragraph rem-95"},[o(" Vulk provides a collection title component that you can safely use in your application's collection based pages. It provides a few props so you can control its content, using the "),t("code",null,"title"),o(" , the "),t("code",null,"subtitle"),o(" props. It also provides a "),t("code",null,"#toolbar"),o(" slot that you can use to insert additional elements at the right side. ")],-1),Bt=u({__name:"CollectionTitleBase",setup(m){return(d,h)=>{const l=g,s=x,n=R,i=v,c=k,r=f,y=T;return _(),b(y,{id:"collection-title-base-demo","bordered-bottom":""},{default:a(()=>[e(r,null,{default:a(()=>[t("div",St,[t("div",zt,[e(l,{title:"Collection Title",subtitle:"Collection title component variations"}),t("div",Lt,[e(n,{title:"Trending \u{1F525}",subtitle:"Take a closer look at our trending items"},{toolbar:a(()=>[e(s,{long:2},{default:a(()=>[o("View All")]),_:1})]),_:1})])]),e(c,null,{code:a(()=>[e(i,{language:"html",code:p(E)},null,8,["code"])]),props:a(()=>[e(i,{language:"javascript",code:p(F)},null,8,["code"])]),sample:a(()=>[Pt]),usage:a(()=>[Ct]),_:1})])]),_:1})]),_:1})}}}),Dt={class:"mx-auto max-w-8"},At={class:"pt-4 pb-6"},Vt=t("div",{class:"columns pt-4"},[t("div",{class:"column is-6"},[t("p",{class:"paragraph rem-125"},"This is a paragraph at 1.25rem"),t("p",{class:"paragraph"},"This is a paragraph at 1rem"),t("p",{class:"paragraph rem-90"},"This is a paragraph at .9rem"),t("p",{class:"paragraph rem-80"},"This is a paragraph at .8rem")]),t("div",{class:"column is-6"},[t("p",{class:"paragraph"},"This is a paragraph (default)"),t("p",{class:"paragraph text-primary"}," This is a paragraph (primary) "),t("p",{class:"paragraph text-success"}," This is a paragraph (success) "),t("p",{class:"paragraph text-info"},"This is a paragraph (info)"),t("p",{class:"paragraph text-warning"}," This is a paragraph (warning) "),t("p",{class:"paragraph text-danger"},"This is a paragraph (danger)")])],-1),It=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No props needed, not a vue component ")],-1),Rt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Nt=t("p",{class:"paragraph rem-95"},[o(" Vulk ships with basic styles for paragraph text. We chose not to make it a component for more flexibility and customization possibilities. To make a paragraph, simply add the "),t("code",null,"paragraph"),o(" class to a "),t("code",null,"p"),o(" HTMl element. You can then control font size using Vulk helpers like "),t("code",null,"rem-*"),o(" . You can also control the text color by using Vulk's color helpers like "),t("code",null,"text-*"),o(" . ")],-1),jt=u({__name:"ParagraphBase",setup(m){return(d,h)=>{const l=g,s=v,n=k,i=f,c=T;return _(),b(c,{id:"paragraph-base-demo","bordered-bottom":""},{default:a(()=>[e(i,null,{default:a(()=>[t("div",Dt,[t("div",At,[e(l,{title:"Paragraph",subtitle:"Paragraph text variations"}),Vt]),e(n,null,{code:a(()=>[e(s,{language:"html",code:p(Q)},null,8,["code"])]),props:a(()=>[It]),sample:a(()=>[Rt]),usage:a(()=>[Nt]),_:1})])]),_:1})]),_:1})}}}),Mt={class:"mx-auto max-w-8"},Gt={class:"pt-4 pb-6"},Ht={class:"columns pt-4"},Wt={class:"column is-6"},Yt=t("div",{class:"mb-4"},[t("a",{href:"https://cssninja.io",class:"link"},"Iam a normal link")],-1),qt={class:"mb-4"},Ft={class:"mb-4"},Et={class:"column is-6"},Qt={class:"mb-4"},Ut=t("div",{class:"mb-4"},[t("a",{href:"https://cssninja.io",class:"link has-underline"}," Animated link ")],-1),Zt={class:"mb-4"},Jt=t("div",{class:"empty-text"},[t("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Kt=t("p",{class:"paragraph rem-95"},[o(" Links are an import part of any typography system. You can use regular links like "),t("code",null,"<a></a>"),o(" or "),t("code",null,"<RouterLink></RouterLink>"),o(" . You can make links with a sliding underline using the "),t("code",null,"has-underline"),o(" class. Alternatively, you ca use a special component called "),t("code",null,"<ActionLink></ActionLink>"),o(" to show a link with a sliding arrow on hover. ")],-1),Ot=u({__name:"LinkBase",setup(m){return(d,h)=>{const l=g,s=D("RouterLink"),n=A,i=v,c=k,r=f,y=T;return _(),b(y,{id:"link-base-demo","bordered-bottom":""},{default:a(()=>[e(r,null,{default:a(()=>[t("div",Mt,[t("div",Gt,[e(l,{title:"Link",subtitle:"Link element variations"}),t("div",Ht,[t("div",Wt,[Yt,t("div",qt,[e(s,{to:{name:"index"},class:"link"},{default:a(()=>[o(" Iam a RouterLink ")]),_:1})]),t("div",Ft,[e(s,{to:{name:"index"},class:"link is-disabled"},{default:a(()=>[o(" Disabled RouterLink ")]),_:1})])]),t("div",Et,[t("div",Qt,[e(n,{label:"Iam an action link",link:"index"})]),Ut,t("div",Zt,[e(s,{to:{name:"index"},class:"link has-underline is-reversed"},{default:a(()=>[o(" Animated RouterLink ")]),_:1})])])])]),e(c,null,{code:a(()=>[e(i,{language:"html",code:p(Z)},null,8,["code"])]),props:a(()=>[e(i,{language:"javascript",code:p(U)},null,8,["code"])]),sample:a(()=>[Jt]),usage:a(()=>[Kt]),_:1})])]),_:1})]),_:1})}}}),pe=u({__name:"typography",setup(m){const d=[{label:"Title",target:"title-base-demo"},{label:"Subtitle",target:"subtitle-base-demo"},{label:"Page Title",target:"page-title-base-demo"},{label:"Section Title",target:"section-title-base-demo"},{label:"Collection Title",target:"collection-title-base-demo"},{label:"Paragraph",target:"paragraph-base-demo"},{label:"Link",target:"link-base-demo"}];return(h,l)=>{const s=S,n=w;return _(),V("div",null,[e(s,{title:"Typography",subtitle:"Typography is the thing that makes the difference between and well designed and an average website. Explore Vulk's typography."}),e(n,{links:d,width:"750px"}),e(ot),e(dt),e(Tt),e(wt),e(Bt),e(jt),e(Ot),e(z)])}}});export{pe as default};
