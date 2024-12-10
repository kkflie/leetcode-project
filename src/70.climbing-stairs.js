/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30203
 *
 * [70] 爬楼梯
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 4) return n
  let dp = [2, 3]
  for (let i = 4; i <= n; i++) {
    dp = [dp[1], dp[0] + dp[1]]
  }
  return dp[1]
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

