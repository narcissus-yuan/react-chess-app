(this["webpackJsonpchess-app"]=this["webpackJsonpchess-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),a=n(10),o=n.n(a),c=(n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(3)),r=n(6),l=n(5),d=n(4),p=n(7),u=n(1);function h(e,t,n){for(var i=[],s=n[[e,t]],a=-1;a<=1;a++)for(var o=-1;o<=1;o++)if(0!==a||0!==o){var c=e+a,r=t+o;x(c,r)&&n[[c,r]]!==s&&i.push(w(c,r))}return i}function m(e,t,n){for(var i=n[[e,t]],s=[],a=0,o=[[-1,0],[1,0],[0,-1],[0,1]];a<o.length;a++)for(var c=o[a],r=e,l=t;x(r,l);r+=c[0],l+=c[1])if(r!==e||l!==t){if(n[[r,l]]===i)break;if(s.push(w(r,l)),n[[r,l]])break}for(var d=0,p=[[-1,-1],[-1,1],[1,-1],[1,1]];d<p.length;d++)for(var u=p[d],h=e,m=t;x(h,m);h+=u[0],m+=u[1])if(h!==e||m!==t){if(n[[h,m]]===i)break;if(s.push(w(h,m)),n[[h,m]])break}return s}function b(e,t,n){for(var i=n[[e,t]],s=[],a=0,o=[[-1,-1],[-1,1],[1,-1],[1,1]];a<o.length;a++)for(var c=o[a],r=e,l=t;x(r,l);r+=c[0],l+=c[1])if(r!==e||l!==t){if(n[[r,l]]===i)break;if(s.push(w(r,l)),n[[r,l]])break}return s}function j(e,t,n){for(var i=[],s=n[[e,t]],a=0,o=[[-1,0],[1,0],[0,-1],[0,1]];a<o.length;a++)for(var c=o[a],r=e,l=t;x(r,l);r+=c[0],l+=c[1])if(r!==e||l!==t){if(n[[r,l]]===s)break;if(i.push(w(r,l)),n[[r,l]])break}return i}function O(e,t,n){for(var i=n[[e,t]],s=[],a=-2;a<=2;a++)if(0!==a)for(var o=3-Math.abs(a),c=void 0,r=-1;r<=1;r+=2)if(0!==(c=o*r)){var l=e+a,d=t+c;x(l,d)&&n[[l,d]]!==i&&s.push(w(l,d))}return s}function v(e,t,n){var i=[],s=n[[e,t]];if(1===s){var a=n[[e+1,t]],o=n[[e+2,t]];1===e?a===s||(2===a?i.push(w(e+1,t)):(i.push(w(e+1,t)),o!==s&&i.push(w(e+2,t)))):a!==s&&i.push(w(e+1,t))}else{var c=n[[e-1,t]],r=n[[e-2,t]];6===e?c===s||(1===c?i.push(w(e-1,t)):(i.push(w(e-1,t)),r!==s&&i.push(w(e-2,t)))):c!==s&&i.push(w(e-1,t))}for(var l=1===s?1:-1,d=-1;d<=1;d+=2){var p=e+l,u=t+d;x(p,u)&&n[[p,u]]===3-s&&i.push(w(p,u))}return i}function f(e){return JSON.parse(localStorage.getItem(e))}function y(e,t){localStorage.setItem(e,JSON.stringify(t))}function k(e){return e[0].toUpperCase()+e.slice(1)}function x(e,t){return e>=0&&e<8&&t>=0&&t<8}function w(e,t){return 8*e+t}function g(e){var t;return"king"===e?t=h:"queen"===e?t=m:"bishop"===e?t=b:"rook"===e?t=j:"knight"===e?t=O:"pawn"===e&&(t=v),t}var C=n(0),P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;Object(c.a)(this,n),i=t.call(this,e);var s=g(e.name);return i.state={genPossibilities:s},i}return Object(r.a)(n,[{key:"inRange",value:function(e,t){return e>=0&&e<8&&t>=0&&t<8}},{key:"encode",value:function(e,t){return 8*e+t}},{key:"render",value:function(){var e=this,t=1===this.props.side?"black":"white",n=this.props.row,i=this.props.col,s={side:this.props.sideMap[[n,i]],row:n,col:i,name:this.props.board[[n,i]],genPossibilities:this.state.genPossibilities};return Object(C.jsx)("div",{className:"figure ".concat(t," ").concat(this.props.name),onClick:function(){return e.props.handleClick(s)},onDoubleClick:function(){return e.props.handleClick(s)}})}}]),n}(s.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return n}(P),T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return this.props.name?Object(C.jsx)(P,Object(p.a)({},this.props)):Object(C.jsx)(S,Object(p.a)({},this.props))}}]),n}(s.a.Component);function M(e){return Object(C.jsx)("td",{className:"square ".concat(e.class),style:{backgroundColor:e.backgroundColor,boxShadow:e.boxShadow},children:e.children})}function L(e){for(var t=[],n=0;n<8;n++){for(var s=[],a=0;a<8;a++){var o="",c=-1,r=-1;e.selected&&(c=e.selected[0],r=e.selected[1]),e.selected&&c===n&&r===a?o="selected":c>-1&&r>-1&&e.showPos&&e.possiblePos&&e.possiblePos.includes(8*n+a)&&(o="indicate ".concat(1===e.sideMap[[c,r]]?"black":"white"," ").concat(e.selected[2]));var l=Object(C.jsxs)(M,{class:o,children:[Object(C.jsx)(T,{side:e.sideMap[[n,a]],name:e.board[[n,a]],row:n,col:a,board:e.board,sideMap:e.sideMap,handleClick:e.handleClick,handleDoubleClick:e.handleDoubleClick}),Object(C.jsx)("div",{className:"piece-pos",children:"(".concat(n+1,", ").concat(a+1,")")})]},8*n+a);s.push(l)}t.push(Object(C.jsx)("tr",{className:"line",children:s},n))}var d=Object(i.useRef)(null);return Object(C.jsx)("table",{className:"board",ref:d,children:Object(C.jsx)("tbody",{children:t})})}function N(e){return Object(C.jsx)("button",{className:"newGame ripple-effect",onClick:e.newGame,style:{appearance:"none"},tabIndex:"0","aria-label":"reset game / new game",children:e.children})}function I(e){var t=e.gameComplete?"".concat(e.winner," wins"):"".concat(1===e.turn?"black":"white"," to move"),n=e.gameComplete?"new game":"reset game";return Object(C.jsxs)("span",{className:"turn-statement",children:[t,Object(C.jsx)(N,{newGame:e.newGame,children:n})]})}function D(e){var t=parseInt(e/3600),n=parseInt(e%3600/60),i=e%3600%60,s=t>0?t+":":"",a=n>=10?n:"0".concat(n),o=i>=10?i:"0".concat(i);return"".concat(s).concat(a,":").concat(o)}function R(e){var t="white"===e.side?"White":"Black";return Object(C.jsxs)("div",{className:"timePanel timePanel".concat(t),children:[Object(C.jsx)("div",{className:"timePanelColor"}),Object(C.jsx)("div",{className:"timeLeft",children:D(e.time)})]})}var F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={whiteTime:e.whiteTime,blackTime:e.blackTime},i.props.isTimeLim&&setInterval((function(){return i.tick(i.props.turnStart)}),1e3),i.props.updateTimeLeft(1,i.props.whiteTime),i.props.updateTimeLeft(2,i.props.blackTime),i.tick=i.tick.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"tick",value:function(e){var t=this;e&&!this.props.gameComplete&&(1===e?this.setState((function(e){if(e.whiteTime>0)return{whiteTime:e.whiteTime-1};t.props.completed(1)})):this.setState((function(e){if(e.blackTime>0)return{blackTime:e.blackTime-1};t.props.completed(2)})))}},{key:"render",value:function(){return this.props.isTimeLim?Object(C.jsxs)("div",{className:"timer",children:[Object(C.jsx)(R,{side:"white",time:this.state.whiteTime,tick:this.tick,turnStart:this.props.turnStart}),Object(C.jsx)(R,{side:"black",time:this.state.blackTime,tick:this.tick,turnStart:this.props.turnStart})]}):null}}]),n}(s.a.Component),K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return this.props.msg?Object(C.jsx)("div",{className:"msg ".concat(this.props.type),style:{opacity:1},children:Object(C.jsx)("span",{children:this.props.msg})}):Object(C.jsx)("div",{className:"msg",style:{opacity:0},children:Object(C.jsx)("span",{children:this.props.msg})})}}]),n}(s.a.Component),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){for(var e=[],t=0,n=0;n<2;n++)for(var i=0===n?"black":"white",s=this.props.pieceCnt[n],a=0,o=Object.keys(s);a<o.length;a++){var c=o[a],r=s[c]-this.props.initPieceCnt[c],l={color:r>=0?"var(--deep-sky-blue)":"gray",fontWeight:"bold"},d=Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:i}),Object(C.jsx)("td",{children:c}),Object(C.jsx)("td",{children:s[c]}),Object(C.jsx)("td",{style:l,children:r})]},2*n+t);e.push(d),t++}return Object(C.jsxs)("table",{className:"counter",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Side"}),Object(C.jsx)("th",{children:"Piece name"}),Object(C.jsx)("th",{children:"Count"}),Object(C.jsx)("th",{children:"Change"})]})}),Object(C.jsx)("tbody",{children:e})]})}}]),n}(s.a.Component),q=n(8);function G(e){var t="".concat(e.controlType,"-").concat(e.dir),n="".concat(e.controlType).concat(k(e.dir));return Object(C.jsxs)("div",{className:"control-input",children:[Object(C.jsxs)("label",{htmlFor:t,children:["row"===e.dir?"row":"column"," "]}),Object(C.jsx)("input",{value:e.val,type:"number",name:t,id:t,className:"num-input",min:"1",max:"8",onChange:function(t){e.handleInput(n,t.target.value)}})]})}function B(e){return Object(C.jsxs)("fieldset",{children:[Object(C.jsxs)("legend",{children:[k(e.controlType)," piece at"]}),Object(C.jsxs)("div",{className:"control-inputs",children:[Object(C.jsx)(G,{controlType:e.controlType,dir:"row",val:e.row,handleInput:e.handleInput}),Object(C.jsx)(G,{controlType:e.controlType,dir:"col",val:e.col,handleInput:e.handleInput})]})]})}var H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={selectRow:"",selectCol:"",destinationRow:"",destinationCol:""},i.handleInput=i.handleInput.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"inRange",value:function(e,t){return e>=0&&e<8&&t>=0&&t<8}},{key:"handleInput",value:function(e,t){this.setState(Object(q.a)({},e,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("submitted"),console.log("select",this.state.selectRow,this.state.selectCol),console.log("destination",this.state.destinationRow,this.state.destinationCol);var t=this.state.selectRow,n=this.state.selectCol,i=this.state.destinationRow,s=this.state.destinationCol;t&&n&&i&&s&&this.inRange(t,n)&&this.inRange(i,s)&&(this.props.handleKeyboardControl(t-1,n-1,i-1,s-1),this.handleInput("selectRow",""),this.handleInput("selectCol",""),this.handleInput("destinationRow",""),this.handleInput("destinationCol",""))}},{key:"render",value:function(){var e=this;return Object(C.jsx)("div",{className:"keyboard-control",children:Object(C.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(C.jsx)("div",{className:"control-caption",children:"Keyboard Control"}),Object(C.jsx)("span",{className:"info",children:"Info: click on first button on top right to display piece positions"}),Object(C.jsx)(B,{row:this.state.selectRow,col:this.state.selectCol,controlType:"select",handleInput:this.handleInput}),Object(C.jsx)(B,{row:this.state.destinationRow,col:this.state.destinationCol,controlType:"destination",handleInput:this.handleInput}),Object(C.jsx)("input",{type:"submit",id:"control-submit-btn",className:"submit-btn"})]})})}}]),n}(s.a.Component);function E(e){return Object(C.jsxs)("div",{className:"promo-opt",onClick:function(){return e.pawnPromotion(e.name)},children:[Object(C.jsx)("input",{type:"radio",id:"promo ".concat(e.name),name:"promo type",value:"".concat(e.name)}),Object(C.jsx)("label",{htmlFor:"promo ".concat(e.name),children:e.name})]})}function A(e){return Object(C.jsxs)("div",{className:"pawn_promo",children:[Object(C.jsx)("span",{children:"Congratulations! Your pawn has reached the end!"}),Object(C.jsx)("br",{}),Object(C.jsx)("span",{children:"Promote your pawn to one of the following --"}),Object(C.jsxs)("div",{className:"promo_opts",children:[Object(C.jsx)(E,{name:"queen",pawnPromotion:e.pawnPromotion},0),Object(C.jsx)(E,{name:"knight",pawnPromotion:e.pawnPromotion},1),Object(C.jsx)(E,{name:"bishop",pawnPromotion:e.pawnPromotion},2),Object(C.jsx)(E,{name:"rook",pawnPromotion:e.pawnPromotion},3)]})]})}function U(e){return Object(C.jsx)("button",{className:"btn more ripple-effect",title:"piece count","aria-label":"open piece count",onClick:e.openPieceCnt,tabIndex:"0"})}function J(e){return Object(C.jsx)("button",{className:"btn open-control ripple-effect",title:"open control","aria-label":"open keyboard control",onClick:e.openKeyboardControl,tabIndex:"0"})}var W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={side:e.side,selected:null,turnStart:null,msg:null,msgType:null,possiblePos:[]},i.updateSelect=i.updateSelect.bind(Object(u.a)(i)),i.updateTurnStart=i.updateTurnStart.bind(Object(u.a)(i)),i.updatePossiblePos=i.updatePossiblePos.bind(Object(u.a)(i)),i.updateMsg=i.updateMsg.bind(Object(u.a)(i)),i.handleClick=i.handleClick.bind(Object(u.a)(i)),i.handleUnSelect=i.handleUnSelect.bind(Object(u.a)(i)),i.handleSelect=i.handleSelect.bind(Object(u.a)(i)),i.handlePawnPromo=i.handlePawnPromo.bind(Object(u.a)(i)),i.handleKeyboardControl=i.handleKeyboardControl.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"updateSelect",value:function(e){console.log(e),this.setState({selected:e})}},{key:"updateTurnStart",value:function(e){this.setState({turnStart:e})}},{key:"updatePossiblePos",value:function(e){this.setState({possiblePos:e})}},{key:"updateMsg",value:function(e,t){this.setState({msgType:e,msg:t})}},{key:"encode",value:function(e,t){return 8*e+t}},{key:"checkMove",value:function(e,t,n,i){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=s?s[3]:this.state.selected[3],o=a(e,t,this.props.sideMap);return o.includes(this.encode(n,i))}},{key:"handleUnSelect",value:function(e,t,n){var i="Un-selected ".concat(e," at (").concat(t,", ").concat(n,")");this.updateSelect(null),this.updatePossiblePos(null),this.updateMsg("complete",i)}},{key:"handleSelect",value:function(e,t,n,i,s,a){var o="Moved ".concat(e," to (").concat(i,", ").concat(s,")");this.updateSelect(null),this.updateMsg("complete",o);var c=this.props.updateBoard(t,n,i,s);return this.props.addHistory(a),this.props.updateTurn(),c}},{key:"handlePawnPromo",value:function(e,t,n,i){"pawn"===e&&(1===t&&7===n||2===t&&0===n)&&(document.body.classList.add("open-promo"),console.log("set pawn promotion",t),this.props.setPawnPromotion(t,n,i))}},{key:"handleMove",value:function(e,t,n,i,s,a){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=this.props.board[[s,a]],r=this.props.sideMap[[s,a]],l=this.checkMove(n,i,s,a,o);if(console.log("move ".concat(e," from (").concat(n,", ").concat(i,") to (").concat(s,", ").concat(a,")")),l){var d={isPawnPromotion:!1,pieceName:e,pieceSide:t,pieceOldRow:n,pieceOldCol:i,pieceNewRow:s,pieceNewCol:a,takeOverName:null,takeOverSide:null,takeOverRow:null,takeOverCol:null};r&&c&&(this.props.updatePieceCnt(r,c),d.takeOverName=c,d.takeOverSide=r,d.takeOverRow=s,d.takeOverCol=a);var p=this.handleSelect(e,n,i,s,a,d);p||this.handlePawnPromo(e,t,s,a),this.updatePossiblePos(null),this.updateTurnStart(t)}else this.updateMsg("warning","Wrong move")}},{key:"handleClick",value:function(e){if(!this.props.complete){var t=this.state.selected,n=e.side,i=this.props.turn,s=e.row,a=e.col,o=e.name;if(t){var c=t[0],r=t[1],l=t[2],d=this.props.sideMap[[c,r]];s===c&&a===r?this.handleUnSelect(o,c,r):this.handleMove(l,d,c,r,s,a)}else if(n===i){if(!o)return;this.updateSelect([s,a,o,e.genPossibilities]),this.updateMsg("complete","Selected ".concat(o," at (").concat(s,", ").concat(a,")"));var p=e.genPossibilities(s,a,this.props.sideMap);this.updatePossiblePos(p)}else this.updateMsg("warning","It's ".concat(1===i?"black":"white","'s turn"))}}},{key:"handleDoubleClick",value:function(e){if(!this.props.complete){var t=e.side,n=this.props.turn,i=e.row,s=e.col,a=e.name;if(t===n){this.updateSelect([i,s,a,e.genPossibilities]);var o=e.genPossibilities(i,s,this.props.sideMap);this.updatePossiblePos(o),this.updateMsg("complete","Selected ".concat(this.props.name," at (").concat(i,", ").concat(s,")"))}else this.updateMsg("warning","It's ".concat(1===n?"black":"white","'s turn"))}}},{key:"handleKeyboardControl",value:function(e,t,n,i){if(!this.props.complete){var s=this.props.sideMap[[e,t]],a=this.props.turn,o=this.props.board[[e,t]];if(s===a){var c=[e,t,o,g(o)],r=g(o)(e,t,this.props.sideMap);this.updatePossiblePos(r),this.handleMove(o,s,e,t,n,i,c)}else console.log(s,a),this.updateMsg("warning","It's ".concat(1===a?"black":"white","'s turn"))}}},{key:"render",value:function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{gameComplete:this.props.complete,winner:this.props.winner,turn:this.props.turn,newGame:this.props.newGame}),Object(C.jsx)(F,{gameComplete:this.props.complete,isTimeLim:this.props.isTimeLim,whiteTime:this.props.whiteTime,blackTime:this.props.blackTime,turnStart:this.state.turnStart,completed:this.props.completed,updateTimeLeft:this.props.updateTimeLeft}),Object(C.jsx)(L,Object(p.a)(Object(p.a)({},this.state),{},{showPos:this.props.showPos,board:this.props.board,sideMap:this.props.sideMap,handleClick:this.handleClick,handleDoubleClick:this.handleDoubleClick})),Object(C.jsx)(K,{type:this.state.msgType,msg:this.state.msg}),Object(C.jsxs)("div",{className:"countCont",children:[Object(C.jsx)(U,{openPieceCnt:this.props.openPieceCnt}),Object(C.jsx)(_,{pieceCnt:this.props.pieceCnt,initPieceCnt:this.props.initPieceCnt})]}),Object(C.jsx)(A,{pawnPromotion:this.props.pawnPromotion}),Object(C.jsxs)("div",{className:"controlCont",children:[Object(C.jsx)(J,{openKeyboardControl:this.props.openKeyboardControl}),Object(C.jsx)(H,{handleKeyboardControl:this.handleKeyboardControl})]})]})}}]),n}(s.a.Component);function Y(e){return Object(C.jsxs)("label",{className:"switch",children:[Object(C.jsx)("input",{type:"checkbox",id:"input1",defaultChecked:!0,onChange:function(t){e.updateShowPos(t.target.checked)},tabIndex:"0"}),Object(C.jsx)("span",{className:"slider round"})]})}function z(e){return Object(C.jsxs)("label",{className:"switch",children:[Object(C.jsx)("input",{type:"checkbox",id:"input2",onChange:function(t){e.updateDisplayPos(t.target.checked)},tabIndex:"0"}),Object(C.jsx)("span",{className:"slider round"})]})}function Q(e){return Object(C.jsxs)("label",{className:"switch",children:[Object(C.jsx)("input",{type:"checkbox",id:"input3",onChange:function(){e.openPieceCnt()},tabIndex:"0"}),Object(C.jsx)("span",{className:"slider round"})]})}function V(e){return Object(C.jsxs)("label",{className:"switch",children:[Object(C.jsx)("input",{type:"checkbox",id:"input4",onChange:function(){e.openKeyboardControl()},tabIndex:"0"}),Object(C.jsx)("span",{className:"slider round"})]})}function X(e){return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"setting switchSet",children:[Object(C.jsx)("span",{children:"Indicate possible positions for piece movement"}),Object(C.jsx)(Y,{updateShowPos:e.updateShowPos})]}),Object(C.jsxs)("div",{className:"setting switchSet",children:[Object(C.jsx)("span",{children:"Display positions of pieces for keyboard control"}),Object(C.jsx)(z,{updateDisplayPos:e.updateDisplayPos})]}),Object(C.jsxs)("div",{className:"setting switchSet",children:[Object(C.jsx)("span",{children:"Open table of piece count for black and white sides"}),Object(C.jsx)(Q,{openPieceCnt:e.openPieceCnt})]}),Object(C.jsxs)("div",{className:"setting switchSet",children:[Object(C.jsx)("span",{children:"Open form for keyboard control"}),Object(C.jsx)(V,{openKeyboardControl:e.openKeyboardControl})]})]})}function Z(e){return Object(C.jsxs)("div",{className:"ripple-effect",children:[Object(C.jsx)("input",{type:"radio",id:"".concat(e.colorMode,"_mode"),name:"mode",onChange:e.updateMode,tabIndex:"0",defaultChecked:!0===e.default}),Object(C.jsxs)("label",{htmlFor:"".concat(e.colorMode,"_mode"),children:[k(e.colorMode)," Mode"]})]})}function $(e){var t="light"===e.colorMode,n="dark"===e.colorMode,i="system"===e.colorMode;return Object(C.jsxs)("div",{className:"setting modeSet",children:[Object(C.jsx)("span",{children:"Choose color mode"}),Object(C.jsx)(Z,{colorMode:"light",updateMode:e.updateLightMode,default:t}),Object(C.jsx)(Z,{colorMode:"dark",updateMode:e.updateDarkMode,default:n}),Object(C.jsx)(Z,{colorMode:"system",updateMode:e.updateSystemMode,default:i})]})}function ee(e){return Object(C.jsxs)("div",{className:"ripple-effect",children:[Object(C.jsx)("input",{type:"radio",id:"".concat(e.pieceStyle,"_style"),name:"style",onChange:e.updateStyle,tabIndex:"0",defaultChecked:!0===e.default}),Object(C.jsxs)("label",{htmlFor:"".concat(e.pieceStyle,"_style"),children:[k(e.pieceStyle)," Style Chess Pieces"]})]})}function te(e){var t="plain"===e.pieceStyle,n="fancy"===e.pieceStyle;return Object(C.jsxs)("div",{className:"setting pieceSet",children:[Object(C.jsx)("span",{children:"Choose chess piece style"}),Object(C.jsx)(ee,{pieceStyle:"plain",updateStyle:e.updatePlainStyle,default:t}),Object(C.jsx)(ee,{pieceStyle:"fancy",updateStyle:e.updateFancyStyle,default:n})]})}function ne(e){var t=[],n=function(n){var i=e.history[n];if(i.isPawnPromotion)return"continue";var s=-1;e.history&&(s=e.history[(parseInt(n)+1).toString(10)]);var a="Move ".concat(1===i.pieceSide?"black":"white"," ").concat(i.pieceName,"         from (").concat(i.pieceOldRow,", ").concat(i.pieceOldCol,")         to (").concat(i.pieceNewRow,", ").concat(i.pieceNewCol,")"),o="";i.takeOverName&&(o=" , take over ".concat(1===i.takeOverSide?"black":"white"," ").concat(i.takeOverName)),a+=o,s&&s.isPawnPromotion&&(a+=", promote ".concat(1===s.pieceSide?"black":"white","  pawn            at (").concat(s.row,", ").concat(s.col,") to ").concat(s.newPieceName)),t.push(Object(C.jsx)("li",{onClick:function(){return e.timeTravel(n)},children:a},n))};for(var i in e.history)n(i);return 0===t.length&&t.push(Object(C.jsx)("li",{style:{cursor:"text"},children:"History is empty"},0)),Object(C.jsx)("ol",{className:"history",children:t})}function ie(){return Object(C.jsx)("span",{onClick:function(e){e.target.classList.contains("hist-open")?e.target.classList.remove("hist-open"):e.target.classList.add("hist-open")},tabIndex:"0",children:"Open history and time travel"})}function se(e){return Object(C.jsxs)("div",{className:"setting extSet",children:[Object(C.jsx)(ie,{}),Object(C.jsxs)("div",{className:"hist-ext",children:[Object(C.jsx)("span",{className:"info",children:"Info: Click on entry to reverse step and newer (following) steps"}),Object(C.jsx)(ne,{history:e.history,timeTravel:e.timeTravel})]})]})}function ae(e){var t,n,i=(t=e.time,"hour"===(n=e.unit)?3600*t:"minute"===n?60*t:"second"===n?t:null);return Object(C.jsx)("input",{type:"radio",id:e.id,name:"time",tabIndex:"0",checked:e.checked,onChange:function(){"no_time_lim"===e.id?e.updateTimeLim(!1):e.updateTimeLim(i)}})}function oe(e){return Object(C.jsxs)("div",{className:"ripple-effect",children:[Object(C.jsx)(ae,{id:"no_time_lim",checked:e.checked,updateTimeLim:e.updateIsTimeLim}),Object(C.jsx)("label",{htmlFor:"no_time_lim",children:"None"})]})}function ce(e){return Object(C.jsxs)("div",{className:"ripple-effect",children:[Object(C.jsx)(ae,{id:"".concat(e.time,"_").concat(e.unit),time:e.time,unit:e.unit,checked:e.checked,updateTimeLim:e.updateTimeLim}),Object(C.jsxs)("label",{htmlFor:"".concat(e.time,"_").concat(e.unit),children:[e.time," ",e.unit,e.time>1?"s":""]})]})}var re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={value:""},i.handleChange=i.handleChange.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"handleChange",value:function(e){var t,n=e.target.value;this.state.value.length>1?(t=n.slice(n.length-2,n.length),this.setState({value:t}),this.props.updateInput(this.props.unit,t)):(t=1===n.length?"0"+n:n,this.setState({value:t}),this.props.updateInput(this.props.unit,t)),t.length<2&&(t="0"+n,this.setState({value:t}),this.props.updateInput(this.props.unit,t))}},{key:"render",value:function(){return Object(C.jsx)("input",{type:"number",min:this.props.minTime,max:this.props.maxTime,name:this.props.unit,id:this.props.unit,className:"num-input","aria-label":this.props.unit,placeholder:"00",value:this.state.value,onChange:this.handleChange})}}]),n}(s.a.Component),le=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={hrs:0,mins:0,secs:0},i.updateInput=i.updateInput.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"updateInput",value:function(e,t){t=parseInt(t),"hour"===e?this.setState({hrs:t}):"minute"===e?this.setState({mins:t}):"second"===e&&this.setState({secs:t})}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"custom-time-opt",children:[Object(C.jsx)(ae,{id:"custom_time",time:3600*parseInt(this.state.hrs)+60*parseInt(this.state.mins)+parseInt(this.state.secs),unit:"second",updateTimeLim:this.props.updateTimeLim}),Object(C.jsxs)("label",{htmlFor:"custom_time",className:"custom-time-wrapper",children:[Object(C.jsx)("label",{htmlFor:"cust",children:"Enter custom time limit: "}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"time_input",children:[Object(C.jsx)(re,{minTime:"0",maxTime:"10",unit:"hour",updateInput:this.updateInput}),Object(C.jsx)("span",{className:"time_colon",children:":"}),Object(C.jsx)(re,{minTime:"0",maxTime:"59",unit:"minute",updateInput:this.updateInput}),Object(C.jsx)("span",{className:"time_colon",children:":"}),Object(C.jsx)(re,{minTime:"0",maxTime:"59",unit:"second",updateInput:this.updateInput})]})]})]})}}]),n}(s.a.Component);function de(e){var t=f("timeLimOpt")||-1,n=!1,i=[[5,"minute"],[10,"minute"],[15,"minute"],[30,"minute"],[45,"minute"],[1,"hour"],[1.5,"hour"],[2,"hour"]].map((function(i,s){var a=i[0]*("minute"===i[1]?60:3600);return t===a&&(n=!0),Object(C.jsx)(ce,{time:i[0],unit:i[1],checked:t===a,updateTimeLim:e.updateTimeLim},s)}));return Object(C.jsxs)("div",{className:"setting timeSet",children:[Object(C.jsx)("span",{children:"Choose time limit"}),Object(C.jsx)(oe,{checked:!n,updateIsTimeLim:e.updateIsTimeLim}),i,Object(C.jsx)(le,{updateTimeLim:e.updateTimeLim})]})}function pe(e){var t,n=document.body.classList.contains("light-mode"),i=document.body.classList.contains("dark-mode"),s=document.body.classList.contains("system-mode");n?t="light":i?t="dark":s&&(t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var a="light"===t?"dark":"light";return Object(C.jsx)("button",{className:"btn colorMode ".concat(a,"Mode ripple-effect"),title:"to ".concat(a," mode"),onClick:function(){"light"===a?(e.updateLightMode(),e.updateColorMode("light")):(e.updateDarkMode(),e.updateColorMode("dark"))},tabIndex:"0","aria-label":"switch to ".concat(a," mode")})}function ue(e){var t=e.history;return Object(C.jsx)("button",{className:"btn reverseOne ripple-effect",title:"undo",onClick:function(){t[t.length-1].isPawnPromotion?e.timeTravel(-2):e.timeTravel(-1)},disabled:0===t.length,tabIndex:"0","aria-label":"undo one step"})}function he(){return Object(C.jsx)("button",{className:"btn setSetting ripple-effect",title:"setting",onClick:function(){var e=document.body;e.classList.contains("open-setting")?e.classList.remove("open-setting"):e.classList.add("open-setting")},tabIndex:"0","aria-label":"set settings"})}function me(){return Object(C.jsx)("button",{className:"btn closeSetting ripple-effect",title:"close",onClick:function(){document.body.classList.remove("open-setting")},tabIndex:"0","aria-label":"close settings"})}function be(){return Object(C.jsx)("button",{className:"btn open-piece-pos ripple-effect",title:"show piece positions",onClick:function(){document.body.classList.contains("open-piece-pos")?document.body.classList.remove("open-piece-pos"):document.body.classList.add("open-piece-pos")},tabIndex:"0","aria-label":"show piece positions"})}var je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).updateLightMode=i.updateLightMode.bind(Object(u.a)(i)),i.updateDarkMode=i.updateDarkMode.bind(Object(u.a)(i)),i.updateSystemMode=i.updateSystemMode.bind(Object(u.a)(i)),i.updatePlainStyle=i.updatePlainStyle.bind(Object(u.a)(i)),i.updateFancyStyle=i.updateFancyStyle.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){"plain"===this.props.pieceStyle?this.updatePlainStyle():this.updateFancyStyle();var e=this.props.colorMode;"light"===e?this.updateLightMode():"dark"===e?this.updateDarkMode():this.updateSystemMode()}},{key:"updateLightMode",value:function(){document.body.classList.contains("dark-mode")&&document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode"),this.props.updateColorMode("light")}},{key:"updateDarkMode",value:function(){document.body.classList.contains("light-mode")&&document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode"),this.props.updateColorMode("dark")}},{key:"updateSystemMode",value:function(){document.body.classList.contains("light-mode")?document.body.classList.remove("light-mode"):document.body.classList.contains("dark-mode")&&document.body.classList.remove("dark-mode"),this.props.updateColorMode("system")}},{key:"updatePlainStyle",value:function(){document.body.classList.contains("fancy-style")&&document.body.classList.remove("fancy-style"),document.body.classList.add("plain-style"),this.props.updatePieceStyle("plain")}},{key:"updateFancyStyle",value:function(){document.body.classList.contains("plain-style")&&document.body.classList.remove("plain-style"),document.body.classList.add("fancy-style"),this.props.updatePieceStyle("fancy")}},{key:"render",value:function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(be,{}),Object(C.jsx)(pe,{updateColorMode:this.props.updateColorMode,updateLightMode:this.updateLightMode,updateDarkMode:this.updateDarkMode}),Object(C.jsx)(ue,{history:this.props.history,timeTravel:this.props.timeTravel}),Object(C.jsx)(he,{}),Object(C.jsxs)("div",{className:"settings",children:[Object(C.jsx)("h1",{children:"SETTINGS"}),Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Appearance"}),Object(C.jsx)(X,{updateShowPos:this.props.updateShowPos,updateDisplayPos:this.props.updateDisplayPos,openPieceCnt:this.props.openPieceCnt,openKeyboardControl:this.props.openKeyboardControl})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Color Mode"}),Object(C.jsx)($,{colorMode:this.props.colorMode,updateLightMode:this.updateLightMode,updateDarkMode:this.updateDarkMode,updateSystemMode:this.updateSystemMode},this.props.colorMode)]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Chess Piece Style"}),Object(C.jsx)(te,{pieceStyle:this.props.pieceStyle,updatePlainStyle:this.updatePlainStyle,updateFancyStyle:this.updateFancyStyle})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"History"}),Object(C.jsx)(se,{history:this.props.history,timeTravel:this.props.timeTravel})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Time Limit"}),Object(C.jsx)(de,{updateIsTimeLim:this.props.updateIsTimeLim,updateTimeLim:this.props.updateTimeLim})]}),Object(C.jsx)(me,{})]})]})}}]),n}(s.a.Component);function Oe(){return Object(C.jsx)("div",{className:"modal",onClick:function(){var e=document.body;e.classList.remove("open-setting"),e.classList.remove("open-promo")}})}var ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={hasError:!1},i}return Object(r.a)(n,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(C.jsxs)("div",{className:"errorBoundary",children:[Object(C.jsx)("div",{className:"errorPic"}),Object(C.jsx)("h1",{children:"Sorry, something went wrong."})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(s.a.Component),fe={king:[4],queen:[3],bishop:[2,5],knight:[1,6],rook:[0,7],pawn:[0,1,2,3,4,5,6,7]},ye={},ke={},xe={king:1,queen:1,bishop:2,knight:2,rook:2,pawn:8},we={0:{king:1,queen:1,bishop:2,knight:2,rook:2,pawn:8},1:{king:1,queen:1,bishop:2,knight:2,rook:2,pawn:8}},ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;Object(c.a)(this,n),i=t.call(this,e);for(var s=1;s<=2;s++)for(var a=0,o=Object.keys(fe);a<o.length;a++){var r=o[a];for(var l in fe[r]){var d=void 0;ye[[d="pawn"===r?1===s?1:6:1===s?0:7,fe[r][l]]]=r,ke[[d,fe[r][l]]]=s}}return i.state={showPos:!0,history:f("history")||[],complete:f("complete")||!1,winner:f("winner")||null,turn:f("turn")||2,board:f("board")||ye,sideMap:f("sideMap")||ke,pieceCnt:f("pieceCnt")||we,pawnPromoInfo:{side:null,row:null,col:null},isTimeLim:!!f("whiteTime"),whiteTime:f("whiteTime")||null,blackTime:f("blackTime")||null,colorMode:f("colorMode")||"system",pieceStyle:f("pieceStyle")||"plain"},i.newGame=i.newGame.bind(Object(u.a)(i)),i.completed=i.completed.bind(Object(u.a)(i)),i.updateTurn=i.updateTurn.bind(Object(u.a)(i)),i.updateBoard=i.updateBoard.bind(Object(u.a)(i)),i.updatePieceCnt=i.updatePieceCnt.bind(Object(u.a)(i)),i.addPiece=i.updateAddPiece.bind(Object(u.a)(i)),i.updateShowPos=i.updateShowPos.bind(Object(u.a)(i)),i.updateColorMode=i.updateColorMode.bind(Object(u.a)(i)),i.updatePieceStyle=i.updatePieceStyle.bind(Object(u.a)(i)),i.addHistory=i.addHistory.bind(Object(u.a)(i)),i.timeTravel=i.timeTravel.bind(Object(u.a)(i)),i.setPawnPromotion=i.setPawnPromotion.bind(Object(u.a)(i)),i.pawnPromotion=i.pawnPromotion.bind(Object(u.a)(i)),i.updateIsTimeLim=i.updateIsTimeLim.bind(Object(u.a)(i)),i.updateTimeLim=i.updateTimeLim.bind(Object(u.a)(i)),i.updateTimeLeft=i.updateTimeLeft.bind(Object(u.a)(i)),i}return Object(r.a)(n,[{key:"newGame",value:function(){localStorage.clear(),window.location.reload()}},{key:"completed",value:function(e){e=1===e?"black":"white",this.setState({complete:!0,winner:e}),y("complete",!0),y("winner",e)}},{key:"updateTurn",value:function(){var e=2===this.state.turn?1:2;this.setState({turn:e}),y("turn",e)}},{key:"updateBoard",value:function(e,t,n,i){var s,a=!1;"king"===this.state.board[[n,i]]&&(a=!0,s=this.state.sideMap[[e,t]]);var o=this.state.board;o[[n,i]]=o[[e,t]],o[[e,t]]=null;var c=this.state.sideMap;return c[[n,i]]=c[[e,t]],c[[e,t]]=null,this.setState({board:o,sideMap:c}),y("board",o),y("sideMap",c),a&&this.completed(s),a}},{key:"updatePieceCnt",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e--;var i=this.state.pieceCnt;n?i[e][t]--:i[e][t]++,this.setState({pieceCnt:i}),y("pieceCnt",i)}},{key:"openPieceCnt",value:function(){var e=document.querySelector(".counter");e.classList.contains("open-counter")?(e.classList.remove("open-counter"),document.querySelector("#input3").checked=!1):(e.classList.add("open-counter"),document.querySelector("#input3").checked=!0)}},{key:"openKeyboardControl",value:function(){var e=document.querySelector(".keyboard-control");e.classList.contains("open-keyboard")?(e.classList.remove("open-keyboard"),document.querySelector("#input4").checked=!1):(e.classList.add("open-keyboard"),document.querySelector("#input4").checked=!0)}},{key:"updateShowPos",value:function(e){this.setState({showPos:e})}},{key:"updateDisplayPos",value:function(){document.body.classList.contains("open-piece-pos")?(document.body.classList.remove("open-piece-pos"),document.querySelector("#input2").checked=!1):(document.body.classList.add("open-piece-pos"),document.querySelector("#input2").checked=!0)}},{key:"updateColorMode",value:function(e){this.setState({colorMode:e}),y("colorMode",e)}},{key:"updatePieceStyle",value:function(e){this.setState({pieceStyle:e}),y("pieceStyle",e)}},{key:"updateAddPiece",value:function(e,t,n,i){var s=this.state.board;s[[n,i]]=e;var a=this.state.sideMap;a[[n,i]]=t,this.setState({board:s,sideMap:a}),y("board",s),y("sideMap",a)}},{key:"updateAlterPiece",value:function(e,t,n){var i=this.state.board;i[[t,n]]=e,this.setState({board:i}),y("board",i)}},{key:"addHistory",value:function(e){var t=this.state.history;t.push(e),this.setState({history:t}),y("history",t)}},{key:"timeTravel",value:function(e){var t=this.state.history.length,n=0;if(0!==t&&(e<0&&(e=t+e),!(e<0))){for(var i=t-1;i>=e;i--){var s=this.state.history[i];if(s.isPawnPromotion)this.updateAlterPiece(s.oldPieceName,s.row,s.col),this.updatePieceCnt(s.side,s.oldPieceName,!1),this.updatePieceCnt(s.side,s.newPieceName),n++;else{var a=s.pieceOldRow,o=s.pieceOldCol,c=s.pieceNewRow,r=s.pieceNewCol;this.updateBoard(c,r,a,o);var l=s.takeOverName,d=s.takeOverSide,p=s.takeOverRow,u=s.takeOverCol;l&&(this.updateAddPiece(l,d,p,u),this.updatePieceCnt(d,l,!1))}}var h=this.state.history;h=h.slice(0,e),this.setState({history:h}),y("history",h),1===(t-n-e)%2&&this.updateTurn()}}},{key:"setPawnPromotion",value:function(e,t,n){this.setState({pawnPromoInfo:{side:e,row:t,col:n}})}},{key:"pawnPromotion",value:function(e){document.body.classList.remove("open-promo");var t=this.state.pawnPromoInfo.side,n=this.state.pawnPromoInfo.row,i=this.state.pawnPromoInfo.col,s=this.state.history;s.push({isPawnPromotion:!0,oldPieceName:this.state.board[[n,i]],newPieceName:e,side:t,row:n,col:i}),this.updatePieceCnt(t,this.state.board[[n,i]]),this.updatePieceCnt(t,e,!1),this.setState({history:s});var a=this.state.board;a[[n,i]]=e,this.setState({board:a}),y("history",s),y("board",a)}},{key:"updateIsTimeLim",value:function(e){this.newGame(),this.setState({isTimeLim:e})}},{key:"updateTimeLim",value:function(e){this.updateIsTimeLim(!0),this.setState({blackTime:e,whiteTime:e}),y("blackTime",e),y("whiteTime",e),y("timeLimOpt",e),window.location.reload()}},{key:"updateTimeLeft",value:function(e,t){1===e?(this.setState({blackTime:t}),y("blackTime",t)):(this.setState({whiteTime:t}),y("whiteTime",t))}},{key:"render",value:function(){return Object(C.jsxs)(ve,{children:[Object(C.jsx)(W,Object(p.a)(Object(p.a)({},this.state),{},{initPieceCnt:xe,newGame:this.newGame,completed:this.completed,updateTurn:this.updateTurn,updateBoard:this.updateBoard,updatePieceCnt:this.updatePieceCnt,openPieceCnt:this.openPieceCnt,openKeyboardControl:this.openKeyboardControl,addHistory:this.addHistory,setPawnPromotion:this.setPawnPromotion,pawnPromotion:this.pawnPromotion,updateIsTimeLim:this.updateIsTimeLim,updateTimeLeft:this.updateTimeLeft})),Object(C.jsx)(je,Object(p.a)(Object(p.a)({},this.state),{},{openPieceCnt:this.openPieceCnt,openKeyboardControl:this.openKeyboardControl,updateShowPos:this.updateShowPos,updateDisplayPos:this.updateDisplayPos,updateColorMode:this.updateColorMode,updatePieceStyle:this.updatePieceStyle,history:this.state.history,timeTravel:this.timeTravel,updateTimeLim:this.updateTimeLim,updateIsTimeLim:this.updateIsTimeLim})),Object(C.jsx)(Oe,{})]})}}]),n}(s.a.Component),Ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(ge,{})})}}]),n}(s.a.Component),Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};o.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(Ce,{})}),document.getElementById("root")),Pe()}],[[25,1,2]]]);
//# sourceMappingURL=main.11215276.chunk.js.map