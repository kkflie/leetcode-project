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
  const dp = new Array(m).map(() => new Array(n))
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      dp[i] = new Array(n).fill(1)
      continue
    }
    for (let j = 0; j < n; j++) {
      if (j === 0)
    }
  }
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

