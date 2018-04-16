// zhouchiye@shanlinjinrong.com
// 路由
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'

// 订单管理
import wechatCode from '@/components/wechatCode/wechatCode'
import userCheck from '@/components/userCheck/userCheck'
import checkDetail from '@/components/userCheck/checkDetail'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [

    // 善贰贷管理系统路由
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/userCheck/',
      name: '用户审核',
      component: Index,
      children: [
        {
          path: 'userCheck',
          name: '用户审核',
          component: userCheck
        },
        {
          path: 'checkDetail',
          name: '审核认证',
          component: checkDetail
        }
      ]
    },
    {
      path: '/wechatCode/',
      name: '微信二维码切换',
      component: Index,
      children: [
        {
          path: 'wechatCode',
          name: '微信二维码切换',
          component: wechatCode
        }
      ]
    }
  ]
})
