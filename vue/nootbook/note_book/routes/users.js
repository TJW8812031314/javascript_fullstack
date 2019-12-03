const router = require('koa-router')()
const userServies = require('../controllres/mySqlConfig')

router.prefix('/users')// 路由前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userServies.getAllusers().then((res) => {
    console.log('打印结果:' + JSON.stringify(res))
    ctx.body = res
  })
})
// 登入的接口
router.post('/userLogin', async(ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  await userServies.userLogin(_username, _userpwd)
  // res是从数据中取到的
    .then((res) => {
      let r = ''
      // console.log(res)
      if (res.length) {
        r = 'ok';
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: '200',
          data: result,
          mess: '登入成功'
        }
      } else {
        r = 'error'
        ctx.body = {
          code: '302',
          data: r,
          mess: '账号或密码错误'
        }
      }
    })
    .catch((err) => {
      ctx.body = {
        code: '500',
        data: err,
      }
    })
})
module.exports = router