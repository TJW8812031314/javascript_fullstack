let arr = [1, 2, 3 , 5, 7, 10, 11, 13, 15, 18, 20, 23]

// arr.forEach((val, index) => {
//   if(val === 20) {
//     console.log(index)
//   }
// })

function search(arr, item) {// O(log(n))
  let low = 0
  let heigth = arr.length -1
  let mid
  let element
  while (low <= heigth) {
    mid = Math.floor((low + heigth) / 2)
    element = arr[mid]
    if(element < item) {
      low = mid + 1
    }else if(element > item) {
      heigth = mid -1
    } else {
      return mid
    }
  }
}
console.log(arr, 20)