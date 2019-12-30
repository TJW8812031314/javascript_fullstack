// 泛型
// const arr: Array<number | string> = [1, 2, 3, '4']

// 元祖
// let x: [number, string, boolean]
// x = [1, '1', true]


// 声明泛型变量 <T> 它用来捕获开发者传入的参数类型，我们就可以使用<T>做参数
// function returnItem<T>(para: T): T {// 不具有返回值的函数是viod类型
//   return para
// }

function swap<T, U>(tuple: [T, U]) {
  return [tuple[0], tuple[1]]
}
swap([7, 'seven'])


// 泛型变量
function getArrayLength<T>(arg: Array<T>) {
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T): T
}
const returnItem: ReturnItem<number> = parp => parp

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const app = new Stack()
// app.push('123')


// 泛型约束
type Params = number | string

class Stack<T extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const stack1 = new Stack<number>()
// const stack2 = new Stack<boolean>()


// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {// obj = {}
  return obj[key]
}

const a = {
  name: 'wn',
  id: 1
}
getValue(a, 'id')


// 使用多种类型进行泛型约束
interface FirstInterface {
  doSomthing(): number
}
interface SecondInterface {
  doSomithingElse(): string
}

interface childInterface extends FirstInterface, SecondInterface{

}

// class Demo<T extends childInterface> {
//   private generircProperty: T

//   useT () {
//     this.generircProperty.doSomthing()
//     this.generircProperty.doSomthingElse()
//   }
// }

// 泛型和 new
// {new(): T} 泛型可被构造
function factory<T>(type: {new(): T}): T {
  return new type()
}
