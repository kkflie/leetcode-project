/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30201
 *
 * [9] 回文数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  let s = x + ''
  while(s.length) {
    const head = s[0]
    const tail = s[s.length - 1]
    if (head !== tail && tail !== undefined) {
      return false
    }
    if (s.length <=1) {
      return true
    }
    s = s.slice(1, s.length - 1)
  }
  return true
};
module.exports = isPalindrome
// @lc code=end



/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

