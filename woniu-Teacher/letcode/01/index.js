arr = [13, 1, 2, 5, 3, 8, 11]
sum = 18

// 时间复杂度是指计算量
// function findSum(arr, sum) {
//   let x = 0
//   // 暴力破解法0[n^2]量级
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] + arr[j] === sum) {
//         console.log(i, j, arr[i], arr[j])
//       }
//       x++
//     }
//   }
// }
// console.log(x)


// 遍历的时候，我们就知道缺啥
function findSum(arr, sum) {
  let obj = {}
  // 只遍历一遍 0[n]
  //{5: 0} {17: 1} {16: 2}
  arr.forEach((v, i) => {

    obj[sum - v] = i
    console.log(obj)
    if (String(v) in obj) {
      console.log(obj[v], i)
    }
  })
}
findSum(arr, sum)