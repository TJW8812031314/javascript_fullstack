<template>
  <div class="bookshelf">
    <div class="header">
      <div class="navigation">
        <img src="./yemian-copy-copy.png" alt="" width="25" height="25" @click="back()">
      </div>
      <h3 class="title">我的书架</h3>
    </div>
    <div class="bookshelf-content">
      <div class="book">
        <img src="http://c-shuqi.11222.cn/assets/bookshelf-empty_0f8e62c.png" alt="" width="167" height="93">
      </div>
      <p>书架空空如也</p>
      <button class="btn" @click="back()">去书城</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookShelf',
  methods: {
    back() {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.bookshelf {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  background-color:#F0F0F0;
}
.header {
  box-shadow: #006699 0 1px 0 0;
  font-size: 20px;
  line-height: 50px;
  height: 50px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #006699;
}
.navigation {
  display: inline-block;
  position: absolute;
  width: 55px;
  left: 2px;
  margin: 3px 3px;
  text-align: center;
}
.title {
  display: inline-block;
  font-size: 18px;
  color: #A8A8A8;
}
.bookshelf-content {
  position: relative;
  color: #fff;
  top: 50px;
  height: 270px;
  width: 100%;
  padding: 40px 0;
  border-bottom: 1px solid#E0E0E0,
}
.book {
  position: relative;
  text-align: center;
  justify-content: center;
}
p {
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
}
.btn {
  position: relative;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  padding: 9px 46px;
  background-color: #e6e7ed;
}
</style>