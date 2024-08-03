/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30204
 *
 * [125] 验证回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const n = s.length
  let i = 0, j = n - 1
  while(i < j) {
    while(!isChar(s[i])) {
      i++
    }
    while(!isChar(s[j])) {
      j--
    }
    if (i > j) {
      return true
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false
    }
    i++
    j--
  }
  return true
  function isChar(char) {
    return /[a-zA-Z0-9]/.test(char)
  }
};
// @lc code=end



/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

