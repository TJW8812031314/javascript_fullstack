const fs = require('fs')
const http = require('http')
const path = require('path')


http.createServer((req, res) => {
  // 读取文件路径path.join()拼接成绝对路径
  const filePath = path.join(__dirname, req.url)
  // fs.redFile('./static/)
  // 判断是文件还是文件夹
  fs.stat(filePath, (err, stats) => {
    if(err) {
      res.statusCode = 404;
      res.end(`${filePath}: 404`)
      return 
    }
    // 如果是文件
    if (stats.isFile()) {
      res.statusCode = 200;
      fs.createReadStream(filePath).pipe(res)
      // 如果是文件夹全部读出来
    } else if(stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        let filesLink = files.map(file => {
          // 点击以一个a标签链接
          // /static css js
          // /static/css
          return `
          <a href="${
            req.url === '/' 
            ? '' : 
            req.url + '/'}${file}">${file}</a>
          <br/>`
        }).join('')
        // join('|')自定义拼接
        res.end(filesLink)
        // res.end(files.join('|'))
      })
    }
  })
})
.listen(9999, () => {
  console.log('http://localhost:9999')
})