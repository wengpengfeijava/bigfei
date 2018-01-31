const Mongoose = require('mongoose')
const ip = 'mongodb://127.0.0.1'
const port = 27017
const connectUrl = `${ip}:${port}`
const dataBaseName = require('../../package.json').name

Mongoose.connect(`${connectUrl}/${dataBaseName}`)

const modelStore = new Map()
const bfei = {

  modelConstant: {
    user: 'user',
    menu: 'menu'
  },

  store (model, ...args) {
    if (!modelStore.get(model)) {
      modelStore.set(model, new model(args))
    }
    return modelStore.get(model)
  },

  Result (data, code, msg) {
    return {
      data: data,
      code: code || 10000,
      message: msg || '成功'
    }
  }
}

module.exports = bfei
