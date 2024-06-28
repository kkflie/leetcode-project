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
  const dp = new Array(n).fill(1)
  let j
  let i = 1
  while(i < m) {
    j = 1
    while(j < n) {
      dp[j] = dp[j] + dp[j - 1]
      j++
    }
    i++
  }
  return dp[n - 1]
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

