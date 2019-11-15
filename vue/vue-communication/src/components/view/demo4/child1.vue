<template>
  <div class="child">
    <h1>兄弟组件1(监听兄弟组件2)</h1>
    <div>
      这是从父组件拿来的数组： {{title}}
    </div>
    <!-- <div>
      我是从child2中拿来的：{{msg}}
    </div> -->
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  props: ['title'],
  // data () {
  //   return {
  //     msg: ''
  //   }
  // },
  // mounted () {
  //   Bus.$on('test',(data) => {
  //     this.msg = data
  //   })
  // }
}
</script>

<style>

</style>