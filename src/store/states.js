// zhouchiye@shanlinjinrong.com

// 封装的storage Lockr
import Lockr from 'Lockr'
let userInfo = Lockr.get('userInfo')

export default {
  // 用户信息
  userInfo: {
    username: userInfo && userInfo.username ? userInfo.username : '未知用户',
    userHeadName: userInfo && userInfo.userHeadName ? userInfo.userHeadName : '未知用户',
    isLogin: userInfo && userInfo.isLogin ? userInfo.isLogin : false
  }
}
