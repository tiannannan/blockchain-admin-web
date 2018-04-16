<template>
<el-container>
  <el-header>
    <div class="logo">
      <span>区块课堂管理端</span> 
      <span class="quitBtn" @click="quitLogin">退出</span>
      </div>
  </el-header>
  <el-container style="background:#eee;">
    <el-aside width="200px" style="background:#409EFF;">
      <el-menu :router="true" 
      :unique-opened="true"  
      :default-active="$route.path" >
      <el-menu-item index="/userCheck/userCheck">
        <span slot="title">用户审核</span>
      </el-menu-item>
      <el-menu-item index="/wechatCode/wechatCode" >
        <span slot="title">微信二维码切换</span>
      </el-menu-item>
      </el-menu>
    </el-aside>
    
    <el-main ref="main" style="border-top:none;">
      <router-view/>
    </el-main>
  </el-container>
  
</el-container>
</template>

<script>
// 路由
// import router from '../router'
export default {
  name: 'index',
  data () {
    return {
      // arrOpen: ['1']
    }
  },
  methods: {

    // 计算主视图高度
    mainHeight () {
      let main = this.$refs.main.$el
      main.style.height = (window.innerHeight - 115) + 'px'
    },
    // 退出
    quitLogin () {
      alert(111)
    }
  },
  mounted () {
    // 计算主视图高度
    this.mainHeight()
  }
}
</script>

<style lang="scss">
.container {
  border: none;
}
.el-aside {
  overflow: hidden;
}
.logo {
    color: #fff;
    font-size:18px;
}
.quitBtn{
  font-size: 16px;
  float: right;
}

.el-breadcrumb {
  height: 50px;
  line-height: 50px;
  background: $gray2;
  padding: 0 20px;
  border-left: 0.05px solid $border1;
  border-bottom: 0.05px solid $border1;
}
.el-main {
  border-left: 0.05px solid $border1;
}

.main {
  width: 70%;
  border: none !important;
}

body .el-container .el-menu{
  background: rgb(64, 158, 255);
}
.el-menu-item{
  border-bottom:1px solid #fff; 
  color: #fff;
}
.el-menu-item.is-active{
  color: #fff;
  border-left: 5px solid #fff;
}
.el-menu-item:focus, .el-menu-item:hover{
  background: rgb(64, 158, 255);
}
body .el-container{
  border: none;
}
</style>
