# 网络安全
常见web攻击方式
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

    危害:
      1. 获取页面数据
      2. 获取Cookies
      3. 劫持前端逻辑
      4. 发送请求


 - CSRF


 - 点击劫持
    点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击网站通过iframe嵌套的方式嵌入自己打网页中，应将iframe设置为透明，在页面中投出一个按钮诱导用户点击

    防御:
      1. X-FRAME-OPTIONS  是HTTP响应头， 就是为了防御用ifname嵌套的点击劫持攻击


 - SQL注入
    1'or'1'='1
    SELECT *
    FROM test.user
    WHERE username = '${ctx.request.body.username}' 
    AND password = '1'or'1'='1'

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
    DDOS 不是一种攻击，而是一大类攻击的总称。它有几十种类型，新的攻击方法还在不断发明出来。网站运行的各个环节，都可以是攻击目标。只要把一个环节攻破，使得整个流程跑不起来，就达到了瘫痪服务的目的。

    防御: 
      1. 备份网站
      2. HTTP 请求的拦截
      3. 带宽扩容
      http://www.ruanyifeng.com/blog/2018/06/ddos.html

 防范方法
  - 密码安全 - 密码加固
  - 密码学 (对称与非对称)
  - 传输安全 - HTTPS
  - NOdeJS安全框架 hemelt
  - CSP策略

C:/javascript_fullstack/woniu-Teacher/network-security/test(1).sql