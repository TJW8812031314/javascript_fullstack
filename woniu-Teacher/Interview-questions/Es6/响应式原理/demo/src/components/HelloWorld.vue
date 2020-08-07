<template>
  <div class="login">
    <input type="text" placeholder="请输入账号" v-model="username">
    <input type="text" placeholder="请输入密码" v-model="password">
    <button v-on:click="tologin">登入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    tologin() {
      if(!this.username || !this.password) {
        alert('账号或密码不能为空')
      }else {
        alert(`登录成功,账号: ${this.username}, 密码：${this.password}`)
      }
    }
  }
}
</script>

<style>

</style>