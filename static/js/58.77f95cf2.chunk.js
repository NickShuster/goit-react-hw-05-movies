"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[58],{58:function(t,e,r){function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e),r.d(e,{default:function(){return h}});var u=r(861),o=r(439),s=r(757),i=r.n(s),p=r(791),f=r(689),l=r(256),v=r(184);var h=function(){var t=(0,f.UO)().movieId,e=(0,p.useState)([]),r=(0,o.Z)(e,2),n=r[0],c=r[1],s=(0,p.useState)(!0),h=(0,o.Z)(s,2),d=h[0],m=h[1];return(0,p.useEffect)((function(){var e=function(){var e=(0,u.Z)(i().mark((function e(){var r,n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.xc)(t);case 3:return r=e.sent,n=r.map(function(){var t=(0,u.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.fy)(e.id);case 3:return r=t.sent,t.abrupt("return",a(a({},e),{},{images:r}));case 7:return t.prev=7,t.t0=t.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0456\u0439 \u0430\u043a\u0442\u043e\u0440\u0430:",t.t0),t.abrupt("return",e);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),e.next=7,Promise.all(n);case 7:o=e.sent,c(o),m(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u0430\u043a\u0442\u043e\u0440\u0456\u0432:",e.t0),m(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),d?(0,v.jsx)("div",{children:"Loading..."}):(0,v.jsx)("div",{children:(0,v.jsx)("ul",{children:n.map((function(t){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("p",{children:["Name: ",t.name]}),(0,v.jsxs)("p",{children:["Character: ",t.character]}),t.images&&t.images.length>0&&(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.images[0].file_path),alt:t.name})})]},t.id)}))})})}},256:function(t,e,r){r.d(e,{Hx:function(){return h},Y5:function(){return f},fy:function(){return v},wr:function(){return i},xc:function(){return l},z1:function(){return p}});var n=r(861),c=r(757),a=r.n(c),u=r(243),o="4f40632f604dfec179dda8e530bb62da",s="https://api.themoviedb.org/3",i=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/trending/movie/week?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/person/").concat(e,"/images?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.profiles);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=58.77f95cf2.chunk.js.map