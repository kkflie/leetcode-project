/*
 * @lc app=leetcode.cn id=763 lang=javascript
 * @lcpr version=30204
 *
 * [763] 划分字母区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const n = s.length
  const hash = new Array(27).fill(0)
  const aCode = 'a'.charCodeAt(0)
  const res = []
  for (let i = 0; i < n; i++) {
    const c = s[i]
    hash[c.charCodeAt(0) - aCode] = i
  }
  let left = 0, right = 0
  for (let i = 0; i < n; i++) {
    const c = s[i]
    right = Math.max(right, hash[c.charCodeAt(0) - aCode])
    if (i === right) {
      res.push(right - left + 1)
      left = right + 1
    }
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// "ababcbacadefegdehijhklij"\n
// @lcpr case=end

// @lcpr case=start
// "eccbbbbdec"\n
// @lcpr case=end

 */

