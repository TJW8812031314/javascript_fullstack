# vue-notification

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 弹窗类
面向对象有一个好处 达到代码复用
- 全局的
耗费内存，new一次生成一份dom结构
- 单例的
优点：无论new调用多少次只生成一份dom结构只是修改其中的值
