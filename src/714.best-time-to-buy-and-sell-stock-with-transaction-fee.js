/*
 * @lc app=leetcode.cn id=714 lang=javascript
 * @lcpr version=30204
 *
 * [714] 买卖股票的最佳时机含手续费
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const dp = new Array(2).fill(0)
  dp[0] = -prices[0]
  for (let i = 0; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i])
    dp[1] = Math.max(dp[1], dp[0] + prices[i] - fee)
  }
  return Math.max(...dp)
};
// @lc code=end



/*
// @lcpr case=start
// [1, 3, 2, 8, 4, 9]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,7,5,10,3]\n3\n
// @lcpr case=end

 */

