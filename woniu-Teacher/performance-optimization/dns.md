# DNS  预加载
  <link rel="dns-prefetach" href='//img.baisu.com'/>
1. 查看dns缓存
2. 本地没缓存，发起dns请求，向本地备注的DNS服务器发送请求 (递归)


优化策略: 
  1. 长链接
  2. 减少文件体积
    1. js打包压缩
    2. 图片压缩
    3. gzip
  3. 减少文件请求次数
    1. 雪碧图
    2. js, css  打包
    3. 缓存机制
    4. 懒加载
  4. 减小用户和服务器的距离
    1. cdn (分发网络)
  5. 本地存储