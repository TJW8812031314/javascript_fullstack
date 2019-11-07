## 
浏览器收到html 解析为 DOM
遇到css 解析为 cssom
把 dom cssom 合在一起 生成一颗 渲染树
根据 样式计算位置 开始渲染 布局

domContentlodaed 就是 html 解析完之后发生的

其中有一些标签 img link script 会 引入外部资源， 会在解析完html之后，开始请求资源