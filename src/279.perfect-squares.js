/*
 * @lc app=leetcode.cn id=279 lang=javascript
 * @lcpr version=30204
 *
 * [279] 完全平方数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  const len = Math.floor(Math.sqrt(n))
  const nums = new Array(len).fill(undefined).map((_, i) => (i + 1) * (i + 1))
  // console.log(nums)
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 0; i < nums.length; i++) {
    dp[nums[i]] = 1
    for (let j = nums[i]; j <= n; j++) {
      if (dp[j] === Number.MAX_SAFE_INTEGER) {
        dp[j] = dp[j - nums[i]] + 1
      } else {
        dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1)
      }
    }
    // console.log(dp)
  }
  return dp[n] >= Number.MAX_SAFE_INTEGER ? 0 : dp[n]
};
// @lc code=end



/*
// @lcpr case=start
// 12\n
// @lcpr case=end

// @lcpr case=start
// 13\n
// @lcpr case=end

 */

