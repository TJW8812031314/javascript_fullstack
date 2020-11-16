# 生命周期
beforeCreate: function () {
  console.log("1-beforeCreate 初始化之后");
},
created: function () {
  console.log("2-created 创建完成");
},
beforeMount: function () {
  console.log("3-beforeMount 挂载之前");
},
mounted: function () {
  console.log("4-mounted 被创建");
},
beforeUpdate: function () {
  console.log("5-beforeUpdate 数据更新前");
},
updated: function () {
  console.log("6-updated 被更新后");
},
// keep-alive是生命周期吗？什么时候执行 // 不是。会增加两个生命周期
activated: function () {
  console.log("7-activated");
},
deactivated: function () {
  console.log("8-deactivated");
},

beforeDestroy: function () {
  console.log("9-beforeDestroy 销毁之前");
},
destroyed: function () {
  console.log("10-destroyed 销毁之后");
},
keep-alive一旦被使用，就会有额外的两个生命周期
activated 和 deactivated


组件进入缓存中就会执行 deactivated 钩子函数，命中缓存渲染后会执行
activated 钩子函数


# 组件通信
一般分为:
  - 父子组件通信: 父组件通过props传递数据子组件，子组件通过 this.$emit 发送数据给父组件
  <!-- 子组件能否直接修改props里面的数据？不能，因为props里面是单向数据流 -->
  <!-- $listeners 和 .sync -->

  - 兄弟组件通信: child1 => parent => child2

  - 跨多层级组件通信: porvide/inject, vuex

  - 任意组件通信: vuex, Event Bus


# extend 能做什么
扩展组件，让我们将不属于vue的东西扩展到vue的实例当中使用


# mixin 和 mixins有什么区别
mixin 全局混入
mixins 常用扩展组件的方式，那个组件里面要用就扩展哪个组件


# computed 和 watch 区别？
