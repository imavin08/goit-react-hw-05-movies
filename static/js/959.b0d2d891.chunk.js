"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{959:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(885),a=t(703),c=t(501),s=t(871),i=t(791),u="MovieDetails_img__c2qlG",o="MovieDetails_card__OpymF",p="MovieDetails_container__rZCdL",h=t(184);function l(){var e,n,t=(0,i.useState)([]),l=(0,r.Z)(t,2),f=l[0],d=l[1],v=(0,s.UO)().moviesId;(0,i.useEffect)((function(){(0,a.Y5)(v).then((function(e){d(e)}))}),[v]);var x=f.poster_path,m=f.title,j=f.original_title,g=f.vote_average,_=f.overview,w=null!==(e=null===(n=(0,s.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)(c.rU,{to:w,children:"Go back"}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("img",{className:u,src:x?a._n+x:(0,h.jsx)("p",{children:m}),alt:m}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:j}),(0,h.jsxs)("p",{children:["User Score: ",g]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:_}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:function(){if(!(f.length<1))return f.genres.map((function(e){return e.name})).join(" ")}()})]})]})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",state:{from:w},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",state:{from:w},children:"Reviews"})})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(s.j3,{})})]})}},703:function(e,n,t){t.d(n,{Ai:function(){return x},Bt:function(){return d},PQ:function(){return l},Tg:function(){return u},Y5:function(){return p},_n:function(){return i}});var r=t(861),a=t(757),c=t.n(a),s="e58a02e4215cc04ce0b4af905ce50db3",i="https://image.tmdb.org/t/p/w500";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=959.b0d2d891.chunk.js.map