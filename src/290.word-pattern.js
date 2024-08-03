/*
 * @lc app=leetcode.cn id=290 lang=javascript
 * @lcpr version=30204
 *
 * [290] 单词规律
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sarr = s.split(' ')
  if (sarr.length !== pattern.length) return false
  const map = {}
  const map2 = {}
  for (let i = 0; i < sarr.length; i++) {
    const word = sarr[i]
    const c = pattern[i]
    if (!map2['-'+word]) {
      map2['-'+word] = c
    } else {
      if (map2['-'+word] !== c) {
        return false
      }
    }
    if (!map[c]) {
      map[c] = word
    } else {
      if (map[c] !== word) {
        return false
      }
    }
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// "abba"\n"dog cat cat dog"\n
// @lcpr case=end

// @lcpr case=start
// "abba"\n"dog cat cat fish"\n
// @lcpr case=end

// @lcpr case=start
// "aaaa"\n"dog cat cat dog"\n
// @lcpr case=end

 */

