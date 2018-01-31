const Mongoose = require('mongoose')
const ip = 'mongodb://127.0.0.1'
const port = 27017
const connectUrl = `${ip}:${port}`
const dataBaseName = require('../package.json').name
const bfei = require('./common/bfei')

Mongoose.connect(`${connectUrl}/${dataBaseName}`, function (err, dab) {
  // we're connected!
  dab.db.collection(bfei.modelConstant.user)
  dab.db.collection(bfei.modelConstant.menu)
})

// 内置菜单
const Menu = require('./models/Menu')
const MenuModel = new Menu()
require('./mocks/menu.json')
  .data.forEach((menu) => {
  MenuModel.save(menu)
})

// 内置用户
const User = require('./models/User')
const UserModel = new User()
require('./mocks/user.json')
  .data.forEach((user) => {
  UserModel.save(user)
})
