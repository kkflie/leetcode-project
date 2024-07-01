/*
 * @lc app=leetcode.cn id=115 lang=javascript
 * @lcpr version=30204
 *
 * [115] 不同的子序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  // review
  const [m, n] = [s.length, t.length]
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  // console.log(dp)
  return dp[m][n] 
};
// @lc code=end



/*
// @lcpr case=start
// "rabbbit"\n"rabbit"\n
// @lcpr case=end

// @lcpr case=start
// "babgbag"\n"bag"\n
// @lcpr case=end

 */

