<template>
<div class="detail">
  这是详情页面
  <p>{{ $route.params.id}}</p>
  <!-- 获取路由传带的参数的 -->
</div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id)
  }
}
</script>