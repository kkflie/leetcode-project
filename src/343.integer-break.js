/*
 * @lc app=leetcode.cn id=343 lang=javascript
 * @lcpr version=30203
 *
 * [343] 整数拆分
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1 
  for (let i = 3; i <= n; i++) {
    const n2 = i >> 1
    dp[i] = n2 * (i - n2)
    for (let j = 2; j <= n2; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j)
    }
  }
  return dp[n]
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

