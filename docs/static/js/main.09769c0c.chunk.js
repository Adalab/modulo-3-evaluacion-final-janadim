(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(16),n=c.n(s),r=c(14),i=(c(22),function(){return fetch("https://rickandmortyapi.com/api/character/?results=20").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,id:e.id,image:e.image,species:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))}),l=c(0),h=function(e){return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"form ",children:[Object(l.jsx)("label",{className:"nameLabel chng",htmlFor:"name",children:"Search:"}),Object(l.jsx)("input",{type:"text",value:e.filterName,name:"name",id:"name",onChange:e.handleFilter,className:"inputForm"})]})},j=c(7),m=function(e){return Object(l.jsx)(j.b,{to:"/character/".concat(e.eachChar.id),children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:e.eachChar.image,alt:e.eachChar.name,title:e.eachChar.name,className:"li-img"}),Object(l.jsx)("h4",{className:"charName",children:e.eachChar.name}),Object(l.jsx)("p",{className:"charSpec",children:e.eachChar.species})]})})},o=function(e){var t=Object(l.jsx)("p",{children:"Sorry, but there are no coincidences with your search"});return 0!==e.chars.length&&(t=e.chars.map((function(e){return Object(l.jsx)("li",{className:"charItem change",children:Object(l.jsx)(m,{eachChar:e})},e.id)}))),Object(l.jsx)("section",{children:Object(l.jsx)("ul",{className:"charList",children:t})})},d={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},u=c(2),b=(c.p,function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("article",{className:"details-container",children:[Object(l.jsx)("img",{src:e.char.image,alt:"",className:"img-details"}),Object(l.jsxs)("ul",{className:"descriptionText",children:[Object(l.jsx)("h2",{className:"text-name",children:e.char.name}),Object(l.jsxs)("li",{children:["- Status: ",Object(l.jsx)("span",{className:"text-status",children:e.char.status})]}),Object(l.jsxs)("li",{children:["- Species: ",Object(l.jsx)("span",{className:"text-spec",children:e.char.species})]}),Object(l.jsxs)("li",{children:["- Origin: ",Object(l.jsx)("span",{className:"text-origin",children:e.char.origin})]}),Object(l.jsxs)("li",{children:["- Episodes:",Object(l.jsx)("span",{className:"text-episodes",children:e.char.episodes})]})]}),Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("p",{className:"back-link",children:"Go back"})})]})})}),x=c.p+"static/media/Rickandmorty.de13d484.png";var O=function(){var e=d.get("chars",[]),t=Object(a.useState)(e),c=Object(r.a)(t,2),s=c[0],n=c[1],j=Object(a.useState)(d.get("filterName","")),m=Object(r.a)(j,2),O=m[0],p=m[1];Object(a.useEffect)((function(){0===s.length&&i().then((function(e){n(e)}))}),[]),Object(a.useEffect)((function(){d.set("chars",s)}),[s]);var f=s.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())}));return Object(l.jsxs)("section",{className:"main-container",children:[Object(l.jsx)("img",{className:"main-img",src:x}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsxs)("div",{className:"list-container",children:[Object(l.jsx)(h,{handleFilter:function(e){p(e.target.value)},filterName:O}),Object(l.jsx)(o,{chars:f,filterName:O})]})}),Object(l.jsx)(u.a,{path:"/character/:id",render:function(e){var t=e.match.params.id,c=s.find((function(e){return e.id===Number(t)}));return void 0!==c?Object(l.jsx)(b,{char:c}):Object(l.jsx)("p",{children:"Sorry, but this character doesn't exist"})}})]})]})};n.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.09769c0c.chunk.js.map