const getUserInfo = function(user: {name: string, age: number}) {
  return `name: ${user.name}, age: ${user.age}`
}

getUserInfo({name: 'Tom', age: 18})
// getUserInfo()
// getUserInfo({name: 'Tom'})
