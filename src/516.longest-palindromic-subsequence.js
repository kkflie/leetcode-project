/*
 * @lc app=leetcode.cn id=516 lang=javascript
 * @lcpr version=30204
 *
 * [516] 最长回文子序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  // review
  const n = s.length
  const dp = new Array(n + 1).fill(undefined).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  // console.log(dp)
  return dp[0][n - 1]
};
// @lc code=end



/*
// @lcpr case=start
// "bbbab"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

