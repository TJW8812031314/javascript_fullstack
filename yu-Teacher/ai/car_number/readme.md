# 百度大脑 车型识别
 - npm install add baidu-aip-sdk
 - AI已成为水和电， 百度大脑
 - sbk
 - 海量数据， 构建好了训练模型
 给一张照片给模型， 分辨出来
 机器学习
 var ApiImaggClassifyClient = require('baidu-aip-sdk').imageClassify;// 图片分类
var fs = require('fs'); // 文件模块

var App_Id = "17798920";
var ApI_KEY = "d1nztBqAVIYMW0V0OBSDNxVk";
var SECRET_kEY = "DfMYXvEVi1Vx9wHk0825FngERPR4CxvA";
// 内存 -> I/O
// 图片加载后
var iamge = fs.readFileSync('car.jpg').toString("base64");// 同步
var client = new ApiImaggClassifyClient
console.log(image);