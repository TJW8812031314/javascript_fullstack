##  hash-router
url 不好看
好处：兼容性好

## history
baidu.com -> baidu.com/s/
url 好看
缺点：js pushState() 不会引起页面刷新， 但是/url4 点击刷新， 是会把/url4发送给后端请求资源的，后端没有任何处理404

window.add(popstate): 检测到 浏览器 前进后退
back go forward 这个几个行为带来的 url 的变化


pushState: 
replaceState？