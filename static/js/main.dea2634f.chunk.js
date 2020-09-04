(this.webpackJsonplinguaboa=this.webpackJsonplinguaboa||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),r=n.n(o),s=(n(17),n(9)),c=n(7),u=n(2),l=n(3),d=n(1),m=n(5),h=n(4),f=(n(18),n(19),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,a=e.type,o=e.from,r=e.to,s="".concat(o?"snake-part-from-".concat(o," "):"").concat(r?"snake-part-to-".concat(r):"");return i.a.createElement("div",{style:{gridRowStart:n,gridColumnStart:t},className:"snake-part snake-part-".concat(a," ").concat(s)})}}]),n}(i.a.Component)),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(u.a)(this,n);var i=(a=t.call(this,e)).props,o=i.x,r=i.y;return a.initialState={partsList:[{x:o,y:r},{x:o+1,y:r},{x:o+2,y:r}],length:3},a.state=a.initialState,a.update=a.update.bind(Object(d.a)(a)),a.move=a.move.bind(Object(d.a)(a)),a.die=a.die.bind(Object(d.a)(a)),a.eat=a.eat.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"update",value:function(e){e-this.before>1e3/this.state.length+100&&(this.move(),this.before=e),this.animationID=window.requestAnimationFrame(this.update)}},{key:"componentDidMount",value:function(){this.before=0,this.animationID=window.requestAnimationFrame(this.update)}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationID)}},{key:"getDirectionFromCoordinates",value:function(e,t){if(e&&t){var n=e.x,a=e.y,i=n-t.x,o=a-t.y;if(0===o){if(1===i)return"left";if(-1===i)return"right"}if(0===i){if(1===o)return"up";if(-1===o)return"down"}}}},{key:"getPartElementByIndex",value:function(e){var t=this.state.partsList,n=t[e],a=0===e?"head":e===t.length-1?"tail":"middle",o="tail"===a?void 0:t[e+1],r="head"===a?void 0:t[e-1];return i.a.createElement(f,{x:n.x,y:n.y,type:a,from:this.getDirectionFromCoordinates(n,o),to:this.getDirectionFromCoordinates(n,r),key:"".concat(n.x,"-").concat(n.y)})}},{key:"move",value:function(){var e=this.state,t=e.partsList,n=e.length,a=this.props,i=a.foodList,o=a.newSnakePartPositions,r=a.boardWidth,s=a.boardHeight,u=a.directionVector;if(0!==u.x||0!==u.y){var l=t[0],d={x:l.x+u.x,y:l.y+u.y},m=t.some((function(e){return e.x===d.x&&e.y===d.y})),h=d.x<=0||d.x>r||d.y<=0||d.y>s;if(m||h)this.die();else{var f=n>t.length?t:t.slice(0,-1);this.setState({partsList:[d].concat(Object(c.a)(f))}),o(t);var b=i.findIndex((function(e){return e.x===d.x&&e.y===d.y}));-1!==b&&this.eat(b)}}}},{key:"eat",value:function(e){0!==e&&this.die(),this.setState({length:this.state.length+2}),this.props.eat(e)}},{key:"die",value:function(){this.setState(this.initialState),this.props.die()}},{key:"render",value:function(){var e=this,t=this.props;t.x,t.y;return this.state.partsList.map((function(t,n){return e.getPartElementByIndex(n)}))}}]),n}(i.a.Component),y=(n(20),{numbers:["0","1","2","3","4","5","6","7","8","9","10"],animals:["\ud83d\udc3b","\ud83d\udc0e","\ud83d\udc18","\ud83d\udc31","\ud83d\udc26","\ud83d\udc2d"]}),p={english:{code:"en",numbers:["zero","one","two","three","four","five","six","seven","eight","nine","ten"],animals:["bear","horse","elephant","cat","bird","mouse"]},german:{code:"de-DE",numbers:["null","eins","zwei","drei","vier","f\xfcnf","sechs","sieben","acht","neun","zehn"],animals:["B\xe4r","Pferd","Elefant","Katze","vogel","Maus"]},albanian:{code:"sq-AL",numbers:["zero","nj\xeb","dy","tre","kat\xebr","pes\xeb","gjasht\xeb","shtat\xeb","tet\xeb","n\xebnt\xeb","dhjet\xeb"],animals:["ariu","kali","elefanti","mace","zog","miu"]},greek:{code:"el-GR",numbers:["\u03bc\u03b7\u03b4\u03ad\u03bd","\u03ad\u03bd\u03b1","\u03b4\u03cd\u03bf","\u03c4\u03c1\u03af\u03b1","\u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03c0\u03ad\u03bd\u03c4\u03b5","\u03ad\u03be\u03b9","\u03b5\u03c6\u03c4\u03ac","\u03bf\u03c7\u03c4\u03ce","\u03b5\u03bd\u03bd\u03b9\u03ac","\u03b4\u03ad\u03ba\u03b1"],animals:["\u03b1\u03c1\u03ba\u03bf\u03cd\u03b4\u03b1","\u03ac\u03bb\u03bf\u03b3\u03bf","\u03b5\u03bb\u03ad\u03c6\u03b1\u03bd\u03c4\u03b1\u03c2","\u03b3\u03ac\u03c4\u03b1","\u03c0\u03bf\u03c5\u03bb\u03af","\u03c0\u03bf\u03bd\u03c4\u03af\u03ba\u03b9"]},dutch:{code:"nl",numbers:["nul","een","twee","drie","vier","vijf","zes","zeven","acht","negen","tien"],animals:["beer","paard","olifant","kat","vogel","muis"]},danish:{code:"da",numbers:["nul","en","to","tre","fire","fem","seks","syv","otte","ni","ti"],animals:["bj\xf8rn","hest","elefant","kat","fugl","mus"]},polish:{code:"pl",numbers:["zero","jeden","dwa","trzy","cztery","pi\u0119\u0107","sze\u015b\u0107","siedem","osiem","dziewi\u0119\u0107","dziesi\u0119\u0107"],animals:["nied\u017awied\u017a","ko\u0144","s\u0142o\u0144","kot","ptak","mysz"]},chinese:{code:"zh",numbers:["\u96f6","\u4e00","\u4e24\u4e2a","\u4e09\u4e2a","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"],animals:["\u718a","\u9a6c","\u5927\u8c61","\u732b","\u9e1f","\u8001\u9f20"]},turkish:{code:"tr",numbers:["s\u0131f\u0131r","bir","iki","\xfc\xe7","d\xf6rt","be\u015f","alt\u0131","yedi","sekiz","dokuz","on"],animals:["ay\u0131","at","fil","kedi","ku\u015f","far"]}},v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,a=e.subject;return i.a.createElement("div",{style:{gridRowStart:n,gridColumnStart:t},className:"food"},y[a][this.props.wordIndex])}}]),n}(i.a.Component),g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(u.a)(this,n);return(a=t.call(this,e)).state={foodList:[],snakePositions:[{x:4,y:4},{x:5,y:4},{x:6,y:4}],directionVector:{x:0,y:0},score:0},a.eatFood=a.eatFood.bind(Object(d.a)(a)),a.generateFood=a.generateFood.bind(Object(d.a)(a)),a.clickControl=a.clickControl.bind(Object(d.a)(a)),a.newSnakePartPositions=function(e){return a.setState({snakePositions:e})},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.generateFood(),window.addEventListener("keydown",(function(t){var n=e.state.snakePositions;switch(t.key){case"ArrowUp":if(n[0].y-n[1].y===1)break;e.setState({directionVector:{x:0,y:-1}});break;case"ArrowDown":if(n[0].y-n[1].y===-1)break;e.setState({directionVector:{x:0,y:1}});break;case"ArrowLeft":if(n[0].x-n[1].x===1)break;e.setState({directionVector:{x:-1,y:0}});break;case"ArrowRight":if(n[0].x-n[1].x===-1)break;e.setState({directionVector:{x:1,y:0}})}}))}},{key:"generateFood",value:function(){for(var e,t,n,a=this.state,i=a.foodList,o=a.snakePositions,r=this.props,s=r.subject,u=r.language,l=[].concat(Object(c.a)(i),Object(c.a)(o)),d=[],m=0;m<3;m++){do{e={x:Math.floor(18*Math.random()+1),y:Math.floor(18*Math.random()+1)},t=l.some((function(t){return t.x===e.x&&t.y===e.y}))}while(t);do{e.wordIndex=Math.floor(Math.random()*y[s].length),n=d.some((function(t){return t.wordIndex===e.wordIndex}))}while(n);d.push(e),l.push(e)}this.setState({foodList:d});var h=new SpeechSynthesisUtterance;h.lang=p[u].code,h.text=p[u][s][d[0].wordIndex],window.speechSynthesis.speak(h)}},{key:"eatFood",value:function(){var e=this.state.score;this.setState({foodList:[],score:e+10}),this.generateFood()}},{key:"clickControl",value:function(e){var t=this.state,n=t.snakePositions,a=t.directionVector,i=e.target.children[0].getBoundingClientRect(),o=n[0].y-n[1].y===0,r=n[0].x-n[1].x===0,s=i.top>e.clientY,c=(i.bottom,e.clientY,i.left>e.clientX),u=(i.right,e.clientX,{x:0,y:0});o?0===a.x&&0===a.y?u.x=-1:u.y=s?-1:1:r&&(u.x=c?-1:1),this.setState({directionVector:u})}},{key:"render",value:function(){var e=this.state,t=e.foodList,n=e.directionVector,a=e.score,o=this.props,r=o.language,s=o.subject,c=o.exit,u=t[0]&&p[r][s][t[0].wordIndex];return i.a.createElement("div",{className:"game-container"},i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},"Linguaboa"),i.a.createElement("div",{className:"practice-word"},u),i.a.createElement("div",{className:"score"},"Score: ".concat(a))),i.a.createElement("div",{className:"board",onClick:this.clickControl},i.a.createElement(b,{x:10,y:10,newSnakePartPositions:this.newSnakePartPositions,foodList:t,eat:this.eatFood,die:c,boardWidth:18,boardHeight:18,directionVector:n}),t.map((function(e){return i.a.createElement(v,{x:e.x,y:e.y,key:"".concat(e.x,"-").concat(e.y),language:r,subject:s,wordIndex:e.wordIndex})}))))}}]),n}(i.a.Component);var k=function(e){var t=Object.keys(p),n=Object.keys(y),a=e.setLanguage,o=e.setSubject,r=e.play,s=e.language,c=e.subject;return i.a.createElement("div",{className:"Menu"},i.a.createElement("form",{onSubmit:r},i.a.createElement("label",null,"Language:",i.a.createElement("select",{value:s,onChange:function(e){return a(e.target.value)}},i.a.createElement("option",{hidden:!0,disabled:!0,selected:!0,value:!0}," -- select a language -- "),t.map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement("label",null,"Subject:",i.a.createElement("select",{value:c,onChange:function(e){return o(e.target.value)}},n.map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement("input",{type:"submit",value:"Play"})))};n(21);var x=function(){var e=Object(a.useState)(Object.keys(p)[0]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(Object.keys(y)[0]),c=Object(s.a)(r,2),u=c[0],l=c[1],d=Object(a.useState)("menu"),m=Object(s.a)(d,2),h=m[0],f=m[1];return i.a.createElement("div",{className:"App"},function(){switch(h){case"menu":return i.a.createElement(k,{language:n,setLanguage:o,subject:u,setSubject:l,play:function(){return f("game")}});case"game":return i.a.createElement(g,{language:n,subject:u,exit:function(){return f("menu")}})}}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.dea2634f.chunk.js.map