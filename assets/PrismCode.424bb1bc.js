import{b as re,X as pe,o as L,e as D,j as v,n as q,bD as T,bC as U,k as Z,i as W,x as se,y as ie,A as le,f as fe,w as he,l as ve,t as me,u as ye}from"./index.4498c4e2.js";import{r as be}from"./vue.runtime.esm-bundler.5e5a08c0.js";import{c as ne}from"./_commonjsHelpers.712cc82f.js";const z=h=>(se("data-v-82051041"),h=h(),ie(),h),Fe={class:"demo-tabs"},xe={class:"tabs is-boxed"},_e=z(()=>v("i",{class:"iconify rem-90","data-icon":"feather:code"},null,-1)),we=z(()=>v("span",{class:"ml-1"},"Code",-1)),Ae=[_e,we],ke=z(()=>v("span",null,"Props",-1)),$e=[ke],Se=z(()=>v("span",null,"Sample",-1)),Ee=[Se],Ce=z(()=>v("span",null,"Info",-1)),Te=[Ce],Ie={key:0,class:"tab-container"},Pe={key:1,class:"tab-container"},Le={key:2,class:"tab-container"},De={key:3,class:"tab-container"},Me=re({__name:"DemoTabs",setup(h){const d=pe("code");return(s,o)=>(L(),D("div",Fe,[v("div",xe,[v("ul",null,[v("li",{class:q(d.value==="code"?"is-active":"")},[v("a",{onClick:o[0]||(o[0]=T(g=>d.value="code",["prevent"])),onKeydown:o[1]||(o[1]=U(T(()=>d.value="code",["prevent"]),["space"]))},Ae,32)],2),v("li",{class:q(d.value==="props"?"is-active":"")},[v("a",{onClick:o[2]||(o[2]=T(g=>d.value="props",["prevent"])),onKeydown:o[3]||(o[3]=U(T(()=>d.value="props",["prevent"]),["space"]))},$e,32)],2),v("li",{class:q(d.value==="sample"?"is-active":"")},[v("a",{onClick:o[4]||(o[4]=T(g=>d.value="sample",["prevent"])),onKeydown:o[5]||(o[5]=U(T(()=>d.value="sample",["prevent"]),["space"]))},Ee,32)],2),v("li",{class:q(d.value==="usage"?"is-active":"")},[v("a",{onClick:o[6]||(o[6]=T(g=>d.value="usage",["prevent"])),onKeydown:o[7]||(o[7]=U(T(()=>d.value="usage",["prevent"]),["space"]))},Te,32)],2)])]),d.value==="code"?(L(),D("div",Ie,[Z(s.$slots,"code",{},void 0,!0)])):W("",!0),d.value==="props"?(L(),D("div",Pe,[Z(s.$slots,"props",{},void 0,!0)])):W("",!0),d.value==="sample"?(L(),D("div",Le,[Z(s.$slots,"sample",{},void 0,!0)])):W("",!0),d.value==="usage"?(L(),D("div",De,[Z(s.$slots,"usage",{},void 0,!0)])):W("",!0)]))}});const Ke=le(Me,[["__scopeId","data-v-82051041"]]);var ue={exports:{}};(function(h){var d=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var s=function(o){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,F=0,w={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof b?new b(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++F}),a.__id},clone:function a(e,t){t=t||{};var n,r;switch(i.util.type(e)){case"Object":if(r=i.util.objId(e),t[r])return t[r];n={},t[r]=n;for(var u in e)e.hasOwnProperty(u)&&(n[u]=a(e[u],t));return n;case"Array":return r=i.util.objId(e),t[r]?t[r]:(n=[],t[r]=n,e.forEach(function(c,l){n[l]=a(c,t)}),n);default:return e}},getLanguage:function(a){for(;a;){var e=g.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(g,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var n="no-"+e;a;){var r=a.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;a=a.parentElement}return!!t}},languages:{plain:w,plaintext:w,text:w,txt:w,extend:function(a,e){var t=i.util.clone(i.languages[a]);for(var n in e)t[n]=e[n];return t},insertBefore:function(a,e,t,n){n=n||i.languages;var r=n[a],u={};for(var c in r)if(r.hasOwnProperty(c)){if(c==e)for(var l in t)t.hasOwnProperty(l)&&(u[l]=t[l]);t.hasOwnProperty(c)||(u[c]=r[c])}var f=n[a];return n[a]=u,i.languages.DFS(i.languages,function(x,E){E===f&&x!=a&&(this[x]=u)}),u},DFS:function a(e,t,n,r){r=r||{};var u=i.util.objId;for(var c in e)if(e.hasOwnProperty(c)){t.call(e,c,e[c],n||c);var l=e[c],f=i.util.type(l);f==="Object"&&!r[u(l)]?(r[u(l)]=!0,a(l,t,null,r)):f==="Array"&&!r[u(l)]&&(r[u(l)]=!0,a(l,t,c,r))}}},plugins:{},highlightAll:function(a,e){i.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var n={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var r=0,u;u=n.elements[r++];)i.highlightElement(u,e===!0,n.callback)},highlightElement:function(a,e,t){var n=i.util.getLanguage(a),r=i.languages[n];i.util.setLanguage(a,n);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(u,n);var c=a.textContent,l={element:a,language:n,grammar:r,code:c};function f(E){l.highlightedCode=E,i.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,i.hooks.run("after-highlight",l),i.hooks.run("complete",l),t&&t.call(l.element)}if(i.hooks.run("before-sanity-check",l),u=l.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code){i.hooks.run("complete",l),t&&t.call(l.element);return}if(i.hooks.run("before-highlight",l),!l.grammar){f(i.util.encode(l.code));return}if(e&&o.Worker){var x=new Worker(i.filename);x.onmessage=function(E){f(E.data)},x.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else f(i.highlight(l.code,l.grammar,l.language))},highlight:function(a,e,t){var n={code:a,grammar:e,language:t};if(i.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),b.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var r=new M;return I(r,r.head,a),S(a,r,e,r.head,0),O(r)},hooks:{all:{},add:function(a,e){var t=i.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=i.hooks.all[a];if(!(!t||!t.length))for(var n=0,r;r=t[n++];)r(e)}},Token:b};o.Prism=i;function b(a,e,t,n){this.type=a,this.content=e,this.alias=t,this.length=(n||"").length|0}b.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=a(f,t)}),n}var r={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(r.classes,u):r.classes.push(u)),i.hooks.run("wrap",r);var c="";for(var l in r.attributes)c+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"};function $(a,e,t,n){a.lastIndex=e;var r=a.exec(t);if(r&&n&&r[1]){var u=r[1].length;r.index+=u,r[0]=r[0].slice(u)}return r}function S(a,e,t,n,r,u){for(var c in t)if(!(!t.hasOwnProperty(c)||!t[c])){var l=t[c];l=Array.isArray(l)?l:[l];for(var f=0;f<l.length;++f){if(u&&u.cause==c+","+f)return;var x=l[f],E=x.inside,Q=!!x.lookbehind,ee=!!x.greedy,oe=x.alias;if(ee&&!x.pattern.global){var ce=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,ce+"g")}for(var ae=x.pattern||x,_=n.next,k=r;_!==e.tail&&!(u&&k>=u.reach);k+=_.value.length,_=_.next){var P=_.value;if(e.length>a.length)return;if(!(P instanceof b)){var R=1,A;if(ee){if(A=$(ae,k,a,Q),!A||A.index>=a.length)break;var H=A.index,ge=A.index+A[0].length,C=k;for(C+=_.value.length;H>=C;)_=_.next,C+=_.value.length;if(C-=_.value.length,k=C,_.value instanceof b)continue;for(var j=_;j!==e.tail&&(C<ge||typeof j.value=="string");j=j.next)R++,C+=j.value.length;R--,P=a.slice(k,C),A.index-=k}else if(A=$(ae,0,P,Q),!A)continue;var H=A.index,B=A[0],V=P.slice(0,H),te=P.slice(H+B.length),X=k+P.length;u&&X>u.reach&&(u.reach=X);var G=_.prev;V&&(G=I(e,G,V),k+=V.length),N(e,G,R);var de=new b(c,E?i.tokenize(B,E):B,oe,B);if(_=I(e,G,de),te&&I(e,_,te),R>1){var Y={cause:c+","+f,reach:X};S(a,e,t,_.prev,k,Y),u&&Y.reach>u.reach&&(u.reach=Y.reach)}}}}}}function M(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function I(a,e,t){var n=e.next,r={value:t,prev:e,next:n};return e.next=r,n.prev=r,a.length++,r}function N(a,e,t){for(var n=e.next,r=0;r<t&&n!==a.tail;r++)n=n.next;e.next=n,n.prev=e,a.length-=r}function O(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,n=e.code,r=e.immediateClose;o.postMessage(i.highlight(n,i.languages[t],t)),r&&o.close()},!1)),i;var m=i.util.currentScript();m&&(i.filename=m.src,m.hasAttribute("data-manual")&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var y=document.readyState;y==="loading"||y==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(d);h.exports&&(h.exports=s),typeof ne<"u"&&(ne.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(g,F){var w={};w["language-"+F]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[F]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};i["language-"+F]={pattern:/[\s\S]+/,inside:s.languages[F]};var b={};b[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:i},s.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(o,g){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:s.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,function(o){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var F=o.languages.markup;F&&(F.tag.addInlined("style","css"),F.tag.addAttribute("style","css"))}(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",g=function(m,p){return"\u2716 Error "+m+" while fetching file: "+p},F="\u2716 Error: File does not exist or is empty",w={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",b="loading",$="loaded",S="failed",M="pre[data-src]:not(["+i+'="'+$+'"]):not(['+i+'="'+b+'"])';function I(m,p,y){var a=new XMLHttpRequest;a.open("GET",m,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?p(a.responseText):a.status>=400?y(g(a.status,a.statusText)):y(F))},a.send(null)}function N(m){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(p){var y=Number(p[1]),a=p[2],e=p[3];return a?e?[y,Number(e)]:[y,void 0]:[y,y]}}s.hooks.add("before-highlightall",function(m){m.selector+=", "+M}),s.hooks.add("before-sanity-check",function(m){var p=m.element;if(p.matches(M)){m.code="",p.setAttribute(i,b);var y=p.appendChild(document.createElement("CODE"));y.textContent=o;var a=p.getAttribute("data-src"),e=m.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=w[t]||t}s.util.setLanguage(y,e),s.util.setLanguage(p,e);var n=s.plugins.autoloader;n&&n.loadLanguages(e),I(a,function(r){p.setAttribute(i,$);var u=N(p.getAttribute("data-range"));if(u){var c=r.split(/\r\n?|\n/g),l=u[0],f=u[1]==null?c.length:u[1];l<0&&(l+=c.length),l=Math.max(0,Math.min(l-1,c.length)),f<0&&(f+=c.length),f=Math.max(0,Math.min(f,c.length)),r=c.slice(l,f).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(l+1))}y.textContent=r,s.highlightElement(y)},function(r){p.setAttribute(i,S),y.textContent=r})}}),s.plugins.fileHighlight={highlight:function(p){for(var y=(p||document).querySelectorAll(M),a=0,e;e=y[a++];)s.highlightElement(e)}};var O=!1;s.fileHighlight=function(){O||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),O=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ue);function je(h){return h&&typeof h=="object"&&"default"in h?h.default:h}var K=be,J=je(ue.exports),ze=K.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(d,s){var o=s.slots,g=s.attrs,F=o&&o.default&&o.default()||[],w=d.code||F&&F.length?F[0].children:"",i=d.inline,b=d.language,$=J.languages[b],S="language-".concat(b);return function(){return i?K.h("code",{class:[S],innerHTML:J.highlight(w,$)}):K.h("pre",Object.assign({},g,{class:[g.class,S]}),[K.h("code",Object.assign({},g,{class:[g.class,S],innerHTML:J.highlight(w,$)}))])}}}),Oe=ze;const Re=h=>(se("data-v-ccf7fd3c"),h=h(),ie(),h),He={class:"code-wrapper"},Be=Re(()=>v("div",{class:"code-header"},[v("span",{class:"code-dot bg-success"}),v("span",{class:"code-dot bg-warning"}),v("span",{class:"code-dot bg-danger"})],-1)),Ge={class:"code-body"},qe=re({__name:"PrismCode",props:{code:null,language:{default:"javascript"}},setup(h){const d=h;return(s,o)=>(L(),D("div",He,[Be,v("div",Ge,[fe(ye(Oe),{language:d.language},{default:he(()=>[ve(me(d.code),1)]),_:1},8,["language"])])]))}});const Ne=le(qe,[["__scopeId","data-v-ccf7fd3c"]]);export{Ne as _,Ke as a};