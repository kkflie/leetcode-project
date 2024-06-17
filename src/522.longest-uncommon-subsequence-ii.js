/*
 * @lc app=leetcode.cn id=522 lang=javascript
 * @lcpr version=30203
 *
 * [522] 最长特殊序列 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  let res = -1
  for (let i = 0; i < strs.length; i++) {
    let flag = true
    for (let j = 0; j < strs.length; j++) {
      if (i === j) {
        continue
      }
      if (isSubString(strs[j], strs[i])) {
        flag = false
        break
      }
    }
    if (flag) {
      res = Math.max(res, strs[i].length)
    }
  }
  function isSubString(a, b) {
    let i = 0
    let j = 0
    while(i < a.length && j < b.length) {
      if (a[i] === b[j]) {
        j++
      }
      i++
    }
    return j === b.length
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// ["aba","cdc","eae"]\n
// @lcpr case=end

// @lcpr case=start
// ["aaa","aaa","aa"]\n
// @lcpr case=end

 */

