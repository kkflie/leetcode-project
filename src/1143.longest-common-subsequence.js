/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 * @lcpr version=30204
 *
 * [1143] 最长公共子序列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  // review
  const nums1 = text1.split('')
  const nums2 = text2.split('')
  const m = nums1.length, n = nums2.length
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0))
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j - 1]) + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
      res = Math.max(res, dp[i][j])
    }
  }
  console.log(dp)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "abcde"\n"ace"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"def"\n
// @lcpr case=end

 */

