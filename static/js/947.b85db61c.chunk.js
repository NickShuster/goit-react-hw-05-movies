"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(t,e,r){r.r(e);var n=r(861),c=r(439),a=r(757),u=r.n(a),s=r(791),o=r(689),i=r(87),p=r(256),f=r(184);e.default=function(t){var e=t.clearSearch,r=(0,o.UO)().movieId,a=(0,o.TH)().search,v=new URLSearchParams(a).get("fromMovies"),h=(0,s.useState)({}),l=(0,c.Z)(h,2),d=l[0],x=l[1],w=(0,s.useState)(!1),m=(0,c.Z)(w,2),k=m[0],j=m[1],Z=(0,s.useState)(!1),b=(0,c.Z)(Z,2),y=b[0],g=b[1],_=(0,s.useState)([]),C=(0,c.Z)(_,2),S=C[0],U=C[1],H=(0,o.s0)();(0,s.useEffect)((function(){e();var t=function(){var t=(0,n.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Y5)(r);case 3:return e=t.sent,x(e),t.next=7,(0,p.Hx)(r);case 7:n=t.sent,U(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[r,e]);var M=d.poster_path?"https://image.tmdb.org/t/p/w500/".concat(d.poster_path):"";return(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{onClick:function(){H("true"===v?"/movies":"/")},children:"Go back"}),(0,f.jsx)("h1",{children:d.title}),M&&(0,f.jsx)("img",{src:M,alt:d.title}),(0,f.jsx)("p",{children:d.overview}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(r,"/cast?fromMovies=").concat(v),onClick:function(){j((function(t){return!t})),g(!1)},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(r,"/reviews?fromMovies=").concat(v),onClick:function(){g((function(t){return!t})),j(!1)},children:"Reviews"})})]}),k&&(0,f.jsx)(o.j3,{}),y&&(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:S.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",t.author]}),(0,f.jsx)("p",{children:t.content})]},t.id)}))})})]})}},256:function(t,e,r){r.d(e,{Hx:function(){return h},Y5:function(){return f},wr:function(){return i},xc:function(){return v},z1:function(){return p}});var n=r(861),c=r(757),a=r.n(c),u=r(243),s="4f40632f604dfec179dda8e530bb62da",o="https://api.themoviedb.org/3",i=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/trending/movie/week?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.b85db61c.chunk.js.map