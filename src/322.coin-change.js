/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * @lcpr version=30204
 *
 * [322] 零钱兑换
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount < 0) return -1
  if (amount === 0) return 0
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  // console.log('p', dp)
  for (let i = 0; i < coins.length; i++) {
    dp[coins[i]] = 1
    for (let j = coins[i]; j <= amount; j++) {
      if (dp[j] === Number.MAX_SAFE_INTEGER) {
        dp[j] = dp[j - coins[i]] + 1
      } else {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
    // console.log(dp)
  }
  return dp[amount] >= Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};
// @lc code=end



/*
// @lcpr case=start
// [1, 2, 5]\n11\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */

