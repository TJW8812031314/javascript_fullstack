var AipOcrClient = require('baidu-aip-sdk').ocr;// 图片识别？ 从图片中提取文字
var fs = require('fs')
var image = fs.readFileSync('./car2.jpg').toString('base64');// 文件本身就是二进制
var API_ID = "17799076";
var API_KEY = "g9T3bLGewcbO3AZm6NRW9hXG";
var SECRET_KEY = "ep9MVVkKBXwOpjWscYe30ucCTmPHjV54";
var client = new AipOcrClient(API_ID, API_KEY, SECRET_KEY);
var options = {};
client.licensePlate(image, options)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  })