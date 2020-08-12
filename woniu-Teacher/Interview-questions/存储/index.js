// 有几种种方式实现存储功能？ 分别是什么？ Service Worker是什么？
// https://www.jianshu.com/p/b9d2a2391785

// const { Cookie } = require("cookies");
// const Cookies = require("cookies");
// const { setMaxListeners } = require("process");

// cookie，localStorage, sessionStorage, indexedDB
// cookies: 
// 一般有服务器生成，可设置失效时间。如果在浏览器端生成的cookie，默认关闭浏览器后失效
// 4K左右
// 每次都会携带在http头中，如果使用cookie保存过多会带来性能问题

// localStorage:
// 除非被清除，否则永久保存
// PC一般5M,移动端2.5M
// 仅在浏览器中保存，不参与和服务器通信

// sessionStorage:
// 仅在当前会话下有效，关闭页面或浏览器后失效
// PC一般5M,移动端2.5M
// 仅在浏览器中保存，不参与和服务器通信

// indexedDB:
// 永久保存
// 一般没有上限大小
// 不参与服务器通信

// localStorage.setItem('name', {name:'wn'})

// Service Worker:
// 运行在浏览器背后，独立的线程，一般可以用来做缓存。
// 运用Service Worker的话，必须要使用HTTPS协议，因为它当中涉及到请求拦截

// 实现缓存的三个步骤：
// 1. 注册Service Worker
// 2. 监听到install事件之后，就可以缓存需要的文件
// 3. 用户下一次访问就可以查询是否存在缓存，存在的话就读取缓存 大文件的断点续点