!function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,(function(e){return t[e]}).bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s="uqwh")}({uqwh:function(t,e,o){"use strict";o.r(e);class r{constructor(t){this.left=this,this.right=this,this.top=this,this.bottom=this,this.column=t}linkDown(t){return t.bottom=this.bottom,t.bottom.top=t,t.top=this,this.bottom=t,t}linkRight(t){return t.right=this.right,t.right.left=t,t.left=this,this.right=t,t}removeLeftRight(){this.left.right=this.right,this.right.left=this.left}reinsertLeftRight(){this.left.right=this,this.right.left=this}removeTopBottom(){this.top.bottom=this.bottom,this.bottom.top=this.top}reinsertTopBottom(){this.top.bottom=this,this.bottom.top=this}}class i extends r{constructor(t){super(),this.name=t,this.size=0,this.column=this}cover(){this.removeLeftRight();for(let t=this.bottom;t!==this;t=t.bottom)for(let e=t.right;e!==t;e=e.right)e.removeTopBottom(),e.column.size--}uncover(){for(let t=this.top;t!==this;t=t.top)for(let e=t.left;e!==t;e=e.left)e.column.size++,e.reinsertTopBottom();this.reinsertLeftRight()}}class s{constructor(t,e){this.boardSize=e,this.isDone=!1,this.header=this.createDLXList(t)}createDLXList(t){const e=t[0].length;let o=new i("header");const s=[];for(let r=0;r<e;r++){const t=new i(r+"");s.push(t),o=o.linkRight(t)}o=o.right.column;for(const i of t){let t=void 0;for(let o=0;o<e;o++)if(i[o]){const e=s[o],i=new r(e);null==t&&(t=i),e.top.linkDown(i),t=t.linkRight(i),e.size++}}return o.size=e,o}selectColumnNodeHeuristic(){let t=Number.MAX_VALUE,e=void 0;for(let o=this.header.right;o!==this.header;o=o.right)o.size<t&&(t=o.size,e=o);return e}handleSolution(t){const e=this.parseSolution(t);this.isDone=this.resultCallback(e)}parseSolution(t){const e=(o=this.boardSize,new Array(o).fill(0).map(()=>new Array(o).fill(0)));var o;for(const r of t){let t=r,o=parseInt(t.column.name,10);for(let e=r.right;e!==r;e=e.right){const r=parseInt(e.column.name,10);r<o&&(o=r,t=e)}const i=parseInt(t.column.name,10),s=parseInt(t.right.column.name,10);e[Math.floor(i/this.boardSize)][i%this.boardSize]=s%this.boardSize+1}return e}search(t){if(!this.isDone)if(this.header.right===this.header)this.handleSolution(this.answer);else{let e=this.selectColumnNodeHeuristic();e.cover();for(let o=e.bottom;o!==e;o=o.bottom){this.answer.push(o);for(let t=o.right;t!==o;t=t.right)t.column.cover();this.search(t+1),o=this.answer.splice(this.answer.length-1,1)[0],e=o.column;for(let t=o.left;t!==o;t=t.left)t.column.uncover()}e.uncover()}}runSolver(t){this.answer=[],this.isDone=!1,this.resultCallback=t,this.search(0)}}const n=(t,e,o,r)=>(t-1)*r*r+(e-1)*r+(o-1);addEventListener("message",t=>{const e=((t,e,o,r)=>{const i=[];return((t,e,o,r)=>{const i=((t,e,o)=>{const r=((t,e)=>{const o=new Array(t*t*t).fill([]).map(()=>new Array(t*t*4).fill(!1));let r=0;return r=((t,e,o)=>{let r=e;for(let i=1;i<=o;i++)for(let e=1;e<=o;e++,r++)for(let s=1;s<=o;s++)t[n(i,e,s,o)][r]=!0;return r})(o,r,t),r=((t,e,o)=>{let r=e;for(let i=1;i<=o;i++)for(let e=1;e<=o;e++,r++)for(let s=1;s<=o;s++)t[n(i,s,e,o)][r]=!0;return r})(o,r,t),r=((t,e,o)=>{let r=e;for(let i=1;i<=o;i++)for(let e=1;e<=o;e++,r++)for(let s=1;s<=o;s++)t[n(s,i,e,o)][r]=!0;return r})(o,r,t),((t,e,o,r)=>{let i=e;for(let s=1;s<=o;s+=r)for(let e=1;e<=o;e+=r)for(let l=1;l<=o;l++,i++)for(let h=0;h<r;h++)for(let f=0;f<r;f++)t[n(s+h,e+f,l,o)][i]=!0})(o,r,t,e),o})(e,o);for(let i=1;i<=e;i++)for(let o=1;o<=e;o++){const s=t[i-1][o-1];if(0!==s)for(let t=1;t<=e;t++)t!==s&&r[n(i,o,t,e)].fill(!1)}return r})(t,e,o);new s(i,e).runSolver(r)})(t,9,3,t=>(i.push(t),i.length>=10)),i})(t.data);self.postMessage(e)})}});