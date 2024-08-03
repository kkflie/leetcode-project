/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30204
 *
 * [5] 最长回文子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // review
  if (s.length < 2) return s
  if (s.length < 3) {
    if (s[0] === s[1]) return s
    return s[0]
  }
  const n = s.length
  const dp = new Array(n).fill(undefined).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }
  let max = 1
  let begin = -1
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = j - i + 1
        } else if(dp[i + 1][j - 1] > 0) {
          dp[i][j] = dp[i + 1][j - 1] + 2
        }
        if (dp[i][j] > max) {
          begin = i
          max = dp[i][j]
        }
      }
    }
  }
  // console.log(begin ,max)
  if (max < 2) return s[0]
  return s.slice(begin, begin+ max)
};
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

