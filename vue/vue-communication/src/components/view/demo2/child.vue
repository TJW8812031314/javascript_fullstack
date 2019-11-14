<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div>
      string: <span class="red">{{sendMsg}}</span>
    </div>
    <div>
      number: <span class="red">{{sendNum}}</span>
    </div>
    <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id"></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  porps: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: false
    },
    sendObj: {
      // 声明类型
      validator (val) {
        if (Object.prototype.toString.call(val) === "[object Array]"||
        Object.prototype.toString.call(val) ==="[object object]") {

        }
      }
    }
  }
}
</script>

<style>
.red{
  color: red;
}
</style>