const koa = require('koa');
const KoaRouter = require('koa-router');
const fs = require('fs');
const app = new koa();
// 给所有请求prefix加个前缀api
const router = new KoaRouter({prefix: '/api'})
// app.use 加载一个 中间件
// request response
// request -> middleWare1 -> middleWare2 -> response
// ctx: {request, resonse}
// 定义一个以get请求的路由
router.get('/user', async (ctx) => {
  // 同步读出文件Sync
  let userInfo = fs.readFileSync('./api/user.json').toString();
  ctx.body = {
    // 转换为json
    data: JSON.parse(userInfo),
    code: 200
  }
})
const glob = require('glob');
const path = require('path')
// 同步读取api下每一个json路径, 拿到名字从/api切开
glob.sync(path.resolve('/api', '*.json'))
.forEach((item, i) => {
  console.log('item', item);// /api/user.json
  // /user.json
  let apiJsonPath = item && item.split('/api')[1];
  // /api/user
  // /api/login
  let apiPath = apiJsonPath.replace('.json', '')
  router.get(apiPath, async (ctx) => {
    let fileData = fs.readFileSync(item).toString();
    ctx.body = {
      data: JSON.parse(fileData),
      code: 200
    }
  })
})
// app.use(async (ctx) => {
//   ctx.body = {
//     code: 200,
//     msg: 'ok'
//   }
// })
// http://localhost:3000/api/user
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is running http://localhost:3000')
})