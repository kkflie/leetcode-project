/*
 * @lc app=leetcode.cn id=62 lang=javascript
 * @lcpr version=30203
 *
 * [62] 不同路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = new Array(n + 1).fill(1)
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      dp[j] = dp[j] + dp[j - 1]
    }
  }
  return dp[n]
};
// @lc code=end



/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

// @lcpr case=start
// 7\n3\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n
// @lcpr case=end

 */

