const subPub = {
  'price': [],
  'paraer': []
}
// price  对应的方法执行一遍

for(let i = 0; i < subPub.price.length; i ++ ) {
  console.log('---', subPub.price[i])
  subPub.price[i]();// 运行
}


function foo() {
  console.log('foo');

}
// foo:(foo)
// 在 subPub 上面添加一个vaule为数组的 key (foo)
// 把foo 放到数组去
subPub.foo = [foo];// 
console.log(subPub);
class Event {
  constructor() {
    this.listener = [];
  }
  on(key, fn) {
    if(!this.listener[key]){
      this.listener[key] = [];
    }else{
    // 加[]代表price所带的值
    // this.listener.push(fn)
    // 如果没有新加一个类别， 如果有就push
    this.listener[key].push(fn);
    }
  }
  emit(key) {
    // 执行数组用 for of
    // console.log(this.listener)
    // for(let fn of this.listener) {
    //   fn()// 通知它
    // }
    for(let i = 0 ; i < this.listener[key]; i ++ ) {
      console.log(this.listener.key[i])
      this.listener.key[i]();// 运行
    }
  }
}
const ev = new Event();
ev.on('abc', () => { console.log(1) });
ev.on('abc', () => { console.log(2) });
ev.emit('abc'); // 执行的