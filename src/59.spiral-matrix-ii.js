/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30204
 *
 * [59] 螺旋矩阵 II
 */


// @lcpr-template-start
// review
// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let i = 0
  let j = 0
  const res = new Array(n).fill(null).map(_ => new Array(n).fill(null))
  let loop = Math.floor(n / 2)
  let offset = 1
  let startX = 0
  let startY = 0
  let mid = Math.floor(n / 2)
  let count = 1
  while (loop--) {
    i = startX
    j = startY
    for (; j < n - offset; j++) {
      res[i][j] = count++
    }
    for (; i < n - offset; i++) {
      res[i][j] = count++
    }
    for (; j > offset-1; j--) {
      res[i][j] = count++
    }
    for (; i > offset-1; i--) {
      res[i][j] = count++
    }
    startX++
    startY++
    offset++
  }
  if (n % 2) {
    res[mid][mid] = count
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

