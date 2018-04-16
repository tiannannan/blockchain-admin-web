// localStorage封装 https://github.com/tsironis/lockr
import Lockr from 'Lockr'
export default (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $Lockr: {
      get () {
        return Lockr
      }
    }
  })
}
