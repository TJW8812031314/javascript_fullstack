<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search @query="onQureyChange" ref="searchBox"></v-search>
    </div>
    <!-- 热门搜索和搜索历史 -->
    <div class="shortcut-wrapper" v-show="!query">
      <v-scroll class="shortcut" :data="shortcut" ref="shorcut">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key" v-show="query">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <!-- 历史记录 -->
        <div class="search-history">
          <h1 class="title">
            <span class="text">搜索历史</span>
            <span class="clear" @click="clearSearchHistory">
              <i class="icon">&#xe612;</i>
            </span>
          </h1>
          <!-- 搜索历史列表 -->
          <v-search-list :searches="searchHistory" @select="saveSearch" @delete="deleteSearchHistory"></v-search-list>
        </div>
        </div>
      </v-scroll>
    </div>
    <!-- 搜索result -->
    <div class="search-result" v-show="query">
      <v-suggest :query="query" @select="saveSearch" @listScroll="blurInput" ref="suggest"></v-suggest>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
import api from '@/api'
import searchList from '@/components/searchList'
import { mapGetters } from 'vuex'
import { searchMixin } from '@/common/mixin'
import suggest from '@/components/suggest'
export default {
  data () {
    return {
      shortcut: [],
      hotKey: [1, 2455, 46, 667]
    }
  },
  components: {
    'v-search': searchBox,
    'v-scroll': scroll,
    'v-search-list': searchList,
    'v-suggest': suggest
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  mixins: [searchMixin],
  methods: {
    // onQureyChange (e) {
    //   console.log(e)
    // },
    _getHotKey () {
      api.HotSearchkey().then((res) => {
        if(res.code == 200) {
          // 截取前十个数据
          this.hotKey = res.result.hots.splice(0, 10)
        }
        console.log(res)
      })
    }
  },
  created () {
    this._getHotKey()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
  .shortcut-wrapper
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0, 0%, 100%, 0.5)
        .item
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          font-size 14px
          color hsla(0, 0%, 100%, 0.3)
          background #2f3054
      .search-history
        position relative
        margin 0 px2rem(40px)
        .title
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0, 0%, 100%, 0.5)
          .text
            flex 1
          .clear
            .icon
              font-size 18px
              color hsla(0, 0%, 100%, 0.3)
  .search-result
    position fixed
    width 100%
    top px2rem(360px)
    bottom 0
</style>