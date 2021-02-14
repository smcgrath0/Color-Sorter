(this.webpackJsonpcolorsorter=this.webpackJsonpcolorsorter||[]).push([[0],{34:function(t,e,r){t.exports=r(47)},39:function(t,e,r){},40:function(t,e,r){},41:function(t,e,r){},46:function(t,e,r){},47:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(11),o=r.n(c),l=(r(39),r(40),r(3)),s=r(26),u=r(21),i=r(22),b=r(25),h=r(24),f=a.a.createContext(),m=function(t){Object(b.a)(r,t);var e=Object(h.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={currentColor:"",currentSort:"",currentColorArray:Object(s.a)(Array(256).keys()),sortedArray:Object(s.a)(Array(256).keys())},t.setCurrentColorArray=function(e){t.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{currentColorArray:e})}))},t.changeSort=function(e){e.currentTarget.classList.contains("bubble")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentSort:"bubbleSort"})):e.currentTarget.classList.contains("heap")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentSort:"heapSort"})):e.currentTarget.classList.contains("merge")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentSort:"mergeSort"})):e.currentTarget.classList.contains("quick")&&t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentSort:"quickSort"}))},t.changeColor=function(e){e.currentTarget.classList.contains("red-btn")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentColor:"red"})):e.currentTarget.classList.contains("blue-btn")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentColor:"blue"})):e.currentTarget.classList.contains("green-btn")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentColor:"green"})):e.currentTarget.classList.contains("purple-btn")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentColor:"purple"})):e.currentTarget.classList.contains("yellow-btn")?t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentColor:"yellow"})):e.currentTarget.classList.contains("turq-btn")&&t.setState(Object(l.a)(Object(l.a)({},t.state),{},{currentColor:"turq"}))},t}return Object(i.a)(r,[{key:"render",value:function(){var t=this.props.children,e=this.state.currentColor,r=this.state.currentSort,n=this.state.currentColorArray,c=this.state.sortedArray,o=this.changeColor,l=this.changeSort,s=this.setCurrentColorArray;return a.a.createElement(f.Provider,{value:{sortedArray:c,currentColor:e,changeColor:o,currentSort:r,changeSort:l,currentColorArray:n,setCurrentColorArray:s}},t)}}]),r}(n.Component),C=f,g=r(19),y=r(65),S=r(62),j=r(63),v=r(64);r(41);function O(t){for(var e=100*Math.random()+100,r=0;r<e;r++)t.sort((function(){return Math.random()-.5}));return t}var d=function(t,e){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=t}),[t]),Object(n.useEffect)((function(){if(null!==e){var t=setInterval((function(){r.current()}),e);return function(){return clearInterval(t)}}}),[e])};function p(t,e,r){var n=r,a=2*r+1,c=a+1;if(a<e&&t[a]>t[n]&&(n=a),c<e&&t[c]>t[n]&&(n=c),n!=r){var o=[t[n],t[r]];return t[r]=o[0],t[n]=o[1],{arr:t,length:e,largest:n}}return t}function k(){}function E(){}function A(t,e){for(var r=t.slice(0),n=0;n<r.length-1-e;n++)if(r[n]>r[n+1]){var a=r[n];r[n]=r[n+1],r[n+1]=a}return{array:r,round:++e}}var w=function(){var t=Object(n.useContext)(C),e=t.currentColorArray.length,r=Object(n.useState)(0),c=Object(g.a)(r,2),o=c[0],l=c[1],s=Object(n.useState)(Math.floor(e/2-1)),u=Object(g.a)(s,2),i=u[0],b=u[1],h=Object(n.useState)(e-1),f=Object(g.a)(h,2),m=f[0],w=f[1],N=Object(n.useState)(!1),x=Object(g.a)(N,2),L=x[0],T=x[1],q=function(e){T(!0);var r=e(t.currentColorArray,o);l(r.round),t.setCurrentColorArray(r.array),0===r.array.filter((function(e,r){return e!==t.sortedArray[r]})).length&&T(!1)};d((function(){"bubbleSort"===t.currentSort?q(A):"mergeSort"===t.currentSort?q(k):"quickSort"===t.currentSort?q(E):"heapSort"===t.currentSort&&function e(r){if(T(!0),i>=0){b(--i);p(t.currentColorArray,i,m)}m>=0&&(w(--m),p(t.currentColorArray,i,m).isArray());i<0&&m<0&&T(!1),p(t.currentColorArray,i,m).isArray()?T(!1):e()}()}),L?300:null);var M=function(t){T(!0)},B=function(e){T(!1),t.setCurrentColorArray(O(t.currentColorArray))};return a.a.createElement(y.a,{position:"static"},a.a.createElement(S.a,{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(j.a,{variant:"h6",className:"header-title"},"Color Sorter")),a.a.createElement("div",null,a.a.createElement(v.a,{color:"inherit",className:"btn btn-sort merge",onClick:function(t){B()}},"Randomize")),a.a.createElement("div",null,a.a.createElement(v.a,{color:"inherit",className:"btn btn-sort merge",onClick:function(e){t.changeSort(e),M()}},"Merge Sort"),a.a.createElement(v.a,{color:"inherit",className:"btn btn-sort heap",onClick:function(e){t.changeSort(e),M()}},"Heap Sort"),a.a.createElement(v.a,{color:"inherit",className:"btn btn-sort bubble",onClick:function(e){t.changeSort(e),M()}},"Bubble Sort"),a.a.createElement(v.a,{color:"inherit",className:"btn btn-sort quick",onClick:function(e){t.changeSort(e),M()}},"Quick Sort")),a.a.createElement("div",null,a.a.createElement(v.a,{color:"inherit",className:"btn turq-btn",onClick:function(e){t.changeColor(e),B()}},"turq"),a.a.createElement(v.a,{color:"inherit",className:"btn yellow-btn",onClick:function(e){t.changeColor(e),B()}},"Yellow"),a.a.createElement(v.a,{color:"inherit",className:"btn purple-btn",onClick:function(e){t.changeColor(e),B()}},"Purple"),a.a.createElement(v.a,{color:"inherit",className:"btn red-btn",onClick:function(e){t.changeColor(e),B()}},"Red"),a.a.createElement(v.a,{color:"inherit",className:"btn blue-btn",onClick:function(e){t.changeColor(e),B()}},"Blue"),a.a.createElement(v.a,{color:"inherit",className:"btn green-btn",onClick:function(e){t.changeColor(e),B()}},"Green"))))},N=(r(46),function(t){Object(b.a)(r,t);var e=Object(h.a)(r);function r(t){var n;return Object(u.a)(this,r),(n=e.call(this)).state={counter:0,isLoading:!1},n}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var t=O(this.context.currentColorArray);this.context.setCurrentColorArray(t)}},{key:"chooseColor",value:function(t){var e="";switch(this.context.currentColor){case"red":e="rgb(".concat(t,", 0, 0)");break;case"blue":e="rgb(0, 0, ".concat(t,")");break;case"green":e="rgb(0, ".concat(t,", 0)");break;case"purple":e="rgb(".concat(t,", 0, ").concat(t,")");break;case"yellow":e="rgb(".concat(t,", ").concat(t,", 0)");break;case"turq":e="rgb(0, ".concat(t,", ").concat(t,")");break;default:e="rgb(".concat(t,", 0, 0)")}return e}},{key:"render",value:function(){var t=this;return a.a.createElement("main",null,this.context.currentColorArray.map((function(e){return a.a.createElement("div",{className:"item",key:e,style:{backgroundColor:t.chooseColor(e)}})})))}}]),r}(a.a.Component));N.myContext=C,N.contextType=C;var x=N;var L=function(){return a.a.createElement(m,{value:{sort:"merge",color:"red"}},a.a.createElement("div",{className:"App"},a.a.createElement(w,null),a.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.10ffb145.chunk.js.map