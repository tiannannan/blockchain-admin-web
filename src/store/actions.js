// 类型
import { ACTIONS, MUTATIONS } from './types'

// 路由
import router from '../router'

// 封装的axios
import req from '../request'
import axios from 'axios'

// Lockr localStorage封装
import Lockr from 'Lockr'

export default {
  /* 通用 */
  // 设置用户信息和登录
  [ACTIONS.LOGIN] ({ commit, state }, loginInfo) {
    return new Promise((resolve, reject) => {
      req.post(req.api.login + '?username=' + loginInfo.username + '&password=' + loginInfo.password, loginInfo, (data) => {
        let userInfo = {
          username: loginInfo.username,
          userHeadName: data.userFullName,
          isLogin: true
        }

        // 存储到localstorage
        Lockr.set('userInfo', userInfo)

        // 存储Token
        Lockr.set('Token', data.userToken)
        axios.defaults.headers.common['Token'] = data.userToken

        // 设置用户信息
        commit(MUTATIONS.SET_USER_INFO, userInfo)

        // 获取登录状态 默认跳转代办订单页
        if (state.userInfo.isLogin) router.push('/order/list')

        // 回调
        resolve(data)
      })
    })
  }
  // 修改密码
  // [ACTIONS.CHANGEPWD] ({ commit, state }, json) {
  //   return new Promise((resolve, reject) => {
  //     req.post(req.api.changePwd + '?oldPwd=' + json.oldPwd + '&newPwd=' + json.newPwd, json, (data) => {
  //       // 回调
  //       resolve(data)
  //     })
  //   })
  // },
}
