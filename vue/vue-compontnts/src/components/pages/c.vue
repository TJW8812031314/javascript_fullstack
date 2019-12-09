<template>
  <div class="c-test">Age:{{app.userInfor.age}}
    <button></button>
  </div>

</template>

<script>
export default {
  // inject注入
  inject: ['app']
}
</script>

<style>

</style>
