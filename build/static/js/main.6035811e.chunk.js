(this.webpackJsonpreact_demo=this.webpackJsonpreact_demo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(9),r=n.n(i),s=(n(14),n(15),n(7)),l=n(8),a=n(0),u=function(e){var t=e.setNextToDo,n=(e.nextToDo,e.createToDo);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:n,children:[Object(a.jsx)("input",{onChange:function(e){return function(e){t(e.target.value)}(e)}}),Object(a.jsx)("input",{type:"submit",value:"Add To Do"})]})})},j=function(e){var t=e.list,n=e.statusChange,c=e.deleteToDo,o={textDecoration:"line-through"};return Object(a.jsxs)(a.Fragment,{children:["Display To Do's below",0!==t.length&&t.map((function(e,t){return Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"checkbox",onChange:function(){return n(t)}}),Object(a.jsx)("span",{style:e.complete?o:null,children:e.title}),Object(a.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return c(t)},children:"Delete"})]},t)}))]})},d=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],i=n[1],r=Object(c.useState)([{title:"Get Black Belt",complete:!1},{title:"Get Red Belt",complete:!1},{title:"Get Yellow Belt",complete:!1}]),d=Object(l.a)(r,2),b=d[0],h=d[1];return Object(a.jsxs)("div",{style:e.style,children:["To Do List",Object(a.jsx)(u,{setNextToDo:i,nextToDo:o,createToDo:function(e){e.preventDefault(),h([].concat(Object(s.a)(b),[{title:o,complete:!1}]))}}),Object(a.jsx)(j,{list:b,statusChange:function(e){var t=Object(s.a)(b);t[e].complete=!t[e].complete,h(t)},deleteToDo:function(e){h(b.filter((function(t){return t!==b[e]})))}})]})},b=n(3),h={scopes:["openid","profile","User.Read"]},p=function(e){var t=Object(b.d)(),n=t.instance,o=t.accounts,i=t.inProgress;Object(c.useEffect)((function(){var e=n.getAllAccounts();console.log(o,n,e)}),[]);return Object(a.jsxs)("div",{style:{margin:"auto",minWidth:"50%",maxWidth:"900px",padding:"20px",textAlign:"center"},children:[Object(a.jsx)("h1",{children:"Atheniticated To do App:"}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(d,{}),Object(a.jsx)("button",{style:{margin:"10px",padding:"5px 10px"},onClick:function(){return n.logout(h).catch((function(e){return console.log(e)}))},children:"Logout"})]}),Object(a.jsx)(b.c,{children:Object(a.jsx)("p",{style:{textAlign:"center"},children:"No users are signed in!"})}),Object(a.jsx)("h4",{children:o.length>0?Object(a.jsxs)("span",{children:["There are currently ",o.length," users signed in!"]}):"login"===i?Object(a.jsx)("span",{children:"Login is currently in progress!"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{children:"There are currently no users signed in!"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{style:{margin:"10px",padding:"5px 10px"},onClick:function(){return n.loginPopup(h).catch((function(e){return console.log(e)}))},children:"Login"})]})})]})},x=new(n(2).f)({auth:{clientId:"1877b32e-fba5-4a06-a0fd-6f867ba4ea01",authority:"https://login.microsoftonline.com/common",redirectUri:"http://localhost:3000"},cache:{cacheLocation:"localStorage"}});var g=function(){return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)(b.b,{instance:x,children:Object(a.jsx)(p,{})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.6035811e.chunk.js.map