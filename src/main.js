// zhouchiye@shanlinjinrong.com
// 系统入口

// 样式
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

// Vue框架
import Vue from 'vue'

// ElementUI组件
import ElementUI from 'element-ui'

// 路由
import router from './router'

// 状态管理器
import store from './store'

// 主视图
import App from './App'

// Lockr localStorage封装
import Lockr from './storage'

// 封装的axios
import req from './request'

// 使用ElementUI
Vue.use(ElementUI)

// 使用lockr
Vue.use(Lockr)

// 生产提示
Vue.config.productionTip = false

// 校验登录
// router.beforeEach((to, from, next) => {
//   let toName = to.name
//   let isLogin = store.getters.GET_LOGIN_STATE
//   if (to.path.indexOf('app') > -1) {
//     next()
//   } else if (!isLogin && toName !== '登录') {
//     next({
//       name: '登录'
//     })
//   } else {
//     if (isLogin && (toName === '登录' || to.path === '/')) {
//       next({
//         name: '用户审核'
//       })
//     } else {
//       next()
//     }
//   }
// })

// global mixin
Vue.mixin({
  data () {
    return {
      // 上传接口
      uploadURL: req.baseURL + req.api.upload,

      // 发送请求时的TOKEN
      Token: this.$Lockr.get('Token')
    }
  },
  methods: {
    // 时间戳转换
    dateTime (rol, col, value) {
      if (value) {
        return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ').replace(/上午|下午/g, '')
      } else {
        return '--'
      }
    },

    // 时间戳转换--日期(没有时分秒)
    timeToDate (rol, col, value) {
      if (value) {
        return new Date(parseInt(value)).toLocaleDateString().replace(/年|月/g, '-').replace(/日/g, ' ').replace(/上午|下午/g, '')
      } else {
        return '--'
      }
    }
  }
})

// 全局过滤器 传入常用配置项数组名称type
Vue.filter('TYPE', (val, type) => {
  let value = ''
  let list = store.state.CONFIG[type]
  if (!list) return val
  list.forEach(ele => {
    if (val === ele.itemVal) value = ele.colNameCn
  })
  return value
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
