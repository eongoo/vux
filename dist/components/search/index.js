!function(e,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.vuxSearch=s():e.vuxSearch=s()}(this,function(){return function(e){function s(i){if(t[i])return t[i].exports;var c=t[i]={exports:{},id:i,loaded:!1};return e[i].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var t={};return s.m=e,s.c=t,s.p="",s(0)}([function(e,s,t){e.exports=t(4)},function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s["default"]={props:{placeholder:{type:String,"default":"Search"},noResults:{type:String,"default":"No results"},searchText:{type:String,"default":"Search"},cancelText:{type:String,"default":"Cancel"},value:{type:String,twoWay:!0,"default":""},show:{type:Boolean,twoWay:!0,"default":!1},results:{type:Array,"default":function(){return[]}},autoFixed:{type:Boolean,"default":!0},showBadge:{type:Boolean,"default":!1}},methods:{clear:function(){this.value="",this.isFocus=!0,this.setFocus()},cancel:function(){this.value="",this.show=!1,this.isCancel=!0,this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(e){this.$emit("result-click",e),this.selectedItem=e,this.show=!1,this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0)},setFocus:function(){this.$els.input.focus()}},data:function(){return{isCancel:!0,isFocus:!1,isFixed:!1,selectedItem:""}},watch:{isFixed:function(e){e===!0?(this.$el.classList.add("vux-search-fixed"),this.setFocus(),this.isFocus=!0):this.$el.classList.remove("vux-search-fixed")},show:function(e){e===!0&&this.touch()},value:function(e){this.$emit("on-change",this.value)}}}},function(e,s){},function(e,s){e.exports=' <div class=vux-search-box> <div class=weui_search_bar id=search_bar :class="{weui_search_focusing: !isCancel}"> <form class=weui_search_outer @submit.prevent="$emit(\'on-submit\', value)"> <div class=vux-search-mask @click=touch v-show=!isFixed></div> <div class=weui_search_inner> <i class=weui_icon_search></i> <input type=text class=weui_search_input id=search_input placeholder={{$t(searchText)}} autocomplete=off required v-model=value v-el:input/> <a href=javascript: class=weui_icon_clear id=search_clear @click=clear></a> </div> <label for=search_input class=weui_search_text id=search_text> <i class=weui_icon_search></i> <span v-if=!value>{{$t(placeholder)}}</span> <span v-if=value>{{selectedItem.title}}</span> </label> </form> <a href=javascript: class=weui_search_cancel id=search_cancel @click=cancel>{{$t(cancelText)}}</a> </div> <div class="weui_cells weui_cells_access vux-search_show" id=search_show v-show="isFixed && results && results.length && value"> <div class=weui_cell v-for="item in results" @click=handleResultClick(item) :class="{\'with-badge\': showBadge}"> <div class=weui_cell_hd v-if=showBadge> <div v-if=item.logo class=item-badge style=background-image:url({{item.logo}})></div> <div v-else class="defalut-item-badge item-badge"></div> </div> <div class="weui_cell_bd weui_cell_primary"> <p>{{item.title}}</p> </div> </div> </div> <div class=vux-no-results v-if="isFixed && results === null"> <span class="aicon aicon-result"></span> {{$t(noResults)}} </div> </div> '},function(e,s,t){var i,c;t(2),i=t(1),c=t(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)}])});