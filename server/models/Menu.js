const BaseModel = require('./BaseModel')
const bfei = require('../common/bfei')

class Menu extends BaseModel {
  getName () {
    return bfei.modelConstant.menu
  }

  getSchema () {
    return {
      name: String,
      icon: String,
      router: Object,
      parentId: String,
      subs: Array,
      createTime: Number,
      updateTime: Number,
      status: Number,
      order: Number
    }
  }

  async getList () {
    return await this.model.find().select('name icon subs router').sort('field order').exec()
  }
}

module.exports = Menu
