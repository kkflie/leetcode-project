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
  const dp = [0, 0], n = cost.length
  for (let i = 2; i <= n; i++) {
    const temp = dp[1]
    dp[1] = Math.min(dp[0] + cost[i - 2], dp[1] + cost[i - 1])
    dp[0] = temp
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

