!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var i=n.p+"./images/vk.png",o=n.p+"./images/instagram.png",r=n.p+"./images/github.png",c=n.p+"./images/whatsapp.png",l=n.p+"./images/tg.png",s=n.p+"./images/slack.png",a=n.p+"./images/hh.png",u=n.p+"./images/rekomend.svg",h=n.p+"./images/raklechitsya.jpg",m=n.p+"./images/mesto.png",_=n.p+"./images/across-russia.png",p=n.p+"./images/how-to-study.png",f=n.p+"./images/procrastinate.png",g=n.p+"./images/dappy.jpg",d={vk:i,inst:o,github:r,wats:c,tg:l,slack:s,rekomend:u,hh:a},b=[{title:"Основные проекты",subtitle:"Крупные проекты в которых я принимал участие.",id:"main",exampls:[{title:'Проект "РакЛечится"',subtitle:"Проект по переносу сайта с Tilda. Выполнен на Nuxt.js, командой, на конкурсной основе.",link:"https://github.com/Dmitrii-Belich/raklechitsa",image:h,icons:[{name:"recomendation",link:n.p+"./recommend/raklechitsya.pdf",icon:d.rekomend},{name:"code",link:"https://github.com/Dmitrii-Belich/raklechitsa",icon:d.github}]},{title:'Проект "Место"',subtitle:"Проект, созданный по программе обучения в Яндекс.Практикум, призван продемонстрировать навыки JavaScript, ООП, валидации форм и работы с WebPack. (В разработке)",link:"/mesto",image:m,icons:[{name:"code",link:"https://github.com/Dmitrii-Belich/mesto",icon:d.github}]},{title:'Проект "Путешествия по России"',subtitle:"Проект, созданный по программе обучения в Яндекс.Практикум, призван реализовать на практике навыки адаптивной верстки.",link:"/russian-travel/",image:_,icons:[{name:"code",link:"https://github.com/Dmitrii-Belich/russian-travel",icon:d.github}]},{title:'Проект "Научиться учиться"',subtitle:"Проект, созданный по программе обучения в Яндекс.Практикум, призван реализовать навыки верстки и работы с анимациями.",link:"/how-to-learn/",image:p,icons:[{name:"code",link:"https://github.com/Dmitrii-Belich/how-to-learn",icon:d.github}]}]},{title:"Небольшие проекты",subtitle:"Не занявшие много времени проекты, однако привнесшие значительный опыт на ранних этапах обучения.",id:"small",exampls:[{title:'Проект "Идеи для прокрастинации"',subtitle:"Проект, созданный по программе обучения в Яндекс.Практикум, был создан для демонстрации начальных навыков JavaScript.",link:"/procrastinate/",image:f,icons:[{name:"code",link:"https://github.com/Dmitrii-Belich/procrastinate",icon:d.github}]},{title:'Проект "Dappy"',subtitle:"Проект, созданый для применения на практики навыков командной работы с помощью GitHub.",link:"/crypto/",image:g,icons:[{name:"code",link:"https://github.com/Dmitrii-Belich/crypto",icon:d.github}]}]}],y=[{name:"vk",link:"https://vk.com/id171896324",icon:d.vk},{name:"inst",link:"https://www.instagram.com/dmitriy_belich/",icon:d.inst},{name:"github",link:"https://github.com/Dmitrii-Belich",icon:d.github},{name:"wats",link:"https://api.whatsapp.com/send?phone=79006351840",icon:d.wats},{name:"tg",link:"https://t.me/Diman014",icon:d.tg},{name:"slack",link:"https://vk.com/away.php?utf=1&to=https%3A%2F%2Fjoin.slack.com%2Ft%2Fbelichds%2Fshared_invite%2Fzt-dhlqayr8-WI~TBEZeYWLArgm7Um4gZQ",icon:d.slack}],k=[{name:"Vue.js",percent:"30"},{name:"Vuex",percent:"40"},{name:"Nuxt.js",percent:"25"},{name:"ООП",percent:"60"},{name:"Webpack",percent:"40"},{name:"БЭМ",percent:"80"},{name:"Адаптивность",percent:"90"},{name:"GitHub",percent:"60"}];function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(t){var n=t.title,i=t.subtitle,o=t.link,r=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=n,this._subtitle=i,this._link=o,this._image=r}var t,n,i;return t=e,(n=[{key:"_setAtttibutes",value:function(){this._element=document.querySelector("#project").content.cloneNode(!0),this._elementTitle=this._element.querySelector(".project__title"),this._elementSubtitle=this._element.querySelector(".project__description"),this._elementImage=this._element.querySelector(".project__image"),this._elementLink=this._element.querySelector(".project__link"),this._elementLink.setAttribute("href",this._link),this._elementTitle.textContent=this._title,this._elementSubtitle.textContent=this._subtitle,this._elementImage.src=this._image,this._elementConatainer=this._element.querySelector(".project__icons")}},{key:"setLinks",value:function(e,t){var n=this;this._setAtttibutes(),e.forEach((function(e){t(e,n._elementConatainer)}))}},{key:"getProject",value:function(){return this._element}}])&&v(t.prototype,n),i&&v(t,i),e}();function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var j=function(){function e(t){var n=t.title,i=t.subtitle,o=t.id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=n,this._subtitle=i,this._id=o}var t,n,i;return t=e,(n=[{key:"_setSectionAttributes",value:function(){this._element=document.querySelector("#project-section").content.cloneNode(!0),this._elementTitle=this._element.querySelector(".project-section__title"),this._elementSubtitle=this._element.querySelector(".project-section__subtitle"),this._container=this._element.querySelector(".project-section__container"),this._section=this._element.querySelector(".project-section"),this._elementTitle.setAttribute("id",this._id),this._elementTitle.textContent=this._title,this._elementSubtitle.textContent=this._subtitle}},{key:"setProjects",value:function(e,t){var n=this;this._setSectionAttributes(),e.forEach((function(e){t(e,n._container)}))}},{key:"getSection",value:function(){return this._element}}])&&S(t.prototype,n),i&&S(t,i),e}();function q(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t,this._id=n}var t,n,i;return t=e,(n=[{key:"_setAttributes",value:function(){this._element=document.querySelector("#menu-link").content.cloneNode(!0),this._link=this._element.querySelector(".menu__link"),this._link.textContent=this._title,this._link.setAttribute("href","#".concat(this._id))}},{key:"_scroll",value:function(e){var t=document.querySelector("#".concat(this._id));e.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"})}},{key:"_setEventListeners",value:function(){var e=this;this._link.addEventListener("click",(function(t){e._scroll(t)}))}},{key:"getLink",value:function(){return this._setAttributes(),this._setEventListeners(),this._element}}])&&q(t.prototype,n),i&&q(t,i),e}();function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var L=function(){function e(t,n){var i=t.link,o=t.icon;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=i,this._icon=o,this._id=n}var t,n,i;return t=e,(n=[{key:"_setAttributes",value:function(){this._element=document.querySelector("#".concat(this._id)).content.cloneNode(!0),this._elementImage=this._element.querySelector("img"),this._elementLink=this._element.querySelector("a"),this._elementImage.src=this._icon,this._elementLink.setAttribute("href",this._link)}},{key:"getIcon",value:function(){return this._setAttributes(),this._element}}])&&E(t.prototype,n),i&&E(t,i),e}();function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var T,P,C=function(){function e(t,n){var i=t.name,o=t.percent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=i,this._percent=o,this._id=n}var t,n,i;return t=e,(n=[{key:"_setAttributes",value:function(){this._element=document.querySelector("#".concat(this._id)).content.cloneNode(!0),this._elementName=this._element.querySelector(".technology__title"),this._elementProgress=this._element.querySelector(".technology__progress"),this._elementName.textContent=this._name,this._elementProgress.classList.add("technology__progress_percent_".concat(this._percent))}},{key:"getTechnology",value:function(){return this._setAttributes(),this._element}}])&&x(t.prototype,n),i&&x(t,i),e}(),D=document.querySelector(".footer__social-networks"),O=document.querySelector(".profile__icons"),B=document.querySelector(".profile__figure"),I=document.querySelector(".technologies__container"),N=[];y.forEach((function(e){var t=new L({link:e.link,icon:e.icon},"footer-icon").getIcon();D.append(t)})),y.forEach((function(e){var t=new L({link:e.link,icon:e.icon},"profile-icon").getIcon();O.append(t)})),b.forEach((function(e){var t=new j({title:e.title,subtitle:e.subtitle,id:e.id});t.setProjects(e.exampls,(function(e,t){var n=new w({title:e.title,subtitle:e.subtitle,link:e.link,image:e.image});n.setLinks(e.icons,(function(e,t){var n=new L({link:e.link,icon:e.icon},"project-icon").getIcon();t.append(n)})),t.append(n.getProject())})),document.querySelector(".content").append(t.getSection())})),k.forEach((function(e){var t=new C({name:e.name,percent:e.percent},"technology").getTechnology();I.append(t),N.push(!1)})),T=document.querySelectorAll(".project-section__title"),P=document.querySelector(".menu"),T.forEach((function(e){var t=e.textContent,n=new A(t,e.getAttribute("id")).getLink();P.append(n)}));var F=document.querySelectorAll(".social"),M=Array.from(document.querySelectorAll(".project__figure"));"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?F.forEach((function(e){e.classList.add("social_type_touch")})):(M.forEach((function(e){e.classList.add("project__figure_type_notouch")})),B.classList.add("profile__figure_type_notouch"));var W=document.querySelectorAll(".technology__progress");window.addEventListener("scroll",(function(){N.reduce((function(e,t){return e*t}))||W.forEach((function(e,t){var n,i,o;Array.from(e.classList).find((function(e){return"technology__progress_type_visible"==e}))?N[t]=!0:(n=e,i=window.innerHeight,!((o=n.getBoundingClientRect().bottom)<0||o>i))&&e.classList.add("technology__progress_type_visible")}))}))}]);