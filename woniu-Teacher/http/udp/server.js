// 服务端 
// 监听当前服务器上指定的IP与端口如果有数据发送到给IP和端口上，我就进行处理

const dgram = require('dgram');
// 创建一个socket类，用来处理网络数据的一个API对象
// 通过socket，我们就可以对网络数据进行读取和输出

// const socket = new dgram.Socket()
const server = dgram.createSocket('udp4');// 套接字 IPV$ IPV6

server.on('message', (msg) => {
  console.log(`来自服务器的数据: ${msg}`)
})

// 当接收数据
server.on('listening', () => {
  console.log('服务期开启成功，等待数据:')
})



// 监听指定的地址和端口
server.bind(12345, '127.0.0.1')

