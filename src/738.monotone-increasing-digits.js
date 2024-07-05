/*
 * @lc app=leetcode.cn id=738 lang=javascript
 * @lcpr version=30204
 *
 * [738] 单调递增的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
  // review
  let s = ('' + n).split('')
  let flag = s.length
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] - s[i - 1] < 0) {
      flag = i
      s[i - 1] = s[i - 1] - 1
    }
  }
  for (let i = flag; i < s.length; i++) {
    s[i] = '9'
  }
  return s.join('') - 0
};
// @lc code=end



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 1234\n
// @lcpr case=end

// @lcpr case=start
// 332\n
// @lcpr case=end

 */

