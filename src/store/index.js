import vuex from 'vuex'
import Vue from 'vue'
import * as StoreType from './StoreType'

Vue.use(vuex)

function StoreRouter (ctx) {
  this.name = ctx.name
  this.path = ctx.path
  this.closable = !!ctx.closable || false
  this.show = true
  this.checkable = true
  this.index = ctx.index || 0
}

export default new vuex.Store({
  state: {
    [StoreType.RouterHistories]: [
      new StoreRouter({ name: '首页', path: '/Home' })
    ]
  },
  actions: {
    [StoreType.RouterHistories] (mutation, ctx) {
      mutation.commit(StoreType.RouterHistories, ctx)
    }
  },
  mutations: {
    [StoreType.RouterHistories] (state, ctx) {
      // 如果是数字则代表将这个数组的某个索引ctx删除掉
      if (Object.prototype.toString.call(ctx) === '[object Number]') {
        state[StoreType.RouterHistories].splice(ctx, 1)
      } else {
        if (ctx.path === '/Home') {
          return
        }
        let exist = state[StoreType.RouterHistories].findIndex((router) => {
          return router.path === ctx.path
        })
        // 不存在存在
        if (exist < 0) {
          const storeRouter = new StoreRouter(ctx)
          storeRouter.closable = true
          storeRouter.index = state[StoreType.RouterHistories].length
          state[StoreType.RouterHistories].push(storeRouter)
        }
      }
    }
  }
})
