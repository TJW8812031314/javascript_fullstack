// es6新特性
var distrbuteCandies = function (candies) {
  var count = 0; //总类数 unique
  let obj = {};
candies.forEach(function(item) {
  // 如果出现过
  if (!obj[item]) {
    obj[item] = 1;// 出现过
    count++;// 加上种类数
  }
})
// 糖果的种类数
return count >= (candies.length /2) ? (candies.length >> 1) : count
}
console.log(distrbuteCandies([1,1,2,2,3,3]));