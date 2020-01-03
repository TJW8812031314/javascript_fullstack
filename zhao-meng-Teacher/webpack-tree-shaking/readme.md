## trre-shaking
剔除无用代码

条件
1. 导入导出 必须使用 es module (import export)小心第三方模块导出 commonjs

## mode
development
production
webpack 根据两个模式，内置了一些默认的配置
production: 自动开启 tree-shaking 功能

## es module & commonjs
es module: 在 js 编译的时候，就知道 引入了那些模块, 不能出现任何逻辑判断里面 静态引入
注: es(6+) import() 支持了动态引入 静态引入

commonjs: 只有在 js 执行的时候才知道 引入了那些模块
动态引入

