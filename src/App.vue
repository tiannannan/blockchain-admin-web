<template>
<section id="app">
  <router-view/>
</section>
</template>

<script>
export default {
  name: 'app',
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
html{
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  color: $font2;
  .el-container {
    height: 100%; 
    border: 1px solid $border1;
    .el-header {
      background-color: $blue;
      line-height: 60px;
      .username {
        color: $white;
      }
    }
    .el-menu {
      border-right: none;
      height: 100%;
      background: $gray1;
    }
    .el-main {
      border-top: 0.05px solid $border1;
      overflow: scroll;
      max-height: 87.5vh;
    }
  }
}
#app{
  height: 100%;
}
</style>
