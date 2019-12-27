// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
// console.log(Direction.Up)// 0
// console.log(Direction['Down'])// Down

// 异构枚举
// enum yg {
//   No = 0,
//   Yes = 'Yes'
// }

// //反向映射 key <=> value
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// var obj = {
//   name: 'wn'
// }
// obj['name']
// console.log(Direction[Direction['Up']])// Up
// console.log(Direction.Up)// 0

// 联合枚举  枚举可以当做其他变量的类型
enum Direction {
  Up,
  Down,
  Left,
  Right
}
// const aaa: number = 0
// console.log(aaa === Direction['Up'])//true
// type c = 0// c的类型为0
// declare let bbb: c
// bbb = Direction.Up // ok

// enum Animal {
//   Dog,
//   Cat
// }
// aaa = Direction.Up
// aaa = Animal.Dog

// 枚举名相同自动拼接