- 基本的结构套路
  #app>.page
- * css 解析也是要花时间的 * 费时
- 浏览器有认识
  -webkit  Google浏览器内核 手机端多以为主
  -ms PC端  windows操作系统   内核是微软的
  text-size-adjust：100%
   加前缀的方法  -webkit
- 自适应  rem  em  px靠不住
    weui  em
    100px 京东喜欢用这种
    16px   .16rem
- css 考点
  =webkit-text-size-adjust：100%;
  -webkit-tap-hightlight-color:transparent;
  - oo css 
  .quick-login .quick-type
  stylus 嵌套
  容易冲突
  .quick-type
  模块化概念， 命名空间

  - base64
    更小 任何一张图片都是编码
    传输更快，完全在css中， 不需要发送HTTP请求 性能开销的核心
    HTTP的请求书应该减少


      /* 不要调整页面大小 */
    -ms-text-size-adjust: 100%;
    /* 浏览器前缀 */
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
    /*只能竖向滚动*/
    -webkit-overflow-scrolling: touch;
    /*让滚动更顺滑*/
    width: 100%;
    overflow-x: hidden;
  
