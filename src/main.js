// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import store from './store'

Vue.prototype.$http = axios

Vue.use(iview)

Vue.config.productionTip = false

const router = Router(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.push('/Home')
