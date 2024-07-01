/*
 * @lc app=leetcode.cn id=309 lang=javascript
 * @lcpr version=30204
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // review
  const dp = new Array(4).fill(0)
  dp[0] = - prices[0]
  for (let i = 1; i < prices.length; i++) {
    const tmp0 = dp[0]
    const tmp2 = dp[2]
    dp[0] = Math.max(dp[0], Math.max(dp[1], dp[3]) - prices[i])
    dp[1] = Math.max(dp[1], dp[3])
    dp[2] = tmp0 + prices[i]
    dp[3] = tmp2
  }
  return Math.max(...dp)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

