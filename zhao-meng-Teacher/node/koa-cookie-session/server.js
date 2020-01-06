const Koa = require('koa')
const KoaStatic = require('koa-static')
var Router = require('koa-router');
var router = new Router();


const app = new Koa()

app.use(KoaStatic(__dirname + '/static'))
let sessionTable = []

router.get('/login', (ctx, next) => {
  // ctx.router available
  // 后端 通过 set-cookie
  // 验证通过， 存住用户登入的状态 session
  // http 无状态
  sessionTable = [{
    sessioniId: 0001,
    uid: 001,
    islogin: true,
  }]
  // 保存登入状态
  ctx.cookies.set('sessionId', 0001, {
    maxAge: 1000 * 60
  })
  ctx.body = { code: 0}
});
router.get('/islogin', async (ctx) => {
  // 通过 cookie
  // cookie 会自动 附加到请求头上
  const sid = ctx.cookies.get('sessionId');
  const session = sessionTable.find(s => s.sessioniId === sid)
  if (session) {
    const uid = session.uid
    ctx.body = {
      code: 0,
      uid,
    }
  }else {
    ctx.body = {
      code: 1,
      msg: '未登入'
    }
  }
  const uid = sessionTable.uid
})
 
app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(8080, () => {
  console.log('run http://localhost:8080')
})

