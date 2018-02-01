import Vue from 'vue'
import Router from 'vue-router'
import StandardManage from './StandardManage'
import Home from '../views/Home.vue'
import * as StoreType from '../store/StoreType'
import iv from 'iview'

Vue.use(Router)

const SystemRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
      name: 'Base',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    StandardManage]
})

function initRouter (store) {
  SystemRouter.beforeEach((to, from, next) => {
    iv.LoadingBar.start()
    store.dispatch(StoreType.RouterHistories, to)
    next()
  })
  SystemRouter.afterEach((to, from) => {
    iv.LoadingBar.finish()
  })

  SystemRouter.onError((...args) => {
    console.log(...args)
  })
}

export default function (store) {
  initRouter(store)
  return SystemRouter
}
