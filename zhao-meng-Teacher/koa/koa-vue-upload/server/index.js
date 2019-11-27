const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const KoaCors = require('koa-cors')
const KoaBody = require('koa-body')
const app = new Koa();
const router = new KoaRouter();
// 单个路由的中间件
const path = require('path')
router.post('/upload', KoaBody({
  // 多个文件解析
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/static/'),
    keepExtensions: true,
    hash: true // 添加防止提交名字重复 添加hash字符串 MDS
  }
  }), async (ctx) => {
    /**
     *ctx ={
      request,
      response
    }
    .files koabody 加上去的
     */ 
    const diskPath = ctx.request.files.avatar.path;
    let fileName = path.basename(diskPath);
    // 返回数据
    ctx.body = {
      code: 200,
      url: `http://localhost:3000/${fileName}`
    }
})
// 全局的
// 中间件的引入有顺序
// cors 解决跨域
app.use(KoaCors())
app.use(router.routes()).use(router.allowedMethods())
// 监听
app.listen(3000, () => {
  console.log('server is running')
})
