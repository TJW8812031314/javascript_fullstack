## 布局 效果 合成
html(string) 解析 dom树
css 解析 为 cssom
合成 render tree
生成 Layout tree
绘制 paint
composite 合成：一个页面有很多分层，最终合成一个平面


## 性能优化
js reLayout repaint composite

改变了 元素的布局：width，heigth, display (重排)layout ->
改变了元素的 color，shadow (重绘) repaint->
重排一定引起重绘，重绘不一定引起重排
composite: transform opactiy 前提条件：变化的元素要处于 一个 独立的 '层'上面
影响的是：当前处于的一个 '层'

提升层：
1. will-change
2. 3d transform: `translate3d(60px, 0, 0)`
3. animation transtion 激活的时候
4. video
5. backface-visiblity:hidden；

left top
transform