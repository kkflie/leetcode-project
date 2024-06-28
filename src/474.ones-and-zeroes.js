/*
 * @lc app=leetcode.cn id=474 lang=javascript
 * @lcpr version=30204
 *
 * [474] 一和零
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i < strs.length; i++) {
    const arr = strs[i].split('')
    const x = arr.filter((e) => e === '0').length
    const y = arr.filter((e) => e === '1').length
    for (let j = m;j >= x; j--) {
      for (let k = n;k >= y; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - x][k - y] + 1)
      }
    }
    // console.log(dp)
  }
  return dp[m][n]
};
// @lc code=end



/*
// @lcpr case=start
// ["10", "0001", "111001", "1", "0"]\n5\n3\n
// @lcpr case=end

// @lcpr case=start
// ["10", "0", "1"]\n1\n1\n
// @lcpr case=end

 */

