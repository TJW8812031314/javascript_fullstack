const fs = require('fs');
fs.readFile('./index.html', (err, data) =>{
  // data 读完放入内存
  fs.writeFile('./index-copy.html', data,(err, res) => {
    if(!err) {
      console.log('writed!!!');
    }
  })
})
// stream
// 100G 读一点 写一点不是一次性  createReadStream读取， WriteStream写入
fs.createReadStream('./music2.js')// 读取数据
.pipe(
  fs.WriteStream('./music2-copy.js')
)