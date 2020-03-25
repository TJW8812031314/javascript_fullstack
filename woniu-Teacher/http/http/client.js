// 客户端

const http = require('http')

// http.ClientRequest 类
// new http.ClientRequest 类
// http.request()

// 创建一个客户端请求(能发http请求) 对象
// 请求行: get，http://127.0.0.1:80/ http/1.1
const client = http.request({
  // tcp
  host: 'www.baidu.com',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/',
}, (res) => {
  // 这个函授会在服务器响应的时候触发
  // res => socket
  res.on('data', (data) => {
    console.log(data.toString())
  })
})

// 请求的发送需要调用下面的方法
client.write('')
client.end()