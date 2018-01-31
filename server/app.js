const express = require('express')
///
const app = express()

const bfei = require('./common/bfei')

// routers
require('./routers/MenuRouter')(app)

app.use(function (req, res, next) {
  console.log(123)
  next()
})

/// 启动
let port = process.env.port || 8089
app.listen(port, () => console.log(`启动成功${port}`))

