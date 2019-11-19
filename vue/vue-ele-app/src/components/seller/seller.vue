<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">粥品香坊</h1>
        <div class="desc border-1px">
          <div class="star star-36">
            <span class="star-item"></span>
          </div>
          <span class="text">24</span>
          <span class="text">月售</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress"></span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">4元</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">38分钟</span>
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite"></span>
          <span class="text">收藏</span>
        </div>
        <div class="split"></div>
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper border-1px">
            <p class="content">gdjh</p>
          </div>
          <ul class="supports">
            <li class="supports-item border-1px">
              <span class="icon"></span>
              <span class="text"></span>
            </li>
          </ul>

        </div>
        <div class="split"></div>
        <div class="info">
          <h1 class="title border-1px"></h1>
          <ul>
            <li class="info-item"></li>
            <li class="info-item"></li>
            <li class="info-item"></li>
            <li class="info-item"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.seller
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    position relative
    padding 18px
    .title
      margin-bottom 8px
      line-height 14px
      color #07111b
      font-size 14px
    .desc
      padding-bottom 18px
      position relative
      font-size 0
      &:after
        display block
        position absolute
        left 0
        bottom 0
        width 100%
        border-top 1px solid rgba(7,17,27,.1)
        content " "
      .star
        display inline-block
        margin-right 8px
        vertical-align top
        .star-item
          display inline-block
          background-repeat no-repeat
          width 15px
          height 15px
          margin-right 6px
          background-size 15px 15px
      .text
        display inline-block
        margin-right 12px
        line-height 18px
        vertical-align top
        font-size 10px
        color #4d555d
    .remark
      display flex
      padding-top 18px
      .block
        -webkit-box-flex 1
        flex 1
        text-align center
        border-right 1px solid rgba(7,17,27,.1)
        h2
          margin-bottom 4px
          line-height 10px
          font-size 10px
          color #93999f
        .content
          line-height 24px
          font-size 10px
          color #07111b
          .stress
            font-size 24px
    .favorite
      position absolute
      width 50px
      right 11px
      top 18px
      text-align center
      .icon-favorite
        display block
        margin-bottom 4px
        line-height 24px
        font-size 24px
        color #d4d6d9
        &:before
          content ''
      .text
        line-height 10px
        font-size 10px
        color #4d555d
  .split
    width 100%
    height 16px
    border-top 1px solid rgba(7,17,27,.1)
    border-bottom 1px solid rgba(7,17,27,.1)
    background #f3f5f7
  .bulletin
    padding 18px 18px 0
    .title
      margin-bottom 8px
      line-height 14px
      color: #07111b
      font-size 14px
</style>