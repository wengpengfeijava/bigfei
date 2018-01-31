import Vue from 'vue'
import Router from 'vue-router'
import StandardManage from './StandardManage/index'
import Home from '@/views/Home.vue'
import * as StoreType from '../store/StoreType'

Vue.use(Router)

const SystemRouter = new Router({
  routes: [{
    path: '/Home',
    name: 'Home',
    component: Home
  }, StandardManage]
})

function initRouter (store) {
  console.log(StoreType.RouterHistories)
  SystemRouter.beforeEach((to, from, next) => {
    store.dispatch(StoreType.RouterHistories, to)
    next()
  })
}

export default function (store) {
  initRouter(store)
  return SystemRouter
}
