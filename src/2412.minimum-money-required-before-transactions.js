/*
 * @lc app=leetcode.cn id=2412 lang=javascript
 * @lcpr version=30204
 *
 * [2412] 完成所有交易的初始最少钱数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
  const n = transactions.length
  transactions.sort((a,b) => b[0]-a[0])
  console.log(transactions)
  const dp = new Array(n).fill(0)
  dp[n - 1] = transactions[n - 1][0]
  for (let i = n - 2; i >= 0; i--) {
    const [cost ,callback] = transactions[i]
    const val = dp[i + 1] + cost - callback
    if (val < cost) {
      dp[i] = cost
    } else {
      dp[i] = val
    }
  }
  console.log(dp)
  return dp[0]
};
// @lc code=end



/*
// @lcpr case=start
// [[2,1],[5,0],[4,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,0],[0,3]]\n
// @lcpr case=end

 */

