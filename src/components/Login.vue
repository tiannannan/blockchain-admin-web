<template>
  <div class="login">
    <div class="loginAuto">
      <p class="title">区块链课堂-管理端</p>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <el-form-item prop="username">
          <el-input type="text"  v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" @keyup.native.enter="handleLogin('loginForm')" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <button class="loginBtn" type="button" @click="handleLogin('loginForm')">登 录</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
    <!-- <el-dialog
  title="区块链课堂"
  class="login"
  :visible="!$store.state.userInfo.isLogin"
  width="450px"
  :modal="false"
  center
  :close-on-press-escape="false"
  :show-close="false">
  <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px">
    <el-form-item label="账 号：" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密 码：" prop="password">
      <el-input type="password" @keyup.native.enter="handleLogin('loginForm')" v-model="loginForm.password"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="handleLogin('loginForm')">登 录</el-button>
  </span>
</el-dialog> -->
</template>
<script>
import { mapActions } from 'vuex'
// 路由
import router from '../router'
// import md5 from 'md5'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // actions映射 组件中以this.xxx调用 支持载荷
    ...mapActions([
      'LOGIN'
    ]),

    // 处理登录
    handleLogin (formName) {
      router.push('/userCheck/userCheck')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 分发action LOGIN 登录
          // this.LOGIN({
          //   username: this.loginForm.username,
          //   password: md5(this.loginForm.password)
          // })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  // background: url('../../src/assets/login_bg.jpg') no-repeat;
  // background-size: 100% 100%;
  background: #169CFF;
  overflow: hidden;
  height: 100%;
  .loginAuto{
      background-clip: padding-box;
      margin: 180px auto;
      text-align: center;
    .title {
      text-align: center;
      color: #fff;
      font-size: 30px;
    }
    .login-container {
      /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      width: 350px;
      padding: 50px 35px 20px 35px;
      text-align: center;
      background: #fff;
      border: 1px solid #eaeaea;
      margin: 0 auto;
      box-shadow: 0 0 25px #cac6c6;
      .loginBtn{
        width: 21.91rem;
        height: 3.13rem;
        background: #169CFF;
        border-radius: 4px;
        color: #fff;
        cursor:pointer;
        font-size: 16px;
      }
    }
  }

}

</style>
