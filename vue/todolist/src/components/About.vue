<template>
<div>
  <div @click="handle">About: {{persion}}</div>
  <Test :message="name" @nameChange="nameChange" :value.sync="value"></Test>
</div>
  
</template>

<script>
import Test from './test'
export default {
  components: {
    Test
  },
  data() {
    return {
      persion: '小哥哥',
      name: '蜗牛',
      value: '这是个帅哥'
    }
  },
  methods: {
    handle() {
      this.persion = '小姐姐'
    },
    nameChange(e) {
      this.name = e
      
    }
  }
}
</script>

<style>

</style>