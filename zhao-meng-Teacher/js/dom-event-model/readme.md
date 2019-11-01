## 事件模型
捕获
冒泡
三个阶段: 捕获阶段  目标阶段  冒泡阶段
addEventListener
第三个参数： 默认为 false冒泡阶段    ture捕获阶段
浏览器默认false 呈现 冒泡阶段从点击 子容器开始 从子容器向父容器冒泡
## 请用 DOM 级别的事件
DOM0 onclick  只能绑定一个事件，再次绑定会发生覆盖
DOM0 add
DOM0 add  增加了很多 键盘 鼠标事件
