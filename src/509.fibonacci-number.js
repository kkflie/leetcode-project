/*
 * @lc app=leetcode.cn id=509 lang=javascript
 * @lcpr version=30203
 *
 * [509] 斐波那契数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) {
    return n
  }
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    const sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }
  return dp[1]
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */

