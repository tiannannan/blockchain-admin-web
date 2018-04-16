// zhouchiye@shanlinjinrong.com
// 环境通用配置
export default {
  /*
    环境配置
    dev  开发
    test 测试
    prod 线上
  */
  env: 'dev',

  // 服务器地址
  prefix: {
    dev: 'http://house-uat.sd-bao.cn:10000/manager', // 开发服务器

    // 测试服务器地址e
    // test: 'http://10.255.233.220:8888',  // 测试服务器
    // 线上服务器地址
    prod: 'http://front.sd-bao.com/manage/'
  },

  // 接口
  api: {
    /* 通用 */
    // 登录
    login: '/login'
  }
}
