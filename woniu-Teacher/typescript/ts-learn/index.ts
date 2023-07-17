// function greet(person: string) {
//   return 'Hello,' + person
// }

// console.log(greet('Typescript'));

// let isDone: boolean = false

// let count: number = 10

// let person: string = 'MrHuang'

// let sym = Symbol('hello')

// console.log(typeof sym);

// const sym = Symbol()

// let obj = {
//   [sym]: 'Hello'
// }

// console.log(obj[sym]);

// 数组
// let list: number[] = [1, 2, 3]
// list.push('4')

// let list: Array<number> = [1, 2, 3] // 泛型定义

// 元组 Tuple
// let tupletype: [string, boolean] = ['hello', true]
// let tupletype: any = ['hello', true]
// tupletype = 123


// Enum 类型 数字枚举(双向映射) 字符窜枚举
// enum Direction {
//   // NORTH = 'NORTH',
//   // SOUTH = 'SOUTH',
//   // EAST = 'EAST',
//   // WEST = 'WEST'
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST
// }

// let dir: Direction = Direction.NORTH
// let dirName = Direction[0]
// console.log(dirName)
// console.log(Direction.WEST)

// 常量枚举
// const enum Direction {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST
// }

// let dir: Direction = Direction.NORTH

// 异构枚举
// enum Enum{
//   A, 
//   B,
//   C = 'C',
//   D = 'D',
//   E = 8,
//   F
// }
// console.log(Enum.A);
// // let AA: Enum = Enum.A
// // console.log(Enum[AA])
// console.log(Enum.D)


// any
// let notSure: any = 666
// notSure = 'hello'
// notSure = false
// notSure.trim()
// new notSure()
// let anyTest: string = 'hello'
// anyTest = notSure


// unknown
// let value: unknown;
// value = true
// value = 42
// value = 'hello'
// value = []
// value = {}
// value = null
// value = undefined
// value  = new TypeError()
// value = Symbol('type')

// let value1: unknown = value
// let value2: any = value

// let value3: boolean = value
// let value4: number = value
// let value5: string = value
// let value6: symbol = value

// viod
function warnUser(): void {
  console.log(123);
}
// let unusable: void = undefined //  null


// null undefined
// let u: undefined = undefined
// let n: null = null

// object
interface Obj {
  name: string,
  age: number,
  link?: string
}

let person: Obj = {
  name: 'MrChen',
  age: 19,
  link: 'running'
}

function test(data: Obj) {
  console.log(data)
}

test({name: 'wn', age: 20})




