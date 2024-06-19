/*
 * @lc app=leetcode.cn id=2713 lang=javascript
 * @lcpr version=30204
 *
 * [2713] 矩阵中严格递增的单元格数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function(mat) {
  const m = mat.length
  const n = mat[0].length
  const row = new Array(m).fill(0)
  const col = new Array(n).fill(0)
  const dic = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = mat[i][j]
      if (!dic.has(num)) {
        dic.set(num, [])
      }
      dic.get(num).push([i, j])
    }
  }
  const sortDic = new Map([...dic.entries()].sort((a, b) => a[0] - b[0]))
  for (const [_, pos] of sortDic) {
    const res = pos.map(([i, j]) => Math.max(row[i], col[j]) + 1)
    for (let k = 0; k < pos.length; k++) {
      const [i, j] = pos[k]
      const d = res[k]
      row[i] = Math.max(row[i], d)
      col[j] = Math.max(col[j], d)
    }
  }
  return Math.max(...row)
  
};
// @lc code=end



/*
// @lcpr case=start
// [[3,1],[3,4]]\len
// @lcpr case=end

// @lcpr case=start
// [[1,1],[1,1]]\len
// @lcpr case=end

// @lcpr case=start
// [[3,1,6],[-9,5,7]]\len
// @lcpr case=end

 */

