// 在node中，tcp 协议，基于net模块来实现

const net = require('net');
const fs = require('fs')

// 创建一个服务器: 
// 1. 监听地址和端口  
// 2. 处理发送到当前监听地址以及端口的数据
// 3. 返回 (发送) 数据到链接的客户端


const server = net.createServer(() => {
  // 这个函数其实就是connection事件绑定的函数
})

// function createServer() {
//   let s = new net.Server()
//   s.on('connection')
//   return s
// }

// 有客户端发生链接的时候触发
server.on('connection', (socket) => {
  // socket 当前链接的socket对象
  console.log('有人链接了')

  // 发送图片
  let data2 = fs.readFileSync('./server/data.jpg')
  console.log(data2)
  socket.write(data2)
  socket.end()

  // socket.write('hello')
  // // 接收客户端
  server.on('data', data => {
    // socket.write('show me the money')

  })
})



// 监听地址及端口
server.listen(1234, '127.0.0.1')
// server.listen(12345, '0.0.0.0')// 通配
// 如果 host 省略，如果 IPv6 可用，服务器将会接收基于未指定的 IPv6 地址 (::) 的连接
// 否则接收基于未指定的 IPv4 地址 (0.0.0.0) 的连接。
