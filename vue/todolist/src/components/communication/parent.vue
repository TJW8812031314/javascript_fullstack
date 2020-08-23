<template>
  <div class="parent">
    <p>parent</p>
    <!-- <Child1 @sendMsg="getMsg" :backMsg="message"></Child1>
    <Child2 :msg.sync="message" ></Child2> -->
    <!-- <Child1></Child1> -->
    <Child2></Child2>
  </div>
</template>

<script>
// import Child1 from './children/child1'
import Child2 from './children/child2'
export default {
  components: {Child2},
  provide: {
    name: '蜗牛'
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    getMsg(e) {
      this.message = e
    }
  }
}
</script>

<style>

</style>