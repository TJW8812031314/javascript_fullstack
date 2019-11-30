const http = require('http')
//req: request
let server = http.createServer((req, res) => {
  console.log('req content', req.url)
  // 结束
  res.end('123')
})

server.listen(3000, () => {
  console.log('ok')
})