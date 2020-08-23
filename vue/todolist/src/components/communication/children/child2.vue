<template>
  <div @click="sendBack">child2: {{msg}}
    <child3></child3>
  </div>
</template>

<script>

import child3 from './child3'
export default {
  props: ['msg'],
  components: {child3},
  data() {
    return {
      backMsg: '谢谢你的数据'
    }
  },
  methods: {
    sendBack() {
      this.$emit('update:msg', this.backMsg)
    }
  }
}
</script>

<style>

</style>