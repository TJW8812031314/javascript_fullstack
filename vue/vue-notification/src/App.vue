<template>
  <div id="app">
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>

    <!-- <img src="./assets/logo.png"> -->
    <Header/>
    <Footer/>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
// 指令 v-if v-for 自定义指令
// import HelloWorld from './components/HelloWorld'
// import Header from './components/Header'
// import Footer from './components/Footer'

export default {
  name: 'App',
  data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          loading: true
        }
      },

  components: {
    // HelloWorld,
    // Header,
    // Footer
  }
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
</style>
