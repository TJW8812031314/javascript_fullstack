# vue
- v-if  v-else  用true和false 的值来表示 两者只展示一个dom结构，另外一个是不加载的
- v-show = false 只是将这个dom结构的css的style属性 display:none 
- v-html = xxx  能够解析html文件       v-text 只能够显示文本
- v-model 双向数据绑定

v-on: ===  @  表示监听事件  v-on:click===@click  = " xxx" 绑定点击事件

- v-bind:class = "isActive ? a:b  用来判断添加绑定类名
        :class = "isActive? a:b" 用来判断添加类名(可以不添v-bind)
- :class="[classA,classB]"    将classA 和classB在data里面定义 就可以直接添加类名classA和classB的value
- :class="{good: className}"  在className在  data 里面定义布尔值,就可以判断是否添加类名'good'
# watch  用来检测某一个值发生变化
