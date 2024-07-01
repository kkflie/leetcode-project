/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=30204
 *
 * [121] 买卖股票的最佳时机
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 动态规划review
  const dp = new Array(prices.length).fill([0, 0])
  dp[0] = [0 - prices[0], 0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  return dp[prices.length - 1][1]
};
// @lc code=end



/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

