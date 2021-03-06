const net = require('net');
const fs = require('fs')

// 创建客户端与udp不一样
// net.Socket()
// 1. new net.Scoket
// 2. net.createConnection()

// 要链接的目标主机与端口号
const clientSocket = net.createConnection(1234, '127.0.0.1')

// 监听数据传输
let content = Buffer.alloc(0)
clientSocket.on('data', data => {
  // console.log('服务器返回:' + data)

  // clientSocket.write('get money')
  // clientSocket.write('getBaby')
  console.log('客户端拿到数据' + data)
  // 把到拿到的数据流整合一块
  content = Buffer.concat([content, data], content.length + data.length)

})

// 当前数据接收完成的时候触发
clientSocket.on('end', () => {
  console.log('数据包接收完成')

  // 把接收到的数据组合起来
  fs.writeFileSync('./server/content.jpg', content)
})