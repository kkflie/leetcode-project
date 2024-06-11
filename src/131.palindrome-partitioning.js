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
  function backTrack(start) {
    if (start >= s.length) {
      res.push([...path])
      return
    }
    for (let i = start; i < s.length; i++) {
      const s1 = s.slice(start, i + 1)
      if (IsPalindrome(s1)) {
       path.push(s1)
      } else {
        continue
      }
      backTrack(i + 1)
      path.pop()
    } 
  }
  function IsPalindrome(s) {
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      if (s[i] !== s[j]) {
        return false
      }
    }
    return true
  }

  backTrack(0)
  return res
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

