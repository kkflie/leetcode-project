/*
 * @lc app=leetcode.cn id=2959 lang=javascript
 * @lcpr version=30204
 *
 * [2959] 关闭分部的可行集合数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number} maxDistance
 * @param {number[][]} roads
 * @return {number}
 */
var numberOfSets = function(n, maxDistance, roads) {
  const count= 0
  // 不关闭任何分部
  const dp = new Array(n).fill(undefined).map(() => new Array(n - 1).fill(Number.MAX_SAFE_INTEGER))
  for (let i = 0; i < roads.length; i++) {
    const [j, k, w] = roads[i]
    dp[j][k] = Math.min(dp[j][k], w)
  }
  for (let i = 1; i < n - 1; i++) {
    // 关闭 i 个分部
    // for ()
  }
  count += n + 1
  return count
};
// @lc code=end



/*
// @lcpr case=start
// 3\n5\n[[0,1,2],[1,2,10],[0,2,10]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n5\n[[0,1,20],[0,1,10],[1,2,2],[0,2,2]]\n
// @lcpr case=end

// @lcpr case=start
// 1\n10\n[]\n
// @lcpr case=end

 */

