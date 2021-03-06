function longsetValidParentheses(s) {
  // 时间复杂度O(n)
  var max = 0; // 最大长度初始值为0
  if(s.length == 0 || s.length == 1) return max
    // 下标减法就是长度
    var stack = [-1];// 栈来服务有效括号匹配 刚开始匹配的
    for (var i = 0; i < s.length; i++) {// 下标法， 只要一次遍历，时间复杂度O(n)
      if (s[i] == '(' ) {
        stack.push(i); // i就是下标
      } else {
        stack.pop();// 右括号， 下标出线
        if (stack.length < 1) {
          stack.push(i);// 栈顶元素都没有了，前面的有效匹配结束后面的开始， 那就要减去当前下标(-1), 所以push当前的下标

        } else {
          max = Math.max(max, i - stack[stack.length - 1])// 有效括号匹配
        }
      }
    }
    return max;
}
console.log(longsetValidParentheses('(())()'))