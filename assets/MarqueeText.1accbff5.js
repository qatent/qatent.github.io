import{b as o,bu as d,ax as n,A as u}from"./index.4498c4e2.js";const _=o({name:"MarqueeText",props:{duration:{type:Number,default:15},repeat:{type:Number,default:2},paused:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=d();return()=>{var s;return n("div",{class:[t.wrap]},[n("div",{class:[e.paused?t.paused:void 0,t.content]},Array(e.repeat).fill(n("div",{class:t.text,style:{animationDuration:`${e.duration}s`,animationDirection:e.reverse?"reverse":void 0}},(s=a.default)==null?void 0:s.call(a))))])}}}),i="_wrap_11dt7_2",r="_content_11dt7_6",c="_text_11dt7_10",p="_animation_11dt7_1",l="_paused_11dt7_17",m={wrap:i,content:r,text:c,animation:p,paused:l},f={$style:m},v=u(_,[["__cssModules",f]]);export{v as _};