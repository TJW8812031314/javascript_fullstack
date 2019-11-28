## 应用层
http webSocket

- 客户端到服务端
http 1.1: client ->>>> server

- 双向的 全双工双向通信
webScoket: client -> server
server -> client

http2.0: 支持 server-push 服务端推送


## 聊天室
postMessage和onmessage的使用
postMessage和onmessage是HTML5的方法，用来解决跨页面通信，或者通过iframe嵌套的不同页面的通信的。postMessage为发送方，onmessage为接收方。
在connection事件中，回调函数会传入一个WebSocket的实例，表示这个WebSocket连接。对于每个WebSocket连接，我们都要对它绑定某些事件方法来处理不同的事件。这里，我们通过响应message事件，在收到消息后通过wss.send再返回一个的消息给客户端
  详解链接：https://www.liaoxuefeng.com/wiki/1022910821149312/1103327377678688
## 链接
1. 发送一个http 请求
   后端响应 101 Switching Protocols
   Connection: Upgrade
   Upgrade: websocket
之后 由 http 协议 升级为 webSocket 后续的发送 接收都会走 这个双向工双向通信

## array-observer监测数组
- 改变原先的功能
1. 先把原来的功能备份一份
2. 自定义的功能
3. 恢复功能()