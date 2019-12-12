<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <i-button size="large" @on-click="btn1"><i slot="icon">*</i>按钮</i-button>
    <i-button size="small" @on-click="btn2">提交</i-button>
    <!-- <div @click="oSure">
      <i-button size="default" @click="oSure" ref="sure">确定</i-button>
    </div> -->
    <i-button size="default" @click.native="oSure" ref="sure" @fang="list">确定</i-button>
    <div>{{getmsg}}</div>
    <!-- <div class="button" @click="showToast"></div> -->
    <button class="button" @click="showToast">asd</button>
  </div>
</template>

<script>
import button from './Button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      getmsg: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    btn1 () {
      console.log('你好')
    },
    btn2 () {
      console.log('优秀')
    },
    // 调用子组件内部的方法
    oSure () {
      this.$refs.sure.sureClick()
    },
    list (e) {
      this.getmsg = e
    },
    showToast () {
      this.$toast('网络异常')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
