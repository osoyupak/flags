(this.webpackJsonpdeneme=this.webpackJsonpdeneme||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var s=c(13),n=c.n(s),a=c(4),r=c(2),i=c(14),l=c.n(i),d=c(0);function j(e){return Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(d.jsx)("input",{type:"text",onChange:e.handleChange,className:"form-control"})})})}function m(e){return Object(d.jsx)("div",{children:e.countries.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).map((function(e,t){return Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"card mb-3 gx-0",children:Object(d.jsxs)("div",{className:"row g-0 gx-0",children:[Object(d.jsx)("div",{className:"col-md-6 ",children:Object(d.jsx)("img",{src:e.flag,className:"img-fluid",alt:"...",style:{width:"18rem"}})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.name}),Object(d.jsx)("p",{className:"card-text",children:e.capital}),Object(d.jsx)("p",{className:"card-text",children:Object(d.jsx)("small",{className:"text-muted",children:e.region})})]})})]})})},t)}))})}function o(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(""),i=Object(a.a)(n,2),o=i[0],u=i[1];Object(r.useEffect)((function(){l.a.get("https://restcountries.eu/rest/v2/all").then((function(e){return s(e.data)}))}),[]);return Object(d.jsxs)("div",{className:"container mt-3",style:{maxWidth:"600px"},children:[Object(d.jsx)(j,{handleChange:function(e){u(e.target.value)}}),Object(d.jsx)(m,{countries:c,search:o})]})}n.a.render(Object(d.jsx)(o,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bf094a40.chunk.js.map