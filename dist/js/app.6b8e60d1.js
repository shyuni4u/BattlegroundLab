(function(e){function t(t){for(var n,a,i=t[0],l=t[1],s=t[2],c=0,f=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-eef22848":"cb04efc1"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"chunk-eef22848":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-eef22848":"055872a8"}[e]+".css",o=l.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],c=s.getAttribute("data-href");if(c===n||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],d.parentNode.removeChild(d),r(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var f=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/BattlegroundLab/dist/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"header"}},[r("div",{attrs:{id:"nav"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[r("b-navbar-brand",{attrs:{id:"web-title",href:"#"}},[e._v(e._s(e.$t("pageTitle")))])],1)],1)]),r("div",{attrs:{id:"container"}},[r("router-view")],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"footer"}},[e._v(" 현재 백수라 시간이 있어서 만들어보았습니다. 피드백 및 연락은 메일로 부탁드립니다."),r("br"),e._v(" e-mail: shyuniz@naver.com | home: "),r("a",{attrs:{href:"https://shyuni4u.github.io/homepage/dist/"}},[e._v("https://shyuni4u.github.io/homepage/dist/")]),r("br"),e._v(" Copyright 2020. shyuniz. All rights reserved."),r("br")])}],u=r("a925");n["default"].use(u["a"]);var i={en:{lang:"Lang",pageTitle:"BattlegroundLab",goRepository:"Go Repository",more:"More",shortcut:"Shortcut",menuHome:"",date:"Date"},kr:{lang:"언어",pageTitle:"전장연구소",goRepository:"저장소 바로가기",more:"더보기",shortcut:"바로가기",menuHome:"",date:"기간"}},l=new u["a"]({locale:"kr",fallbackLocale:"en",messages:i}),s={name:"App",data:function(){return{LoadingStatus:!1,menus:[{linkTo:"/",title:"menuHome",sub:[]}],languages:[{flag:"kr",language:"kr",title:"한국어"},{flag:"us",language:"en",title:"English"}]}},methods:{changeLocale:function(e){l.locale=e}}},c=s,f=(r("5c0b"),r("2877")),d=Object(f["a"])(c,a,o,!1,null,null,null),p=d.exports,h=(r("d3b7"),r("8c4f"));n["default"].use(h["a"]);var g=[{path:"/",name:"home",component:function(){return r.e("chunk-eef22848").then(r.bind(null,"bb51"))}}],m=new h["a"]({mode:"history",base:"/BattlegroundLab/dist/",scrollBehavior:function(e,t,r){return r||{x:0,y:0}},routes:g}),v=m,b=r("2f62");n["default"].use(b["a"]);var y=new b["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=r("d61f"),_=r("5f5b"),k=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(w["a"]),n["default"].use(_["a"]),n["default"].use(k["a"]),n["default"].config.productionTip=!1,new n["default"]({i18n:l,router:v,store:y,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.6b8e60d1.js.map