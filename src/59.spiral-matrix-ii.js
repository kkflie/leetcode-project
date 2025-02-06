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
  let i = j = 0
  let mid = loop = n>>1
  // let loop = 1
  let res = new Array(n).fill(undefined).map(() => new Array(n))
  let count = 1
  let offset = 0
  while (loop--) {
    i = j = offset
    while (j < n - offset - 1) {
      res[i][j++] = count++
    }
    // console.log(res)
    while (i < n - offset - 1) {
      res[i++][j] = count++
    }
    // console.log(res)
    while (j > offset) {
      res[i][j--] = count++
    }
    // console.log(res)
    while(i > offset) {
      res[i--][j] = count++
    }
    // console.log(res)
    offset++
  }
  if (n%2) {
    res[mid][mid]=count
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

