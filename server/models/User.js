const BaseModel = require('./BaseModel')
const bfei = require('../common/bfei')

class User extends BaseModel {
  getName () {
    return bfei.modelConstant.user
  }

  getSchema () {
    return {
      name: String,
      account: String,
      password: String,
      email: String,
      sex: Number,
      type: Number,
      phone: String,
      exts: String,
      createTime: Number,
      updateTime: Number,
      status: Number,
      age: Number
    }
  }

}

module.exports = User
