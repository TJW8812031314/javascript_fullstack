// 创建独立对象， 创建2个 一个是小王，一个是小李
// 让小李跟小王 通过门铃进行通信
// 先看小王家 有没有门，如果有门didi, 如果没门，先建门
// 两个单例开始通信

var xiaowang = (function(argument) {
  var xiaowangjia = function(message) {
    this.menling = message
  }
  var men;
  var info = {
    sendMessage: function(message) {
      if(!men) {
        men = new xiaowangjia(message)
      }
      return men
    }
  }
  return info
})()

var xiaoli = {
  callxiaowang: function() {
    var _xw = xiaowang.sendMessage()
    alert(_xw)
  }
}
