(window["webpackJsonpreact-to-do"]=window["webpackJsonpreact-to-do"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(4),r=n.n(c),l=n(1),u=n(2);n(10);function i(e){var t=e.todo,n=e.index,o=e.completeTodo,c=e.removeTodo;return a.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return o(n)}},"Complete"),a.a.createElement("button",{onClick:function(){return c(n)}},"x")))}function d(e){var t=e.addTodo,n=Object(o.useState)(""),c=Object(u.a)(n,2),r=c[0],l=c[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),l(""))}},a.a.createElement("input",{type:"text",className:"input",value:r,onChange:function(e){return l(e.target.value)}}))}var m=function(){var e=Object(o.useState)([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){var t=Object(l.a)(n);t[e].isCompleted=!0,c(t)},m=function(e){var t=Object(l.a)(n);t.splice(e,1),c(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"todo-list"},n.map((function(e,t){return a.a.createElement(i,{key:t,index:t,todo:e,completeTodo:r,removeTodo:m})})),a.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(l.a)(n),[{text:e}]);c(t)}})))};r.a.render(a.a.createElement(m,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.cc91863d.chunk.js.map