// 什么是跨域？ 为什么浏览器要使用同源策略？ 你有几种解决跨域的方式？了解预检请求？

// 协议，域名，端口有个不同，就是跨域

// 同源策略主要是用来防止CSRF攻击(跨站攻击)



// 但是跨域并不能完全阻止CSRF攻击

// 1. 通过表单的方式发起请求是可以跨域的
// 2. JSONP, 利用是<script></script>标签没有跨域限制的漏洞(只能用于get请求)
//* <script src="http://domain/api? param1=a&param2=b&callback=jsonp"></script>
// 3. CORS --- 后端允许跨域， 服务端设置 Access-Contorl-Allow-Origin 就可以开启CORS
// 4. nginx代理


