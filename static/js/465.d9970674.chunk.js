"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[465],{465:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(885),u=n(791),a=n(501),c=n(871),o=n(703),i="Movies_form__MWvXj",s="Movies_input__aaq4I",p=n(184);function f(){var t,e,n=(0,u.useState)([]),f=(0,r.Z)(n,2),h=f[0],l=f[1],d=(0,a.lr)(),v=(0,r.Z)(d,2),m=v[0],g=v[1],y=(0,u.useState)(null!==(t=m.get("query"))&&void 0!==t?t:""),x=(0,r.Z)(y,2),b=x[0],w=x[1],_=(0,c.TH)(),k=null!==(e=m.get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){k&&(0,o.Ai)(k).then((function(t){if(!t.total_results)return alert("Sory we dont found ".concat(k));l(t.results)})).catch((function(t){return console.log(t)}))}),[k]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{className:i,onSubmit:function(t){if(t.preventDefault(),""===b)return alert("Sorry, but we dont can find empty string, you shoud write something)");g({query:b})},children:[(0,p.jsx)("input",{className:s,type:"text",value:b,onChange:function(t){w(t.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)("ul",{children:h.map((function(t){var e=t.original_title,n=t.id;return(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:_},children:e})},n)}))})]})}},703:function(t,e,n){n.d(e,{Ai:function(){return m},Bt:function(){return d},PQ:function(){return h},Tg:function(){return i},Y5:function(){return p},_n:function(){return o}});var r=n(861),u=n(757),a=n.n(u),c="e58a02e4215cc04ce0b4af905ce50db3",o="https://image.tmdb.org/t/p/w500";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=465.d9970674.chunk.js.map