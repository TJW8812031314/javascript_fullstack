## 静态资源
不会随着服务运行而改变的东西
html css js jpg
Request URL: http://localhost:8888/log.png -> 请求变成服务器上请求的图片了变成一个url了


- 解决方法
  请求的 url 和文件在磁盘上的路径一一对应起来
  :8888/log.png -> 404
  :8888/js/home.js -> read -> res
  
  静态服务器比如：
  nginx


  file:///C:/javascript_fullstack/zhao-meng-Teacher/node/static-resource-serve/index.html
  浏览器双击打开
  file 协议能自动查找
  放到服务器上面 http 协议