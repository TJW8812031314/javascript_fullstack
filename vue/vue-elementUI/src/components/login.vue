<template>
  <div class="login">
    <div class="login-wrapper">
      <h2>xxxx管理系统</h2>
      <el-input v-model="user" placeholder="请输入内容" class="user int"></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password class="pass int"></el-input>
      <el-button type="primary" @click="login">登入</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user !== '' && this.password !== '') {
        // 储存数据
        localStorage.setItem('name', this.user)
        this.$router.push({path: '/main'})
      } else {
        this.$message.error('账号密码不能为空')
      }
    }
  }
}
</script>

<style>
.login{
  width: 100%;
  height: 100vh;
}
.login-wrapper{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  height: 350px;
  text-align: center;
  box-shadow: 0 0 10px #aaa;
  border-radius: 10px;
}
.int{
  width: 80%;
  margin: 0 auto;
  display: block;
  margin-bottom: 30px;
}
</style>
