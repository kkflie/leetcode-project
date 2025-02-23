/*
 * @lc app=leetcode.cn id=2218 lang=javascript
 * @lcpr version=30204
 *
 * [2218] 从栈中取出 K 个硬币的最大面值和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  let f = new Array(k + 1).fill(-1);
  f[0] = 0;
  for (let pile of piles) {
      for (let i = k; i > 0; i--) {
          let value = 0;
          for (let t = 1; t <= pile.length; t++) {
              value += pile[t - 1];
              if (i >= t && f[i - t] !== -1) {
                  f[i] = Math.max(f[i], f[i - t] + value);
              }
          }
      }
  }
  return f[k];
};
// @lc code=end
const res = maxValueOfCoins([
  [37,88],
  [51,64,65,20,95,30,26],
  [9,62,20],
  [44]
], 9)
console.log(res)


/*
// @lcpr case=start
// [[1,100,3],[7,8,9]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]]\n7\n
// @lcpr case=end

 */

