
let loadingNode = document.createElement('div');
loadingNode.style.backgroundColor = '#eee';
loadingNode.style.opacity = '.6';
loadingNode.style.position = 'absolute';
loadingNode.style.left = 0;
loadingNode.style.top = 0;
loadingNode.style.right = 0;
loadingNode.style.bottom = 0;
function toggleLoading(el, binding) {
  if(binding.value) {
    el.appendChild(loadingNode);
  } else {
    el.contains(loadingNode) && el.removeChild(loadingNode);
  }
}
// Vue.directive('loading', {
//   bind: function(el, binding) {
//     // console.log(el, binding)
//     // 第一次绑定，只会调用一次
//     toggleLoading(el, binding);
//   },
//   // 更新再次调用
//   update(el, binding) {
//     toggleLoading(el, binding);
//   }
// })

// directive指令
let plugin = {};
// Vue.use()
plugin.install = function(Vue) {

  Vue.directive('loading', {
    bind: function(el, binding) {
      // console.log(el, binding)
      // 第一次绑定，只会调用一次
      toggleLoading(el, binding);
    },
    // 更新再次调用
    update(el, binding) {
      toggleLoading(el, binding);
    }
  })
}
// vue插件 提供全局的方法
// import VueLoading from 'vue-loading'
// Vue.use(VueLoading)
// 导出
// 通用 模块化 方案 UMD
if (typeof exports === 'object') {
  module.exports = plugin
} else {
  // window
  window.Vue.use(plugin);
  // window.VueLoading = plugin // 用户自己Vue.use(plugin) 
}
// npm