(this["webpackJsonpreact-first-lesson"]=this["webpackJsonpreact-first-lesson"]||[]).push([[4],{345:function(e,s,a){"use strict";a.r(s);a(0);var t=a(137),c=a(1),n=a(149),i=a.n(n),d=a(14),r=a(11),j=a(44),o=a(55),b=a(97),m=a(138),g=Object(o.a)(30),l=Object(m.a)({form:"dialogsAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(b.a,{component:j.b,validate:[o.b,g],name:"newMessageBody",placeholder:"Enter your message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Add message"})})]})})),u=function(e){var s="/dialogs/"+e.id;return Object(c.jsxs)("div",{className:i.a.dialogs+" "+i.a.active,children:[Object(c.jsx)("img",{src:e.img}),Object(c.jsx)(d.b,{to:s,children:e.name})]})},O=function(e){return Object(c.jsx)("div",{className:i.a.message,children:e.message})},h=function(e){var s=e.messagesPage,a=s.dialogs.map((function(e){return Object(c.jsx)(u,{name:e.name,id:e.id,img:e.img})})),t=s.messages.map((function(e){return Object(c.jsx)(O,{message:e.message})}));return e.isAuth?Object(c.jsxs)("div",{className:i.a.dialogs,children:[Object(c.jsx)("div",{className:i.a.dialogsItems,children:a}),Object(c.jsxs)("div",{className:i.a.messages,children:[Object(c.jsx)("div",{children:t}),Object(c.jsx)(l,{onSubmit:function(s){e.addMessage(s.newMessageBody)}})]})]}):Object(c.jsx)(r.a,{to:"/login"})},x=a(13),f=a(105),v=a(10);s.default=Object(v.d)(Object(x.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMessage:function(s){e(Object(t.c)()),e(Object(t.b)(s))}}})),f.a)(h)}}]);
//# sourceMappingURL=4.b552b07b.chunk.js.map