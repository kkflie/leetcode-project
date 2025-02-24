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
  let offset = 0
  let count = 1
  const res = new Array(n).fill(undefined)
    .map(() => new Array(n))
  const loop = Math.floor(n / 2)
  while (offset < loop) {
    while(j < n - 1 - offset) {
      res[i][j++] = count++
    }
    while(i < n - 1 - offset) {
      res[i++][j] = count++
    }
    while(j > offset) {
      res[i][j--] = count++
    }
    while(i > offset) {
      res[i--][j] = count++
    }
    offset++
    i = j = offset
  }
  if (n % 2) res[loop][loop] = count
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

