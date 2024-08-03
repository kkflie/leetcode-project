/*
 * @lc app=leetcode.cn id=96 lang=javascript
 * @lcpr version=30203
 *
 * [96] 不同的二叉搜索树
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[i - j] * dp[j - 1]
    }
  }
  return dp[n]
};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

