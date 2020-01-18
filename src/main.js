import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import all plugins
import '@/plugins/index'

// Global Scss
import '@/assets/sass/main.scss'

Vue.config.productionTip = false

// Global Filters
Vue.filter('valueAndUnit', function (element) {
  if (!element || typeof element !== 'object') return ''
  return element.value + ' ' + element.unit
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
