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
  const dp = [0, 1, 2]
  if (n <= 2) {
    return dp[n]
  }
  for (let i = 3; i <= n; i++) {
    const sum = dp[1] + dp[2]
    dp[1] = dp[2]
    dp[2] = sum
  }
  console.log(dp)
  return dp[2]
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

