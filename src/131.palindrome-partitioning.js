/*
 * @lc app=leetcode.cn id=131 lang=javascript
 * @lcpr version=30203
 *
 * [131] 分割回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = []
  const path = []
  backTrack(s, 0)
  return res
  function backTrack(s, left) {
    if (left >= s.length) {
      res.push([...path])
      return
    }
    for (let i = left; i < s.length; i++) {
      if (!isPalindrone(s, left, i)) continue
      path.push(s.slice(left, i + 1))
      backTrack(s, i + 1)
      path.pop()
    }
  }
  function isPalindrone(s, left, right) {
    for (let i = left, j = right; i < j; i++, j--) {
      if (s[i] !== s[j]) return false
    }
    return true
  }
};
// @lc code=end



/*
// @lcpr case=start
// "aab"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

 */

