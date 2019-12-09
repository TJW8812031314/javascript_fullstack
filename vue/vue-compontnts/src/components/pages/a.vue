<template>
  <div class="a-test">A
    <testb></testb>
  </div>
</template>

<script>
import B from './b'
export default {
  // 抛出相当于vuex
  provide: {
    name: '蜗牛'
  },
  components: {
    'testb': B
  }
}
</script>

<style>

</style>
