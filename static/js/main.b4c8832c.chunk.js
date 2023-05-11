(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(7),l=c(2),r=c(5),i=c.n(r),d=c(1),o=(c(13),c(14),c(3)),j=c.n(o),b=c(0),u=function(e){var t=e.todos,c=e.selectedTodo,s=e.openModal;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,l=e.userId;return Object(b.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":c}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:n&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:j()(n?"has-text-success":"has-text-danger"),children:a})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(l,e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:j()(c?"far fa-eye-slash":"far fa-eye")})})})})]},e.id)}))})]})},h=function(e){var t=e.query,c=e.sort,s=e.setQuery,a=e.setSort;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return a(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},m=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.selectedUser,c=e.selectedTodo,s=e.closeModal;return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),t&&c?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s()}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:"has-text-danger",children:c.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})})," by ",Object(b.jsx)("a",{href:"mailto:Sincere@april.biz",children:t.name})]})]})]}):Object(b.jsx)(m,{})]})};function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(null),r=Object(l.a)(a,2),o=r[0],j=r[1],f=Object(d.useState)(null),p=Object(l.a)(f,2),N=p[0],v=p[1],y=Object(d.useState)(!1),g=Object(l.a)(y,2),k=g[0],S=g[1],w=Object(d.useState)("all"),C=Object(l.a)(w,2),T=C[0],_=C[1],L=Object(d.useState)(""),M=Object(l.a)(L,2),B=M[0],E=M[1],I=Object(d.useState)(!0),q=Object(l.a)(I,2),A=q[0],J=q[1],P=Object(d.useState)(!1),Q=Object(l.a)(P,2),U=Q[0],z=Q[1],D=Object(d.useCallback)(Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,J(!1),s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),z(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);Object(d.useEffect)((function(){D()}),[]);var F=c.filter((function(e){var t=e.title.toLowerCase().includes(B.trim().toLowerCase());switch(T){case"active":return t&&!e.completed;case"completed":return t&&e.completed;default:return t}}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(h,{query:B,setQuery:E,sort:T,setSort:_})}),Object(b.jsxs)("div",{className:"block",children:[A&&Object(b.jsx)(m,{}),U&&Object(b.jsx)("h2",{children:"Sorry, something went wrong"}),Object(b.jsx)(u,{todos:F,selectedTodo:o,openModal:function(e,t){S(!0),function(e){return x("/users/".concat(e))}(e).then((function(e){return v(e)})),j(t)}})]})]})})}),k&&Object(b.jsx)(O,{selectedUser:N,selectedTodo:o,closeModal:function(){S(!1),v(null),j(null)}})]})};a.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b4c8832c.chunk.js.map