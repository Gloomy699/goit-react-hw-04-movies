(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{79:function(t,e,a){t.exports={container:"Cast_container__1cOdw",castList:"Cast_castList__3DwXC",castItem:"Cast_castItem__Vh2j1",photo:"Cast_photo__N6Vqa",descriptBox:"Cast_descriptBox__29fz-",name:"Cast_name__1-EpT",roleBox:"Cast_roleBox__1QfM3",role:"Cast_role__1WQYl","MuiPagination-ul":"Cast_MuiPagination-ul__2EJ7X"}},81:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return j}));var s=a(1),c=a(59),n=a(0),i=a(97),o=a(60),r=a(79),l=a.n(r),j=function(t){var e=t.movieId,a=Object(n.useState)(null),r=Object(c.a)(a,2),j=r[0],h=r[1],u=Object(n.useState)(1),m=Object(c.a)(u,2),p=m[0],_=m[1],d=Object(n.useState)(1),b=Object(c.a)(d,2),x=b[0],O=b[1];Object(n.useEffect)((function(){o.a(e).then((function(t){h(t.cast),O(Math.ceil(t.cast.length/20)),_(1)}))}),[e]);return Object(s.jsx)(s.Fragment,{children:j&&Object(s.jsxs)("div",{className:l.a.container,children:[Object(s.jsx)("ul",{className:l.a.castList,children:j.filter((function(t,e){return e>=20*p-20&&e<=20*p-1})).map((function(t){return Object(s.jsxs)("li",{className:l.a.castItem,children:[Object(s.jsx)("img",{className:l.a.photo,src:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/555px-Noimage.svg.png",alt:t.name}),Object(s.jsxs)("div",{className:l.a.descriptBox,children:[Object(s.jsx)("h2",{className:l.a.name,children:t.name}),Object(s.jsxs)("p",{className:l.a.roleBox,children:[Object(s.jsx)("span",{className:l.a.role,children:"Character: "}),Object(s.jsxs)("span",{children:[" ",t.character]})]})]})]},t.id)}))}),x>1&&Object(s.jsx)("div",{children:Object(s.jsx)(i.a,{count:x,page:p,onChange:function(t,e){_(e)},boundaryCount:2,color:"secondary"})})]})})}}}]);
//# sourceMappingURL=cast-subview.f8aee732.chunk.js.map