import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // pages: { App },
  // template: '<App/>'
  // template: `<h1>template第二种用法</h1>`
  render: h => h(App)
})
