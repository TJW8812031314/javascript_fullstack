arr = [1, 3, 5, 6]

function oo () {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    for(let j = 0; j < arr.length - 1; j++) {
      console.log(arr[j])
    }
  }
}
oo(arr)