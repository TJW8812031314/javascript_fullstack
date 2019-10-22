# this作用域被谁调用就指向谁
this 没有被调用则指向window
# 修改this作用域方法  （显示绑定）
- .call(要调用的作用域, 需要添加的)方法
- .apply(要调用的作用域,[]) 要以数组方式传参  .apply(null)//默认指向window
- .bind  调用返回一个函数 需要从新被调用
    var c = b.bind(a)
    c()  
# new 绑定法 
//创建一个空对象
//执行[[prototype]]链接 _proto_
//让this指向新对象