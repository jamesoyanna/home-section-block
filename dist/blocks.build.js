!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var o=n(2),c=(n.n(o),n(3)),r=(n.n(c),n(4)),i=(n.n(r),n(5)),u=(n.n(i),n(6));n.n(u);Object(c.registerBlockType)("cgb/homesection-block",{title:Object(o.__)("homesection-block"),description:"Block to generate homesection",icon:"universal-access-alt",category:"layout",keywords:[Object(o.__)("homesection-block"),Object(o.__)("home"),Object(o.__)("block")],attributes:{content:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes.content,n=e.setAttributes,o=e.className,c=function(e){n({content:e})};return wp.element.createElement(r.RichText,{tagName:o,onChange:c,value:t})},save:function(e){return wp.element.createElement(r.RichText.Content,{tagName:"p",value:e.attributes.content})}})},function(e,t){e.exports=wp.i18n},function(e,t){e.exports=wp.blocks},function(e,t){e.exports=wp.blockEditor},function(e,t){},function(e,t){}]);