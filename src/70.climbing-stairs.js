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
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    const temp = dp[1]
    dp[1] = dp[0] + dp[1]
    dp[0] = temp
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

