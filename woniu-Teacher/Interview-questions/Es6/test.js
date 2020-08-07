function test() {
  console.log(arguments)

  // console.log(Array.prototype.shift.call(arguments))
  let newArguments = []
  for(let key in arguments) {
    console.log(key)
    newArguments.push(arguments[key])
  }
  // console.log([].shift.call(arguments))
}
test(5, 20, 34, 2)