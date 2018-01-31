const BaseController = require('./BaseController')
const Menu = require('../models/Menu')
const bfei = require('../common/bfei')

class MenuController extends BaseController {
  constructor () {
    super()
    this.model = bfei.store(Menu)
  }

  /**
   * 获取菜单列表信息
   * @returns {Promise.<*>}
   */
  async getList () {
    return await this.model.getList()
  }
}

module.exports = new MenuController()
