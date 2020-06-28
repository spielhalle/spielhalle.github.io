function _createForOfIteratorHelper(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,(function(e){return t[e]}).bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="uqwh")}({uqwh:function(t,e,r){"use strict";r.r(e);var n=function(){function t(e){_classCallCheck(this,t),this.left=this,this.right=this,this.top=this,this.bottom=this,this.column=e}return _createClass(t,[{key:"linkDown",value:function(t){return t.bottom=this.bottom,t.bottom.top=t,t.top=this,this.bottom=t,t}},{key:"linkRight",value:function(t){return t.right=this.right,t.right.left=t,t.left=this,this.right=t,t}},{key:"removeLeftRight",value:function(){this.left.right=this.right,this.right.left=this.left}},{key:"reinsertLeftRight",value:function(){this.left.right=this,this.right.left=this}},{key:"removeTopBottom",value:function(){this.top.bottom=this.bottom,this.bottom.top=this.top}},{key:"reinsertTopBottom",value:function(){this.top.bottom=this,this.bottom.top=this}}]),t}(),o=function(t){_inherits(r,t);var e=_createSuper(r);function r(t){var n;return _classCallCheck(this,r),(n=e.call(this)).name=t,n.size=0,n.column=_assertThisInitialized(n),n}return _createClass(r,[{key:"cover",value:function(){this.removeLeftRight();for(var t=this.bottom;t!==this;t=t.bottom)for(var e=t.right;e!==t;e=e.right)e.removeTopBottom(),e.column.size--}},{key:"uncover",value:function(){for(var t=this.top;t!==this;t=t.top)for(var e=t.left;e!==t;e=e.left)e.column.size++,e.reinsertTopBottom();this.reinsertLeftRight()}}]),r}(n),i=function(){function t(e,r){_classCallCheck(this,t),this.boardSize=r,this.isDone=!1,this.header=this.createDLXList(e)}return _createClass(t,[{key:"createDLXList",value:function(t){for(var e=t[0].length,r=new o("header"),i=[],a=0;a<e;a++){var u=new o(a+"");i.push(u),r=r.linkRight(u)}r=r.right.column;var s,f=_createForOfIteratorHelper(t);try{for(f.s();!(s=f.n()).done;)for(var l=s.value,c=void 0,h=0;h<e;h++)if(l[h]){var v=i[h],p=new n(v);null==c&&(c=p),v.top.linkDown(p),c=c.linkRight(p),v.size++}}catch(y){f.e(y)}finally{f.f()}return r.size=e,r}},{key:"selectColumnNodeHeuristic",value:function(){for(var t=Number.MAX_VALUE,e=void 0,r=this.header.right;r!==this.header;r=r.right)r.size<t&&(t=r.size,e=r);return e}},{key:"handleSolution",value:function(t){var e=this.parseSolution(t);this.isDone=this.resultCallback(e)}},{key:"parseSolution",value:function(t){var e,r,n=(e=this.boardSize,new Array(e).fill(0).map((function(){return new Array(e).fill(0)}))),o=_createForOfIteratorHelper(t);try{for(o.s();!(r=o.n()).done;){for(var i=r.value,a=i,u=parseInt(a.column.name,10),s=i.right;s!==i;s=s.right){var f=parseInt(s.column.name,10);f<u&&(u=f,a=s)}var l=parseInt(a.column.name,10),c=parseInt(a.right.column.name,10);n[Math.floor(l/this.boardSize)][l%this.boardSize]=c%this.boardSize+1}}catch(h){o.e(h)}finally{o.f()}return n}},{key:"search",value:function(t){if(!this.isDone)if(this.header.right===this.header)this.handleSolution(this.answer);else{var e=this.selectColumnNodeHeuristic();e.cover();for(var r=e.bottom;r!==e;r=r.bottom){this.answer.push(r);for(var n=r.right;n!==r;n=n.right)n.column.cover();this.search(t+1),e=(r=this.answer.splice(this.answer.length-1,1)[0]).column;for(var o=r.left;o!==r;o=o.left)o.column.uncover()}e.uncover()}}},{key:"runSolver",value:function(t){this.answer=[],this.isDone=!1,this.resultCallback=t,this.search(0)}}]),t}(),a=function(t,e,r,n){return(t-1)*n*n+(e-1)*n+(r-1)};addEventListener("message",(function(t){var e=function(t,e,r,n){var o=[];return function(t,e,r,n){var u=function(t,e,r){for(var n,o=(function(t,e,r,n){for(var o=e,i=1;i<=9;i+=3)for(var u=1;u<=9;u+=3)for(var s=1;s<=9;s++,o++)for(var f=0;f<3;f++)for(var l=0;l<3;l++)t[a(i+f,u+l,s,9)][o]=!0}(n=new Array(729).fill([]).map((function(){return new Array(324).fill(!1)})),function(t,e,r){for(var n=e,o=1;o<=9;o++)for(var i=1;i<=9;i++,n++)for(var u=1;u<=9;u++)t[a(u,o,i,9)][n]=!0;return n}(n,function(t,e,r){for(var n=e,o=1;o<=9;o++)for(var i=1;i<=9;i++,n++)for(var u=1;u<=9;u++)t[a(o,u,i,9)][n]=!0;return n}(n,function(t,e,r){for(var n=e,o=1;o<=9;o++)for(var i=1;i<=9;i++,n++)for(var u=1;u<=9;u++)t[a(o,i,u,9)][n]=!0;return n}(n,0)))),n),i=1;i<=9;i++)for(var u=1;u<=9;u++){var s=t[i-1][u-1];if(0!==s)for(var f=1;f<=9;f++)f!==s&&o[a(i,u,f,9)].fill(!1)}return o}(t);new i(u,9).runSolver((function(t){return o.push(t),o.length>=10}))}(t),o}(t.data);self.postMessage(e)}))}});