/*
 * @lc app=leetcode.cn id=2275 lang=javascript
 * @lcpr version=30204
 *
 * [2275] 按位与结果大于零的最长组合
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  function maxLen(k) {
    let res = 0
    const base = 1 << k
    for (let num of candidates) {
      if (num & base) {
        res++
      }
    }
    return res
  }
  let res = 0
  for (let i = 0; i < 24; i++) {
    res = Math.max(res, maxLen(i))
  }
  return res
};
// @lc code=end

// console.log(77&78)

/*
// @lcpr case=start
// [16,17,71,62,12,24,14]\n
// @lcpr case=end

// @lcpr case=start
// [8,8]\n
// @lcpr case=end

 */

