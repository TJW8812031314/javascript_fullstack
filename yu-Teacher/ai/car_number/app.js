var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify; //图片分类
var fs = require('fs'); //文件模块
var API_ID = "17798920";
var API_KEY = "d1nztBqAVIYMW0V0OBSDNxVk";
var SECRET_KEY = "DfMYXvEVi1Vx9wHk0825FngERPR4CxvA";
// 内存  -> I/O
var image = fs.readFileSync('car.jpg').toString("base64"); //同步

var client = new AipImageClassifyClient(API_ID, API_KEY, SECRET_KEY)
client.carDetect(image)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(result) {
    console.log(result)
  })
console.log(image);
