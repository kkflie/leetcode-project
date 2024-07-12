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
  const n = tokens.length
  const st = []
  for (let i = 0; i < n; i++) {
    if (!isNaN(tokens[i])) {
      // 是数字
      st.push(tokens[i])
    } else {
      const y = st.pop() - 0
      const x = st.pop() - 0
      switch (tokens[i]) {
        case '+' :
          st.push(x + y)
          break
        case '-' :
          st.push(x - y)
          break
        case '*' :
          st.push(x * y)
          break
        case '/' :
          const flag = x * y > 0
          let res = Math.floor(Math.abs(x / y))
          res = flag ? res : 0 - res
          st.push(res)
          break
      }
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

