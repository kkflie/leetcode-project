/*
 * @lc app=leetcode.cn id=242 lang=javascript
 * @lcpr version=30204
 *
 * [242] 有效的字母异位词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const mp = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!mp.has(s[i])) {
      mp.set(s[i], 0)
    }
    mp.set(s[i], mp.get(s[i]) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    if (!mp.get(t[i]) || mp.get(t[i]) < 1) {
      return false
    } else {
      mp.set(t[i], mp.get(t[i]) - 1)
    }
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */

