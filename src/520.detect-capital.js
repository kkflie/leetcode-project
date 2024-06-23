/*
 * @lc app=leetcode.cn id=520 lang=javascript
 * @lcpr version=30204
 *
 * [520] 检测大写字母
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length < 2) return true
  if (word[0] >= 'A' && word[0] <= 'Z') {
    if (word[1] >= 'A' && word[1] <= 'Z') {
      return word.split('').every((e) => e >= 'A' && e <= 'Z')
    }
    return word.split('').slice(1).every((e) => e >= 'a' && e <= 'z')
  }
  return word.split('').every((e) => e >= 'a' && e <= 'z')
};
// @lc code=end



/*
// @lcpr case=start
// "USA"\n
// @lcpr case=end

// @lcpr case=start
// "FlaG"\n
// @lcpr case=end

 */

