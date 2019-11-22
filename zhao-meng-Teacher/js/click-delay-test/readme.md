## 点击延迟手机端
- 顺序
touchStart
touchMove
touchEnd
// 300ms
click
- 方法
1. 干掉默认事件，手动把click提前
  e.preventDefault();
  document.getElementById('clickMe').click();
2. 干掉默认事件，创建一个自定义事件(优点: 细节更容易把握)
    e.preventDefault();
    let event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true)
    document.getElementById('clickMe').dispatchEvent(event);