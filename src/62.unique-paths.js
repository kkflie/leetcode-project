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
  let i = 0
  let j = 1
  const dp = new Array(m).fill(0).map(() => new Array(n))
  dp[0][0] = 1
  while (j < n) {
    dp[0][j] = 1
    j++
  }
  i=1
  while(i < m) {
    dp[i][0] = 1
    j = 1
    while(j < n) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      j++
    }
    i++
  }
  return dp[m-1][n-1]
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

