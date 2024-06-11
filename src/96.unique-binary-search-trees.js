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
  const dp =[0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = 0
    dp[i] += 2 * dp[i - 1] 
    for (let j = 2; j < i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
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

