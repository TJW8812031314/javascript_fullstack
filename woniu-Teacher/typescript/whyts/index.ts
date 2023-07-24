/**
 * @description count string size
 */

export function foo(name: string) {
  const separator = ','
  return name.split(separator)
}

foo('string')

// when泛型

// function bar(arg: number | string):number | string {
//   return arg
// }

// function bar<T>(arg: T):T {
//   return arg
// }


// 类型定义
export type fooItem = string | number | null

function baz(arg: fooItem):void {
  console.log(arg)
}

export interface useRes {
  nickname: string,
  avatar: string,
  age: number
}