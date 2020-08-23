<template>
  <div class="test" @click="changeProps">
    <input type="text" :value="value">
    {{message}}
  </div>
</template>

<script>
export default {
  props: ['message', 'value'],
  data() {
    return {
      msg: '我的'
    }
  },
  methods: {
    changeProps() {
      // this.message = '我'
      this.$emit('nameChange', this.msg)
      this.$emit('update:value', '这是个丑逼')
    }
  }
}
</script>

<style>

</style>