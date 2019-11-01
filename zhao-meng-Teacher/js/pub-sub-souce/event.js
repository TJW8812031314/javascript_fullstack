const Event = require('events')
const ev = new Event()
// 订阅一个事件
ev.on('price', () => {
  console.log('123');
})
ev.on('price', () => {
  console.log('456');
})
// 发布一个事件
ev.emit('price');