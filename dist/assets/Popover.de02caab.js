import{b as c,g as p,o as d,h as u,w as a,f,ao as _,k as t,n as m,u as s,a7 as i,aw as v,c0 as y,A as g}from"./index.d17d1dd6.js";import{e as h}from"./popper.esm.d22b517c.js";const w=c({__name:"Popover",props:{content:{default:void 0},placement:{default:"top"},spacing:{default:"medium"},arrow:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},color:{default:"default"},offsetDistance:{default:12},openDelay:{default:0},closeDelay:{default:0}},setup(n){const e=n,r=p(()=>[e.color&&!e.custom&&`popover-${e.color}`,e.spacing&&`popover-spacing-${e.spacing}`]);return(o,$)=>{const l=y;return d(),u(l,i(v(o.$attrs)),{default:a(()=>[f(s(h),{placement:e.placement,arrow:e.arrow,hover:e.hover,content:e.content,class:m(s(r))},_({default:a(()=>[t(o.$slots,"default",{},void 0,!0)]),_:2},[e.custom?{name:"content",fn:a(()=>[t(o.$slots,"popover",{},void 0,!0)]),key:"0"}:void 0]),1032,["placement","arrow","hover","content","class"])]),_:3},16)}}});const k=g(w,[["__scopeId","data-v-dbc0d1ea"]]);export{k as _};
