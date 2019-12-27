// // 抽象类  抽象类无法被实例化
// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log('roaming this earch...')
//   }
// }
// // const animal = new Animal()// 抽象类无法被实例化
// class Cat extends Animal {
//   makeSound() {
//     console.log('maio maio')
//   }
// }


// const cat = new Cat()
// cat.makeSound()


// 访问限定符
class Cat {
  public run() {
    console.log('跑起来了...')
  }
  // private 私有属性 只能在类Cat中访问
  private eat() {
    console.log('吃起来。。。')
  }
  // 保护 属性“sleep”受保护，只能在类“Cat”及其子类中访问
  protected sleep() {
    console.log('睡觉吧。。。')
  }
}

class GTR extends Cat {
  init() {
    this.run()
    // this.sleep()//只能在类“Cat”及其子类中访问
  }
}

// const cat = new Cat()
// cat.run()

// const car = new Cat()
// car.run()
// const car = new GTR()
// car.init()


// class 可以作为接口
// export default class  Props {
//   public children: Array<React.ReactElenemt<any>>
// }
