<template>
  <div id="app">
    <!-- 头部 -->
    <div class="tab border-1px">
      <div class="content">
        <ul class="list">
          <li class="item" v-for="(item, index) in listData" :key="index">
            <div class="item-content">
              <img :src="item.pic_url" alt="图片">
              <span>{{item.title}}</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div> -->
    </div>
    <!-- <v-header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">我的音乐</span>
      <router-link to="/user" slot="right-icon">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <v-tab></v-tab>
    <router-view/> -->
    <!-- <v-sidebar></v-sidebar>
    <v-play></v-play> -->
  </div>
</template>

<script>
import tab from '@/components/tab'
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import play from '@/components/play'
import {getList} from "../src/api/index"
export default {
  name: 'App',
  data() {
    return {
      listData: [],

    }
  },
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-tab': tab,
    'v-play': play
  },
  created () {
    // this.$http.get('http://localhost:8080/static/seller.json')
    //   .then((res) => {
    //     console.log(res)
    //     if (res.data.errno === 0) {
    //     // this.seller = res.data.data
    //       this.seller = Object.assign({}, this.seller, res.data.data)// 合并对象
    //     }
    //   })
    let that = this
    this.axios.post(
      'https://www.fastmock.site/mock/87e839620ff1b8e14fcd454066c0051c/news/list',
      {gameid: 12}
    ).then(res => {
      console.log(res.data)
      // if(res.data.code === 200) {
        that.listData = res.data.list
      // }
    })
  }
}
</script>

<style lang="stylus">
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important
  font-size 18px
  font-style normal
  color #ffffff
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  color #fff
</style>
