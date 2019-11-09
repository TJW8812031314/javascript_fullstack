## 跨域
浏览器的安全策略：
两个服务通信需要准守同源策略：同协议， 同域名， 同端口号
同源才会让你发出请求
不同源 就会产生跨域

http: //locahost:8080/index.html

http: //locahost.com/api/vi

baidu.com   api.baibu.com
fetch() 请求

## cors
- corss-origin-resource-share
一个规范， 允许服务器声明哪些资源可以访问
Access-Contorl-Allow-Credentials
允许 cookie 传输的

## 请求的步骤
1. 简单请求：发起跨域请求， 表单可以构造的请求
2. 复杂请求：先发起预检（preFlight）请求，预先试探服务端支不支持跨域，之后才发起正式的跨域请求。

## jsonP
link script img : 不受同源策略的影响