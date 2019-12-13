<template>
  <div class="home-page">
    <div class="header">
      <div class="header-content">
        <div class="header-left">
          <span class="header-logo">
            <img src="../assets/images/shuqixiaoshuo.png" alt="" width="49" height="49">
          </span>
        </div>
        <div class="header-shuqi">
          <h1>书旗小说</h1>
        </div>
        <div class="header-right">
          <span class="search">
            <img src="../assets/images/soushuo (1).png" alt="" width="28" height="28">
          </span>
          <span class="bookshelf" @click="goBookshelf">
            <img src="../assets/images/jiarushujia.png" alt="" width="40" height="45">
          </span>
        </div>
      </div>
    </div>
    <div class="border"></div>
    <div class="nav-list">
      <div class="list-item">
        <img src="../assets/images/paihang.png" alt="" width="40" height="40">
        <h3>排行</h3>
      </div>
      <div class="list-item">
        <img src="../assets/images/nansheng.png" alt="" width="40" height="40">
        <h3>男生</h3>
      </div>
      <div class="list-item">
        <img src="../assets/images/nvsheng.png" alt="" width="45" height="45">
        <h3>女生</h3>
      </div>
      <div class="list-item">
        <img src="../assets/images/fenlei.png" alt="" width="45" height="45">
        <h3>分类</h3>
      </div>
      <div class="list-item">
        <img src="../assets/images/shujia.png" alt="" width="48" height="48">
        <h3>书单</h3>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomePage',
  data () {
   return {

   }
  },
  methods: {
    goBookshelf () {
      this.$router.push({path: '/bookShelf'})
    }
  }
}
</script>

<style scoped>
.home-page {
  position: relative;
  width: 100%;

}
.header {
  width: 100%;
  height: 63px;
  line-height: 63px;
  border-bottom: 1px solid #a6d1f8;
  overflow: hidden;
}
.header-content {
  overflow: hidden;
  position: relative;
  height: 63px;
  line-height: 63px;
  background: #00CCFF;
}
.header-left {
  position: relative;
  width: 94px;
  height: 49px;
  line-height: 49px;
  padding: 10px 1px 10px 0;
  background-size: 83px auto;
  background-position: 15px 25px;
}
.header-left::before {
  content: '';
  position: absolute;
  height: 43px;
  top: 11px;
  width: 1px;
  right: 0px;
  background: #fff;
  opacity: 0.4;
}
.header-logo {
  position: relative;
  word-wrap: 25%;
  margin-left: 20px;
  opacity: 0.8;
}
.header-shuqi{
  display: flex;
  position: absolute;
  top: 0;
  left: 96px;
  height: 63px;
  line-height: 63px;
  width: 160px; 
  text-align: center;
}
h1 {
  display: block;
  position: relative;
  /* top: 5px; */
  margin: 5px auto;
  height: 49px;
  line-height: 49px;
  font-size: 25px;
  color:#404040;
}
.header-right {
  position: absolute;
  top: 0;
  left: 255px;
  width: 120px;
  height: 63px;
}
.search {
  display: inline-block;
  position: relative;
  height: 49px;
  line-height: 49px;
  width: 25%;
  bottom: 5px;
}
.bookshelf {
  display: inline-block;
  position: relative;
  left: 5px;
  height: 49px;
  line-height: 49px;
  margin: 5px 10px
}
.border {
  border-top: 1px solid #F0F0F0;
  height: 14px;
  border-bottom: 1px solid #F0F0F0;
  background-color: #C0C0C0;
}
.nav-list {
  width: 100%;
  height: 95px;
  line-height: 95px;
  text-align: center;
  background-color: #FF6699;
  border-bottom: 1px solid #FFFF99;
  opacity: .8;
}
.list-item {
  display: inline-block;

  height: 67px;
  text-align: center;
  margin: 5px 10px;
  border-radius: 2px;
  /* border-radius: 40%; */
  box-sizing: border-box;
  overflow: hidden;
}
h3 {
  position: absolute;
  top: 110px;
  font-size: 13px;
  text-align: center;
  margin-left: 12px;
  
}

</style>