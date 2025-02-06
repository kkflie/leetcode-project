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
  if (tokens.length < 3) return +tokens.pop()
  function isNumber(c) {
    return !isNaN(+c)
  }

  function calc(a, b, operator) {
    switch (operator) {
      case '+':
        return +a + +b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return +((a / b).toString().split('.')[0])
    }
  }

  const st = []
  for (const token of tokens) {
    if (isNumber(token)) {
      st.push(token)
    } else {
      const b = st.pop()
      const a = st.pop()
      const res = calc(a, b, token)
      // console.log('res', res)
      st.push(res)
    }
  }
  return st.pop()
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

