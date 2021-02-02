// Core
import Vue from 'vue'
import VueLogger from 'vuejs-logger'
import './registerServiceWorker'

// Logging
import options from '@/logging/config'

// Additional
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import router from './router'
import store from './store'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Entry point
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueLogger, options)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
