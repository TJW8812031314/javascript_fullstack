## 前端存储

## localStorage
永久性
存储： key: value
## sessionStorage
当前页面当前会话
存储 key: value
## cookie
domain：cookie  生效的域
.baidu.com
map.baidu.com

path: 路径
/
/mobile

domain + path : 构成 cookie 生效的范围

expires/max-age: 生效的时间

httpOnly
cookie: 1. 服务器  2.js
如果 true cookie 不可以被 js 操作的

secure:
只在 https 环境下 传输 cookie