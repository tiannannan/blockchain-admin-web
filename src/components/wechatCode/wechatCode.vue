<!-- 审核认证 -->
<template>
<section>
    <div class="checkDelContent">
     <div class="con_pad">
      <div class="oneList">
        <span class="laybelName">切换微信二维码：</span>
        <div class="wechatContent" v-for="item in wechatList" :key="item.id">
          <div class="wechatPic">
            <img src="../../assets/login_bg.jpg" alt="">
          </div>
          <div class="wechatRadio">
            <el-radio v-model="radio" label="1">{{item.name}}</el-radio>
          </div>
        </div>

        <el-upload
         class="wechatContent"
         style="
            height: 10.5rem;
            margin-top: 1.38rem;
            margin-right: 2.63rem;"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :show-file-list='false'
          :on-success="handleAvatarSuccess"
          :showClose="false">
          <span class="upNewBtn">上传新的二维码</span>
        </el-upload>

        <!-- <div class="wechatContent">
          <div class="wechatUpPic">
            <div class="upNewBtn">
              上传新的二维码
              <input class="upFileClass" type="file" name="" value="" id="">
            </div>
          </div>
        </div> -->

        <!-- <a href="javascript:;" class="a-upload wechatContent">
          <input type="file" name="" id="">点击这里上传文件
      </a> -->

      </div>
      <p class="oneList">
        <el-button type="primary" style="width: 7.63rem;height: 2.5rem;">使用</el-button>
      </p>
    </div> 

    </div>
</section>
</template>
<script>
export default {
  name: 'check-detail',
  data () {
    return {
      input: '',
      radio: '',
      wechatList: [
        {
          id: 1,
          name: 'qqq'
        },
        {
          id: 2,
          name: 'ww'
        },
        {
          id: 3,
          name: 'ee'
        },
        {
          id: 4,
          name: 'rr'
        }
      ]
    }
  },
  methods: {
    gotoList () {
      this.$router.push('userCheck')
    },
    handleAvatarSuccess () {
      console.info('upload')
    }
  },
  mounted () {}
}
</script>
<style lang="scss">
.checkDelContent{
    background: #fff;
    padding: 3px;
    font-size: 14px;
    .con_pad{
      padding: 2% 3%;
    }
    .oneList{
      margin-bottom: 3%;
      overflow: hidden;
    }
    .laybelName{
      display: block;
    }
    .wechatContent{
      float: left;
    
      .wechatPic{
        width: 10.5rem;
        height: 10.5rem;
        // border: 1px solid #333;
        margin-top: 1.38rem;
        margin-right:2.63rem; 
        img{
          width: 100%;
          height: 100%;
        }
      }
      .wechatRadio{
        margin-left: 2.55rem;
        margin-top: 1.25rem;
      }
      .upNewBtn{
        background: #BEBEBE;
    border-radius: 2px;
    height: 2.5rem;
    width: 7.44rem;
    display: inline-block;
    line-height: 2.5rem;
    color: #fff;
    font-size: 12px;
      }
      // .wechatUpPic{
      //   width: 10.5rem;
      //   height: 10.5rem;
      //   background: #F4F4F4;
      //   margin-top: 1.38rem;
      //   margin-right:2.63rem; 
      //   .upNewBtn{
      //     text-align: center;
      //     line-height: 10.5rem;
      //     .upFileClass{
      //       background: #BEBEBE;
      //       border-radius: 2px;
      //       width: 7.44rem;
      //       height: 2.5rem;
      //       font-size: 12px;
      //       color: #FFFFFF;
      //       letter-spacing: 0.14px;
      //       line-height: 16px;
      //     }
      //   }
      // } 
    }
    
}
.wechatContent .el-upload--picture-card {
    border: none;
    box-sizing: border-box;
    line-height: 10.5rem;
    vertical-align: top;
    width: 10.5rem;
    height: 10.5rem;
    background: #F4F4F4;
}
</style>
