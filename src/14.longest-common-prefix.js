/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30201
 *
 * [14] 最长公共前缀
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let minStr = strs[0]
  let minIndex = 0
  for(let i = 1; i < strs.length; i++) {
    const str = strs[i]
    if (str.length < minStr.length) {
      minStr = str
      minIndex = i
    }
  }
  let res = ''
  for (let i = 0; i < strs.length; i++) {
    if (i === minIndex) {
      continue
    }
    const str = strs[i]
    let j = 0
    while(j < minStr.length && j < str.length) {
      if (minStr[j] === str[j]) {
        j++
        if (j > res.length) {
          res = minStr.slice(0, j)
        }
      } else {
        if (j <= res.length) {
          res = j > 0 ? minStr.slice(0, j) : ''
          minStr = res
        }
        break
      }
    }
  }
  return minStr
};
module.exports = longestCommonPrefix
// @lc code=end



/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */

