/*
 * @lc app=leetcode.cn id=383 lang=javascript
 * @lcpr version=30204
 *
 * [383] 赎金信
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  const mp = new Map()
  for (let i = 0; i < magazine.length; i++) {
    const c = magazine[i]
    mp.set(c, (mp.get(c) || 0) + 1)
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const c = ransomNote[i]
    if (!mp.has(c) || mp.get(c) < 1) {
      return false
    }
    mp.set(c, mp.get(c) - 1)
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// "a"\n"b"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"ab"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"aab"\n
// @lcpr case=end

 */

