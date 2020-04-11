# 如何自己编写loader
loader 就是一个函数，声明式函数，不能使用箭头函数，拿到代码做进一步的修饰，再返回处理后的源码就可以了

- loader-utils 异步

# 如何自己手写一个 Plugins
plugin：开始打包，在某一时刻，帮我们处理一些什么事情的机制
设计模式：
  事件驱动
  发布订阅
plugin是一个类，包含一个apply函数，接收一个参数，compiler

# webpack 编译原理
