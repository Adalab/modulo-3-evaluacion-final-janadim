(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(16),a=c.n(r),s=c(14),i=function(){return fetch("https://rickandmortyapi.com/api/character/?results=20").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,id:e.id,image:e.image,species:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))},h=c(1),j=function(e){return Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Search:"}),Object(h.jsx)("input",{type:"text",name:"name",id:"name",onChange:e.handleFilter})]})},o=c(7),u=function(e){return Object(h.jsx)(o.b,{to:"/character/".concat(e.eachChar.id),children:Object(h.jsxs)("article",{children:[Object(h.jsx)("img",{src:e.eachChar.image,alt:e.eachChar.name,title:e.eachChar.name}),Object(h.jsx)("h4",{children:e.eachChar.name}),Object(h.jsx)("p",{children:e.eachChar.species})]})})},l=function(e){var t=e.chars.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u,{eachChar:e})},e.id)}));return Object(h.jsx)("section",{children:Object(h.jsx)("ul",{children:t})})},d={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},b=c(2),O=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:e.char.image}),Object(h.jsx)("h2",{children:e.char.name}),Object(h.jsxs)("p",{children:["Status: ",e.char.status]}),Object(h.jsxs)("p",{children:["Species: ",e.char.species]}),Object(h.jsxs)("p",{children:["Origin: ",e.char.origin]}),Object(h.jsxs)("p",{children:["Episodes: ",e.char.episodes]}),Object(h.jsx)(o.b,{to:"/",children:"Go back"})]})};var m=function(){var e=d.get("chars",[]),t=Object(n.useState)(e),c=Object(s.a)(t,2),r=c[0],a=c[1],o=Object(n.useState)(d.get("filterName","")),u=Object(s.a)(o,2),m=u[0],x=u[1];console.log(r),Object(n.useEffect)((function(){0===r.length&&i().then((function(e){a(e)}))}),[]),Object(n.useEffect)((function(){d.set("chars",r)}),[r]);var p=r.filter((function(e){return e.name.toLowerCase().includes(m)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Rick and Morty"}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{handleFilter:function(e){x(e.target.value)}}),Object(h.jsx)(l,{chars:p})]})}),Object(h.jsx)(b.a,{path:"/character/:id",render:function(e){var t=e.match.params.id,c=r.find((function(e){return e.id===Number(t)}));return Object(h.jsx)(O,{char:c})}})]})]})};a.a.render(Object(h.jsx)(o.a,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e195df38.chunk.js.map