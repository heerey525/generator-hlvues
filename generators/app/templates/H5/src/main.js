import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Vconsole from 'vconsole'
import '@/assets/css/normalize.css'

import 'amfe-flexible'
import './vantImport'

if (process.env.NODE_ENV !== 'production') {
  const vConsole = new Vconsole();
  Vue.use(vConsole)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
