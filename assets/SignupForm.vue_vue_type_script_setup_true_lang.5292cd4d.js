import{b as u,X as d,o as i,e as f,j as r,f as e,w as o,l as h,v as g}from"./index.4498c4e2.js";import{_ as b}from"./Checkbox.c0b63bab.js";import{_ as w}from"./Field.e9551eba.js";import{_ as v,a as V}from"./VInput.3620f742.js";import{_ as k}from"./FieldLabel.14888c46.js";const x={class:"login-form"},y={class:"setting-item"},I=u({__name:"SignupForm",setup(B){const s=d([""]);return(C,_)=>{const t=k,a=v,n=V,l=w,p=b,c=g;return i(),f("form",null,[r("div",x,[e(l,null,{default:o(()=>[e(t,{label:"Email"}),e(n,{icon:"feather:mail"},{default:o(()=>[e(a,{placeholder:"Email address..."})]),_:1})]),_:1}),e(l,null,{default:o(()=>[e(t,{label:"Password"}),e(n,{icon:"feather:lock"},{default:o(()=>[e(a,{type:"password",placeholder:"Password..."})]),_:1})]),_:1}),e(l,null,{default:o(()=>[e(t,{label:"Repeat Password"}),e(n,{icon:"feather:lock"},{default:o(()=>[e(a,{type:"password",placeholder:"Repeat password..."})]),_:1})]),_:1}),r("div",y,[e(p,{modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=m=>s.value=m),color:"primary",name:"checkbox-1",label:"I have read the Terms of Service",value:"terms"},null,8,["modelValue"])]),e(n,{class:"mt-4"},{default:o(()=>[e(c,{color:"primary",fullwidth:"",bold:"",raised:""},{default:o(()=>[h("Sign Up")]),_:1})]),_:1})])])}}});export{I as _};
