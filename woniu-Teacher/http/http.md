# HTTP 协议 （HyperText Transfer Protocol，超文本传输协议）
概念: HTTP是一个基于TCP/IP通信协议来传输 (超文本) 数据

      - HTTP是一个基于TCP/IP协议来定位传输数据
      - 同时在TCP/IP包基础上对要传输的数据进行再次包装
      - HTTP 是单向单链接，无状态协议

http: 传输 ht (超文本) 这样的文本规则

http://ietf.org (官网)

# HTTP  规定
- 规定了请求发送的数据格式
    Request 消息分三部分:
      - Request Line: 请求行 
        (包含: Method, Path-to-resoure (请求资源) )

      - Request header: 请求头
      - Request body: 请求正文

-  规定了返回的数据格式
- 传输的规则

http是一个简单的请求-响应协议，它通常运行在TCP之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。请求和响应消息的头以ASCII码形式给出；而消息内容则具有一个类似MIME的格式。这个简单模型是早期Web成功的有功之臣，因为它使得开发和部署是那么的直截了当

# url (Uniform Resource Locator,统一资源定位符) 资源在网络的位置
  URL由三部分组成：资源类型、存放资源的主机域名、资源文件名。
  也可认为由4部分组成：协议、主机、端口、路径
  URL的一般语法格式为：
  (带方括号[]的为可选项, #hash拼接)：
  protocol :// hostname[:port] / path / [;parameters][?query]#fragment

# HTTP  —  node.js