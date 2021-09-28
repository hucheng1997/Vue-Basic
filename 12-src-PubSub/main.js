import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.x = 12
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    console.log(this )
    //安装全局事件总线
    Vue.prototype.$bus = this
  }
})
