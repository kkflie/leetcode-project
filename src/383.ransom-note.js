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
  const map = {}
  for (let i of magazine) {
    map[i] = (map[i] || 0) + 1
  }
  for (let i of ransomNote) {
    if (map[i] === undefined) return false
    if (map[i] === 0) return false
    map[i]--
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

