## js异步
解决异步方法
1. callback回调
  函数嵌套
  cb()回调 通知外面

2. promise(resolve())
  要一直.then
  resolve() 通知外面成功

3. async await方法
  async function run() {
    await step1();
    await step2();
  }
  run();