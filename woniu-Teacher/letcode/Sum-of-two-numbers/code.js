let arr = [13, 1, 2, 5, 3, 8, 11]
let sum = 18

function findSum(arr, sum) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[i] === sum) {
        console.log(i, j, arr[1], arr[j])
      }
    } 
  }

  // let obj = {
  //   // 5: 0,
  //   // 17: 1,
  //   // 16: 2,
  //   // 13: 3
  // }
  // arr.forEach((v, i) => {
  //   if(String(v) in obj) {
  //     console.log('找到了'+ obj[v], i)
  //   }
  //   obj[sum - v] = i
  // });
}
findSum(arr, sum)
