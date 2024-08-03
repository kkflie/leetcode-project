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
  const n = s.length
  backTrack(0)
  return res
  function backTrack(start) {
    if (start >= n) {
      res.push([...path])
      // console.log('res', path)
      return
    }
    for (let i = start; i < n; i++) {
      if (isPalindrome(s, start, i)) {
        path.push(s.slice(start, i + 1))
        // console.log('path', path)
        backTrack(i + 1)
        path.pop()
      } else {
        continue
      }
    }
  }  
  function isPalindrome(s, start, end) {
    let i = start, j = end
    while (i <= j) {
      if (s[i] !== s[j]) {
        return false
      }
      i++
      j--
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

