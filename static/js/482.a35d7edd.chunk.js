"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[482],{482:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(885),c=n(703),i=n(791),o=n(871),u=n(184);function a(){var e=(0,o.UO)().moviesId,t=(0,i.useState)([]),n=(0,r.Z)(t,2),a=n[0],h=n[1];return(0,i.useEffect)((function(){(0,c.Bt)(e).then((function(e){return e.json()})).then((function(e){return h(e.results)}))}),[e]),a.length<1?(0,u.jsx)("p",{children:"We dont have any reviews for this movie"}):(0,u.jsx)("ul",{children:a.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h2",{children:["Author: ",t]}),(0,u.jsx)("p",{children:n})]},r)}))})}},703:function(e,t,n){n.d(t,{Ai:function(){return h},Bt:function(){return a},PQ:function(){return u},Tg:function(){return i},Y5:function(){return o},_n:function(){return c}});var r="e58a02e4215cc04ce0b4af905ce50db3",c="https://image.tmdb.org/t/p/w500";function i(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r))}function o(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r,"&language=en-US"))}function u(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US"))}function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))}function h(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=482.a35d7edd.chunk.js.map