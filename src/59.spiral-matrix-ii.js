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
  // review
  const res = new Array(n).fill(undefined).map(() => new Array(n).fill(0))
  let count = 1
  let loop = Math.ceil(n / 2)
  let offset = 0
  let i = 0
  let j = 0
  while (loop--) {
    i = offset
    j = offset
    for (; j < n - offset; j++) {
      res[i][j] = count++
    }
    j--
    i++
    for (; i < n - offset; i++) {
      res[i][j] = count++
    }
    i--
    j--
    for (; j >= offset; j--) {
      res[i][j] = count++
    }
    j++
    i--
    for (; i > offset; i--) {
      res[i][j] = count++
    }
    offset++
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

