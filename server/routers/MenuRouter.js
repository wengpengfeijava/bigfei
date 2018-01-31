///
const MenuController = require('../controllers/MenuController')
const bfei = require('../common/bfei')
module.exports = function (app) {
  app.get('/web/getMenuList', (req, res, next) => {
    MenuController.getList()
      .then(function (data) {
        res.send(bfei.Result(data))
      })
  })
}
