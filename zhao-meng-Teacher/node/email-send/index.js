const http = require('http');
// 响应模块
const fs = require('fs');
const urlModule = require('url');
const nodemailer = require('nodemailer')

// 当访问 register 展示 一个 注册html
// 当注册成功后 展示 一个 成功 html
http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  // 解析url
  const urlObj = urlModule.parse(url);
  console.log('url', url)
  if (url === '/register' && method === 'GET'){
    // req res 两个对象 继承了 流steam 和事件 Event
    res.writeHead(200, {
      'Content-Type': 'text/html;utf8'
    })
    fs.createReadStream('./register.html').pipe(res)
  }else if (urlObj.pathname === '/sendEmail' && method === 'GET') {
    const emailQs = urlObj.query;
    console.log('emailQs',emailQs)
    const email = emailQs.split('=')[1]
    //
    const transport = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '1362368453@qq.com',
        pass: 'ichfvkkrdmljhjef'
      }
    })
    transport.sendMail({
      to: email,
      html: `<h2>${code}</h2>`,
      from: '1362368453@qq.com',
      subject: `我的验证码`
    },(err,info) => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    console.log('err', err)
    if (err) {
      console.log(err)
      res.end(JSON.stringify({
        code: 500,
        email
      }))
    }
    else{
      console.log(info)
      res.end(JSON.stringify({
        code: 200,
        email
      }))
    }
  })

  }
  // else if(urlObj.pathname === '/register1' && method==='POST'){
  //   let data;
  //   console.log('successs')
  //   req.on('data', (c) => {
  //     data += c;
  //   })
  //   req.on('end', () => {
  //     console.log('data', data);
  //     res.end(data);
  //   })
  // }
  else{
    // res.writeHead(200,{
    //   'Content-Type': 'text/html;;charset=UTF8'
    // })
    res.end('访问出错')
  }
})
.listen(3344, () => {
  console.log('server is running http://localhost:3344')
})
