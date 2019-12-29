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

app.use((ctx) => {
  console.log(ctx.req.url)
  console.log(ctx.request.req.url)
  console.log(ctx.response.req.url)
  console.log(ctx.request.url)
  console.log(ctx.response.url)
  console.log(ctx.url)
  console.log(ctx.path)
  ctx.body = {
    name: '1',
    age: '2'
  }
  console.log(ctx.body)
})
app.listen(3000)

