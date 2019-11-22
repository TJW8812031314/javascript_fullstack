<template>
  <div class="ratings" ref="ratingsContent">
    <div class="ratings-content">
      <div class="overview">
        <div class="overiview-left">
          <h1 class="scroe">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overiview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star star-36">
              <span class="star-item"
              v-for="(item, index) in className"
              :key="index"
              :class="className"
              ></span>
            </div>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star star-36">
              <span class="star-item"
              v-for="(item, index) in className2"
              :key="index"
              :class="className2"
              ></span>
            </div>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block-positive active">全部
            <span class="count">{{seller.ratingCount}}</span>
          </span>
          <span class="block-positive">满意
            <span class="count">18</span>
          </span>
          <span class="block-negative">不满意
            <span class="count">6</span>
          </span>
        </div>
        <div class="switch on">
          <span class="icon-chek_cricle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item, index ) in ratings" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="ratings.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{ratings.username}}</h1>
              <div class="star-wrapper">
                <div class="star star-24">
                  <span class="star-item"></span>
                </div>
                <span class="delivery">{{ratings.deliveryTime}}</span>
              </div>
              <p class="text">{{ratings.text}}</p>
              <div class="recommend">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(item, index) in ratings.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{ratings.rateTime}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ratings',
  data () {
    return {
      ratings: [],
      seller: {}
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          this.ratings = res.data.data
          // html 渲染之后调用—initScroll方法
          // this.score.push([this.ratings.score])
        }
      })
    this.$http.get('http://localhost:8080/static/seller.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
        // this.seller = res.data.data
          this.seller = Object.assign({}, this.seller, res.data.data)// 合并对象
          // this.score.push(this.seller.serviceScore, this.seller.foodScore)
          // console.log(this.score)
        }
      })
    // html 渲染之后调用—initScroll方法
    this.$nextTick(() => {
      this._initscroll()
      // this.className()
    })
  },
  methods: {
    _initscroll () {
      this.ratingsScrall = new BScroll(this.$refs.ratingsContent, {
        click: true
      })
    }
    // starIndex () {
    //   this.score = Math.floor(this.score.item)
    //   console.log(this.score)
    // }
  },
  computed: {
    className () {
      let name = []
      let score = Math.floor(this.seller.serviceScore)
      for (let i = 0; i < score; i++) {
        name.push('on')
      }
      // while (name.length < 5) {
      //   name.push('off')
      // }
      return name
    },
    className2 () {
      let name = []
      let score = Math.floor(this.seller.foodScore)
      for (let i = 0; i < score; i++) {
        name.push('on')
      }
      // while (name.length < 5) {
      //   name.push("off")
      // }
      return name
    }
  }
}
</script>

<style lang="stylus" scoped>
ul
  li
  list-style none;
.ratings
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  // .ratings-content
  .overview
    display flex
    padding 18px 0
    .overiview-left
      flex 0 0 137px
      padding 6px 0 6px 0
      width 137px
      border-right 1px solid rgba(7, 17, 27, 1)
      text-align center
      .scroe
        margin-bottom 6px
        line-height 28px
        font-size 24px
        color #f90
      .title
        margin-bottom 8px
        line-height 12px
        font-size 12px
        color #07111b
      .rank
        line-height 10px
        font-size 10px
        color #93999f
    .overiview-right
      -webkit-box-flex 1
      flex 1
      padding 6px 0 6px 24px
      .score-wrapper
        margin-bottom 8px
        font-size 0
        .title
          display inline-block
          line-height 18px
          vertical-align top
          font-size 12px
          color #07111b
        .star
          display inline-block
          margin 0 12px
          vertical-align top
          font-size 0
          .star-item
            display inline-block
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            background-repeat: no-repeat
          .star-item.on
            background-image url('../../assets/start1.png')
          .star-item.off
            background-image url('../../assets/start2.png')
          .star-item:last-child
            margin-right 0
        .score
          display inline-block
          line-height 18px
          vertical-align top
          font-size 12px
          color #f90
      .delivery-wrapper
        font-size 0
        .title
          line-height 18px
          font-size 12px
          color #07111b
        .delivery
          margin-left 12px
          font-size 12px
          color #93999f
  .split
    width 100%
    height 16px
    border-top 1px solid rgba(7,17,27,.1)
    border-bottom 1px solid rgba(7,17,27,.1)
    background #f3f5f7
  .ratingselect
    .rating-type
      padding 18px 0
      margin 0 18px
      position relative
      font-size 0
      &:after
        display block
        position: absolute
        left 0
        bottom 0
        width: 100%
        border-top: 1px solid rgba(7,17,27,.1);
        content " "
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        line-height 16px
        border-radius 1px
        font-size 12px
        color #4d555d
      .block.positive.active
        background #00a0dc
        color #fff
      .block.positive
        background rgba(0,160,220,.2)
      .block.negative
        background: rgba(77,85,93,.2)
        .count
          margin-left 2px
          font-size 8px

    .switch
      padding 12px 18px
      line-height: 24px
      border-bottom 1px solid rgba(7,17,27,.1)
      color: #93999f
      font-size 0
      .icon-check_circle
        display inline-block
        vertical-align top
        margin-right 4px
        font-size 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
    .switch.on
      .icon-check_circle
        color: #00c850
  .rating-wrapper
    padding 0 18px
    .rating-item
      display: flex
      padding: 18px 0
      position: relative
      &:after
        display: block
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        border-top: 1px solid rgba(7,17,27,.1)
        content: " "
      .avatar
        -webkit-box-flex: 0
        -ms-flex: 0 0 28px
        flex: 0 0 28px
        width: 28px
        margin-right: 12px
        img
          border-radius 50%
      .content
        position: relative
        -webkit-box-flex: 1
        -ms-flex: 1
        flex: 1
        .name
          margin-bottom: 4px
          line-height: 12px
          font-size: 10px
          color: #07111b
        .star-wrapper
          margin-bottom: 6px
          font-size: 0
          vertical-align top
          .star
            display inline-block
            margin 0 12px
            vertical-align top
            font-size 0
            .star-item
              display inline-block
              width 15px
              height 15px
              margin-right 6px
              background-size 15px 15px
              background-repeat: no-repeat
            .star-item.on
              background-image url('../../assets/start1.png')
          .delivery
            display: inline-block
            vertical-align: top
            line-height: 12px
            font-size: 10px
            color: #93999f
        .text
          margin-bottom: 8px
          line-height: 18px
          color: #07111b
          font-size: 12px
        .recommend
          line-height: 16px
          font-size: 0
          .icon-thumb_up
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 9px;
            color: #00a0dc;
            &:before
              content: "\E901"
          .item
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 9px;
            padding: 0 6px;
            border: 1px solid rgba(7,17,27,.1)
            border-radius: 1px
            color: #93999f
            background: #fff
        .time
          position: absolute
          top: 0
          right: 0
          line-height: 12px
          font-size: 10px
          color: #93999f
</style>
