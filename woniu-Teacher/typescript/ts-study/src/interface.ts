// 接口
const getUsername = (user: User) => {
  user.say = function(words: string) {
    return 'hello world'
  }
}


// 类型声明
interface User {
  name: string,
  age?: number,// 参数可能不存在加?
  readonly isMale: boolean// 只读属性 不可以被修改
   say:  Say // = (words: string) => string
}

interface Say {
  (words: string): string
}


interface Config {
  width?: number
  [propName: string]: any
}
function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}


// 1. 类型断言
// let mtsquare = CalculateAreas({width: 5} as Config)
// 2. 添加字符串索引签名
let mtsquare = CalculateAreas({width: 5})
// 3. 将字面量赋值给另一个变量
let options = {width: 5}
let mySquare = CalculateAreas({options})

// 继承接口
interface SupperUser {
  getGrade: () => void
}

interface VIPUsre extends User, SupperUser {
  broadcast: () => void
}