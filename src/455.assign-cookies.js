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
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let res = 0, j = 0
  for (let i = 0; i < g.length && j < s.length; i++) {
    if (g[i] <= s[j]) {
      res++
      j++
      continue
    }
    while (g[i] > s[j] && j < s.length) {
      j++
    }
    if (j < s.length) {
      res++
      j++
    } else {
      return res
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

