<!-- 审核认证 -->
<template>
<section>
    <div class="checkDelContent">
     <div class="con_pad">
      <p class="oneList">
        <span class="laybelName">姓名：</span>
        <el-input v-model="input" style="width:60%;" placeholder="请输入内容"></el-input>
      </p>
      <p class="oneList">
        <span class="laybelName">电话：</span>
        <el-input v-model="input" style="width:60%;" placeholder="请输入内容"></el-input>
      </p>
      <p class="oneList">
        <span class="laybelName">身份证正面：</span>
        <span class="picBorder">
          <!-- <span class="picFont">图片</span> -->
          <img @click="dialogImgBigShow = true" src="../../assets/login_bg.jpg" alt="">
        </span>
      </p>
      <p class="oneList">
        <span class="laybelName">身份证反面：</span>
        <span class="picBorder">
          <!-- <span class="picFont">图片</span> -->
          <img @click="dialogImgBigShow = true" src="../../assets/login_bg.jpg" alt="">
        </span>
      </p>
      <p class="oneList">
        <span class="laybelName">手持身份证图片：</span>
        <span class="picBorder">
          <span class="picFont">图片</span>
          <!-- <img src="../../assets/login_bg.jpg" alt=""> -->
        </span>
      </p>
      <!-- 单图片预览 -->
      <el-dialog :visible.sync="dialogImgBigShow" width="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      
      <p class="oneList">
        <span class="laybelName">用户ID： <span>00001</span></span>
      </p>
      <p class="oneList">
        <span class="laybelNameLine">已经邀请用户： <span>12位</span></span>
        <span class="laybelNameLine">实名认证： <span>2位</span></span>
      </p>
      <p class="oneList">
        <span class="laybelNameLine">币总数： <span>15万</span></span>
        <span class="laybelNameLine">邀请奖金： <span>2万</span></span>
      </p>
      <p class="oneList">
        <!-- <el-radio v-model="radio" label="1" fill="color: #25D687;" style="color: #25D687;">审核通过</el-radio>
        <el-radio v-model="radio" label="2" fill="color:#FF3F3F;" style="color:#FF3F3F;">审核不通过</el-radio> -->
        <el-radio v-model="radio" label="1" >审核通过</el-radio>
        <el-radio v-model="radio" label="2" >审核不通过</el-radio>
      </p>
      <p class="oneList">
        <el-button type="primary">确认</el-button>
        <el-button @click="gotoList">返回列表</el-button>
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
      dialogImgBigShow: false,
      dialogImageUrl: require('../../assets/login_bg.jpg')
    }
  },
  methods: {
    gotoList () {
      this.$router.push('userCheck')
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.checkDelContent{
    background: #fff;
    padding: 3px;
    font-size: 14px;
    .con_pad{
      padding: 2% 3%;
    }
    .oneList{
      margin-bottom: 3%;
    }
    .laybelName{
      display: block;
      margin-bottom: 2%;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0.19px;
    }
    .laybelNameLine{
      display: inline-block;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0.19px;
      margin-right: 5%;
    }
    .picBorder{
      display: block;
      width: 19.25rem;
      height: 10.75rem;
      background: #F0F0F0;
      img{
        width: 100%;
        height: 100%;
      }
      .picFont{
        display: block;
        text-align: center;
        line-height: 10.75rem;
        opacity: 0.99;
        font-size: 48px;
        color: #999999;
        letter-spacing: 0.58px;
      }
    }
}
</style>
