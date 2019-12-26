// ts中的原始数据类型
const isLoading: boolean = false
const decliteral: number = 6
const hexLiteral: number = 0xf00d

const book: string = "深入浅出 Typescript"

// void 空类型
function use(): void {
  console.log('wn')
}
const a: void = undefined
// const b: void = null

let u: undefined = undefined
let n: null = null

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
Symbol('key1') === Symbol('key1')// false

// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// // max2 === max1 // true

// BigInt 大数整型
// const max = BigInt(Number.MAX_SAFE_INTEGER)
// const max1 = max + 1
// const max2 = max + 2
// // max2 === max1 // false
