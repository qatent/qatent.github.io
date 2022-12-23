import{b as f,x as v,y as u,o as g,h as m,f as i,bD as d,bk as l,bh as p,bB as x,t as c,i as w,bj as y}from"./index.d17d1dd6.js";var b=f({name:"Lightbox",components:{},props:{images:{type:Array,required:!0},filter:{type:String,default:"all"},directory:{type:String,default:""},timeoutDuration:{type:Number,default:3e3},closeOnBackdropClick:{type:Boolean,default:!1},currentImageName:{type:String,default:""}},data(){return{visible:!1,controlsVisible:!0,index:0,timer:null,slideTransitionName:"lightbox-slide-next"}},mounted(){window.addEventListener("keydown",this.keyEventListener),window.addEventListener("mousemove",this.mouseEventListener),window.addEventListener("mouseup",this.mouseEventListener)},unmounted(){window.removeEventListener("keydown",this.keyEventListener),window.removeEventListener("mousemove",this.mouseEventListener),window.removeEventListener("mouseup",this.mouseEventListener)},watch:{currentImageName(e){e&&this.show(e)}},computed:{filteredImages(){return this.filter==="all"||!this.filter.length?this.images:this.images.filter(e=>e.filter===this.filter)}},methods:{lightboxClick(e){if(this.closeOnBackdropClick){let t=e.target,o=t.clientWidth,a=t.clientHeight,n=new Image;n.src=this.directory+this.filteredImages[this.index].name;let h=n.width/n.height*a,s=n.height/n.width*o;e.clientX<(o-h)/2||e.clientX>(o+h)/2?this.hide():(e.clientY<(a-s)/2||e.clientY>(a+s)/2)&&this.hide()}},show(e){let t=this.filteredImages.findIndex(o=>o.name===e);t>-1&&(this.visible=!0,this.controlsVisible=!0,this.index=t,this.restartCaptionTimer(),this.preloadNextImage())},hide(){this.visible=!1,this.index=0,this.$emit("onLightboxClose",""),clearTimeout(this.timer)},has_next(){return this.index+1<this.filteredImages.length},has_prev(){return this.index>0},prev(){this.has_prev()&&(this.slideTransitionName="lightbox-slide-prev",this.index-=1,this.$emit("onLightboxChange",this.getCurrentImage()))},next(){this.has_next()&&(this.slideTransitionName="lightbox-slide-next",this.index+=1,this.$emit("onLightboxChange",this.getCurrentImage()),this.preloadNextImage())},getCurrentImage(){return this.index>=0&&this.index<this.filteredImages.length?this.filteredImages[this.index]:{name:"",alt:"",filter:"",id:""}},keyEventListener(e){if(this.visible)switch(this.controlsVisible=!0,this.restartCaptionTimer(),e.key){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"ArrowDown":case"ArrowUp":case" ":e.preventDefault();break;case"Escape":this.hide();break}},mouseEventListener(e){this.visible&&(this.controlsVisible=!0,this.restartCaptionTimer())},preloadNextImage(){if(this.has_next())try{let e=new Image;e.src=this.directory+this.filteredImages[this.index+1].name}catch{}},restartCaptionTimer(){clearTimeout(this.timer),this.timer=setTimeout(()=>this.controlsVisible=!1,this.timeoutDuration)}}});const r=y();v("data-v-21966ddd");const k={class:"lightbox-arrow-left-icon"},I=i("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[i("circle",{cx:"12",cy:"12",r:"12",fill:"rgba(20, 20, 20, 0.4)"}),i("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z",fill:"white"}),i("path",{d:"M0-.5h24v24H0z",fill:"none"})],-1),C={class:"lightbox-arrow-right-icon"},L=i("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[i("circle",{cx:"12",cy:"12",r:"12",fill:"rgba(20, 20, 20, 0.4)"}),i("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z",fill:"white"}),i("path",{d:"M0-.25h24v24H0z",fill:"none"})],-1),E={unselectable:"on"};u();const T=r((e,t,o,a,n,h)=>(g(),m("div",null,[i(l,{name:"lightbox-fade"},{default:r(()=>[e.visible?(g(),m("div",{key:0,class:"lightbox",onMousedown:t[7]||(t[7]=d((...s)=>e.hide&&e.hide(...s),["stop"]))},[i("div",{class:"lightbox-close",onMousedown:t[1]||(t[1]=d((...s)=>e.hide&&e.hide(...s),["stop"]))},"\xD7",32),i("div",{class:"lightbox-arrow lightbox-arrow-left",onMousedown:t[2]||(t[2]=d((...s)=>e.prev&&e.prev(...s),["stop","prevent"]))},[i(l,{name:"lightbox-fade"},{default:r(()=>[p(i("div",k,[I],512),[[x,e.has_prev()&&e.controlsVisible]])]),_:1})],32),i("div",{class:"lightbox-arrow lightbox-arrow-right",onMousedown:t[3]||(t[3]=d((...s)=>e.next&&e.next(...s),["stop","prevent"]))},[i(l,{name:"lightbox-fade"},{default:r(()=>[p(i("div",C,[L],512),[[x,e.has_next()&&e.controlsVisible]])]),_:1})],32),i(l,{name:"lightbox-fade"},{default:r(()=>[p(i("div",{class:"lightbox-caption",onMousedown:t[4]||(t[4]=d(()=>{},["stop"]))},[i("span",E,c(e.filteredImages[e.index].alt),1)],544),[[x,e.controlsVisible&&e.filteredImages[e.index].alt]])]),_:1}),i("div",{class:"lightbox-main",onMousedown:t[6]||(t[6]=d((...s)=>e.hide&&e.hide(...s),["stop"]))},[i("div",{class:"lightbox-image-container",onMousedown:t[5]||(t[5]=d((...s)=>e.lightboxClick&&e.lightboxClick(...s),["stop"]))},[i(l,{name:e.slideTransitionName,mode:"out-in"},{default:r(()=>[(g(),m("div",{class:"lightbox-image",key:e.index,style:{backgroundImage:"url("+e.directory+e.filteredImages[e.index].name+")"}},null,4))]),_:1},8,["name"])],32)],32)],32)):w("",!0)]),_:1})])));function N(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var X=`
.lightbox[data-v-21966ddd] {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    color: rgba(255, 255, 255, 0.8);
}
.lightbox-close[data-v-21966ddd] {
    position: fixed;
    z-index: 210;
    right: 0;
    top: 0;
    padding: 1rem;
    font-size: 1.7rem;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    color: white;
}
.lightbox-main[data-v-21966ddd] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 100%;
}
.lightbox-arrow[data-v-21966ddd] {
    padding: 0 2rem;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0 2rem;
    height: 100%;
    width: 2rem;
    z-index: 100;
}
.lightbox-arrow-right[data-v-21966ddd] {
    right: 0;
}
.lightbox-arrow-left[data-v-21966ddd] {
    left: 0;
}
.lightbox-image-container[data-v-21966ddd] {
    -webkit-box-flex: 1;
    width: 20%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.lightbox-image[data-v-21966ddd] {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}
.lightbox-caption[data-v-21966ddd] {
    position: absolute;
    bottom: 15px;
    width: 100%;
    z-index: 100;
    text-align: center;
    text-shadow: 1px 1px 3px rgb(26, 26, 26);
}
.lightbox-caption span[data-v-21966ddd] {
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.lightbox-slide-next-enter-active[data-v-21966ddd],
.lightbox-slide-next-leave-active[data-v-21966ddd],
.lightbox-slide-prev-enter-active[data-v-21966ddd],
.lightbox-slide-prev-leave-active[data-v-21966ddd] {
    transition: all 0.4s ease;
}
.lightbox-slide-next-enter[data-v-21966ddd] {
    -webkit-transform: translateX(100px);
    -ms-transform: translateX(100px);
    transform: translateX(100px);
    opacity: 0;
}
.lightbox-slide-next-leave-to[data-v-21966ddd] {
    -webkit-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
}
.lightbox-slide-prev-enter[data-v-21966ddd] {
    -webkit-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
}
.lightbox-slide-prev-leave-to[data-v-21966ddd] {
    -webkit-transform: translateX(100px);
    -ms-transform: translateX(100px);
    transform: translateX(100px);
    opacity: 0;
}
.lightbox-fade-enter-active[data-v-21966ddd],
.lightbox-fade-leave-active[data-v-21966ddd] {
    transition: all 0.4s ease;
}
.lightbox-fade-enter[data-v-21966ddd],
.lightbox-fade-leave-to[data-v-21966ddd] {
    opacity: 0;
}
`;N(X);b.render=T;b.__scopeId="data-v-21966ddd";var M=(()=>{const e=b;return e.install=t=>{t.component("Lightbox",e)},e})();export{M as e};
