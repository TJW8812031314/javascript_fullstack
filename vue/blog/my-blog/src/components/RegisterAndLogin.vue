<template>
  <el-dialog title="登录" :visibel="dialogVisible" @click="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
      <el-formItem v-if="handleFlag === 'register'" label="昵称">
        <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="手机">
        <el-input v-model="params.phone" placeholder="手机号" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="简介">
        <el-input v-model="params.desc" placeholder="个人简介" autocomplete="off"></el-input>
      </el-formItem>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleAuthor">Github 授权登录</el-button>
      <el-button type="primary" @click="handleOk">登 录</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class RegisterAndLogin extends Vue {
  @Prop() private visible!: boolean;
  @Prop() private handleFlag: string
  private params: any = {
    email: "",
    password: "",
  };

  get dialogVisible(): boolean {
    return this.visible;
  }
  get 
  @Emit()
  private cancel(): boolean {
    return false;
  }

  private handleOk(): void {
    const reg = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$")
    if (!reg.test(this.params.email)) {
      this.$message.error('请输入正确的邮箱格式')
    } else {
      if (!this.params.password) {
        this.$message.error('密码不能为空')
      }
    }
    // 登录操作
    this.submit()
  }

  private async submit(): Promise<void> {

  }

  private handleAuthor(): void {
    // 保存授权之前的页面连接
    let preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query
  }
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory)
    window.location.href = `https://github.com/login/oauth/authorize/Client_id=aa2e9dba553a8b7d0641`
  }
}

</script>

<style>
</style>
