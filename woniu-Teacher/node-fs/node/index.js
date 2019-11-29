const Koa = require('koa')
const path = require('path')
// 解析表单
const bodyParser = require('koa-bodyparser')
// 模板文件
const ejs = require('ejs')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const Router = require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')// 静态资源
const config = require('./config/default.js')

const router = new Router
const app = new Koa()
app.use(router.routes())
router.get('*', (ctx, next) => {
  ctx.body = 'hello world'
})
// 做缓存
app.use(staticCache(path.join(__dirname, './pubilc'), 
{dynamic: true},
{maxAge: 365 * 24 * 60 * 60}
))
app.use(staticCache(path.join(__dirname, './images'), 
{dynamic: true},
{maxAge: 365 * 24 * 60 * 60}
))

// 配置服务器端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'),
{extension: 'ejs'}
))

app.listen(config.port)
console.log(`lisetening on port ${config.port}`)