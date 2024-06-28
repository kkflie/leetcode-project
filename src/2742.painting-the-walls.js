/*
 * @lc app=leetcode.cn id=2742 lang=javascript
 * @lcpr version=30204
 *
 * [2742] 给墙壁刷油漆
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
  // review
  const n = cost.length
  let f = new Array(2 * n + 1).fill(Number.MAX_SAFE_INTEGER / 2)
  f[n] = 0
  for (let i = 0; i < n; i++) {
    const g = new Array(2 * n + 1).fill(Number.MAX_SAFE_INTEGER / 2)
    for (let j = 0; j <= n * 2; j++) {
      const idx = Math.min(j + time[i], 2 * n)
      g[idx] = Math.min(g[idx], f[j] + cost[i])
      if (j > 0) {
        g[j - 1] = Math.min(g[j -1], f[j])
      }
    }
    f = g.slice()
  }
  return Math.min(...f.slice(n))
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,2]\n[1,2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4,2]\n[1,1,1,1]\n
// @lcpr case=end

 */

