(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),i=n.n(c),r=n(35),s=n.n(r),o=(n(114),n(100)),l=n.n(o),u={background:{color:{value:"#1e1e1e"}},fpsLimit:100,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:1,opacity:.8,size:40},push:{quantity:3},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.3},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0},j=function(){return Object(a.jsx)(l.a,{className:"particles",canvasClassName:"canvas",options:u})},d=n(14),b=n.n(d),f=n(32),h=n(19),p=n(313),O=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],r="Hi human. It's not the time to take over yet...but it will be soon. For now I can only recognize cats and dogs, so you don't have to be afraid, for now.",s=function(e){return new Promise((function(t){return setTimeout(t,e)}))},o=function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=!1,a=b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i((function(e){return e+r.charAt(a)})),"."!==r.charAt(a)){e.next=4;break}return e.next=4,s(520);case 4:if("d"===r.charAt(a)&&t++,4!==t||n){e.next=9;break}return e.next=8,s(1200);case 8:n=!0;case 9:if(","!==r.charAt(a)){e.next=12;break}return e.next=12,s(200);case 12:return e.next=14,s(70);case 14:case"end":return e.stop()}}),e)})),c=0;case 4:if(!(c<r.length)){e.next=9;break}return e.delegateYield(a(c),"t0",6);case 6:c++,e.next=4;break;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(a.jsx)(p.a,{expand:"lg",className:"monolog",children:Object(a.jsx)("p",{className:"text",children:n})})},x=n(307),m=n(308),v=n(309),g=n(108),k=n(104),y=n(312),w=function(e){var t=Object(c.useState)(e),n=Object(h.a)(t,2),a=n[0],i=n[1];return[a,function(e){i(e)},function(){i("")}]},C=Object(c.createContext)(void 0);function L(e){var t=e.children,n="or upload an image",i=Object(c.useState)(n),r=Object(h.a)(i,2),s=r[0],o=r[1],l=w(""),u=Object(h.a)(l,3),j=u[0],d=u[1],b=u[2],f=w(""),p=Object(h.a)(f,3),O=p[0],x=p[1],m=p[2],v=Object(c.useState)(!0),g=Object(h.a)(v,2),k=g[0],y=g[1],L=function(e){var t=Object(c.useState)(e),n=Object(h.a)(t,2),a=n[0],i=n[1];return[a,function(e){i(e)},function(){i(void 0)}]}(void 0),I=Object(h.a)(L,3),N=I[0],P=I[1],A=I[2];return Object(a.jsx)(C.Provider,{value:{filename:s,input:j,file:N,isLink:k,imgPreview:O,handleLink:function(e){y(!0),A(),o(n),d(e.target.value),m()},setIsLink:y,handleFile:function(e){e.target.files&&(y(!1),P(e.target.files[0]),o(e.target.files[0].name),d(e.target.files[0].name),x(URL.createObjectURL(e.target.files[0])))},resetInput:b},children:t})}var I,N=function(){var e=Object(c.useContext)(C),t=e.handleLink,n=e.handleFile,i=e.filename,r=e.isLink,s=e.setIsLink,o=e.resetInput,l=e.input;return Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{className:"main-form",children:Object(a.jsxs)(m.a,{className:"mb-3",children:[Object(a.jsxs)(v.a,{drop:"up",as:m.a.Prepend,title:r?"Link":"File",children:[Object(a.jsx)(g.a.Item,{href:"#",onClick:function(){return s(!0)},children:"Link"}),Object(a.jsx)(g.a.Item,{href:"#",onClick:function(){return s(!1)},children:"File"})]}),Object(a.jsx)("div",{className:"x-icon",onClick:function(){var e;o(),null===(e=document.getElementById("form"))||void 0===e||e.focus()},children:"X"}),Object(a.jsx)(k.a,{style:{color:"#808e7d"},id:"form",placeholder:"Paste a link",value:r?l:"",onChange:function(e){return t(e)}}),Object(a.jsx)(y.a.File,{label:i,lang:"en",custom:!0,onChange:function(e){return n(e)}})]})})})},P=n(311),A=function(e){var t=[],n=e.input,a=e.isLink,c=e.file;return a&&0===n.length&&t.push("Please fill in a link"),a||c||t.push("Please select a file first"),{isOK:0===t.length,errors:t}},S=n(106),F=n.n(S),T="production"==(null===(I="production")?void 0:I.toString()),E=F.a.create({baseURL:T?"http://18.158.52.156:4000":"http://localhost:4000",timeout:3e4,headers:{"X-Custom-Header":"foobar","Content-Type":"application/json"}}),z=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t,t.name),e.abrupt("return",new Promise((function(e,t){E.post("/upload/",n).then((function(t){e(t.data)})).catch((function(e){t(e)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=Object(c.createContext)(void 0);function H(e){var t=e.children,n=Object(c.useState)({success:!1,message:void 0}),i=Object(h.a)(n,2),r=i[0],s=i[1],o=Object(c.useContext)(C),l=o.file,u=o.isLink,j=o.input,d=Object(c.useState)(""),p=Object(h.a)(d,2),O=p[0],x=p[1],m=Object(c.useState)(!1),v=Object(h.a)(m,2),g=v[0],k=v[1],y=function(){var e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=A(t={file:l,isLink:u,input:j})).isOK){e.next=16;break}if(k(!0),u||!l){e.next=13;break}return e.prev=5,e.next=8,z(l);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),x(e.t0.message);case 13:E.post("/predict/",t).then((function(e){200===e.status?(s(e.data),k(!1)):(x(e.statusText.toLowerCase()),k(!1))})).catch((function(e){k(!1),x(e.message)})),e.next=17;break;case 16:x(n.errors[0]);case 17:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(B.Provider,{value:{prediction:r,setPrediction:s,predict:y,error:O,setError:x,isLoading:g},children:t})}var R=n(105),M=function(){var e=Object(c.useContext)(C),t=e.input,n=e.isLink,i=e.imgPreview;return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(R.a,{}),Object(a.jsx)(R.a,{children:Object(a.jsx)("img",{src:n?t:i,alt:"",id:"input-canvas"})})]})},U=n(103),D=n(310),J=n(314),K=function(){var e=Object(c.useContext)(B),t=e.error,n=e.prediction;return e.isLoading?Object(a.jsx)(R.a,{children:Object(a.jsx)(D.a,{animation:"border",variant:"light",className:"spinner"})}):n.success?Object(a.jsx)(J.a,{variant:"success",className:"message-board",children:"It's a ".concat(n.message,"!")}):t.length>0?Object(a.jsx)(J.a,{variant:"danger",className:"message-board",children:t}):Object(a.jsx)("div",{})},X=function(){var e=Object(c.useContext)(B).predict;return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(U.a,{variant:"light",className:"predict-button",onClick:function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Predict"})}),Object(a.jsx)(K,{})]})},Y=n(44),_=function(){return Object(a.jsx)(Y.b,{to:"/info",children:Object(a.jsx)(U.a,{variant:"light",className:"info-button",children:"Info"})})},q=function(){return Object(a.jsx)(L,{children:Object(a.jsx)(H,{children:Object(a.jsxs)(P.a,{children:[Object(a.jsx)(_,{}),Object(a.jsx)(M,{}),Object(a.jsx)(N,{}),Object(a.jsx)(X,{})]})})})},W=n(315),G=function(){return Object(a.jsx)(Y.b,{to:"/",children:Object(a.jsx)(U.a,{variant:"light",className:"back-button",children:"<"})})},Q=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{}),Object(a.jsx)(P.a,{className:"info-page",children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(W.a,{body:!0,children:[Object(a.jsx)("h1",{children:"Some info"}),Object(a.jsxs)("p",{children:["This app was designed by ",Object(a.jsx)("b",{children:"Thergiakis Eftichios "}),"by"," ",Object(a.jsx)("b",{children:"November 2020"}),". It runs a flask API in the backend in order to retrieve the model and being able to make the predictions. The model as of the last training has an accuracy of 93%, not perfect but it can be better if it gets extensively trained in a larger dataset. You can always contact the developer of this app on the email ",Object(a.jsx)("b",{children:"iamthteef_th@protonmail.com"})," and on discord under the nickname ",Object(a.jsx)("b",{children:"Th#1833"}),"."]}),Object(a.jsx)("h6",{children:"Thanks for coming this far... :)"}),Object(a.jsx)("h5",{style:{marginTop:"3%"},children:"Here's some AI fun facts:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"A self learning super computer named Nautilus can predict the future, and it became famous when it was able to locate Osama Bin Laden."}),Object(a.jsx)("li",{children:"China plans to use Artificial Intelligence to gain global economic dominance by 2030."}),Object(a.jsx)("li",{children:"Microsoft is infusing AI into everything they deliver across computing platforms and experiences."}),Object(a.jsxs)("li",{children:["When you interact with AI as a default voice it is mostly a female as studies have shown that both women and men prefer the sound of a female voice."," "]}),Object(a.jsx)("li",{children:"80% of Artificial Intelligence professors are male."})]})]})})})]})},V=n(13);var Z=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(O,{}),Object(a.jsx)(Y.a,{children:Object(a.jsxs)(V.c,{children:[Object(a.jsx)(V.a,{exact:!0,path:"/",component:q}),Object(a.jsx)(V.a,{exact:!0,path:"/info",component:Q})]})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,316)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(301);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root")),$()}},[[302,1,2]]]);
//# sourceMappingURL=main.94899531.chunk.js.map