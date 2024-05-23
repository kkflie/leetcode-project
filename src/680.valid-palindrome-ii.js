/*
 * @lc app=leetcode.cn id=680 lang=javascript
 * @lcpr version=30202
 *
 * [680] 验证回文串 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0
  let j = s.length - 1
  let flag = true
  if (s.length === 2) {
    return s[i] === s[j]
  }
  while (i < j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else {
      return validPalindrome(s.slice(i, j-1)) || validPalindrome(s.slice(i+1, j))
    }
  }
  return j > i
  // if (!flag) {

  // } else {
  //   return true
  // }
};
module.exports = validPalindrome
// @lc code=end



/*
// @lcpr case=start
// "aba"\n
// @lcpr case=end

// @lcpr case=start
// "abca"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n
// @lcpr case=end

 */

