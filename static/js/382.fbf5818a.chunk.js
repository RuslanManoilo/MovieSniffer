"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[382],{875:function(n,e,t){t.d(e,{c:function(){return i}});var r,a=t(168),i=t(5867).ZP.button(r||(r=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n    min-width: 180px;\n    font-size: 20px;\n    line-height: 24px;\n    font-weight: 600;\n    padding: 8px 16px;\n    border-radius: 8px;\n    color: #fff;\n    background-color: inherit;\n    cursor: pointer;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.22),\n                0px 2px 2px 0px rgba(0, 0, 0, 0.16), \n                0px 1px 5px 0px rgba(0, 0, 0, 0.14);\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n        color: #FFA500;\n        transform: scale(1.05);\n    }\n"])))},7233:function(n,e,t){t.d(e,{Hx:function(){return f},bI:function(){return p},gQ:function(){return u},wr:function(){return o},xc:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="fc9b2ba3c1d7d66208afaa93dbd87a11",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/all/week?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews?&page=1&api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9382:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i,s,c,o,u,p,d,f=t(5861),x=t(9439),l=t(7757),h=t.n(l),v=t(2791),g=t(7689),m=t(7233),w=t(1087),Z=t(875),b=t(3479),j=t(184),k=function(n){var e=n.to,t=void 0===e?"/":e;return(0,j.jsx)(w.rU,{to:t,children:(0,j.jsxs)(Z.c,{children:[" ",(0,j.jsx)(b.Dfd,{})," Go back"]})})},y=t(168),_=t(5867),F=_.ZP.div(r||(r=(0,y.Z)(["\n    display: flex;\n    gap: 30px;\n    padding-bottom: 24px;\n    border-bottom: 2px solid #ECECEC;\n"]))),P=_.ZP.img(a||(a=(0,y.Z)(["\n    min-width: 400px;\n    border-radius: 10px;\n    outline: 4px solid #FFA500;\n"]))),A=_.ZP.div(i||(i=(0,y.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding-top: 10px;\n"]))),C=_.ZP.h2(s||(s=(0,y.Z)(["\n    color: #FFA500;\n    font-weight: 800;\n\n"]))),R=_.ZP.h3(c||(c=(0,y.Z)(["\n    color: #FFA500;\n    font-weight: 700;\n\n"]))),z=_.ZP.p(o||(o=(0,y.Z)(["\n    max-width: 66%;\n"]))),E=function(n){var e,t,r=n.info,a=r.title,i=r.poster_path,s=r.release_date,c=r.vote_average,o=r.overview,u=r.name,p=r.genres,d=(0,g.TH)(),f=(0,v.useRef)(null!==(e=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k,{to:f.current}),(0,j.jsxs)(F,{children:[(0,j.jsx)(P,{src:i?"https://image.tmdb.org/t/p/w500"+i:"https://www.reelviews.net/resources/img/default_poster.jpg",alt:a||u}),(0,j.jsxs)(A,{children:[(0,j.jsx)(C,{children:a||u}),(0,j.jsxs)("p",{children:["Rating: ",c]}),(0,j.jsxs)("p",{children:["Release date: ",s]}),(0,j.jsx)(R,{children:"Overview"}),(0,j.jsx)(z,{children:o}),(0,j.jsx)(R,{children:"Genres"}),(0,j.jsx)("p",{children:p.map((function(n){return n.name})).join(" ")})]})]})]})},S=t(9263),O=t(6062),U=_.ZP.h2(u||(u=(0,y.Z)(["\n    font-weight: 700;\n    font-size: 24px;\n    letter-spacing: 0.15em;\n    padding: 8px;\n    margin: 8px;\n"]))),D=_.ZP.ul(p||(p=(0,y.Z)(["\n    display: flex;\n    align-items: baseline;\n    gap: 16px;\n    margin-left: 16px;\n"]))),G=(0,_.ZP)(w.OL)(d||(d=(0,y.Z)(["\n    font-size: 18px;\n    font-weight: 600;\n    letter-spacing: 0.15em;\n    color: #fff;\n        \n    &.active {\n        padding: 8px;\n        border: 2px solid #FFA500;\n        border-radius: 8px;\n        color: #FFA500;\n    };\n        \n    &:hover {\n        transform: scale(1.05);\n    };\n"])));function H(){var n=(0,g.UO)().movieID,e=(0,v.useState)(),t=(0,x.Z)(e,2),r=t[0],a=t[1],i=(0,v.useState)(!1),s=(0,x.Z)(i,2),c=s[0],o=s[1],u=(0,v.useState)(!1),p=(0,x.Z)(u,2),d=p[0],l=p[1];return(0,v.useEffect)((function(){function e(){return(e=(0,f.Z)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),l(!1),e.next=5,(0,m.gQ)(n);case 5:t=e.sent,a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l(!0);case 12:return e.prev=12,o(!1),e.finish(12);case 15:case 16:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,j.jsxs)(j.Fragment,{children:[c&&(0,j.jsx)(S.a,{}),d&&(0,j.jsx)(O.T,{}),r&&(0,j.jsx)(E,{info:r}),(0,j.jsxs)("div",{children:[(0,j.jsx)(U,{children:"Additional information"}),(0,j.jsxs)(D,{children:[(0,j.jsx)(G,{to:"cast",children:"Cast"}),(0,j.jsx)(G,{to:"reviews",children:"Reviews"})]}),(0,j.jsx)(v.Suspense,{fallback:(0,j.jsx)(S.a,{}),children:(0,j.jsx)(g.j3,{})})]})]})}}}]);
//# sourceMappingURL=382.fbf5818a.chunk.js.map