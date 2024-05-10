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
  if (s0.length < 2) {
    return false
  }
  const stack = []
  const s = s0
  const dic = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const startList = ['(', '[', '{']
  let i = 0
  while(i < s.length) {
    const w = s[i]
    if (startList.includes(w)) {
      stack.push(w)
    } else {
      const p = stack.pop()
      if (p !== dic[w]) {
        return false
      }
    }
    i++
  }
  return stack.length === 0
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

