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
  let i = 0, j = x, mid, res = -1
  while (i <= j) {
    mid = (i + j) >> 1
    if (mid * mid <= x) {
      res = mid
      i = mid + 1
    } else j = mid - 1
  }
  return res
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

