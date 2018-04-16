// zhouchiye@shanlinjinrong.com

// 引入通用配置
import config from './config'

// 封装的storage Lockr
import Lockr from 'Lockr'

// 状态管理器
import store from '../store'

// Element ui 弹窗提示 全局加载
import { Message, Loading } from 'element-ui'

// axios
import axios from 'axios'
axios.defaults.baseURL = config.prefix[config.env]
axios.defaults.headers.common['Content-Type'] = 'application/json'

// 接口请求添加token
let Token = Lockr.get('Token')
axios.defaults.headers.common['Token'] = Token

// 全局加载实例
let loadingInstance
let options = {
  // target: '.el-main'
  background: 'rgba(0, 0, 0, 0)'
}

// 处理错误
let handleErr = (err) => {
  // console.log(err.response.data)
  loadingInstance.close()
  if (err.response && err.response.data) {
    let data = err.response.data
    if (data.errorCode === 'SESSION_TIME_OUT') {
      Message({
        showClose: true,
        message: '登录超时，请重新登录',
        type: 'error'
      })

      // 退出登录
      store.dispatch('LOGOUT')
    } else {
      Message({
        showClose: true,
        message: data.errorMsg ? data.errorMsg : data.message,
        type: 'error'
      })
    }
  } else {
    console.error(err)
    Message({
      showClose: true,
      message: '网络连接出错，请稍后再试',
      type: 'error'
    })
  }
}

export default {
  // 基本连接
  baseURL: config.prefix[config.env],

  // 接口配置
  api: config.api,

  // get请求
  get: (url, data, callback) => {
    loadingInstance = Loading.service(options)
    axios.get(url, data)
    .then(function (res) {
      loadingInstance.close()
      if (res.data.success) {
        callback(res.data.result)
      } else {
        Message({
          showClose: true,
          message: res.data.errorMsg,
          type: 'error'
        })
      }
    })
    .catch(function (err) {
      handleErr(err)
    })
  },

  // post请求
  post: (url, data, callback) => {
    loadingInstance = Loading.service(options)
    axios.post(url, data)
    .then(function (res) {
      loadingInstance.close()
      if (res.data.success) {
        callback(res.data.result)
      } else {
        Message({
          showClose: true,
          message: res.data.errorMsg,
          type: 'error'
        })
      }
    })
    .catch(function (err) {
      handleErr(err)
    })
  },

  // put请求
  put: (url, data, callback) => {
    loadingInstance = Loading.service(options)
    axios.put(url, data)
    .then(function (res) {
      loadingInstance.close()
      if (res.data.success) {
        callback(res.data.result)
      } else {
        Message({
          showClose: true,
          message: res.data.errorMsg,
          type: 'error'
        })
      }
    })
    .catch(function (err) {
      handleErr(err)
    })
  },

  // delete请求
  delete: (url, data, callback) => {
    loadingInstance = Loading.service(options)
    axios.delete(url, data)
    .then(function (res) {
      loadingInstance.close()
      if (res.data.success) {
        callback(res.data.result)
      } else {
        Message({
          showClose: true,
          message: res.data.errorMsg,
          type: 'error'
        })
      }
    })
    .catch(function (err) {
      handleErr(err)
    })
  }
}
