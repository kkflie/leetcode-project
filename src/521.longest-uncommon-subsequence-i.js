/*
 * @lc app=leetcode.cn id=521 lang=javascript
 * @lcpr version=30203
 *
 * [521] 最长特殊序列 Ⅰ
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  const len1 = a.length
  const len2 = b.length
  if (len1 !== len2) {
    return len1 > len2 ? len1 : len2
  }
  if (a === b) {
    return -1
  }
  return len1
};
// @lc code=end



/*
// @lcpr case=start
// "aba"\n"cdc"\n
// @lcpr case=end

// @lcpr case=start
// "aaa"\n"bbb"\n
// @lcpr case=end

// @lcpr case=start
// "aaa"\n"aaa"\n
// @lcpr case=end

 */

