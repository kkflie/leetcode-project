/*
 * @lc app=leetcode.cn id=44 lang=javascript
 * @lcpr version=30204
 *
 * [44] 通配符匹配
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // review
  const m = s.length, n = p.length
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 1; i <= n; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = true
    } else {
      break
    }
  }
  // console.log(dp)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }
  // console.log(dp)
  return dp[m][n]
};
// @lc code=end



/*
// @lcpr case=start
// "aa"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"*"\n
// @lcpr case=end

// @lcpr case=start
// "cb"\n"?a"\n
// @lcpr case=end

 */

