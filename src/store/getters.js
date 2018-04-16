// zhouchiye@shanlinjinrong.com
// 计算属性
import { GETTERS } from './types'
export default {
  // 获取用户登录状态
  [GETTERS.GET_LOGIN_STATE]: state => {
    return state.userInfo.isLogin
  }
}
