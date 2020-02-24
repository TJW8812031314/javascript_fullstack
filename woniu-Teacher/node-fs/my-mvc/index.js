const app = new(require('koa'))()

const { initRouter } = require('./lm-loader')
app.use(initRouter().routes())

app.listen(3000)
// const app = require('koa')
// const koa = new koa()