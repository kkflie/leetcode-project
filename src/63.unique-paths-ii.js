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
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = new Array(n).fill(1)
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      dp[j] = 0
    } else {
      dp[j] = j === 0 ? 1 : dp[j - 1]
    }
  }
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[0] = 0
    }
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
      } else {
        dp[j] += dp[j - 1]
      }
    }
  }
  return dp[n - 1]
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

