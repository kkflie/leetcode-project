/*
 * @lc app=leetcode.cn id=647 lang=javascript
 * @lcpr version=30204
 *
 * [647] 回文子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  // review
  const n = s.length
  let res = 0
  const dp = new Array(n + 1).fill(undefined).map(() => new Array(n + 1).fill(false))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          res++
          dp[i][j] = true
        } else if (dp[i + 1][j - 1]) {
          res++
          dp[i][j] = true
        }
      }
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "abc"\n
// @lcpr case=end

// @lcpr case=start
// "aaa"\n
// @lcpr case=end

 */

