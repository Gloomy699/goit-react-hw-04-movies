(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{78:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__3PtKk",input:"SearchBar_input__3i3YX",button:"SearchBar_button__26tHL"}},98:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(59),r=a(0),o=a(18),s=a(97),u=a(78),i=a.n(u),b=function(e){var t=e.onClick,a=Object(r.useState)(""),s=Object(c.a)(a,2),u=s[0],b=s[1];return Object(n.jsxs)("form",{className:i.a.searchBar,onSubmit:function(e){e.preventDefault(),""!==u?t(u):o.b.error("Nothing to find. Check input field please")},children:[Object(n.jsx)("label",{children:Object(n.jsx)("input",{className:i.a.input,type:"text",autoComplete:"off",placeholder:"Search movie",value:u,onChange:function(e){b(e.target.value)}})}),Object(n.jsx)("button",{className:i.a.button,type:"submin",children:"Search"})]})},j=a(70),l=a(60);t.default=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),a=t[0],u=t[1],i=Object(r.useState)(""),h=Object(c.a)(i,2),f=h[0],p=h[1],O=Object(r.useState)(1),g=Object(c.a)(O,2),m=g[0],d=g[1],S=Object(r.useState)(1),v=Object(c.a)(S,2),x=v[0],_=v[1];Object(r.useEffect)((function(){f&&l.e(f,m).then((function(e){e.results.length?(u(e.results),_(e.total_pages)):o.b.error("Nothing was found. Try again.")}))}),[f,m]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{onClick:function(e){p(e),d(1)}}),a&&Object(n.jsx)(j.a,{movies:a}),x>1&&Object(n.jsx)(s.a,{count:x,page:m,onChange:function(e,t){d(t)},boundaryCount:2,color:"secondary"})]})}}}]);
//# sourceMappingURL=movies-view.f8d93eec.chunk.js.map