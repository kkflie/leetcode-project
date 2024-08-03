/*
 * @lc app=leetcode.cn id=3033 lang=javascript
 * @lcpr version=30204
 *
 * [3033] 修改矩阵
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const arr = new Array(n).fill(-1)
  const res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        res.push([i, j])
        continue
      }
      if (matrix[i][j] > arr[j]) {
        arr[j] = matrix[i][j]
      }
    }
  }
  res.forEach((p) => {
    const [i, j] = p
    matrix[i][j] = arr[j]
  })
  return matrix
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,-1],[4,-1,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,-1],[5,2]]\n
// @lcpr case=end

 */

