import{b as u,X as p,o as t,e as o,F as i,m as l,n as m,f as h,w as v,j as e,t as r,l as f,E as C,x as g,y,A as k}from"./index.d17d1dd6.js";const x=a=>(g("data-v-944205dc"),a=a(),y(),a),S={class:"testimonials-carousel-wrapper"},$=["id","src"],q={class:"columns"},w={class:"column is-6 is-offset-3"},I={class:"css-carousel"},T=x(()=>e("i",{class:"fa fa-quote-left"},null,-1)),b=["id","checked","onChange"],B={class:"slides"},N={class:"text"},V={class:"author"},E=["src"],F={class:"carousel-dots"},j=["id","for"],z=u({__name:"TestimonialsCarouselColor",props:{slides:null},setup(a){const c=a,d=p(0);return(A,D)=>{const _=C;return t(),o("div",S,[(t(!0),o(i,null,l(c.slides,(s,n)=>(t(),o("img",{id:`testimonial-cover-${s.id}`,key:n,class:m(["testimonials-cover",s.id===d.value?"is-active":""]),src:s.cover,alt:"Slide cover"},null,10,$))),128)),h(_,null,{default:v(()=>[e("div",q,[e("div",w,[e("div",I,[T,(t(!0),o(i,null,l(c.slides,(s,n)=>(t(),o("input",{id:`radio-${s.id}`,key:n,type:"radio",name:"slides",checked:s.id===0,onChange:L=>d.value=s.id},null,40,b))),128)),e("ul",B,[(t(!0),o(i,null,l(c.slides,(s,n)=>(t(),o("li",{key:n,class:"slide"},[e("p",null,[e("q",null,r(s.quote),1),e("span",N,r(s.subquote),1),e("span",V,[e("img",{src:s.picture,alt:"Testifier picture"},null,8,E),f(" "+r(s.name),1)])])]))),128))]),e("div",F,[(t(!0),o(i,null,l(c.slides,(s,n)=>(t(),o("label",{id:`dot-for-radio-${s.id}`,key:n,for:`radio-${s.id}`},null,8,j))),128))])])])])]),_:1})])}}});const G=k(z,[["__scopeId","data-v-944205dc"]]);export{G as _};