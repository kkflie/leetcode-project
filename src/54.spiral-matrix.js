/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30204
 *
 * [54] 螺旋矩阵
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let i = j = 0 
  let offset = 0
  const res = []
  const h = matrix.length
  const w = matrix[0].length
  const loopX = w >> 1
  const loopY = h >> 1
  while (offset < loopX && offset < loopY) {
    while (j < w - 1 - offset) {
      res.push(matrix[i][j++])
    }
    while (i < h - 1 - offset) {
      res.push(matrix[i++][j])
    }
    while (j > offset) {
      res.push(matrix[i][j--])
    }
    while (i > offset) {
      res.push(matrix[i--][j])
    }
    offset++
    i = offset
    j = offset
  }
  if (w % 2) {
    while (i <= h - 1 - offset) {
      res.push(matrix[i++][j])
    }
    i--
    j++
  }
  if (h % 2) {
    while (j <= w - 1 - offset) {
      res.push(matrix[i][j++])
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */

