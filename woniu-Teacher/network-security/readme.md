# 网络安全
# 常见web攻击方式
 - XSS
    Cross-Site Scripting (跨站脚本攻击，因为缩写和css重叠所以叫XSS，跨站脚本攻击是指通过存在安全漏洞的web网站注册用户的浏览器内运行非法的非本站的HTML标签或JavaScript进行的一种攻击)

    跨站脚本攻击有可能造成以下影响:
      1. 利用虚假输入表单骗取用户信息
      2. 利用脚本窃取用户的Cookies值，被害者不知情的情况下下，帮助攻击者发送恶意请求
      3. 显示伪造的文章或图片

      - 反射性
        1. 普通 http://localhost:3000/?from=chain
        2. alert  尝试 http://localhost:3000/?from=<script>alert(1)</script>
        3. 获取cookie
        4. 短域名伪造

      - 存储型 - 存储到DB后读取注入
        1. <srcipt>alert(1)</script>
        2. <srcipt src="http:localhost:4000/hack.js"></script>

    危害:
      1. 获取页面数据
      2. 获取Cookies
      3. 劫持前端逻辑
      4. 发送请求
      5. 偷取网站的任意数据
      6. 偷取用户资料
      7. 偷取用户秘密和登录状态
      8. 欺骗用户

    防范手段
      1. ejs转义小知识
        - <% code %> 用于执行其中的js代码
        - <% =code %> 会对code进行html转义
        - <% -code %> 不会转义
      2. ctx.set('X-XSS-Protection', 0) 禁止XSS过滤

      3. CSP -内容安全策略  本质就是建立白名单，开发者告诉浏览器哪些外部资源是可以加载的。我们只要做一些配置规则，如何拦截是浏览器的事。
      (Content-Security-Policy: default-src 'self') 只允许加载本站资源
      (Content-Security-Policy: img-src https://* ) 只允许加载https协议图片
      (Content-Security-Policy: child-src 'none') 不允许加载任何资源
      4. 黑名单转义
      function escape(str){
        str = str.replace(/&/g, '&amp')
        str = str.repalce(/</g, '&lt')
        str = str.repalce(/>/g, '&gt')
        str = str.repalce(/"/g, '&quot')
        str = str.repalce(/'/g, '&#39')
        str = str.repalce(/`/g, '&#96')
        str = str.repalce(/\//g, '&#x2f')
      }
      5. 白名单转义
        const xss = require('xss')
        const html = xss('<h1>XSS demo</h1><script>alert(123)</script>')
      6. httpOnly
        值为true时，不允许传cookie， 为false时，允许传cookie

 - CSRF
     - CSRF(Corss-Site Request Forgery)
    1. 跨站请求伪造，是一种常见的Web攻击，它利用用户已经登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。

    2. 危害
      - 利用用户登录状态
      - 用户不知情
      - 完成业务请求
      - 盗取用户资金(转账、消费)
      - 冒充用户发帖背锅
      - 损害网站名誉

    3. 防御
      1. 禁止第三方网站带Cookie-有兼容性问题
      2. Referer Check - Https 不发送referer
      3. 验证码

 - 点击劫持
    点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击网站通过iframe嵌套的方式嵌入自己打网页中，应将iframe设置为透明，在页面中投出一个按钮诱导用户点击；

    防御:
      1. X-FRAME-OPTIONS  是HTTP响应头， 就是为了防御用ifname嵌套的点击劫持攻击
      2. DENY : 页面不允许通过iframe凡是展示
      3. SAMEORIGIN 页面可以在相同域名下通过iframe方式展示
      4. ALLOW-FROM 页面可以在指定来源的iframe中展示


 - SQL注入
    1'or'1'='1
    SELECT *
    FROM test.user
    WHERE username = '${ctx.request.body.username}' 
    AND password = AND password = '${ctx.request.body.password}'

    防御:
      1. 所有的查询语句建议使用数据库提供的参数化接口，参数化语句使用参数而不是将用户输入的变量嵌入到SQL语句中
      2. 对进入数据库的特殊字符 (', ", \, <, >, &, ;) 等进行转义处理escapeHtmlChar.js


 - OS命令注入
    OS命令注入和SQL注入差不多，只不过SQL注入是针对数据，SQ是针对操作系统

    例如: 以node.js为例
    const exec = require('mz/child_process).exec
    let params = {<!--用户输入的参数 -->}
    exec(`git clone ${params.repo})/some/path`

    <!-- 坏人 -->
    http://github.com/xx/xx.git && rm -rf /* &&

    防范: 对进入同上


 - 请求劫持
    DNS劫持

      DNS服务器 (DNS解析各个步骤) 被篡改，修改域名解析的结构，使得访问的不是预期的IP

    HTTP劫持
      运营商劫持
      应用层 HTTP Flood 此攻击类似于在多个不同的计算机反复按web浏览器刷新
      常见攻击方式: <!--钉钉白板.png >



 - DDOS (distributed denial of service)
    - [阮一峰DDOS](http://www.ruanyifeng.com/blog/2018/06/ddos.html)
    DDOS 不是一种攻击，而是一大类攻击的总称。它有几十种类型，新的攻击方法还在不断发明出来。网站运行的各个环节，都可以是攻击目标。只要把一个环节攻破，使得整个流程跑不起来，就达到了瘫痪服务的目的。

    防御: 
      1. 备份网站
      2. HTTP 请求的拦截
          HTTP 请求的特征一般有两种：IP 地址和 User Agent 字段。比如，恶意请求都是从某个 IP 段发出的，那么把这个 IP 段封掉就行了。或者，它们的 User Agent 字段有特征（包含某个特定的词语），那就把带有这个词语的请求拦截。
          - 专用硬件
          - 本机防火墙
          - Web 服务器
      3. 带宽扩容
      http://www.ruanyifeng.com/blog/2018/06/ddos.html

 # 防范方法
    - 密码安全 - 密码加固
        1. 提示用户密码复杂度不够
        2. 密码加盐

    - 人机识别

    - 密码学 (对称与非对称)
        摘要  -md5 shal sha256 -hash
        对称
          DES

        非对称
          产生一对秘钥
          公钥负责加密
          私钥负责解密

    - 传输安全 - HTTPS
    - NOdeJS安全框架 hemelt
    - CSP策略

C:/javascript_fullstack/woniu-Teacher/network-security/test(1).sql