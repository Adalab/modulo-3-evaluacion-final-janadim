(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=n(3),h=function(){return fetch("https://rickandmortyapi.com/api/character/?results=20").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,id:e.id,image:e.image,species:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))},u=n(0),o=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Search:"}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",onChange:e.handleFilter})]})},j=function(e){return Object(u.jsxs)("article",{children:[Object(u.jsx)("img",{src:e.eachChar.image,alt:e.eachChar.name,title:e.eachChar.name}),Object(u.jsx)("h4",{children:e.eachChar.name}),Object(u.jsx)("p",{children:e.eachChar.species})]})},l=function(e){var t=e.chars.map((function(e){return Object(u.jsx)(j,{eachChar:e})}));return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:t})})},m={get:function(e,t){var n=localStorage.getItem(e);return null===n?t:JSON.parse(n)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}};var b=function(){var e=m.get("chars",[]),t=Object(c.useState)(e),n=Object(s.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(m.get("filterName","")),j=Object(s.a)(i,2),b=j[0],f=j[1];Object(c.useEffect)((function(){0===r.length&&h().then((function(e){a(e)}))}),[]),Object(c.useEffect)((function(){m.set("chars",r)}),[r]);var d=r.filter((function(e){return e.name.toLowerCase().includes(b)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Rick and Morty"}),Object(u.jsx)(o,{handleFilter:function(e){f(e.target.value)}}),Object(u.jsx)(l,{chars:d})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.730671cc.chunk.js.map