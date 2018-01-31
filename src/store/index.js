import vuex from 'vuex'
import Vue from 'vue'
import * as StoreType from './StoreType'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    [StoreType.RouterHistories]: []
  },
  actions: {
    [StoreType.RouterHistories] (mutation, ctx) {
      mutation.commit(StoreType.RouterHistories, ctx)
    }
  },
  mutations: {
    [StoreType.RouterHistories] (state, ctx) {
      state[StoreType.RouterHistories].push({
        name: ctx.name,
        path: ctx.path,
        closable: true,
        show: true,
        checkable: true
      })
    }
  }
})
