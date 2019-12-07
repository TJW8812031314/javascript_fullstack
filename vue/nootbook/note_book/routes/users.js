const router = require('koa-router')()
const userServies = require('../controllres/mySqlConfig')
const utils = require('../controllres/utils')

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

// 注册
router.post('/userRegister', async(ctx, next) => {
  let username = ctx.request.body.username
  let userpwd = ctx.request.body.userpwd
  let nickname = ctx.request.body.nickname
  if (!username || !userpwd || !nickname) {
    ctx.body = {
      code: '80000',
      mess: '账号， 密码，昵称不能为空'
    }
    return
  }
  let user = {
    username: username,
    userpwd: userpwd,
    nickname: nickname
  }
  await userServies.findUser(user.username).then(async (res) => {
    // console.log(res)
    // 判断前端数据是否存在
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }    
      ctx.body = {
        code: '80003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await userServies.insertUser([user.username, user.userpwd, user.nickname])
        .then((res) => {
          // console.log(res)
          let r = ''
          if (res.affectedRows !== 0) {
            r = 'ok',
            ctx.body = {
              code: '200',
              data: r,
              mess: '注册成功'
            }
          }else {
            r = 'error',
            ctx.body = {
              code: '500',
              data: r,
              mess: '注册失败'
            }
          }
      })
      .catch((err) => {
        ctx.body = {
          code: '500',
          data: err
        }
      })
    }
  })
})

// 根据分类名称查找对应的笔记列表
router.post('/findNoteListBytype', async(ctx, next) => {
  let note_type = ctx.request.body.note_type
  console.log(note_type)
  await userServies.findNoteListBytype(note_type).then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
      ctx.body = {
        code: '200',
        data: res,
        mess: '查询成功'
      }
    }else {
      r = 'error',
      ctx.body = {
        code: 400,
        data: r,
        mess: '查询失败'
      }
    }
  })
  .catch ((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

// 根据对应的id查找对应的笔记详情
router.post('/findNoteDetailById', async(ctx, next) => {
  let id = ctx.request.body.id
  await userServies.findNoteDetailById(id).then(async (res) => {
    let r = ''
    if(res.length) {
      r = 'ok',
      ctx.body = {
        code: 200,
        data: res[0],
        mess: '查找成功'
      }
    }else {
      r = 'error',
      ctx.body = {
        code: 400,
        data: r,
        mess: '查找失败'
      }
    }
  })
  .catch((error) => {
    ctx.body = {
      code: "80000",
      data: error
    }
  })
})
// 发表笔记
router.post('/insertNote', async(ctx, next) => {
  let c_time = utils.getNowFormatDate()
  let m_time = utils.getNowFormatDate()
  let note_content = ctx.request.body.note_content
  let head_img = ctx.request.body.head_img
  let title = ctx.request.body.title
  let note_type = ctx.request.body.note_type
  let useId = ctx.request.body.useId
  let nickname = ctx.request.body.nickname
  console.log(c_time, m_time, note_content, note_type, title, useId, nickname)
  await userServies.insertNote([c_time, m_time, note_content, note_type, head_img, title, useId, nickname])
    .then(async (res) => {
      console.log(res)
      let r = ''
      if (res.affectedRows) {
        r = 'ok',
        ctx.body = {
          code: '200',
          data: r,
          mess: '发表成功',
        }
      } else {
        r = 'error',
        ctx.body = {
          code: '400',
          data: r,
          mess: '发表失败',
        }
      }
    })
    .catch((err) => {
      ctx.body = {
        code: '500',
        data: err
      }
    })
})
module.exports = router