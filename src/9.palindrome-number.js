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
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false
  }
  let reversedNumber = 0
  while(x > reversedNumber) {
    reversedNumber = reversedNumber * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return x === reversedNumber || x === Math.floor(reversedNumber / 10)
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

