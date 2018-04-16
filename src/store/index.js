// zhouchiye@shanlinjinrong.com
// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

// 引入模块
import state from './states'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
