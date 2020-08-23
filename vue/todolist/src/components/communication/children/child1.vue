<template>
  <div @click="sendMsg">child1: {{backMsg}}</div>
</template>

<script>
export default {
  props: ['backMsg'],
  data() {
    return {
      child1Msg: '我是child1的数据'
    }
  },
  methods: {
    sendMsg() {
      this.$emit('sendMsg',  this.child1Msg)
    }
  }
}
</script>

<style>

</style>