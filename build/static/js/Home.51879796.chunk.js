(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,n){(t=e.exports=n(73)(!0)).push([e.i,"._Home_size_2kzdCHvo{font-size:2.133vw;width:100vw;height:100vh}._Home_size_2kzdCHvo div:last-child{padding-bottom:14vw}._Home_size_2kzdCHvo ._Home_mask_2wqKA7OQ{font-size:6.667vw;position:fixed;width:100vw;height:100vh}._Home_img_ZbtQR4q3{width:32vw;height:32vw}._Home_show_1sb3iPf1{overflow:inherit}._Home_hide_3y-jMuqW{overflow:hidden;height:100vh}","",{version:3,sources:["/Users/ljzhang/Desktop/react/meiye/src/Page/Home/Home.scss"],names:[],mappings:"AAAA,qBACE,kBAAmB,AACnB,YAAa,AACb,YAAc,CAAE,AAChB,oCACE,mBAAqB,CAAE,AACzB,0CACE,kBAAmB,AACnB,eAAgB,AAChB,YAAa,AACb,YAAc,CAAE,AAEpB,oBACE,WAAY,AACZ,WAAa,CAAE,AAEjB,qBACE,gBAAkB,CAAE,AAEtB,qBACE,gBAAiB,AACjB,YAAc,CAAE",file:"Home.scss",sourcesContent:[".size {\n  font-size: 2.133vw;\n  width: 100vw;\n  height: 100vh; }\n  .size div:last-child {\n    padding-bottom: 14vw; }\n  .size .mask {\n    font-size: 6.667vw;\n    position: fixed;\n    width: 100vw;\n    height: 100vh; }\n\n.img {\n  width: 32vw;\n  height: 32vw; }\n\n.show {\n  overflow: inherit; }\n\n.hide {\n  overflow: hidden;\n  height: 100vh; }\n"],sourceRoot:""}]),t.locals={size:"_Home_size_2kzdCHvo",mask:"_Home_mask_2wqKA7OQ",img:"_Home_img_ZbtQR4q3",show:"_Home_show_1sb3iPf1",hide:"_Home_hide_3y-jMuqW"}},206:function(e,t,n){"use strict";n.r(t);var o=n(10),i=n(0),s=n.n(i),c=n(25),r=n(80),a=n.n(r),u=n(104),d=n.n(u),A=n(82),h=n.n(A),l=n(105),m=n.n(l),v=new Map([["development","http://localhost:3000"],["production","http://localhost:5000"],["testProduction","testProduction"]]).get("production"),f=new Map,p=h.a.CancelToken,w=function(e,t){return o.b(void 0,void 0,Promise,(function(){var n,i,s,r,a,u,d;return o.c(this,(function(A){switch(A.label){case 0:return n=f.get(e),r=(s=h.a).create,a=[{baseURL:v,method:t.method.toUpperCase()||"GET",timeout:1e4},t],u={params:m.a.stringify(t.data)},n?[4,p.source().token]:[3,2];case 1:return d=A.sent(),[3,3];case 2:d="",A.label=3;case 3:return i=r.apply(s,[o.a.apply(void 0,a.concat([(u.cancelToken=d,u)]))]),[4,function(e,t){return o.b(void 0,void 0,void 0,(function(){return o.c(this,(function(n){return t.interceptors.request.use((function(t){return f.get(e)?t.cancelToken=new p((function(t){f.delete(e)})):f.set(e,e),t})),t.interceptors.response.use((function(t){return f.has(e)&&f.delete(e),Promise.resolve(t.data)}),(function(e){c.a.fail("网络错误, 请刷新重试")})),[2]}))}))}(e,i)];case 4:return A.sent(),[2,i(e,t)]}}))}))};t.default=function(e){var t=o.d(Object(i.useState)(new Array(100).fill(null).map((function(e,t){return t}))),2),n=t[0],r=(t[1],o.d(Object(i.useState)(!1),2)),u=(r[0],r[1]),A=o.d(Object(i.useState)(),2),h=A[0],l=A[1],m=Object(i.useRef)(null);Object(i.useEffect)((function(){return v(),function(){return document.body.removeEventListener("touchmove",f)}}),[]),Object(i.useEffect)((function(){}),[h]);var v=Object(i.useCallback)((function(){return o.b(void 0,void 0,void 0,(function(){var e;return o.c(this,(function(t){switch(t.label){case 0:return[4,o.b(void 0,void 0,Promise,(function(){return o.c(this,(function(e){switch(e.label){case 0:return[4,w("/song/url?id=15",{method:"GET",data:{}})];case 1:return[2,e.sent()]}}))}))];case 1:return e=t.sent(),l(e),[2]}}))}))}),[h]),f=function(e){e.preventDefault(),e.stopPropagation(),u(!0),document.body.style.overflow="hidden"},p=Object(i.useCallback)((function(){c.a.fail("success",1,(function(){document.body.removeEventListener("touchmove",f),document.body.style.overflow="inherit",u(!1)}),!0),document.body.addEventListener("touchmove",f,{passive:!1})}),[]),b=n.map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(d.a,{height:120,offset:300},s.a.createElement("img",{src:"http://adpic.ilaisa.com/Upload/b0680fd3-568e-4bc4-8778-4d1ff7d11bba.png",className:a.a.img})))}));return s.a.createElement("div",{onClickCapture:p,ref:m,className:[a.a.size].join(" ")},s.a.createElement("button",{onClick:v},"请求数据"),b,"Home1315ff")}},80:function(e,t,n){var o=n(187);"string"==typeof o&&(o=[[e.i,o,""]]);n(74)(o,{hmr:!1,transform:void 0}),o.locals&&(e.exports=o.locals)}}]);