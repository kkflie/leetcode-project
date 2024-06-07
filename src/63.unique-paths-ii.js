/*
 * @lc app=leetcode.cn id=63 lang=javascript
 * @lcpr version=30203
 *
 * [63] 不同路径 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const dp = obstacleGrid
  const m = dp.length
  const n = dp[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j< n; j++) {
      if (dp[i][j] === 1) {
        dp[i][j] = 0
      } else if (i===0) {
        dp[i][j] = j === 0 ? 1 : dp[i][j-1]
      } else if (j === 0) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j-1]
      }
    }
  }
  // console.log(dp)
  return dp[m-1][n-1]
};
// @lc code=end



/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[0,0]]\n
// @lcpr case=end

 */

