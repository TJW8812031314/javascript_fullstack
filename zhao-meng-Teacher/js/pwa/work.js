let sum = 0
for(let i = 0; i < 1000000; i++) {
  sum += i
}
// 把消息传递出去
console.log(sum)
this.postMessage(sum)
this.onmessage = function(e) {
  console.log(e)
}
