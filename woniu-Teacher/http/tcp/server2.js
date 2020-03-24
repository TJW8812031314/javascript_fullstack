// 在node中，tcp 协议，基于net模块来实现

const net = require('net');

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
server.on('connection', () => {
  console.log('我是1234')
})

// 监听地址及端口
server.listen(1234, '127.0.0.1')
