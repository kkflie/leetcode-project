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
  const n = prices.length
  let max = 0, cost = -prices[0]
  // 0 代表持有 1 代表不持有
  for (let i = 1; i < n; i++) {
    max = Math.max(max, cost + prices[i])
    cost = Math.max(cost, -prices[i])
  }
  return max
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

