import{_ as Q}from"./DemoLinks.09b4b6cb.js";import{_ as L,a as Z}from"./DemoTitle.63799a9a.js";import{A as ee,o as r,e as $,k as K,j as a,b as R,r as F,h as _,w as l,f as e,l as t,m as E,t as i,u as m,F as z,q as j,bN as V,E as B,G as N}from"./index.4498c4e2.js";import{_ as I,a as P}from"./PrismCode.424bb1bc.js";import{_ as Y,a as D,b as G,c as M}from"./SimpleTableHeader.2e6cfa8e.js";import{_ as W}from"./Tag.75316ce2.js";import{_ as O}from"./AvatarGroup.e6875e64.js";import{_ as U}from"./AvatarSimple.57c1e629.js";import{D as le}from"./DocumentationFooter.3fc21694.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";const ae={},te={class:"table-cell-flex"},oe={class:"flex-content"};function se(b,H){return r(),$("div",te,[K(b.$slots,"media",{},void 0,!0),a("div",oe,[K(b.$slots,"content",{},void 0,!0)])])}const q=ee(ae,[["render",se],["__scopeId","data-v-e602787d"]]),J=[{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Eric G.",position:"Web developer"},location:"Los Angeles, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/vuejs.svg",label:"programming language"},{picture:"/assets/stacks/reactjs.svg",label:"programming language"},{picture:"/assets/stacks/nodejs.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"}],status:{label:"Available",color:"success"},experience:"8 years",url:"index"},{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Laura T.",position:"UI designer"},location:"Los Angeles, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"},{picture:"/assets/stacks/photoshop.svg",label:"programming language"},{picture:"/assets/stacks/bulma.svg",label:"programming language"},{picture:"/assets/stacks/svelte.svg",label:"programming language"}],status:{label:"Offline",color:"solid"},experience:"6 years",url:"index"},{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Erwin S.",position:"Mobile developer"},location:"New York, NY",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/android.svg",label:"programming language"},{picture:"/assets/stacks/illustrator.svg",label:"programming language"},{picture:"/assets/stacks/swift.svg",label:"programming language"},{picture:"/assets/stacks/flutter.svg",label:"programming language"}],status:{label:"Busy",color:"danger"},experience:"4 years",url:"index"},{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Anita C.",position:"Web developer"},location:"Las Vegas, NV",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/vuejs.svg",label:"programming language"},{picture:"/assets/stacks/reactjs.svg",label:"programming language"},{picture:"/assets/stacks/nodejs.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"}],status:{label:"Available",color:"success"},experience:"15 years",url:"index"},{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Christina D.",position:"Mobile developer"},location:"Miami, FL",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/android.svg",label:"programming language"},{picture:"/assets/stacks/illustrator.svg",label:"programming language"},{picture:"/assets/stacks/swift.svg",label:"programming language"},{picture:"/assets/stacks/flutter.svg",label:"programming language"}],status:{label:"Available",color:"success"},experience:"2 years",url:"index"},{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Armin A.",position:"Web developer"},location:"San Francisco, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"},{picture:"/assets/stacks/illustrator.svg",label:"programming language"},{picture:"/assets/stacks/bulma.svg",label:"programming language"},{picture:"/assets/stacks/sass.svg",label:"programming language"}],status:{label:"Meeting",color:"warning"},experience:"3 years",url:"index"},{employee:{picture:"data:image/gif;base64,replace_with_your_image",name:"Eren J.",position:"UX designer"},location:"Los Angeles, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"},{picture:"/assets/stacks/photoshop.svg",label:"programming language"},{picture:"/assets/stacks/bulma.svg",label:"programming language"},{picture:"/assets/stacks/svelte.svg",label:"programming language"}],status:{label:"Offline",color:"solid"},experience:"7 years",url:"index"}],X=`
<script setup lang="ts">
export interface SimpleTableProps {
  striped?: boolean
  bordered?: boolean
  scrollable?: boolean
}
<\/script>
`,ne=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table'
<\/script>

<template>
  <SimpleTable :bordered="false">
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,ie=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table'
<\/script>

<template>
  <SimpleTable :bordered="false" striped>
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,re=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table'
<\/script>

<template>
  <SimpleTable :bordered="true">
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,pe=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table'
<\/script>

<template>
  <SimpleTable :bordered="true" striped>
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,me={class:"mx-auto max-w-9"},ce={class:"pt-4 pb-6"},ue={class:"is-flex is-align-items-flex-end pt-4"},de={class:"paragraph rem-75"},_e={class:"paragraph rem-85"},be={class:"paragraph rem-85"},ge=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Te=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),Se=R({__name:"SimpleTableBase",setup(b){return(H,A)=>{const d=L,s=Y,p=D,g=U,T=j,c=q,n=G,S=V,f=O,h=W,v=F("RouterLink"),y=M,u=I,k=P,x=B,C=N;return r(),_(C,{id:"table-base-demo","bordered-bottom":""},{default:l(()=>[e(x,null,{default:l(()=>[a("div",me,[a("div",ce,[e(d,{title:"Table",subtitle:"Table base variation"}),a("div",ue,[e(y,{bordered:!1},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[t("Employee")]),_:1}),e(s,null,{default:l(()=>[t("Location")]),_:1}),e(s,null,{default:l(()=>[t("Skills")]),_:1}),e(s,null,{default:l(()=>[t("Status")]),_:1}),e(s,null,{default:l(()=>[t("Experience")]),_:1}),e(s,null,{default:l(()=>[t("Action")]),_:1})]),_:1}),(r(!0),$(z,null,E(m(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",de,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",_e,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(f,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(h,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",be,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[t(" View Profile ")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(k,null,{code:l(()=>[e(u,{language:"html",code:m(ne)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:m(X)},null,8,["code"])]),sample:l(()=>[ge]),usage:l(()=>[Te]),_:1})])]),_:1})]),_:1})}}}),fe={class:"mx-auto max-w-9"},he={class:"pt-4 pb-6"},ve={class:"is-flex is-align-items-flex-end pt-4"},ye={class:"paragraph rem-75"},ke={class:"paragraph rem-85"},xe={class:"paragraph rem-85"},Ce=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),we=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),He=R({__name:"SimpleTableStriped",setup(b){return(H,A)=>{const d=L,s=Y,p=D,g=U,T=j,c=q,n=G,S=V,f=O,h=W,v=F("RouterLink"),y=M,u=I,k=P,x=B,C=N;return r(),_(C,{id:"table-striped-demo","bordered-bottom":""},{default:l(()=>[e(x,null,{default:l(()=>[a("div",fe,[a("div",he,[e(d,{title:"Striped Table",subtitle:"Striped Table variation"}),a("div",ve,[e(y,{bordered:!1,striped:""},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[t("Employee")]),_:1}),e(s,null,{default:l(()=>[t("Location")]),_:1}),e(s,null,{default:l(()=>[t("Skills")]),_:1}),e(s,null,{default:l(()=>[t("Status")]),_:1}),e(s,null,{default:l(()=>[t("Experience")]),_:1}),e(s,null,{default:l(()=>[t("Action")]),_:1})]),_:1}),(r(!0),$(z,null,E(m(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",ye,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",ke,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(f,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(h,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",xe,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[t(" View Profile ")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(k,null,{code:l(()=>[e(u,{language:"html",code:m(ie)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:m(X)},null,8,["code"])]),sample:l(()=>[Ce]),usage:l(()=>[we]),_:1})])]),_:1})]),_:1})}}}),$e={class:"mx-auto max-w-9"},Re={class:"pt-4 pb-6"},Ae={class:"is-flex is-align-items-flex-end pt-4"},Le={class:"paragraph rem-75"},Fe={class:"paragraph rem-85"},Ee={class:"paragraph rem-85"},ze=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),je=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),Ve=R({__name:"SimpleTableBordered",setup(b){return(H,A)=>{const d=L,s=Y,p=D,g=U,T=j,c=q,n=G,S=V,f=O,h=W,v=F("RouterLink"),y=M,u=I,k=P,x=B,C=N;return r(),_(C,{id:"table-bordered-demo","bordered-bottom":""},{default:l(()=>[e(x,null,{default:l(()=>[a("div",$e,[a("div",Re,[e(d,{title:"Table Border",subtitle:"Table border variation"}),a("div",Ae,[e(y,{bordered:!0},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[t("Employee")]),_:1}),e(s,null,{default:l(()=>[t("Location")]),_:1}),e(s,null,{default:l(()=>[t("Skills")]),_:1}),e(s,null,{default:l(()=>[t("Status")]),_:1}),e(s,null,{default:l(()=>[t("Experience")]),_:1}),e(s,null,{default:l(()=>[t("Action")]),_:1})]),_:1}),(r(!0),$(z,null,E(m(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",Le,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",Fe,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(f,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(h,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",Ee,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[t(" View Profile ")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(k,null,{code:l(()=>[e(u,{language:"html",code:m(re)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:m(X)},null,8,["code"])]),sample:l(()=>[ze]),usage:l(()=>[je]),_:1})])]),_:1})]),_:1})}}}),Be={class:"mx-auto max-w-9"},Ne={class:"pt-4 pb-6"},Ie={class:"is-flex is-align-items-flex-end pt-4"},Pe={class:"paragraph rem-75"},Ye={class:"paragraph rem-85"},De={class:"paragraph rem-85"},Ge=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Me=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),We=R({__name:"SimpleTableBoth",setup(b){return(H,A)=>{const d=L,s=Y,p=D,g=U,T=j,c=q,n=G,S=V,f=O,h=W,v=F("RouterLink"),y=M,u=I,k=P,x=B,C=N;return r(),_(C,{id:"table-both-demo","bordered-bottom":""},{default:l(()=>[e(x,null,{default:l(()=>[a("div",Be,[a("div",Ne,[e(d,{title:"Striped Bordered",subtitle:"Striped bordered variation"}),a("div",Ie,[e(y,{bordered:!0,striped:""},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[t("Employee")]),_:1}),e(s,null,{default:l(()=>[t("Location")]),_:1}),e(s,null,{default:l(()=>[t("Skills")]),_:1}),e(s,null,{default:l(()=>[t("Status")]),_:1}),e(s,null,{default:l(()=>[t("Experience")]),_:1}),e(s,null,{default:l(()=>[t("Action")]),_:1})]),_:1}),(r(!0),$(z,null,E(m(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",Pe,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(c,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",Ye,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(f,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(h,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",De,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[t(" View Profile ")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(k,null,{code:l(()=>[e(u,{language:"html",code:m(pe)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:m(X)},null,8,["code"])]),sample:l(()=>[Ge]),usage:l(()=>[Me]),_:1})])]),_:1})]),_:1})}}}),ol=R({__name:"table",setup(b){const H=[{label:"Table",target:"table-base-demo"},{label:"Striped",target:"table-striped-demo"},{label:"Bordered",target:"table-bordered-demo"},{label:"Both",target:"table-both-demo"}];return(A,d)=>{const s=Z,p=Q;return r(),$("div",null,[e(s,{title:"Table Component",subtitle:"Tables are a very common component that often remains as the most efficient way to display complex data. Explore Vulk tables."}),e(p,{links:H,width:"360px"}),e(Se),e(He),e(Ve),e(We),e(le)])}}});export{ol as default};
