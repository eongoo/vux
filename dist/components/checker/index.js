!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxChecker=t():e.vuxChecker=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,"default":"radio"},value:{type:[String,Number,Array,Boolean]},max:Number},watch:{value:function(e){this.$emit("on-change",e)}}}},function(e,t){},function(e,t){e.exports=" <div class=vux-checker-box> <slot></slot> </div> "},function(e,t,o){var r,n;o(2),r=o(1),n=o(3),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});