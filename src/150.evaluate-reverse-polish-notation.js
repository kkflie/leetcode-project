/*
 * @lc app=leetcode.cn id=150 lang=javascript
 * @lcpr version=30204
 *
 * [150] 逆波兰表达式求值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let i
    i = tokens.length - 1
  // i = tokens.length - 1
  //   if (isNumber(tokens, i)) {
  //     console.log('k')
  //     tokens.splice(i - 3, 3, calc(tokens, i))
  //   }
  while(tokens.length > 1 ) {
    if (isNumber(tokens, i)) {
      // console.log('k')
      tokens.splice(i - 2, 3, calc(tokens, i))
      i = tokens.length - 1
    } else {
      i --
    }
  }
  return tokens[0]
  function isNumber(tokens, i) {
    return !isNaN(tokens[i - 1]) && !isNaN(tokens[i - 2])
  }
  function calc(tokens, i) {
    const ope = tokens[i]
    const a = tokens[i - 2] - 0
    const b = tokens[i - 1] - 0
    // console.log('calc', a, b, ope)
    switch(ope) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        if (a * b < 0) {
          return 0 - Math.floor(Math.abs(a / b)) 
        }
        return Math.floor(Math.abs(a / b))
      default:
        return 0
    }
  }
};
// @lc code=end



/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */

