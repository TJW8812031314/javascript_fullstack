# 工厂模式
工厂模式定义一个创建对象的接口，这个接口由子类决定实例化哪一个类。该模式是一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型（抽象工厂）

用于创建对象的流程赋值的时候去

作用:
  1. 当对象的构建十分复杂的时候
  2. 需要依赖具体的环境创建不同的实例
  3. 处理大量就有相同属性的小对象


注意事项: 
  1. 不能滥用工厂，有的时候仅仅是给代码增加复杂度