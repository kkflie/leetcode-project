/*
 * @lc app=leetcode.cn id=746 lang=javascript
 * @lcpr version=30203
 *
 * [746] 使用最小花费爬楼梯
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // review
  if (cost.length < 2) return 0
  const dp = [0, 0]
  for (let i = 2; i <= cost.length; i++) {
    const m = Math.min(dp[0] + cost[i - 2], dp[1] + cost[i - 1])
    dp[0] = dp[1]
    dp[1] = m
  }
  return dp[1]
};
// @lc code=end



/*
// @lcpr case=start
// [10,15,20]\n
// @lcpr case=end

// @lcpr case=start
// [1,100,1,1,1,100,1,1,100,1]\n
// @lcpr case=end

 */

