(this.webpackJsonpsigtuple=this.webpackJsonpsigtuple||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),l=n.n(o),i=(n(10),n(11),function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"sigTuple"))}),c=(n(12),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright \xa9 2020 sigTuple"))}),u=function(e){return r.a.createElement("div",{className:"layout"},r.a.createElement(i,null),e.children,r.a.createElement(c,null))},d=n(4),s=n(1),m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,e.label),r.a.createElement("input",{type:"number",placeholder:e.label,id:e.id,value:e.value,onChange:function(t){return e.inputChangeHandler(t)}}))},h=(n(13),function(e){return r.a.createElement("div",{className:"controls"},r.a.createElement("h2",null,"INPUT"),r.a.createElement("form",{action:"/action_page.php"},r.a.createElement(m,{label:"X Coordinate",id:"xCoordinate",value:e.controlsInput.xCoordinate,inputChangeHandler:function(t){return e.inputChangeHandler(t)}}),r.a.createElement(m,{label:"Y Coordinate",id:"yCoordinate",value:e.controlsInput.yCoordinate,inputChangeHandler:function(t){return e.inputChangeHandler(t)}}),r.a.createElement(m,{label:"Width",id:"width",value:e.controlsInput.width,inputChangeHandler:function(t){return e.inputChangeHandler(t)}}),r.a.createElement(m,{label:"Height",id:"height",value:e.controlsInput.height,inputChangeHandler:function(t){return e.inputChangeHandler(t)}})))}),p=(n(14),function(e){var t={display:"flex",width:Number(e.controlsInput.width),height:Number(e.controlsInput.height),transform:"translate(".concat(Number(e.controlsInput.xCoordinate),"px, ").concat(Number(e.controlsInput.yCoordinate),"px)"),border:"2px solid #ccc"};return r.a.createElement("div",{className:"preview"},r.a.createElement("div",{className:"preview-content"},r.a.createElement("h2",null,"PREVIEW"),r.a.createElement("div",{className:"box-wrapper",id:"box-wrapper"},r.a.createElement("div",{className:"box",id:"box",style:t},r.a.createElement("div",{className:"dot"},".")))))}),g=(n(15),function(e){var t=Object(a.useState)({xCoordinate:0,yCoordinate:0,width:100,height:100}),n=Object(s.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)({xCoordinate:0,yCoordinate:0}),c=Object(s.a)(i,2),u=c[0],m=c[1];Object(a.useEffect)((function(){var e=document.getElementById("box-wrapper"),t=document.getElementById("box"),n=e.getBoundingClientRect(),a=t.getBoundingClientRect(),r={};r.xCoordinate=n.bottom-a.width/2,r.yCoordinate=n.top-a.height/2,r.width=n.width,r.height=n.height,m(r)}),[]);return r.a.createElement("div",{className:"content"},r.a.createElement(h,{controlsInput:o,inputChangeHandler:function(e){return function(e){var t=Object(d.a)({},o);e.target.value>u[e.target.id]?alert("Max value of ".concat(e.target.id," is ").concat(u[e.target.id])):(t[e.target.id]=e.target.value,l(t))}(e)}}),r.a.createElement(p,{controlsInput:o}))}),E=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(u,null,r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4b7322a0.chunk.js.map