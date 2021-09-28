import Vue from 'vue'
import App from './App'
// import plugin from './plugin.js'
import MyPlugin from './plugin.js'

Vue.config.productionTip = false
Vue.use(MyPlugin, 1, 2, 3)

new Vue({
  el: '#app',
  render: h => h(App)
})
