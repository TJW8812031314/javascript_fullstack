get / http1.1
refer: 值
user-agent
etag:
cache-control


http 响应
Content-length: 7877长度
空行
body <html>
  标题协议
</html>

DNS预加载

1. 如何少加载文件 <!--/image/http.png>
  1. 合理利用浏览器文件缓存

main.js的加载，来看待这个问题
1. 首次加载  http请求 server正常返回
  1. 返回响应头加上强缓存说明
  2. expires: Sat, 18 Apr 2020 08:06:44 GMT (过期时间)
  3. Cache-Control: max-age=315360000 (http1.1,时间精准，优先级高)
  4. 两个header都是浏览器告诉后端，这个文件，多少时间内不过期(比如一个小时)
  5. 浏览器接收到上面两个header，就会文件存起来

2. 1个小时在请求这个文件
  1. 浏览器识别到强缓存命中，请求不发出，直接用本地的缓存文件，状态码是200 from cache

3. 两小时后，再次请求这个文件，强缓存失效，使用协商缓存
  1. 浏览器不会直接发出请求，而是查询后端，header带上请求头
    1. if-modified-since: 日期  后端小老弟，这个文件，在这个日子之后 有没有修改过
    2. 后端告诉你 没改过 请用缓存 响应码 304 modfile
    3. 浏览器直接用缓存
    4. 优先级更高的，是etag文件指纹，内容不变 指纹不变

4. 后端告诉过了，只能重新加载