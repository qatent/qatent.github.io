import{_ as M}from"./DemoLinks.09b4b6cb.js";import{_ as F,a as J}from"./DemoTitle.63799a9a.js";import{b as C,X as $,o as w,h as k,w as l,f as o,j as e,t as f,u as h,l as d,q as I,bW as L,E as T,G as O,g as q,e as R,i as G,n as X,x as K,y as Q,A as Z}from"./index.4498c4e2.js";import{_ as U,a as S}from"./PrismCode.424bb1bc.js";import{_ as D}from"./Field.e9551eba.js";import{_ as j,a as B}from"./VInput.3620f742.js";import{_ as P}from"./FieldLabel.14888c46.js";import{_ as E}from"./VTextarea.9e7a8614.js";import{_ as Y}from"./VSelect.4705827e.js";import{_ as ee}from"./Checkbox.c0b63bab.js";import{_ as oe}from"./NinjaToggle.1998bd09.js";import{D as le}from"./DocumentationFooter.3fc21694.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";const N=`
<script setup lang="ts">
export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void
}

export interface InputProps {
  type?: string
  placeholder?: string
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
  rounded?: boolean
  inverted?: boolean
}
<\/script>
`,ae=`
<script setup lang="ts">
const inputOneValue = ref()
<\/script>

<template>
  <Field>
    <FieldLabel label="Username"></FieldLabel>
    <Control>
      <VInput
        v-model="inputOneValue"
        placeholder="John Doe"
      />
    </Control>
  </Field>
</template>
`,te=`
<template>
  <Field>
    <FieldLabel label="Email Address"></FieldLabel>
    <Control icon="feather:mail">
      <VInput placeholder="johndoe@gmail.com" />
    </Control>
  </Field>
</template>
`,ne=`
<template>
  <Field>
    <FieldLabel label="Email Address"></FieldLabel>
    <Control icon="feather:mail" validation is-valid>
      <VInput
        placeholder="johndoe@gmail.com"
        value="mymail@gmail.com"
      />
    </Control>
  </Field>
  <Field>
    <FieldLabel label="Password"></FieldLabel>
    <Control icon="feather:lock" validation is-invalid>
      <VInput type="password" value="" />
    </Control>
  </Field>
</template>
`,H=`
export interface TextareaEmits {
  (e: 'update:modelValue', value: string): void
}

export interface TextareaProps {
  rows?: number
  placeholder?: string
  value?: string
  modelValue?: string
  readonly?: boolean
  resize?: boolean
}
<\/script>
`,se=`
<script setup lang="ts">
const textareaValue = ref('')
<\/script>

<template>
  <Field>
    <FieldLabel label="Message"></FieldLabel>
    <Control>
      <VTextarea
        v-model="textareaValue"
        placeholder="Write something..."
      />
    </Control>
  </Field>
</template>
`,de=`
<script setup lang="ts">
const textareaValue = ref('')
<\/script>

<template>
  <Field>
    <FieldLabel label="Message"></FieldLabel>
    <Control icon="feather:mail">
      <VTextarea
        v-model="textareaValue"
        :resize="false"
        placeholder="Write something..."
      />
    </Control>
  </Field>
</template>
`,A=`
<script setup lang="ts">
export interface SelectOption {
  value: string | number
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: any
  placeholder?: string
  readonly?: boolean
  rounded?: boolean
}
<\/script>
`,ie=`
<script setup lang="ts">
const options = [
  {
    value: 'Hamburger',
    label: 'Hamburger',
  },
  {
    value: 'Cheeseburger',
    label: 'Cheeseburger',
  },
  {
    value: 'Burito',
    label: 'Burito',
  },
]

const selectOneValue = ref()
<\/script>

<template>
  <Field>
    <FieldLabel label="Choose an option"></FieldLabel>
    <Control>
      <VSelect
        v-model="selectOneValue"
        :options="options"
      />
    </Control>
  </Field>
</template>
`,ue=`
<script setup lang="ts">
const options = [
  {
    value: 'Hamburger',
    label: 'Hamburger',
  },
  {
    value: 'Cheeseburger',
    label: 'Cheeseburger',
  },
  {
    value: 'Burito',
    label: 'Burito',
  },
]

const selectOneValue = ref()
<\/script>

<template>
  <Field>
    <FieldLabel label="Choose an option"></FieldLabel>
    <Control icon="feather:globe">
      <VSelect
        v-model="selectOneValue"
        :options="options"
      />
    </Control>
  </Field>
</template>
`,ce=`
<script setup lang="ts">
export interface CheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}

export type CheckboxColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface CheckboxProps {
  name: string
  color?: CheckboxColor
  value?: string | number
  modelValue?: (string | number)[]
  disabled?: boolean
  rounded?: boolean
  label?: string
}
<\/script>
`,re=`
<script setup lang="ts">
const options = ref(['Option 2'])
<\/script>

<template>
  <!--Regular checkbox-->
  <Checkbox
    v-model="options"
    name="checkbox-1"
    label="Option 1"
    value="Option 1"
  />

  <!--Rounded checkbox-->
  <Checkbox 
    v-model="options"
    name="checkbox-2"
    label="Option 2"
    value="Option 2"
    rounded 
  />
</template>
`,pe=`
<script setup lang="ts">
export type RadioColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface RadioProps {
  name: string
  group: string
  color?: RadioColor
  value?: boolean
  disabled?: boolean
  rounded?: boolean
  label?: string
}
<\/script>
`,me=`
<template>
  <Radio 
    name="radio-1" 
    label="Choice 1" 
    group="radio-group-1" 
    color="default" 
  />
</template>
`,_e=`
<script setup lang="ts">
export type ToggleFlavor = 'thin' | 'switch'

export type ToggleColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface ToggleProps {
  flavor?: ToggleFlavor
  name: string
  color?: ToggleColor
  value?: boolean
  disabled?: boolean
  icon?: boolean
}
<\/script>
`,ve=`
<script setup lang="ts">
const options = ref(['Option 2', 'Option 9'])
<\/script>

<template>
  <!--Thin Toggle-->
  <NinjaToggle
    v-model="options"
    name="demo-toggle-1"
    value="Option 0"
  />

  <!--Switch Toggle-->
  <NinjaToggle
    v-model="options"
    name="demo-toggle-9"
    icon
    flavor="switch"
    color="success"
    value="Option 8"
  />
</template>
`,ge={class:"mx-auto max-w-6"},he={class:"pt-4 pb-6"},be={class:"is-flex d-column-mobile pt-4"},fe={class:"w-full max-w-1/2 max-w-mobile"},Ve={class:"w-full max-w-1/2 max-w-mobile p-4"},xe={class:"mb-4"},$e=e("span",null,"First",-1),we={class:"paragraph rem-90"},Ce=e("span",null,"Second",-1),ye={class:"paragraph rem-90"},Fe=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ke=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk inputs are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VInput />")],-1),Te=C({__name:"InputBase",setup(b){const a=$(),i=$();return(t,c)=>{const n=F,_=P,u=j,p=B,v=D,m=I,g=L,s=U,V=S,r=T,y=O;return w(),k(y,{id:"input-base-demo","bordered-bottom":""},{default:l(()=>[o(r,null,{default:l(()=>[e("div",ge,[e("div",he,[o(n,{title:"Input",subtitle:"Input base layout"}),e("div",be,[e("div",fe,[o(v,null,{default:l(()=>[o(_,{label:"Username"}),o(p,null,{default:l(()=>[o(u,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=x=>a.value=x),placeholder:"John Doe"},null,8,["modelValue"])]),_:1})]),_:1}),o(v,null,{default:l(()=>[o(_,{label:"Username"}),o(p,null,{default:l(()=>[o(u,{modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=x=>i.value=x),placeholder:"John Doe",rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",Ve,[o(g,{shape:"squared",muted:""},{default:l(()=>[e("div",xe,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[$e]),_:1}),e("p",we,"value: "+f(a.value),1)]),e("div",null,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Ce]),_:1}),e("p",ye,"value: "+f(i.value),1)])]),_:1})])])]),o(V,null,{code:l(()=>[o(s,{language:"html",code:h(ae)},null,8,["code"])]),props:l(()=>[o(s,{language:"javascript",code:h(N)},null,8,["code"])]),sample:l(()=>[Fe]),usage:l(()=>[ke]),_:1})])]),_:1})]),_:1})}}}),Oe={class:"mx-auto max-w-6"},Ue={class:"pt-4 pb-6"},Se={class:"is-flex d-column-mobile pt-4"},Ie={class:"w-full max-w-1/2 max-w-mobile"},Le={class:"w-full max-w-1/2 max-w-mobile p-4"},ze={class:"mb-4"},De=e("span",null,"First",-1),Be={class:"paragraph rem-90"},Pe=e("span",null,"Second",-1),Re={class:"paragraph rem-90"},je=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ne=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk inputs are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VInput />"),d(" . You can add an icon to an input element by using the "),e("code",null,"icon"),d(" prop on the "),e("code",null,"<Control />"),d(" component. ")],-1),qe=C({__name:"InputIcon",setup(b){const a=$(),i=$();return(t,c)=>{const n=F,_=P,u=j,p=B,v=D,m=I,g=L,s=U,V=S,r=T,y=O;return w(),k(y,{id:"input-icon-demo","bordered-bottom":""},{default:l(()=>[o(r,null,{default:l(()=>[e("div",Oe,[e("div",Ue,[o(n,{title:"Input",subtitle:"Input icon layout"}),e("div",Se,[e("div",Ie,[o(v,null,{default:l(()=>[o(_,{label:"Email Address"}),o(p,{icon:"feather:mail"},{default:l(()=>[o(u,{modelValue:a.value,"onUpdate:modelValue":[c[0]||(c[0]=x=>a.value=x),c[1]||(c[1]=x=>a.value=x)],placeholder:"johndoe@gmail.com"},null,8,["modelValue"])]),_:1})]),_:1}),o(v,null,{default:l(()=>[o(_,{label:"Email Address"}),o(p,{icon:"feather:mail"},{default:l(()=>[o(u,{modelValue:i.value,"onUpdate:modelValue":[c[2]||(c[2]=x=>i.value=x),c[3]||(c[3]=x=>i.value=x)],placeholder:"johndoe@gmail.com",rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",Le,[o(g,{shape:"squared",muted:""},{default:l(()=>[e("div",ze,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[De]),_:1}),e("p",Be,"value: "+f(a.value),1)]),e("div",null,[o(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Pe]),_:1}),e("p",Re,"value: "+f(i.value),1)])]),_:1})])])]),o(V,null,{code:l(()=>[o(s,{language:"html",code:h(te)},null,8,["code"])]),props:l(()=>[o(s,{language:"javascript",code:h(N)},null,8,["code"])]),sample:l(()=>[je]),usage:l(()=>[Ne]),_:1})])]),_:1})]),_:1})}}}),Ee={class:"mx-auto max-w-6"},Ye={class:"pt-4 pb-6"},He={class:"max-w-1/2 max-w-mobile pt-4"},Ae=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),We=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk inputs are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VInput />"),d(" . You can add an icon to an input element by using the "),e("code",null,"icon"),d(" prop on the "),e("code",null,"<Control />"),d(" component. ")],-1),Me=C({__name:"InputValidation",setup(b){return(a,i)=>{const t=F,c=P,n=j,_=B,u=D,p=U,v=S,m=T,g=O;return w(),k(g,{id:"input-validation-demo","bordered-bottom":""},{default:l(()=>[o(m,null,{default:l(()=>[e("div",Ee,[e("div",Ye,[o(t,{title:"Validation",subtitle:"Input validation layout"}),e("div",He,[o(u,null,{default:l(()=>[o(c,{label:"Email Address"}),o(_,{icon:"feather:mail",validation:"","is-valid":""},{default:l(()=>[o(n,{placeholder:"johndoe@gmail.com",value:"mymail@gmail.com"})]),_:1})]),_:1}),o(u,null,{default:l(()=>[o(c,{label:"Password"}),o(_,{icon:"feather:lock",validation:"","is-invalid":""},{default:l(()=>[o(n,{type:"password",value:"deaefeafeqfqf"})]),_:1})]),_:1})])]),o(v,null,{code:l(()=>[o(p,{language:"html",code:h(ne)},null,8,["code"])]),props:l(()=>[o(p,{language:"javascript",code:h(N)},null,8,["code"])]),sample:l(()=>[Ae]),usage:l(()=>[We]),_:1})])]),_:1})]),_:1})}}}),Je={class:"mx-auto max-w-6"},Ge={class:"pt-4 pb-6"},Xe={class:"is-flex d-column-mobile pt-4"},Ke={class:"w-full max-w-1/2 max-w-mobile"},Qe={class:"w-full max-w-1/2 max-w-mobile p-4"},Ze={class:"mb-4"},eo=e("span",null,"Textarea",-1),oo={class:"paragraph rem-90"},lo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ao=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk textareas are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VTextarea />")],-1),to=C({__name:"TextareaBase",setup(b){const a=$("");return(i,t)=>{const c=F,n=P,_=E,u=B,p=D,v=I,m=L,g=U,s=S,V=T,r=O;return w(),k(r,{id:"textarea-base-demo","bordered-bottom":""},{default:l(()=>[o(V,null,{default:l(()=>[e("div",Je,[e("div",Ge,[o(c,{title:"Textarea",subtitle:"Textarea base layout"}),e("div",Xe,[e("div",Ke,[o(p,null,{default:l(()=>[o(n,{label:"Message"}),o(u,null,{default:l(()=>[o(_,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=y=>a.value=y),placeholder:"Write something..."},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",Qe,[o(m,{shape:"squared",muted:""},{default:l(()=>[e("div",Ze,[o(v,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[eo]),_:1}),e("p",oo,"value: "+f(a.value),1)])]),_:1})])])]),o(s,null,{code:l(()=>[o(g,{language:"html",code:h(se)},null,8,["code"])]),props:l(()=>[o(g,{language:"javascript",code:h(H)},null,8,["code"])]),sample:l(()=>[lo]),usage:l(()=>[ao]),_:1})])]),_:1})]),_:1})}}}),no={class:"mx-auto max-w-6"},so={class:"pt-4 pb-6"},io={class:"is-flex d-column-mobile pt-4"},uo={class:"w-full max-w-1/2 max-w-mobile"},co={class:"w-full max-w-1/2 max-w-mobile p-4"},ro={class:"mb-4"},po=e("span",null,"Textarea",-1),mo={class:"paragraph rem-90"},_o=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),vo=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk textareas are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VTextarea />"),d(" . You can prevent a textarea from being resizable by using the "),e("code",null,"no-resize"),d(" prop. You can also change the number of rows using the "),e("code",null,":rows"),d(" prop. ")],-1),go=C({__name:"TextareaResize",setup(b){const a=$("");return(i,t)=>{const c=F,n=P,_=E,u=B,p=D,v=I,m=L,g=U,s=S,V=T,r=O;return w(),k(r,{id:"textarea-resize-demo","bordered-bottom":""},{default:l(()=>[o(V,null,{default:l(()=>[e("div",no,[e("div",so,[o(c,{title:"No Resize",subtitle:"Textarea no resize variation"}),e("div",io,[e("div",uo,[o(p,null,{default:l(()=>[o(n,{label:"Message"}),o(u,null,{default:l(()=>[o(_,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=y=>a.value=y),rows:3,resize:!1,placeholder:"Write something..."},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",co,[o(m,{shape:"squared",muted:""},{default:l(()=>[e("div",ro,[o(v,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[po]),_:1}),e("p",mo,"value: "+f(a.value),1)])]),_:1})])])]),o(s,null,{code:l(()=>[o(g,{language:"html",code:h(de)},null,8,["code"])]),props:l(()=>[o(g,{language:"javascript",code:h(H)},null,8,["code"])]),sample:l(()=>[_o]),usage:l(()=>[vo]),_:1})])]),_:1})]),_:1})}}}),ho={class:"mx-auto max-w-6"},bo={class:"pt-4 pb-6"},fo={class:"is-flex d-column-mobile pt-4"},Vo={class:"w-full max-w-1/2 max-w-mobile"},xo={class:"w-full max-w-1/2 max-w-mobile p-4"},$o={class:"mb-4"},wo=e("span",null,"First",-1),Co={class:"paragraph rem-90"},yo=e("span",null,"Second",-1),Fo={class:"paragraph rem-90"},ko=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),To=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk selects are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VSelect />"),d(" . ")],-1),Oo=C({__name:"SelectBase",setup(b){const a=[{value:"Hamburger",label:"Hamburger"},{value:"Cheeseburger",label:"Cheeseburger"},{value:"Burito",label:"Burito"}],i=$(),t=$();return(c,n)=>{const _=F,u=P,p=Y,v=B,m=D,g=I,s=L,V=U,r=S,y=T,x=O;return w(),k(x,{id:"select-base-demo","bordered-bottom":""},{default:l(()=>[o(y,null,{default:l(()=>[e("div",ho,[e("div",bo,[o(_,{title:"Select",subtitle:"Select base layout"}),e("div",fo,[e("div",Vo,[o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,null,{default:l(()=>[o(p,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=z=>i.value=z),options:a},null,8,["modelValue"])]),_:1})]),_:1}),o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,null,{default:l(()=>[o(p,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=z=>t.value=z),options:a,rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",xo,[o(s,{shape:"squared",muted:""},{default:l(()=>[e("div",$o,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[wo]),_:1}),e("p",Co,"value: "+f(i.value),1)]),e("div",null,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[yo]),_:1}),e("p",Fo,"value: "+f(t.value),1)])]),_:1})])])]),o(r,null,{code:l(()=>[o(V,{language:"html",code:h(ie)},null,8,["code"])]),props:l(()=>[o(V,{language:"javascript",code:h(A)},null,8,["code"])]),sample:l(()=>[ko]),usage:l(()=>[To]),_:1})])]),_:1})]),_:1})}}}),Uo={class:"mx-auto max-w-6"},So={class:"pt-4 pb-6"},Io={class:"is-flex d-column-mobile pt-4"},Lo={class:"w-full max-w-1/2 max-w-mobile"},zo={class:"w-full max-w-1/2 max-w-mobile p-4"},Do={class:"mb-4"},Bo=e("span",null,"First",-1),Po={class:"paragraph rem-90"},Ro=e("span",null,"Second",-1),jo={class:"paragraph rem-90"},No=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),qo=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk selects are made of 4 different components: "),e("code",null,"<Field />"),d(" , "),e("code",null,"<FieldLabel />"),d(" , "),e("code",null,"<Control />"),d(" and "),e("code",null,"<VSelect />"),d(" . ")],-1),Eo=C({__name:"SelectIcon",setup(b){const a=[{value:"United States",label:"United States"},{value:"Canada",label:"Canada"},{value:"France",label:"France"}],i=$(),t=$();return(c,n)=>{const _=F,u=P,p=Y,v=B,m=D,g=I,s=L,V=U,r=S,y=T,x=O;return w(),k(x,{id:"select-icon-demo","bordered-bottom":""},{default:l(()=>[o(y,null,{default:l(()=>[e("div",Uo,[e("div",So,[o(_,{title:"Icon",subtitle:"Select icon layout"}),e("div",Io,[e("div",Lo,[o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,{icon:"feather:globe"},{default:l(()=>[o(p,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=z=>i.value=z),options:a},null,8,["modelValue"])]),_:1})]),_:1}),o(m,null,{default:l(()=>[o(u,{label:"Choose an option"}),o(v,{icon:"feather:globe"},{default:l(()=>[o(p,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=z=>t.value=z),options:a,rounded:""},null,8,["modelValue"])]),_:1})]),_:1})]),e("div",zo,[o(s,{shape:"squared",muted:""},{default:l(()=>[e("div",Do,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Bo]),_:1}),e("p",Po,"value: "+f(i.value),1)]),e("div",null,[o(g,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Ro]),_:1}),e("p",jo,"value: "+f(t.value),1)])]),_:1})])])]),o(r,null,{code:l(()=>[o(V,{language:"html",code:h(ue)},null,8,["code"])]),props:l(()=>[o(V,{language:"javascript",code:h(A)},null,8,["code"])]),sample:l(()=>[No]),usage:l(()=>[qo]),_:1})])]),_:1})]),_:1})}}}),Yo={class:"mx-auto max-w-6"},Ho={class:"pt-4 pb-6"},Ao={class:"columns"},Wo={class:"column pt-4"},Mo=e("div",{class:"py-2"},null,-1),Jo=e("div",{class:"py-2"},null,-1),Go=e("div",{class:"py-2"},null,-1),Xo=e("div",{class:"py-2"},null,-1),Ko=e("div",{class:"py-2"},null,-1),Qo={class:"column pt-4"},Zo=e("div",{class:"py-2"},null,-1),el=e("div",{class:"py-2"},null,-1),ol=e("div",{class:"py-2"},null,-1),ll=e("div",{class:"py-2"},null,-1),al=e("div",{class:"py-2"},null,-1),tl={class:"column is-5 pt-4"},nl={class:"mb-4"},sl=e("span",null,"Checkboxes",-1),dl={class:"paragraph rem-90"},il=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ul=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk checkboxes ship with a clean and modern style. You can control the checkbox colors by using the "),e("code",null,"color"),d(" prop. You can make a rounded checkbox using the "),e("code",null,"rounded"),d(" prop. The "),e("code",null,"name"),d(" prop is required. ")],-1),cl=C({__name:"CheckboxBase",setup(b){const a=$(["Option 2"]);return(i,t)=>{const c=F,n=ee,_=I,u=L,p=U,v=S,m=T,g=O;return w(),k(g,{id:"checkbox-base-demo","bordered-bottom":""},{default:l(()=>[o(m,null,{default:l(()=>[e("div",Yo,[e("div",Ho,[o(c,{title:"Checkbox",subtitle:"Checkbox base layout"}),e("div",Ao,[e("div",Wo,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),name:"checkbox-default-1",label:"Option 0",color:"default",value:"Option 0"},null,8,["modelValue"]),Mo,o(n,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),name:"checkbox-1",label:"Option 1",value:"Option 1"},null,8,["modelValue"]),Jo,o(n,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value=s),name:"checkbox-2",label:"Option 2",color:"success",value:"Option 2"},null,8,["modelValue"]),Go,o(n,{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value=s),name:"checkbox-3",label:"Option 3",color:"info",value:"Option 3"},null,8,["modelValue"]),Xo,o(n,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value=s),name:"checkbox-4",label:"Option 4",color:"warning",value:"Option 4"},null,8,["modelValue"]),Ko,o(n,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value=s),name:"checkbox-5",label:"Option 5",color:"danger",value:"Option 5"},null,8,["modelValue"])]),e("div",Qo,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[6]||(t[6]=s=>a.value=s),name:"checkbox-default-2",label:"Option 6",color:"default",rounded:"",value:"Option 6"},null,8,["modelValue"]),Zo,o(n,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=s=>a.value=s),name:"checkbox-6",label:"Option 7",rounded:"",value:"Option 7"},null,8,["modelValue"]),el,o(n,{modelValue:a.value,"onUpdate:modelValue":t[8]||(t[8]=s=>a.value=s),name:"checkbox-7",label:"Option 8",color:"success",rounded:"",value:"Option 8"},null,8,["modelValue"]),ol,o(n,{modelValue:a.value,"onUpdate:modelValue":t[9]||(t[9]=s=>a.value=s),name:"checkbox-8",label:"Option 9",color:"info",rounded:"",value:"Option 9"},null,8,["modelValue"]),ll,o(n,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=s=>a.value=s),name:"checkbox-9",label:"Option 10",color:"warning",rounded:"",value:"Option 10"},null,8,["modelValue"]),al,o(n,{modelValue:a.value,"onUpdate:modelValue":t[11]||(t[11]=s=>a.value=s),name:"checkbox-10",label:"Option 11",color:"danger",rounded:"",value:"Option 11"},null,8,["modelValue"])]),e("div",tl,[o(u,{shape:"squared",muted:""},{default:l(()=>[e("div",nl,[o(_,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[sl]),_:1}),e("p",dl,"Selected: "+f(a.value),1)])]),_:1})])])]),o(v,null,{code:l(()=>[o(p,{language:"html",code:h(re)},null,8,["code"])]),props:l(()=>[o(p,{language:"javascript",code:h(ce)},null,8,["code"])]),sample:l(()=>[il]),usage:l(()=>[ul]),_:1})])]),_:1})]),_:1})}}}),W=b=>(K("data-v-ce742bb3"),b=b(),Q(),b),rl=["for"],pl={class:"radio-inner"},ml=["id","name","checked","value"],_l=W(()=>e("i",{class:"iconify rem-50","data-icon":"feather:circle"},null,-1)),vl=W(()=>e("span",{class:"inner-overlay"},null,-1)),gl={key:0,class:"radio-label"},hl=C({__name:"Radio",props:{name:null,group:null,color:{default:"primary"},value:null,modelValue:{default:void 0},disabled:{type:Boolean,default:!1},rounded:{type:Boolean},label:{default:void 0}},emits:["update:modelValue"],setup(b,{emit:a}){const i=b,t=q(()=>i.value===i.modelValue);function c(){a("update:modelValue",i.value)}const n=q(()=>[i.color&&`is-${i.color}`]);return(_,u)=>(w(),R("div",{class:X(["radio",h(n)])},[e("label",{for:`radio-${i.group}`,class:"radio-inner-wrap"},[e("span",pl,[e("input",{id:`radio-${i.group}`,name:i.name,checked:h(t),value:i.value,type:"radio",onChange:c},null,40,ml),_l,vl]),i.label?(w(),R("span",gl,f(i.label),1)):G("",!0)],8,rl)],2))}});const bl=Z(hl,[["__scopeId","data-v-ce742bb3"]]),fl={class:"mx-auto max-w-6"},Vl={class:"pt-4 pb-6"},xl={class:"columns"},$l={class:"column is-8 pt-4"},wl={class:"is-flex pt-4"},Cl={class:"mr-4"},yl={class:"mr-4"},Fl={class:"mr-4"},kl={class:"is-flex pt-4"},Tl={class:"mr-4"},Ol={class:"mr-4"},Ul={class:"mr-4"},Sl={class:"is-flex pt-4"},Il={class:"mr-4"},Ll={class:"mr-4"},zl={class:"mr-4"},Dl={class:"mr-4"},Bl={class:"column pt-4"},Pl={class:"mb-4"},Rl=e("span",null,"Radios 1",-1),jl={class:"paragraph rem-90"},Nl={class:"mb-4"},ql=e("span",null,"Radios 2",-1),El={class:"paragraph rem-90"},Yl={class:"mb-4"},Hl=e("span",null,"Radios 3",-1),Al={class:"paragraph rem-90"},Wl=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ml=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk radio buttons ship with a clean and modern style. You can control the radio colors by using the "),e("code",null,"color"),d(" prop. "),e("code",null,"name"),d(" and "),e("code",null,"group"),d(" props are required. ")],-1),Jl=C({__name:"RadioBase",setup(b){const a=$("value_2"),i=$("value_3"),t=$("value_1");return(c,n)=>{const _=F,u=bl,p=I,v=L,m=U,g=S,s=T,V=O;return w(),k(V,{id:"radio-base-demo","bordered-bottom":""},{default:l(()=>[o(s,null,{default:l(()=>[e("div",fl,[e("div",Vl,[o(_,{title:"Radio",subtitle:"Radio base layout"}),e("div",xl,[e("div",$l,[e("div",wl,[e("div",Cl,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),value:"value_1",name:"radio_first",label:"Choice 1",group:"radio-group-1",color:"default"},null,8,["modelValue"])]),e("div",yl,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=r=>a.value=r),value:"value_2",name:"radio_first",label:"Choice 2",group:"radio-group-2",color:"default"},null,8,["modelValue"])]),e("div",Fl,[o(u,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=r=>a.value=r),value:"value_3",name:"radio_first",label:"Choice 3",group:"radio-group-3",color:"default"},null,8,["modelValue"])])]),e("div",kl,[e("div",Tl,[o(u,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=r=>i.value=r),value:"value_1",name:"radio_second",label:"Choice 1",group:"radio-group-4",color:"primary"},null,8,["modelValue"])]),e("div",Ol,[o(u,{modelValue:i.value,"onUpdate:modelValue":n[4]||(n[4]=r=>i.value=r),value:"value_2",name:"radio_second",label:"Choice 2",group:"radio-group-5",color:"primary"},null,8,["modelValue"])]),e("div",Ul,[o(u,{modelValue:i.value,"onUpdate:modelValue":n[5]||(n[5]=r=>i.value=r),value:"value_3",name:"radio_second",label:"Choice 3",group:"radio-group-6",color:"primary"},null,8,["modelValue"])])]),e("div",Sl,[e("div",Il,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[6]||(n[6]=r=>t.value=r),value:"value_1",name:"radio_third",label:"Choice 1",group:"radio-group-7",color:"success"},null,8,["modelValue"])]),e("div",Ll,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[7]||(n[7]=r=>t.value=r),value:"value_2",name:"radio_third",label:"Choice 2",group:"radio-group-8",color:"info"},null,8,["modelValue"])]),e("div",zl,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[8]||(n[8]=r=>t.value=r),value:"value_3",name:"radio_third",label:"Choice 3",group:"radio-group-9",color:"warning"},null,8,["modelValue"])]),e("div",Dl,[o(u,{modelValue:t.value,"onUpdate:modelValue":n[9]||(n[9]=r=>t.value=r),value:"value_4",name:"radio_third",label:"Choice 4",group:"radio-group-10",color:"danger"},null,8,["modelValue"])])])]),e("div",Bl,[o(v,{shape:"squared",muted:""},{default:l(()=>[e("div",Pl,[o(p,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Rl]),_:1}),e("p",jl,"Selected: "+f(a.value),1)]),e("div",Nl,[o(p,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[ql]),_:1}),e("p",El,"selected: "+f(i.value),1)]),e("div",Yl,[o(p,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[Hl]),_:1}),e("p",Al,"selected: "+f(t.value),1)])]),_:1})])])]),o(g,null,{code:l(()=>[o(m,{language:"html",code:h(me)},null,8,["code"])]),props:l(()=>[o(m,{language:"javascript",code:h(pe)},null,8,["code"])]),sample:l(()=>[Wl]),usage:l(()=>[Ml]),_:1})])]),_:1})]),_:1})}}}),Gl={class:"mx-auto max-w-6"},Xl={class:"pt-4 pb-6"},Kl={class:"columns"},Ql={class:"column pt-4"},Zl={class:"is-block"},ea={class:"py-4"},oa={class:"py-4"},la={class:"py-4"},aa={class:"py-4"},ta={class:"py-4"},na={class:"py-4"},sa={class:"column pt-4"},da={class:"is-block"},ia={class:"py-4"},ua={class:"py-4"},ca={class:"py-4"},ra={class:"py-4"},pa={class:"py-4"},ma={class:"py-4"},_a={class:"column is-5 pt-4"},va={class:"mb-4"},ga=e("span",null,"Toggles",-1),ha={class:"paragraph rem-90"},ba=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),fa=e("p",{class:"paragraph rem-95"},[d(" Form elements are at the center of every web application. Vulk form controls are very versatile and support a wide variety of usage. Vulk ships with a custom toggle component that can have 2 different flavors. Use the "),e("code",null,"flavor"),d(" prop to alternate between "),e("code",null,"thin"),d(" and "),e("code",null,"swicth"),d(" modes. Use the "),e("code",null,"color"),d(" prop to change the color. You can also show some icons using the "),e("code",null,"icon"),d(" prop. ")],-1),Va=C({__name:"ToggleBase",setup(b){const a=$(["Option 2","Option 9"]);return(i,t)=>{const c=F,n=oe,_=I,u=L,p=U,v=S,m=T,g=O;return w(),k(g,{id:"toggle-base-demo","bordered-bottom":""},{default:l(()=>[o(m,null,{default:l(()=>[e("div",Gl,[e("div",Xl,[o(c,{title:"Custom Toggle",subtitle:"Toggle checkbox variations"}),e("div",Kl,[e("div",Ql,[e("div",Zl,[e("div",ea,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),name:"demo-toggle-1",value:"Option 0"},null,8,["modelValue"])]),e("div",oa,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),name:"demo-toggle-2",icon:"",value:"Option 1"},null,8,["modelValue"])]),e("div",la,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value=s),name:"demo-toggle-3",icon:"",color:"success",value:"Option 2"},null,8,["modelValue"])]),e("div",aa,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value=s),name:"demo-toggle-4",icon:"",color:"info",value:"Option 3"},null,8,["modelValue"])]),e("div",ta,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value=s),name:"demo-toggle-5",icon:"",color:"warning",value:"Option 4"},null,8,["modelValue"])]),e("div",na,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value=s),name:"demo-toggle-6",icon:"",color:"danger",value:"Option 5"},null,8,["modelValue"])])])]),e("div",sa,[e("div",da,[e("div",ia,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[6]||(t[6]=s=>a.value=s),name:"demo-toggle-7",flavor:"switch",value:"Option 6"},null,8,["modelValue"])]),e("div",ua,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=s=>a.value=s),name:"demo-toggle-8",icon:"",flavor:"switch",value:"Option 7"},null,8,["modelValue"])]),e("div",ca,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[8]||(t[8]=s=>a.value=s),name:"demo-toggle-9",icon:"",flavor:"switch",color:"success",value:"Option 8"},null,8,["modelValue"])]),e("div",ra,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[9]||(t[9]=s=>a.value=s),name:"demo-toggle-10",icon:"",flavor:"switch",color:"info",value:"Option 9"},null,8,["modelValue"])]),e("div",pa,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=s=>a.value=s),name:"demo-toggle-11",icon:"",flavor:"switch",color:"warning",value:"Option 10"},null,8,["modelValue"])]),e("div",ma,[o(n,{modelValue:a.value,"onUpdate:modelValue":t[11]||(t[11]=s=>a.value=s),name:"demo-toggle-12",icon:"",flavor:"switch",color:"danger",value:"Option 11"},null,8,["modelValue"])])])]),e("div",_a,[o(u,{shape:"squared",muted:""},{default:l(()=>[e("div",va,[o(_,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[ga]),_:1}),e("p",ha,"active: "+f(a.value),1)])]),_:1})])])]),o(v,null,{code:l(()=>[o(p,{language:"html",code:h(ve)},null,8,["code"])]),props:l(()=>[o(p,{language:"javascript",code:h(_e)},null,8,["code"])]),sample:l(()=>[ba]),usage:l(()=>[fa]),_:1})])]),_:1})]),_:1})}}}),Ba=C({__name:"forms",setup(b){const a=[{label:"Input",target:"input-base-demo"},{label:"Icons",target:"input-icon-demo"},{label:"Validation",target:"input-validation-demo"},{label:"Textarea",target:"textarea-base-demo"},{label:"Resize",target:"textarea-resize-demo"},{label:"Select",target:"select-base-demo"},{label:"Icon",target:"select-icon-demo"},{label:"Checkbox",target:"checkbox-base-demo"},{label:"Radio",target:"radio-base-demo"},{label:"Toggle",target:"toggle-base-demo"}];return(i,t)=>{const c=J,n=M;return w(),R("div",null,[o(c,{title:"Form Components",subtitle:"Forms are a central part of every web and mobile application. They help users interact with your app. Explore Vulk forms."}),o(n,{links:a,width:"840px"}),o(Te),o(qe),o(Me),o(to),o(go),o(Oo),o(Eo),o(cl),o(Jl),o(Va),o(le)])}}});export{Ba as default};
