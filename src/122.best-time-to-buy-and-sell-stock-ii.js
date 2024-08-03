/*
 * @lc app=leetcode.cn id=122 lang=javascript
 * @lcpr version=30204
 *
 * [122] 买卖股票的最佳时机 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 动态规划
  const n = prices.length
  let cost = -prices[0], profit = 0
  // 0代表持有 1代表不持有
  for (let i = 1; i < n; i++) {
    profit = Math.max(cost + prices[i], profit)
    cost = Math.max(cost, profit - prices[i])
  }
  return profit
  // 贪心
  // const n = prices.length
  // let sum = 0
  // for (let i = 1; i < n; i++) {
  //   const res = prices[i] - prices[i - 1]
  //   if (res > 0) {
  //     sum += res
  //   }
  // }
  // return sum
};
// @lc code=end



/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

