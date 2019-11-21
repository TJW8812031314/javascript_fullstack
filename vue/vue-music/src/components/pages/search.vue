<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search @qurey= onQureyChange></v-search>
    </div>
    
    <!-- 搜索框 -->

  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components: {
    'v-search': searchBox
  },
  methods: {
    onQureyChange () {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
</style>