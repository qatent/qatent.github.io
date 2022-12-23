import{_ as L}from"./FooterD.f746d5f2.js";import{b as f,r as S,o as t,h as $,w as l,j as e,f as n,l as b,e as _,m as p,t as c,F as m,bV as x,x as y,y as P,A as j,C,u as k,s as R,E as V,G as A}from"./index.d17d1dd6.js";import{p as B,c as N,d as D,e as F,_ as q,a as T}from"./index.39854cc2.js";import"./Field.c654973d.js";import"./VInput.05d9ddc1.js";import"./AvatarSimple.100281ad.js";const G=o=>(y("data-v-b1cac344"),o=o(),P(),o),H={class:"education-card-head"},W=G(()=>e("h3",null,"Education",-1)),z={class:"education-card-body"},J={class:"educations"},K=["src"],M={class:"meta"},O=f({__name:"ProfileEducation",props:{education:null},setup(o){const r=o;return(h,d)=>{const i=S("RouterLink"),u=x;return t(),$(u,{class:"education-card"},{default:l(()=>[e("div",H,[W,n(i,{to:"/profile"},{default:l(()=>[b("View All")]),_:1})]),e("div",z,[e("div",J,[(t(!0),_(m,null,p(r.education,(s,a)=>(t(),_("div",{key:a,class:"education"},[e("img",{src:s.school.logo,alt:""},null,8,K),e("div",M,[e("h3",null,c(s.degree),1),e("span",null,c(s.school.name),1),e("span",null,c(s.duration),1),e("p",null,c(s.summary),1)])]))),128))])])]),_:1})}}});const Q=j(O,[["__scopeId","data-v-b1cac344"]]),U=o=>(y("data-v-0389f77f"),o=o(),P(),o),X={class:"experience-card-head"},Y=U(()=>e("h3",null,"Experience",-1)),Z={class:"experience-card-body"},ee={class:"experiences"},oe=["src"],se={class:"meta"},te=f({__name:"ProfileExperience",props:{experiences:null},setup(o){const r=o;return(h,d)=>{const i=S("RouterLink"),u=x;return t(),$(u,{class:"experience-card"},{default:l(()=>[e("div",X,[Y,n(i,{to:"/profile"},{default:l(()=>[b("View All")]),_:1})]),e("div",Z,[e("div",ee,[(t(!0),_(m,null,p(r.experiences,(s,a)=>(t(),_("div",{key:a,class:"experience"},[e("img",{src:s.company.logo,alt:"Company logo"},null,8,oe),e("div",se,[e("h3",null,c(s.role),1),e("span",null,[b(c(s.company.name)+" ",1),e("small",null,c(s.type),1)]),e("span",null,c(s.duration),1),e("p",null,c(s.summary),1)])]))),128))])])]),_:1})}}});const ne=j(te,[["__scopeId","data-v-0389f77f"]]),ce=o=>(y("data-v-bacb0710"),o=o(),P(),o),le={class:"skills-card-head"},_e=ce(()=>e("h3",null,"Tools & Skills",-1)),ie={class:"skills-card-body"},ae={class:"skills"},re={class:"columns b-columns-third-tablet-p"},ue={class:"skill-list"},de=["src"],pe=f({__name:"ProfileSkills",props:{skills:null},setup(o){const r=o;return(h,d)=>{const i=S("RouterLink"),u=x;return t(),$(u,{class:"skills-card"},{default:l(()=>[e("div",le,[_e,n(i,{to:"/profile"},{default:l(()=>[b("View All")]),_:1})]),e("div",ie,[e("div",ae,[e("div",re,[(t(!0),_(m,null,p(r.skills.slice(0,3),(s,a)=>(t(),_("div",{key:a,class:"column is-4"},[n(u,{class:"skill-box"},{default:l(()=>[e("h3",null,c(s.title),1),e("p",null,c(s.subtitle),1),e("div",ue,[(t(!0),_(m,null,p(s.skills.slice(0,3),(v,g)=>(t(),_("img",{key:g,src:v,alt:"Skill icon"},null,8,de))),128))])]),_:2},1024)]))),128))])])])]),_:1})}}});const me=j(pe,[["__scopeId","data-v-bacb0710"]]),fe=o=>(y("data-v-e5a14d00"),o=o(),P(),o),he={class:"projects-card-head"},ve=fe(()=>e("h3",null,"Projects",-1)),ge={class:"projects-card-body"},ke={class:"projects"},be={class:"columns b-columns-third-tablet-p"},$e={class:"project-members"},xe=["src"],ye=f({__name:"ProfileProjects",props:{projects:null},setup(o){const r=o;return(h,d)=>{const i=S("RouterLink"),u=C,s=x;return t(),$(s,{class:"projects-card"},{default:l(()=>[e("div",he,[ve,n(i,{to:"/profile/projects"},{default:l(()=>[b("View All")]),_:1})]),e("div",ge,[e("div",ke,[e("div",be,[(t(!0),_(m,null,p(r.projects.slice(0,3),(a,v)=>(t(),_("div",{key:v,class:"column is-4"},[n(i,{to:"/profile",class:"project"},{default:l(()=>[n(u,{src:a.image,alt:"Project image",width:"400",height:"300"},null,8,["src"]),e("h3",null,c(a.title),1),e("p",null,c(a.subtitle),1),e("div",$e,[(t(!0),_(m,null,p(a.members.slice(0,4),(g,I)=>(t(),_("img",{key:I,src:g,alt:"project user"},null,8,xe))),128))])]),_:2},1024)]))),128))])])])]),_:1})}}});const Pe=j(ye,[["__scopeId","data-v-e5a14d00"]]),je=o=>(y("data-v-53e9f91b"),o=o(),P(),o),Se=je(()=>e("div",{class:"bio-card-head"},[e("h3",null,"About")],-1)),Ie={class:"bio-card-body"},we=f({__name:"ProfileBio",props:{bio:null},setup(o){const r=o;return(h,d)=>{const i=x;return t(),$(i,{class:"bio-card"},{default:l(()=>[Se,e("div",Ie,[e("p",null,c(r.bio),1)])]),_:1})}}});const Ee=j(we,[["__scopeId","data-v-53e9f91b"]]),Ne=f({__name:"index",setup(o){return(r,h)=>{const d=q,i=Ee,u=Pe,s=me,a=ne,v=Q,g=T,I=V,w=A,E=L;return t(),_("div",null,[n(d,{active:"overview"}),n(w,{color:"grey"},{default:l(()=>[n(I,null,{default:l(()=>[n(g,null,{default:l(()=>[n(i,{bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paria sunt
        igitur. Eam tum adesse, cum dolor omnis absit; Suo genere perveniant ad
        extremum; Ita credo. Duo Reges: constructio interrete. Nihil opus est
        exemplis hoc facere longius.`}),n(u,{projects:k(B)},null,8,["projects"]),n(s,{skills:k(N)},null,8,["skills"]),n(a,{experiences:k(D)},null,8,["experiences"]),n(v,{education:k(F)},null,8,["education"])]),_:1})]),_:1})]),_:1}),n(E,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":k(R)},null,8,["social-links"])])}}});export{Ne as default};
