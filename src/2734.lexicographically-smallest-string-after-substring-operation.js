/*
 * @lc app=leetcode.cn id=2734 lang=javascript
 * @lcpr version=30204
 *
 * [2734] 执行子串操作后的字典序最小字符串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
  if (s === 'a') return 'z'
  let res = ''
  let flag = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      if (flag) {
        return res + s.slice(i)
      }
      if (i === s.length - 1) {
        return res + 'z'
      } else {
          res += s[i]
        continue
      }
    }
    res += String.fromCharCode(s.charCodeAt(i) - 1)
    flag = true
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "cbabc"\n
// @lcpr case=end

// @lcpr case=start
// "acbbc"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

 */

