arr = [3, 44, 13, 1, 8, 9, 7, 1, 2]

// 排序
//arr.sort((a, b) => a - b)
// arr.sort()

// 抛开语言， 原始的能力，只有按照索引找元素，交换元素位置，对比大小

// 冒泡排序 个子搞到矮依次排序
// 依次对比， 如果你的个子比右边高，和他交换位置

// 冒泡的复杂度是多少o[n^2]
// function bubleSort(arr) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     console.log(j)
//     for (let i = 0; i < arr.length - 1 - j; i++) {// o[n^2/2]
//       console.log(i)
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//       }
//     }
//   }
//   console.log(arr)
// }
// bubleSort(arr)


// 快排
// 排队的时候，随便找个人 ，遍历一次 比他瘦的站左边，否则右边
let arr1 =  [3, 44, 13, 8, 9, 7, 1, 2]

function quickSort(arr) {
  if (arr.length < 1) {
    // 队列只有一个人，或者空，是没有必要排序的
    return arr
  }
  let flag = arr[0]
  let right = []
  let left = []
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    }else {
      left.push(arr[i])
    }
  }
  // 递归
  return quickSort(left).concat([flag]).concat(quickSort(right))
  // return [...left, flag, ...right]
}
// 空间占用太多
console.log(quickSort(arr1))


let arr2 =  [3, 44, 13, 8, 9, 7, 1, 2]

function quickSort2(arr) {
  // 原地快排
  if (arr.length < 1) {
    return arr
  }
  let flag = arr[0]
  let i = 1
  let j = [arr.length - 1]
  while (i < j) {
    while(arr[j] >= flag && i < j) {
      j--
    }
    while(arr[i] <= flag && i < j) {
      i++
    }
    // 右边找到一个比falg小的，左边找到一个比他大的
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  // flag交换正确的位置上
  let temp = arr[0]
  arr[0] = ar[j]
  arr[j] = temp
  return quickSort2(left).concat([flag]).concat(quickSort2(right))
}
console.log(quickSort2(arr2))