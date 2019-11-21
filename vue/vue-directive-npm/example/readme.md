## 手写vue 指令不用框架
- 手写npm包
-  vue插件 提供全局的方法
 import VueLoading from 'vue-loading'
 Vue.use(VueLoading)
- Vue.use()等于参数 Vue
 let plugin = {};
plugin.install = function(Vue) {
  
}
