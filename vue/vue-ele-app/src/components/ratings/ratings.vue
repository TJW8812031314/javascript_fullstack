<template>
  <div class="ratings">
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
            <span class="star-item"></span>
          </div>
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">商品评分</span>
          <div class="star star-36">
            <span class="star-item"></span>
          </div>
          <span class="score">{{seller.foodScore}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        }
      })
    this.$http.get('http://localhost:8080/static/seller.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
        // this.seller = res.data.data
          this.seller = Object.assign({}, this.seller, res.data.data)// 合并对象
        }
      })
  },
  // computed: {
  //   starIndex () {
  //     for (let i = 0; i < 5; i++) {

  //     }
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.ratings
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    display flex
    padding 0 18px
    height 80px
    .overiview-left
      flex: 0 0 137px;
      padding 6px 0 6px 0
      width 137px
      border-right 1px solid rgba(7, 17, 27, 1)
      text-align center
      .scroe
        margin-bottom 6px
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

</style>
