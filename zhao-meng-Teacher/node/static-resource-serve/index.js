const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  // 把./log.png 读成http://localhost:8888/log.png 拼接了
  if(req.url === './log.png') {
    return ''
  }
  console.log(req.url)
  // 读一个文件成流
  fs.createReadStream("./index.html").pipe(res);
}).listen(8888, () => {
  console.log('http://localhost:8888')
})