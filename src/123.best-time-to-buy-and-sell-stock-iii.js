/*
 * @lc app=leetcode.cn id=123 lang=javascript
 * @lcpr version=30204
 *
 * [123] 买卖股票的最佳时机 III
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
  const n = prices.length, dp = [0, 0, 0, 0]
  dp[0] = dp[2] = -prices[0]
  for (let i = 1; i < n; i++) {
    dp[0] = Math.max(dp[0],  - prices[i])
    dp[1] = Math.max(dp[0] + prices[i], dp[1])
    dp[2] = Math.max(dp[1] - prices[i], dp[2])
    dp[3] = Math.max(dp[2] + prices[i], dp[3])
  }
  return dp[3]
};
// @lc code=end



/*
// @lcpr case=start
// [3,3,5,0,0,3,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

