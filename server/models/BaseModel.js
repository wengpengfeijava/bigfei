const mongoose = require('mongoose')
const { Schema } = mongoose
const bfei = require('../common/bfei')

class BaseModel {

  constructor () {
    this.name = this.getName()

    const schema = new Schema(this.getSchema(), {
      collection: this.name
    })

    this.model = mongoose.model(this.name, schema)

    bfei.store(this.model)
  }

  getName () {
    return 'baseModel'
  }

  getSchema () {

  }

  save (data) {
    // 创建时间
    data.createTime = new Date().getTime()
    return (new this.model(data)).save()
  }

  getById (id) {
    return this.model.findById(id)
  }
}

module.exports = BaseModel
