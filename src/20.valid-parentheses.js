/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30201
 *
 * [20] 有效的括号
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s0) {
  if (s0.length % 2) return false
  const st = []
  for (const i of s0) {
    if (i === '(') {
      st.push(')')
    } else if (i === '[') {
      st.push(']')
    } else if (i === '{') {
      st.push('}')
    } else if (st.pop() !== i) {
      return false
    }
  }
  return !st.length
};
module.exports = isValid
// @lc code=end



/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

 */

