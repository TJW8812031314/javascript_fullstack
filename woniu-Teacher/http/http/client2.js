// 客户端

const http = require('http')

// http.ClientRequest 类
// new http.ClientRequest 类
// http.request()

// 创建一个客户端请求(能发http请求) 对象
// 请求行: get，http://127.0.0.1:80/ http/1.1
const client = http.request({
  // tcp
  host: '127.0.0.1',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/view',
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })
})

// 请求的发送需要调用下面的方法
client.write('')
client.end()