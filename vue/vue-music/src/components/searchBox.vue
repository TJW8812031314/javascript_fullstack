<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe638;</i>
    <input type="text" class="box" v-model="query" :placeholde="placeholder">
    <i class="icon icon-dismiss"></i>
  </div>
</template>

<script>
import { debounce } from '@/common/util'
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌手，歌曲'
    }
  },
  data () {
    return {
      query:''
    }
  },
  created () {
    // watch监听query  调用fn方法
    this.$watch('query', debounce((newQuery) => {
      // 抛出一个方法
      this.$emit('query', newQuery)
    }, 300))
  }
}
</script>

<style lang='stylus' scoped>
@import '../assets/css/function.styl'
.search-box 
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 px2rem(8px)
  height px2rem(74px)
  background #2f3054
  border-radius 6px
  .icon-search 
    font-size 24px
    color #6b6a6a
  .box 
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #2f3054
    color #fff
    font-size 14px
    outline 0
    &:placeholder 
      color hsla(0, 0%, 100%, 0.3)
  .icon-dismiss 
    font-size 20px
    margin-right px2rem(10px)
    color #6b6a6a
</style>
