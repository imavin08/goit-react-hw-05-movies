"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{253:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var c=n(885),r=n(501),i=n(791),o=n(703),a=n(184);function u(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1];return(0,i.useEffect)((function(){(0,o.Tg)().then((function(e){return e.json()})).then((function(e){u(e.results)})).catch((function(e){return console.log(e)}))}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Trending today"}),(0,a.jsx)("ul",{children:n.map((function(e){var t=e.original_title,n=e.id;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(n),children:t})},n)}))})]})}},703:function(e,t,n){n.d(t,{Ai:function(){return f},Bt:function(){return u},PQ:function(){return a},Tg:function(){return i},Y5:function(){return o},_n:function(){return r}});var c="e58a02e4215cc04ce0b4af905ce50db3",r="https://image.tmdb.org/t/p/w500";function i(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c))}function o(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"))}function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"))}function u(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}function f(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=253.cb78aa8f.chunk.js.map