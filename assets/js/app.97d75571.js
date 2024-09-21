(function(){"use strict";var t={2646:function(t,n,e){var o=e(4017),r=e(2670);const i={id:"app"};function s(t,n,e,o,s,a){const l=(0,r.g2)("AppHeader"),c=(0,r.g2)("MainContent"),u=(0,r.g2)("AppFooter");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(l),(0,r.bF)(c),(0,r.bF)(u)])}var a=e(1237);const l={id:"header",class:"alt"},c=["href"],u={id:"nav"},h=["href","target"];function p(t,n,e,o,i,s){return(0,r.uX)(),(0,r.CE)("header",l,[(0,r.Lk)("h1",null,[(0,r.Lk)("a",{href:o.domain},"GitHub Proxy",8,c)]),(0,r.Lk)("nav",u,[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.navItems,(t=>((0,r.uX)(),(0,r.CE)("li",{key:t.text},[(0,r.Lk)("a",{href:t.link,target:t.target},(0,a.v_)(t.text),9,h)])))),128))])])])}var f=e(3158),b={name:"AppHeader",setup(){const t=(0,r.EW)((()=>`https://${window.location.hostname}`)),n=(0,f.KR)([{text:"首页",link:t.value},{text:"Docker镜像代理",link:"https://docker.imixc.top/",target:"_blank"},{text:"博客",link:"https://ixingchen.org.cn/",target:"_blank"}]);return{domain:t,navItems:n}}},d=e(479);const g=(0,d.A)(b,[["render",p],["__scopeId","data-v-01a2a022"]]);var m=g;const v={id:"cta"},k={class:"row gtr-50 gtr-uniform"},L={class:"col-8 col-12-mobilep"},w=["pattern"],y={id:"main",class:"container"};function _(t,n,e,i,s,a){const l=(0,r.g2)("Instructions");return(0,r.uX)(),(0,r.CE)("main",null,[(0,r.Lk)("section",v,[n[3]||(n[3]=(0,r.Lk)("img",{src:"/assets/images/github.png",alt:"GitHub Logo",height:"100",width:"100"},null,-1)),n[4]||(n[4]=(0,r.Lk)("h2",null,"GitHub Proxy Server",-1)),n[5]||(n[5]=(0,r.Lk)("p",null,"GitHub 文件, Releases, archive, gist, raw.githubusercontent.com 文件代理加速下载服务.",-1)),(0,r.Lk)("form",{onSubmit:n[1]||(n[1]=(0,o.D$)(((...t)=>i.handleSubmit&&i.handleSubmit(...t)),["prevent"]))},[(0,r.Lk)("div",k,[(0,r.Lk)("div",L,[(0,r.bo)((0,r.Lk)("input",{class:"block url",type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>i.gh_url=t),placeholder:"输入 GitHub 文件链接",pattern:i.urlPattern,required:""},null,8,w),[[o.Jo,i.gh_url]])]),n[2]||(n[2]=(0,r.Lk)("div",{class:"col-4 col-12-mobilep"},[(0,r.Lk)("input",{type:"submit",value:"下载"})],-1))])],32)]),(0,r.Lk)("section",y,[(0,r.bF)(l)])])}const x=["innerHTML"],S={class:"row"},j={class:"col-12"},C=["innerHTML"];function E(t,n,e,o,i,s){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("header",null,[n[0]||(n[0]=(0,r.Lk)("h2",null,"使用说明",-1)),(0,r.Lk)("p",{align:"left",innerHTML:o.importantNotice},null,8,x)]),(0,r.Lk)("div",S,[(0,r.Lk)("div",j,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.instructions,((t,n)=>((0,r.uX)(),(0,r.CE)("section",{class:"box",key:n},[(0,r.Lk)("h3",null,(0,a.v_)(t.title),1),(0,r.Lk)("div",{innerHTML:t.content},null,8,C)])))),128))])])])}var H={name:"UserInstructions",setup(){const t=(0,r.EW)((()=>`https://${window.location.hostname}`)),n=(0,r.EW)((()=>window.location.hostname)),e='<font color="red">重要事件: </font>本站为个人维护的爱发电项目,其目的是为广大开发者提供 GitHub 代理下载服务. <br> 并且不鼓励一些滥用的行为. <br> <br> 如果本站的服务帮助到您,欢迎大家随意<a href="" target="_blank">打赏</a>或<font color="red">提供服务器赞助</font>以支持本站提供线路更好的服务.',o=(0,f.KR)([{title:"终端命令行",content:`\n          <p>支持终端命令行 git clone , wget , curl 等工具下载. <br> 支持 <font color="red">raw.githubusercontent.com</font> , <font color="red">gist.github.com </font> , <font color="red">gist.githubusercontent.com</font> 文件下载. <br> <b>注意：</b>不支持 SSH Key 方式 git clone 下载. </p>\n          <hr>\n          <h4><b>git clone</b></h4>\n          <p><b>git clone</b> <font color="red">${t.value}/</font><font color="green">https://github.com/stilleshan/ServerStatus</font> </p>\n          <h4><b>git clone私有仓库</b></h4>\n          <p> Clone 私有仓库需要用户在 <a href="https://github.com/settings/tokens" target="_blank">Personal access tokens</a> 申请 Token 配合使用. <br><b>git clone</b> <font color="red">https://</font><b>user:your_token</b><font color="red">@${n.value}/</font><font color="green">https://github.com/your_name/your_private_repo</font></p>\n          <h4><b>wget &amp; curl</b></h4>\n          <p><b>wget</b> <font color="red">${t.value}/</font><font color="green">https://github.com/stilleshan/ServerStatus/archive/master.zip</font> <br> <b>wget</b> <font color="red">${t.value}/</font><font color="green">https://raw.githubusercontent.com/stilleshan/ServerStatus/master/Dockerfile</font> <br> <b>curl -O</b> <font color="red">${t.value}/</font><font color="green">https://github.com/stilleshan/ServerStatus/archive/master.zip</font> <br> <b>curl -O</b> <font color="red">${t.value}/</font><font color="green">https://raw.githubusercontent.com/stilleshan/ServerStatus/master/Dockerfile</font> </p>\n        `},{title:"首页下载",content:'\n          <p>在本页地址栏输入合规链接（参考以下链接）点击下载按钮 <br> 支持 <font color="red">raw.githubusercontent.com</font> , <font color="red">gist.github.com </font> , <font color="red">gist.githubusercontent.com</font> 文件下载. </p>\n          <hr>\n          <h4><b>Raw 文件</b></h4>\n          <p>https://raw.githubusercontent.com/stilleshan/ServerStatus/master/Dockerfile</p>\n          <h4><b>分支源码</b></h4>\n          <p>https://github.com/stilleshan/ServerStatus/archive/master.zip</p>\n          <h4><b>Releases 源码</b></h4>\n          <p>https://github.com/stilleshan/ServerStatus/archive/v1.0.tar.gz</p>\n          <h4><b>Releases 文件</b></h4>\n          <p>https://github.com/fatedier/frp/releases/download/v0.33.0/frp_0.33.0_linux_amd64.tar.gz</p>\n        '}]);return{importantNotice:e,instructions:o}}};const O=(0,d.A)(H,[["render",E]]);var A=O,$={name:"MainContent",components:{Instructions:A},setup(){const t=(0,f.KR)(""),n="^((https|http):\\/\\/)?(github\\.com\\/.+?\\/.+?\\/(?:releases|archive|blob)|((?:raw|gist)\\.(?:githubusercontent|github)\\.com))\\/.+$",e=()=>{t.value&&window.open(`https://github.axingchen.com/${t.value}`,"_blank")};return{gh_url:t,urlPattern:n,handleSubmit:e}}};const F=(0,d.A)($,[["render",_],["__scopeId","data-v-578f6f73"]]);var I=F;const P={id:"footer"},M={class:"copyright"};function R(t,n,e,o,i,s){const l=(0,r.g2)("center");return(0,r.uX)(),(0,r.CE)("footer",P,[(0,r.Lk)("ul",M,[(0,r.Lk)("li",null,"©"+(0,a.v_)(s.capitalizedDomain)+". All Rights Reserved.",1),n[0]||(n[0]=(0,r.Lk)("li",null,[(0,r.eW)("Github Project : "),(0,r.Lk)("a",{href:"https://github.com/hunshcn/gh-proxy",target:"_blank"},"hunshcn/gh-proxy")],-1)),n[1]||(n[1]=(0,r.Lk)("li",null,[(0,r.eW)("UI : "),(0,r.Lk)("a",{href:"https://mirror.ghproxy.com/",target:"_blank"},"ghproxy.com")],-1))]),(0,r.bF)(l)])}var X={name:"PageFooter",data(){return{domain:window.location.hostname}},computed:{capitalizedDomain(){return this.domain.charAt(0).toUpperCase()+this.domain.slice(1)}},mounted(){this.loadScripts(["../../assets/js/breakpoints.min.js","../../assets/js/browser.min.js","../../assets/js/jquery.dropotron.min.js","../../assets/js/jquery.scrollex.min.js","../../assets/js/jquery.min.js","../../assets/js/main.js","../../assets/js/util.js"])},methods:{loadScripts(t){t.forEach((t=>{const n=document.createElement("script");n.src=t,n.async=!0,document.body.appendChild(n)}))}}};const D=(0,d.A)(X,[["render",R],["__scopeId","data-v-a95466f2"]]);var T=D,z={name:"App",components:{AppHeader:m,MainContent:I,AppFooter:T}};const G=(0,d.A)(z,[["render",s]]);var K=G,W=e(950),q=e.n(W);e(950);window.$=q();const U=(0,o.Ef)(K);U.mount("#app"),document.addEventListener("DOMContentLoaded",(()=>{"undefined"!==typeof q()&&function(t){t(".navPanelToggle").click((function(){t(this).toggleClass("active"),t("body").toggleClass("navPanel-visible")})),t.fn.navList&&t("#nav > ul").navList()}(q())}))}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(l)var u=l(e)}for(n&&n(o);c<s.length;c++)i=s[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},o=self["webpackChunkgh_proxy_ui"]=self["webpackChunkgh_proxy_ui"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(2646)}));o=e.O(o)})();