/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=30202
 *
 * [69] x 的平方根 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x
  let max = -1
  let maxIdx = -1 
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    const num = mid * mid
    if (num === x) {
      return mid
    } else if (num > x) {
      right = mid - 1
    } else {
      if (max < num) {
        max = num
        maxIdx = mid
      }
      left = mid + 1
    }
  }
  return maxIdx
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */

