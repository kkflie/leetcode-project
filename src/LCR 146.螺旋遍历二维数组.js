/*
 * @lc app=leetcode.cn id=LCR 146 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 146] 螺旋遍历二维数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function(array) {
  if (!array.length) return array
  const matrix = array
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
// [[1,2,3],[8,9,4],[7,6,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]\n
// @lcpr case=end

 */

