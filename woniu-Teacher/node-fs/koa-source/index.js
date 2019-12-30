// 原生js实现请求
// const http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })
// server.listen(3000, () => {
//   console.log('run http://localhost:3000')
// })

// koa
// const koa = require('koa')
// const app = new koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world!!!'
// })

// app.listen(3000)



let myKoa = require('./lib/application.js')
let app = new myKoa()

app.use((ctx, next) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.response.url)
  // console.log(ctx.url)
  // console.log(ctx.path)
  ctx.body = {
    name: 'wn',
    age: 18
  }
  // console.log(ctx.body)
  next()
})

app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  ctx.body = 'hello'
  next()
  console.log(4)
})

app.listen(3000)

