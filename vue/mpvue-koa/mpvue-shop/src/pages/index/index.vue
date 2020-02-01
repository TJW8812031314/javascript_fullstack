<template>
  <div class="index">
    <!-- 头部搜索 -->
    <div class="search">
      <div>{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品"/>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cityName: '南昌'
    }
  }
}
</script>

<style>

</style>