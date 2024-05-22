/*
 * @lc app=leetcode.cn id=409 lang=javascript
 * @lcpr version=30202
 *
 * [409] 最长回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const dic = {}
  for (let i = 0; i < s.length; i++) {
    if (!dic[s[i]]) {
      dic[s[i]] = 1
    } else {
      dic[s[i]]++
    }
  }
  let res = 0
  let alone = false
  for (let key in dic) {
    if (dic[key] % 2 === 0) {
      res += dic[key]
      allAlone = false
    } else {
      if (!alone) {
        alone = true
        res += dic[key]
      } else {
        res += dic[key] - 1
      }
    }
  }
  return res
};
module.exports = longestPalindrome
// @lc code=end



/*
// @lcpr case=start
// "abccccdd"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

// @lcpr case=start
// "aaaaaccc"\n
// @lcpr case=end

 */

