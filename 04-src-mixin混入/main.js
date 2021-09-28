import Vue from 'vue'
import App from './App'
import {mixin1} from './mixin.js'

Vue.config.productionTip = false
Vue.mixin(mixin1)
new Vue({
  el: '#app',
  render: h => h(App)
})
