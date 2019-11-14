<template>
  <div id="app">
    <h3 class="mb30">vue组件通信的各种方式</h3>
    <p>导航
      <router-link to='./d1'>父子组件通信1</router-link>
      <router-link to='./d2'>父子组件通信2</router-link>
      <router-link to='./d3'>父子组件通信3</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mb30 {
  margin-bottom: 30px;
}
</style>
