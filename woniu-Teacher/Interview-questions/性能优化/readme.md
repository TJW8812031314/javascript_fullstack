# 图片优化
对于 100 * 100 的图片来说，图片上右10000个像素，如果每个像素的值有多个RGBA储存的话，那么也就是说每个像素有4个通道，每个通道1个字节 （8位 = 1个字节），所以该图片的大小为 39k （10000 * 4 / 1024)

1. 减少像素点 (没必要用高清图的地方尽量不用)
2. 减少每个像素点能够显示的颜色

# 图片加载优化
  1. 能用css的地方就不用图片
  2. 对于移动端来说，屏幕宽度就那么点完全没有必要去加载原图
  3. 小图使用base64
  4. 雪碧图
  5. 正确选择图片格式:
        能显示WebP格式的浏览器尽量用WebPe格式
        小图使用png，也可以使用SVG
        

# DNS 预解析
DNS解析也是需要时间的，可以通过预解析的方式来预先获取域名所对应的IP
<link rel="dns-prefetch" herf="https://www.baidu.com">


# 预加载
  在开发，中有时候会遇到某些资源可能不需要马上用到，但是希望尽快加载
  预加载其实是申明式的fetach，强制浏览器请求资源
  <link rel="preload" her="https://example.com">
  缺点: 兼容性不好

# 预渲染
  可以通过预渲染将下载好的文件预先在后台渲染
  <link rel="dns-prefetch" herf="https://www.baidu.com">
  缺点: 必须要确保用户会在之后再打开页面，否则预渲染就浪费了


# 防抖
debounce.js



# 节流
throttle.js
