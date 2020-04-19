# 前端性能优化

 # 从输入url到页面渲染，发生了什么？

  1. 用户输入 baidu.com
  2. 浏览器通过 DNS，把url解析为IP<!--/image/DNS.jpg>
  3. 和IP地址建立TCP链接
  4. 服务器接收请求，查库，读文件，拼接好返回的HTTP响应
  5. 浏览器收到首屏的html，开始渲染
  6. 解析html为dom
  7. 解析css为css-tree
  8. dom + css 生成render-tree  绘图
  9. 加载script的js文件
  10. 执行js

  所谓的性能优化，就是以上的步骤加在一起，时间尽可能短，所以基本就是两个大方向
  1. 少加载文件
  2. 少执行代码


  # 浏览器的缓存机制
  广义上来说，缓存可以分为4个
  1. http cache
  2. Service Worker cache
  3. Memory cache
  4. Push cache