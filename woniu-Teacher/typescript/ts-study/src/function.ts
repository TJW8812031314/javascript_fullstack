//1.  const add = (a: number, b: number) => {
//   return a + b
// }

// const add = (a: number, b = 10): number => a + (b ? b : 0)// 相当于1

// const add = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)

// 重载
interface Directory {
  top: number
  right: number
  bottom: number
  left: number
}
function assigned(all: number): Directory
function assigned(topAndBottom: number, leftAndRight: number): Directory
function assigned(left: number, bottom: number, right: number, top: number): Directory

function assigned(a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if(c === undefined && d === undefined){
    c = a,
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}
assigned(1)
assigned(1, 2)
// assigned(1, 2, 3)
assigned(1, 2, 3, 4)

