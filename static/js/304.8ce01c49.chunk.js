"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{4219:function(n,r,t){t.d(r,{Lm:function(){return o},Re:function(){return s},XQ:function(){return p}});var e,a,i,c=t(168),u=t(5867),o=u.ZP.li(e||(e=(0,c.Z)(["\n    border-radius: 8px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.22),\n                0px 1px 1px 0px rgba(0, 0, 0, 0.16), \n                0px 2px 1px -1px rgba(0, 0, 0, 0.14);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    object-fit: cover;\n\n\n    &:hover {\n        transform: scale(1.05);\n    };\n"]))),s=u.ZP.img(a||(a=(0,c.Z)(["\n    width: 100%;\n    border-radius: 8px;\n"]))),p=u.ZP.h2(i||(i=(0,c.Z)(["\n    font-size: 24px;\n    font-weight: bold;\n    text-align: center;\n    margin: 12px auto;\n    color: #fff;\n"])))},6783:function(n,r,t){t.d(r,{O:function(){return f}});var e,a=t(7689),i=t(1087),c=t(4219),u=t(184),o=function(n){var r=n.movie,t=r.title,e=r.name,o=r.id,s=r.poster_path,p=(0,a.TH)();return(0,u.jsx)(c.Lm,{children:(0,u.jsxs)(i.rU,{to:"/movies/".concat(o),state:{from:p},children:[(0,u.jsx)(c.Re,{src:s?"https://image.tmdb.org/t/p/w500"+s:"https://www.reelviews.net/resources/img/default_poster.jpg",alt:t||e}),(0,u.jsx)(c.XQ,{children:t||e})]})})},s=t(168),p=t(5867).ZP.ul(e||(e=(0,s.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),f=function(n){var r=n.movies;return(0,u.jsx)(p,{children:r?r.map((function(n){return(0,u.jsx)(o,{movie:n},n.id)})):null})}},6062:function(n,r,t){t.d(r,{T:function(){return h}});var e,a,i,c,u=t(168),o=t(1087),s=t(5867),p=s.ZP.div(e||(e=(0,u.Z)(["\n    text-align: center;\n    margin-top: 100px;\n"]))),f=s.ZP.h2(a||(a=(0,u.Z)(["\n    font-size: 2rem;\n    color: #FF0000;\n"]))),d=s.ZP.p(i||(i=(0,u.Z)(["\n  font-size: 1rem;\n  margin-top: 20px;\n"]))),x=(0,s.ZP)(o.rU)(c||(c=(0,u.Z)(["\n  text-decoration: underline;\n  color: #0073e6;\n"]))),l=t(184),h=function(){return(0,l.jsxs)(p,{children:[(0,l.jsx)("h3",{children:"Unknown Error occurred."}),(0,l.jsx)(f,{children:"Page not found!"}),(0,l.jsxs)(d,{children:["We're sorry you ended up here. Try refreshing the page or return to ",(0,l.jsx)(x,{to:"/",children:"Home"}),"."]})]})}},7233:function(n,r,t){t.d(r,{Hx:function(){return d},bI:function(){return p},gQ:function(){return s},wr:function(){return o},xc:function(){return f}});var e=t(5861),a=t(7757),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="fc9b2ba3c1d7d66208afaa93dbd87a11",o=function(){var n=(0,e.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/week?api_key=".concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&query=").concat(r));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/reviews?&page=1&api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},304:function(n,r,t){t.r(r),t.d(r,{default:function(){return m}});var e,a=t(5861),i=t(9439),c=t(7757),u=t.n(c),o=t(9263),s=t(6783),p=t(6062),f=t(7233),d=t(2791),x=t(168),l=t(5867).ZP.h1(e||(e=(0,x.Z)(["\n    text-align: center;\n    font-weight: 800;\n    letter-spacing: 0.2em;\n    padding: 12px;\n    margin: 12px;\n"]))),h=t(184);function m(){var n=(0,d.useState)([]),r=(0,i.Z)(n,2),t=r[0],e=r[1],c=(0,d.useState)(!1),x=(0,i.Z)(c,2),m=x[0],v=x[1],g=(0,d.useState)(!1),Z=(0,i.Z)(g,2),w=Z[0],b=Z[1];return(0,d.useEffect)((function(){function n(){return(n=(0,a.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),b(!1),n.next=5,(0,f.wr)();case 5:r=n.sent,e(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),b(!0);case 12:return n.prev=12,v(!1),n.finish(12);case 15:case 16:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)(l,{children:"TRENDING TODAY"}),m&&(0,h.jsx)(o.a,{}),w&&(0,h.jsx)(p.T,{}),(0,h.jsx)(s.O,{movies:t.results})]})}}}]);
//# sourceMappingURL=304.8ce01c49.chunk.js.map