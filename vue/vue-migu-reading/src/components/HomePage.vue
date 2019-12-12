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
          <span class="bookshelf">
            <img src="../assets/images/jiarushujia.png" alt="" width="40" height="45">
          </span>
        </div>
      </div>
    </div>
    <div class="top-nav-list">
      <div class="item">
        <span class="title"></span>
        <img src="" alt="">
      </div>
      <div class="item">
        <span class="title"></span>
        <img src="" alt="">
      </div>
      <div class="item">
        <span class="title"></span>
        <img src="" alt="">
      </div>
    </div>
    <div class="top-nav-list">
      <div class="item">
        <span class="title"></span>
        <img src="" alt="">
      </div>
      <div class="item">
        <span class="title"></span>
        <img src="" alt="">
      </div>
      <div class="item">
        <span class="title"></span>
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-page {
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
  background: #66aff3;
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
</style>