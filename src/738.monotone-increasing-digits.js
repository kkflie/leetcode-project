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
  if (n < 10) return n
  const arr = (n + '').split('')
  const len = arr.length
  let start
  for (let i = len - 1; i > 0; i--) {
    if (arr[i] - arr[i - 1] < 0) {
      start = i - 1
      arr[i - 1]--
    }
  }
  // console.log(start)
  for (let i = start + 1; i < len; i++) {
    arr[i] = '9'
  }
  return arr.join('') - 0
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

