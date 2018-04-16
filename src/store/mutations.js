// zhouchiye@shanlinjinrong.com
import { MUTATIONS } from './types'
export default {
  // 设置用户信息和登录
  [MUTATIONS.SET_USER_INFO]: (state, userInfo) => {
    state.userInfo = userInfo
  }
}
