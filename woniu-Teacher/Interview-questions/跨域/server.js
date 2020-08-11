var http = require('http')

http.createServer(function name(req, res) {
  res.write('服务器搭建成功')
  res.end()
}).listen(3000)