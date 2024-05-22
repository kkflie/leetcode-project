/*
 * @lc app=leetcode.cn id=455 lang=javascript
 * @lcpr version=30202
 *
 * [455] 分发饼干
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let res = 0
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  let k = 0
  for (let i = 0; i < g.length; i++) {
    if (k === s.length) {
      return res
    }
    if (s[k] >= g[i]) {
      res++
      k++
    }
  }
  return res
};
module.exports = findContentChildren
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n[1,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[1,2,3]\n
// @lcpr case=end

 */

