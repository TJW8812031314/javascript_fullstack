const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 3000
})
// 如果有WebSocket请求接入，wss对象可以响应connection事件
wss.on('connection', (ws) => {
  console.log('收到链接')
  // 当有消息触发的时候
  ws.on('message', (msg) => {
    console.log('msg', msg)
    // 通知客户端 广播
    wss.clients.forEach(clients => {
      clients.send(msg);
    })

  })
})