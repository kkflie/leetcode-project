/*
 * @lc app=leetcode.cn id=3128 lang=javascript
 * @lcpr version=30204
 *
 * [3128] 直角三角形
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function(grid) {
  // review
  const m = grid.length, n = grid[0].length
  const col = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      col[j] += grid[i][j]
    }
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    const row = grid[i].reduce((a, b) => a + b)
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        res += (row - 1) * (col[j] - 1)
      }
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[0,1,0],[0,1,1],[0,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0,0],[0,1,0,1],[1,0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,1],[1,0,0],[1,0,0]]\n
// @lcpr case=end

 */

