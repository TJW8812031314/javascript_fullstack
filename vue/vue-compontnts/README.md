# vue-compontnts

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

## provide  inject
缺点：
1. 数据查询不方便
2. 数据不具有响应式
## input 框失焦
form文件夹
## 手写全局loading
plugin文件夹
## 动态渲染vue模板
display文件夹
```js
const sum = new Function ('a', 'b', 'return a + b')
sum 
(function anonymous(a,b) {
return a + b
})