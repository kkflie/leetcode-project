/*
 * @lc app=leetcode.cn id=224 lang=javascript
 * @lcpr version=
 *
 * [224] 基本计算器
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const n = s.length
  const st = []
  let i = 0
  let res = 0
  let sign = 1
  while (i < n) {
    const c = s[i]
    if (c === ' ') {
      i++
    } else if (c === '+') {
      sign = 1
      i++
    } else if (c === '-') {
      sign = -1
      i++
    } else if (c === '(') {
      st.push(res)
      st.push(sign)
      res= 0
      sign = 1
      i++
    } else if (c === ')') {
      res *= st.pop()
      res += st.pop()
      i++
    } else {
      let num = 0
      while (i < n && s[i] !== ' ' && !isNaN(Number(s[i]))) {
        num = num * 10 + Number(s[i])
        i++
      }
      res += sign * num
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "1 + 1"\n
// @lcpr case=end

// @lcpr case=start
// " 2-1 + 2 "\n
// @lcpr case=end

// @lcpr case=start
// "(1+(4+5+2)-3)+(6+8)"\n
// @lcpr case=end

 */

