import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var vm1 = new Vue({
  render: h => h(App)
}).$mount('#app')

