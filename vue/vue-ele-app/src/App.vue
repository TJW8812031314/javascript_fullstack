<template>
  <div id="app">
    <!-- 头部 -->
    <!-- <v-header :seller="seller"></v-header>父组件向子组件传值 -->
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
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'// 组件引入
export default {
  name: 'App',
  data () {
    return {
      listData: [],
      seller: ''
    }
  },
  components: {
    'v-header': header
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
    this.$http.post(
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
@import './common/stylus/mixin.styl'
.tab
  display flex
  height 40px
  line-height 40px
  width 100%
  border-1px(rgba(7, 17, 27, 0.1))
  &-item
    flex 1
    text-align center
    a
      // 删除下标
      text-decoration none
      display block
      font-size 14px
      color rgb(77, 85, 93)
      &.router-link-active
        color rgb(240, 20, 20)
</style>
