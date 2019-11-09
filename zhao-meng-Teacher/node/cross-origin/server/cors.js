const http = require('http')

http.createServer((req,res) => {
  console.log(req.url, req.method);
  res.writeHead(200,{
    // 允许的方法
    'content-type':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Contorl-Allow-Haeders': 'x-auth, content-type',
    'Access-Contorl-Allow-Mathods': 'GET,PUT,DELETE,OPTIONS',
    'Access-Contorl-Allow-Credentials': true
  })
  // 允许 cookie 传输的
  // res.end(JSON.stringify({
  //   bookName: 'php'
  // }))
  res.end(`
    getBook(${JSON.stringify({bookName: 'php'})})
  `)
})
.listen(3000,()=>{
  console.log('server is running')
})