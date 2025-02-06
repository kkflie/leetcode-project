/*
 * @lc app=leetcode.cn id=135 lang=javascript
 * @lcpr version=30204
 *
 * [135] 分发糖果
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const n = ratings.length
  if (n === 1) return 1
  const res = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      res[i] = Math.max(res[i], res[i + 1] + 1)
    }
  }
  return res.reduce((cur, pre) => cur + pre)
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

 */

