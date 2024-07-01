/*
 * @lc app=leetcode.cn id=188 lang=javascript
 * @lcpr version=30204
 *
 * [188] 买卖股票的最佳时机 IV
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  // review
  const dp = new Array(1 + 2 * k).fill(0)
  for (let i = 1;i <= k; i++) {
    dp[2 * i - 1] = - prices[0]
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      dp[2 * j - 1] = Math.max(dp[2 * j - 1], dp[2 * j - 2] - prices[i])
      dp[2 * j] = Math.max(dp[2 * j], dp[2 * j - 1] + prices[i])
    }
  }
  return dp[2 * k]
};
// @lc code=end



/*
// @lcpr case=start
// 2\n[2,4,1]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[3,2,6,5,0,3]\n
// @lcpr case=end

 */

