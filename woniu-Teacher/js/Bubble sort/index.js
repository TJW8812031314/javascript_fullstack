// 5 4 3 2 1
// 4 3 2 1 5   1  4次 arr.length-1
// 3 2 1 4 5   2  3次 arr.length-1-1
// 2 1 3 4 5   3  2次 arr.length-1-2
// 1 2 3 4 5   4  1次 arr.length-1-3
var test = [5, 4, 3, 2, 1]
function mpFun(arr) {
  // 轮数
  for (let i = 0; i < arr.length-1; i++) {
    // 次数
    for (let j = 0; i < arr.length-1-i; i++) {
      if (arr[j] > arr[j+1]) {
      // 借助第三个变量进行交互
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j + 1] = temp
      }
    }s
  }
  return arr
}
console.log(mpFun(test))