<template>
  <div class="home-page">
    <div class="header">
      <div class="header-content">
        <div class="header-left">
          <span class="header-logo">
            <img src="../assets/images/shuqixiaoshuo.png" alt="">
          </span>
        </div>
        <div class="header-shuqi">
          <h1>书旗小说</h1>
        </div>
        <div class="header-right">
          <span class="bookshelf"></span>
          <span class="search"></span>
        </div>
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
  background: #66aff3;
}
.header-left {
  position: relative;
  width: 25%;
  height: 49px;
  line-height: 49px;
  font-size: 17px;
  padding: 10px 1px 10px 0;
  background-size: 83px auto;
  background-position: 15px 25px;
}
img {
  position: relative;
  margin-left: 20px;
  width: 35%;
  height: 49px;
}
</style>