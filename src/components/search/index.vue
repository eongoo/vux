<template>
  <div class="vux-search-box">
    <div class="weui_search_bar" id="search_bar" :class="{weui_search_focusing: !isCancel}">
      <form class="weui_search_outer" @submit.prevent="$emit('on-submit', value)">
        <div class="vux-search-mask" @click="touch" v-show="!isFixed"></div>
        <div class="weui_search_inner">
          <i class="weui_icon_search"></i>
          <input type="text" class="weui_search_input" id="search_input" placeholder="{{$t(searchText)}}" autocomplete="off" required v-model="value" v-el:input/>
          <a href="javascript:" class="weui_icon_clear" id="search_clear" @click="clear"></a>
        </div>
        <label for="search_input" class="weui_search_text" id="search_text">
          <i class="weui_icon_search"></i>
          <span v-if="!value">{{$t(placeholder)}}</span>
          <span v-if="value">{{selectedItem.title}}</span>
        </label>
      </form>
      <a href="javascript:" class="weui_search_cancel" id="search_cancel" @click="cancel">{{$t(cancelText)}}</a>
    </div>
    <div class="weui_cells weui_cells_access vux-search_show" id="search_show" v-show="isFixed && results && results.length && value">
      <div class="weui_cell" v-for="item in results" @click="handleResultClick(item)" :class="{'with-badge': showBadge}">
        <div class="weui_cell_hd" v-if="showBadge">
          <div v-if="item.logo" class="item-badge" style="background-image:url({{item.logo}})"></div>
          <div v-else class="defalut-item-badge item-badge"></div>
        </div>
        <div class="weui_cell_bd weui_cell_primary">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="vux-no-results" v-if="isFixed && results === null">
    <span class="aicon aicon-result"></span>
      {{$t(noResults)}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    },
    noResults: {
      type: String,
      default: 'No results'
    },
    searchText: {
      type: String,
      default: 'Search'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    value: {
      type: String,
      twoWay: true,
      default: ''
    },
    show: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    results: {
      type: Array,
      default () {
        return []
      }
    },
    autoFixed: {
      type: Boolean,
      default: true
    },
    showBadge: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clear () {
      this.value = ''
      this.isFocus = true
      this.setFocus()
    },
    cancel () {
      this.value = ''
      this.show = false
      this.isCancel = true
      this.isFixed = false
      this.$emit('on-cancel')
    },
    handleResultClick (item) {
      this.$emit('result-click', item)
      this.selectedItem = item
      this.show = false
      this.isCancel = true
      this.isFixed = false
    },
    touch () {
      this.isCancel = false
      if (this.autoFixed) {
        this.isFixed = true
      }
    },
    setFocus () {
      this.$els.input.focus()
    }
  },
  data () {
    return {
      isCancel: true,
      isFocus: false,
      isFixed: false,
      selectedItem: ''
    }
  },
  watch: {
    isFixed (val) {
      if (val === true) {
        this.$el.classList.add('vux-search-fixed')
        this.setFocus()
        this.isFocus = true
      } else {
        this.$el.classList.remove('vux-search-fixed')
      }
    },
    show (val) {
      if (val === true) {
        this.touch()
      }
    },
    value (val) {
      this.$emit('on-change', this.value)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/icon/weui_icon_font';
@import '../../styles/weui/widget/weui_searchbar/weui_searchbar';

.item-badge{
  display: block;
  margin-right: 10px;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
}
.vux-search-fixed {
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 15;
  background: #F5F5F9;
  backdrop-filter: blur(5px);
}
.vux-search-box {
  width: 100%;
}
.with-badge.weui_cell:before{
  left:3.5em;
}
.vux-search_show {
  margin-top: 0;
  overflow-y: auto;
  height: 100%;
}
.vux-no-results {
  padding: 90px 45px;
  text-align: center;
  color: #ababab;
}
.vux-no-results .aicon{
  font-size: 40px;
}
.vux-search-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
}
</style>
